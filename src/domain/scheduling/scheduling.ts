import { ConfidenceLevel, PlantStage, ReviewItem, TOEICPart } from '../types';

/**
 * Format a Date object to YYYY-MM-DD
 */
export function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/**
 * Add days to a Date
 */
export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Determines plant stage from consecutive successful reviews
 */
export function calculatePlantStage(consecutiveCorrect: number): PlantStage {
  if (consecutiveCorrect >= 3) return 3; // Blossom
  if (consecutiveCorrect === 2) return 2; // Bud
  if (consecutiveCorrect === 1) return 1; // Sprout
  return 0; // Seedling
}

/**
 * Calculates updated review item after an actual review session (delayed recall)
 */
export function processReviewOutcome(
  existingItem: ReviewItem,
  isCorrect: boolean,
  isGuessed: boolean,
  confidence: ConfidenceLevel = 'medium',
  now: Date = new Date()
): ReviewItem {
  const todayStr = formatDate(now);

  if (!isCorrect) {
    // Reset interval upon mistake
    const nextDue = formatDate(addDays(now, 1));
    return {
      ...existingItem,
      lastReviewedAt: now.getTime(),
      nextDueDate: nextDue,
      intervalDays: 1,
      consecutiveCorrect: 0,
      mistakeCount: existingItem.mistakeCount + 1,
      lastConfidence: confidence,
      state: 'learning',
      plantStage: 0, // returns to seedling
    };
  }

  // If correct but guessed, don't jump intervals; review again tomorrow
  if (isGuessed || confidence === 'low') {
    const nextDue = formatDate(addDays(now, 1));
    return {
      ...existingItem,
      lastReviewedAt: now.getTime(),
      nextDueDate: nextDue,
      intervalDays: 1,
      consecutiveCorrect: Math.max(existingItem.consecutiveCorrect, 1),
      lastConfidence: confidence,
      state: 'learning',
      plantStage: calculatePlantStage(Math.max(existingItem.consecutiveCorrect, 1)),
    };
  }

  // Confident correct review - advance spaced intervals: 1 -> 3 -> 7 -> 14 -> 30
  let nextInterval: number;
  const newConsecutive = existingItem.consecutiveCorrect + 1;

  if (newConsecutive === 1) {
    nextInterval = 3;
  } else if (newConsecutive === 2) {
    nextInterval = 7;
  } else if (newConsecutive === 3) {
    nextInterval = 14;
  } else {
    nextInterval = 30;
  }

  const nextDue = formatDate(addDays(now, nextInterval));
  const newStage = calculatePlantStage(newConsecutive);

  return {
    ...existingItem,
    lastReviewedAt: now.getTime(),
    nextDueDate: nextDue,
    intervalDays: nextInterval,
    consecutiveCorrect: newConsecutive,
    lastConfidence: confidence,
    state: newStage === 3 ? 'mastered' : 'learning',
    plantStage: newStage,
  };
}

/**
 * Creates a new ReviewItem when a question is first missed or guessed during normal practice.
 */
export function createNewReviewItem(
  questionId: string,
  part: TOEICPart,
  now: Date = new Date()
): ReviewItem {
  return {
    id: questionId,
    questionId,
    part,
    nextDueDate: formatDate(addDays(now, 1)), // Due tomorrow
    lastReviewedAt: now.getTime(),
    intervalDays: 1,
    consecutiveCorrect: 0,
    mistakeCount: 1,
    state: 'due',
    plantStage: 0,
  };
}
