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

  const [touchStartX, setTouchStartX] = React.useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;
    if (deltaX > 40) {
      handleNext();
    } else if (deltaX < -40) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  if (currentIndex === null || !currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-2xl animate-fade-in select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      
      {/* Top Header Bar */}
      <div className="w-full px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between z-30 bg-gradient-to-b from-black/90 via-black/60 to-transparent">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-semibold text-gold-400 font-serif">
            FYPotret Gallery
          </span>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <span className="hidden sm:inline text-xs text-zinc-400 font-mono">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        {/* Mobile Central Prev/Next Stepper (Keeps photo 100% clean without overlapping subject) */}
        <div className="flex sm:hidden items-center gap-1 bg-zinc-900/90 rounded-full px-2 py-1 border border-white/10 backdrop-blur-md">
          <button
            onClick={handlePrev}
            className="p-1 rounded-full text-zinc-300 hover:text-white active:scale-90"
            aria-label="Foto Sebelumnya"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-[11px] font-mono text-gold-400 px-1.5 font-bold">
            {currentIndex + 1} / {items.length}
          </span>
          <button
            onClick={handleNext}
            className="p-1 rounded-full text-zinc-300 hover:text-white active:scale-90"
            aria-label="Foto Selanjutnya"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-white transition-all cursor-pointer min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center border border-white/10 active:scale-95"
          aria-label="Tutup Fullscreen"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Viewport Area (Clean & Centered) */}
      <div className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center px-3 sm:px-12 overflow-hidden my-auto">
        {/* Soft Camera Shutter Flash Overlay */}
        {isShutterFlashing && (
          <div className="absolute inset-0 bg-white/60 animate-shutter-flash z-30 pointer-events-none rounded-xl" />
        )}

        <img
          key={currentItem.id}
          src={currentItem.image}
          alt={currentItem.title}
          className="max-w-full max-h-[58vh] sm:max-h-[72vh] md:max-h-[76vh] w-auto h-auto object-contain rounded-xl sm:rounded-2xl shadow-2xl border border-white/10 select-none transition-all duration-300 ease-out"
        />

        {/* Desktop-Only Lateral Navigation Buttons (Outside photo focus area) */}
        <button
          onClick={handlePrev}
          className="hidden sm:flex absolute left-4 p-3 rounded-full bg-obsidian-950/80 hover:bg-gold-500 hover:text-obsidian-950 text-white border border-white/15 backdrop-blur-md transition-all cursor-pointer min-w-[48px] min-h-[48px] items-center justify-center active:scale-90 shadow-xl"
          aria-label="Foto Sebelumnya"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="hidden sm:flex absolute right-4 p-3 rounded-full bg-obsidian-950/80 hover:bg-gold-500 hover:text-obsidian-950 text-white border border-white/15 backdrop-blur-md transition-all cursor-pointer min-w-[48px] min-h-[48px] items-center justify-center active:scale-90 shadow-xl"
          aria-label="Foto Selanjutnya"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Information & Direct Booking CTA */}
      <div className="w-full p-3.5 sm:p-5 bg-obsidian-950/95 border-t border-white/10 z-30 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
          <div className="min-w-0 pr-2">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-zinc-400 mb-0.5">
              <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-semibold border border-gold-500/30 text-[10px] sm:text-xs">
                {currentItem.categoryLabel}
              </span>
              <span className="flex items-center gap-1 truncate">
                <MapPin className="w-3 h-3 text-gold-400 flex-shrink-0" />
                <span className="truncate">{currentItem.location}</span>
              </span>
              <span>•</span>
              <span className="text-zinc-300 truncate">{currentItem.client}</span>
            </div>
            <h4 className="text-sm sm:text-lg font-serif font-bold text-white truncate">
              {currentItem.title}
            </h4>
            <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 line-clamp-1 sm:line-clamp-none">
              {currentItem.description}
            </p>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto flex-shrink-0 pt-1 sm:pt-0">
            {currentItem.instagramUrl && (
              <a
                href={currentItem.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:px-3 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-200 hover:text-pink-400 font-bold text-xs flex items-center justify-center gap-1.5 border border-white/15 transition-all min-h-[40px] sm:min-h-[44px] min-w-[40px]"
                title="Buka postingan asli di Instagram @fypotretid"
                aria-label="Buka di Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
            )}

            <button
              onClick={() => {
                onClose();
                onInquire(currentItem);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-gold-500/20 active:scale-98 transition-all min-h-[40px] sm:min-h-[44px] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-obsidian-950 flex-shrink-0" />
              <span>Mau Foto Seperti Ini</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
