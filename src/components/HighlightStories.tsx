import React from 'react';
import { INSTAGRAM_HIGHLIGHTS, type StoryHighlight } from '../data/storyData';
import { Play } from 'lucide-react';

interface HighlightStoriesProps {
  onOpenStory: (highlightId: string) => void;
}

export const HighlightStories: React.FC<HighlightStoriesProps> = ({ onOpenStory }) => {
  return (
    <div className="mt-7 sm:mt-8 mb-2">
      {/* Centered Horizontal Scroll Stories Tray */}
      <div className="overflow-x-auto py-2 scrollbar-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth">
        <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-7 w-max mx-auto">
          {INSTAGRAM_HIGHLIGHTS.map((highlight: StoryHighlight, idx: number) => {
            return (
              <button
                key={highlight.id}
                onClick={() => onOpenStory(highlight.id)}
                className="group flex flex-col items-center gap-2 flex-shrink-0 focus:outline-none cursor-pointer transition-all duration-300 hover:-translate-y-1.5 active:scale-95 animate-card-enter"
                style={{ animationDelay: `${idx * 90}ms` }}
                title={`Buka Sorotan ${highlight.title}`}
                aria-label={`Buka Sorotan ${highlight.title}`}
              >
                {/* Circle Container with Animated Spinning Gold Ring & Hover Aura */}
                <div className="relative w-[68px] h-[68px] sm:w-[80px] sm:h-[80px] rounded-full flex items-center justify-center">
                  {/* Ambient Glow Aura on Hover */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-gold-500/40 via-amber-400/30 to-yellow-200/40 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Rotating Conic Gradient Ring */}
                  <div className="relative w-full h-full rounded-full p-[2.5px] overflow-hidden shadow-lg group-hover:shadow-gold-500/30 transition-shadow duration-300">
                    <div
                      className="absolute -inset-4 animate-story-spin pointer-events-none"
                      style={{
                        background:
                          'conic-gradient(from 0deg, #F59E0B, #FDE68A, #D97706, #FFFBEB, #F59E0B)',
                      }}
                    />

                    {/* Dark Inner Separation Ring */}
                    <div className="relative w-full h-full rounded-full p-[2.5px] bg-obsidian-950 flex items-center justify-center z-10">
                      {/* Inner Scraped Cover Image */}
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-900">
                        <img
                          src={highlight.coverImage}
                          alt={highlight.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                          loading="lazy"
                          decoding="async"
                        />

                        {/* Hover Subtle Dark Overlay with Pulsing Play Icon */}
                        <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="relative flex items-center justify-center">
                            <span className="absolute w-8 h-8 rounded-full bg-gold-400/40 animate-ping" />
                            <div className="relative w-7 h-7 rounded-full bg-gradient-to-tr from-gold-500 to-amber-300 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                              <Play className="w-3.5 h-3.5 fill-obsidian-950 text-obsidian-950 ml-0.5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Slide Counter Pill Badge */}
                  <div className="absolute -bottom-0.5 right-0.5 z-20 px-1.5 py-0.5 rounded-full bg-obsidian-950/95 border border-gold-500/40 text-[9px] font-bold text-gold-400 shadow-md group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-obsidian-950 group-hover:border-white/40 transition-all duration-300 pointer-events-none">
                    {highlight.slides.length}
                  </div>
                </div>

                {/* Highlight Label */}
                <span className="text-[11px] sm:text-xs font-medium text-zinc-300 group-hover:text-gold-300 group-hover:font-semibold transition-all duration-300 text-center max-w-[76px] sm:max-w-[88px] truncate drop-shadow-sm">
                  {highlight.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
