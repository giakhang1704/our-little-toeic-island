import { Choice, Question } from '../../domain/types';

export interface ParseResult {
  questions: Question[];
  errors: string[];
}

/**
 * Parses plain text containing Part 5 questions into structured Question objects.
 * Format supported:
 * 101. Question sentence with _____ blank.
 * (A) Choice 1
 * (B) Choice 2
 * (C) Choice 3
 * (D) Choice 4
 * Key: A (or Answer: A)
 * Explanation: Explanation text...
 * Tags: Grammar, Tense
 */
export function parsePart5PlainText(rawText: string, packId: string): ParseResult {
  const lines = rawText.split('\n').map((l) => l.trim()).filter((l) => l.length > 0);
  const questions: Question[] = [];
  const errors: string[] = [];

  let currentNumber = 0;
  let currentPrompt = '';
  let currentChoices: Choice[] = [];
  let currentKey = '';
  let currentExplanation = '';
  let currentTags: string[] = ['Part 5'];

  const commitQuestion = () => {
    if (!currentPrompt && currentChoices.length === 0) return;

    if (currentChoices.length < 2) {
      errors.push(`Câu hỏi ${currentNumber || 'gần nhất'}: Thiếu các lựa chọn đáp án (cần ít nhất 2).`);
      return;
    }

    let correctChoiceId = '';
    if (currentKey) {
      const normalizedKey = currentKey.trim().toUpperCase();
      const labels = ['A', 'B', 'C', 'D'];
      const keyIndex = labels.indexOf(normalizedKey);
      if (keyIndex >= 0 && keyIndex < currentChoices.length) {
        correctChoiceId = currentChoices[keyIndex].id;
      } else {
        // Maybe the key was the ID directly
        const matched = currentChoices.find((c) => c.id === currentKey || c.text === currentKey);
        if (matched) correctChoiceId = matched.id;
      }
    }

    if (!correctChoiceId && currentChoices.length > 0) {
      // Default to first choice if no key specified, but record a warning
      correctChoiceId = currentChoices[0].id;
      errors.push(`Câu hỏi ${currentNumber}: Không tìm thấy Key rõ ràng, tạm gán đáp án là A.`);
    }

    const qId = `q-imp-${Date.now()}-${questions.length + 1}`;
    questions.push({
      id: qId,
      packId,
      part: 5,
      prompt: currentPrompt || `Câu hỏi ${currentNumber}`,
      choices: currentChoices,
      correctChoiceId,
      explanation: currentExplanation || 'Chưa có giải thích chi tiết.',
      topicTags: currentTags,
      difficulty: 'medium',
      allowsChoiceShuffle: true,
      originalNumber: currentNumber || questions.length + 1,
    });

    // Reset
    currentPrompt = '';
    currentChoices = [];
    currentKey = '';
    currentExplanation = '';
    currentTags = ['Part 5'];
  };

  const choiceRegex = /^(\(?([A-D])\)?[\.\:\)]|\b([A-D])[\.\:\)])\s+(.*)/i;
  const keyRegex = /^(key|answer|đáp án)[\s\:\-]+([A-D])/i;
  const explanationRegex = /^(explanation|giải thích|lời giải)[\s\:\-]+(.*)/i;
  const tagsRegex = /^(tags|chủ điểm|chủ đề)[\s\:\-]+(.*)/i;
  const questionNumRegex = /^(\d+)[\.\:\)]\s*(.*)/;

  for (const line of lines) {
    const qNumMatch = line.match(questionNumRegex);
    if (qNumMatch && !line.match(choiceRegex)) {
      // Starting a new question
      commitQuestion();
      currentNumber = parseInt(qNumMatch[1], 10);
      currentPrompt = qNumMatch[2] || '';
      continue;
    }

    const choiceMatch = line.match(choiceRegex);
    if (choiceMatch) {
      const letter = (choiceMatch[2] || choiceMatch[3]).toUpperCase();
      const text = choiceMatch[4].trim();
      currentChoices.push({
        id: `choice-${letter.toLowerCase()}-${Date.now()}-${currentChoices.length}`,
        text,
      });
      continue;
    }

    const keyMatch = line.match(keyRegex);
    if (keyMatch) {
      currentKey = keyMatch[2].toUpperCase();
      continue;
    }

    const expMatch = line.match(explanationRegex);
    if (expMatch) {
      currentExplanation = expMatch[2].trim();
      continue;
    }

    const tagsMatch = line.match(tagsRegex);
    if (tagsMatch) {
      const splitTags = tagsMatch[2].split(/[,;]/).map((t) => t.trim()).filter(Boolean);
      currentTags = ['Part 5', ...splitTags];
      continue;
    }

    // Otherwise append to current prompt or explanation
    if (currentChoices.length === 0) {
      currentPrompt = currentPrompt ? `${currentPrompt} ${line}` : line;
    } else {
      currentExplanation = currentExplanation ? `${currentExplanation} ${line}` : line;
    }
  }

  // Commit last question
  commitQuestion();

  return { questions, errors };
}
