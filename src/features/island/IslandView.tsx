import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import {
  DecorationCatalogItem,
  InventoryItem,
  IslandPlacement,
  Mission,
  PersonalMessage,
  ReviewItem,
  UserSettings,
} from '../../domain/types';
import { repository } from '../../data/repositories/appRepository';
import { soundFx } from '../../utils/audio';
import { IslandCanvas } from './IslandCanvas';
import { MailboxModal } from './MailboxModal';
import { ShopModal } from './ShopModal';

interface IslandViewProps {
  onNavigateTab: (tab: 'practice' | 'review' | 'library' | 'progress') => void;
  onPlayCatMail: () => void;
  onStartDueReview: () => void;
  onOpenSettings: () => void;
  refreshTrigger: number;
}

export const IslandView: React.FC<IslandViewProps> = ({
  onNavigateTab,
  onPlayCatMail,
  onStartDueReview,
  onOpenSettings,
  refreshTrigger,
}) => {
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [placements, setPlacements] = useState<IslandPlacement[]>([]);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [catalog, setCatalog] = useState<DecorationCatalogItem[]>([]);
  const [messages, setMessages] = useState<PersonalMessage[]>([]);
  const [missions, setMissions] = useState<Mission[]>([]);
  const [dueReviews, setDueReviews] = useState<ReviewItem[]>([]);
  const [waterDrops, setWaterDrops] = useState<number>(0);

  // Modals
  const [isMailboxOpen, setIsMailboxOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const [selectedSlotForShop, setSelectedSlotForShop] = useState<string>('slot-house-garden');

  const loadAllIslandData = async () => {
    const [
      userSettings,
      islandPlacements,
      userInventory,
      decoCatalog,
      personalMessages,
      dailyMissions,
      dueItems,
      dropsBalance,
    ] = await Promise.all([
      repository.getSettings(),
      repository.getPlacements(),
      repository.getInventory(),
      repository.getCatalog(),
      repository.getMessages(),
      repository.getDailyMissions(),
      repository.getDueReviewItems(),
      repository.getWaterDropsBalance(),
    ]);

    setSettings(userSettings);
    setPlacements(islandPlacements);
    setInventory(userInventory);
    setCatalog(decoCatalog);
    setMessages(personalMessages);
    setMissions(dailyMissions);
    setDueReviews(dueItems);
    setWaterDrops(dropsBalance);
  };

  useEffect(() => {
    loadAllIslandData();
  }, [refreshTrigger]);

  const unreadMessagesCount = messages.filter((m) => m.isUnlocked && !m.isRead).length;

  const handleOpenShop = (slotId?: string) => {
    if (slotId) setSelectedSlotForShop(slotId);
    setIsShopOpen(true);
  };

  const handleBuyItem = async (itemId: string) => {
    const res = await repository.buyDecoration(itemId);
    if (res.success) {
      await loadAllIslandData();
    }
    return res;
  };

  const handlePlaceItem = async (slotId: string, itemId: string | null) => {
    await repository.updatePlacement(slotId, itemId);
    await loadAllIslandData();
  };

  const handleMarkMessageRead = async (id: string) => {
    await repository.markMessageAsRead(id);
    await loadAllIslandData();
  };

  return (
    <div className="w-full space-y-6 animate-in fade-in">
      {/* Top Welcome & "Continue Learning" Banner (Compact & Sleek) */}
      <div className="bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 p-5 md:p-6 rounded-3xl text-white shadow-cozy flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">🌸</span>
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-100">
              Hòn đảo học tập của {settings?.learnerName || 'Em yêu'}
            </span>
          </div>
          <h1 className="text-xl md:text-2xl font-black leading-tight">
            Chào {settings?.learnerName || 'em yêu'}, hôm nay mình cùng học nhé!
          </h1>
          <p className="text-xs text-sky-50 mt-0.5 leading-relaxed">
            Mục tiêu 800+ TOEIC. Chăm sóc hòn đảo mỗi ngày bằng những giọt nước chuyên cần.
          </p>
        </div>

        {/* Priority "Continue Learning" Action Button */}
        <div className="w-full md:w-auto shrink-0">
          {dueReviews.length > 0 ? (
            <button
              onClick={() => {
                soundFx.playWaterDrop();
                onStartDueReview();
              }}
              className="w-full md:w-auto bg-white text-emerald-800 hover:bg-emerald-50 font-black text-xs md:text-sm px-5 py-3 rounded-2xl shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span className="text-lg">💧</span>
              <span>Tiếp tục học: Tưới {dueReviews.length} cây ở Vườn Ôn Tập</span>
            </button>
          ) : (
            <button
              onClick={() => {
                soundFx.playSoftPop();
                onPlayCatMail();
              }}
              className="w-full md:w-auto bg-white text-orange-800 hover:bg-orange-50 font-black text-xs md:text-sm px-5 py-3 rounded-2xl shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span className="text-lg">🐱</span>
              <span>Tiếp tục học: Chơi "Thư Cho Mèo Mochi"</span>
            </button>
          )}
        </div>
      </div>

      {/* Interactive 2D Cozy Island Scene */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            🏝️ Khám phá & Tương tác trên đảo
          </span>
          <button
            onClick={() => handleOpenShop()}
            className="text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3.5 py-1.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <span>🛍️ Cửa Tiệm Trang Trí</span>
          </button>
        </div>

        <IslandCanvas
          placements={placements}
          dueReviewCount={dueReviews.length}
          unreadMessageCount={unreadMessagesCount}
          onNavigateTab={onNavigateTab}
          onOpenMailbox={() => setIsMailboxOpen(true)}
          onOpenShop={handleOpenShop}
          onPlayCatMail={onPlayCatMail}
        />
      </div>

      {/* 3 Daily Missions Card */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📋</span>
            <div>
              <h3 className="font-extrabold text-slate-800 text-base">
                Nhiệm Vụ Hàng Ngày (Daily Missions)
              </h3>
              <p className="text-xs text-slate-500">
                Hoàn thành cả 3 nhiệm vụ nhận thêm 5 giọt nước thưởng!
              </p>
            </div>
          </div>
          <span className="text-xs font-bold text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
            {missions.filter((m) => m.isCompleted).length} / {missions.length} Đã xong
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {missions.map((mission) => {
            const pct = Math.min(100, Math.round((mission.currentCount / mission.targetCount) * 100));

            return (
              <div
                key={mission.id}
                className={`p-4 rounded-2xl border transition-all ${
                  mission.isCompleted
                    ? 'bg-emerald-50/70 border-emerald-200'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-xs text-slate-800">{mission.title}</span>
                  <span
                    className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                      mission.isCompleted
                        ? 'bg-emerald-200 text-emerald-900'
                        : 'bg-sky-100 text-sky-800'
                    }`}
                  >
                    {mission.isCompleted ? '✓ Hoàn thành' : `💧 +${mission.rewardDrops}`}
                  </span>
                </div>

                <p className="text-[11px] text-slate-500 mb-3 leading-snug">
                  {mission.description}
                </p>

                {/* Progress bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-semibold text-slate-500">
                    <span>Tiến độ</span>
                    <span>
                      {mission.currentCount} / {mission.targetCount}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-200/80 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        mission.isCompleted ? 'bg-emerald-500' : 'bg-sky-500'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modals */}
      {isMailboxOpen && (
        <MailboxModal
          messages={messages}
          currentDrops={waterDrops}
          onClose={() => setIsMailboxOpen(false)}
          onMarkRead={handleMarkMessageRead}
        />
      )}

      {isShopOpen && (
        <ShopModal
          catalog={catalog}
          inventory={inventory}
          placements={placements}
          currentDrops={waterDrops}
          selectedSlotId={selectedSlotForShop}
          onClose={() => setIsShopOpen(false)}
          onBuyItem={handleBuyItem}
          onPlaceItem={handlePlaceItem}
        />
      )}
    </div>
  );
};
