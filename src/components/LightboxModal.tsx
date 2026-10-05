import React, { useEffect, useCallback } from 'react';
import type { PortfolioItem } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight, MessageCircle, MapPin } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

interface LightboxModalProps {
  items: PortfolioItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
  onInquire: (item: PortfolioItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
  onInquire,
}) => {
  const currentItem = currentIndex !== null ? items[currentIndex] : null;
  const [isShutterFlashing, setIsShutterFlashing] = React.useState(true);

  // Trigger brief camera shutter blitz on image switch
  useEffect(() => {
    if (currentIndex !== null) {
      setIsShutterFlashing(true);
      const timer = setTimeout(() => setIsShutterFlashing(false), 240);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    if (currentIndex !== null && items.length > 0) {
      const nextIndex = (currentIndex - 1 + items.length) % items.length;
      onNavigate(nextIndex);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null && items.length > 0) {
      const nextIndex = (currentIndex + 1) % items.length;
      onNavigate(nextIndex);
    }
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, onClose, handlePrev, handleNext]);

  if (currentIndex === null || !currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 sm:p-4 md:p-6 animate-fade-in">
      
      {/* Top Header Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-semibold text-gold-400 font-serif">
            FYPotret Gallery
          </span>
          <span className="text-zinc-600">•</span>
          <span className="text-xs text-zinc-400">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        {/* Close Button (Apple HIG 44x44px touch target) */}
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-all cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center border border-white/10 active:scale-95"
          aria-label="Tutup Fullscreen"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[75vh] sm:max-h-[82vh] w-full flex items-center justify-center overflow-hidden my-auto">
        {/* Soft Camera Shutter Flash Overlay */}
        {isShutterFlashing && (
          <div className="absolute inset-0 bg-white/60 animate-shutter-flash z-30 pointer-events-none rounded-lg" />
        )}

        <img
          key={currentItem.id}
          src={currentItem.image}
          alt={currentItem.title}
          className="max-w-full max-h-[72vh] sm:max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl border border-white/10 select-none transition-all duration-300 ease-out"
        />

        {/* Navigation Left / Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 p-3 rounded-full bg-obsidian-950/70 hover:bg-gold-500 hover:text-obsidian-950 text-white border border-white/10 backdrop-blur-md transition-all cursor-pointer min-w-[48px] min-h-[48px] flex items-center justify-center active:scale-90"
          aria-label="Foto Sebelumnya"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Navigation Right / Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 p-3 rounded-full bg-obsidian-950/70 hover:bg-gold-500 hover:text-obsidian-950 text-white border border-white/10 backdrop-blur-md transition-all cursor-pointer min-w-[48px] min-h-[48px] flex items-center justify-center active:scale-90"
          aria-label="Foto Selanjutnya"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Information & Direct Booking CTA */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-20">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1">
              <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-semibold border border-gold-500/30">
                {currentItem.categoryLabel}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-gold-400" />
                {currentItem.location}
              </span>
              <span>•</span>
              <span className="text-zinc-300">{currentItem.client}</span>
            </div>
            <h4 className="text-base sm:text-lg font-serif font-bold text-white">
              {currentItem.title}
            </h4>
            <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1 sm:line-clamp-none">
              {currentItem.description}
            </p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto flex-shrink-0">
            {currentItem.instagramUrl && (
              <a
                href={currentItem.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-pink-400 font-bold text-xs flex items-center justify-center gap-2 border border-white/15 transition-all min-h-[44px]"
                title="Buka postingan asli di Instagram @fypotretid"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span className="hidden xs:inline">Buka IG</span>
              </a>
            )}

            <button
              onClick={() => {
                onClose();
                onInquire(currentItem);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/20 active:scale-98 transition-all min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 fill-obsidian-950" />
              <span>Tanya Paket Seperti Ini</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
