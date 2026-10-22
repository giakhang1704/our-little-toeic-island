import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { soundFx } from '../../utils/audio';

interface FeatureGuideModalProps {
  onClose: () => void;
}

export const FeatureGuideModal: React.FC<FeatureGuideModalProps> = ({ onClose }) => {
  const [activeStep, setActiveStep] = useState(0);

  const guideSteps = [
    {
      title: 'Ngữ pháp theo chủ đề & Lịch sử 📚',
      badge: 'Luyện Tập', icon: '📚', color: 'from-teal-500 to-sky-500',
      description: '503 câu ngữ pháp chia thành 11 chủ điểm, chọn trực tiếp trong Luyện Tập.',
      highlights: [
        'Chọn luyện 10 câu, luyện toàn bộ chủ điểm hoặc kiểm tra có bấm giờ.',
        'Đáp án tự lưu sau mỗi câu; vào Tiến Độ → Lịch sử làm bài để tiếp tục bài đang làm.',
        'Bài đã nộp có thể mở lại kết quả, đáp án và lời giải. Dữ liệu lưu riêng trên trình duyệt hiện tại.',
      ],
    },
    {
      title: 'Chào mừng đến với Hòn Đảo TOEIC 🏝️',
      badge: 'Tổng Quan',
      icon: '🏝️',
      color: 'from-sky-500 to-teal-500',
      description:
        'Hòn đảo nhỏ này kết hợp giữa việc luyện thi TOEIC Listening & Reading hướng tới mục tiêu 800+ và một thế giới ấm áp phát triển qua sự kiên trì từng ngày của bạn.',
      highlights: [
        'Học mỗi ngày 15–25 phút, không áp lực, không lo sợ.',
        'Mỗi nỗ lực học tập đều tạo ra những giọt nước mát tưới cây và trang trí hòn đảo.',
        'Bảo mật 100% dữ liệu ngay trên trình duyệt của bạn.',
      ],
    },
    {
      title: 'Ngôi Nhà & Hộp Thư Tình Cảm 🏡📬',
      badge: 'Thư & Lời Nhắn',
      icon: '💌',
      color: 'from-amber-500 to-rose-500',
      description:
        'Nơi cất giữ những bức thư tình cảm, lời động viên và những món quà bí mật (ly trà sữa, buổi xem phim...) được người thương cài đặt riêng cho bạn.',
      highlights: [
        'Mở khóa tự động khi bạn tích lũy đủ các mốc giọt nước (20, 50, 100 giọt nước).',
        'Có chuông báo thư mới màu đỏ trên nóc hộp thư khi mở khóa.',
        'Click vào Ngôi Nhà trên hòn đảo để mở và đọc thư bất kỳ lúc nào.',
      ],
    },
    {
      title: 'Vườn Ôn Tập Thông Minh 🌱🌷',
      badge: 'Spaced Repetition',
      icon: '🌱',
      color: 'from-emerald-500 to-teal-500',
      description:
        'Hệ thống lặp lại ngắt quãng thông minh giúp kiến thức in sâu vào trí nhớ dài hạn mà không cần học vẹt.',
      highlights: [
        'Khi bạn làm sai hoặc tích vào "Em đoán mò", câu hỏi sẽ tự động gieo thành 1 mầm cây.',
        'Mỗi lần ôn đúng theo lịch, cây sẽ lớn: Hạt Mầm 🌱 → Cây Non 🌿 → Nụ Hoa 🌷 → Đơm Hoa 🌸 (thuần thục).',
        'Cây KHÔNG BAO GIỜ CHẾT nếu bạn bận nghỉ một vài hôm (không phạt người học).',
      ],
    },
    {
      title: 'Cầu Tàu Luyện Tập & Mini-Test ⛵⏱️',
      badge: 'Luyện 7 Parts',
      icon: '⛵',
      color: 'from-sky-500 to-indigo-500',
      description:
        'Bến thuyền đưa bạn đến các bài luyện chuẩn format TOEIC mới nhất hoặc thử sức với Mini-Test bấm giờ.',
      highlights: [
        'Chế độ Luyện Tập: Xem ngay lời giải chi tiết, nghe lại audio, xem transcript và chọn lý do làm sai.',
        'Chế độ Mini-Test: Bấm giờ nghiêm ngặt, ẩn lời giải & transcript cho đến khi nộp bài để đo năng lực thực tế.',
        'Hỗ trợ trọn vẹn cả 7 Parts (Part 1 ảnh, Part 2 phản xạ, Part 3-4 hội thoại, Part 5-6 điền từ, Part 7 đọc kép).',
      ],
    },
    {
      title: 'Mèo Mochi & "Thư Cho Mèo" 🐱✉️',
      badge: 'Minigame',
      icon: '🐱',
      color: 'from-orange-500 to-amber-500',
      description:
        'Mochi là bạn đồng hành đáng yêu trên đảo. Mochi luôn sẵn sàng tâm sự và nhờ bạn giúp đỡ công việc bưu điện.',
      highlights: [
        'Click vào Mochi trên bãi cỏ để nghe những lời chào và lời chúc ngọt ngào.',
        'Chơi "Thư Cho Mèo": Soát lỗi ngữ pháp 5 câu Part 5 để giúp Mochi hoàn thành lá thư.',
        'Mỗi chuyến thư hoàn thành tặng ngay 8 giọt nước chuyên cần và pháo hoa chúc mừng!',
      ],
    },
    {
      title: 'Giọt Nước & Trang Trí Hòn Đảo 💧✨',
      badge: 'Đảo Của Tôi',
      icon: '🌸',
      color: 'from-purple-500 to-pink-500',
      description:
        'Giọt nước là phần thưởng chuyên cần cho nỗ lực của bạn. Dùng giọt nước để biến hòn đảo thành một thiên đường ấm áp.',
      highlights: [
        'Nhận giọt nước từ bài luyện tập (+10), tưới cây (+10), Thư cho mèo (+8) và nhiệm vụ ngày (+5).',
        'Ghé Cửa Tiệm Trang Trí để sắm Cây anh đào 🌸, Ghế gỗ 🪵, Đèn đá 🏮, Dù bãi biển ⛱️, Lửa trại 🔥...',
        'Tự do đặt hoặc thay đổi vật phẩm tại 16 ô trang trí. Mở quà và vật phẩm không trừ điểm.',
      ],
    },
  ];

  const currentStepData = guideSteps[activeStep];

  const handleNext = () => {
    soundFx.playSoftPop();
    if (activeStep < guideSteps.length - 1) {
      setActiveStep((prev) => prev + 1);
    } else {
      soundFx.playSuccessChime();
      confetti({ particleCount: 50, spread: 70 });
      onClose();
    }
  };

  const handlePrev = () => {
    soundFx.playSoftPop();
    setActiveStep((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border-4 border-sky-100 flex flex-col max-h-[88vh]">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🧭</span>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-slate-800">
                Hướng Dẫn Sử Dụng Hòn Đảo TOEIC
              </h2>
              <p className="text-xs text-slate-500">
                Bước {activeStep + 1} / {guideSteps.length}: {currentStepData.badge}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm"
          >
            ✕
          </button>
        </div>

        {/* Quick Stepper Dots */}
        <div className="flex justify-center gap-2 pt-4 pb-2">
          {guideSteps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => {
                soundFx.playSoftPop();
                setActiveStep(idx);
              }}
              className={`h-2.5 rounded-full transition-all ${
                activeStep === idx
                  ? 'w-8 bg-sky-500'
                  : 'w-2.5 bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>

        {/* Content Card */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          <div
            className={`p-6 rounded-3xl bg-gradient-to-r ${currentStepData.color} text-white shadow-md flex items-center gap-5`}
          >
            <span className="text-5xl md:text-6xl p-3 bg-white/20 backdrop-blur-md rounded-2xl shadow-inner shrink-0">
              {currentStepData.icon}
            </span>
            <div>
              <span className="inline-block bg-white/25 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest mb-1">
                {currentStepData.badge}
              </span>
              <h3 className="text-xl font-black leading-tight">{currentStepData.title}</h3>
              <p className="text-xs md:text-sm text-white/90 mt-1 leading-relaxed">
                {currentStepData.description}
              </p>
            </div>
          </div>

          {/* Highlights checklist */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2.5">
            <h4 className="font-extrabold text-xs text-slate-700 uppercase tracking-wider">
              ✨ Điểm nổi bật & Cách hoạt động:
            </h4>
            <div className="space-y-2">
              {currentStepData.highlights.map((h, hIdx) => (
                <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span className="leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer controls */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={activeStep === 0}
            className={`text-xs font-bold px-4 py-2.5 rounded-xl border ${
              activeStep > 0
                ? 'border-slate-200 text-slate-700 hover:bg-slate-50'
                : 'border-slate-100 text-slate-300 cursor-not-allowed'
            }`}
          >
            ← Bước trước
          </button>

          <button
            onClick={handleNext}
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold text-xs px-6 py-2.5 rounded-xl shadow transition-colors flex items-center gap-1.5"
          >
            {activeStep < guideSteps.length - 1 ? (
              <span>Bước tiếp theo →</span>
            ) : (
              <span>Khám phá đảo ngay 🎉</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
