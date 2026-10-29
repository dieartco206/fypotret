import React, { useState, useEffect } from 'react';
import { type PortfolioItem, CATEGORIES } from '../data/portfolioData';
import { MapPin, Camera, Filter, ChevronLeft, ChevronRight, Play, Images } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

interface GalleryProps {
  items: PortfolioItem[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onOpenLightbox: (index: number) => void;
  onInquireItem?: (item: PortfolioItem) => void;
}

const ITEMS_PER_PAGE = 12;

export const Gallery: React.FC<GalleryProps> = ({
  items,
  selectedCategory,
  onSelectCategory,
  onOpenLightbox,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Reset page to 1 whenever category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedItems = items.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    if (page === currentPage || page < 1 || page > totalPages || isTransitioning) return;

    setIsTransitioning(true);

    // Scroll halus ke header galeri dengan offset navbar tepat di atas grid
    const target = document.getElementById('gallery-heading');
    if (target) {
      const targetTop = target.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
    }

    // Ganti page di dalam transisi cepat yang mulus (tanpa jank / screen jump)
    setTimeout(() => {
      setCurrentPage(page);
      requestAnimationFrame(() => {
        setIsTransitioning(false);
      });
    }, 180);
  };

  const handleCardClick = (index: number) => {
    onOpenLightbox(index);
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 relative isolate overflow-hidden">
      {/* Real Photography Backdrop for Gallery Section */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=75"
          alt="Gallery Exhibition Atmosphere"
          className="hidden sm:block w-full h-full object-cover object-center scale-105 animate-ken-burns"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-obsidian-950/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/80 via-transparent to-obsidian-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-400/20 via-transparent to-transparent" />
      </div>

      {/* Subtle Champagne Gold Ambient Halos (Bersih, Mewah, Foto Portofolio Menyala Tajam) */}
      <div className="absolute top-10 -left-16 w-[450px] sm:w-[680px] h-[450px] sm:h-[680px] bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.16)_0%,_rgba(245,158,11,0.06)_40%,_transparent_70%)] pointer-events-none z-0" />
      <div className="absolute bottom-10 -right-16 w-[450px] sm:w-[680px] h-[450px] sm:h-[680px] bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.15)_0%,_rgba(217,119,6,0.05)_40%,_transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="gallery-heading" className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 scroll-mt-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Dokumentasi & Portofolio Klien</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Koleksi Karya & Momen Terbaik
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 font-sans">
            Pilih foto untuk melihat resolusi penuh, informasi lokasi, dan detail setiap momen istimewa.
          </p>

          {/* Category Filter Pills (Mobile Responsive Swipe) */}
          <div className="flex sm:flex-wrap items-center justify-start sm:justify-center gap-2 sm:gap-2.5 mt-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer min-h-[40px] flex items-center gap-1.5 active:scale-95 flex-shrink-0 whitespace-nowrap ${
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

        {/* Dynamic Bento / Masonry Gallery Grid - 2 Kolom di Mobile, 2 Kolom di Tablet, 3 Kolom di Desktop */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6 transition-all duration-200 ease-out will-change-transform ${
            isTransitioning ? 'opacity-30 scale-[0.99] pointer-events-none' : 'opacity-100 scale-100'
          }`}
        >
          {paginatedItems.map((item, index) => {
            const globalIndex = startIndex + index;
            return (
              <div
                key={item.id}
                style={{ animationDelay: `${(index % 8) * 80}ms` }}
                onClick={() => handleCardClick(globalIndex)}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden card-luxury transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-gold-500/15 flex flex-col animate-card-enter cursor-pointer select-none"
              >
                {/* Image Container with Dynamic Aspect Ratios */}
                <div
                  className={`relative w-full overflow-hidden ${
                    item.aspect === 'tall'
                      ? 'aspect-[4/5]'
                      : item.aspect === 'wide'
                      ? 'aspect-[4/3] sm:aspect-[16/10]'
                      : 'aspect-square'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Gradient Shadow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                  {/* Top Header inside Image: Category Badge, Reel/Album Badge & Instagram Icon */}
                  <div className="absolute top-2 left-2 right-2 sm:top-3 sm:left-3 sm:right-3 z-10 flex items-center justify-between">
                    <div className="flex items-center gap-1 sm:gap-1.5 flex-nowrap min-w-0">
                      <span className="whitespace-nowrap flex-shrink-0 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-bold bg-[#0e1017]/90 sm:backdrop-blur-md text-gold-400 border border-gold-500/30">
                        {item.categoryLabel}
                      </span>
                      {item.isVideo && (
                        <span className="whitespace-nowrap flex-shrink-0 px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-pink-950/80 sm:backdrop-blur-md text-pink-300 border border-pink-500/35 flex items-center gap-1">
                          <Play className="w-2.5 h-2.5 fill-pink-400 text-pink-400" />
                          <span>Reel</span>
                        </span>
                      )}
                      {item.images && item.images.length > 1 && (
                        <span className="whitespace-nowrap flex-shrink-0 px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold bg-amber-950/85 sm:backdrop-blur-md text-amber-300 border border-amber-500/35 flex items-center gap-1 shadow-sm">
                          <Images className="w-2.5 h-2.5 text-amber-400" />
                          <span>{item.images.length} Foto</span>
                        </span>
                      )}
                    </div>

                    {item.instagramUrl && (
                      <a
                        href={item.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 sm:p-1.5 rounded-full bg-[#0e1017]/80 hover:bg-black/80 text-zinc-300 hover:text-pink-400 border border-white/10 sm:backdrop-blur-md transition-colors"
                        title="Lihat di Instagram"
                        aria-label="Lihat di Instagram"
                      >
                        <InstagramIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Play Button Overlay for Videos */}
                  {item.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/75 sm:backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-obsidian-950 transition-all duration-300 shadow-xl">
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Camera/Play/Album HUD Indicator on Hover (Desktop only) */}
                  <div className="hidden sm:block absolute top-12 right-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-black/80 backdrop-blur-md text-gold-300 border border-gold-500/40 flex items-center gap-1 shadow-md">
                      {item.isVideo ? (
                        <>
                          <Play className="w-3 h-3 fill-gold-400 text-gold-400" />
                          <span>PUTAR REEL</span>
                        </>
                      ) : item.images && item.images.length > 1 ? (
                        <>
                          <Images className="w-3 h-3 text-gold-400" />
                          <span>{item.images.length} FOTO</span>
                        </>
                      ) : (
                        <>
                          <Camera className="w-3 h-3 text-gold-400" />
                          <span>LIHAT</span>
                        </>
                      )}
                    </span>
                  </div>

                  {/* Bottom Image Info */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 z-10">
                    <div className="flex items-center gap-1 text-[10px] sm:text-xs text-zinc-300 font-medium mb-0.5 sm:mb-1">
                      <MapPin className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-gold-400 flex-shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                    <h3 className="text-xs sm:text-base font-serif font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-1 sm:line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Controls - Paling Kanan */}
        {totalPages > 1 && (
          <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
            <p className="text-xs text-zinc-400 font-sans order-2 sm:order-1 text-center sm:text-left">
              Menampilkan {startIndex + 1}–{Math.min(endIndex, items.length)} dari {items.length} karya foto
            </p>

            <div className="flex items-center gap-1.5 sm:gap-2 order-1 sm:order-2 sm:ml-auto">
              <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                disabled={currentPage === 1 || isTransitioning}
                className="px-3 py-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-gold-500/40 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1 text-xs sm:text-sm font-medium cursor-pointer"
                aria-label="Halaman Sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Sebelumnya</span>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  disabled={isTransitioning}
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center ${
                    currentPage === pageNum
                      ? 'bg-gold-500 text-obsidian-950 shadow-lg shadow-gold-500/25 scale-105 pointer-events-none'
                      : 'bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-white/10 active:scale-95'
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                disabled={currentPage === totalPages || isTransitioning}
                className="px-3 py-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-gold-500/40 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1 text-xs sm:text-sm font-medium cursor-pointer"
                aria-label="Halaman Selanjutnya"
              >
                <span className="hidden sm:inline">Selanjutnya</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

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
