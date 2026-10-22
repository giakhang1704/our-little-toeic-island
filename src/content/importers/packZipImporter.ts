import JSZip from 'jszip';
import { db } from '../../data/database/db';
import { Question, QuestionGroup, StudyPack, TOEICPart } from '../../domain/types';
import { StudyPackContentSchema } from '../../domain/validation/schemas';

export interface ImportValidationReport {
  success: boolean;
  pack?: StudyPack;
  questionsCount: number;
  groupsCount: number;
  errors: string[];
  warnings: string[];
}

export async function parseAndValidateStudyPackZip(
  fileOrBlob: Blob | File
): Promise<ImportValidationReport> {
  const errors: string[] = [];
  const warnings: string[] = [];

  try {
    const zip = await JSZip.loadAsync(fileOrBlob);
    const manifestFile = zip.file('manifest.json');
    const questionsFile = zip.file('questions.json');

    if (!manifestFile) {
      errors.push('Thiếu tệp manifest.json trong tệp nén ZIP.');
    }
    if (!questionsFile) {
      errors.push('Thiếu tệp questions.json trong tệp nén ZIP.');
    }

    if (errors.length > 0) {
      return { success: false, questionsCount: 0, groupsCount: 0, errors, warnings };
    }

    const manifestText = await manifestFile!.async('string');
    const questionsText = await questionsFile!.async('string');

    let manifestRaw: unknown;
    let questionsRaw: unknown;

    try {
      manifestRaw = JSON.parse(manifestText);
    } catch {
      errors.push('manifest.json không đúng định dạng JSON.');
    }

    try {
      questionsRaw = JSON.parse(questionsText);
    } catch {
      errors.push('questions.json không đúng định dạng JSON.');
    }

    if (errors.length > 0) {
      return { success: false, questionsCount: 0, groupsCount: 0, errors, warnings };
    }

    // Question raw can be either an array of questions or an object with groups & questions
    let parsedGroups: QuestionGroup[] = [];
    let parsedQuestions: Question[] = [];

    if (Array.isArray(questionsRaw)) {
      parsedQuestions = questionsRaw as Question[];
    } else if (typeof questionsRaw === 'object' && questionsRaw !== null) {
      const obj = questionsRaw as { groups?: QuestionGroup[]; questions?: Question[] };
      parsedGroups = obj.groups || [];
      parsedQuestions = obj.questions || [];
    }

    // Validate using Zod
    const validationResult = StudyPackContentSchema.safeParse({
      manifest: manifestRaw,
      groups: parsedGroups,
      questions: parsedQuestions,
    });

    if (!validationResult.success) {
      validationResult.error.errors.forEach((err) => {
        errors.push(`[${err.path.join('.')}] ${err.message}`);
      });
      return { success: false, questionsCount: 0, groupsCount: 0, errors, warnings };
    }

    const validatedData = validationResult.data;

    // Check for duplicate question IDs
    const idSet = new Set<string>();
    for (const q of validatedData.questions) {
      if (idSet.has(q.id)) {
        errors.push(`Trùng lặp ID câu hỏi: "${q.id}".`);
      }
      idSet.add(q.id);

      // Check if correctChoiceId matches one of the choices
      const hasCorrect = q.choices.some((c) => c.id === q.correctChoiceId);
      if (!hasCorrect) {
        errors.push(`Câu hỏi "${q.id}": correctChoiceId không khớp với bất kỳ lựa chọn nào.`);
      }
    }

    if (errors.length > 0) {
      return { success: false, questionsCount: 0, groupsCount: 0, errors, warnings };
    }

    const packId = validatedData.manifest.id;
    const finalPack: StudyPack = {
      id: packId,
      title: validatedData.manifest.title,
      description: validatedData.manifest.description || '',
      sourceLabel: validatedData.manifest.sourceLabel || 'Custom Pack',
      partsIncluded: (validatedData.manifest.partsIncluded || [5]) as TOEICPart[],
      questionCount: validatedData.questions.length,
      createdAt: validatedData.manifest.createdAt || Date.now(),
      updatedAt: Date.now(),
      schemaVersion: validatedData.manifest.schemaVersion,
    };

    const finalQuestions: Question[] = validatedData.questions.map((q) => ({
      ...q,
      packId,
      part: q.part as TOEICPart,
    }));

    const finalGroups: QuestionGroup[] = (validatedData.groups || []).map((g) => ({
      ...g,
      packId,
      part: g.part as TOEICPart,
    }));

    return {
      success: true,
      pack: finalPack,
      questionsCount: finalQuestions.length,
      groupsCount: finalGroups.length,
      errors: [],
      warnings,
    };
  } catch (err) {
    errors.push(`Lỗi giải nén tệp: ${(err as Error).message}`);
    return { success: false, questionsCount: 0, groupsCount: 0, errors, warnings };
  }
}

export async function importPackDirect(
  pack: StudyPack,
  groups: QuestionGroup[],
  questions: Question[]
): Promise<void> {
  await db.transaction('rw', [db.studyPacks, db.questionGroups, db.questions], async () => {
    await db.studyPacks.put(pack);
    if (groups.length > 0) {
      await db.questionGroups.bulkPut(groups);
    }
    if (questions.length > 0) {
      await db.questions.bulkPut(questions);
    }
  });
}
