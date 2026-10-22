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
  missionType?: 'review';
  onExit: () => void;
}

export const PracticeSession: React.FC<PracticeSessionProps> = ({
  mode,
  title,
  partFilter,
  packId,
  questionLimit,
  missionType,
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

  // Navigator Drawer & Submit Confirm
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  // Result filter tab after submitting
  const [resultFilter, setResultFilter] = useState<'all' | 'wrong' | 'guessed' | 'correct'>('all');

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

      // Timer setup for test mode (~75s per question)
      if (mode === 'test') {
        const totalSecs = Math.max(pool.length * 75, 120);
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

  const answeredCount = Object.values(responses).filter((r) => r.selectedChoiceId !== null).length;
  const unansweredCount = questions.length - answeredCount;

  const handleSelectChoice = async (choiceId: string) => {
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
      const progressType = currentQ.part <= 4 ? 'listening' : 'reading';
      await repository.incrementMissionProgress(progressType, 1);
      if (missionType === 'review') await repository.incrementMissionProgress('review', 1);
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

  const handleClickSubmitButton = () => {
    soundFx.playSoftPop();
    if (mode === 'test' && unansweredCount > 0) {
      setShowSubmitConfirm(true);
    } else {
      handleCompleteSession();
    }
  };

  const handleCompleteSession = async () => {
    setShowSubmitConfirm(false);
    soundFx.playWaterDrop();
    confetti({ particleCount: 70, spread: 85, origin: { y: 0.6 } });

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

    // Award water drops
    await repository.awardDrops(
      REWARD_AMOUNTS.PRACTICE_COMPLETION,
      `practice-${attemptId}`,
      `Hoàn thành ${title}`
    );

    // Mission progress
    await repository.incrementMissionProgress('reading', 1);

    setIsFinished(true);
  };

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  // POST-TEST RESULT & DETAILED ANSWER REVIEW SCREEN
  if (isFinished) {
    const total = questions.length;
    const correct = Object.values(responses).filter((r) => r.isCorrect).length;
    const incorrect = total - correct;
    const guessed = Object.values(responses).filter((r) => r.isGuessed).length;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

    // Filtered questions for answer review
    const filteredQuestions = questions.filter((q) => {
      const r = responses[q.id];
      if (resultFilter === 'wrong') return !r?.isCorrect;
      if (resultFilter === 'guessed') return r?.isGuessed;
      if (resultFilter === 'correct') return r?.isCorrect;
      return true;
    });

    return (
      <div className="w-full mx-auto bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200 space-y-8 animate-in fade-in">
        {/* Top Header Card */}
        <div className="text-center space-y-2">
          <div className="text-5xl animate-bounce">🏆</div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-800">
            Kết Quả Bài Thi Đã Hoàn Thành!
          </h2>
          <p className="text-xs md:text-sm text-slate-500">{title}</p>
        </div>

        {/* Score Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
          <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 text-center">
            <div className="text-2xl md:text-3xl font-black text-sky-700">
              {correct}/{total}
            </div>
            <div className="text-[11px] font-bold text-sky-600 mt-0.5">Số câu đúng</div>
          </div>
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-center">
            <div className="text-2xl md:text-3xl font-black text-emerald-700">{accuracy}%</div>
            <div className="text-[11px] font-bold text-emerald-600 mt-0.5">Độ chính xác</div>
          </div>
          <div className="p-4 bg-red-50 rounded-2xl border border-red-100 text-center">
            <div className="text-2xl md:text-3xl font-black text-red-700">{incorrect}</div>
            <div className="text-[11px] font-bold text-red-600 mt-0.5">Số câu làm sai</div>
          </div>
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 text-center">
            <div className="text-2xl md:text-3xl font-black text-amber-700">{guessed}</div>
            <div className="text-[11px] font-bold text-amber-600 mt-0.5">Câu đoán mò</div>
          </div>
        </div>

        {/* Drops Reward Banner */}
        <div className="text-center">
          <div className="inline-block bg-sky-100 text-sky-900 border border-sky-300 px-5 py-2.5 rounded-2xl font-extrabold text-xs md:text-sm shadow-xs">
            💧 +{REWARD_AMOUNTS.PRACTICE_COMPLETION} Giọt nước chuyên cần đã được cộng vào tài khoản của em!
          </div>
        </div>

        {/* SECTION: DETAILED ANSWER KEY & EXPLANATIONS (ĐÁP ÁN CHI TIẾT & GIẢI THÍCH) */}
        <div className="space-y-4 pt-4 border-t border-slate-100">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-black text-slate-800 text-base md:text-lg flex items-center gap-2">
                <span>📝</span>
                <span>Bảng Đáp Án Chi Tiết & Lời Giải Ngữ Pháp</span>
              </h3>
              <p className="text-xs text-slate-500">
                Hiển thị đầy đủ đáp án đúng, câu bạn chọn, bản dịch và phân tích bẫy ngữ pháp.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex bg-slate-100 p-1 rounded-2xl text-xs font-bold gap-1 self-stretch sm:self-auto overflow-x-auto">
              <button
                onClick={() => setResultFilter('all')}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  resultFilter === 'all' ? 'bg-white text-slate-800 shadow-xs' : 'text-slate-600'
                }`}
              >
                Tất cả ({total})
              </button>
              <button
                onClick={() => setResultFilter('wrong')}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  resultFilter === 'wrong' ? 'bg-white text-red-700 shadow-xs' : 'text-slate-600'
                }`}
              >
                ❌ Câu sai ({incorrect})
              </button>
              <button
                onClick={() => setResultFilter('guessed')}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  resultFilter === 'guessed' ? 'bg-white text-amber-700 shadow-xs' : 'text-slate-600'
                }`}
              >
                🤔 Đoán mò ({guessed})
              </button>
              <button
                onClick={() => setResultFilter('correct')}
                className={`px-3 py-1.5 rounded-xl transition-all ${
                  resultFilter === 'correct' ? 'bg-white text-emerald-700 shadow-xs' : 'text-slate-600'
                }`}
              >
                ✅ Câu đúng ({correct})
              </button>
            </div>
          </div>

          {/* List of Questions with full explanations */}
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1">
            {filteredQuestions.map((q, idx) => {
              const resp = responses[q.id];
              const isRight = resp?.isCorrect;
              const originalIdx = questions.findIndex((item) => item.id === q.id);
              const choices = getOrderedChoices(q, resp?.choiceOrder);

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-2xl border-2 transition-all space-y-3 ${
                    isRight ? 'bg-emerald-50/30 border-emerald-200' : 'bg-red-50/30 border-red-200'
                  }`}
                >
                  {/* Question header */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-black text-slate-800">
                        Câu {originalIdx + 1} (Part {q.part})
                      </span>
                      {q.topicTags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-semibold"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      {resp?.isGuessed && (
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                          Đoán mò
                        </span>
                      )}
                      <span
                        className={`font-black px-2.5 py-0.5 rounded-full text-xs ${
                          isRight ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {isRight ? '✓ Đúng' : '✕ Chưa đúng'}
                      </span>
                    </div>
                  </div>

                  {/* Question Prompt */}
                  <p className="font-bold text-sm text-slate-800 leading-relaxed">{q.prompt}</p>

                  {/* Choices list showing correct answer and user's answer */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {choices.map(({ label, choice }) => {
                      const isUserPick = resp?.selectedChoiceId === choice.id;
                      const isCorrectChoice = choice.id === q.correctChoiceId;

                      let style = 'bg-white border-slate-200 text-slate-600';
                      if (isCorrectChoice) {
                        style = 'bg-emerald-100/80 border-emerald-500 text-emerald-950 font-bold ring-1 ring-emerald-400';
                      } else if (isUserPick && !isCorrectChoice) {
                        style = 'bg-red-100/80 border-red-500 text-red-950 font-bold line-through';
                      }

                      return (
                        <div
                          key={choice.id}
                          className={`p-2.5 rounded-xl border flex items-center justify-between ${style}`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded-md bg-white/80 border flex items-center justify-center font-bold text-[11px]">
                              {label}
                            </span>
                            <span>{choice.text}</span>
                          </div>
                          {isCorrectChoice && <span className="text-emerald-700 font-bold">✓ Đáp án đúng</span>}
                          {isUserPick && !isCorrectChoice && <span className="text-red-700 font-bold">Bạn chọn</span>}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation Card */}
                  <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-1">
                    <div className="font-bold text-amber-900 flex items-center gap-1.5">
                      <span>💡 Lời giải chi tiết & Ghi nhớ ngữ pháp:</span>
                    </div>
                    <p className="leading-relaxed font-medium">{q.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Exit Button */}
        <div className="pt-4 border-t border-slate-100 text-center">
          <button
            onClick={onExit}
            className="bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm px-8 py-3 rounded-2xl shadow transition-colors"
          >
            Quay Lại Trang Luyện Tập
          </button>
        </div>
      </div>
    );
  }

  const orderedChoices = getOrderedChoices(currentQ, currentResp?.choiceOrder);

  return (
    <div className="w-full mx-auto space-y-6 animate-in fade-in">
      {/* Test Mode Security Banner */}
      {mode === 'test' && (
        <div className="bg-amber-500/10 border-2 border-amber-400/80 p-3.5 rounded-2xl flex items-center justify-between text-xs text-amber-950 font-medium shadow-xs">
          <span className="flex items-center gap-2">
            <span className="text-lg">⏱️</span>
            <span>
              <strong>Chế độ Thi Thử:</strong> Đáp án & lời giải được bảo mật 100%. Sau khi bạn nhấn <strong>Nộp bài</strong>, hệ thống sẽ tính điểm và hiển thị toàn bộ bảng đáp án chi tiết.
            </span>
          </span>
          <span className="font-mono font-bold text-amber-900 shrink-0">
            {formatTimer(secondsRemaining)}
          </span>
        </div>
      )}

      {/* Top Session Bar */}
      <div className="flex items-center justify-between bg-white p-4 rounded-3xl border border-slate-200 shadow-sm gap-2">
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

        {/* Right controls: Navigator Drawer Toggle, Question Counter, Submit Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Question Navigator Drawer Button */}
          <button
            onClick={() => setIsNavigatorOpen(!isNavigatorOpen)}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-1.5"
            title="Mở danh sách toàn bộ câu hỏi"
          >
            <span>📋</span>
            <span className="hidden sm:inline">Câu hỏi:</span>
            <span>
              {answeredCount}/{questions.length}
            </span>
          </button>

          {/* Submit Button */}
          <button
            onClick={handleClickSubmitButton}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs px-4 py-2 rounded-xl shadow transition-colors"
          >
            Nộp bài
          </button>
        </div>
      </div>

      {/* Question Navigator Grid Drawer */}
      {isNavigatorOpen && (
        <div className="bg-white p-5 rounded-3xl border-2 border-slate-200 shadow-md space-y-3 animate-in fade-in">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
            <span>Danh Sách Câu Hỏi Trong Đề ({questions.length} câu):</span>
            <span className="text-slate-400">Bấm số câu để chuyển nhanh</span>
          </div>

          <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-15 gap-2 max-h-48 overflow-y-auto p-1">
            {questions.map((q, idx) => {
              const resp = responses[q.id];
              const isAnswered = resp && resp.selectedChoiceId !== null;
              const isCurrent = idx === currentIndex;

              let btnStyle = 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100';
              if (isCurrent) {
                btnStyle = 'bg-sky-500 text-white border-sky-600 ring-2 ring-sky-300 font-extrabold';
              } else if (isAnswered) {
                btnStyle = 'bg-emerald-100 text-emerald-900 border-emerald-300 font-bold';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => {
                    soundFx.playSoftPop();
                    setCurrentIndex(idx);
                  }}
                  className={`h-9 rounded-xl border text-xs flex items-center justify-center transition-all ${btnStyle}`}
                >
                  {idx + 1}
                  {resp?.isGuessed && <span className="text-[9px] text-amber-500 ml-0.5">•</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Passage or Audio or Image if Grouped */}
        {(currentGroup?.passageText ||
          currentGroup?.passageDocuments ||
          currentQ.imageAssetId ||
          currentQ.part <= 4) && (
          <div className="lg:col-span-7 min-w-0 bg-white rounded-3xl p-5 md:p-8 border border-sky-200 shadow-sm space-y-5">
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
                <h4 className="font-extrabold text-slate-800 text-base md:text-lg">
                  {currentGroup.passageTitle || 'Đoạn văn đọc hiểu'}
                </h4>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-base md:text-lg text-slate-800 leading-[1.9] whitespace-pre-wrap break-words ">
                  {currentGroup.passageText}
                </div>
              </div>
            )}

            {/* Part 7 Multi-Document Passages */}
            {currentGroup?.passageDocuments && (
              <div className="space-y-6">
                {currentGroup.passageDocuments.map((doc, docIdx) => (
                  <div key={docIdx} className="space-y-1.5">
                    <span className="font-extrabold text-sky-800 text-xs bg-sky-50 px-2.5 py-0.5 rounded-md inline-block">
                      {doc.label}
                    </span>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-base md:text-lg text-slate-800 leading-[1.9] whitespace-pre-wrap break-words">
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
              ? 'lg:col-span-5 lg:sticky lg:top-28'
              : 'lg:col-span-12'
          } min-w-0 w-full bg-white rounded-3xl p-5 md:p-8 border border-slate-200 shadow-sm space-y-6`}
        >
          {/* Question Prompt */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-slate-400">
                Câu {currentIndex + 1} / {questions.length}
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

            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-relaxed break-words">
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
                btnStyle = 'bg-sky-50 border-sky-500 text-sky-900 ring-2 ring-sky-300 font-bold';
              }

              return (
                <button
                  key={choice.id}
                  onClick={() => handleSelectChoice(choice.id)}
                  className={`w-full p-4 md:p-5 rounded-2xl border-2 font-semibold text-base md:text-lg transition-all text-left flex items-start gap-3 ${btnStyle}`}
                >
                  <span className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-xs shrink-0">
                    {label}
                  </span>
                  <span>
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
                onClick={handleClickSubmitButton}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2 rounded-xl shadow transition-colors"
              >
                Hoàn thành & Nộp bài 🎉
              </button>
            )}
          </div>
        </div>
      </div>

      {/* SUBMIT CONFIRMATION MODAL */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border-4 border-amber-100 space-y-4 text-center">
            <div className="text-4xl animate-bounce">⚠️</div>
            <h3 className="font-extrabold text-slate-800 text-base">Xác Nhận Nộp Bài Thi</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Bạn vẫn còn <strong className="text-red-600 font-bold">{unansweredCount} câu hỏi</strong> chưa chọn đáp án. Bạn có muốn nộp bài ngay để hệ thống tính điểm và hiển thị toàn bộ đáp án chi tiết không?
            </p>
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700"
              >
                Tiếp tục làm bài
              </button>
              <button
                onClick={handleCompleteSession}
                className="flex-1 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow"
              >
                Nộp bài ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
