import React, { useEffect, useState } from 'react';
import { StudyPack, TOEICPart } from '../../domain/types';
import { repository } from '../../data/repositories/appRepository';
import { soundFx } from '../../utils/audio';

interface PracticeHomeProps {
  onStartSession: (config: {
    mode: 'practice' | 'test';
    partFilter?: TOEICPart;
    packId?: string;
    questionLimit?: number;
    title: string;
  }) => void;
  onPlayCatMail: () => void;
  onOpenHistory: () => void;
}

export const PracticeHome: React.FC<PracticeHomeProps> = ({ onStartSession, onPlayCatMail, onOpenHistory }) => {
  const [packs, setPacks] = useState<StudyPack[]>([]);
  const [availableParts, setAvailableParts] = useState<TOEICPart[]>([]);
  const [mode, setMode] = useState<'practice' | 'test'>('test');

  useEffect(() => {
    repository.getAllStudyPacks().then(setPacks);
    repository.getAllQuestions().then((questions) => {
      setAvailableParts([...new Set(questions.map((q) => q.part))]);
    });
  }, []);

  const partCards: { part: TOEICPart; name: string; desc: string; icon: string; tag: string }[] = [
    {
      part: 1,
      name: 'Part 1: Photographs',
      desc: 'Mô tả hình ảnh bằng 4 câu nhận định',
      icon: '📷',
      tag: 'Listening',
    },
    {
      part: 2,
      name: 'Part 2: Question - Response',
      desc: 'Hỏi - Đáp phản xạ nhanh không có văn bản',
      icon: '🎧',
      tag: 'Listening',
    },
    {
      part: 3,
      name: 'Part 3: Conversations',
      desc: 'Đối thoại ngắn 2-3 người kèm chùm 3 câu hỏi',
      icon: '💬',
      tag: 'Listening',
    },
    {
      part: 4,
      name: 'Part 4: Short Talks',
      desc: 'Bài nói độc thoại (thông báo, quảng cáo, hướng dẫn)',
      icon: '📢',
      tag: 'Listening',
    },
    {
      part: 5,
      name: 'Part 5: Incomplete Sentences',
      desc: 'Điền từ vào câu đơn, kiểm tra ngữ pháp & từ vựng',
      icon: '✏️',
      tag: 'Reading',
    },
    {
      part: 6,
      name: 'Part 6: Text Completion',
      desc: 'Điền từ & chọn câu phù hợp vào đoạn văn',
      icon: '📄',
      tag: 'Reading',
    },
    {
      part: 7,
      name: 'Part 7: Reading Comprehension',
      desc: 'Đọc hiểu đoạn văn đơn, đoạn kép & đoạn ba',
      icon: '📚',
      tag: 'Reading',
    },
  ];

  const handleStartFullPackTest = (pack: StudyPack, testMode: 'test' | 'practice') => {
    soundFx.playSoftPop();
    onStartSession({
      mode: testMode,
      packId: pack.id,
      title: `${testMode === 'test' ? '🏆 Thi Thử Đề Hoàn Chỉnh' : '📖 Luyện Tập Đề'} - ${pack.title}`,
    });
  };

  const handleStartPart = (part: TOEICPart, partName: string) => {
    soundFx.playSoftPop();
    onStartSession({
      mode,
      partFilter: part,
      title: `${mode === 'test' ? 'Mini-Test' : 'Luyện tập'} - ${partName}`,
    });
  };

  const handleStartMiniTest = (count: number) => {
    soundFx.playSoftPop();
    onStartSession({
      mode: 'test',
      questionLimit: count,
      title: `Mini-Test TOEIC (${count} câu tính giờ)`,
    });
  };

  return (
    <div className="space-y-8 animate-in fade-in">
      <section className="space-y-4 rounded-3xl border border-teal-100 bg-teal-50/60 p-4 md:p-6">
        <div>
          <h2 className="text-xl font-black text-teal-950">📚 Ngữ pháp theo chủ đề</h2>
          <p className="mt-1 text-sm text-teal-800">503 câu · 11 chủ điểm · Có đáp án và lời giải tiếng Việt.</p>
          <p className="mt-1 text-xs text-slate-500">Bài ôn ngữ pháp theo tài liệu, không phải đề TOEIC chính thức. Đáp án được phân tích và có ghi chú ở những câu đã biên tập.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {packs.filter((pack) => pack.id.startsWith('pack-on-tap-ngu-phap-main-')).map((pack, index) => (
            <article key={pack.id} className="rounded-2xl border border-teal-100 bg-white p-4">
              <p className="text-xs font-bold text-teal-600">Chủ điểm {index + 1} · {pack.questionCount} câu</p>
              <h3 className="mt-2 font-extrabold text-slate-800">{pack.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="rounded-xl bg-teal-700 px-3 py-2 text-xs font-bold text-white hover:bg-teal-800" onClick={() => onStartSession({ mode: 'practice', packId: pack.id, questionLimit: 10, title: `${pack.title} · Luyện 10 câu` })}>Luyện 10 câu →</button>
                <button className="rounded-xl bg-slate-100 px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-200" onClick={() => onStartSession({ mode: 'practice', packId: pack.id, title: `${pack.title} · Toàn bộ chủ điểm` })}>Luyện toàn bộ</button>
                <button className="rounded-xl bg-amber-50 px-3 py-2 text-xs font-bold text-amber-800 hover:bg-amber-100" onClick={() => onStartSession({ mode: 'test', packId: pack.id, questionLimit: 10, title: `${pack.title} · Kiểm tra 10 câu` })}>Kiểm tra</button>
              </div>
            </article>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-teal-800">Tự lưu sau mỗi câu. Tiếp tục bài dở hoặc xem lại kết quả trong lịch sử.</p>
          <button onClick={onOpenHistory} className="rounded-xl border border-teal-200 bg-white px-4 py-2 text-xs font-bold text-teal-800">Lịch sử làm bài →</button>
        </div>
      </section>
      {/* SECTION 1: DEDICATED FULL PRACTICE TESTS (ĐỀ THI HOÀN CHỈNH) */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏆</span>
              <h2 className="text-xl font-black text-slate-800">
                Kho Đề Thi Hoàn Chỉnh (Full Tests)
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Chọn đề để thi thử: Làm toàn bộ bài thi, đáp án được giấu kín, nộp bài xong mới hiện điểm số & lời giải chi tiết.
            </p>
          </div>
        </div>

        {/* Full Test Packs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {packs.filter((pack) => !pack.id.startsWith('pack-on-tap-ngu-phap-main-')).map((pack) => {
            const hasListening = pack.partsIncluded.some((p) => p <= 4);
            const hasReading = pack.partsIncluded.some((p) => p >= 5);

            return (
              <div
                key={pack.id}
                className="bg-white p-6 rounded-3xl border-2 border-slate-200/90 shadow-sm hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold text-sky-800 bg-sky-50 border border-sky-100 px-3 py-1 rounded-full">
                      {pack.sourceLabel}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      📝 {pack.questionCount} câu hỏi
                    </span>
                  </div>

                  <h3 className="font-black text-slate-800 text-base md:text-lg mb-1">
                    {pack.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                    {pack.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 mb-4">
                    {hasListening && (
                      <span className="text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200 px-2 py-0.5 rounded-md">
                        🎧 Listening
                      </span>
                    )}
                    {hasReading && (
                      <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-md">
                        📖 Reading
                      </span>
                    )}
                    {pack.partsIncluded.map((p) => (
                      <span
                        key={p}
                        className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
                      >
                        Part {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 2 Clear Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => handleStartFullPackTest(pack, 'test')}
                    className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-extrabold text-xs py-2.5 px-4 rounded-xl shadow transition-transform hover:scale-[1.02] flex items-center justify-center gap-1.5"
                  >
                    <span>⏱️ Thi Thử (Làm xong mới chấm điểm)</span>
                  </button>

                  <button
                    onClick={() => handleStartFullPackTest(pack, 'practice')}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>📖 Luyện tập</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: FEATURED MINIGAME "MAIL FOR THE CAT" */}
      <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-amber-50 p-6 rounded-3xl border-2 border-amber-300 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="text-5xl p-3 bg-white/90 rounded-2xl shadow-sm border border-amber-200">
            🐱✉️
          </span>
          <div>
            <div className="inline-block bg-amber-200 text-amber-900 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1">
              Trò Chơi Học Tập Độc Quyền
            </div>
            <h3 className="text-lg font-black text-amber-950">Thư Cho Mèo Mochi (Part 5)</h3>
            <p className="text-xs text-amber-800 mt-0.5 max-w-md">
              Cùng Mochi soát lỗi 5 câu ngữ pháp Part 5. Đóng dấu sáp và gửi thư để nhận ngay 8 giọt nước chuyên cần!
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            soundFx.playSoftPop();
            onPlayCatMail();
          }}
          className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm px-6 py-3 rounded-2xl shadow-md transition-transform hover:scale-105 shrink-0"
        >
          Chơi Ngay Cùng Mochi →
        </button>
      </div>

      {/* SECTION 3: QUICK MINI-TESTS (10, 20, 30 CÂU) */}
      <div className="space-y-3">
        <h3 className="text-sm font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-2">
          <span>⚡</span>
          <span>Thi Nhanh Ngẫu Nhiên (Mini-Tests)</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={() => handleStartMiniTest(10)}
            className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all text-left flex items-center justify-between group"
          >
            <div>
              <div className="font-extrabold text-slate-800 text-sm group-hover:text-amber-600 transition-colors">
                Mini-Test 10 Câu
              </div>
              <div className="text-xs text-slate-500 mt-0.5">Thời gian: ~12 phút (Bấm giờ)</div>
            </div>
            <span className="text-2xl">⚡</span>
          </button>

          <button
            onClick={() => handleStartMiniTest(20)}
            className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all text-left flex items-center justify-between group"
          >
            <div>
              <div className="font-extrabold text-slate-800 text-sm group-hover:text-amber-600 transition-colors">
                Mini-Test 20 Câu
              </div>
              <div className="text-xs text-slate-500 mt-0.5">Thời gian: ~25 phút (Bấm giờ)</div>
            </div>
            <span className="text-2xl">🎯</span>
          </button>

          <button
            onClick={() => handleStartMiniTest(30)}
            className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all text-left flex items-center justify-between group"
          >
            <div>
              <div className="font-extrabold text-slate-800 text-sm group-hover:text-amber-600 transition-colors">
                Mini-Test 30 Câu
              </div>
              <div className="text-xs text-slate-500 mt-0.5">Thời gian: ~35 phút (Bấm giờ)</div>
            </div>
            <span className="text-2xl">🏆</span>
          </button>
        </div>
      </div>

      {/* SECTION 4: PRACTICE INDIVIDUAL TOEIC PARTS (PART 1 - 7) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-extrabold text-slate-700 uppercase tracking-wider flex items-center gap-2">
            <span>📚</span>
            <span>Luyện Riêng Từng Phần (Part 1 - Part 7)</span>
          </h3>

          <div className="flex bg-slate-100 p-1 rounded-xl text-xs font-bold">
            <button
              onClick={() => setMode('practice')}
              className={`px-3 py-1 rounded-lg transition-all ${
                mode === 'practice' ? 'bg-sky-500 text-white shadow-xs' : 'text-slate-600'
              }`}
            >
              Luyện tập
            </button>
            <button
              onClick={() => setMode('test')}
              className={`px-3 py-1 rounded-lg transition-all ${
                mode === 'test' ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-600'
              }`}
            >
              Thi Part
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {partCards.filter((c) => availableParts.includes(c.part)).map((c) => (
            <div
              key={c.part}
              onClick={() => handleStartPart(c.part, c.name)}
              className="p-5 rounded-3xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl p-2 bg-sky-50 rounded-2xl group-hover:scale-110 transition-transform">
                    {c.icon}
                  </span>
                  <span
                    className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                      c.tag === 'Listening'
                        ? 'bg-purple-50 text-purple-700 border border-purple-200'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}
                  >
                    {c.tag}
                  </span>
                </div>
                <h4 className="font-extrabold text-slate-800 text-sm group-hover:text-sky-600 transition-colors">
                  {c.name}
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{c.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-sky-600">
                  {mode === 'test' ? 'Thi Part này →' : 'Luyện ngay →'}
                </span>
                <span className="text-slate-300 group-hover:text-sky-500 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
