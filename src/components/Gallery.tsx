import React, { useState } from 'react';
import { type PortfolioItem, CATEGORIES } from '../data/portfolioData';
import { MessageCircle, MapPin, Sparkles, Camera, Filter } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

interface GalleryProps {
  items: PortfolioItem[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenLightbox: (index: number) => void;
  onInquireItem: (item: PortfolioItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({
  items,
  selectedCategory,
  onSelectCategory,
  onOpenLightbox,
  onInquireItem,
}) => {
  const [flashItemId, setFlashItemId] = useState<string | null>(null);

  const handleCardClick = (index: number, itemId: string) => {
    // 1. Trigger soft camera shutter blitz flash
    setFlashItemId(itemId);
    setTimeout(() => {
      onOpenLightbox(index);
    }, 150);
    setTimeout(() => {
      setFlashItemId(null);
    }, 350);
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 relative isolate overflow-hidden">
      {/* Real Photography Backdrop for Gallery Section */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=85"
          alt="Gallery Exhibition Atmosphere"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-120 animate-ken-burns"
        />
        <div className="absolute inset-0 bg-obsidian-950/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950 via-transparent to-obsidian-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Koleksi Karya Terbaik</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Galeri Portofolio & Cerita Klien
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 font-sans">
            Sentuh atau klik foto untuk melihat resolusi penuh dan detail lokasi sesi pemotretan.
          </p>

          {/* Category Filter Pills (Mobile Responsive) */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-8">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer min-h-[40px] flex items-center gap-1.5 active:scale-95 ${
                    isSelected
                      ? 'bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 shadow-lg shadow-gold-500/25 scale-105'
                      : 'bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-white/5'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Bento / Masonry Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((item, index) => {
            const isFlashing = flashItemId === item.id;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden card-luxury transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-gold-500/10 flex flex-col"
              >
                {/* Image Container with Dynamic Aspect Ratios */}
                <div
                  className={`relative w-full overflow-hidden cursor-pointer select-none ${
                    item.aspect === 'tall'
                      ? 'aspect-[4/5]'
                      : item.aspect === 'wide'
                      ? 'aspect-[16/10]'
                      : 'aspect-square'
                  }`}
                  onClick={() => handleCardClick(index, item.id)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Camera Shutter Blitz Flash Overlay on Click */}
                  {isFlashing && (
                    <div className="absolute inset-0 bg-white animate-shutter-flash z-30 pointer-events-none" />
                  )}

                  {/* Viewfinder Camera Brackets (Interactive Focusing Animation) */}
                  <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-gold-400/40 group-hover:border-gold-400 group-hover:scale-90 transition-all duration-300 pointer-events-none z-20" />
                  <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-gold-400/40 group-hover:border-gold-400 group-hover:scale-90 transition-all duration-300 pointer-events-none z-20" />
                  <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-gold-400/40 group-hover:border-gold-400 group-hover:scale-90 transition-all duration-300 pointer-events-none z-20" />
                  <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-gold-400/40 group-hover:border-gold-400 group-hover:scale-90 transition-all duration-300 pointer-events-none z-20" />

                  {/* Gradient Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-obsidian-950/80 backdrop-blur-md text-gold-400 border border-gold-500/30">
                      {item.categoryLabel}
                    </span>
                  </div>

                  {/* Camera HUD Autofocus Indicator on Hover */}
                  <div className="absolute top-3.5 right-3.5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/80 backdrop-blur-md text-gold-300 border border-gold-500/40 flex items-center gap-1 shadow-md">
                      <Camera className="w-3 h-3 text-gold-400" />
                      <span>AF-LOCK • ƒ/1.4</span>
                    </span>
                  </div>

                  {/* Bottom Image Info (Always Visible for Good Mobile UX) */}
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <div className="flex items-center gap-1.5 text-[11px] text-zinc-300 font-medium mb-1">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                      <span className="truncate">{item.location}</span>
                      <span className="text-zinc-500">•</span>
                      <span className="text-gold-400 truncate">{item.client}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Card Action Footer: Quick WhatsApp Question & Instagram Link */}
                <div className="p-3 sm:p-4 bg-obsidian-900/90 border-t border-white/5 flex items-center justify-between gap-2 mt-auto">
                  <button
                    onClick={() => onInquireItem(item)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-gold-500/15 hover:bg-gold-500/25 active:bg-gold-500/30 text-gold-400 hover:text-gold-300 border border-gold-500/30 text-xs font-semibold transition-all duration-200 cursor-pointer min-h-[38px]"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Tanya Paket Serupa</span>
                  </button>

                  {item.instagramUrl && (
                    <a
                      href={item.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/15 text-zinc-400 hover:text-pink-400 border border-white/10 transition-colors flex items-center justify-center min-w-[38px] min-h-[38px]"
                      title="Buka postingan asli di Instagram @fypotretid"
                      aria-label="Buka postingan asli di Instagram @fypotretid"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State if category has no items */}
        {items.length === 0 && (
          <div className="text-center py-16 bg-obsidian-900/40 rounded-2xl border border-white/5">
            <Filter className="w-8 h-8 text-zinc-500 mx-auto mb-3" />
            <p className="text-zinc-300 font-medium">Belum ada foto di kategori ini.</p>
            <button
              onClick={() => onSelectCategory('all')}
              className="mt-3 text-sm text-gold-400 underline underline-offset-4"
            >
              Lihat semua foto
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
