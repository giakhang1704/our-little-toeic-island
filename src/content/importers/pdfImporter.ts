import * as pdfjsLib from 'pdfjs-dist';
import { Choice, Question } from '../../domain/types';

// Set up worker source
if (typeof window !== 'undefined' && 'Worker' in window) {
  // Use cdn worker or local stub
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;
}

export interface ExtractedPageText {
  pageNumber: number;
  text: string;
}

export interface SuggestedQuestionDraft {
  tempId: string;
  originalNumber: number;
  prompt: string;
  choices: { letter: string; text: string }[];
  suggestedKey: string;
  explanation: string;
  topicTags: string[];
  isApproved: boolean;
}

/**
 * Extracts plain text from an uploaded PDF file, page by page.
 */
export async function extractTextFromPDF(file: File): Promise<ExtractedPageText[]> {
  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;

  const pages: ExtractedPageText[] = [];

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    const pageText = textContent.items
      .map((item) => ('str' in item ? item.str : ''))
      .join(' ');
    pages.push({
      pageNumber: pageNum,
      text: pageText,
    });
  }

  return pages;
}

/**
 * Heuristically splits extracted text into suggested question drafts.
 */
export function suggestQuestionsFromRawText(allText: string): SuggestedQuestionDraft[] {
  // Normalize whitespace
  const normalized = allText.replace(/\r\n/g, '\n').replace(/\t/g, ' ');

  // Look for pattern like 101. or Question 101 or 101)
  const questionSplitter = /(?=(?:^|\n|\s)(?:Question\s+)?\b([1-2]?\d{2})\s*[\.\:\)])/gi;
  const segments = normalized.split(questionSplitter).filter(Boolean);

  const drafts: SuggestedQuestionDraft[] = [];

  for (let i = 0; i < segments.length; i += 2) {
    const qNumStr = segments[i];
    const qBody = segments[i + 1] || '';

    const qNum = parseInt(qNumStr, 10);
    if (isNaN(qNum) || qNum <= 0 || qNum > 200) continue;

    // Split choices (A), (B), (C), (D) or (A) ... (B) ...
    const choiceRegex = /(?:\(?([A-D])\)?[\.\:\)]|\b([A-D])[\.\:\)])\s*([^\(]+?)(?=(?:\(?[A-D]\)?[\.\:\)]|\b[A-D][\.\:\)])|$)/gi;
    
    // Find where choices start in qBody
    const firstChoiceMatch = qBody.search(/(?:\(?[A-D]\)?[\.\:\)]|\b[A-D][\.\:\)])/i);
    let promptText = '';
    let choicesText = qBody;

    if (firstChoiceMatch !== -1) {
      promptText = qBody.substring(0, firstChoiceMatch).trim();
      choicesText = qBody.substring(firstChoiceMatch);
    } else {
      promptText = qBody.trim();
    }

    const choices: { letter: string; text: string }[] = [];
    let match;
    while ((match = choiceRegex.exec(choicesText)) !== null) {
      const letter = (match[1] || match[2]).toUpperCase();
      const text = match[3].trim();
      choices.push({ letter, text });
    }

    // Default choices if none detected
    if (choices.length < 2) {
      choices.push({ letter: 'A', text: 'Choice A' });
      choices.push({ letter: 'B', text: 'Choice B' });
      choices.push({ letter: 'C', text: 'Choice C' });
      choices.push({ letter: 'D', text: 'Choice D' });
    }

    drafts.push({
      tempId: `draft-${Date.now()}-${drafts.length + 1}`,
      originalNumber: qNum,
      prompt: promptText || `Câu hỏi ${qNum}`,
      choices,
      suggestedKey: 'A',
      explanation: '',
      topicTags: ['Part 5', 'PDF Import'],
      isApproved: true,
    });
  }

  return drafts;
}

/**
 * Converts approved drafts into final Question records.
 */
export function convertDraftsToQuestions(
  drafts: SuggestedQuestionDraft[],
  packId: string
): Question[] {
  return drafts
    .filter((d) => d.isApproved)
    .map((d, idx) => {
      const choices: Choice[] = d.choices.map((c, cIdx) => ({
        id: `c-${c.letter.toLowerCase()}-${idx}-${cIdx}`,
        text: c.text,
      }));

      const keyIndex = ['A', 'B', 'C', 'D'].indexOf(d.suggestedKey.toUpperCase());
      const correctChoiceId =
        keyIndex >= 0 && keyIndex < choices.length
          ? choices[keyIndex].id
          : choices[0]?.id || 'c-a';

      return {
        id: `q-pdf-${Date.now()}-${idx + 1}`,
        packId,
        part: 5,
        prompt: d.prompt,
        choices,
        correctChoiceId,
        explanation: d.explanation || 'Giải thích từ tài liệu import.',
        topicTags: d.topicTags,
        difficulty: 'medium',
        allowsChoiceShuffle: true,
        originalNumber: d.originalNumber,
      };
    });
}
