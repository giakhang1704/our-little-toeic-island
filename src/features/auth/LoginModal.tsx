import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { UserProfile } from '../../domain/types';
import { repository } from '../../data/repositories/appRepository';
import { soundFx } from '../../utils/audio';

interface LoginModalProps {
  existingProfiles: UserProfile[];
  onSelectProfile: (profile: UserProfile) => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ existingProfiles, onSelectProfile }) => {
  const [isCreatingNew, setIsCreatingNew] = useState(existingProfiles.length === 0);
  const [name, setName] = useState('Em yêu');
  const [partnerName, setPartnerName] = useState('Anh');
  const [avatar, setAvatar] = useState('🌸');
  const [targetScore, setTargetScore] = useState(800);
  const [pin, setPin] = useState('');
  const [enteredPin, setEnteredPin] = useState('');
  const [selectedProfileForPin, setSelectedProfileForPin] = useState<UserProfile | null>(null);
  const [pinError, setPinError] = useState<string | null>(null);

  const avatarList = ['🌸', '🐱', '🐰', '🐻', '🍓', '🐬', '☕', '🌟'];

  const handleCreateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    soundFx.playSuccessChime();
    confetti({ particleCount: 50, spread: 70, origin: { y: 0.6 } });

    const newProfile: UserProfile = {
      id: `profile-${Date.now()}`,
      name: name.trim(),
      partnerName: partnerName.trim() || 'Anh',
      avatar,
      pin: pin.trim() || undefined,
      targetScore: Number(targetScore) || 800,
      createdAt: Date.now(),
    };

    await repository.saveProfile(newProfile);
    onSelectProfile(newProfile);
  };

  const handlePickProfile = (profile: UserProfile) => {
    soundFx.playSoftPop();
    if (profile.pin) {
      setSelectedProfileForPin(profile);
      setEnteredPin('');
      setPinError(null);
    } else {
      soundFx.playSuccessChime();
      repository.setActiveProfileId(profile.id);
      onSelectProfile(profile);
    }
  };

  const handleVerifyPin = () => {
    if (!selectedProfileForPin) return;

    if (enteredPin === selectedProfileForPin.pin) {
      soundFx.playSuccessChime();
      repository.setActiveProfileId(selectedProfileForPin.id);
      onSelectProfile(selectedProfileForPin);
    } else {
      soundFx.playSoftPop();
      setPinError('Mã PIN không chính xác, vui lòng thử lại.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-sky-400/30 via-teal-300/20 to-emerald-400/30 backdrop-blur-md animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 md:p-8 shadow-2xl border-4 border-sky-100 flex flex-col max-h-[90vh] overflow-y-auto">
        {/* Header Icon & Title */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-block p-4 bg-sky-50 rounded-3xl text-4xl shadow-sm border border-sky-100">
            🏝️
          </div>
          <h2 className="text-2xl font-black text-slate-800">Our Little TOEIC Island</h2>
          <p className="text-xs md:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
            Hòn đảo học tập dành riêng cho em. Đăng nhập để lưu giữ toàn bộ tiến trình học, vườn cây và giọt nước!
          </p>
        </div>

        {/* PIN VERIFICATION SUB-VIEW */}
        {selectedProfileForPin ? (
          <div className="space-y-4 animate-in fade-in">
            <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 text-center space-y-1">
              <span className="text-4xl block mb-1">{selectedProfileForPin.avatar}</span>
              <h3 className="font-bold text-slate-800 text-base">{selectedProfileForPin.name}</h3>
              <p className="text-xs text-slate-500">Hồ sơ này có cài mã PIN bảo mật</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 text-center">
                Nhập mã PIN 4 số:
              </label>
              <input
                type="password"
                maxLength={6}
                value={enteredPin}
                onChange={(e) => setEnteredPin(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleVerifyPin()}
                autoFocus
                placeholder="••••"
                className="w-full text-center tracking-widest text-xl font-bold p-3 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-sky-400 focus:outline-none"
              />
            </div>

            {pinError && (
              <div className="p-2.5 bg-red-50 text-red-600 rounded-xl text-xs text-center font-bold">
                {pinError}
              </div>
            )}

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setSelectedProfileForPin(null)}
                className="flex-1 py-3 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl"
              >
                ← Quay lại
              </button>
              <button
                type="button"
                onClick={handleVerifyPin}
                className="flex-1 py-3 text-xs font-bold text-white bg-sky-500 hover:bg-sky-600 rounded-xl shadow"
              >
                Mở khóa vào đảo →
              </button>
            </div>
          </div>
        ) : !isCreatingNew && existingProfiles.length > 0 ? (
          /* PROFILE SELECTION LIST */
          <div className="space-y-4">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
              Chọn hồ sơ của bạn:
            </div>

            <div className="space-y-2.5">
              {existingProfiles.map((prof) => (
                <button
                  key={prof.id}
                  onClick={() => handlePickProfile(prof)}
                  className="w-full p-4 rounded-2xl border-2 border-slate-200 hover:border-sky-400 hover:bg-sky-50/50 transition-all text-left flex items-center justify-between group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl p-2 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                      {prof.avatar}
                    </span>
                    <div>
                      <h4 className="font-extrabold text-slate-800 text-sm">{prof.name}</h4>
                      <p className="text-xs text-slate-500">
                        Đồng hành cùng: {prof.partnerName} • Mục tiêu: {prof.targetScore}+ TOEIC
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {prof.pin && <span className="text-xs text-slate-400">🔒 PIN</span>}
                    <span className="text-xs font-bold text-sky-600 group-hover:translate-x-1 transition-transform">
                      Vào học →
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 text-center">
              <button
                onClick={() => {
                  soundFx.playSoftPop();
                  setIsCreatingNew(true);
                }}
                className="text-xs font-bold text-sky-600 hover:text-sky-800 py-1 px-3 rounded-lg hover:bg-sky-50"
              >
                + Tạo hồ sơ người học mới
              </button>
            </div>
          </div>
        ) : (
          /* CREATE / REGISTER PROFILE FORM */
          <form onSubmit={handleCreateProfile} className="space-y-4 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-700">Thông tin hồ sơ người học:</span>
              {existingProfiles.length > 0 && (
                <button
                  type="button"
                  onClick={() => setIsCreatingNew(false)}
                  className="text-sky-600 font-bold hover:underline"
                >
                  ← Đã có hồ sơ
                </button>
              )}
            </div>

            {/* Choose Avatar */}
            <div>
              <label className="block font-bold text-slate-600 mb-1.5">
                Chọn biểu tượng đại diện:
              </label>
              <div className="flex gap-2 justify-center flex-wrap">
                {avatarList.map((av) => (
                  <button
                    key={av}
                    type="button"
                    onClick={() => setAvatar(av)}
                    className={`w-10 h-10 rounded-2xl text-xl flex items-center justify-center transition-all ${
                      avatar === av
                        ? 'bg-sky-100 border-2 border-sky-500 scale-110 shadow-sm'
                        : 'bg-slate-50 border border-slate-200 hover:bg-white'
                    }`}
                  >
                    {av}
                  </button>
                ))}
              </div>
            </div>

            {/* Name input */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Tên của bạn (Người học):
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="VD: Em yêu, Lan Anh, Mai..."
                className="w-full p-3 border border-slate-200 rounded-xl font-bold focus:ring-2 focus:ring-sky-400 focus:outline-none"
              />
            </div>

            {/* Partner Name input */}
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Tên người thương / người đồng hành:
              </label>
              <input
                type="text"
                value={partnerName}
                onChange={(e) => setPartnerName(e.target.value)}
                placeholder="VD: Anh, Khang..."
                className="w-full p-3 border border-slate-200 rounded-xl font-bold focus:ring-2 focus:ring-sky-400 focus:outline-none"
              />
            </div>

            {/* Target Score & PIN */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Mục tiêu điểm số:
                </label>
                <input
                  type="number"
                  min={100}
                  max={990}
                  step={10}
                  value={targetScore}
                  onChange={(e) => setTargetScore(Number(e.target.value))}
                  className="w-full p-3 border border-slate-200 rounded-xl font-bold focus:ring-2 focus:ring-sky-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Mã PIN bảo mật (tùy chọn):
                </label>
                <input
                  type="password"
                  maxLength={6}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="Để trống nếu không cần"
                  className="w-full p-3 border border-slate-200 rounded-xl font-bold focus:ring-2 focus:ring-sky-400 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-2 bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-600 hover:to-emerald-600 text-white font-extrabold text-sm py-3.5 rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
            >
              🌊 Bắt Đầu Hành Trình Ra Đảo TOEIC
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
