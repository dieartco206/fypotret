import React from 'react';
import { HIGHLIGHT_STORIES } from '../data/portfolioData';
import { Heart, Film, Star, Smile, GraduationCap, ChevronRight } from 'lucide-react';

interface HighlightStoriesProps {
  onSelectCategory: (categoryId: string) => void;
  activeCategory: string;
}

export const HighlightStories: React.FC<HighlightStoriesProps> = ({
  onSelectCategory,
  activeCategory,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Ring':
        return <Heart className="w-5 h-5 text-gold-400" />;
      case 'Film':
        return <Film className="w-5 h-5 text-gold-400" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-gold-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-gold-400" />;
      default:
        return <Star className="w-5 h-5 text-gold-400" />;
    }
  };

  return (
    <section className="relative isolate py-7 sm:py-9 border-y border-gold-500/30 bg-obsidian-950 shadow-2xl overflow-hidden">
      {/* Background Subtle Studio Camera Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=80"
          alt="Studio Background"
          className="w-full h-full object-cover object-center scale-105 filter brightness-70 contrast-120"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/90 via-obsidian-950/75 to-obsidian-950/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header on Mobile */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
            <h2 className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-zinc-300">
              Sorotan Kategori & Portofolio
            </h2>
          </div>
          <span className="text-[11px] text-zinc-400 flex items-center gap-0.5">
            Geser untuk melihat <ChevronRight className="w-3 h-3 text-gold-400" />
          </span>
        </div>

        {/* Horizontal Scroll Carousel (Touch Friendly for Smartphone) */}
        <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          
          {/* "Semua" pill / circle */}
          <button
            onClick={() => onSelectCategory('all')}
            className="flex flex-col items-center gap-2 group flex-shrink-0 focus:outline-none"
          >
            <div
              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full p-0.5 transition-all duration-300 ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-tr from-gold-500 to-amber-300 ring-4 ring-gold-500/20 scale-105'
                  : 'bg-zinc-800 hover:bg-gold-500/40'
              }`}
            >
              <div className="w-full h-full rounded-full bg-obsidian-950 flex flex-col items-center justify-center p-1 border border-white/10">
                <span className="text-base sm:text-lg">✨</span>
                <span className="text-[10px] font-bold text-zinc-200 mt-0.5">Semua</span>
              </div>
            </div>
            <span
              className={`text-xs font-medium transition-colors ${
                activeCategory === 'all' ? 'text-gold-400 font-bold' : 'text-zinc-400 group-hover:text-zinc-200'
              }`}
            >
              Semua Foto
            </span>
          </button>

          {/* Individual Category Stories */}
          {HIGHLIGHT_STORIES.map((story) => {
            const isActive = activeCategory === story.id;
            return (
              <button
                key={story.id}
                onClick={() => onSelectCategory(story.id)}
                className="flex flex-col items-center gap-2 group flex-shrink-0 focus:outline-none"
              >
                {/* Circle Container with Golden Border Ring */}
                <div
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full p-0.5 transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-tr from-gold-500 via-amber-400 to-yellow-200 ring-4 ring-gold-500/20 scale-105'
                      : 'bg-gradient-to-tr from-gold-600/60 to-zinc-700 hover:from-gold-500 hover:to-amber-300'
                  }`}
                >
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-obsidian-950 flex items-center justify-center border border-black">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-obsidian-950/40 flex items-center justify-center">
                      {getIcon(story.iconName)}
                    </div>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <div className="text-center">
                  <span
                    className={`text-xs font-medium block transition-colors ${
                      isActive ? 'text-gold-400 font-bold' : 'text-zinc-300 group-hover:text-white'
                    }`}
                  >
                    {story.title}
                  </span>
                  <span className="text-[10px] text-zinc-500 hidden sm:block">
                    {story.count}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
