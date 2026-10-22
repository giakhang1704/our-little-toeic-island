# Project Plan: Our Little TOEIC Island

A personal learning website for your partner, combining TOEIC Listening & Reading practice with a small island that grows through consistent study.

**Target:** 800+ TOEIC Listening & Reading.

The website should help your partner practice, understand mistakes, and return regularly. The game provides motivation; the learning system determines what needs practice.

## 1. Product Goals and Boundaries

The website should allow your partner to:

1. Upload study materials and turn supported formats into interactive questions.
2. Practice individual TOEIC Parts or complete question groups.
3. Review incorrect answers and answers they guessed.
4. Complete short daily missions.
5. Earn decorations and unlock personal messages from you.
6. Track progress using accuracy, recurring mistakes, and performance on unfamiliar questions.

### Working assumptions

| Item | Initial assumption |
|---|---|
| Learners | One: your partner |
| Content manager | Primarily you |
| Primary device | One browser/device initially |
| Daily session | Approximately 15–25 minutes, adjustable |
| Content source | Materials you provide |
| AI dependency | None for the first version |
| Deployment | Static frontend on a free hosting tier, within applicable limits |
| Data storage | Local browser database with export/import backup |

**Important boundary:** one learner does not automatically mean local storage is sufficient. If you upload content on your laptop and expect it to appear on your partner’s phone, you need either a file-transfer workflow or cloud synchronization.

For the first version, use **exportable study packs**. Add cloud synchronization if transferring packs becomes inconvenient.

## 2. Overall User Experience

The main navigation should contain five sections:

| Section | Purpose |
|---|---|
| My Island | Home screen, daily missions, decorations, companion |
| Practice | Select a Part, question set, or practice mode |
| Review Garden | Review due questions and recurring mistakes |
| Study Library | Import, inspect, and manage study packs |
| Progress | View learning history and skill weaknesses |

Settings can contain sound, animation, daily workload, backup, and data management.

### Typical daily session

1. Open the website.
2. See a personal greeting and three manageable missions.
3. Complete a short review session.
4. Practice new questions.
5. Read explanations and mark mistakes.
6. Receive water drops.
7. Decorate the island or unlock a message.
8. See a brief completion screen and stop.

The home screen should prioritize **Continue learning** over charts, menus, or shops.

## 3. Visual Direction

Use a cozy, illustrated island with:

- One small house.
- A garden for review activities.
- A mailbox for personal messages.
- A dock representing weekly challenges.
- A companion, such as a cat.
- A limited number of decoration slots.

The island should be a **fixed 2D scene with clickable locations**, not an open-world game. This makes implementation manageable and keeps the website usable on mobile.

### Design principles

- Soft colors with readable contrast.
- Large answer buttons.
- Minimal animation during questions.
- Optional sound, disabled initially.
- Support reduced motion.
- Encourage effort without babying the learner.
- No punishment for missed days.

Use a vertically arranged mobile layout. Reading passages should appear above their questions on phones and beside them on larger screens.

## 4. Learning Modes

Implement two clearly separated modes.

| Behavior | Practice mode | Test mode |
|---|---|---|
| Explanations | After answering or finishing a group | After submission |
| Audio replay | Allowed | Controlled according to the test session |
| Transcript | Available after answering | Hidden until submission |
| Answer shuffle | Optional where safe | Disabled |
| Timing | Optional or informational | Enforced |
| Mistake tagging | During review | After submission |
| Purpose | Learning and correction | Measuring performance |

Do not describe a shortened custom quiz as an official TOEIC simulation. Call it a **mini-test**.

Full-length test support can be added after the practice system is reliable.

## 5. Question Rendering by TOEIC Part

Build reusable question components instead of seven unrelated screens.

| Part | Required content | Rendering behavior |
|---|---|---|
| Part 1 | Image, audio, answer choices/labels | Show image and audio controls |
| Part 2 | Audio, answer choices/labels | Preserve original audio-choice order |
| Part 3 | Shared conversation, grouped questions, optional graphic | Keep the conversation and its questions together |
| Part 4 | Shared talk, grouped questions, optional graphic | Same grouped structure |
| Part 5 | Sentence with blank, choices | Render individual question |
| Part 6 | Passage with blanks, grouped questions | Preserve passage and question relationships |
| Part 7 | One or more documents, grouped questions | Display all related documents together |

For Listening content where choices are spoken rather than printed, do not reveal a written transcription before answering.

Each question should support:

- Selected answer.
- “I guessed this” flag.
- Optional confidence level.
- Explanation.
- Topic tags.
- Mistake category.
- Original source question number.

## 6. Content Import and Preparation

This is the highest-risk feature technically. Build it in stages.

### Stage A: Structured study packs

Start with a ZIP file containing:

```text
study-pack/
  manifest.json
  questions.json
  assets/
    photo-001.jpg
    conversation-001.mp3
```

The manifest stores:

- Schema version.
- Pack ID and title.
- Source label.
- Included Parts.
- Asset references.

Question data stores:

- Question and group IDs.
- Prompt and choices.
- Correct choice ID.
- Explanation.
- Topic tags.
- Transcript, if available.
- Audio timestamps, if available.
- Shuffle permissions.

Also provide a simple text import format for Part 5 so you can add content without editing JSON manually.

### Stage B: Assisted PDF import

Workflow:

1. Upload PDF.
2. Display the original document.
3. Extract available text.
4. Suggest question boundaries and answer choices.
5. Let you correct the suggestions.
6. Attach answer keys and media.
7. Validate.
8. Save the approved pack.

Do not automatically publish extracted questions into the learner’s library before review.

### Stage C: Scanned PDFs

OCR should be a later extension. It adds errors around columns, numbering, images, and answer choices.

If extraction fails, the fallback should be useful: display the original page and allow manual entry of the question fields.

### Validation rules

Reject or flag:

- Duplicate question IDs.
- Missing referenced assets.
- Correct answers that do not match a choice ID.
- Missing group references.
- Invalid audio timestamps.
- Empty prompts where a prompt is required.
- Unsupported schema versions.

A pack without an answer key can be saved as **ungraded practice**. The application must not invent correct answers.

Imported text should render as plain text or sanitized markup, never unrestricted HTML.

## 7. Audio Workflow

Support two input patterns.

### Separate audio clips

Attach one file to a question or question group.

### One long recording

Attach the recording and define:

- Start timestamp.
- End timestamp.
- Related question group.

Provide a simple timestamp editor:

1. Play audio.
2. Click “Set start.”
3. Continue playing.
4. Click “Set end.”
5. Preview the segment.
6. Save.

Store timestamp references rather than generating new audio files initially.

Practice controls should include replay and optional playback speed adjustment. Test mode should use its own playback restrictions.

Audio should start through a deliberate user action, and interruptions should be handled without silently losing the session.

## 8. Correct Shuffle Behavior

Store answers using stable IDs:

```json
{
  "id": "q-001",
  "choices": [
    { "id": "choice-by", "text": "by" },
    { "id": "choice-at", "text": "at" },
    { "id": "choice-in", "text": "in" },
    { "id": "choice-during", "text": "during" }
  ],
  "correctChoiceId": "choice-by"
}
```

When starting an attempt:

1. Check whether shuffle is allowed.
2. Shuffle the choice IDs.
3. Save that order in the attempt.
4. Assign visible labels A/B/C/D.
5. Grade using the stable choice ID.

Never regenerate the order on a React render or page refresh.

### Restrictions

- Disable choice shuffle for Listening initially.
- Disable it for choices that reference other labels.
- Preserve question groups.
- Preserve blank order in Part 6.
- Keep original order in test mode.

Question shuffle and answer-choice shuffle must be separate settings.

## 9. Game Design

Use one currency: **water drops**.

Keep three types of progress distinct:

| Progress type | Meaning |
|---|---|
| Learning metrics | Accuracy, timing, mistakes, review performance |
| Water drops | Participation in meaningful learning activities |
| Island development | Decorations and milestones unlocked |

Decorations must not imply that the learner has reached a particular TOEIC score.

### Minigame A: Mail for the Cat

The companion needs help finishing letters.

- Each round contains approximately five Part 5 questions.
- Answering a question completes part of the letter.
- Incorrect answers receive a short explanation.
- The learner reviews mistakes before sending the letter.
- Sending the letter earns water drops.

Do not force unrelated uploaded sentences into an invented coherent email. They can be separate “sentence cards” the cat is proofreading.

### Minigame B: Review Garden

The garden represents scheduled review.

- Each plant corresponds to a review item or small review set.
- Due items become available to water.
- Completing review makes the plant grow.
- Incorrect answers return sooner.
- Plants never die because the learner missed a day.

The garden is a visual entrance to the review system, not a separate question database.

### Later minigames

| Game | Additional content needed |
|---|---|
| Email Detective | Passage evidence locations |
| Message Decoder | Audio clips, timestamps, optional transcript |
| Weekend Voyage | A reserved set of unfamiliar questions |

Launch with the first two games. Add others only after seeing what your partner actually enjoys.

## 10. Missions and Rewards

Generate missions from available content and study history.

### Example daily missions

- Review up to five due questions.
- Complete ten new Reading questions.
- Complete one Listening question group.

If there is no Listening content, replace that mission instead of displaying an impossible task.

If there are no due reviews, offer a short revision activity.

### Initial reward rules

| Action | Proposed reward |
|---|---:|
| Complete a practice set and review its mistakes | 10 drops |
| Complete a scheduled review session | 10 drops |
| Complete the daily mission set | 5 bonus drops |
| Repeat the same completed session immediately | No extra drops |

These are initial balancing values, not fixed requirements.

Award currency through a reward ledger with a unique completion reference. Refreshing the page must not issue the same reward twice.

### Personal rewards

- Letters written by you.
- A decoration based on a shared memory.
- A movie-choice voucher.
- A planned snack or date reward.

Prepare messages and rewards manually. Avoid requiring an AI service to generate affection or encouragement.

## 11. Review Scheduling

Start with a transparent rule-based scheduler.

Suggested initial intervals:

- Incorrect answer: review the next day.
- Correct but guessed: review the next day.
- First confident successful review: three days.
- Next successful review: seven days.
- Next successful review: fourteen days.

An incorrect review resets the interval to a short delay.

These intervals are implementation defaults that can be adjusted after use.

**Separate immediate correction from delayed recall.** Answering correctly immediately after seeing the explanation should not advance the review interval.

Store:

- Last review date.
- Next due date.
- Current interval.
- Consecutive successful reviews.
- Mistake count.
- Last confidence flag.

Cap the daily review workload so a backlog does not overwhelm the learner. Show remaining items honestly rather than silently dropping them.

## 12. Progress Reporting

The dashboard should answer:

1. What am I improving at?
2. What do I repeatedly get wrong?
3. What should I practice next?

Display:

- First-attempt accuracy by Part.
- Accuracy by topic, with sample counts.
- New-question performance separately from repeated-question performance.
- Average response time for comparable Reading activities.
- Review completion.
- Recurring mistake categories.
- Weekly study activity.

Avoid ranking weaknesses from only one or two questions. Show “Not enough data” when evidence is thin.

Do not automatically convert arbitrary quiz accuracy into an 800-point prediction. If a source provides a conversion table for a particular test, any estimate should remain tied to that test and clearly labeled.

## 13. Technical Architecture

### Recommended initial stack

| Layer | Choice |
|---|---|
| Frontend | React + TypeScript |
| Build tooling | Vite |
| Styling | Tailwind CSS |
| Routing | React Router |
| Local database | Dexie / IndexedDB |
| Input validation | Zod |
| PDF support | PDF.js |
| Audio | Native HTML audio |
| Game visuals | SVG/images and CSS animation |
| Deployment | Vercel Hobby, within applicable limits |
| Version control | GitHub |

No separate backend is required for the local-first version.

### Suggested project structure

```text
src/
  app/
  features/
    island/
    practice/
    review/
    missions/
    library/
    progress/
    settings/
  components/
  domain/
    grading/
    shuffle/
    scheduling/
    rewards/
    validation/
  data/
    database/
    repositories/
    migrations/
  content/
    importers/
    exporters/
  assets/
```

Keep grading, scheduling, and reward logic independent of UI components. This makes them easier to verify and reuse across games.

Use a repository layer for persistence so cloud storage can be added later without rewriting every screen.

## 14. Data Model

| Entity | Main responsibility |
|---|---|
| StudyPack | Pack metadata and schema version |
| QuestionGroup | Shared passage, documents, audio, and ordering |
| Question | Prompt, choices, correct answer, explanation, tags |
| Asset | Image/audio metadata and local blob |
| Attempt | Session mode, status, question order, timestamps |
| Response | Answer, confidence, choice order, result |
| ReviewItem | Due date and review history |
| Mission | Daily task and completion condition |
| RewardTransaction | Currency earned or spent |
| InventoryItem | Unlocked decorations |
| IslandPlacement | Decoration positions |
| PersonalMessage | Message content and unlock condition |
| Settings | Preferences and daily workload |

Save a content version or snapshot with attempts. Editing an answer key later must not silently rewrite the meaning of historical results.

## 15. Backup and Privacy

Provide two different exports:

- **Study pack export:** questions and assets for transfer.
- **Full backup:** study packs, attempts, progress, rewards, and settings.

A full backup should include media files, not just JSON references.

Before restoring:

1. Validate the archive.
2. Show what it contains.
3. Offer a clear restore strategy.
4. Avoid silently overwriting existing progress.

Local storage means data stays in that browser, but it is not a backup.

Also distinguish **a personal-use website from a private website**. A deployed frontend can be publicly reachable. Do not bundle private letters, licensed study packs, or sensitive information into public frontend assets.

If private remote access becomes necessary, add proper authentication and server-enforced authorization. A frontend-only password screen is not sufficient.

## 16. Implementation Roadmap

These are planning estimates for someone comfortable with React. Actual time depends mainly on content preparation and PDF complexity.

| Phase | Work | Completion criterion | Estimate |
|---|---|---|---|
| 1. Scope and sample content | Choose style, device workflow, sample packs | One approved content schema and realistic samples | 1–2 days |
| 2. Learning foundation | Part 5 rendering, grading, safe shuffle, persistence | A complete practice session survives refresh | 3–4 days |
| 3. Import and backup | Structured pack import, validation, export/restore | Pack and progress round-trip successfully | 2–3 days |
| 4. Review and missions | Scheduler, guessed answers, daily tasks | Study → correction → delayed review works | 2–3 days |
| 5. Island and games | Two game presentations, currency, decorations, letters | Rewards unlock correctly without duplication | 3–4 days |
| 6. Grouped Reading and Listening | Shared passages, images, audio, timestamps | Representative content from all Parts works | 4–6 days |
| 7. Pilot and deployment | Mobile checks, accessibility, fixes | Your partner completes several sessions independently | 2–3 days |
| 8. Assisted PDF import | Extraction and correction interface | Supported sample PDFs import with review | Separate 3–7+ days |

A focused Part 5 pilot can arrive earlier. The fuller version is more realistically **several weeks of part-time work**, especially once Listening and reliable import are included.

## 17. Verification Checklist

Prioritize failures that would harm learning or lose progress.

### Learning correctness

- [ ] Shuffling never changes which answer is correct.
- [ ] Refreshing preserves question and choice order.
- [ ] Related questions stay with their passage/audio.
- [ ] Practice feedback does not leak into test mode.
- [ ] Guessed correct answers enter review.
- [ ] Immediate retries do not count as delayed mastery.

### Data reliability

- [ ] Interrupted sessions resume.
- [ ] Invalid imports do not partially corrupt the library.
- [ ] Missing media produces a clear message.
- [ ] Backup and restore preserve media and progress.
- [ ] Updating a study pack preserves historical attempts.

### Game behavior

- [ ] Rewards are issued once.
- [ ] Spending cannot produce a negative balance.
- [ ] Missions only request available content.
- [ ] Missed days do not destroy progress.
- [ ] Decorations remain after refresh.

### Device behavior

- [ ] Questions and passages are readable on the actual phone.
- [ ] Audio works after user interaction.
- [ ] Navigation is keyboard accessible.
- [ ] Reduced-motion settings are respected.

## 18. What to Build First

The first playable version should contain:

- One small island.
- One companion.
- A reviewed Part 5 question pack.
- Mail for the Cat.
- Review Garden.
- Three daily missions.
- A few decorations.
- Several personal letters.
- Working backup and restore.

Then let your partner use it for a week. Observe whether they understand the questions, read explanations, return voluntarily, and enjoy the rewards.

**The main product risk is building a charming game around unreliable content.** Make importing, grading, explanations, and review trustworthy first; the island should make those useful activities more inviting.
