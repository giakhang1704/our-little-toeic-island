import { Choice, Question } from '../types';

/**
 * Deterministically shuffles choices if allowed.
 * - Listening parts (1, 2, 3, 4) do NOT shuffle choices.
 * - Choices referencing other choices (e.g., "both A and B", "all of the above") do not shuffle.
 * - Part 6 blanks do not shuffle.
 * - Preserves order if allowsChoiceShuffle is false.
 */
export function getInitialChoiceOrder(question: Question, isTestMode: boolean = false): string[] {
  const originalIds = question.choices.map((c) => c.id);

  if (isTestMode) {
    return originalIds;
  }

  // Listening parts must preserve original spoken choice order
  if (question.part <= 4) {
    return originalIds;
  }

  // Check if explicitly disabled
  if (question.allowsChoiceShuffle === false) {
    return originalIds;
  }

  // Check if any choice references letters or "all/none of the above"
  const hasRelativeChoice = question.choices.some((c) => {
    const text = c.text.toLowerCase();
    return (
      text.includes('both a and') ||
      text.includes('all of the above') ||
      text.includes('none of the above') ||
      text.includes('neither') ||
      /\b[A-D]\b/.test(c.text)
    );
  });

  if (hasRelativeChoice) {
    return originalIds;
  }

  // Safe Fisher-Yates shuffle
  const shuffled = [...originalIds];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

/**
 * Returns choices arranged in the specified choiceOrder, with letters A, B, C, D assigned.
 */
export function getOrderedChoices(
  question: Question,
  choiceOrder?: string[]
): { label: string; choice: Choice }[] {
  const labels = ['A', 'B', 'C', 'D', 'E'];
  const order = choiceOrder && choiceOrder.length === question.choices.length
    ? choiceOrder
    : question.choices.map((c) => c.id);

  const choiceMap = new Map<string, Choice>();
  question.choices.forEach((c) => choiceMap.set(c.id, c));

  return order.map((id, index) => {
    const choice = choiceMap.get(id) || { id, text: '' };
    return {
      label: labels[index] || String(index + 1),
      choice,
    };
  });
}
