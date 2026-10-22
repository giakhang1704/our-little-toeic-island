import { Attempt, AttemptResponse, Question } from '../types';

export interface ScoreSummary {
  total: number;
  correct: number;
  incorrect: number;
  guessed: number;
  accuracy: number;
  timeSpentSeconds: number;
  byPart: Record<number, { total: number; correct: number }>;
}

export function gradeResponse(
  question: Question,
  selectedChoiceId: string | null
): boolean {
  if (!selectedChoiceId) return false;
  return selectedChoiceId === question.correctChoiceId;
}

export function calculateAttemptScore(
  attempt: Attempt,
  questionsMap: Map<string, Question>
): ScoreSummary {
  let correct = 0;
  let incorrect = 0;
  let guessed = 0;
  const byPart: Record<number, { total: number; correct: number }> = {};

  for (const qId of attempt.questionIds) {
    const q = questionsMap.get(qId);
    const resp = attempt.responses[qId];
    const part = q ? q.part : (attempt.partFilter || 5);

    if (!byPart[part]) {
      byPart[part] = { total: 0, correct: 0 };
    }
    byPart[part].total += 1;

    if (resp && resp.selectedChoiceId) {
      if (resp.isGuessed) guessed += 1;
      if (resp.isCorrect) {
        correct += 1;
        byPart[part].correct += 1;
      } else {
        incorrect += 1;
      }
    } else {
      incorrect += 1;
    }
  }

  const total = attempt.questionIds.length;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

  return {
    total,
    correct,
    incorrect,
    guessed,
    accuracy,
    timeSpentSeconds: attempt.timeSpentSeconds || 0,
    byPart,
  };
}
