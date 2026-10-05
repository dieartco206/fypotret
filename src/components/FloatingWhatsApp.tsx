import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5">
      {/* Desktop tooltip badge */}
      <div className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-obsidian-900/90 backdrop-blur-md border border-white/10 text-xs font-semibold text-zinc-200 shadow-xl animate-bounce">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Tanya Admin FYPotret</span>
      </div>

      {/* Floating Action Button (Min 52x52px touch target) */}
      <button
        onClick={onOpenBooking}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-white/20 group"
        aria-label="Hubungi WhatsApp FYPotret"
      >
        <MessageCircle className="w-7 h-7 fill-white group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </div>
  );
};
