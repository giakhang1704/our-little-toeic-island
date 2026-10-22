import { db } from '../../data/database/db';
import { FullBackupSchema } from '../../domain/validation/schemas';

export interface BackupPreview {
  isValid: boolean;
  exportedAt?: number;
  studyPacksCount: number;
  questionsCount: number;
  attemptsCount: number;
  reviewItemsCount: number;
  transactionsCount: number;
  errors: string[];
}

/**
 * Exports full application state as a JSON backup string.
 */
export async function createFullBackupJson(): Promise<string> {
  const [
    studyPacks,
    questionGroups,
    questions,
    attempts,
    reviewItems,
    missions,
    transactions,
    inventory,
    placements,
    messages,
    settingsList,
  ] = await Promise.all([
    db.studyPacks.toArray(),
    db.questionGroups.toArray(),
    db.questions.toArray(),
    db.attempts.toArray(),
    db.reviewItems.toArray(),
    db.missions.toArray(),
    db.transactions.toArray(),
    db.inventory.toArray(),
    db.placements.toArray(),
    db.messages.toArray(),
    db.settings.toArray(),
  ]);

  const backupData = {
    schemaVersion: '1.0.0',
    exportedAt: Date.now(),
    studyPacks,
    questionGroups,
    questions,
    attempts,
    reviewItems,
    missions,
    transactions,
    inventory,
    placements,
    messages,
    settings: settingsList[0] || null,
  };

  return JSON.stringify(backupData, null, 2);
}

/**
 * Downloads a string as a file to the browser.
 */
export function downloadJsonFile(content: string, filename: string): void {
  const blob = new Blob([content], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Validates a backup JSON string and returns a preview summary.
 */
export function validateBackupJson(jsonString: string): { preview: BackupPreview; data?: any } {
  const errors: string[] = [];

  try {
    const raw = JSON.parse(jsonString);
    const parsed = FullBackupSchema.safeParse(raw);

    if (!parsed.success) {
      parsed.error.errors.forEach((err) => {
        errors.push(`${err.path.join('.')}: ${err.message}`);
      });
      return {
        preview: {
          isValid: false,
          studyPacksCount: 0,
          questionsCount: 0,
          attemptsCount: 0,
          reviewItemsCount: 0,
          transactionsCount: 0,
          errors,
        },
      };
    }

    const data = parsed.data;
    return {
      preview: {
        isValid: true,
        exportedAt: data.exportedAt,
        studyPacksCount: data.studyPacks.length,
        questionsCount: data.questions.length,
        attemptsCount: data.attempts.length,
        reviewItemsCount: data.reviewItems.length,
        transactionsCount: data.transactions.length,
        errors: [],
      },
      data,
    };
  } catch (e) {
    errors.push(`Định dạng tệp không hợp lệ: ${(e as Error).message}`);
    return {
      preview: {
        isValid: false,
        studyPacksCount: 0,
        questionsCount: 0,
        attemptsCount: 0,
        reviewItemsCount: 0,
        transactionsCount: 0,
        errors,
      },
    };
  }
}

/**
 * Restores data into Dexie.
 * @param data Validated backup object
 * @param mode 'replace' clears all existing tables before import; 'merge' updates/appends.
 */
export async function restoreFromBackupData(data: any, mode: 'replace' | 'merge'): Promise<void> {
  const tables = [
    db.studyPacks,
    db.questionGroups,
    db.questions,
    db.attempts,
    db.reviewItems,
    db.missions,
    db.transactions,
    db.inventory,
    db.placements,
    db.messages,
    db.settings,
  ];

  await db.transaction('rw', tables, async () => {
    if (mode === 'replace') {
      for (const table of tables) {
        await table.clear();
      }
    }

    if (data.studyPacks?.length) await db.studyPacks.bulkPut(data.studyPacks);
    if (data.questionGroups?.length) await db.questionGroups.bulkPut(data.questionGroups);
    if (data.questions?.length) await db.questions.bulkPut(data.questions);
    if (data.attempts?.length) await db.attempts.bulkPut(data.attempts);
    if (data.reviewItems?.length) await db.reviewItems.bulkPut(data.reviewItems);
    if (data.missions?.length) await db.missions.bulkPut(data.missions);
    if (data.transactions?.length) await db.transactions.bulkPut(data.transactions);
    if (data.inventory?.length) await db.inventory.bulkPut(data.inventory);
    if (data.placements?.length) await db.placements.bulkPut(data.placements);
    if (data.messages?.length) await db.messages.bulkPut(data.messages);
    if (data.settings) await db.settings.put(data.settings);
  });
}
