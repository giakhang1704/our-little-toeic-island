import { z } from 'zod';

export const ChoiceSchema = z.object({
  id: z.string().min(1),
  text: z.string(),
});

export const QuestionSchema = z.object({
  id: z.string().min(1),
  packId: z.string().optional(),
  groupId: z.string().optional(),
  part: z.number().int().min(1).max(7),
  prompt: z.string().min(1, 'Prompt is required'),
  imageAssetId: z.string().optional(),
  audioAssetId: z.string().optional(),
  choices: z.array(ChoiceSchema).min(2, 'At least 2 choices required'),
  correctChoiceId: z.string().min(1),
  explanation: z.string().default(''),
  topicTags: z.array(z.string()).default([]),
  difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
  allowsChoiceShuffle: z.boolean().optional(),
  originalNumber: z.number().optional(),
}).refine(
  (data) => data.choices.some((c) => c.id === data.correctChoiceId),
  {
    message: 'correctChoiceId must match one of the choices',
    path: ['correctChoiceId'],
  }
);

export const PassageDocumentSchema = z.object({
  label: z.string(),
  text: z.string(),
});

export const QuestionGroupSchema = z.object({
  id: z.string().min(1),
  packId: z.string().optional(),
  part: z.number().int().min(1).max(7),
  passageTitle: z.string().optional(),
  passageText: z.string().optional(),
  passageDocuments: z.array(PassageDocumentSchema).optional(),
  passageImages: z.array(z.string()).optional(),
  audioAssetId: z.string().optional(),
  audioStartTime: z.number().optional(),
  audioEndTime: z.number().optional(),
  transcript: z.string().optional(),
  questionIds: z.array(z.string()),
  order: z.number().default(0),
});

export const StudyPackManifestSchema = z.object({
  schemaVersion: z.string().default('1.0.0'),
  id: z.string().min(1),
  title: z.string().min(1),
  description: z.string().default(''),
  sourceLabel: z.string().default('Custom'),
  partsIncluded: z.array(z.number().int().min(1).max(7)).default([]),
  questionCount: z.number().int().default(0),
  createdAt: z.number().optional(),
  updatedAt: z.number().optional(),
});

export const StudyPackContentSchema = z.object({
  manifest: StudyPackManifestSchema,
  groups: z.array(QuestionGroupSchema).default([]),
  questions: z.array(QuestionSchema),
});

export const FullBackupSchema = z.object({
  schemaVersion: z.string(),
  exportedAt: z.number(),
  studyPacks: z.array(StudyPackManifestSchema),
  questionGroups: z.array(QuestionGroupSchema),
  questions: z.array(QuestionSchema),
  attempts: z.array(z.any()),
  reviewItems: z.array(z.any()),
  missions: z.array(z.any()),
  transactions: z.array(z.any()),
  inventory: z.array(z.any()),
  placements: z.array(z.any()),
  messages: z.array(z.any()),
  settings: z.any().optional(),
});
