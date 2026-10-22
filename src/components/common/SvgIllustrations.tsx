import React from 'react';

export const OfficeMeetingSvg: React.FC<{ className?: string }> = ({ className = 'w-full h-64' }) => (
  <svg
    viewBox="0 0 600 380"
    className={`${className} rounded-2xl shadow-inner bg-gradient-to-b from-sky-100 to-amber-50 border border-slate-200`}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Office Wall & Window */}
    <rect x="0" y="0" width="600" height="280" fill="#F1F5F9" />
    <rect x="420" y="30" width="140" height="180" rx="8" fill="#BAE6FD" stroke="#94A3B8" strokeWidth="6" />
    <line x1="490" y1="30" x2="490" y2="210" stroke="#94A3B8" strokeWidth="4" />
    <line x1="420" y1="120" x2="560" y2="120" stroke="#94A3B8" strokeWidth="4" />

    {/* Whiteboard */}
    <rect x="40" y="40" width="180" height="130" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="6" />
    <line x1="60" y1="80" x2="160" y2="80" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
    <line x1="60" y1="105" x2="190" y2="105" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
    <line x1="60" y1="125" x2="140" y2="125" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />

    {/* Wooden Floor */}
    <rect x="0" y="280" width="600" height="100" fill="#E2E8F0" />
    <line x1="0" y1="310" x2="600" y2="310" stroke="#CBD5E1" strokeWidth="2" />
    <line x1="0" y1="345" x2="600" y2="345" stroke="#CBD5E1" strokeWidth="2" />

    {/* Wooden Desk */}
    <rect x="180" y="230" width="300" height="18" rx="4" fill="#B45309" />
    <rect x="200" y="248" width="16" height="110" fill="#92400E" />
    <rect x="444" y="248" width="16" height="110" fill="#92400E" />

    {/* Potted Plant */}
    <rect x="360" y="200" width="22" height="30" rx="4" fill="#D97706" />
    <circle cx="371" cy="195" r="14" fill="#22C55E" />
    <circle cx="363" cy="190" r="10" fill="#16A34A" />
    <circle cx="379" cy="188" r="10" fill="#4ADE80" />

    {/* Office Chair */}
    <rect x="240" y="210" width="70" height="80" rx="10" fill="#334155" />
    <rect x="270" y="290" width="10" height="60" fill="#64748B" />
    <line x1="250" y1="350" x2="300" y2="350" stroke="#475569" strokeWidth="6" strokeLinecap="round" />

    {/* Woman Character Sitting */}
    {/* Body */}
    <ellipse cx="275" cy="225" rx="26" ry="32" fill="#3B82F6" />
    {/* Arms typing */}
    <path d="M260,230 Q285,245 320,232" stroke="#3B82F6" strokeWidth="12" strokeLinecap="round" fill="none" />
    {/* Head */}
    <circle cx="275" cy="165" r="20" fill="#FBBF24" />
    {/* Hair */}
    <path d="M255,165 Q275,135 295,165 Q300,195 285,190" fill="#78350F" />
    {/* Laptop on desk */}
    <polygon points="310,230 360,230 350,205 320,205" fill="#475569" />
    <polygon points="305,230 365,230 360,234 310,234" fill="#94A3B8" />

    {/* Coffee Mug */}
    <rect x="400" y="218" width="14" height="12" rx="2" fill="#EF4444" />
    <path d="M414,221 C418,221 418,227 414,227" stroke="#EF4444" strokeWidth="2" fill="none" />
  </svg>
);
