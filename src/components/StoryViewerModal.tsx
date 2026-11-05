import React, { useState, useEffect, useRef, useCallback } from 'react';
import { INSTAGRAM_HIGHLIGHTS, type StoryHighlight, type StorySlide } from '../data/storyData';
import { X, Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight, MessageCircle, Star, MapPin } from 'lucide-react';

interface StoryViewerModalProps {
  initialHighlightId: string | null;
  onClose: () => void;
  onInquireStory?: (slide: StorySlide, highlightTitle: string) => void;
}

export const StoryViewerModal: React.FC<StoryViewerModalProps> = ({
  initialHighlightId,
  onClose,
  onInquireStory,
}) => {
  const [highlightIndex, setHighlightIndex] = useState<number>(0);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0); // 0 to 100

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressIntervalRef = useRef<number | null>(null);
  const isPressingRef = useRef<boolean>(false);

  // Initialize highlight index when initialHighlightId changes
  useEffect(() => {
    if (initialHighlightId) {
      const idx = INSTAGRAM_HIGHLIGHTS.findIndex((h) => h.id === initialHighlightId);
      if (idx !== -1) {
        setHighlightIndex(idx);
        setSlideIndex(0);
        setProgress(0);
      }
    }
  }, [initialHighlightId]);

  const currentHighlight: StoryHighlight | undefined = INSTAGRAM_HIGHLIGHTS[highlightIndex];
  const currentSlide: StorySlide | undefined = currentHighlight?.slides[slideIndex];

  // Lock body scroll when modal is open
  useEffect(() => {
    if (initialHighlightId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [initialHighlightId]);

  // Navigate to Next slide or Next highlight
  const goToNextSlide = useCallback(() => {
    if (!currentHighlight) return;
    if (slideIndex < currentHighlight.slides.length - 1) {
      setSlideIndex((prev) => prev + 1);
      setProgress(0);
    } else if (highlightIndex < INSTAGRAM_HIGHLIGHTS.length - 1) {
      setHighlightIndex((prev) => prev + 1);
      setSlideIndex(0);
      setProgress(0);
    } else {
      // Reached the very end of all highlights
      onClose();
    }
  }, [currentHighlight, slideIndex, highlightIndex, onClose]);

  // Navigate to Previous slide or Previous highlight
  const goToPrevSlide = useCallback(() => {
    if (slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
      setProgress(0);
    } else if (highlightIndex > 0) {
      const prevHl = INSTAGRAM_HIGHLIGHTS[highlightIndex - 1];
      setHighlightIndex((prev) => prev - 1);
      setSlideIndex(prevHl.slides.length - 1);
      setProgress(0);
    } else {
      setProgress(0);
    }
  }, [slideIndex, highlightIndex]);

  // Handle timer & progress bar
  useEffect(() => {
    if (!initialHighlightId || !currentSlide || isPaused) {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      return;
    }

    const duration = currentSlide.type === 'video' ? 12000 : 5000;
    const intervalStep = 50; // ms
    const increment = (intervalStep / duration) * 100;

    progressIntervalRef.current = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNextSlide();
          return 0;
        }
        return prev + increment;
      });
    }, intervalStep);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [initialHighlightId, currentSlide, isPaused, goToNextSlide]);

  // Synchronize video playback with pause state
  useEffect(() => {
    if (videoRef.current) {
      if (isPaused) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    }
  }, [isPaused, currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    if (!initialHighlightId) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPaused((p) => !p);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [initialHighlightId, goToNextSlide, goToPrevSlide, onClose]);

  if (!initialHighlightId || !currentHighlight || !currentSlide) {
    return null;
  }

  // Handle pointer down (press and hold to pause)
  const handlePointerDown = () => {
    isPressingRef.current = true;
    setIsPaused(true);
  };

  const handlePointerUp = () => {
    if (isPressingRef.current) {
      isPressingRef.current = false;
      setIsPaused(false);
    }
  };

  // Handle left/right click navigation on story card
  const handleTapNavigation = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (clickX < rect.width * 0.35) {
      goToPrevSlide();
    } else {
      goToNextSlide();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fade-in select-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Floating Desktop Prev Button */}
      <button
        onClick={goToPrevSlide}
        disabled={highlightIndex === 0 && slideIndex === 0}
        className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-20 disabled:pointer-events-none transition-all mr-6 cursor-pointer border border-white/10"
        title="Slide Sebelumnya"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Main 9:16 Instagram Story Container */}
      <div
        className="relative w-full h-full sm:h-[88vh] sm:max-h-[820px] sm:max-w-[410px] bg-obsidian-950 sm:rounded-3xl overflow-hidden shadow-2xl shadow-black/80 flex flex-col border border-white/10"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Top Progress Bars (Segmented per slide) */}
        <div className="absolute top-0 left-0 right-0 z-30 pt-3 px-3 flex gap-1.5 pointer-events-none">
          {currentHighlight.slides.map((slide, idx) => {
            let widthPercent = 0;
            if (idx < slideIndex) widthPercent = 100;
            else if (idx === slideIndex) widthPercent = progress;

            return (
              <div
                key={slide.id}
                className="flex-1 h-1 rounded-full bg-white/25 overflow-hidden backdrop-blur-sm"
              >
                <div
                  className="h-full bg-white transition-all ease-linear"
                  style={{
                    width: `${widthPercent}%`,
                    transitionDuration: idx === slideIndex && !isPaused ? '50ms' : '0ms',
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Top Header Information & Actions */}
        <div className="absolute top-5 left-0 right-0 z-30 px-3 py-1.5 flex items-center justify-between pointer-events-auto">
          {/* User & Story Info */}
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full p-0.5 bg-gradient-to-tr from-gold-500 via-amber-400 to-amber-200 shadow-md">
              <img
                src={currentHighlight.coverImage}
                alt={currentHighlight.title}
                className="w-full h-full object-cover rounded-full bg-obsidian-950"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-white tracking-wide">fypotretid</span>
                <span className="text-[10px] text-zinc-400 font-sans">• Story</span>
              </div>
              <span className="text-[11px] font-semibold text-gold-400 leading-tight">
                {currentHighlight.title}
              </span>
            </div>
          </div>

          {/* Action Buttons: Pause/Play, Mute, Close */}
          <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsPaused((p) => !p)}
              className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white/90 transition-colors"
              title={isPaused ? 'Lanjutkan' : 'Jeda'}
              aria-label="Pause or Play"
            >
              {isPaused ? <Play className="w-4 h-4 fill-white" /> : <Pause className="w-4 h-4" />}
            </button>

            {currentSlide.type === 'video' && (
              <button
                onClick={() => setIsMuted((m) => !m)}
                className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white/90 transition-colors"
                title={isMuted ? 'Nyalakan Suara' : 'Bisukan Suara'}
                aria-label="Mute or Unmute"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white/90 hover:text-white transition-colors"
              title="Tutup Story (Esc)"
              aria-label="Close Story"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Media Viewport (Image or Video) */}
        <div
          className="relative flex-1 w-full h-full overflow-hidden flex items-center justify-center cursor-pointer"
          onClick={handleTapNavigation}
        >
          {currentSlide.type === 'video' ? (
            <video
              key={currentSlide.id}
              ref={videoRef}
              src={currentSlide.mediaUrl}
              poster={currentSlide.posterUrl}
              autoPlay
              playsInline
              loop
              muted={isMuted}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              key={currentSlide.id}
              src={currentSlide.mediaUrl}
              alt={currentSlide.title}
              className="w-full h-full object-cover animate-fade-in"
              loading="eager"
            />
          )}

          {/* Gradient Overlay for Readable Text at Top & Bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60 pointer-events-none" />

          {/* Review Card Layout (If Slide is a Testimonial Review) */}
          {currentSlide.isReview && (
            <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-20 p-5 rounded-2xl bg-obsidian-950/85 backdrop-blur-md border border-gold-500/30 shadow-2xl text-center pointer-events-none">
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-zinc-100 font-sans italic leading-relaxed mb-4">
                "{currentSlide.reviewQuote}"
              </p>
              <div className="border-t border-white/10 pt-3">
                <p className="text-xs font-bold text-gold-400">{currentSlide.client}</p>
                <p className="text-[10px] text-zinc-400">{currentSlide.clientRole}</p>
              </div>
            </div>
          )}

          {/* Bottom Story Description & CTA */}
          <div
            className="absolute bottom-4 left-3 right-3 z-30 flex flex-col gap-2.5"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Title & Location Tag */}
            <div className="pointer-events-none">
              {currentSlide.location && (
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-zinc-300 text-[10px] font-sans mb-1.5">
                  <MapPin className="w-2.5 h-2.5 text-gold-400" />
                  <span>{currentSlide.location}</span>
                </div>
              )}
              <h3 className="text-base sm:text-lg font-serif font-bold text-white tracking-wide drop-shadow-md">
                {currentSlide.title}
              </h3>
              {currentSlide.description && (
                <p className="text-[11px] sm:text-xs text-zinc-300 font-sans line-clamp-2 leading-relaxed drop-shadow-sm mt-0.5">
                  {currentSlide.description}
                </p>
              )}
            </div>

            {/* Direct Interactive CTA */}
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={() => {
                  onClose();
                  if (onInquireStory) {
                    onInquireStory(currentSlide, currentHighlight.title);
                  }
                }}
                className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-obsidian-950 font-bold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-gold-500/20 active:scale-98 transition-all cursor-pointer min-h-[40px]"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-obsidian-950" />
                <span>Konsultasi Konsep Serupa</span>
              </button>

              {currentSlide.instagramUrl && (
                <a
                  href={currentSlide.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-xs flex items-center justify-center border border-white/20 transition-all min-h-[40px]"
                  title="Buka di Instagram"
                  aria-label="Open on Instagram"
                >
                  IG
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Desktop Next Button */}
      <button
        onClick={goToNextSlide}
        disabled={
          highlightIndex === INSTAGRAM_HIGHLIGHTS.length - 1 &&
          slideIndex === currentHighlight.slides.length - 1
        }
        className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-20 disabled:pointer-events-none transition-all ml-6 cursor-pointer border border-white/10"
        title="Slide Selanjutnya"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
