import React, { useState } from 'react';
import { DecorationCatalogItem, InventoryItem } from '../../domain/types';
import { repository } from '../../data/repositories/appRepository';

export function RewardWallet({ catalog, inventory, drops, onBuy, onRefresh }: {
  catalog: DecorationCatalogItem[]; inventory: InventoryItem[]; drops: number;
  onBuy: (item: DecorationCatalogItem) => Promise<void>; onRefresh: () => Promise<void>;
}) {
  const [busy, setBusy] = useState(false);
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const [error, setError] = useState('');
  const rewards = inventory.filter((item) => item.category === 'voucher' || item.category === 'perk');
  return <div className="space-y-5">
    <div className="rounded-2xl bg-rose-50 p-4 text-sm text-rose-900">
      <h3 className="font-extrabold">Học chăm, hẹn hò vui hơn 💌</h3>
      <p className="mt-1">Giọt nước là điểm tích lũy. Đạt mốc để nhận vé, không trừ điểm. Mỗi loại vé có mốc riêng: vé tiếp theo mở khi tích lũy thêm cùng số điểm. Quà ngoài đời do hai bạn cùng sắp xếp, không đặt món hay thanh toán qua ứng dụng.</p>
    </div>
    {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
    <div className="grid gap-3 sm:grid-cols-2">
      {catalog.filter((item) => item.category === 'voucher' || item.category === 'perk').map((item) => { const threshold = item.price * (inventory.filter((owned) => owned.itemId === item.itemId).length + 1); return <div key={item.itemId} className="flex flex-col gap-3 rounded-2xl border border-rose-100 bg-white p-4">
        <span className="text-4xl">{item.icon}</span><h4 className="font-bold">{item.name}</h4>
        <p className="flex-1 text-xs leading-relaxed text-slate-600">{item.description}</p>
        <button disabled={busy || drops < threshold} className="rounded-xl bg-rose-600 px-3 py-2 text-xs font-bold text-white disabled:bg-slate-200 disabled:text-slate-500"
          onClick={async () => { setBusy(true); setError(''); try { await onBuy(item); } catch { setError('Chưa đổi được quà, vui lòng thử lại.'); } finally { setBusy(false); } }}>
          Mở ở {threshold} điểm{drops < threshold ? ` · Còn thiếu ${threshold - drops} 💧` : ''}
        </button>
      </div>; })}
    </div>
    <h3 className="font-extrabold">🎟️ Ví quà của em</h3>
    {rewards.length === 0 && <p className="text-sm text-slate-500">Vé đã mở sẽ xuất hiện ở đây, không hết hạn.</p>}
    {rewards.map((item) => <div key={item.id} className="rounded-xl border p-4 text-sm">
      <div className="flex items-center justify-between gap-2"><strong>{item.icon} {item.name}</strong><span className="text-xs text-slate-500">{item.usedAt ? 'Đã sử dụng' : 'Chưa sử dụng'}</span></div>
      <p className="mt-1 text-xs text-slate-500">Mở ngày {new Date(item.unlockedAt).toLocaleDateString('vi-VN')} · Vé {item.id.slice(-8)}</p>
      {item.usedAt && <p className="mt-1 text-xs text-slate-500">Dùng ngày {new Date(item.usedAt).toLocaleDateString('vi-VN')}</p>}
      {!item.usedAt && item.category === 'perk' && <p className="mt-2 text-xs text-sky-700">Mở Luyện tập và bấm “Dùng vé gợi ý” để sử dụng.</p>}
      {!item.usedAt && item.category === 'voucher' && (confirmId === item.id ? <div className="mt-3 space-y-2">
        <p className="text-xs">Hai bạn đã nhận quà / dùng vé này rồi chứ?</p>
        <button disabled={busy} className="mr-3 rounded-lg bg-rose-600 px-3 py-2 text-xs text-white" onClick={async () => {
          setBusy(true); setError('');
          try { if (!(await repository.useReward(item.id))) setError('Vé này đã được dùng.'); await onRefresh(); setConfirmId(null); }
          catch { setError('Chưa lưu được trạng thái vé.'); } finally { setBusy(false); }
        }}>Đúng, đánh dấu đã dùng</button><button onClick={() => setConfirmId(null)}>Để sau</button>
      </div> : <button className="mt-3 text-xs font-bold text-rose-600" onClick={() => setConfirmId(item.id)}>Đánh dấu đã sử dụng →</button>)}
    </div>)}
  </div>;
}
