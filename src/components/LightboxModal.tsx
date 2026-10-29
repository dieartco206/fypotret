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

  // Navigate within carousel slides
  const handlePrevSlide = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      if (slides) {
        setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
      } else {
        handlePrev();
      }
    },
    [slides, handlePrev]
  );

  const handleNextSlide = useCallback(
    (e?: React.MouseEvent) => {
      if (e) e.stopPropagation();
      if (slides) {
        setCurrentSlideIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
      } else {
        handleNext();
      }
    },
    [slides, handleNext]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        if (slides && currentSlideIndex > 0) {
          setCurrentSlideIndex((prev) => prev - 1);
        } else {
          handlePrev();
        }
      }
      if (e.key === 'ArrowRight') {
        if (slides && currentSlideIndex < slides.length - 1) {
          setCurrentSlideIndex((prev) => prev + 1);
        } else {
          handleNext();
        }
      }
    };

    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, onClose, handlePrev, handleNext, slides, currentSlideIndex]);

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
      if (slides) {
        if (currentSlideIndex < slides.length - 1) {
          setCurrentSlideIndex((prev) => prev + 1);
        } else {
          handleNext();
        }
      } else {
        handleNext();
      }
    } else if (deltaX < -40) {
      // Swipe right -> prev
      if (slides) {
        if (currentSlideIndex > 0) {
          setCurrentSlideIndex((prev) => prev - 1);
        } else {
          handlePrev();
        }
      } else {
        handlePrev();
      }
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
              <span>Slide {currentSlideIndex + 1}/{slides.length}</span>
            </span>
          )}
        </div>

        {/* Mobile Central Prev/Next Stepper */}
        <div className="flex sm:hidden items-center gap-1 bg-zinc-900/90 rounded-full px-2 py-1 border border-white/10 backdrop-blur-md">
          <button
            onClick={handlePrev}
            className="p-1 rounded-full text-zinc-300 hover:text-white active:scale-90"
            aria-label="Karya Sebelumnya"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-[11px] font-mono text-gold-400 px-1.5 font-bold">
            {currentIndex + 1} / {items.length}
          </span>
          <button
            onClick={handleNext}
            className="p-1 rounded-full text-zinc-300 hover:text-white active:scale-90"
            aria-label="Karya Selanjutnya"
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
      <div className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center px-3 sm:px-12 overflow-hidden my-auto">
        <div className="relative group/media inline-flex items-center justify-center max-w-full max-h-[52vh] sm:max-h-[64vh]">
          {currentItem.isVideo ? (
            <video
              key={currentItem.id}
              src={currentItem.videoSrc}
              poster={currentItem.image}
              controls
              autoPlay
              playsInline
              className="max-h-[52vh] sm:max-h-[64vh] w-auto max-w-full object-contain rounded-lg sm:rounded-xl shadow-2xl border border-white/10 bg-black/80"
            >
              Browser Anda tidak mendukung pemutar video HTML5.
            </video>
          ) : (
            <>
              <img
                key={`${currentItem.id}-${currentSlideIndex}`}
                src={activeImageSrc}
                alt={`${currentItem.title} - Slide ${currentSlideIndex + 1}`}
                className="max-h-[52vh] sm:max-h-[64vh] w-auto max-w-full object-contain rounded-lg sm:rounded-xl shadow-2xl border border-white/10 select-none animate-fade-in transition-all duration-300 ease-out"
              />

              {/* In-Image Slide Navigation Arrows for Carousel */}
              {slides && (
                <>
                  <button
                    onClick={handlePrevSlide}
                    className="absolute left-2 sm:left-3 p-2 sm:p-2.5 rounded-full bg-black/70 hover:bg-gold-500 hover:text-obsidian-950 text-white backdrop-blur-md transition-all active:scale-90 border border-white/20 cursor-pointer shadow-xl z-20"
                    aria-label="Foto Slide Sebelumnya"
                    title="Foto Sebelumnya di Album ini"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  <button
                    onClick={handleNextSlide}
                    className="absolute right-2 sm:right-3 p-2 sm:p-2.5 rounded-full bg-black/70 hover:bg-gold-500 hover:text-obsidian-950 text-white backdrop-blur-md transition-all active:scale-90 border border-white/20 cursor-pointer shadow-xl z-20"
                    aria-label="Foto Slide Selanjutnya"
                    title="Foto Selanjutnya di Album ini"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  {/* Top-Right Badge on Photo showing Slide Counter */}
                  <div className="absolute top-2.5 right-2.5 z-20 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-gold-300 border border-gold-500/40 text-[10px] sm:text-xs font-mono font-bold flex items-center gap-1.5 shadow-lg">
                    <Images className="w-3.5 h-3.5 text-gold-400" />
                    <span>{currentSlideIndex + 1} / {slides.length}</span>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        {/* Desktop Lateral Navigation Buttons (Between Gallery Items) */}
        <button
          onClick={handlePrev}
          className="hidden sm:flex absolute left-4 p-3 rounded-full bg-obsidian-950/80 hover:bg-gold-500 hover:text-obsidian-950 text-white border border-white/15 backdrop-blur-md transition-all cursor-pointer min-w-[48px] min-h-[48px] items-center justify-center active:scale-90 shadow-xl"
          aria-label="Karya Sebelumnya"
          title="Karya Sebelumnya"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="hidden sm:flex absolute right-4 p-3 rounded-full bg-obsidian-950/80 hover:bg-gold-500 hover:text-obsidian-950 text-white border border-white/15 backdrop-blur-md transition-all cursor-pointer min-w-[48px] min-h-[48px] items-center justify-center active:scale-90 shadow-xl"
          aria-label="Karya Selanjutnya"
          title="Karya Selanjutnya"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Interactive Thumbnail Carousel Strip for Multi-Photo Albums */}
      {slides && (
        <div className="w-full max-w-4xl mx-auto px-4 py-2 flex items-center justify-center gap-2 overflow-x-auto scrollbar-none z-30">
          <div className="flex items-center gap-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 max-w-full overflow-x-auto">
            {slides.map((slideImg, sIdx) => (
              <button
                key={sIdx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentSlideIndex(sIdx);
                }}
                className={`relative rounded-lg overflow-hidden flex-shrink-0 transition-all duration-200 cursor-pointer ${
                  currentSlideIndex === sIdx
                    ? 'ring-2 ring-gold-400 scale-105 opacity-100 shadow-lg shadow-gold-500/25 w-10 h-13 sm:w-12 sm:h-16'
                    : 'opacity-50 hover:opacity-90 border border-white/20 w-8 h-11 sm:w-10 sm:h-13'
                }`}
                title={`Lihat Slide ${sIdx + 1}`}
              >
                <img
                  src={slideImg}
                  alt={`Slide ${sIdx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[8px] sm:text-[9px] font-mono text-center text-zinc-300 font-bold py-0.5">
                  {sIdx + 1}
                </span>
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
