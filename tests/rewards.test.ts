import 'fake-indexeddb/auto';
import './content.test';
import assert from 'node:assert/strict';
import { db } from '../src/data/database/db';
import { repository } from '../src/data/repositories/appRepository';
import { formatDate } from '../src/domain/scheduling/scheduling';
import { createFullBackupJson } from '../src/content/exporters/backupExporter';

async function reset() {
  await db.delete();
  await db.open();
  await repository.initializeDatabase();
}

await reset();
const grammarPacks = (await repository.getAllStudyPacks()).filter((pack) => pack.id.startsWith('pack-on-tap-ngu-phap-main-'));
assert.equal(grammarPacks.length, 11);
const grammarQuestions = await Promise.all(grammarPacks.map((pack) => repository.getQuestionsByPack(pack.id)));
assert.equal(grammarQuestions.reduce((sum, questions) => sum + questions.length, 0), 503);
const initial = await repository.getWaterDropsBalance();
assert.equal(initial, 15);
// Two concurrent requests cannot claim the same threshold twice.
const claims = await Promise.all([repository.buyDecoration('milk-tea'), repository.buyDecoration('milk-tea')]);
assert.equal(claims.filter((r) => r.success).length, 1);
assert.equal(await repository.getWaterDropsBalance(), initial, 'Opening a voucher must not subtract points');
assert.equal((await repository.getInventory()).filter((i) => i.itemId === 'milk-tea').length, 1);
assert.equal((await repository.buyDecoration('snack-date')).success, false);
await repository.awardDrops(15, 'test-study-reward', 'Test reward');
assert.equal((await repository.buyDecoration('milk-tea')).success, true);
assert.equal(await repository.getWaterDropsBalance(), 30);
const voucher = (await repository.getInventory()).find((i) => i.itemId === 'milk-tea')!;
assert.equal((await Promise.all([repository.useReward(voucher.id), repository.useReward(voucher.id)])).filter(Boolean).length, 1);
assert.equal(await repository.getWaterDropsBalance(), 30, 'Using a voucher must not subtract points');
assert.equal(await repository.useReward('missing-id'), false);
const backup = JSON.parse(await createFullBackupJson());
assert.ok(backup.inventory.find((i: {id: string}) => i.id === voucher.id).usedAt, 'Used voucher survives backup');
const decor = await Promise.all([repository.buyDecoration('sakura-tree'), repository.buyDecoration('sakura-tree')]);
assert.equal(decor.filter((r) => r.success).length, 1);
assert.equal(await repository.getWaterDropsBalance(), 30, 'Decorations must not subtract points');
assert.equal(await repository.useReward((await repository.getInventory()).find((i) => i.itemId === 'sakura-tree')!.id), false);
console.log('PASS: free point-based unlocks, repeat thresholds, concurrent claims, single-use vouchers, backup');

await reset();
const today = formatDate(new Date());
assert.equal((await repository.getDailyMissions()).length, 7);
await repository.incrementMissionProgress('reading', 5);
assert.equal((await repository.getDailyMissions()).find((m) => m.id === `mission-reading-${today}`)!.isCompleted, true);
assert.equal((await repository.getDailyMissions()).find((m) => m.id === `mission-mail-3-${today}`)!.currentCount, 0, 'Reading cannot complete cat mail missions');
await repository.incrementMissionProgress('review', 5);
await repository.incrementMissionProgress('cat_mail', 1);
assert.equal((await repository.getTransactions()).filter((t) => t.referenceId === `mission-all-bonus-${today}`).length, 1, 'Core bonus does not require all extended missions');
await repository.getDailyMissions();
assert.equal((await repository.getDailyMissions()).find((m) => m.id === `mission-reading-${today}`)!.currentCount, 5, 'Refreshing preserves progress');
const before = await repository.getWaterDropsBalance();
await Promise.all([repository.awardDrops(9, 'same-reference', 'test'), repository.awardDrops(9, 'same-reference', 'test')]);
assert.equal(await repository.getWaterDropsBalance(), before + 9);
console.log('PASS: seven missions, core bonus, preserved progress, idempotent rewards');

await reset();
assert.equal((await repository.buyDecoration('hint-ticket')).success, true);
const hint = (await repository.getInventory()).find((item) => item.itemId === 'hint-ticket')!;
assert.equal(await repository.useReward(hint.id), true);
assert.equal(await repository.useReward(hint.id), false);
assert.equal(await repository.getWaterDropsBalance(), 15);
console.log('PASS: hint tickets use once without subtracting points');

await reset();
const questions = (await repository.getAllQuestions()).slice(0, 10);
await repository.saveAttempt({ id: 'test-attempt', mode: 'practice', title: 'test', startedAt: Date.now(), questionIds: questions.map((q) => q.id), currentQuestionIndex: 0, timeSpentSeconds: 0, isFinished: false,
  responses: Object.fromEntries(questions.map((q) => [q.id, { questionId: q.id, selectedChoiceId: q.correctChoiceId, isCorrect: true, isGuessed: false, confidence: 'high', choiceOrder: q.choices.map((c) => c.id), timeSpentMs: 0 }])) });
assert.equal((await repository.getLearningMilestones()).find((m) => m.id === 'correct-10')!.claimed, true);
const afterMilestone = await repository.getWaterDropsBalance();
await repository.getLearningMilestones();
assert.equal(await repository.getWaterDropsBalance(), afterMilestone, 'Milestone cannot reward twice');
await db.close();
await db.open();
const saved = await repository.getAttemptById('test-attempt');
assert.equal(saved!.isFinished, false);
assert.deepEqual(saved!.questionIds, questions.map((q) => q.id));
assert.equal((await repository.getActiveAttempt())!.id, saved!.id);
assert.deepEqual(saved!.responses[questions[0].id].choiceOrder, questions[0].choices.map((c) => c.id));
await repository.saveAttempt({ ...saved!, isFinished: true, completedAt: Date.now(), score: { correct: 10, total: 10, accuracy: 100 } });
assert.equal((await repository.getAllAttempts()).length, 1);
assert.equal((await repository.getAttemptById(saved!.id))!.score!.correct, 10);
console.log('PASS: answer history persists after database reopen; submission updates the same attempt');
await db.delete();
console.log('PASS: lifetime milestone awards once');
