import React, { useEffect, useState } from 'react';
import { UserSettings } from '../../domain/types';
import { repository } from '../../data/repositories/appRepository';
import { soundFx } from '../../utils/audio';
import {
  BackupPreview,
  createFullBackupJson,
  downloadJsonFile,
  restoreFromBackupData,
  validateBackupJson,
} from '../../content/exporters/backupExporter';

interface SettingsModalProps {
  onClose: () => void;
  onSettingsUpdated: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({ onClose, onSettingsUpdated }) => {
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [activeTab, setActiveTab] = useState<'general' | 'backup'>('general');

  // Backup restore state
  const [backupPreview, setBackupPreview] = useState<BackupPreview | null>(null);
  const [backupRawData, setBackupRawData] = useState<any | null>(null);
  const [restoreMode, setRestoreMode] = useState<'merge' | 'replace'>('merge');
  const [restoreSuccess, setRestoreSuccess] = useState<string | null>(null);

  useEffect(() => {
    repository.getSettings().then(setSettings);
  }, []);

  if (!settings) return null;

  const handleSaveSettings = async () => {
    soundFx.playSoftPop();
    await repository.updateSettings(settings);
    soundFx.setSoundEnabled(settings.soundEnabled);
    onSettingsUpdated();
    onClose();
  };

  const handleExportFullBackup = async () => {
    soundFx.playSoftPop();
    const jsonStr = await createFullBackupJson();
    const dateStr = new Date().toISOString().split('T')[0];
    downloadJsonFile(jsonStr, `our-little-toeic-island-backup-${dateStr}.json`);
  };

  const handleSelectBackupFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    soundFx.playSoftPop();
    setRestoreSuccess(null);

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const { preview, data } = validateBackupJson(text);
      setBackupPreview(preview);
      setBackupRawData(data);
    };
    reader.readAsText(file);
  };

  const handleConfirmRestore = async () => {
    if (!backupRawData) return;
    soundFx.playSoftPop();

    await restoreFromBackupData(backupRawData, restoreMode);
    soundFx.playSuccessChime();
    setRestoreSuccess('Đã khôi phục dữ liệu thành công!');
    setBackupPreview(null);
    setBackupRawData(null);
    onSettingsUpdated();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border-4 border-slate-100 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <span className="text-3xl">⚙️</span>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Cài Đặt & Sao Lưu</h2>
              <p className="text-xs text-slate-500">
                Tùy chỉnh cá nhân và sao lưu an toàn toàn bộ tiến trình học
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

        {/* Tab switcher */}
        <div className="flex gap-2 pt-4 pb-2">
          <button
            onClick={() => setActiveTab('general')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'general'
                ? 'bg-slate-800 text-white shadow'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            🎨 Cài Đặt Cá Nhân
          </button>
          <button
            onClick={() => setActiveTab('backup')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              activeTab === 'backup'
                ? 'bg-slate-800 text-white shadow'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            💾 Sao Lưu & Phục Hồi
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto py-3 space-y-4">
          {activeTab === 'general' ? (
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Tên người học (bạn):
                  </label>
                  <input
                    type="text"
                    value={settings.learnerName}
                    onChange={(e) => setSettings({ ...settings, learnerName: e.target.value })}
                    className="w-full p-2.5 border border-slate-200 rounded-xl font-bold"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Tên người đồng hành:
                  </label>
                  <input
                    type="text"
                    value={settings.partnerName}
                    onChange={(e) => setSettings({ ...settings, partnerName: e.target.value })}
                    className="w-full p-2.5 border border-slate-200 rounded-xl font-bold"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 bg-slate-50 cursor-pointer">
                  <div>
                    <div className="font-bold text-slate-800">Âm thanh & Hiệu ứng giọt nước</div>
                    <div className="text-[11px] text-slate-500">
                      Tiếng chuông ngân vui tai và âm thanh giọt nước ấm áp
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.soundEnabled}
                    onChange={(e) => setSettings({ ...settings, soundEnabled: e.target.checked })}
                    className="w-4 h-4 rounded text-sky-500"
                  />
                </label>

                <label className="flex items-center justify-between p-3 rounded-2xl border border-slate-200 bg-slate-50 cursor-pointer">
                  <div>
                    <div className="font-bold text-slate-800">Chế độ giảm chuyển động (Reduced Motion)</div>
                    <div className="text-[11px] text-slate-500">
                      Giảm bớt hoạt ảnh rung lắc giúp mắt không bị mỏi khi đọc lâu
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    checked={settings.reducedMotion}
                    onChange={(e) => setSettings({ ...settings, reducedMotion: e.target.checked })}
                    className="w-4 h-4 rounded text-sky-500"
                  />
                </label>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Giới hạn ôn tập mỗi ngày (Cap):
                  </label>
                  <input
                    type="number"
                    min={5}
                    max={50}
                    value={settings.dailyReviewCap}
                    onChange={(e) => setSettings({ ...settings, dailyReviewCap: Number(e.target.value) })}
                    className="w-full p-2.5 border border-slate-200 rounded-xl font-bold"
                  />
                  <span className="text-[10px] text-slate-400">Tránh áp lực quá tải</span>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Mục tiêu điểm số:
                  </label>
                  <input
                    type="number"
                    value={settings.targetScore}
                    onChange={(e) => setSettings({ ...settings, targetScore: Number(e.target.value) })}
                    className="w-full p-2.5 border border-slate-200 rounded-xl font-bold"
                  />
                  <span className="text-[10px] text-slate-400">Thang điểm TOEIC 10 - 990</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-xs">
              <div className="p-4 bg-sky-50/70 rounded-2xl border border-sky-200 space-y-2">
                <h4 className="font-bold text-sky-950">Sao Lưu Toàn Bộ Dữ Liệu (Full Backup)</h4>
                <p className="text-slate-600 leading-relaxed">
                  Xuất file sao lưu bao gồm: Tất cả bộ đề, câu hỏi, lịch sử làm bài, cây trong vườn ôn tập, giọt nước, vật phẩm trang trí đảo và thư tình cảm.
                </p>
                <button
                  onClick={handleExportFullBackup}
                  className="bg-sky-600 hover:bg-sky-700 text-white font-bold px-4 py-2 rounded-xl shadow transition-colors flex items-center gap-1.5"
                >
                  <span>⬇ Tải Bản Sao Lưu Về Máy (.json)</span>
                </button>
              </div>

              <div className="p-4 bg-amber-50/70 rounded-2xl border border-amber-200 space-y-3">
                <h4 className="font-bold text-amber-950">Khôi Phục Dữ Liệu Từ Bản Sao Lưu</h4>
                <p className="text-slate-600 leading-relaxed">
                  Tải file sao lưu đã lưu trước đó để đồng bộ sang thiết bị mới hoặc khôi phục tiến trình.
                </p>

                <label className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-4 py-2 rounded-xl shadow cursor-pointer inline-block transition-colors">
                  <span>Chọn file backup (.json)</span>
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleSelectBackupFile}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Restore Success Message */}
              {restoreSuccess && (
                <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 font-bold">
                  ✨ {restoreSuccess}
                </div>
              )}

              {/* Restore Preview Modal Details */}
              {backupPreview && (
                <div className="p-4 bg-white rounded-2xl border-2 border-indigo-200 space-y-3 shadow-sm animate-in fade-in">
                  <div className="flex items-center justify-between font-bold text-slate-800">
                    <span>Xem trước nội dung sao lưu:</span>
                    <span className={backupPreview.isValid ? 'text-emerald-600' : 'text-red-600'}>
                      {backupPreview.isValid ? '✓ File Hợp Lệ' : '✕ File Lỗi'}
                    </span>
                  </div>

                  {backupPreview.isValid ? (
                    <div className="space-y-2 text-slate-600">
                      <div className="grid grid-cols-2 gap-2 text-[11px] bg-slate-50 p-2.5 rounded-xl">
                        <div>Bộ đề: <strong>{backupPreview.studyPacksCount}</strong></div>
                        <div>Câu hỏi: <strong>{backupPreview.questionsCount}</strong></div>
                        <div>Lượt làm bài: <strong>{backupPreview.attemptsCount}</strong></div>
                        <div>Cây ôn tập: <strong>{backupPreview.reviewItemsCount}</strong></div>
                      </div>

                      <div className="pt-2">
                        <label className="block font-bold text-slate-700 mb-1">
                          Chọn cách khôi phục:
                        </label>
                        <div className="flex gap-2">
                          <label className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="radio"
                              name="restore_mode"
                              checked={restoreMode === 'merge'}
                              onChange={() => setRestoreMode('merge')}
                            />
                            <span>Gộp thêm (Merge - Giữ dữ liệu hiện có)</span>
                          </label>
                          <label className="flex items-center gap-1.5 cursor-pointer">
                            <input
                              type="radio"
                              name="restore_mode"
                              checked={restoreMode === 'replace'}
                              onChange={() => setRestoreMode('replace')}
                            />
                            <span>Ghi đè (Replace)</span>
                          </label>
                        </div>
                      </div>

                      <div className="pt-2 flex justify-end">
                        <button
                          onClick={handleConfirmRestore}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2 rounded-xl shadow"
                        >
                          Xác Nhận Khôi Phục Dữ Liệu →
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-red-600 space-y-1">
                      {backupPreview.errors.map((err, idx) => (
                        <div key={idx}>• {err}</div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex justify-end gap-2">
          {activeTab === 'general' && (
            <button
              onClick={handleSaveSettings}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition-colors"
            >
              Lưu Cài Đặt
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
