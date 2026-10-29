import React, { useEffect, useCallback, useState } from 'react';
import type { PortfolioItem } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight, MessageCircle, MapPin, Play, Images } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

interface LightboxModalProps {
  items: PortfolioItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
  onInquire: (item: PortfolioItem) => void;
}

// Helper to convert @mentions and #hashtags in caption into clickable Instagram links
const renderFormattedCaption = (text: string) => {
  if (!text) return null;
  const regex = /(@[a-zA-Z0-9_]+(?:\.[a-zA-Z0-9_]+)*|#[a-zA-Z0-9_]+)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (part.startsWith('@')) {
      const username = part.slice(1);
      return (
        <a
          key={index}
          href={`https://www.instagram.com/${username}/`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-gold-400 hover:text-gold-300 font-semibold underline underline-offset-2 decoration-gold-400/50 hover:decoration-gold-300 transition-colors inline-block"
          title={`Buka profil Instagram @${username}`}
        >
          {part}
        </a>
      );
    } else if (part.startsWith('#')) {
      const tag = part.slice(1);
      return (
        <a
          key={index}
          href={`https://www.instagram.com/explore/tags/${tag}/`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-zinc-400 hover:text-gold-400 transition-colors inline-block"
          title={`Lihat tag #${tag} di Instagram`}
        >
          {part}
        </a>
      );
    }
    return <span key={index}>{part}</span>;
  });
};

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
  onInquire,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentItem = currentIndex !== null ? items[currentIndex] : null;

  // Multi-photo slide array if present
  const slides = currentItem?.images && currentItem.images.length > 1 ? currentItem.images : null;
  const activeImageSrc = slides ? slides[currentSlideIndex] : currentItem?.image;

  // Reset slide index whenever main post changes
  useEffect(() => {
    setCurrentSlideIndex(0);
  }, [currentIndex]);

  const handlePrevItem = useCallback(() => {
    if (currentIndex !== null && items.length > 0) {
      const nextIndex = (currentIndex - 1 + items.length) % items.length;
      onNavigate(nextIndex);
    }
  }, [currentIndex, items.length, onNavigate]);

  const handleNextItem = useCallback(() => {
    if (currentIndex !== null && items.length > 0) {
      const nextIndex = (currentIndex + 1) % items.length;
      onNavigate(nextIndex);
    }
  }, [currentIndex, items.length, onNavigate]);

  // Single unified navigation: flips through slides first, then moves between posts seamlessly
  const handleUnifiedPrev = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      if (slides && currentSlideIndex > 0) {
        setCurrentSlideIndex((prev) => prev - 1);
      } else {
        handlePrevItem();
      }
    },
    [slides, currentSlideIndex, handlePrevItem]
  );

  const handleUnifiedNext = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      if (slides && currentSlideIndex < slides.length - 1) {
        setCurrentSlideIndex((prev) => prev + 1);
      } else {
        handleNextItem();
      }
    },
    [slides, currentSlideIndex, handleNextItem]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handleUnifiedPrev();
      if (e.key === 'ArrowRight') handleUnifiedNext();
    };

    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, onClose, handleUnifiedPrev, handleUnifiedNext]);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    if (deltaX > 40) {
      // Swipe left -> next
      handleUnifiedNext();
    } else if (deltaX < -40) {
      // Swipe right -> prev
      handleUnifiedPrev();
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
            Karya {currentIndex + 1} dari {items.length}
          </span>
          {slides && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-950/80 text-amber-300 border border-amber-500/40 flex items-center gap-1 shadow-sm">
              <Images className="w-3 h-3 text-amber-400" />
              <span>Foto {currentSlideIndex + 1} / {slides.length}</span>
            </span>
          )}
        </div>

        {/* Mobile Central Stepper (Single unified arrows) */}
        <div className="flex sm:hidden items-center gap-1 bg-zinc-900/90 rounded-full px-2 py-1 border border-white/10 backdrop-blur-md">
          <button
            onClick={handleUnifiedPrev}
            className="p-1 rounded-full text-zinc-300 hover:text-white active:scale-90 cursor-pointer"
            aria-label="Sebelumnya"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-[11px] font-mono text-gold-400 px-1.5 font-bold">
            {slides ? `${currentSlideIndex + 1} / ${slides.length}` : `${currentIndex + 1} / ${items.length}`}
          </span>
          <button
            onClick={handleUnifiedNext}
            className="p-1 rounded-full text-zinc-300 hover:text-white active:scale-90 cursor-pointer"
            aria-label="Selanjutnya"
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

      {/* Main Image/Video Viewport Area */}
      <div className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center px-3 sm:px-16 overflow-hidden my-auto">
        <div className="relative group/media inline-flex items-center justify-center max-w-full max-h-[54vh] sm:max-h-[66vh]">
          {currentItem.isVideo ? (
            <video
              key={currentItem.id}
              src={currentItem.videoSrc}
              poster={currentItem.image}
              controls
              autoPlay
              playsInline
              className="max-h-[54vh] sm:max-h-[66vh] w-auto max-w-full object-contain rounded-lg sm:rounded-xl shadow-2xl border border-white/10 bg-black/80"
            >
              Browser Anda tidak mendukung pemutar video HTML5.
            </video>
          ) : (
            <>
              <img
                key={`${currentItem.id}-${currentSlideIndex}`}
                src={activeImageSrc}
                alt={`${currentItem.title} - Slide ${currentSlideIndex + 1}`}
                className="max-h-[54vh] sm:max-h-[66vh] w-auto max-w-full object-contain rounded-lg sm:rounded-xl shadow-2xl border border-white/10 select-none animate-fade-in transition-all duration-300 ease-out"
              />

              {/* Discreet Counter Badge on Top-Right of Photo */}
              {slides && (
                <div className="absolute top-2.5 right-2.5 z-20 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-gold-300 border border-gold-500/40 text-[10px] sm:text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg">
                  <Images className="w-3.5 h-3.5 text-gold-400" />
                  <span>{currentSlideIndex + 1} / {slides.length}</span>
                </div>
              )}
            </>
          )}
        </div>

        {/* SINGLE Desktop Lateral Navigation Buttons (Tidak double, bersih di samping) */}
        <button
          onClick={handleUnifiedPrev}
          className="hidden sm:flex absolute left-4 p-3 rounded-full bg-obsidian-950/85 hover:bg-gold-500 hover:text-obsidian-950 text-white border border-white/15 backdrop-blur-md transition-all cursor-pointer min-w-[48px] min-h-[48px] items-center justify-center active:scale-90 shadow-xl z-20"
          aria-label="Sebelumnya"
          title="Sebelumnya (Slide / Karya)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleUnifiedNext}
          className="hidden sm:flex absolute right-4 p-3 rounded-full bg-obsidian-950/85 hover:bg-gold-500 hover:text-obsidian-950 text-white border border-white/15 backdrop-blur-md transition-all cursor-pointer min-w-[48px] min-h-[48px] items-center justify-center active:scale-90 shadow-xl z-20"
          aria-label="Selanjutnya"
          title="Selanjutnya (Slide / Karya)"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Clean Interactive Thumbnail Strip without Numbers */}
      {slides && (
        <div className="w-full max-w-4xl mx-auto px-4 py-1.5 flex items-center justify-center gap-2 overflow-x-auto scrollbar-none z-30">
          <div className="flex items-center gap-2 px-2.5 py-1.5 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10 max-w-full overflow-x-auto scrollbar-none">
            {slides.map((slideImg, sIdx) => (
              <button
                key={sIdx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlideIndex(sIdx);
                }}
                className={`relative rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 cursor-pointer ${
                  currentSlideIndex === sIdx
                    ? 'ring-2 ring-gold-400 scale-105 opacity-100 shadow-lg shadow-gold-500/30 w-11 h-14 sm:w-13 sm:h-17'
                    : 'opacity-50 hover:opacity-90 border border-white/15 w-8 h-11 sm:w-10 sm:h-13'
                }`}
                title={`Lihat Foto ${sIdx + 1}`}
                aria-label={`Lihat Foto ${sIdx + 1}`}
              >
                <img
                  src={slideImg}
                  alt={`Thumbnail ${sIdx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Information & Direct Booking CTA */}
      <div className="w-full p-3.5 sm:p-5 bg-obsidian-950/95 border-t border-white/10 z-30 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
          <div className="min-w-0 pr-2">
            <div className="flex flex-wrap items-center gap-1.5 text-[10px] sm:text-xs text-zinc-400 mb-1">
              <span className="whitespace-nowrap flex-shrink-0 px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-semibold border border-gold-500/30 text-[10px] sm:text-xs">
                {currentItem.categoryLabel}
              </span>
              {currentItem.isVideo && (
                <span className="whitespace-nowrap flex-shrink-0 px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 font-semibold border border-pink-500/30 text-[10px] sm:text-xs flex items-center gap-1">
                  <Play className="w-2.5 h-2.5 fill-pink-400 text-pink-400" />
                  <span>Video Reel</span>
                </span>
              )}
              {slides && (
                <span className="whitespace-nowrap flex-shrink-0 px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30 text-[10px] sm:text-xs flex items-center gap-1">
                  <Images className="w-2.5 h-2.5 text-amber-400" />
                  <span>Album ({slides.length} Foto)</span>
                </span>
              )}
              <span className="flex items-center gap-1 whitespace-nowrap">
                <MapPin className="w-3 h-3 text-gold-400 flex-shrink-0" />
                <span>{currentItem.location}</span>
              </span>
              <span>•</span>
              <span className="text-zinc-300 whitespace-nowrap">{currentItem.client}</span>
            </div>
            <h4 className="text-sm sm:text-lg font-serif font-bold text-white truncate">
              {currentItem.title}
            </h4>
            <p className="text-[11px] sm:text-xs text-zinc-300 mt-1 line-clamp-2 sm:line-clamp-4 max-h-24 overflow-y-auto whitespace-pre-line leading-relaxed scrollbar-thin">
              {renderFormattedCaption(currentItem.description)}
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
                {currentItem.isVideo ? (
                  <>
                    <Play className="w-4 h-4 fill-pink-400 text-pink-400" />
                    <span className="hidden sm:inline">Putar Reel</span>
                  </>
                ) : (
                  <>
                    <InstagramIcon className="w-4 h-4 text-pink-400" />
                    <span className="hidden sm:inline">Instagram</span>
                  </>
                )}
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
              <span>Konsultasi Konsep Serupa</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
