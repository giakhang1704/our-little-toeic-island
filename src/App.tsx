import React, { useEffect, useState } from 'react';
import { repository } from './data/repositories/appRepository';
import { soundFx } from './utils/audio';
import { Mission, TOEICPart, UserProfile, UserSettings } from './domain/types';
import { IslandView } from './features/island/IslandView';
import { PracticeHome } from './features/practice/PracticeHome';
import { PracticeSession } from './features/practice/PracticeSession';
import { CatMailGame } from './features/practice/CatMailGame';
import { ReviewGarden } from './features/review/ReviewGarden';
import { LibraryView } from './features/library/LibraryView';
import { ProgressView } from './features/progress/ProgressView';
import { SettingsModal } from './features/settings/SettingsModal';
import { LoginModal } from './features/auth/LoginModal';
import { FeatureGuideModal } from './components/guide/FeatureGuideModal';

type NavTab = 'island' | 'practice' | 'review' | 'library' | 'progress';

export const App: React.FC = () => {
  const [isDbReady, setIsDbReady] = useState(false);
  const [currentTab, setCurrentTab] = useState<NavTab>('island');
  const [waterDrops, setWaterDrops] = useState<number>(0);
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // User Profile & Authentication State
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [activeProfile, setActiveProfile] = useState<UserProfile | null>(null);
  const [showProfileSelector, setShowProfileSelector] = useState(false);

  // Fullscreen toggle state
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Active Practice sub-states
  const [activeSessionConfig, setActiveSessionConfig] = useState<{
    mode: 'practice' | 'test';
    partFilter?: TOEICPart;
    packId?: string;
    questionLimit?: number;
    missionType?: 'review';
    resumeAttemptId?: string;
    title: string;
  } | null>(null);

  const [isPlayingCatMail, setIsPlayingCatMail] = useState(false);
  const [autoStartReview, setAutoStartReview] = useState(false);

  // Initialize DB and profiles
  useEffect(() => {
    async function init() {
      await repository.initializeDatabase();
      const s = await repository.getSettings();
      const drops = await repository.getWaterDropsBalance();
      const allProfiles = await repository.getAllProfiles();

      setSettings(s);
      soundFx.setSoundEnabled(s.soundEnabled);
      setWaterDrops(drops);
      setProfiles(allProfiles);

      const activeId = repository.getActiveProfileId();
      if (activeId) {
        const found = allProfiles.find((p) => p.id === activeId);
        if (found) {
          setActiveProfile(found);
        } else if (allProfiles.length > 0) {
          setActiveProfile(allProfiles[0]);
          repository.setActiveProfileId(allProfiles[0].id);
        } else {
          setShowProfileSelector(true);
        }
      } else if (allProfiles.length > 0) {
        setActiveProfile(allProfiles[0]);
        repository.setActiveProfileId(allProfiles[0].id);
      } else {
        // First time visitor, show Login / Profile onboarding
        setShowProfileSelector(true);
      }

      setIsDbReady(true);
    }
    init();
  }, [refreshKey]);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = () => {
    soundFx.playSoftPop();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const refreshAppData = async () => {
    const drops = await repository.getWaterDropsBalance();
    const s = await repository.getSettings();
    const allProfiles = await repository.getAllProfiles();
    setWaterDrops(drops);
    setSettings(s);
    setProfiles(allProfiles);
    setRefreshKey((prev) => prev + 1);
  };

  const handleToggleSound = () => {
    if (!settings) return;
    const nextSound = !settings.soundEnabled;
    soundFx.setSoundEnabled(nextSound);
    repository.updateSettings({ soundEnabled: nextSound });
    setSettings({ ...settings, soundEnabled: nextSound });
    if (nextSound) soundFx.playWaterDrop();
  };

  const handleSelectProfile = (profile: UserProfile) => {
    setActiveProfile(profile);
    setShowProfileSelector(false);
    repository.setActiveProfileId(profile.id);
    refreshAppData();

    // If first time visit, prompt guide
    if (profile.createdAt > Date.now() - 60000) {
      setIsGuideOpen(true);
    }
  };

  const handleLogoutSwitchProfile = () => {
    soundFx.playSoftPop();
    setShowProfileSelector(true);
  };

  const handleStartMission = async (mission: Mission) => {
    if (mission.isCompleted) return;
    if (mission.type === 'cat_mail' || mission.type === 'any') {
      setIsPlayingCatMail(true);
      return;
    }
    if (mission.type === 'review') {
      const reviews = await repository.getAllReviewItems();
      const questions = await repository.getQuestionsByIds(reviews.map((r) => r.questionId));
      if (questions.length > 0) {
        setAutoStartReview(true);
        setCurrentTab('review');
        return;
      }
    }
    const questions = await repository.getAllQuestions();
    const eligible = questions.filter((q) => mission.type === 'listening' ? q.part <= 4 : q.part >= 5);
    const part = eligible.find((q) => q.part === 5)?.part ?? eligible[0]?.part;
    if (!part) { setCurrentTab('library'); return; }
    setActiveSessionConfig({
      mode: 'practice', partFilter: part,
      questionLimit: Math.max(1, mission.targetCount - mission.currentCount),
      title: mission.title,
      missionType: mission.type === 'review' ? 'review' : undefined,
    });
  };

  if (!isDbReady) {
    return (
      <div className="min-h-screen bg-sky-50/50 flex flex-col items-center justify-center p-6 text-center">
        <span className="text-6xl animate-bounce mb-4">🏝️</span>
        <h1 className="text-2xl font-black text-slate-800">Our Little TOEIC Island</h1>
        <p className="text-slate-500 text-xs mt-2 font-semibold">
          Đang chuẩn bị bãi biển, vườn cây và đón mèo Mochi...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/60 selection:bg-amber-200">
      {/* Top Header - Wide layout */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 md:px-8 py-3">
        <div className="w-full max-w-[1536px] mx-auto flex items-center justify-between gap-4">
          {/* Logo & Title */}
          <div
            onClick={() => {
              soundFx.playSoftPop();
              setActiveSessionConfig(null);
              setIsPlayingCatMail(false);
              setCurrentTab('island');
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">🏝️</span>
            <div>
              <h1 className="font-black text-base md:text-lg text-slate-800 leading-none">
                Our Little TOEIC Island
              </h1>
              <span className="text-[10px] md:text-xs text-sky-600 font-bold">
                Mục tiêu 800+ TOEIC L&R
              </span>
            </div>
          </div>

          {/* Right actions: Auto-save status, Profile, Drops, Sound, Fullscreen, Guide, Settings */}
          <div className="flex items-center gap-2 md:gap-3 flex-wrap justify-end">
            {/* Auto-Saved Status Indicator */}
            <div
              title="Mọi câu trả lời, giọt nước, cây trong vườn đều được tự động lưu vĩnh viễn trên máy của bạn"
              className="hidden lg:flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2.5 py-1.5 rounded-2xl shadow-sm select-none"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Đã tự động lưu</span>
            </div>

            {/* User Profile Badge */}
            {activeProfile && (
              <button
                onClick={handleLogoutSwitchProfile}
                title="Hồ sơ hiện tại. Bấm vào để đổi người học hoặc đăng nhập hồ sơ khác"
                className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200/80 border border-slate-200/80 px-3 py-1.5 rounded-2xl text-xs font-bold text-slate-700 transition-all shadow-sm group"
              >
                <span className="text-sm">{activeProfile.avatar}</span>
                <span className="truncate max-w-[100px] sm:max-w-none">{activeProfile.name}</span>
                <span className="text-[10px] text-slate-400 group-hover:text-slate-600">⇄ Đổi</span>
              </button>
            )}

            {/* Water Drops Currency */}
            <div className="flex items-center gap-1.5 bg-sky-50 border border-sky-200/80 px-3.5 py-1.5 rounded-2xl shadow-sm">
              <span className="text-base animate-gentle-pulse">💧</span>
              <span className="font-extrabold text-xs md:text-sm text-sky-800 font-mono">
                {waterDrops}
              </span>
            </div>

            {/* Feature Guide Button */}
            <button
              onClick={() => {
                soundFx.playSoftPop();
                setIsGuideOpen(true);
              }}
              className="flex items-center gap-1 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-3 py-1.5 rounded-2xl text-xs font-bold text-amber-900 transition-colors shadow-sm"
              title="Hướng dẫn sử dụng từng chức năng"
            >
              <span>🧭</span>
              <span className="hidden sm:inline">Hướng Dẫn</span>
            </button>

            {/* Fullscreen Toggle Button */}
            <button
              onClick={toggleFullscreen}
              title={isFullscreen ? 'Thoát toàn màn hình' : 'Mở rộng toàn màn hình (Full Screen)'}
              className="w-9 h-9 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-sm shadow-sm transition-colors text-slate-700"
            >
              {isFullscreen ? '🗗' : '⛶'}
            </button>

            {/* Sound Toggle */}
            <button
              onClick={handleToggleSound}
              title={settings?.soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
              className="w-9 h-9 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-sm shadow-sm transition-colors text-slate-700"
            >
              {settings?.soundEnabled ? '🔊' : '🔇'}
            </button>

            {/* Settings button */}
            <button
              onClick={() => {
                soundFx.playSoftPop();
                setIsSettingsOpen(true);
              }}
              title="Cài đặt & Sao lưu"
              className="w-9 h-9 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-sm shadow-sm transition-colors text-slate-700"
            >
              ⚙️
            </button>
          </div>
        </div>
      </header>

      {/* Main Navigation Bar (5 Sections: My Island, Practice, Review Garden, Library, Progress) */}
      {!activeSessionConfig && !isPlayingCatMail && (
        <nav className="bg-white border-b border-slate-200/80 px-4 md:px-8 py-2.5 sticky top-[57px] z-30 shadow-sm">
          <div className="w-full max-w-[1536px] mx-auto flex items-center justify-between overflow-x-auto gap-2 no-scrollbar">
            {[
              { id: 'island', label: '🏝️ Đảo Của Tôi' },
              { id: 'practice', label: '📖 Luyện Tập' },
              { id: 'review', label: '🌱 Vườn Ôn Tập' },
              { id: 'library', label: '📚 Kho Bài Học' },
              { id: 'progress', label: '📊 Tiến Độ 800+' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  soundFx.playSoftPop();
                  setCurrentTab(tab.id as NavTab);
                }}
                className={`px-4 py-2 rounded-2xl text-xs md:text-sm font-bold transition-all whitespace-nowrap ${
                  currentTab === tab.id
                    ? 'bg-slate-800 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>
      )}

      {/* Main Body Content - Wide full-bleed layout */}
      <main className={`flex-1 w-full mx-auto p-3 md:p-6 pb-20 ${activeSessionConfig ? "max-w-none" : "max-w-[1536px]"}`}>
        {/* If Active Practice Session */}
        {activeSessionConfig ? (
          <PracticeSession
            mode={activeSessionConfig.mode}
            title={activeSessionConfig.title}
            partFilter={activeSessionConfig.partFilter}
            packId={activeSessionConfig.packId}
            questionLimit={activeSessionConfig.questionLimit}
            missionType={activeSessionConfig.missionType}
            resumeAttemptId={activeSessionConfig.resumeAttemptId}
            onExit={() => {
              setActiveSessionConfig(null);
              refreshAppData();
            }}
          />
        ) : isPlayingCatMail ? (
          /* If Playing Cat Mail */
          <CatMailGame
            onBack={() => setIsPlayingCatMail(false)}
            onFinished={() => {
              setIsPlayingCatMail(false);
              refreshAppData();
            }}
          />
        ) : (
          /* Tab Views */
          <>
            {currentTab === 'island' && (
              <IslandView
                onStartMission={handleStartMission}
                onNavigateTab={(tab) => setCurrentTab(tab)}
                onPlayCatMail={() => setIsPlayingCatMail(true)}
                onStartDueReview={() => setCurrentTab('review')}
                onOpenSettings={() => setIsSettingsOpen(true)}
                refreshTrigger={refreshKey}
              />
            )}

            {currentTab === 'practice' && (
              <PracticeHome
                onStartSession={(cfg) => setActiveSessionConfig(cfg)}
                onPlayCatMail={() => setIsPlayingCatMail(true)}
              />
            )}

            {currentTab === 'review' && (
              <ReviewGarden autoStart={autoStartReview} onAutoStarted={() => setAutoStartReview(false)} onBackToHome={() => setCurrentTab('island')} />
            )}

            {currentTab === 'library' && <LibraryView />}

            {currentTab === 'progress' && <ProgressView onOpenAttempt={(attempt) => setActiveSessionConfig({ mode: attempt.mode, title: attempt.title, packId: attempt.packId, resumeAttemptId: attempt.id })} />}
          </>
        )}
      </main>

      {/* Login / Profile Modal */}
      {showProfileSelector && (
        <LoginModal
          existingProfiles={profiles}
          onSelectProfile={handleSelectProfile}
        />
      )}

      {/* Feature Guide Modal */}
      {isGuideOpen && (
        <FeatureGuideModal onClose={() => setIsGuideOpen(false)} />
      )}

      {/* Settings Modal */}
      {isSettingsOpen && (
        <SettingsModal
          onClose={() => setIsSettingsOpen(false)}
          onSettingsUpdated={refreshAppData}
        />
      )}
    </div>
  );
};
export default App;
