import assert from 'node:assert/strict';
import { GRAMMAR_TOPIC_PACKS } from '../src/data/seed/grammarTopics';
import { BUNDLED_PACKS } from '../src/data/seed/initialData';
import { StudyPackContentSchema } from '../src/domain/validation/schemas';

assert.equal(GRAMMAR_TOPIC_PACKS.length, 11);
assert.equal(GRAMMAR_TOPIC_PACKS.reduce((count, item) => count + item.questions.length, 0), 503);
assert.deepEqual(GRAMMAR_TOPIC_PACKS.map((item) => item.questions.length), [80, 51, 80, 25, 40, 50, 64, 43, 20, 30, 20]);
for (const item of GRAMMAR_TOPIC_PACKS) {
  StudyPackContentSchema.parse({ manifest: item.pack, groups: item.groups, questions: item.questions });
  assert.equal(item.pack.questionCount, item.questions.length);
  assert.ok(item.questions.every((q) => q.packId === item.pack.id && q.part === 5 && !q.groupId));
}
const ids = BUNDLED_PACKS.flatMap((item) => item.questions.map((q) => q.id));
assert.equal(new Set(ids).size, ids.length, 'Bundled question IDs cannot overwrite another pack');
console.log('PASS: 503 grammar questions in 11 valid topic packs, no ID collisions');
