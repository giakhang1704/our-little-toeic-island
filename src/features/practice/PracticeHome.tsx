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
}

export const PracticeHome: React.FC<PracticeHomeProps> = ({ onStartSession, onPlayCatMail }) => {
  const [packs, setPacks] = useState<StudyPack[]>([]);
  const [selectedPackId, setSelectedPackId] = useState<string>('all');
  const [mode, setMode] = useState<'practice' | 'test'>('practice');

  useEffect(() => {
    repository.getAllStudyPacks().then(setPacks);
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

  const handleStartPart = (part: TOEICPart, partName: string) => {
    soundFx.playSoftPop();
    onStartSession({
      mode,
      partFilter: part,
      packId: selectedPackId === 'all' ? undefined : selectedPackId,
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
      {/* Hero Mode Selector */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-extrabold text-slate-800">Chọn Chế Độ Luyện Tập</h2>
            <p className="text-xs text-slate-500 mt-1">
              Phân tách rõ ràng giữa chế độ tiếp thu kiến thức và chế độ đo lường năng lực (Section 4)
            </p>
          </div>

          {/* Mode Pill Toggle */}
          <div className="flex bg-slate-100 p-1.5 rounded-2xl w-full md:w-auto">
            <button
              onClick={() => {
                soundFx.playSoftPop();
                setMode('practice');
              }}
              className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                mode === 'practice'
                  ? 'bg-sky-500 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              📖 Chế Độ Luyện Tập (Practice)
            </button>
            <button
              onClick={() => {
                soundFx.playSoftPop();
                setMode('test');
              }}
              className={`flex-1 md:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                mode === 'test'
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              ⏱️ Chế Độ Mini-Test (Kiểm tra)
            </button>
          </div>
        </div>

        {/* Mode Description Banner */}
        <div className="pt-4 flex items-center justify-between text-xs">
          <div className="text-slate-600">
            {mode === 'practice' ? (
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                <strong>Luyện Tập:</strong> Xem ngay lời giải chi tiết, nghe lại audio không giới hạn, xem transcript và đánh dấu từ vựng sau mỗi câu.
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <strong>Mini-Test:</strong> Bấm giờ nghiêm ngặt, ẩn lời giải & transcript cho đến khi nộp bài. Mô phỏng trải nghiệm phòng thi.
              </span>
            )}
          </div>

          {/* Pack Filter */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-slate-400 font-semibold">Bộ đề:</span>
            <select
              value={selectedPackId}
              onChange={(e) => setSelectedPackId(e.target.value)}
              className="text-xs font-bold bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1 text-slate-700"
            >
              <option value="all">Tất cả bộ đề</option>
              {packs.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Featured Minigame: Mail for the Cat */}
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

      {/* Quick Mini-Tests */}
      <div className="space-y-3">
        <h3 className="text-sm font-extrabold text-slate-700 uppercase tracking-wider">
          ⏱️ Bài Thi Nhanh (Mini-Tests)
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
              <div className="text-xs text-slate-500 mt-0.5">Thời gian: ~12 phút</div>
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
              <div className="text-xs text-slate-500 mt-0.5">Thời gian: ~25 phút</div>
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
              <div className="text-xs text-slate-500 mt-0.5">Thời gian: ~35 phút</div>
            </div>
            <span className="text-2xl">🏆</span>
          </button>
        </div>
      </div>

      {/* TOEIC Parts 1 to 7 Practice */}
      <div className="space-y-3">
        <h3 className="text-sm font-extrabold text-slate-700 uppercase tracking-wider">
          📚 Luyện Tập Theo Từng Phần (Part 1 - Part 7)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {partCards.map((c) => (
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
