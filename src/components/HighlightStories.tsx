import React from 'react';
import { Play, Images } from 'lucide-react';

interface HighlightStoriesProps {
  activeCategory: string;
  onSelectCategory: (categoryId: string) => void;
  onOpenStory: (highlightId: string) => void;
}

interface FilterCircle {
  id: string;
  title: string;
  categoryValue: string;
  coverImage?: string;
  isAll?: boolean;
  slideCount?: number;
  storyId?: string;
}

export const HighlightStories: React.FC<HighlightStoriesProps> = ({
  activeCategory,
  onSelectCategory,
  onOpenStory,
}) => {
  const FILTER_ITEMS: FilterCircle[] = [
    {
      id: 'all',
      title: 'Semua',
      categoryValue: 'all',
      isAll: true,
      slideCount: 54,
    },
    {
      id: 'bts',
      title: 'BTS',
      categoryValue: 'bts',
      coverImage: '/portfolio/highlights/hl_bts.jpg',
      slideCount: 19,
      storyId: 'bts',
    },
    {
      id: 'wedding',
      title: 'Wedding',
      categoryValue: 'wedding',
      coverImage: '/portfolio/highlights/hl_wedding.jpg',
      slideCount: 11,
      storyId: 'wedding',
    },
    {
      id: 'review',
      title: 'REVIEW',
      categoryValue: 'review',
      coverImage: '/portfolio/highlights/hl_review.jpg',
      slideCount: 9,
      storyId: 'review',
    },
    {
      id: 'engagement',
      title: 'Enggament 💍',
      categoryValue: 'engagement',
      coverImage: '/portfolio/highlights/hl_engagement.jpg',
      slideCount: 7,
      storyId: 'engagement',
    },
    {
      id: 'prewedding',
      title: 'PREWEDDIN...',
      categoryValue: 'prewedding',
      coverImage: '/portfolio/highlights/hl_prewedding.jpg',
      slideCount: 4,
      storyId: 'prewedding',
    },
    {
      id: 'wisuda',
      title: '🎓 WISUDA',
      categoryValue: 'wisuda',
      coverImage: '/portfolio/highlights/hl_wisuda.jpg',
      slideCount: 4,
      storyId: 'wisuda',
    },
  ];

  const handleCircleClick = (item: FilterCircle) => {
    if (item.id === 'review') {
      // Review is primarily an authentic Instagram Story experience
      onOpenStory('review');
      return;
    }
    onSelectCategory(item.categoryValue);
  };

  const handlePlayStoryDirect = (e: React.MouseEvent, storyId?: string) => {
    e.stopPropagation();
    if (storyId) {
      onOpenStory(storyId);
    } else {
      onOpenStory('bts');
    }
  };

  return (
    <div className="mt-7 sm:mt-9 mb-4 flex flex-col items-center">
      {/* Centered Horizontal Scroll Filter Bar */}
      <div className="w-full overflow-x-auto py-2 scrollbar-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth">
        <div className="flex items-center justify-center gap-3.5 sm:gap-6 lg:gap-7 w-max mx-auto">
          {FILTER_ITEMS.map((item, idx) => {
            const isSelected = activeCategory === item.categoryValue;

            return (
              <div
                key={item.id}
                onClick={() => handleCircleClick(item)}
                className="group flex flex-col items-center gap-2 flex-shrink-0 cursor-pointer select-none transition-all duration-300 hover:-translate-y-1 active:scale-95 animate-card-enter"
                style={{ animationDelay: `${idx * 75}ms` }}
                title={
                  item.isAll
                    ? 'Tampilkan Semua Karya'
                    : `Filter Foto & Tonton Story ${item.title}`
                }
              >
                {/* Circle Container with Dynamic Gold Gradient Ring */}
                <div
                  className={`relative w-[66px] h-[66px] sm:w-[78px] sm:h-[78px] rounded-full flex items-center justify-center transition-all duration-300 ${
                    isSelected ? 'scale-105' : 'opacity-85 group-hover:opacity-100'
                  }`}
                >
                  {/* Glowing Ambient Halo when Active or Hovered */}
                  <div
                    className={`absolute -inset-1 rounded-full bg-gradient-to-tr from-gold-500/50 via-amber-400/40 to-yellow-200/50 blur-md transition-opacity duration-300 pointer-events-none ${
                      isSelected
                        ? 'opacity-100 animate-pulse'
                        : 'opacity-0 group-hover:opacity-70'
                    }`}
                  />

                  {/* Ring Border: Animated spinning ring on active/hover, subtle border otherwise */}
                  <div
                    className={`relative w-full h-full rounded-full p-[2.5px] overflow-hidden shadow-lg transition-all duration-300 ${
                      isSelected
                        ? 'shadow-gold-500/30'
                        : 'shadow-black/60 group-hover:shadow-gold-500/20'
                    }`}
                  >
                    <div
                      className={`absolute -inset-4 pointer-events-none ${
                        isSelected
                          ? 'animate-story-spin'
                          : 'opacity-40 group-hover:opacity-100 group-hover:animate-story-spin'
                      }`}
                      style={{
                        background:
                          'conic-gradient(from 0deg, #F59E0B, #FDE68A, #D97706, #FFFBEB, #F59E0B)',
                      }}
                    />

                    {/* Dark Separation Ring */}
                    <div className="relative w-full h-full rounded-full p-[2px] bg-obsidian-950 flex items-center justify-center z-10">
                      {/* Inner Content: Icon for 'Semua', or Scraped Cover Image */}
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center">
                        {item.isAll ? (
                          <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-obsidian-950 flex flex-col items-center justify-center gap-0.5 border border-white/10 group-hover:border-gold-500/40 transition-colors">
                            <Images
                              className={`w-5 h-5 transition-colors ${
                                isSelected
                                  ? 'text-gold-400'
                                  : 'text-zinc-400 group-hover:text-gold-300'
                              }`}
                            />
                            <span
                              className={`text-[9px] font-bold tracking-tight uppercase transition-colors ${
                                isSelected ? 'text-gold-400' : 'text-zinc-400'
                              }`}
                            >
                              ALL
                            </span>
                          </div>
                        ) : (
                          <>
                            <img
                              src={item.coverImage}
                              alt={item.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                              loading="lazy"
                              decoding="async"
                            />

                            {/* Direct Story Play Trigger on Hover/Tap */}
                            <div
                              onClick={(e) => handlePlayStoryDirect(e, item.storyId)}
                              className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                              title="Tonton Story Instagram"
                            >
                              <div className="w-6 h-6 rounded-full bg-gold-500 flex items-center justify-center shadow-md active:scale-90 transition-transform">
                                <Play className="w-3 h-3 fill-obsidian-950 text-obsidian-950 ml-0.5" />
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Slide Count Pill Badge */}
                  {item.slideCount && !item.isAll && (
                    <div
                      className={`absolute -bottom-0.5 right-0.5 z-20 px-1.5 py-0.2 rounded-full border text-[9px] font-bold transition-all duration-300 pointer-events-none ${
                        isSelected
                          ? 'bg-gold-500 text-obsidian-950 border-white/60 shadow-md scale-105'
                          : 'bg-obsidian-950/95 text-gold-400 border-gold-500/40 group-hover:bg-gold-500 group-hover:text-obsidian-950'
                      }`}
                    >
                      {item.slideCount}
                    </div>
                  )}
                </div>

                {/* Text Label */}
                <span
                  className={`text-[11px] sm:text-xs font-medium transition-all duration-200 text-center max-w-[76px] sm:max-w-[88px] truncate drop-shadow-sm ${
                    isSelected
                      ? 'text-gold-400 font-bold scale-105'
                      : 'text-zinc-300 group-hover:text-white'
                  }`}
                >
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
