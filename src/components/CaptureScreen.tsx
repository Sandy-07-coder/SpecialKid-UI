import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface CaptureScreenProps {
  onBack: () => void;
}

const STATUS_MESSAGES = [
  'Finding your smile...',
  'Analyzing the magic...',
  'Almost there!',
  'You look wonderful!',
];

export const CaptureScreen: React.FC<CaptureScreenProps> = ({ onBack }) => {
  const [statusIndex, setStatusIndex] = useState(0);
  const [statusVisible, setStatusVisible] = useState(true);

  // Cycle through status messages with a fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setStatusVisible(false);
      setTimeout(() => {
        setStatusIndex((prev) => (prev + 1) % STATUS_MESSAGES.length);
        setStatusVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col font-sans overflow-x-hidden"
      style={{
        background: '#F0F0FF',
        fontFamily: "'Atkinson Hyperlegible Next', sans-serif",
      }}
    >
      {/* Top Navigation Bar */}
      <header
        className="flex justify-center items-center w-full px-6 py-3 sticky top-0 z-50"
        style={{
          background: '#f9f9ff',
          borderBottom: '4px solid #dfe2ee',
        }}
      >
        <div className="flex justify-between items-center w-full max-w-7xl">
          {/* Logo / back */}
          <button
            onClick={onBack}
            className="font-black text-2xl tracking-tighter cursor-pointer bg-transparent border-none flex items-center gap-2"
            style={{ color: '#2a2b51', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>arrow_back</span>
            Re<span style={{ color: '#4343d5' }}>Pa</span>IR<span style={{ color: '#4343d5' }}>.</span>
          </button>

          {/* Nav links (desktop) */}
          <nav className="hidden md:flex gap-8 items-center">
            <a href="#" className="font-bold text-base" style={{ color: '#4343d5' }}>Activities</a>
            <a href="#" className="font-bold text-base hover:opacity-70 transition-opacity" style={{ color: '#464555' }}>Progress</a>
            <a href="#" className="font-bold text-base hover:opacity-70 transition-opacity" style={{ color: '#464555' }}>Support</a>
          </nav>

          {/* Avatar button */}
          <div className="flex items-center gap-2">
            <button
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: '#5d5fef',
                color: '#faf7ff',
                borderBottom: '4px solid #2e2bc2',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>person</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-6 md:p-16">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          {/* Left: Character / Camera Card */}
          <motion.div
            className="relative group"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div
              className="bg-white rounded-3xl p-6 md:p-8 relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300"
              style={{
                borderBottom: '6px solid #dfe2ee',
                boxShadow: '0 12px 40px rgba(86,249,249,0.12)',
              }}
            >
              {/* Audio / volume badge button */}
              <button
                className="absolute top-4 right-4 z-10 w-14 h-14 rounded-full flex items-center justify-center hover:scale-105 active:scale-95 transition-transform"
                style={{
                  background: '#fdd400',
                  color: '#221b00',
                  borderBottom: '4px solid #e9c400',
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '26px', fontVariationSettings: "'FILL' 1" }}
                >
                  volume_up
                </span>
              </button>

              {/* Robot with camera SVG */}
              <div className="aspect-square w-full flex items-center justify-center">
                <svg viewBox="0 0 220 230" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-96 drop-shadow-xl">
                  {/* Body */}
                  <rect x="50" y="105" width="120" height="95" rx="24" fill="#26dcdd" />
                  {/* Head */}
                  <rect x="62" y="38" width="96" height="78" rx="22" fill="#007f80" />
                  {/* Eyes */}
                  <circle cx="88" cy="68" r="14" fill="#ffffff" />
                  <circle cx="132" cy="68" r="14" fill="#ffffff" />
                  <circle cx="91" cy="66" r="6" fill="#002020" />
                  <circle cx="135" cy="66" r="6" fill="#002020" />
                  <circle cx="94" cy="64" r="2.5" fill="#56f9f9" />
                  <circle cx="138" cy="64" r="2.5" fill="#56f9f9" />
                  {/* Antenna */}
                  <line x1="110" y1="38" x2="110" y2="16" stroke="#26dcdd" strokeWidth="4.5" strokeLinecap="round" />
                  <circle cx="110" cy="10" r="8" fill="#fdd400" stroke="#221b00" strokeWidth="2.5" />
                  {/* Mouth – happy */}
                  <path d="M 88 90 Q 110 102 132 90" stroke="#fdd400" strokeWidth="4" fill="none" strokeLinecap="round" />
                  {/* Left arm holding camera */}
                  <rect x="5" y="112" width="45" height="20" rx="10" fill="#007f80" />
                  {/* Camera body held by left hand */}
                  <rect x="5" y="148" width="54" height="38" rx="10" fill="#2a2b51" />
                  <circle cx="32" cy="167" r="12" fill="#171c24" stroke="#767586" strokeWidth="2.5" />
                  <circle cx="32" cy="167" r="7" fill="#464555" />
                  <circle cx="32" cy="167" r="3" fill="#c7c4d7" opacity="0.5" />
                  <rect x="44" y="151" width="11" height="7" rx="3" fill="#fdd400" />
                  {/* Right arm relaxed */}
                  <rect x="170" y="112" width="45" height="20" rx="10" fill="#007f80" />
                  <circle cx="212" cy="122" r="11" fill="#56f9f9" />
                  {/* Legs */}
                  <rect x="70" y="192" width="32" height="26" rx="10" fill="#004f50" />
                  <rect x="118" y="192" width="32" height="26" rx="10" fill="#004f50" />
                  {/* Chest panel */}
                  <rect x="82" y="122" width="56" height="36" rx="12" fill="#004f50" />
                  <rect x="90" y="130" width="40" height="5" rx="2.5" fill="#26dcdd" opacity="0.6" />
                  <rect x="90" y="140" width="30" height="5" rx="2.5" fill="#26dcdd" opacity="0.4" />
                  <rect x="90" y="150" width="20" height="5" rx="2.5" fill="#26dcdd" opacity="0.25" />
                </svg>
              </div>

              {/* Decorative blur blob */}
              <div
                className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-3xl"
                style={{ background: '#c1c1ff', opacity: 0.2 }}
              />
            </div>
          </motion.div>

          {/* Right: Interface Controls */}
          <motion.div
            className="flex flex-col items-center md:items-start text-center md:text-left gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          >
            <h1
              className="font-black tracking-tight w-full text-center"
              style={{
                color: '#4343d5',
                fontSize: 'clamp(28px, 4.5vw, 44px)',
                lineHeight: 1.2,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Look Here!
            </h1>

            {/* Viewfinder */}
            <div className="relative flex flex-col items-center gap-6 w-full">
              <div
                className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden flex items-center justify-center"
                style={{
                  border: '12px solid #26dcdd',
                  background: '#f0f3ff',
                  boxShadow: '0 0 40px rgba(86,249,249,0.3)',
                  animation: 'viewfinderPulse 3s infinite ease-in-out',
                }}
              >
                {/* Face placeholder icon */}
                <div className="flex flex-col items-center justify-center" style={{ color: '#767586' }}>
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: '110px', opacity: 0.35, fontVariationSettings: "'FILL' 0" }}
                  >
                    face
                  </span>
                </div>
                {/* Dashed inner ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '2px dashed #56f9f9',
                    opacity: 0.35,
                    transform: 'scale(0.88)',
                  }}
                />
                {/* Scanning sweep */}
                <div
                  className="absolute top-0 left-0 w-full"
                  style={{
                    height: '50%',
                    background: 'linear-gradient(to bottom, rgba(38,220,221,0.18), transparent)',
                    animation: 'scanBounce 3s infinite',
                  }}
                />
              </div>

              {/* Status pill */}
              <div
                className="px-8 py-3 rounded-full shadow-md flex items-center gap-3 border-2"
                style={{ background: '#ffffff', borderColor: '#c1c1ff' }}
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: '#006465', animation: 'ping 1s cubic-bezier(0,0,0.2,1) infinite' }}
                />
                <span
                  className="font-bold text-base transition-opacity duration-300"
                  style={{
                    color: '#171c24',
                    fontFamily: "'Atkinson Hyperlegible Next', sans-serif",
                    opacity: statusVisible ? 1 : 0,
                  }}
                >
                  {STATUS_MESSAGES[statusIndex]}
                </span>
              </div>
            </div>

            {/* Alternative action */}
            <button
              className="mt-2 flex items-center gap-2 font-bold text-base hover:underline transition-all active:scale-95 decoration-2 underline-offset-4"
              style={{ color: '#4343d5', fontFamily: "'Atkinson Hyperlegible Next', sans-serif" }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '22px', fontVariationSettings: "'FILL' 1" }}>
                keyboard
              </span>
              I'd rather tap my mood
            </button>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="flex flex-col md:flex-row justify-between items-center w-full px-6 py-8 gap-4"
        style={{ background: '#f0f3ff', borderTop: '4px solid #dfe2ee' }}
      >
        <div className="flex flex-col items-center md:items-start gap-1">
          <div
            className="font-black text-xl"
            style={{ color: '#4343d5', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            RePaIR.
          </div>
          <div className="font-bold text-sm" style={{ color: '#464555', opacity: 0.7 }}>© 2026 RePaIR</div>
        </div>
      </footer>

      <style>{`
        @keyframes viewfinderPulse {
          0%, 100% { transform: scale(1);    opacity: 1;    }
          50%       { transform: scale(1.02); opacity: 0.88; }
        }
        @keyframes scanBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(60%); }
        }
        @keyframes ping {
          0%   { transform: scale(1);   opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default CaptureScreen;
