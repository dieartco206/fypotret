import React, { useState, useEffect } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface BookingSocialProofProps {
  onOpenBooking: () => void;
}

interface SocialProofItem {
  id: number;
  client: string;
  location: string;
  action: string;
  timeAgo: string;
  avatar: string;
}

const SOCIAL_PROOF_DATA: SocialProofItem[] = [
  {
    id: 1,
    client: 'Chelsea & Ade',
    location: 'Jakarta',
    action: 'Baru saja reservasi sesi Engagement & Prewed',
    timeAgo: '4 menit yang lalu',
    avatar: '/portfolio/highlights/hl_engagement.jpg',
  },
  {
    id: 2,
    client: 'Sarah, S.Ked',
    location: 'Jakarta Selatan',
    action: 'Baru saja konsultasi sesi Wisuda Solo & Keluarga',
    timeAgo: '12 menit yang lalu',
    avatar: '/portfolio/highlights/hl_wisuda.jpg',
  },
  {
    id: 3,
    client: 'Rama & Sahrani',
    location: 'Tangerang',
    action: 'Baru saja booking paket Wedding & Akad Nikah',
    timeAgo: '18 menit yang lalu',
    avatar: '/portfolio/highlights/hl_wedding.jpg',
  },
  {
    id: 4,
    client: 'Keluarga Sekar & Soelthan',
    location: 'Depok',
    action: 'Baru saja konsultasi dokumentasi Birthday Anak',
    timeAgo: '27 menit yang lalu',
    avatar: '/portfolio/highlights/hl_bts.jpg',
  },
];

export const BookingSocialProof: React.FC<BookingSocialProofProps> = ({ onOpenBooking }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // First appearance after 6 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 6000);

    // Periodic show/hide cycle
    const interval = setInterval(() => {
      // Hide first
      setIsVisible(false);

      // Wait 12 seconds, switch item and show again
      setTimeout(() => {
        if (!isDismissed) {
          setCurrentIndex((prev) => (prev + 1) % SOCIAL_PROOF_DATA.length);
          setIsVisible(true);
        }
      }, 12000);
    }, 20000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isDismissed]);

  // Auto-hide each toast after 5 seconds of visibility
  useEffect(() => {
    if (isVisible) {
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(hideTimer);
    }
  }, [isVisible]);

  if (isDismissed) return null;

  const currentItem = SOCIAL_PROOF_DATA[currentIndex];

  return (
    <aside
      aria-label="Notifikasi Reservasi Terkini"
      className={`fixed bottom-5 left-5 z-40 hidden sm:flex items-center gap-3 p-3.5 pr-4 rounded-2xl bg-obsidian-950/95 border border-gold-500/30 backdrop-blur-xl shadow-2xl shadow-black/80 max-w-sm transition-all duration-500 cursor-pointer select-none group hover:border-gold-400/60 hover:scale-102 ${
        isVisible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-8 opacity-0 pointer-events-none'
      }`}
      onClick={onOpenBooking}
    >
      {/* Client Avatar with Live Glowing Indicator */}
      <div className="relative w-11 h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-gold-500 to-amber-300 flex-shrink-0 shadow-md">
        <img
          src={currentItem.avatar}
          alt={currentItem.client}
          className="w-full h-full object-cover rounded-full bg-zinc-900"
        />
        <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-obsidian-950 flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pr-1">
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-white truncate">
          <span>{currentItem.client}</span>
          <span className="text-[10px] text-zinc-400 font-normal">• {currentItem.location}</span>
        </div>
        <p className="text-[11px] text-gold-400 leading-tight line-clamp-1 mt-0.5 group-hover:text-gold-300 transition-colors">
          {currentItem.action}
        </p>
        <span className="text-[10px] text-zinc-400 flex items-center gap-1 mt-0.5">
          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
          <span>{currentItem.timeAgo}</span>
        </span>
      </div>

      {/* Dismiss Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsVisible(false);
          setIsDismissed(true);
        }}
        className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors self-start -mr-1"
        title="Tutup notifikasi"
        aria-label="Tutup notifikasi"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
};
