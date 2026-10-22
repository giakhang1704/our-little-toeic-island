export type TOEICPart = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface Choice {
  id: string;
  text: string;
}

export type MistakeCategory =
  | 'vocabulary'
  | 'grammar'
  | 'misheard'
  | 'misread'
  | 'time_pressure'
  | 'other';

export type ConfidenceLevel = 'high' | 'medium' | 'low';

export interface Question {
  id: string;
  packId: string;
  groupId?: string;
  part: TOEICPart;
  prompt: string;
  imageAssetId?: string;
  audioAssetId?: string;
  choices: Choice[];
  correctChoiceId: string;
  explanation: string;
  topicTags: string[];
  difficulty?: 'easy' | 'medium' | 'hard';
  allowsChoiceShuffle?: boolean;
  originalNumber?: number;
}

export interface PassageDocument {
  label: string;
  text: string;
}

export interface QuestionGroup {
  id: string;
  packId: string;
  part: TOEICPart;
  passageTitle?: string;
  passageText?: string;
  passageDocuments?: PassageDocument[];
  passageImages?: string[];
  audioAssetId?: string;
  audioStartTime?: number;
  audioEndTime?: number;
  transcript?: string;
  questionIds: string[];
  order: number;
}

export interface StudyPack {
  id: string;
  title: string;
  description: string;
  sourceLabel: string;
  partsIncluded: TOEICPart[];
  questionCount: number;
  createdAt: number;
  updatedAt: number;
  schemaVersion: string;
}

export interface Asset {
  id: string;
  packId: string;
  name: string;
  mimeType: string;
  data: string; // base64, dataUrl, or svg markup
  size: number;
  createdAt: number;
}

export interface AttemptResponse {
  eliminatedChoiceIds?: string[];
  questionId: string;
  selectedChoiceId: string | null;
  isGuessed: boolean;
  confidence: ConfidenceLevel;
  choiceOrder: string[]; // Order of choice IDs presented to user
  isCorrect: boolean;
  mistakeCategory?: MistakeCategory;
  notes?: string;
  timeSpentMs: number;
}

export interface Attempt {
  id: string;
  packId?: string;
  mode: 'practice' | 'test';
  title: string;
  partFilter?: number;
  questionIds: string[];
  currentQuestionIndex: number;
  responses: Record<string, AttemptResponse>;
  startedAt: number;
  completedAt?: number;
  timeSpentSeconds: number;
  isFinished: boolean;
  score?: {
    correct: number;
    total: number;
    accuracy: number;
  };
}

export type PlantStage = 0 | 1 | 2 | 3; // 0: Seedling, 1: Sprout, 2: Bud, 3: Blossom

export interface ReviewItem {
  id: string; // matches questionId
  questionId: string;
  part: TOEICPart;
  nextDueDate: string; // YYYY-MM-DD
  lastReviewedAt?: number;
  intervalDays: number;
  consecutiveCorrect: number;
  mistakeCount: number;
  lastConfidence?: ConfidenceLevel;
  state: 'due' | 'learning' | 'mastered';
  plantStage: PlantStage;
}

export type MissionType = 'review' | 'reading' | 'listening' | 'cat_mail' | 'any';

export interface Mission {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  description: string;
  targetCount: number;
  currentCount: number;
  isCompleted: boolean;
  rewardDrops: number;
  type: MissionType;
}

export interface RewardTransaction {
  id: string;
  timestamp: number;
  amount: number;
  type: 'earned' | 'spent';
  referenceId: string; // idempotency key (e.g. "attempt-xyz", "mission-abc-2026-10-22")
  description: string;
}

export interface DecorationCatalogItem {
  itemId: string;
  name: string;
  description: string;
  price: number;
  icon: string;
  category: 'building' | 'nature' | 'furniture' | 'light' | 'special' | 'voucher' | 'perk';
}

export interface InventoryItem {
  usedAt?: number;
  id: string; // unique holding ID
  itemId: string;
  name: string;
  icon: string;
  category: string;
  unlockedAt: number;
}

export interface IslandPlacement {
  slotId: string; // e.g. 'slot-beach', 'slot-garden-left', 'slot-house-front', 'slot-dock'
  itemId: string | null;
}

export interface PersonalMessage {
  id: string;
  title: string;
  content: string;
  senderName: string;
  date: string;
  unlockCondition: {
    type: 'drops' | 'streak' | 'questions' | 'default';
    threshold: number | string;
  };
  isUnlocked: boolean;
  isRead: boolean;
}

export interface UserProfile {
  id: string;
  name: string;
  partnerName: string;
  avatar: string;
  pin?: string;
  targetScore: number;
  createdAt: number;
}

export interface UserSettings {
  learnerName: string;
  partnerName: string;
  soundEnabled: boolean;
  reducedMotion: boolean;
  dailyReviewCap: number;
  dailyQuestionGoal: number;
  targetScore: number;
  audioPlaybackSpeed: number;
}
