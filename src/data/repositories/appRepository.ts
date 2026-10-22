import { db } from '../database/db';
import {
  Asset,
  Attempt,
  ConfidenceLevel,
  DecorationCatalogItem,
  InventoryItem,
  IslandPlacement,
  Mission,
  MistakeCategory,
  PersonalMessage,
  Question,
  QuestionGroup,
  ReviewItem,
  RewardTransaction,
  StudyPack,
  TOEICPart,
  UserProfile,
  UserSettings,
} from '../../domain/types';
import {
  CAT_MAIL_PACK,
  CAT_MAIL_QUESTIONS,
  DECORATION_CATALOG,
  DEFAULT_SETTINGS,
  INITIAL_MESSAGES,
  STARTER_GROUPS,
  STARTER_QUESTIONS,
  STARTER_STUDY_PACK,
  BUNDLED_PACKS,
} from '../seed/initialData';
import { formatDate, processReviewOutcome, createNewReviewItem } from '../../domain/scheduling/scheduling';
import { calculateBalance, createEarnedTransaction, REWARD_AMOUNTS } from '../../domain/rewards/rewards';

export class AppRepository {
  /**
   * Initializes the database with seed data if it's the first run.
   */
  async initializeDatabase(): Promise<void> {
    const packCount = await db.studyPacks.count();
    if (packCount === 0) {
      // Seed Study Packs
      await db.studyPacks.bulkAdd([STARTER_STUDY_PACK, CAT_MAIL_PACK]);
      await db.questionGroups.bulkAdd(STARTER_GROUPS);
      await db.questions.bulkAdd([...STARTER_QUESTIONS, ...CAT_MAIL_QUESTIONS]);

      // Seed Settings
      await db.settings.put({ id: 'user_settings', ...DEFAULT_SETTINGS });

      // Seed Personal Messages
      await db.messages.bulkAdd(INITIAL_MESSAGES);

      // Seed Default Inventory & Placements
      const starterInventory: InventoryItem = {
        id: 'inv-flower-bed-default',
        itemId: 'flower-bed',
        name: 'Vườn Hoa Tulip Đủ Màu',
        icon: '🌷',
        category: 'nature',
        unlockedAt: Date.now(),
      };
      await db.inventory.add(starterInventory);

      const defaultPlacements: IslandPlacement[] = [
        { slotId: 'slot-house-garden', itemId: 'flower-bed' },
        { slotId: 'slot-beach', itemId: null },
        { slotId: 'slot-dock', itemId: null },
        { slotId: 'slot-tree', itemId: null },
        { slotId: 'slot-yard', itemId: null },
      ];
      await db.placements.bulkAdd(defaultPlacements);

      // Give starter welcome drops
      const welcomeTx = createEarnedTransaction(
        15,
        'welcome-bonus',
        'Quà tặng chào mừng đến với Hòn Đảo TOEIC!'
      );
      await db.transactions.add(welcomeTx);
    }

    // ALWAYS auto-sync bundled packs from source code (new packs or updated questions)
    for (const item of BUNDLED_PACKS) {
      const existing = await db.studyPacks.get(item.pack.id);
      if (!existing) {
        // New study pack pushed to GitHub! Auto-import into user's library
        await db.studyPacks.put(item.pack);
        if (item.groups.length > 0) await db.questionGroups.bulkPut(item.groups);
        if (item.questions.length > 0) await db.questions.bulkPut(item.questions);
      } else if (item.pack.updatedAt > existing.updatedAt) {
        // Updated study pack! Refresh questions & groups without touching user attempts or reviews
        await db.studyPacks.put(item.pack);
        if (item.groups.length > 0) await db.questionGroups.bulkPut(item.groups);
        if (item.questions.length > 0) await db.questions.bulkPut(item.questions);
      }
    }

    // Remove retired demo listening questions from browsers seeded before this update.
    // Imported listening packs remain available for future content updates.
    await db.transaction('rw', [db.questions, db.questionGroups, db.reviewItems, db.studyPacks], async () => {
      const retired = await db.questions.where('packId').equals(STARTER_STUDY_PACK.id)
        .filter((q) => q.part <= 4).toArray();
      await db.questions.bulkDelete(retired.map((q) => q.id));
      await db.reviewItems.bulkDelete(retired.map((q) => q.id));
      await db.questionGroups.where('packId').equals(STARTER_STUDY_PACK.id)
        .filter((g) => g.part <= 4).delete();
      const remaining = await db.questions.where('packId').equals(STARTER_STUDY_PACK.id).toArray();
      await db.studyPacks.update(STARTER_STUDY_PACK.id, {
        title: STARTER_STUDY_PACK.title,
        description: STARTER_STUDY_PACK.description,
        partsIncluded: [...new Set(remaining.map((q) => q.part))],
        questionCount: remaining.length,
      });
    });

    // Ensure daily missions are populated for today
    await this.ensureDailyMissions();
  }

  // --- USER PROFILES & AUTH ---
  async getAllProfiles(): Promise<UserProfile[]> {
    return db.profiles.toArray();
  }

  async saveProfile(profile: UserProfile): Promise<void> {
    await db.profiles.put(profile);
    // Also update settings learnerName
    await this.updateSettings({
      learnerName: profile.name,
      partnerName: profile.partnerName,
      targetScore: profile.targetScore,
    });
    this.setActiveProfileId(profile.id);
  }

  async deleteProfile(id: string): Promise<void> {
    await db.profiles.delete(id);
    if (this.getActiveProfileId() === id) {
      this.setActiveProfileId(null);
    }
  }

  getActiveProfileId(): string | null {
    return localStorage.getItem('toeic_island_active_profile_id');
  }

  setActiveProfileId(id: string | null): void {
    if (id) {
      localStorage.setItem('toeic_island_active_profile_id', id);
    } else {
      localStorage.removeItem('toeic_island_active_profile_id');
    }
  }

  // --- SETTINGS ---
  async getSettings(): Promise<UserSettings> {
    const settings = await db.settings.get('user_settings');
    if (!settings) return DEFAULT_SETTINGS;
    return settings;
  }

  async updateSettings(partial: Partial<UserSettings>): Promise<void> {
    const current = await this.getSettings();
    await db.settings.put({ id: 'user_settings', ...current, ...partial });
  }

  // --- STUDY PACKS & QUESTIONS ---
  async getAllStudyPacks(): Promise<StudyPack[]> {
    return db.studyPacks.toArray();
  }

  async getStudyPackById(id: string): Promise<StudyPack | undefined> {
    return db.studyPacks.get(id);
  }

  async deleteStudyPack(id: string): Promise<void> {
    await db.transaction('rw', [db.studyPacks, db.questionGroups, db.questions], async () => {
      await db.studyPacks.delete(id);
      const groups = await db.questionGroups.where('packId').equals(id).toArray();
      await db.questionGroups.where('packId').equals(id).delete();
      await db.questions.where('packId').equals(id).delete();
    });
  }

  async getQuestionsByPart(part: TOEICPart): Promise<Question[]> {
    return db.questions.where('part').equals(part).toArray();
  }

  async getQuestionsByPack(packId: string): Promise<Question[]> {
    return db.questions.where('packId').equals(packId).toArray();
  }

  async getAllQuestions(): Promise<Question[]> {
    return db.questions.toArray();
  }

  async getQuestionsByIds(ids: string[]): Promise<Question[]> {
    return db.questions.where('id').anyOf(ids).toArray();
  }

  async getGroupById(groupId: string): Promise<QuestionGroup | undefined> {
    return db.questionGroups.get(groupId);
  }

  async getAllGroups(): Promise<QuestionGroup[]> {
    return db.questionGroups.toArray();
  }

  // --- ATTEMPTS ---
  async getActiveAttempt(): Promise<Attempt | undefined> {
    return db.attempts.filter((attempt) => !attempt.isFinished).first();
  }

  async saveAttempt(attempt: Attempt): Promise<void> {
    await db.attempts.put(attempt);
  }

  async getAttemptById(id: string): Promise<Attempt | undefined> {
    return db.attempts.get(id);
  }

  async getAllAttempts(): Promise<Attempt[]> {
    return db.attempts.orderBy('startedAt').reverse().toArray();
  }

  // --- REVIEW GARDEN ---
  async getDueReviewItems(todayStr: string = formatDate(new Date())): Promise<ReviewItem[]> {
    // Items due on or before today
    const items = await db.reviewItems.where('nextDueDate').belowOrEqual(todayStr).toArray();
    return items;
  }

  async getAllReviewItems(): Promise<ReviewItem[]> {
    return db.reviewItems.toArray();
  }

  async recordMistakeForReview(questionId: string, part: TOEICPart): Promise<void> {
    const existing = await db.reviewItems.get(questionId);
    if (!existing) {
      const newItem = createNewReviewItem(questionId, part);
      await db.reviewItems.put(newItem);
    } else {
      // already exists, increment mistake count
      await db.reviewItems.update(questionId, {
        mistakeCount: existing.mistakeCount + 1,
        state: 'due',
        nextDueDate: formatDate(new Date()), // due immediately
      });
    }
  }

  async submitReviewAnswer(
    questionId: string,
    isCorrect: boolean,
    isGuessed: boolean,
    confidence: ConfidenceLevel
  ): Promise<ReviewItem> {
    let item = await db.reviewItems.get(questionId);
    if (!item) {
      const q = await db.questions.get(questionId);
      item = createNewReviewItem(questionId, q ? q.part : 5);
    }
    const updated = processReviewOutcome(item, isCorrect, isGuessed, confidence, new Date());
    await db.reviewItems.put(updated);
    return updated;
  }

  // --- MISSIONS ---
  async ensureDailyMissions(): Promise<Mission[]> {
    const today = formatDate(new Date());
    const existingMissions = await db.missions.where('date').equals(today).toArray();

    // Check available content
    const totalQuestions = await db.questions.count();
    const listeningQuestions = await db.questions.where('part').between(1, 4, true, true).count();
    const dueReviews = await this.getDueReviewItems(today);

    const missions: Mission[] = [
      {
        id: `mission-review-${today}`,
        date: today,
        title: 'Chăm sóc Vườn Cây',
        description: dueReviews.length > 0 ? `Ôn tập ${Math.min(5, dueReviews.length)} câu hỏi đến hạn` : 'Hoàn thành 5 câu hỏi ôn tập củng cố kiến thức',
        targetCount: 5,
        currentCount: 0,
        isCompleted: false,
        rewardDrops: REWARD_AMOUNTS.MISSION_COMPLETION,
        type: 'review',
      },
      {
        id: `mission-reading-${today}`,
        date: today,
        title: 'Thử thách Đọc hiểu TOEIC',
        description: 'Hoàn thành 5 câu hỏi Reading (Part 5, 6 hoặc 7)',
        targetCount: 5,
        currentCount: 0,
        isCompleted: false,
        rewardDrops: REWARD_AMOUNTS.MISSION_COMPLETION,
        type: 'reading',
      },
      {
        id: `mission-catmail-${today}`,
        date: today,
        title: listeningQuestions > 0 ? 'Luyện Nghe / Thư Cho Mèo' : 'Gửi Thư Cho Mèo Mochi',
        description: listeningQuestions > 0 ? 'Hoàn thành 1 bài luyện Nghe hoặc 1 vòng Thư Cho Mèo' : 'Giúp Mochi gửi 1 bức thư Part 5 hoàn chỉnh',
        targetCount: 1,
        currentCount: 0,
        isCompleted: false,
        rewardDrops: REWARD_AMOUNTS.MISSION_COMPLETION,
        type: listeningQuestions > 0 ? 'any' : 'cat_mail',
      },
    ];

    const extra = [
      { key: 'reading-15', title: 'Bước chân bền bỉ', description: 'Trả lời 15 câu Reading hôm nay', type: 'reading' as const, target: 15, reward: 12 },
      { key: 'reading-30', title: 'Chinh phục bờ xa', description: 'Trả lời 30 câu Reading hôm nay', type: 'reading' as const, target: 30, reward: 20 },
      { key: 'review-10', title: 'Khu vườn rực rỡ', description: 'Ôn tập 10 câu hôm nay', type: 'review' as const, target: 10, reward: 12 },
      { key: 'mail-3', title: 'Bưu tá chăm chỉ', description: 'Hoàn thành 3 vòng Thư Cho Mèo', type: 'cat_mail' as const, target: 3, reward: 15 },
    ].map((item): Mission => ({ id: `mission-${item.key}-${today}`, date: today, title: item.title, description: item.description, type: item.type, targetCount: item.target, rewardDrops: item.reward, currentCount: 0, isCompleted: false }));
    const existingIds = new Set(existingMissions.map((m) => m.id));
    await db.transaction('rw', db.missions, async () => {
      for (const mission of [...missions, ...extra]) {
        if (!existingIds.has(mission.id) && !(await db.missions.get(mission.id))) await db.missions.add(mission);
      }
    });
    return db.missions.where('date').equals(today).toArray();
  }

  async getDailyMissions(): Promise<Mission[]> {
    return this.ensureDailyMissions();
  }

  async incrementMissionProgress(type: 'review' | 'reading' | 'listening' | 'cat_mail' | 'any', count: number = 1): Promise<void> {
    if (count <= 0) return;
    await this.ensureDailyMissions();
    await db.transaction('rw', [db.missions, db.transactions, db.messages], () => this.incrementMissionProgressLocked(type, count));
  }

  private async incrementMissionProgressLocked(type: 'review' | 'reading' | 'listening' | 'cat_mail' | 'any', count: number): Promise<void> {
    const today = formatDate(new Date());
    const missions = await db.missions.where('date').equals(today).toArray();

    for (const mission of missions) {
      if (mission.isCompleted) continue;

      const isMatch = mission.type === type || mission.type === 'any';

      if (isMatch) {
        const newCount = Math.min(mission.targetCount, mission.currentCount + count);
        const willComplete = newCount >= mission.targetCount;

        await db.missions.update(mission.id, {
          currentCount: newCount,
          isCompleted: willComplete,
        });

        if (willComplete) {
          // Award drops idempotently
          await this.awardDrops(
            mission.rewardDrops,
            `mission-${mission.id}`,
            `Hoàn thành nhiệm vụ ngày: ${mission.title}`
          );
        }
      }
    }

    // Check if all 3 missions are completed for today for bonus
    const updated = await db.missions.where('date').equals(today).toArray();
    const coreIds = ['review', 'reading', 'catmail'].map((key) => `mission-${key}-${today}`);
    const allDone = coreIds.every((id) => updated.some((m) => m.id === id && m.isCompleted));
    if (allDone) {
      await this.awardDrops(
        REWARD_AMOUNTS.MISSION_ALL_BONUS,
        `mission-all-bonus-${today}`,
        'Thưởng hoàn thành trọn bộ 3 nhiệm vụ ngày!'
      );
    }
  }

  // --- REWARDS & CURRENCY ---
  async getLearningMilestones() {
    const [attempts, reviews] = await Promise.all([this.getAllAttempts(), this.getAllReviewItems()]);
    const solved = new Set(attempts.filter((a) => a.isFinished || a.mode === 'practice')
      .flatMap((a) => Object.values(a.responses).filter((r) => r.selectedChoiceId && r.isCorrect && !r.isGuessed && !r.eliminatedChoiceIds?.length).map((r) => r.questionId)));
    const mastered = reviews.filter((r) => r.plantStage === 3).length;
    const milestones = [
      { id: 'correct-10', title: '10 câu tự tin', description: 'Tự trả lời đúng 10 câu khác nhau, không đoán mò hay dùng gợi ý', current: solved.size, target: 10, reward: 15 },
      { id: 'correct-30', title: '30 viên gạch kiến thức', description: 'Tự trả lời đúng 30 câu khác nhau', current: solved.size, target: 30, reward: 35 },
      { id: 'correct-50', title: 'Ngọn hải đăng tri thức', description: 'Tự trả lời đúng 50 câu khác nhau', current: solved.size, target: 50, reward: 60 },
      { id: 'correct-100', title: 'Nhà thám hiểm Reading', description: 'Tự trả lời đúng 100 câu khác nhau', current: solved.size, target: 100, reward: 120 },
      { id: 'blossom-1', title: 'Bông hoa đầu tiên', description: 'Ôn tập thành thạo 1 câu trong vườn', current: mastered, target: 1, reward: 15 },
      { id: 'blossom-5', title: 'Người chăm vườn', description: 'Có 5 cây nở hoa thuần thục', current: mastered, target: 5, reward: 50 },
    ];
    for (const milestone of milestones) {
      if (milestone.current >= milestone.target) await this.awardDrops(milestone.reward, `milestone-${milestone.id}`, `Cột mốc: ${milestone.title}`);
    }
    const transactions = await this.getTransactions();
    return milestones.map((m) => ({ ...m, claimed: transactions.some((t) => t.referenceId === `milestone-${m.id}`) }));
  }
  async getWaterDropsBalance(): Promise<number> {
    const txs = await db.transactions.toArray();
    return calculateBalance(txs);
  }

  async awardDrops(amount: number, referenceId: string, description: string): Promise<boolean> {
    return db.transaction('rw', [db.transactions, db.messages], async () => {
      // Idempotency check: Don't award twice for same referenceId
      const existing = await db.transactions.where('referenceId').equals(referenceId).first();
      if (existing) {
        return false; // already awarded
      }

      const tx = createEarnedTransaction(amount, referenceId, description);
      await db.transactions.add(tx);

      // Check personal messages unlocks based on total drops
      await this.checkMessageUnlocks();

      return true;
    });
  }

  async getTransactions(): Promise<RewardTransaction[]> {
    return db.transactions.orderBy('timestamp').reverse().toArray();
  }

  // --- INVENTORY & PLACEMENTS ---
  async getCatalog(): Promise<DecorationCatalogItem[]> {
    return DECORATION_CATALOG;
  }

  async getInventory(): Promise<InventoryItem[]> {
    return db.inventory.toArray();
  }

  async buyDecoration(itemId: string): Promise<{ success: boolean; message: string }> {
    const catalogItem = DECORATION_CATALOG.find((c) => c.itemId === itemId);
    if (!catalogItem) {
      return { success: false, message: 'Vật phẩm không tồn tại.' };
    }

    return db.transaction('rw', [db.inventory, db.transactions], async () => {
      const consumable = catalogItem.category === 'voucher' || catalogItem.category === 'perk';
      if (!consumable && await db.inventory.where('itemId').equals(itemId).count()) {
        return { success: false, message: 'Bạn đã sở hữu vật phẩm này.' };
      }
      const balance = await this.getWaterDropsBalance();
      const claimed = consumable ? await db.inventory.where('itemId').equals(itemId).count() : 0;
      const threshold = catalogItem.price * (claimed + 1);
      if (balance < threshold) return { success: false, message: `Quà tiếp theo mở ở mốc ${threshold} điểm. Điểm được giữ nguyên.` };
      const id = crypto.randomUUID();
      await db.inventory.add({ id: `inv-${id}`, itemId, name: catalogItem.name, icon: catalogItem.icon,
        category: catalogItem.category, unlockedAt: Date.now() });
      return { success: true, message: `Đã mở ${catalogItem.name}! Điểm được giữ nguyên.` };
    });
  }

  async useReward(inventoryId: string): Promise<boolean> {
    return db.transaction('rw', db.inventory, async () => {
      const item = await db.inventory.get(inventoryId);
      if (!item || item.usedAt || (item.category !== 'voucher' && item.category !== 'perk')) return false;
      await db.inventory.update(inventoryId, { usedAt: Date.now() });
      return true;
    });
  }

  async getPlacements(): Promise<IslandPlacement[]> {
    return db.placements.toArray();
  }

  async updatePlacement(slotId: string, itemId: string | null): Promise<void> {
    await db.placements.put({ slotId, itemId });
  }

  // --- PERSONAL MESSAGES ---
  async getMessages(): Promise<PersonalMessage[]> {
    await this.checkMessageUnlocks();
    return db.messages.toArray();
  }

  async markMessageAsRead(id: string): Promise<void> {
    await db.messages.update(id, { isRead: true });
  }

  private async checkMessageUnlocks(): Promise<void> {
    const balance = await this.getWaterDropsBalance();
    const messages = await db.messages.toArray();

    for (const msg of messages) {
      if (!msg.isUnlocked && msg.unlockCondition.type === 'drops') {
        const threshold = Number(msg.unlockCondition.threshold);
        if (balance >= threshold) {
          await db.messages.update(msg.id, { isUnlocked: true });
        }
      }
    }
  }
}

export const repository = new AppRepository();
