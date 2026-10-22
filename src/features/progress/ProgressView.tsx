import React, { useEffect, useState } from 'react';
import { Attempt, Question, ReviewItem } from '../../domain/types';
import { repository } from '../../data/repositories/appRepository';

export const ProgressView: React.FC = () => {
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [reviewItems, setReviewItems] = useState<ReviewItem[]>([]);
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    async function loadStats() {
      const [allAttempts, allQuestions, allReviews, drops] = await Promise.all([
        repository.getAllAttempts(),
        repository.getAllQuestions(),
        repository.getAllReviewItems(),
        repository.getWaterDropsBalance(),
      ]);

      setAttempts(allAttempts);
      setQuestions(allQuestions);
      setReviewItems(allReviews);
      setBalance(drops);
    }

    loadStats();
  }, []);

  // Compute accuracy by Part (1-7)
  const partStats: Record<number, { correct: number; total: number }> = {
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 },
    4: { correct: 0, total: 0 },
    5: { correct: 0, total: 0 },
    6: { correct: 0, total: 0 },
    7: { correct: 0, total: 0 },
  };

  // Compute mistake categories breakdown
  const mistakeCategories: Record<string, number> = {
    vocabulary: 0,
    grammar: 0,
    misheard: 0,
    misread: 0,
    time_pressure: 0,
  };

  // Compute topic accuracy
  const topicStats: Record<string, { correct: number; total: number }> = {};

  const qMap = new Map<string, Question>();
  questions.forEach((q) => qMap.set(q.id, q));

  attempts.forEach((att) => {
    Object.values(att.responses).forEach((resp) => {
      const q = qMap.get(resp.questionId);
      if (!q) return;

      // Part stats
      if (partStats[q.part]) {
        partStats[q.part].total += 1;
        if (resp.isCorrect) partStats[q.part].correct += 1;
      }

      // Mistake categories
      if (resp.mistakeCategory && mistakeCategories[resp.mistakeCategory] !== undefined) {
        mistakeCategories[resp.mistakeCategory] += 1;
      }

      // Topic stats
      q.topicTags.forEach((tag) => {
        if (!topicStats[tag]) topicStats[tag] = { correct: 0, total: 0 };
        topicStats[tag].total += 1;
        if (resp.isCorrect) topicStats[tag].correct += 1;
      });
    });
  });

  const totalAnswered = Object.values(partStats).reduce((acc, p) => acc + p.total, 0);
  const totalCorrect = Object.values(partStats).reduce((acc, p) => acc + p.correct, 0);
  const overallAccuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const masteredPlants = reviewItems.filter((i) => i.plantStage === 3).length;

  return (
    <div className="space-y-8 animate-in fade-in">
      {/* Target 800+ Banner */}
      <div className="bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 rounded-3xl p-6 md:p-8 text-white shadow-cozy flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-block bg-white/20 backdrop-blur-md text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
            Mục Tiêu Cá Nhân Hóa: 800+ TOEIC
          </div>
          <h2 className="text-2xl md:text-3xl font-black">Hành Trình Chinh Phục TOEIC</h2>
          <p className="text-xs md:text-sm text-sky-100 mt-1 max-w-lg leading-relaxed">
            Hòn đảo phát triển qua sự kiên trì từng ngày. Mỗi câu làm đúng và mỗi lần ôn tập củng cố sẽ đưa em đến gần hơn với mục tiêu 800+.
          </p>
        </div>

        <div className="flex gap-4 shrink-0">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-center min-w-[100px]">
            <div className="text-2xl font-black">{overallAccuracy}%</div>
            <div className="text-[10px] text-sky-200 uppercase font-bold mt-0.5">Độ Chính Xác</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-center min-w-[100px]">
            <div className="text-2xl font-black">{totalAnswered}</div>
            <div className="text-[10px] text-sky-200 uppercase font-bold mt-0.5">Câu Đã Luyện</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-center min-w-[100px]">
            <div className="text-2xl font-black">💧 {balance}</div>
            <div className="text-[10px] text-sky-200 uppercase font-bold mt-0.5">Giọt Nước</div>
          </div>
        </div>
      </div>

      {/* Part by Part Performance (Listening & Reading) */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4">
        <div>
          <h3 className="text-base font-extrabold text-slate-800">
            📊 Độ Chính Xác Theo Từng Part (Part 1 - Part 7)
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Dữ liệu tổng hợp từ các lượt làm bài đầu tiên và kiểm tra mini-test
          </p>
        </div>

        <div className="space-y-3">
          {[
            { part: 1, name: 'Part 1: Photographs', tag: 'Listening' },
            { part: 2, name: 'Part 2: Question & Response', tag: 'Listening' },
            { part: 3, name: 'Part 3: Conversations', tag: 'Listening' },
            { part: 4, name: 'Part 4: Short Talks', tag: 'Listening' },
            { part: 5, name: 'Part 5: Incomplete Sentences', tag: 'Reading' },
            { part: 6, name: 'Part 6: Text Completion', tag: 'Reading' },
            { part: 7, name: 'Part 7: Reading Comprehension', tag: 'Reading' },
          ].map(({ part, name, tag }) => {
            const stats = partStats[part];
            const accuracy = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

            return (
              <div key={part} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-700 flex items-center gap-2">
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded ${
                        tag === 'Listening'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {tag}
                    </span>
                    {name}
                  </span>
                  <span className="text-slate-500 font-mono">
                    {stats.total > 0 ? (
                      <span>
                        <strong className="text-slate-800">{accuracy}%</strong> ({stats.correct}/{stats.total})
                      </span>
                    ) : (
                      <span className="text-slate-400 font-normal italic">Chưa có dữ liệu</span>
                    )}
                  </span>
                </div>

                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 rounded-full ${
                      accuracy >= 80
                        ? 'bg-emerald-500'
                        : accuracy >= 60
                        ? 'bg-sky-500'
                        : 'bg-amber-500'
                    }`}
                    style={{ width: `${stats.total > 0 ? accuracy : 0}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Two columns: Topics Breakdown & Recurring Mistakes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Topic Breakdown */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4">
          <div>
            <h3 className="text-base font-extrabold text-slate-800">
              🎯 Độ Nắm Vững Theo Chủ Điểm
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Hiển thị "Cần thêm dữ liệu" nếu số câu làm ít hơn 3 (tránh kết luận vội vã)
            </p>
          </div>

          <div className="space-y-2.5 max-h-72 overflow-y-auto pr-1">
            {Object.keys(topicStats).length === 0 ? (
              <div className="text-center py-8 text-xs text-slate-400">
                Hãy làm thêm vài bài tập để phân tích chủ điểm nhé!
              </div>
            ) : (
              Object.entries(topicStats).map(([topic, stats]) => {
                const isReliable = stats.total >= 3;
                const acc = Math.round((stats.correct / stats.total) * 100);

                return (
                  <div
                    key={topic}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs"
                  >
                    <span className="font-bold text-slate-700">{topic}</span>
                    {isReliable ? (
                      <span
                        className={`font-bold px-2 py-0.5 rounded-lg ${
                          acc >= 80
                            ? 'bg-emerald-100 text-emerald-800'
                            : acc >= 50
                            ? 'bg-sky-100 text-sky-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {acc}% ({stats.correct}/{stats.total})
                      </span>
                    ) : (
                      <span className="text-[11px] font-semibold text-slate-400 bg-slate-200/60 px-2 py-0.5 rounded-md">
                        Cần thêm dữ liệu ({stats.total}/3)
                      </span>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Recurring Mistake Categories */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4">
          <div>
            <h3 className="text-base font-extrabold text-slate-800">
              🔍 Nguyên Nhân Sai Thường Gặp
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Nhận diện điểm nghẽn giúp cải thiện điểm nhanh chóng nhất
            </p>
          </div>

          <div className="space-y-3">
            {[
              { id: 'vocabulary', label: 'Thiếu từ vựng chuyên ngành', count: mistakeCategories.vocabulary, icon: '📖' },
              { id: 'grammar', label: 'Bẫy ngữ pháp & từ loại', count: mistakeCategories.grammar, icon: '📐' },
              { id: 'misread', label: 'Đọc lướt ẩu / Nhầm từ khóa', count: mistakeCategories.misread, icon: '👀' },
              { id: 'misheard', label: 'Nghe nhầm âm / Nối âm', count: mistakeCategories.misheard, icon: '👂' },
              { id: 'time_pressure', label: 'Áp lực thời gian', count: mistakeCategories.time_pressure, icon: '⏱️' },
            ].map((m) => (
              <div
                key={m.id}
                className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-lg">{m.icon}</span>
                  <span className="font-bold text-slate-700">{m.label}</span>
                </div>
                <span className="font-extrabold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full">
                  {m.count} lần
                </span>
              </div>
            ))}
          </div>

          {/* Review Garden status */}
          <div className="p-4 bg-emerald-50/80 rounded-2xl border border-emerald-200 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">🌸</span>
              <div>
                <div className="font-bold text-emerald-950 text-xs">Cây đã nở hoa thuần thục:</div>
                <div className="text-[11px] text-emerald-800">
                  {masteredPlants} câu hỏi đã được ôn tập thành công 3+ lần
                </div>
              </div>
            </div>
            <span className="text-emerald-700 font-extrabold text-sm">{masteredPlants}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
