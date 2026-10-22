import React, { useEffect, useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  Attempt,
  AttemptResponse,
  ConfidenceLevel,
  MistakeCategory,
  Question,
  QuestionGroup,
  TOEICPart,
} from '../../domain/types';
import { repository } from '../../data/repositories/appRepository';
import { soundFx } from '../../utils/audio';
import { getInitialChoiceOrder, getOrderedChoices } from '../../domain/shuffle/shuffle';
import { REWARD_AMOUNTS } from '../../domain/rewards/rewards';
import { OfficeMeetingSvg } from '../../components/common/SvgIllustrations';

interface PracticeSessionProps {
  mode: 'practice' | 'test';
  title: string;
  partFilter?: TOEICPart;
  packId?: string;
  questionLimit?: number;
  onExit: () => void;
}

export const PracticeSession: React.FC<PracticeSessionProps> = ({
  mode,
  title,
  partFilter,
  packId,
  questionLimit,
  onExit,
}) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [groupsMap, setGroupsMap] = useState<Map<string, QuestionGroup>>(new Map());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, AttemptResponse>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [attemptId] = useState(`att-${Date.now()}`);

  // Test mode timer (seconds remaining)
  const [secondsRemaining, setSecondsRemaining] = useState<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Audio playing state
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioCancelRef = useRef<(() => void) | null>(null);

  // Load questions
  useEffect(() => {
    async function initSession() {
      let pool: Question[] = [];
      if (partFilter) {
        pool = await repository.getQuestionsByPart(partFilter);
      } else if (packId) {
        pool = await repository.getQuestionsByPack(packId);
      } else {
        pool = await repository.getAllQuestions();
      }

      if (questionLimit && questionLimit < pool.length) {
        pool = [...pool].sort(() => 0.5 - Math.random()).slice(0, questionLimit);
      }

      setQuestions(pool);

      // Load groups
      const allGroups = await repository.getAllGroups();
      const gm = new Map<string, QuestionGroup>();
      allGroups.forEach((g) => gm.set(g.id, g));
      setGroupsMap(gm);

      // Pre-initialize choice order safely
      const initialResponses: Record<string, AttemptResponse> = {};
      pool.forEach((q) => {
        const order = getInitialChoiceOrder(q, mode === 'test');
        initialResponses[q.id] = {
          questionId: q.id,
          selectedChoiceId: null,
          isGuessed: false,
          confidence: 'medium',
          choiceOrder: order,
          isCorrect: false,
          timeSpentMs: 0,
        };
      });
      setResponses(initialResponses);

      // Timer setup for test mode
      if (mode === 'test') {
        const totalSecs = Math.max(pool.length * 75, 120); // ~75 seconds per question
        setSecondsRemaining(totalSecs);
      }
    }

    initSession();
  }, [mode, partFilter, packId, questionLimit]);

  // Timer countdown
  useEffect(() => {
    if (mode === 'test' && !isFinished && secondsRemaining > 0) {
      timerRef.current = setTimeout(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            handleCompleteSession();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [mode, isFinished, secondsRemaining]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      if (audioCancelRef.current) audioCancelRef.current();
      soundFx.stopSpeaking();
    };
  }, []);

  if (questions.length === 0) {
    return (
      <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
        <div className="text-4xl animate-bounce mb-3">📖</div>
        <p className="text-slate-600 font-bold">Đang nạp các câu hỏi luyện tập...</p>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const currentGroup = currentQ.groupId ? groupsMap.get(currentQ.groupId) : undefined;
  const currentResp = responses[currentQ.id];
  const isCurrentAnswered = currentResp && currentResp.selectedChoiceId !== null;

  const handleSelectChoice = (choiceId: string) => {
    if (isCurrentAnswered && mode === 'practice') return; // in practice mode, locked after pick
    soundFx.playSoftPop();

    const isCorrect = choiceId === currentQ.correctChoiceId;
    if (mode === 'practice' && isCorrect) {
      soundFx.playSuccessChime();
    }

    setResponses((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        selectedChoiceId: choiceId,
        isCorrect,
      },
    }));

    // In practice mode, if incorrect or guessed, record to review garden
    if (mode === 'practice') {
      if (!isCorrect || currentResp?.isGuessed) {
        repository.recordMistakeForReview(currentQ.id, currentQ.part);
      }
      // Increment reading/listening mission progress
      const missionType = currentQ.part <= 4 ? 'listening' : 'reading';
      repository.incrementMissionProgress(missionType, 1);
    }
  };

  const handleToggleGuessed = () => {
    soundFx.playSoftPop();
    const newGuessed = !currentResp?.isGuessed;
    setResponses((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        isGuessed: newGuessed,
      },
    }));
  };

  const handleSetConfidence = (conf: ConfidenceLevel) => {
    soundFx.playSoftPop();
    setResponses((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        confidence: conf,
      },
    }));
  };

  const handleSetMistakeCategory = (cat: MistakeCategory) => {
    soundFx.playSoftPop();
    setResponses((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        mistakeCategory: cat,
      },
    }));
  };

  const handlePlayAudio = () => {
    if (isPlayingAudio) {
      soundFx.stopSpeaking();
      setIsPlayingAudio(false);
      return;
    }

    soundFx.playSoftPop();
    setIsPlayingAudio(true);

    // Audio text generation:
    // If Part 1: read prompt / choices
    // If Part 2: speak prompt and choices
    // If Part 3/4: speak group transcript
    let audioText = '';
    if (currentGroup?.transcript) {
      audioText = currentGroup.transcript;
    } else if (currentQ.part === 1) {
      audioText = currentQ.choices.map((c) => c.text).join('. ');
    } else if (currentQ.part === 2) {
      audioText = `${currentQ.prompt}. Choice A: ${currentQ.choices[0]?.text || ''}. Choice B: ${currentQ.choices[1]?.text || ''}. Choice C: ${currentQ.choices[2]?.text || ''}.`;
    } else {
      audioText = currentQ.prompt;
    }

    const ctrl = soundFx.speakListeningText(audioText, 0.95, () => {
      setIsPlayingAudio(false);
    });
    audioCancelRef.current = ctrl.cancel;
  };

  const handleCompleteSession = async () => {
    soundFx.playWaterDrop();
    confetti({ particleCount: 60, spread: 80, origin: { y: 0.6 } });

    // Calculate score
    let correct = 0;
    Object.values(responses).forEach((r) => {
      if (r.isCorrect) correct += 1;
      // In test mode, record mistakes & guessed answers to review
      if (mode === 'test' && (!r.isCorrect || r.isGuessed)) {
        const q = questions.find((item) => item.id === r.questionId);
        if (q) repository.recordMistakeForReview(q.id, q.part);
      }
    });

    const total = questions.length;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

    const attempt: Attempt = {
      id: attemptId,
      packId,
      mode,
      title,
      partFilter,
      questionIds: questions.map((q) => q.id),
      currentQuestionIndex: currentIndex,
      responses,
      startedAt: Date.now() - 60000,
      completedAt: Date.now(),
      timeSpentSeconds: 60,
      isFinished: true,
      score: { correct, total, accuracy },
    };

    await repository.saveAttempt(attempt);

    // Award water drops idempotently
    await repository.awardDrops(
      REWARD_AMOUNTS.PRACTICE_COMPLETION,
      `practice-${attemptId}`,
      `Hoàn thành ${title}`
    );

    setIsFinished(true);
  };

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // SUMMARY SCREEN
  if (isFinished) {
    const total = questions.length;
    const correct = Object.values(responses).filter((r) => r.isCorrect).length;
    const guessed = Object.values(responses).filter((r) => r.isGuessed).length;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 shadow-sm border border-slate-200 text-center space-y-6 animate-in fade-in">
        <div className="text-6xl animate-bounce">🏆</div>
        <div>
          <h2 className="text-2xl font-black text-slate-800">Hoàn Thành Bài Luyện Tập!</h2>
          <p className="text-xs text-slate-500 mt-1">{title}</p>
        </div>

        {/* Score grid */}
        <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
          <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100">
            <div className="text-2xl font-black text-sky-700">{correct}/{total}</div>
            <div className="text-[11px] font-bold text-sky-600 mt-0.5">Số câu đúng</div>
          </div>
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
            <div className="text-2xl font-black text-emerald-700">{accuracy}%</div>
            <div className="text-[11px] font-bold text-emerald-600 mt-0.5">Độ chính xác</div>
          </div>
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
            <div className="text-2xl font-black text-amber-700">{guessed}</div>
            <div className="text-[11px] font-bold text-amber-600 mt-0.5">Câu đoán mò</div>
          </div>
        </div>

        {/* Reward */}
        <div className="inline-block bg-sky-100 text-sky-900 border border-sky-300 px-4 py-2 rounded-2xl font-bold text-xs">
          💧 +{REWARD_AMOUNTS.PRACTICE_COMPLETION} Giọt nước đã được chuyển vào đảo của bạn!
        </div>

        {/* Question Review Breakdown */}
        <div className="text-left bg-slate-50 p-4 rounded-2xl border border-slate-200 max-w-lg mx-auto space-y-3">
          <h4 className="font-bold text-xs text-slate-500 uppercase tracking-wider">
            Chi tiết từng câu hỏi & Sửa lỗi:
          </h4>
          <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
            {questions.map((q, idx) => {
              const resp = responses[q.id];
              const isRight = resp?.isCorrect;

              return (
                <div
                  key={q.id}
                  className="p-3 bg-white rounded-xl border border-slate-200 text-xs space-y-1.5"
                >
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-slate-700 truncate max-w-[280px]">
                      {idx + 1}. Part {q.part}: {q.prompt}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded-md ${
                        isRight ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {isRight ? 'Đúng' : 'Sai'}
                    </span>
                  </div>
                  <p className="text-slate-500 text-[11px] leading-relaxed">
                    💡 {q.explanation}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <button
            onClick={onExit}
            className="bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow transition-colors"
          >
            Quay lại Luyện Tập
          </button>
        </div>
      </div>
    );
  }

  const orderedChoices = getOrderedChoices(currentQ, currentResp?.choiceOrder);

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in">
      {/* Top Session Bar */}
      <div className="flex items-center justify-between bg-white p-4 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <button
            onClick={onExit}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs"
          >
            ✕
          </button>
          <div>
            <h3 className="font-extrabold text-slate-800 text-sm truncate max-w-[200px] sm:max-w-xs">
              {title}
            </h3>
            <span className="text-[11px] font-bold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full">
              Part {currentQ.part}
            </span>
          </div>
        </div>

        {/* Center / Right controls */}
        <div className="flex items-center gap-3">
          {mode === 'test' && (
            <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-900 px-3 py-1 rounded-full text-xs font-mono font-bold">
              <span>⏱️</span>
              <span>{formatTimer(secondsRemaining)}</span>
            </div>
          )}

          <div className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            {currentIndex + 1} / {questions.length}
          </div>

          <button
            onClick={handleCompleteSession}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-3.5 py-1.5 rounded-xl shadow transition-colors"
          >
            Nộp bài
          </button>
        </div>
      </div>

      {/* Main Content: Grouped Layout (Responsive side-by-side or stacked) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Passage or Audio or Image if Grouped */}
        {(currentGroup?.passageText ||
          currentGroup?.passageDocuments ||
          currentQ.imageAssetId ||
          currentQ.part <= 4) && (
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
            {/* Audio Bar for Listening Parts */}
            {currentQ.part <= 4 && (
              <div className="bg-sky-50 p-4 rounded-2xl border border-sky-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePlayAudio}
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold shadow-md transition-transform hover:scale-105 ${
                      isPlayingAudio ? 'bg-amber-500' : 'bg-sky-500'
                    }`}
                  >
                    {isPlayingAudio ? '⏹' : '▶'}
                  </button>
                  <div>
                    <div className="font-bold text-slate-800 text-xs">
                      {isPlayingAudio ? 'Đang phát âm thanh...' : 'Nhấn để nghe Audio'}
                    </div>
                    <div className="text-[10px] text-slate-500">
                      Chuẩn giọng đọc TOEIC Listening ETS
                    </div>
                  </div>
                </div>

                {isPlayingAudio && (
                  <span className="flex items-center gap-1 text-xs text-sky-600 font-bold animate-pulse">
                    <span className="w-1.5 h-3 bg-sky-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-4 bg-sky-500 rounded-full animate-bounce delay-75"></span>
                    <span className="w-1.5 h-2 bg-sky-500 rounded-full animate-bounce delay-150"></span>
                  </span>
                )}
              </div>
            )}

            {/* Part 1 Photograph Display */}
            {currentQ.part === 1 && (
              <div className="space-y-2">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Hình ảnh đề bài:
                </div>
                <OfficeMeetingSvg className="w-full h-56" />
              </div>
            )}

            {/* Part 6 Single Passage */}
            {currentGroup?.passageText && (
              <div className="space-y-2">
                <h4 className="font-extrabold text-slate-800 text-xs">
                  {currentGroup.passageTitle || 'Đoạn văn đọc hiểu'}
                </h4>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs md:text-sm text-slate-700 leading-relaxed font-mono whitespace-pre-wrap max-h-96 overflow-y-auto">
                  {currentGroup.passageText}
                </div>
              </div>
            )}

            {/* Part 7 Multi-Document Passages */}
            {currentGroup?.passageDocuments && (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
                {currentGroup.passageDocuments.map((doc, docIdx) => (
                  <div key={docIdx} className="space-y-1.5">
                    <span className="font-extrabold text-sky-800 text-xs bg-sky-50 px-2.5 py-0.5 rounded-md inline-block">
                      {doc.label}
                    </span>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs md:text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                      {doc.text}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Transcript in Practice Mode after answering */}
            {mode === 'practice' && isCurrentAnswered && currentGroup?.transcript && (
              <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs space-y-1 animate-in fade-in">
                <div className="font-bold text-amber-900">📝 Transcript đoạn hội thoại / bài nói:</div>
                <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">
                  {currentGroup.transcript}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Right Column: Question & Choices */}
        <div
          className={`${
            currentGroup?.passageText ||
            currentGroup?.passageDocuments ||
            currentQ.imageAssetId ||
            currentQ.part <= 4
              ? 'lg:col-span-6'
              : 'lg:col-span-12 max-w-2xl mx-auto'
          } w-full bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6`}
        >
          {/* Question Prompt */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-slate-400">
                Câu {currentIndex + 1}
              </span>
              {currentQ.topicTags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-semibold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="text-base md:text-lg font-bold text-slate-800 leading-relaxed">
              {currentQ.part === 2 && mode === 'test'
                ? '(Nghe audio và chọn câu trả lời tương ứng)'
                : currentQ.prompt}
            </h3>
          </div>

          {/* Choices */}
          <div className="space-y-2.5">
            {orderedChoices.map(({ label, choice }) => {
              const isSelected = currentResp?.selectedChoiceId === choice.id;
              const isRight = choice.id === currentQ.correctChoiceId;

              let btnStyle = 'bg-slate-50 border-slate-200 hover:border-sky-300 text-slate-700';

              if (mode === 'practice' && isCurrentAnswered) {
                if (isRight) {
                  btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-300';
                } else if (isSelected && !isRight) {
                  btnStyle = 'bg-red-50 border-red-500 text-red-900 ring-2 ring-red-300';
                } else {
                  btnStyle = 'bg-slate-50 border-slate-200 opacity-60 text-slate-500';
                }
              } else if (isSelected) {
                btnStyle = 'bg-sky-50 border-sky-500 text-sky-900 ring-2 ring-sky-300';
              }

              return (
                <button
                  key={choice.id}
                  onClick={() => handleSelectChoice(choice.id)}
                  className={`w-full p-4 rounded-2xl border-2 font-semibold text-sm transition-all text-left flex items-start gap-3 ${btnStyle}`}
                >
                  <span className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-xs shrink-0">
                    {label}
                  </span>
                  <span>
                    {/* In Part 2 Practice mode before picking, choices are spoken; reveal on answer */}
                    {currentQ.part === 2 && !isCurrentAnswered && mode === 'practice'
                      ? `(${label}) Nghe đáp án ${label}`
                      : choice.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Guessed flag & Confidence */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100">
            <label className="flex items-center gap-2 cursor-pointer select-none text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 hover:bg-amber-100">
              <input
                type="checkbox"
                checked={currentResp?.isGuessed || false}
                onChange={handleToggleGuessed}
                className="rounded text-amber-500 focus:ring-0"
              />
              <span>🤔 Câu này em đoán mò</span>
            </label>

            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-slate-400">Độ tự tin:</span>
              {(['high', 'medium', 'low'] as ConfidenceLevel[]).map((c) => (
                <button
                  key={c}
                  onClick={() => handleSetConfidence(c)}
                  className={`px-2 py-0.5 rounded-lg font-bold text-[11px] ${
                    currentResp?.confidence === c
                      ? 'bg-slate-800 text-white'
                      : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  {c === 'high' ? 'Cao' : c === 'medium' ? 'Vừa' : 'Thấp'}
                </button>
              ))}
            </div>
          </div>

          {/* Practice mode Explanation Card */}
          {mode === 'practice' && isCurrentAnswered && (
            <div
              className={`p-4 rounded-2xl border text-sm leading-relaxed space-y-3 animate-in fade-in ${
                currentResp?.isCorrect
                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                  : 'bg-amber-50/80 border-amber-200 text-amber-950'
              }`}
            >
              <div className="font-bold flex items-center justify-between">
                <span>{currentResp?.isCorrect ? '✨ Chính xác!' : '💡 Lời giải chi tiết:'}</span>
                {!currentResp?.isCorrect && (
                  <span className="text-[10px] text-amber-800 bg-amber-200/70 px-2 py-0.5 rounded-md font-semibold">
                    Đã thêm vào Vườn Ôn Tập
                  </span>
                )}
              </div>
              <p>{currentQ.explanation}</p>

              {/* Categorize mistake if incorrect */}
              {!currentResp?.isCorrect && (
                <div className="pt-2 border-t border-amber-200/60">
                  <span className="block text-[11px] font-bold text-amber-900 mb-1">
                    Em sai do nguyên nhân nào?
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { id: 'vocabulary', label: 'Thiếu từ vựng' },
                      { id: 'grammar', label: 'Bẫy ngữ pháp' },
                      { id: 'misheard', label: 'Nghe nhầm âm' },
                      { id: 'misread', label: 'Đọc lướt ẩu' },
                      { id: 'time_pressure', label: 'Áp lực thời gian' },
                    ].map((m) => (
                      <button
                        key={m.id}
                        onClick={() => handleSetMistakeCategory(m.id as MistakeCategory)}
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded-lg border transition-all ${
                          currentResp?.mistakeCategory === m.id
                            ? 'bg-amber-600 text-white border-amber-700'
                            : 'bg-white/80 border-amber-300 text-amber-900 hover:bg-amber-100'
                        }`}
                      >
                        {m.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className={`text-xs font-bold px-4 py-2 rounded-xl border ${
                currentIndex > 0
                  ? 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  : 'border-slate-100 text-slate-300 cursor-not-allowed'
              }`}
            >
              ← Câu trước
            </button>

            {currentIndex < questions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex((prev) => Math.min(questions.length - 1, prev + 1))}
                className="bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs px-5 py-2 rounded-xl shadow transition-colors"
              >
                Câu tiếp theo →
              </button>
            ) : (
              <button
                onClick={handleCompleteSession}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2 rounded-xl shadow transition-colors"
              >
                Hoàn thành bài tập 🎉
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
