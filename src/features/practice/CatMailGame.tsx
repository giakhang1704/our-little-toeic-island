import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Question } from '../../domain/types';
import { repository } from '../../data/repositories/appRepository';
import { soundFx } from '../../utils/audio';
import { REWARD_AMOUNTS } from '../../domain/rewards/rewards';
import { getOrderedChoices } from '../../domain/shuffle/shuffle';

interface CatMailGameProps {
  onBack: () => void;
  onFinished: () => void;
}

export const CatMailGame: React.FC<CatMailGameProps> = ({ onBack, onFinished }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, { choiceId: string; isCorrect: boolean }>>({});
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCompletedRound, setIsCompletedRound] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    async function loadQuestions() {
      // Load Part 5 questions, pick 5
      const allP5 = await repository.getQuestionsByPart(5);
      const shuffled = [...allP5].sort(() => 0.5 - Math.random());
      setQuestions(shuffled.slice(0, 5));
    }
    loadQuestions();
  }, []);

  if (questions.length === 0) {
    return (
      <div className="max-w-xl mx-auto p-8 text-center bg-white rounded-3xl shadow-sm border border-slate-200">
        <div className="text-4xl animate-bounce mb-3">🐱</div>
        <p className="text-slate-600 font-semibold">Đang chuẩn bị các bức thư cho Mochi...</p>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const orderedChoices = getOrderedChoices(currentQ);
  const currentAnswer = userAnswers[currentIndex];

  const handleSelectChoice = (choiceId: string) => {
    if (isAnswered) return;

    soundFx.playSoftPop();
    const isCorrect = choiceId === currentQ.correctChoiceId;
    if (isCorrect) {
      soundFx.playSuccessChime();
    }

    setUserAnswers((prev) => ({
      ...prev,
      [currentIndex]: { choiceId, isCorrect },
    }));
    setIsAnswered(true);

    // If incorrect, record mistake into review garden
    if (!isCorrect) {
      repository.recordMistakeForReview(currentQ.id, 5);
    }
  };

  const handleNextCard = () => {
    soundFx.playSoftPop();
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setIsAnswered(false);
    } else {
      setIsCompletedRound(true);
    }
  };

  const handleSendLetter = async () => {
    soundFx.playWaterDrop();
    confetti({ particleCount: 60, spread: 80, origin: { y: 0.6 } });

    // Award water drops
    await repository.awardDrops(
      REWARD_AMOUNTS.CAT_MAIL_ROUND,
      `cat-mail-${Date.now()}`,
      'Hoàn thành một chuyến gửi thư cho mèo Mochi!'
    );

    // Update mission progress
    await repository.incrementMissionProgress('cat_mail', 1);

    setIsSent(true);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between bg-amber-50/80 p-4 rounded-3xl border-2 border-amber-200">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🐱✉️</span>
          <div>
            <h2 className="font-extrabold text-amber-950 text-base">Thư Cho Mèo Mochi</h2>
            <p className="text-xs text-amber-800">
              Kiểm tra lỗi ngữ pháp Part 5 giúp Mochi hoàn thiện thư gửi bạn bè!
            </p>
          </div>
        </div>
        <button
          onClick={onBack}
          className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white border border-amber-200 hover:bg-amber-100 text-amber-900"
        >
          ✕ Rời đi
        </button>
      </div>

      {!isCompletedRound ? (
        /* The Question Card to Proofread */
        <div className="bg-white rounded-3xl p-6 shadow-sm border-2 border-amber-100 space-y-6 relative">
          {/* Card Progress */}
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Bưu thiếp {currentIndex + 1} / {questions.length}</span>
            <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
              Thưởng: 💧 {REWARD_AMOUNTS.CAT_MAIL_ROUND} Giọt nước khi gửi
            </span>
          </div>

          {/* Letter Card Visual */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50/40 p-6 rounded-2xl border border-amber-200 shadow-inner">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🐾</span>
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                Câu cần kiểm duyệt:
              </span>
            </div>
            <p className="text-base md:text-lg font-bold text-slate-800 leading-relaxed">
              {currentQ.prompt}
            </p>
          </div>

          {/* Choices */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {orderedChoices.map(({ label, choice }) => {
              const isSelected = currentAnswer?.choiceId === choice.id;
              const isCorrectChoice = choice.id === currentQ.correctChoiceId;

              let btnStyle = 'bg-slate-50 border-slate-200 hover:border-amber-300 text-slate-700';
              if (isAnswered) {
                if (isCorrectChoice) {
                  btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 ring-2 ring-emerald-300';
                } else if (isSelected && !isCorrectChoice) {
                  btnStyle = 'bg-red-50 border-red-500 text-red-900 ring-2 ring-red-300';
                } else {
                  btnStyle = 'bg-slate-50 border-slate-200 opacity-60 text-slate-500';
                }
              }

              return (
                <button
                  key={choice.id}
                  onClick={() => handleSelectChoice(choice.id)}
                  disabled={isAnswered}
                  className={`p-4 rounded-2xl border-2 font-semibold text-sm transition-all text-left flex items-start gap-3 ${btnStyle}`}
                >
                  <span className="w-6 h-6 rounded-lg bg-white/80 border border-slate-200 flex items-center justify-center font-bold text-xs shrink-0">
                    {label}
                  </span>
                  <span>{choice.text}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation if Answered */}
          {isAnswered && (
            <div
              className={`p-4 rounded-2xl border text-sm leading-relaxed animate-in fade-in ${
                currentAnswer?.isCorrect
                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-900'
                  : 'bg-amber-50/80 border-amber-200 text-amber-950'
              }`}
            >
              <div className="flex items-center gap-2 font-bold mb-1">
                <span>{currentAnswer?.isCorrect ? '✨ Chính xác!' : '💡 Ghi nhớ cho Mochi:'}</span>
              </div>
              <p>{currentQ.explanation}</p>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleNextCard}
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow transition-colors flex items-center gap-2"
                >
                  {currentIndex < questions.length - 1 ? 'Bưu thiếp tiếp theo →' : 'Xem lại & Đóng dấu thư →'}
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Round Complete - Review & Stamp */
        <div className="bg-white rounded-3xl p-8 shadow-sm border-2 border-amber-100 text-center space-y-6">
          <div className="text-6xl animate-bounce">📬</div>
          <div>
            <h3 className="text-2xl font-black text-slate-800">
              {isSent ? 'Bức Thư Đã Được Gửi Đi!' : 'Tất Cả Bưu Thiếp Đã Hoàn Thành!'}
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              {isSent
                ? 'Mochi đã lên đường đi giao thư cho các bạn trên đảo.'
                : 'Mochi đang cầm con dấu sáp đỏ chuẩn bị niêm phong phong bì.'}
            </p>
          </div>

          {/* Results list */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left max-w-md mx-auto space-y-2">
            <h4 className="font-bold text-xs text-slate-500 uppercase tracking-wider">
              Kết quả rà soát:
            </h4>
            {questions.map((q, idx) => {
              const ans = userAnswers[idx];
              return (
                <div key={q.id} className="flex items-center justify-between text-xs py-1">
                  <span className="truncate max-w-[280px] text-slate-700">
                    {idx + 1}. {q.prompt}
                  </span>
                  <span
                    className={`font-bold px-2 py-0.5 rounded-md ${
                      ans?.isCorrect ? 'text-emerald-700 bg-emerald-100' : 'text-red-700 bg-red-100'
                    }`}
                  >
                    {ans?.isCorrect ? 'Đúng' : 'Xem lại sau'}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Action button */}
          {!isSent ? (
            <button
              onClick={handleSendLetter}
              className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600 text-white font-extrabold text-base px-8 py-3.5 rounded-2xl shadow-lg transition-transform hover:scale-105"
            >
              📮 Đóng Dấu Sáp & Gửi Thư (+{REWARD_AMOUNTS.CAT_MAIL_ROUND} Giọt nước)
            </button>
          ) : (
            <div className="space-y-3 pt-2">
              <div className="inline-block bg-sky-50 text-sky-800 border border-sky-200 px-4 py-2 rounded-xl font-bold text-sm">
                💧 +{REWARD_AMOUNTS.CAT_MAIL_ROUND} Giọt nước đã được cộng vào tài khoản!
              </div>
              <div>
                <button
                  onClick={onFinished}
                  className="bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm px-6 py-2.5 rounded-xl shadow"
                >
                  Trở về Đảo Xinh
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
