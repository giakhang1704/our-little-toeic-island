import React, { useState } from 'react';
import { PersonalMessage } from '../../domain/types';
import { soundFx } from '../../utils/audio';

interface MailboxModalProps {
  messages: PersonalMessage[];
  currentDrops: number;
  onClose: () => void;
  onMarkRead: (id: string) => void;
}

export const MailboxModal: React.FC<MailboxModalProps> = ({
  messages,
  currentDrops,
  onClose,
  onMarkRead,
}) => {
  const [selectedMessage, setSelectedMessage] = useState<PersonalMessage | null>(null);

  const handleOpenLetter = (msg: PersonalMessage) => {
    if (!msg.isUnlocked) return;
    soundFx.playSoftPop();
    setSelectedMessage(msg);
    if (!msg.isRead) {
      onMarkRead(msg.id);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border-4 border-amber-100 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-amber-100">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📬</span>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Hộp Thư Tình Cảm</h2>
              <p className="text-xs text-slate-500">
                Những bức thư và lời nhắn riêng dành tặng em yêu
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

        {/* Content */}
        {selectedMessage ? (
          /* View individual letter */
          <div className="flex-1 overflow-y-auto py-6">
            <button
              onClick={() => setSelectedMessage(null)}
              className="text-xs font-bold text-sky-600 hover:text-sky-800 mb-4 flex items-center gap-1"
            >
              ← Quay lại danh sách thư
            </button>
            <div className="bg-amber-50/70 p-6 rounded-2xl border-2 border-amber-200 shadow-inner relative">
              <div className="absolute top-4 right-4 text-2xl opacity-60">💌</div>
              <h3 className="font-extrabold text-amber-950 text-lg mb-2">
                {selectedMessage.title}
              </h3>
              <p className="text-xs text-amber-700/80 mb-4 font-semibold">
                Từ: {selectedMessage.senderName} • {selectedMessage.date}
              </p>
              <div className="text-slate-800 text-sm leading-relaxed whitespace-pre-wrap font-medium">
                {selectedMessage.content}
              </div>
            </div>
          </div>
        ) : (
          /* Letter list */
          <div className="flex-1 overflow-y-auto py-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                onClick={() => handleOpenLetter(msg)}
                className={`p-4 rounded-2xl border transition-all ${
                  msg.isUnlocked
                    ? 'bg-amber-50/40 hover:bg-amber-100/60 border-amber-200 cursor-pointer shadow-sm hover:shadow'
                    : 'bg-slate-50 border-slate-200 opacity-70 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">
                      {msg.isUnlocked ? (msg.isRead ? '✉️' : '📩') : '🔒'}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm flex items-center gap-2">
                        {msg.title}
                        {msg.isUnlocked && !msg.isRead && (
                          <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                            Mới
                          </span>
                        )}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {msg.isUnlocked
                          ? `Gửi bởi: ${msg.senderName} • ${msg.date}`
                          : `Mục tiêu mở khóa: ${msg.unlockCondition.threshold} giọt nước (hiện có ${currentDrops})`}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-sky-600">
                    {msg.isUnlocked ? 'Đọc thư →' : 'Chưa mở'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-400">
          💧 Thu thập thêm giọt nước mỗi ngày để mở khóa thêm nhiều lời nhắn yêu thương!
        </div>
      </div>
    </div>
  );
};
