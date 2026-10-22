import Dexie, { Table } from 'dexie';
import {
  Asset,
  Attempt,
  InventoryItem,
  IslandPlacement,
  Mission,
  PersonalMessage,
  Question,
  QuestionGroup,
  ReviewItem,
  RewardTransaction,
  StudyPack,
  UserProfile,
  UserSettings,
} from '../../domain/types';

export class ToeicIslandDatabase extends Dexie {
  studyPacks!: Table<StudyPack, string>;
  questionGroups!: Table<QuestionGroup, string>;
  questions!: Table<Question, string>;
  assets!: Table<Asset, string>;
  attempts!: Table<Attempt, string>;
  reviewItems!: Table<ReviewItem, string>;
  missions!: Table<Mission, string>;
  transactions!: Table<RewardTransaction, string>;
  inventory!: Table<InventoryItem, string>;
  placements!: Table<IslandPlacement, string>;
  messages!: Table<PersonalMessage, string>;
  settings!: Table<UserSettings & { id: string }, string>;
  profiles!: Table<UserProfile, string>;

  constructor() {
    super('ToeicIslandDatabase');

    this.version(2).stores({
      studyPacks: 'id, title, createdAt, updatedAt',
      questionGroups: 'id, packId, part, order',
      questions: 'id, packId, groupId, part, difficulty',
      assets: 'id, packId, name, mimeType',
      attempts: 'id, packId, mode, startedAt, completedAt, isFinished',
      reviewItems: 'id, questionId, part, nextDueDate, state, plantStage, consecutiveCorrect',
      missions: 'id, date, isCompleted, type',
      transactions: 'id, timestamp, referenceId, type',
      inventory: 'id, itemId, category, unlockedAt',
      placements: 'slotId, itemId',
      messages: 'id, isUnlocked, isRead, date',
      settings: 'id',
      profiles: 'id, name, createdAt',
    });
  }
}

export const db = new ToeicIslandDatabase();
