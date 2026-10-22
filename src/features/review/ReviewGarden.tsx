import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { ConfidenceLevel, Question, ReviewItem, TOEICPart } from '../../domain/types';
import { repository } from '../../data/repositories/appRepository';
import { soundFx } from '../../utils/audio';
import { REWARD_AMOUNTS } from '../../domain/rewards/rewards';
import { formatDate } from '../../domain/scheduling/scheduling';
import { getOrderedChoices } from '../../domain/shuffle/shuffle';

export const ReviewGarden: React.FC<{ onBackToHome?: () => void }> = ({ onBackToHome }) => {
  const [reviewItems, setReviewItems] = useState<ReviewItem[]>([]);
  const [questionsMap, setQuestionsMap] = useState<Map<string, Question>>(new Map());
  const [filterPart, setFilterPart] = useState<number | 'all'>('all');
  const [tab, setTab] = useState<'due' | 'all' | 'mastered'>('due');

  // Active watering/reviewing session state
  const [isWateringActive, setIsWateringActive] = useState(false);
  const [sessionQueue, setSessionQueue] = useState<ReviewItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [isGuessed, setIsGuessed] = useState(false);
  const [confidence, setConfidence] = useState<ConfidenceLevel>('medium');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sessionComplete, setSessionComplete] = useState(false);
  const [reviewedCount, setReviewedCount] = useState(0);

  const todayStr = formatDate(new Date());

  const loadData = async () => {
    const items = await repository.getAllReviewItems();
    setReviewItems(items);

    const questionIds = items.map((i) => i.questionId);
    if (questionIds.length > 0) {
      const qs = await repository.getQuestionsByIds(questionIds);
      const qm = new Map<string, Question>();
      qs.forEach((q) => qm.set(q.id, q));
      setQuestionsMap(qm);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const dueItems = reviewItems.filter((i) => i.nextDueDate <= todayStr);
  const masteredItems = reviewItems.filter((i) => i.plantStage === 3);

  // Filtered list
  const currentList = (
    tab === 'due' ? dueItems : tab === 'mastered' ? masteredItems : reviewItems
  ).filter((i) => filterPart === 'all' || i.part === filterPart);

  const startWateringSession = (itemsToReview: ReviewItem[]) => {
    if (itemsToReview.length === 0) return;
    soundFx.playWaterDrop();
    setSessionQueue(itemsToReview);
    setCurrentIndex(0);
    setSelectedChoiceId(null);
    setIsGuessed(false);
    setConfidence('medium');
    setIsSubmitted(false);
    setSessionComplete(false);
    setReviewedCount(0);
    setIsWateringActive(true);
  };

  const handleSelectChoice = (choiceId: string) => {
    if (isSubmitted) return;
    soundFx.playSoftPop();
    setSelectedChoiceId(choiceId);
  };

  const handleSubmitAnswer = async () => {
    if (!selectedChoiceId) return;

    const currentItem = sessionQueue[currentIndex];
    const question = questionsMap.get(currentItem.questionId);
    if (!question) return;

    const isCorrect = selectedChoiceId === question.correctChoiceId;
    if (isCorrect) {
      soundFx.playSuccessChime();
    } else {
      soundFx.playSoftPop();
    }

    setIsSubmitted(true);

    // Save spaced repetition update
    await repository.submitReviewAnswer(currentItem.questionId, isCorrect, isGuessed, confidence);
    setReviewedCount((prev) => prev + 1);

    // Update mission progress
    await repository.incrementMissionProgress('review', 1);
  };

  const handleNextInSession = async () => {
    soundFx.playSoftPop();
    if (currentIndex < sessionQueue.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedChoiceId(null);
      setIsGuessed(false);
      setConfidence('medium');
      setIsSubmitted(false);
    } else {
      // Completed full session
      soundFx.playWaterDrop();
      confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });

      await repository.awardDrops(
        REWARD_AMOUNTS.REVIEW_COMPLETION,
        `review-session-${Date.now()}`,
        'Hoàn thành phiên tưới nước và ôn tập củng cố kiến thức!'
      );

      setSessionComplete(true);
      await loadData();
    }
  };

  const renderPlantIcon = (stage: number) => {
    switch (stage) {
      case 3:
        return '🌸'; // Blossom
      case 2:
        return '🌷'; // Bud
      case 1:
        return '🌿'; // Sprout
      default:
        return '🌱'; // Seedling
    }
  };

  const renderPlantLabel = (stage: number) => {
    switch (stage) {
      case 3:
        return 'Nở Hoa (Đã thuần thục)';
      case 2:
        return 'Đang Ra Nụ (Đúng 2 lần)';
      case 1:
        return 'Cây Non (Đúng 1 lần)';
      default:
        return 'Hạt Mầm (Cần củng cố)';
    }
  };

  // ACTIVE WATERING SESSION VIEW
  if (isWateringActive) {
    if (sessionComplete) {
      return (
        <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 shadow-sm border-2 border-sky-100 text-center space-y-6 animate-in fade-in">
          <div className="text-6xl animate-bounce">🌻</div>
          <div>
            <h3 className="text-2xl font-black text-slate-800">Vườn Cây Đã Được Tưới Xong!</h3>
            <p className="text-sm text-slate-600 mt-1">
              Bạn đã ôn tập xong {reviewedCount} câu hỏi. Các mầm cây đang lớn dần và bung nở hoa rực rỡ!
            </p>
          </div>
          <div className="bg-sky-50 border border-sky-200 text-sky-800 font-bold text-sm px-4 py-2.5 rounded-2xl inline-block">
            💧 +{REWARD_AMOUNTS.REVIEW_COMPLETION} Giọt nước đã được chuyển vào túi của bạn!
          </div>
          <div>
            <button
              onClick={() => {
                setIsWateringActive(false);
                loadData();
              }}
              className="bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow transition-colors"
            >
              Quay lại Vườn Cây
            </button>
          </div>
        </div>
      );
    }

    const currentItem = sessionQueue[currentIndex];
    const question = questionsMap.get(currentItem?.questionId);

    if (!question) {
      return (
        <div className="text-center py-12">
          <button onClick={() => setIsWateringActive(false)} className="text-sky-600 font-bold">
            ← Quay lại
          </button>
        </div>
      );
    }

    const orderedChoices = getOrderedChoices(question);
    const isCorrectChoice = selectedChoiceId === question.correctChoiceId;

    return (
      <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in">
        {/* Session header */}
        <div className="flex items-center justify-between bg-sky-50/80 p-4 rounded-3xl border border-sky-200">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌱💧</span>
            <div>
              <h2 className="font-extrabold text-sky-950 text-base">Tưới Nước Cho Mầm Cây</h2>
              <p className="text-xs text-sky-800">
                Ôn tập lần {currentItem.consecutiveCorrect + 1} • Part {question.part}
              </p>
            </div>
          </div>
          <div className="text-right">
            <span className="font-bold text-xs text-sky-900 bg-white px-3 py-1 rounded-full border border-sky-200 shadow-sm">
              {currentIndex + 1} / {sessionQueue.length}
            </span>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-lg">
              Part {question.part}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              Trạng thái cây: {renderPlantIcon(currentItem.plantStage)} {renderPlantLabel(currentItem.plantStage)}
            </span>
          </div>

          <p className="text-base md:text-lg font-bold text-slate-800 leading-relaxed">
            {question.prompt}
          </p>

          {/* Choices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {orderedChoices.map(({ label, choice }) => {
              const isSelected = selectedChoiceId === choice.id;
              const isRight = choice.id === question.correctChoiceId;

              let btnStyle = 'bg-slate-50 border-slate-200 hover:border-sky-300 text-slate-700';
              if (isSubmitted) {
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
                  disabled={isSubmitted}
                  className={`p-4 rounded-2xl border-2 font-semibold text-sm transition-all text-left flex items-start gap-3 ${btnStyle}`}
                >
                  <span className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-xs shrink-0">
                    {label}
                  </span>
                  <span>{choice.text}</span>
                </button>
              );
            })}
          </div>

          {/* Guessed flag & Confidence Controls */}
          {!isSubmitted ? (
            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100">
              <label className="flex items-center gap-2 cursor-pointer select-none text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 hover:bg-amber-100">
                <input
                  type="checkbox"
                  checked={isGuessed}
                  onChange={(e) => setIsGuessed(e.target.checked)}
                  className="rounded text-amber-500 focus:ring-0"
                />
                <span>🤔 Câu này em đoán mò</span>
              </label>

              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedChoiceId}
                className={`font-bold text-sm px-6 py-2.5 rounded-xl shadow transition-all ${
                  selectedChoiceId
                    ? 'bg-sky-500 hover:bg-sky-600 text-white'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                💧 Tưới Nước & Xác Nhận
              </button>
            </div>
          ) : (
            /* Feedback */
            <div
              className={`p-4 rounded-2xl border text-sm leading-relaxed animate-in fade-in ${
                isCorrectChoice
                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                  : 'bg-amber-50/80 border-amber-200 text-amber-950'
              }`}
            >
              <div className="font-bold flex items-center gap-2 mb-1">
                <span>
                  {isCorrectChoice
                    ? '✨ Giỏi quá! Cây đã nhận được nước mát.'
                    : '🌱 Cây chưa lớn lần này, ngày mai mình sẽ tưới lại nhé!'}
                </span>
              </div>
              <p>{question.explanation}</p>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleNextInSession}
                  className="bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow transition-colors"
                >
                  {currentIndex < sessionQueue.length - 1 ? 'Cây tiếp theo →' : 'Hoàn thành phiên tưới 🎉'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // MAIN GARDEN OVERVIEW VIEW
  return (
    <div className="space-y-6">
      {/* Top Header Card */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 p-6 rounded-3xl border-2 border-emerald-200/80 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="text-4xl p-3 bg-white rounded-2xl shadow-sm border border-emerald-100">
            🌱
          </span>
          <div>
            <h2 className="text-xl font-extrabold text-emerald-950">Vườn Ôn Tập Thông Minh</h2>
            <p className="text-xs text-emerald-800 mt-0.5 leading-relaxed">
              Mỗi câu hỏi sai hoặc đoán mò sẽ hóa thành một mầm cây. Tưới nước đúng lịch ngắt quãng để cây đơm hoa!
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          {dueItems.length > 0 ? (
            <button
              onClick={() => startWateringSession(dueItems)}
              className="w-full md:w-auto bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white font-extrabold text-sm px-6 py-3 rounded-2xl shadow-md transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              💧 Tưới {dueItems.length} Cây Đến Hạn
            </button>
          ) : (
            <span className="text-xs font-bold text-emerald-700 bg-white/80 border border-emerald-200 px-4 py-2.5 rounded-2xl">
              ✨ Hôm nay tất cả cây đều no nước!
            </span>
          )}
        </div>
      </div>

      {/* Filter Tabs & Part selection */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2 bg-slate-100 p-1 rounded-2xl">
          <button
            onClick={() => setTab('due')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              tab === 'due' ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            💧 Cần tưới hôm nay ({dueItems.length})
          </button>
          <button
            onClick={() => setTab('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              tab === 'all' ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            🌿 Tất cả mầm ({reviewItems.length})
          </button>
          <button
            onClick={() => setTab('mastered')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              tab === 'mastered' ? 'bg-white text-emerald-800 shadow-sm' : 'text-slate-600 hover:text-slate-800'
            }`}
          >
            🌸 Đã nở hoa ({masteredItems.length})
          </button>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-semibold">Phần thi:</span>
          <select
            value={filterPart}
            onChange={(e) => setFilterPart(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="text-xs font-bold bg-white border border-slate-200 rounded-xl px-2.5 py-1.5 text-slate-700"
          >
            <option value="all">Tất cả Parts</option>
            <option value="1">Part 1 (Photos)</option>
            <option value="2">Part 2 (Q&R)</option>
            <option value="3">Part 3 (Conversations)</option>
            <option value="4">Part 4 (Talks)</option>
            <option value="5">Part 5 (Incomplete Sentences)</option>
            <option value="6">Part 6 (Text Completion)</option>
            <option value="7">Part 7 (Reading)</option>
          </select>
        </div>
      </div>

      {/* Plant Grid */}
      {currentList.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
          <span className="text-5xl">🌱✨</span>
          <h3 className="font-bold text-slate-700 text-base">
            {tab === 'due' ? 'Vườn hôm nay rất xanh tốt!' : 'Chưa có mầm cây nào trong danh mục này'}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Khi làm bài tập ở mục Luyện Tập, những câu làm sai hoặc đánh dấu "đoán mò" sẽ tự động được gieo mầm vào đây để bạn ôn luyện lại.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentList.map((item) => {
            const q = questionsMap.get(item.questionId);
            const isDue = item.nextDueDate <= todayStr;

            return (
              <div
                key={item.id}
                className={`p-5 rounded-3xl border transition-all flex flex-col justify-between ${
                  isDue
                    ? 'bg-white border-emerald-300 shadow-sm hover:shadow-md ring-2 ring-emerald-100'
                    : 'bg-slate-50/70 border-slate-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl p-2 bg-emerald-50 rounded-2xl">
                      {renderPlantIcon(item.plantStage)}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      Part {item.part}
                    </span>
                  </div>

                  <h4 className="font-bold text-xs text-slate-800 line-clamp-2 mb-2">
                    {q?.prompt || `Câu hỏi #${item.questionId}`}
                  </h4>

                  <div className="text-[11px] text-slate-500 space-y-1">
                    <div>Giai đoạn: <span className="font-semibold text-emerald-800">{renderPlantLabel(item.plantStage)}</span></div>
                    <div>Hạn tưới: <span className="font-semibold">{isDue ? 'Hôm nay' : item.nextDueDate}</span></div>
                    <div>Số lần sai trước đây: <span className="font-semibold">{item.mistakeCount}</span></div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className={`text-[11px] font-bold ${isDue ? 'text-emerald-700' : 'text-slate-400'}`}>
                    {isDue ? '💧 Đang khát nước' : '🌿 Đang quang hợp'}
                  </span>
                  <button
                    onClick={() => startWateringSession([item])}
                    className="text-xs font-bold text-sky-600 hover:text-sky-800 bg-sky-50 px-3 py-1.5 rounded-xl border border-sky-100"
                  >
                    Tưới riêng câu này →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
