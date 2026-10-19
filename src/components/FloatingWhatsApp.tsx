import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  return (
    <aside
      aria-label="Kontak WhatsApp FYPotret"
      className="fixed bottom-6 sm:bottom-8 right-4 sm:right-6 z-40 mb-[env(safe-area-inset-bottom,0px)] transform-gpu"
    >
      <button
        onClick={onOpenBooking}
        className="group relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-[#25D366] to-emerald-400 text-white flex items-center justify-center shadow-[0_8px_25px_-4px_rgba(37,211,102,0.5),0_6px_15px_-2px_rgba(0,0,0,0.7)] border border-emerald-400/40 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer select-none"
        aria-label="Hubungi WhatsApp FYPotret"
      >
        <WhatsAppIcon className="w-7 h-7 fill-white drop-shadow-md group-hover:rotate-6 transition-transform" />
      </button>
    </aside>
  );
};
