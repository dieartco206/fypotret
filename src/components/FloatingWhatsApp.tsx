import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  onOpenBooking: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5">
      {/* Floating Micro Badge (Gentle Pulse) */}
      <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900/95 backdrop-blur-md border border-emerald-500/30 text-xs font-semibold text-zinc-100 shadow-xl shadow-black/80">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>Konsultasi & Cek Tanggal ✨</span>
      </div>

      {/* Floating Action Button with Sonar Ripple Wave */}
      <div className="relative">
        {/* Continuous Soft Sonar Ripple Wave */}
        <div className="absolute inset-0 rounded-full bg-emerald-400/40 animate-sonar pointer-events-none" />

        <button
          onClick={onOpenBooking}
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-white/20 group"
          aria-label="Hubungi WhatsApp FYPotret"
        >
          <MessageCircle className="w-7 h-7 fill-white group-hover:rotate-12 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};
