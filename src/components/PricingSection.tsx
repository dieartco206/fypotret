import React, { useState, useRef, useEffect } from 'react';
import { PRICING_PACKAGES, type PricingPackage } from '../data/portfolioData';
import { Check, Camera, Flame, Clock, HardDrive, MessageCircle, ArrowRight, Car, ChevronLeft, ChevronRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPackage: (pkg: PricingPackage) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const filteredPackages = selectedCategory === 'all'
    ? PRICING_PACKAGES
    : PRICING_PACKAGES.filter((p) => 
        p.category === selectedCategory || (p.categories && p.categories.includes(selectedCategory as any))
      );

  const filterTabs = [
    { id: 'all', label: 'Semua Paket' },
    { id: 'wedding', label: 'Wedding & Akad' },
    { id: 'graduation', label: 'Wisuda' },
    { id: 'prewedding', label: 'Prewed & Lamaran' },
    { id: 'birthday', label: 'Birthday' },
    { id: 'event', label: 'Event' },
  ] as const;

  const checkScrollState = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

    const firstCard = sliderRef.current.children[0] as HTMLElement | undefined;
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 24;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveSlideIndex(Math.min(filteredPackages.length - 1, Math.max(0, index)));
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.addEventListener('scroll', checkScrollState, { passive: true });
    checkScrollState();
    return () => slider.removeEventListener('scroll', checkScrollState);
  }, [filteredPackages]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
    setActiveSlideIndex(0);
    setCanScrollLeft(false);
    setCanScrollRight(filteredPackages.length > 1);
  }, [selectedCategory, filteredPackages.length]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const firstCard = sliderRef.current.children[0] as HTMLElement | undefined;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 440;
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const scrollToSlide = (index: number) => {
    if (!sliderRef.current) return;
    const cards = sliderRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 relative isolate overflow-hidden">
      {/* Real Photography Backdrop for Pricing Section */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=75"
          alt="Wedding Celebration Atmosphere"
          className="hidden sm:block w-full h-full object-cover object-center scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-obsidian-950/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/80 via-transparent to-obsidian-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-400/20 via-transparent to-transparent" />
      </div>

      {/* Subtle Champagne Gold Center Aura behind pricing cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[800px] h-[550px] sm:h-[800px] bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.18)_0%,_rgba(245,158,11,0.06)_40%,_transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Investasi & Pilihan Paket</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Paket Dokumentasi Fleksibel & Terjangkau
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 font-sans">
            Harga transparan, sudah termasuk transport area Jabodetabek. Seluruh file master RAW + edit dikirim langsung via Google Drive.
          </p>

          {/* Category Tabs */}
          <div className="flex sm:flex-wrap items-center justify-start sm:justify-center gap-2 mt-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none no-scrollbar">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer min-h-[40px] flex-shrink-0 whitespace-nowrap ${
                  selectedCategory === tab.id
                    ? 'bg-gold-500 text-obsidian-950 font-bold shadow-md shadow-gold-500/20'
                    : 'bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Slider Controls Bar */}
        <div className="flex items-center justify-between mb-4 max-w-5xl mx-auto px-1">
          <div className="text-xs sm:text-sm text-zinc-400 flex items-center gap-2">
            <span className="font-medium">Geser untuk membandingkan paket</span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span className="hidden sm:inline text-gold-400 font-semibold">{filteredPackages.length} Pilihan Paket</span>
          </div>
          
          {/* Arrow Navigation Controls */}
          {filteredPackages.length > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                className={`p-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
                  canScrollLeft
                    ? 'bg-zinc-900/90 hover:bg-gold-500 hover:text-obsidian-950 text-white border-white/10 active:scale-95 shadow-md shadow-black/40'
                    : 'bg-zinc-900/30 text-zinc-600 border-white/5 cursor-not-allowed opacity-30'
                }`}
                title="Paket Sebelumnya"
                aria-label="Paket Sebelumnya"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                className={`p-2.5 rounded-full border transition-all duration-200 cursor-pointer ${
                  canScrollRight
                    ? 'bg-zinc-900/90 hover:bg-gold-500 hover:text-obsidian-950 text-white border-white/10 active:scale-95 shadow-md shadow-black/40'
                    : 'bg-zinc-900/30 text-zinc-600 border-white/5 cursor-not-allowed opacity-30'
                }`}
                title="Paket Selanjutnya"
                aria-label="Paket Selanjutnya"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Horizontal Carousel Slider Track */}
        <div
          ref={sliderRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-3 px-1 sm:px-4 snap-x snap-mandatory scroll-smooth no-scrollbar max-w-5xl mx-auto select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredPackages.map((pkg, index) => {
            return (
              <div
                key={pkg.id}
                style={{ animationDelay: `${index * 150}ms` }}
                className={`w-[85vw] sm:w-[380px] md:w-[440px] flex-shrink-0 snap-center relative rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300 card-luxury animate-card-enter hover:-translate-y-1.5 ${
                  pkg.isPopular
                    ? 'border-gold-400/90 shadow-2xl shadow-gold-500/20 ring-1 ring-gold-400/50'
                    : 'hover:border-gold-500/50'
                }`}
              >
                {/* Popular Pill */}
                {pkg.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 text-obsidian-950 font-black text-xs uppercase tracking-wider shadow-md shadow-gold-500/30 flex items-center gap-1.5 whitespace-nowrap z-10">
                    <Flame className="w-3.5 h-3.5 fill-obsidian-950 text-obsidian-950 flex-shrink-0" />
                    <span>Favorit Klien</span>
                  </div>
                )}

                {/* Free Transport Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4 self-start">
                  <Car className="w-3.5 h-3.5" />
                  <span>Free Transport Jabodetabek</span>
                </div>

                {/* Package Title & Tagline */}
                <div className="mb-5 flex flex-col justify-start">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                    {pkg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-extrabold font-serif text-gold-400 tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs sm:text-sm text-zinc-400 font-sans">/ acara</span>
                  </div>
                </div>

                {/* Key Spec Badges */}
                <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-zinc-300">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/80 border border-white/5">
                    <Clock className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Durasi:</strong> {pkg.duration}</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/80 border border-white/5">
                    <HardDrive className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Output:</strong> {pkg.deliverables}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-8 flex-grow">
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                    Fasilitas Termasuk:
                  </div>
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-gold-400" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA Button */}
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer min-h-[46px] ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 shadow-lg shadow-gold-500/25 hover:brightness-110 active:scale-98'
                      : 'bg-white/5 hover:bg-gold-500/20 text-zinc-200 hover:text-gold-300 border border-white/10 hover:border-gold-500/30 active:scale-98'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pilih Paket Ini</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots Indicator */}
        {filteredPackages.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-4">
            {filteredPackages.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToSlide(i)}
                className={`transition-all duration-300 rounded-full cursor-pointer min-h-[14px] flex items-center ${
                  activeSlideIndex === i
                    ? 'w-7 h-2 bg-gradient-to-r from-gold-500 to-amber-500 shadow-md shadow-gold-500/30'
                    : 'w-2 h-2 bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Lihat paket ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Custom Event Note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-zinc-900/60 border border-white/5 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-zinc-300">
            Butuh penyesuaian kebutuhan khusus atau dokumentasi <strong>Event Perusahaan / Komunitas</strong>?
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Admin%20FYPotret%2C%20saya%20ingin%20konsultasi%20paket%20dokumentasi%20acara..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 text-xs sm:text-sm font-bold mt-2 underline underline-offset-4"
          >
            Konsultasikan langsung bersama Admin FYPotret via WhatsApp →
          </a>
        </div>

      </div>
    </section>
  );
};
