import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Kontak WhatsApp FYPotret"
      className="fixed bottom-8 sm:bottom-8 right-4 sm:right-8 z-40 mb-[env(safe-area-inset-bottom,0px)] transform-gpu"
    >
      <button
        onClick={onOpenBooking}
        className="group relative flex items-center gap-2.5 sm:gap-3 pl-3.5 sm:pl-4 pr-1.5 sm:pr-2 py-1.5 sm:py-2 rounded-full bg-[#0c0f17] hover:bg-[#131722] border border-emerald-500/35 hover:border-emerald-400/70 shadow-[0_10px_30px_-5px_rgba(16,185,129,0.35),0_8px_20px_-4px_rgba(0,0,0,0.9)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer select-none"
      >
        {/* Luminous Pulsing Live Beacon */}
        <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-sm shadow-emerald-400/80" />
        </span>

        {/* Text Label */}
        <div className="flex flex-col text-left pr-0.5">
          <span className="text-[11px] sm:text-xs font-bold text-white group-hover:text-emerald-300 transition-colors tracking-wide leading-tight">
            Konsultasi & Reservasi
          </span>
          <span className="text-[9px] sm:text-[10px] text-zinc-400 font-sans leading-tight hidden xs:block">
            Fast Response WhatsApp
          </span>
        </div>

        {/* WhatsApp Brand Icon Circle */}
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-md shadow-emerald-500/40 group-hover:rotate-6 transition-transform flex-shrink-0">
          <WhatsAppIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 fill-white" />
        </div>
      </button>
    </aside>
  );
};
