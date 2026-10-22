import React, { useState } from 'react';
import { IslandPlacement } from '../../domain/types';
import { soundFx } from '../../utils/audio';

interface IslandCanvasProps {
  placements: IslandPlacement[];
  dueReviewCount: number;
  unreadMessageCount: number;
  onNavigateTab: (tab: 'practice' | 'review' | 'library' | 'progress') => void;
  onOpenMailbox: () => void;
  onOpenShop: (slotId?: string) => void;
  onPlayCatMail: () => void;
}

export const IslandCanvas: React.FC<IslandCanvasProps> = ({
  placements,
  dueReviewCount,
  unreadMessageCount,
  onNavigateTab,
  onOpenMailbox,
  onOpenShop,
  onPlayCatMail,
}) => {
  const [catSpeech, setCatSpeech] = useState<string | null>(null);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const handleCatClick = () => {
    soundFx.playSoftPop();
    const greetings = [
      'Meow! Hôm nay em ghé thăm đảo, Mochi nhớ em lắm! 🐾',
      'Purr purr... Anh bảo là cứ làm từ từ, 800+ TOEIC nằm ngay trong tầm tay! ❤️',
      'Tớ vừa nhận được một xấp thư Part 5 cần kiểm tra, cậu giúp tớ nhé? ✉️',
      'Đừng quên tưới nước cho mấy cây ở Vườn Ôn Tập nhen! 🌸',
      'Một ngày chăm chỉ sẽ nở ra thật nhiều hoa thơm trên đảo! 🌷',
    ];
    const picked = greetings[Math.floor(Math.random() * greetings.length)];
    setCatSpeech(picked);
  };

  const getSlotItemIcon = (slotId: string) => {
    const slot = placements.find((p) => p.slotId === slotId);
    if (!slot || !slot.itemId) return null;
    const icons: Record<string, string> = {
      'sakura-tree': '🌸',
      'wooden-bench': '🪵',
      'stone-lantern': '🏮',
      'beach-parasol': '⛱️',
      'cat-tower': '🐾',
      'campfire': '🔥',
      'flower-bed': '🌷',
      'fairy-lights': '✨',
    };
    return icons[slot.itemId] || '✨';
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-sky-100 bg-gradient-to-b from-sky-200 via-sky-100 to-emerald-50 select-none">
      {/* Dynamic Hover Tooltip */}
      {hoveredLocation && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-slate-800/90 text-white text-xs md:text-sm font-semibold px-5 py-2 rounded-full shadow-xl backdrop-blur-md pointer-events-none transition-all border border-white/20 animate-in fade-in">
          {hoveredLocation}
        </div>
      )}

      {/* SVG Interactive Wide Island Scene (Wider viewBox 1100x520 for wide screens) */}
      <svg
        viewBox="0 0 1100 520"
        className="w-full h-auto block max-h-[70vh] object-contain"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="oceanGradWide" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="islandGrassWide" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4ADE80" />
            <stop offset="100%" stopColor="#16A34A" />
          </linearGradient>
          <linearGradient id="sandGradWide" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="100%" stopColor="#FDE047" />
          </linearGradient>
          <linearGradient id="roofGradWide" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FB7185" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
          <filter id="cozyShadowWide" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.14" />
          </filter>
        </defs>

        {/* Ocean Background */}
        <rect x="0" y="0" width="1100" height="520" fill="url(#oceanGradWide)" />

        {/* Floating Clouds in the sky */}
        <g opacity="0.65" className="animate-float">
          <ellipse cx="140" cy="50" rx="55" ry="18" fill="#FFFFFF" />
          <ellipse cx="170" cy="42" rx="35" ry="18" fill="#FFFFFF" />
          <ellipse cx="940" cy="65" rx="60" ry="20" fill="#FFFFFF" />
          <ellipse cx="910" cy="58" rx="38" ry="18" fill="#FFFFFF" />
        </g>

        {/* Gentle Wave Ripples */}
        <path d="M 80 140 Q 110 130 140 140 T 200 140" stroke="#E0F2FE" strokeWidth="3" fill="none" opacity="0.6" />
        <path d="M 880 160 Q 910 150 940 160 T 1000 160" stroke="#E0F2FE" strokeWidth="3" fill="none" opacity="0.6" />
        <path d="M 100 420 Q 130 410 160 420 T 220 420" stroke="#E0F2FE" strokeWidth="3" fill="none" opacity="0.6" />
        <path d="M 920 410 Q 950 400 980 410 T 1040 410" stroke="#E0F2FE" strokeWidth="3" fill="none" opacity="0.6" />

        {/* Little Swimming Dolphin / Fish on the ocean edge */}
        <path d="M 80 280 Q 95 265 110 280 Q 95 272 80 280" fill="#0284C7" opacity="0.6" />
        <path d="M 1020 310 Q 1035 295 1050 310 Q 1035 302 1020 310" fill="#0284C7" opacity="0.6" />

        {/* Sandy Shore (Centered on 550, wider span) */}
        <ellipse cx="550" cy="295" rx="460" ry="185" fill="url(#sandGradWide)" filter="url(#cozyShadowWide)" />

        {/* Island Grassland */}
        <ellipse cx="550" cy="280" rx="425" ry="160" fill="url(#islandGrassWide)" />

        {/* Cobblestone Pathway */}
        <path
          d="M 410 250 C 460 280 520 270 580 320 C 650 370 710 370 780 400"
          stroke="#FDE68A"
          strokeWidth="20"
          strokeLinecap="round"
          strokeDasharray="4 8"
          fill="none"
          opacity="0.85"
        />

        {/* Palm / Tropical Tree on Shore */}
        <g transform="translate(190, 190) scale(1.1)">
          {/* Trunk */}
          <path d="M 30 110 Q 45 60 25 20" stroke="#92400E" strokeWidth="10" strokeLinecap="round" fill="none" />
          {/* Leaves */}
          <path d="M 25 20 Q -5 10 -20 25" stroke="#16A34A" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M 25 20 Q 25 -15 20 -25" stroke="#16A34A" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M 25 20 Q 55 5 70 15" stroke="#16A34A" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M 25 20 Q 40 40 45 55" stroke="#16A34A" strokeWidth="6" strokeLinecap="round" fill="none" />
          {/* Coconuts */}
          <circle cx="21" cy="22" r="4" fill="#78350F" />
          <circle cx="28" cy="24" r="4" fill="#78350F" />
        </g>

        {/* ----------------- LOCATION: THE WOODEN DOCK (Practice) ----------------- */}
        <g
          className="cursor-pointer transition-transform hover:scale-105 origin-bottom-right"
          onMouseEnter={() => setHoveredLocation('⛵ Cầu Tàu Luyện Tập & Mini-Test - Click để vào phòng thi!')}
          onMouseLeave={() => setHoveredLocation(null)}
          onClick={() => {
            soundFx.playSoftPop();
            onNavigateTab('practice');
          }}
        >
          {/* Dock wood planks */}
          <polygon points="780,390 910,430 890,455 760,415" fill="#92400E" />
          <polygon points="780,390 910,430 910,442 780,402" fill="#B45309" />
          {/* Dock Pilings */}
          <rect x="880" y="435" width="12" height="28" fill="#78350F" rx="2" />
          <rect x="820" y="415" width="12" height="28" fill="#78350F" rx="2" />
          {/* Little Sailboat floating beside dock */}
          <g transform="translate(895, 385)">
            <path d="M 10 35 Q 50 40 90 35 L 75 60 L 25 60 Z" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.5" />
            <line x1="50" y1="35" x2="50" y2="-10" stroke="#78350F" strokeWidth="3" />
            <polygon points="52,-8 52,30 85,25" fill="#38BDF8" opacity="0.9" />
            <polygon points="48,-5 48,28 20,25" fill="#BAE6FD" opacity="0.9" />
          </g>
          <rect x="800" y="445" width="135" height="24" rx="12" fill="#0284C7" />
          <text x="867" y="461" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#FFFFFF" className="select-none pointer-events-none">
            ⛵ Bến Luyện Tập
          </text>
        </g>

        {/* ----------------- LOCATION: THE COZY COTTAGE (House) ----------------- */}
        <g
          className="cursor-pointer transition-transform hover:scale-105 origin-center"
          onMouseEnter={() => setHoveredLocation('🏡 Ngôi Nhà & Hộp Thư Tình Cảm - Click để đọc thư!')}
          onMouseLeave={() => setHoveredLocation(null)}
          onClick={() => {
            soundFx.playSoftPop();
            onOpenMailbox();
          }}
        >
          {/* Chimney & Smoke */}
          <rect x="330" y="130" width="18" height="38" fill="#94A3B8" rx="2" />
          <circle cx="339" cy="115" r="8" fill="#F1F5F9" opacity="0.7" className="animate-float" />
          <circle cx="344" cy="98" r="11" fill="#F1F5F9" opacity="0.4" className="animate-float" />

          {/* House Base */}
          <rect x="305" y="165" width="155" height="105" rx="8" fill="#FEF3C7" stroke="#D97706" strokeWidth="3" />
          {/* Cozy Roof */}
          <polygon points="290,170 382,105 475,170" fill="url(#roofGradWide)" stroke="#BE123C" strokeWidth="3" />

          {/* Round Attic Window */}
          <circle cx="382" cy="142" r="15" fill="#BAE6FD" stroke="#FBBF24" strokeWidth="3" />

          {/* Wooden Door */}
          <rect x="360" y="210" width="40" height="60" rx="5" fill="#B45309" stroke="#78350F" strokeWidth="2" />
          <circle cx="392" cy="242" r="3.5" fill="#FDE047" />

          {/* Window with curtains */}
          <rect x="320" y="195" width="30" height="34" rx="4" fill="#BAE6FD" stroke="#92400E" strokeWidth="2" />
          <line x1="335" y1="195" x2="335" y2="229" stroke="#92400E" strokeWidth="2" />

          {/* Mailbox in Front */}
          <rect x="470" y="235" width="7" height="35" fill="#78350F" />
          <rect x="460" y="215" width="28" height="23" rx="5" fill="#EF4444" stroke="#B91C1C" strokeWidth="2" />
          <circle cx="474" cy="226" r="3.5" fill="#FDE047" />

          {/* Unread message notification badge */}
          {unreadMessageCount > 0 && (
            <g className="animate-bounce">
              <circle cx="488" cy="208" r="11" fill="#DC2626" stroke="#FFFFFF" strokeWidth="2" />
              <text x="488" y="212" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">
                {unreadMessageCount}
              </text>
            </g>
          )}

          <rect x="330" y="278" width="105" height="22" rx="11" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
          <text x="382" y="293" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#78350F">
            🏡 Nhà Ấm Áp
          </text>
        </g>

        {/* ----------------- LOCATION: THE REVIEW GARDEN ----------------- */}
        <g
          className="cursor-pointer transition-transform hover:scale-105 origin-center"
          onMouseEnter={() => setHoveredLocation('🌱 Vườn Ôn Tập (Review Garden) - Tưới nước cho cây!')}
          onMouseLeave={() => setHoveredLocation(null)}
          onClick={() => {
            soundFx.playSoftPop();
            onNavigateTab('review');
          }}
        >
          {/* Garden Soil Fence */}
          <rect x="570" y="150" width="180" height="105" rx="12" fill="#92400E" opacity="0.25" stroke="#B45309" strokeWidth="2.5" strokeDasharray="5 5" />

          {/* Garden Plots */}
          <ellipse cx="615" cy="180" rx="32" ry="16" fill="#78350F" />
          <ellipse cx="700" cy="180" rx="32" ry="16" fill="#78350F" />
          <ellipse cx="655" cy="225" rx="38" ry="18" fill="#78350F" />

          {/* Plant 1: Sprout */}
          <path d="M 615 180 Q 605 158 615 150 Q 625 158 615 180" fill="#22C55E" />
          <circle cx="610" cy="152" r="6" fill="#4ADE80" />

          {/* Plant 2: Blossom */}
          <path d="M 700 180 L 700 155" stroke="#16A34A" strokeWidth="3.5" />
          <circle cx="700" cy="150" r="12" fill="#FB7185" />
          <circle cx="700" cy="150" r="5" fill="#FDE047" />

          {/* Plant 3: Bud */}
          <path d="M 655 225 L 655 200" stroke="#16A34A" strokeWidth="3.5" />
          <circle cx="655" cy="196" r="8" fill="#F472B6" />

          {/* Watering Can Icon */}
          <g transform="translate(710, 210) scale(1)">
            <ellipse cx="14" cy="16" rx="14" ry="10" fill="#0284C7" />
            <path d="M 2 15 C 2 8 6 5 13 5" stroke="#0284C7" strokeWidth="3.5" fill="none" />
            <line x1="24" y1="12" x2="35" y2="5" stroke="#0284C7" strokeWidth="3.5" />
            <circle cx="36" cy="5" r="3.5" fill="#38BDF8" />
          </g>

          {/* Due Review Badge */}
          {dueReviewCount > 0 && (
            <g className="animate-gentle-pulse">
              <rect x="610" y="118" width="105" height="25" rx="12.5" fill="#0284C7" stroke="#E0F2FE" strokeWidth="2" />
              <text x="662" y="135" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#FFFFFF">
                💧 {dueReviewCount} cây cần tưới
              </text>
            </g>
          )}

          <rect x="615" y="265" width="100" height="22" rx="11" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
          <text x="665" y="280" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#78350F">
            🌱 Vườn Ôn Tập
          </text>
        </g>

        {/* ----------------- COMPANION: MOCHI THE CAT ----------------- */}
        <g
          className="cursor-pointer transition-transform hover:scale-110 origin-center"
          onMouseEnter={() => setHoveredLocation('🐱 Mochi the Cat - Click để trò chuyện & chơi Thư Cho Mèo!')}
          onMouseLeave={() => setHoveredLocation(null)}
          onClick={handleCatClick}
        >
          {/* Shadow */}
          <ellipse cx="485" cy="355" rx="26" ry="10" fill="#0F172A" opacity="0.15" />

          {/* Cat Body */}
          <ellipse cx="485" cy="342" rx="21" ry="16" fill="#FB923C" />
          {/* Tail */}
          <path d="M 502 346 Q 524 336 518 322" stroke="#FB923C" strokeWidth="6" strokeLinecap="round" fill="none" />

          {/* Cat Head */}
          <circle cx="473" cy="330" r="14" fill="#FB923C" />
          {/* Ears */}
          <polygon points="463,320 468,308 473,318" fill="#F97316" />
          <polygon points="475,318 480,308 485,320" fill="#F97316" />

          {/* Cute Face */}
          <circle cx="468" cy="328" r="2" fill="#1E293B" />
          <circle cx="478" cy="328" r="2" fill="#1E293B" />
          <polygon points="472,333 474,333 473,335" fill="#FDA4AF" />

          {/* White Chest Patch */}
          <ellipse cx="476" cy="342" rx="7" ry="9" fill="#FFF7ED" />

          <rect x="455" y="365" width="60" height="20" rx="10" fill="#FFF7ED" stroke="#FB923C" strokeWidth="1.5" />
          <text x="485" y="379" fontSize="11" fontWeight="bold" textAnchor="middle" fill="#9A3412">
            Mochi 🐾
          </text>
        </g>

        {/* ----------------- 4 DECORATION SLOTS (SPACIOUS & BALANCED) ----------------- */}
        {/* Slot 1: Garden Left */}
        <g
          className="cursor-pointer group"
          onClick={() => onOpenShop('slot-house-garden')}
          onMouseEnter={() => setHoveredLocation('Ô Trang Trí Bên Nhà - Click để đổi vật phẩm')}
          onMouseLeave={() => setHoveredLocation(null)}
        >
          <circle cx="250" cy="245" r="26" fill="#FFFFFF" fillOpacity="0.5" stroke="#CBD5E1" strokeWidth="2.5" strokeDasharray="4 4" />
          <text x="250" y="254" fontSize="26" textAnchor="middle">
            {getSlotItemIcon('slot-house-garden') || '➕'}
          </text>
        </g>

        {/* Slot 2: Beach Shore */}
        <g
          className="cursor-pointer group"
          onClick={() => onOpenShop('slot-beach')}
          onMouseEnter={() => setHoveredLocation('Ô Trang Trí Bãi Biển - Click để trang trí')}
          onMouseLeave={() => setHoveredLocation(null)}
        >
          <circle cx="360" cy="415" r="28" fill="#FFFFFF" fillOpacity="0.5" stroke="#CBD5E1" strokeWidth="2.5" strokeDasharray="4 4" />
          <text x="360" y="425" fontSize="28" textAnchor="middle">
            {getSlotItemIcon('slot-beach') || '➕'}
          </text>
        </g>

        {/* Slot 3: Tree / Hill Top Right */}
        <g
          className="cursor-pointer group"
          onClick={() => onOpenShop('slot-tree')}
          onMouseEnter={() => setHoveredLocation('Ô Trang Trí Đỉnh Đồi - Click để trang trí')}
          onMouseLeave={() => setHoveredLocation(null)}
        >
          <circle cx="830" cy="205" r="28" fill="#FFFFFF" fillOpacity="0.5" stroke="#CBD5E1" strokeWidth="2.5" strokeDasharray="4 4" />
          <text x="830" y="215" fontSize="28" textAnchor="middle">
            {getSlotItemIcon('slot-tree') || '➕'}
          </text>
        </g>

        {/* Slot 4: Central Yard */}
        <g
          className="cursor-pointer group"
          onClick={() => onOpenShop('slot-yard')}
          onMouseEnter={() => setHoveredLocation('Ô Trang Trí Sân Trung Tâm - Click để trang trí')}
          onMouseLeave={() => setHoveredLocation(null)}
        >
          <circle cx="610" cy="355" r="28" fill="#FFFFFF" fillOpacity="0.5" stroke="#CBD5E1" strokeWidth="2.5" strokeDasharray="4 4" />
          <text x="610" y="365" fontSize="28" textAnchor="middle">
            {getSlotItemIcon('slot-yard') || '➕'}
          </text>
        </g>
      </svg>

      {/* Mochi Speech Bubble Popup */}
      {catSpeech && (
        <div className="absolute bottom-6 left-6 right-6 md:left-12 md:right-auto md:max-w-md bg-white/95 backdrop-blur-md p-4 rounded-3xl shadow-2xl border-2 border-orange-200 z-30 animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <span className="text-3xl">🐱</span>
              <div>
                <h4 className="font-bold text-orange-900 text-sm">Mochi nói:</h4>
                <p className="text-slate-700 text-xs md:text-sm mt-0.5 leading-relaxed font-medium">
                  {catSpeech}
                </p>
              </div>
            </div>
            <button
              onClick={() => setCatSpeech(null)}
              className="text-slate-400 hover:text-slate-600 text-lg leading-none"
            >
              ✕
            </button>
          </div>
          <div className="mt-3 flex gap-2 justify-end">
            <button
              onClick={() => {
                setCatSpeech(null);
                onPlayCatMail();
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs px-3.5 py-2 rounded-xl shadow transition-colors flex items-center gap-1.5"
            >
              ✉️ Chơi "Thư Cho Mèo" ngay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
