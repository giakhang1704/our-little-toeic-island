import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { DecorationCatalogItem, InventoryItem, IslandPlacement } from '../../domain/types';
import { soundFx } from '../../utils/audio';

interface ShopModalProps {
  catalog: DecorationCatalogItem[];
  inventory: InventoryItem[];
  placements: IslandPlacement[];
  currentDrops: number;
  selectedSlotId?: string;
  onClose: () => void;
  onBuyItem: (itemId: string) => Promise<{ success: boolean; message: string }>;
  onPlaceItem: (slotId: string, itemId: string | null) => Promise<void>;
}

export const ShopModal: React.FC<ShopModalProps> = ({
  catalog,
  inventory,
  placements,
  currentDrops,
  selectedSlotId = 'slot-house-garden',
  onClose,
  onBuyItem,
  onPlaceItem,
}) => {
  const [activeTab, setActiveTab] = useState<'shop' | 'place'>('shop');
  const [currentSlot, setCurrentSlot] = useState(selectedSlotId);
  const [feedbackMsg, setFeedbackMsg] = useState<{ text: string; isError: boolean } | null>(null);

  const slotLabels: Record<string, string> = {
    'slot-house-garden': 'Vườn Bên Nhà',
    'slot-beach': 'Bãi Biển',
    'slot-tree': 'Đỉnh Đồi',
    'slot-yard': 'Sân Trung Tâm',
  };

  const handleBuy = async (item: DecorationCatalogItem) => {
    soundFx.playSoftPop();
    const res = await onBuyItem(item.itemId);
    if (res.success) {
      soundFx.playSuccessChime();
      confetti({ particleCount: 30, spread: 60, origin: { y: 0.7 } });
      setFeedbackMsg({ text: res.message, isError: false });
    } else {
      setFeedbackMsg({ text: res.message, isError: true });
    }
  };

  const handlePlacementChange = async (itemId: string | null) => {
    soundFx.playSoftPop();
    await onPlaceItem(currentSlot, itemId);
    setFeedbackMsg({ text: 'Đã cập nhật vị trí trang trí trên đảo!', isError: false });
  };

  const placedInCurrentSlot = placements.find((p) => p.slotId === currentSlot)?.itemId || null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border-4 border-emerald-100 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-emerald-100">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🏝️</span>
            <div>
              <h2 className="text-xl font-bold text-slate-800">Cửa Tiệm & Trang Trí Đảo</h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-slate-500">Số dư hiện tại:</span>
                <span className="font-extrabold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full text-xs">
                  💧 {currentDrops} Giọt nước
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm"
          >
            ✕
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex gap-2 pt-4 pb-2">
          <button
            onClick={() => setActiveTab('shop')}
            className={`flex-1 py-2 text-sm font-bold rounded-xl transition-all ${
              activeTab === 'shop'
                ? 'bg-emerald-500 text-white shadow'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            🛍️ Cửa Hàng Trang Trí
          </button>
          <button
            onClick={() => setActiveTab('place')}
            className={`flex-1 py-2 text-sm font-bold rounded-xl transition-all ${
              activeTab === 'place'
                ? 'bg-emerald-500 text-white shadow'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            📍 Đặt Vào Ô Trang Trí ({inventory.length} đã sở hữu)
          </button>
        </div>

        {feedbackMsg && (
          <div
            className={`p-3 rounded-xl text-xs font-semibold my-2 flex justify-between items-center ${
              feedbackMsg.isError ? 'bg-red-50 text-red-700' : 'bg-emerald-50 text-emerald-800'
            }`}
          >
            <span>{feedbackMsg.text}</span>
            <button onClick={() => setFeedbackMsg(null)}>✕</button>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto py-2">
          {activeTab === 'shop' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {catalog.map((item) => {
                const isOwned = inventory.some((inv) => inv.itemId === item.itemId);
                const affordable = currentDrops >= item.price;

                return (
                  <div
                    key={item.itemId}
                    className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-emerald-300 transition-all flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-3xl p-2 bg-white rounded-xl shadow-sm border border-slate-100">
                        {item.icon}
                      </span>
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">{item.name}</h4>
                        <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-between pt-2 border-t border-slate-100">
                      <span className="font-extrabold text-sky-600 text-xs flex items-center gap-1">
                        💧 {item.price} Giọt nước
                      </span>
                      {isOwned ? (
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                          ✓ Đã sở hữu
                        </span>
                      ) : (
                        <button
                          onClick={() => handleBuy(item)}
                          disabled={!affordable}
                          className={`text-xs font-bold px-3 py-1.5 rounded-xl transition-all ${
                            affordable
                              ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow'
                              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                          }`}
                        >
                          Mua ngay
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="space-y-4">
              {/* Select Slot */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Chọn vị trí trên đảo muốn trang trí:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {Object.entries(slotLabels).map(([slotKey, label]) => (
                    <button
                      key={slotKey}
                      onClick={() => setCurrentSlot(slotKey)}
                      className={`p-2 rounded-xl text-xs font-bold border transition-all text-center ${
                        currentSlot === slotKey
                          ? 'border-emerald-500 bg-emerald-50 text-emerald-800 shadow-sm'
                          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Current placed item */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between">
                <span className="text-xs text-amber-900 font-semibold">
                  Hiện tại ở "{slotLabels[currentSlot]}":
                </span>
                {placedInCurrentSlot ? (
                  <button
                    onClick={() => handlePlacementChange(null)}
                    className="text-xs font-bold text-red-600 hover:text-red-800 bg-white px-2.5 py-1 rounded-lg border border-red-200 shadow-sm"
                  >
                    Gỡ vật phẩm
                  </button>
                ) : (
                  <span className="text-xs text-slate-400 italic">Đang để trống</span>
                )}
              </div>

              {/* Available inventory */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Chọn vật phẩm bạn đã có để đặt vào:
                </label>
                {inventory.length === 0 ? (
                  <div className="text-center py-6 text-xs text-slate-400 bg-slate-50 rounded-2xl">
                    Bạn chưa có vật phẩm nào. Hãy ghé Cửa Hàng để đổi nhé!
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {inventory.map((inv) => (
                      <button
                        key={inv.id}
                        onClick={() => handlePlacementChange(inv.itemId)}
                        className={`p-3 rounded-xl border transition-all text-left flex items-center gap-2.5 ${
                          placedInCurrentSlot === inv.itemId
                            ? 'border-emerald-500 bg-emerald-50 ring-2 ring-emerald-400'
                            : 'border-slate-200 bg-white hover:border-emerald-300'
                        }`}
                      >
                        <span className="text-2xl">{inv.icon}</span>
                        <div>
                          <div className="font-bold text-slate-800 text-xs truncate">
                            {inv.name}
                          </div>
                          {placedInCurrentSlot === inv.itemId && (
                            <span className="text-[10px] text-emerald-600 font-bold">
                              ✓ Đang đặt
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
