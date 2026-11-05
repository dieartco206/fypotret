import React from 'react';
import { INSTAGRAM_HIGHLIGHTS, type StoryHighlight } from '../data/storyData';
import { Play, Sparkles, ChevronRight } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

interface HighlightStoriesProps {
  onOpenStory: (highlightId: string) => void;
}

export const HighlightStories: React.FC<HighlightStoriesProps> = ({ onOpenStory }) => {
  return (
    <section className="relative isolate py-6 sm:py-8 bg-obsidian-950/90 border-y border-white/5 overflow-hidden">
      {/* Subtle Atmospheric Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-32 bg-gold-500/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-32 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header: Instagram Highlights Identity */}
        <div className="flex items-center justify-between mb-4 sm:mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-[1.5px] flex items-center justify-center shadow-md">
              <div className="w-full h-full bg-obsidian-950 rounded-[6px] flex items-center justify-center">
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-200 flex items-center gap-1.5">
                  Sorotan Instagram <Sparkles className="w-3 h-3 text-gold-400 animate-pulse" />
                </h2>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gold-500/10 text-gold-400 border border-gold-500/20">
                  @fypotretid
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 hidden xs:block">
                Ketuk lingkaran untuk memutar cuplikan video &amp; momen otentik
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 text-[11px] text-zinc-400 font-medium">
            <span className="hidden sm:inline">Geser ke samping</span>
            <ChevronRight className="w-3.5 h-3.5 text-gold-400" />
          </div>
        </div>

        {/* Horizontal Scroll Stories Tray (Touch-friendly & Smooth) */}
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 overflow-x-auto pb-2 scrollbar-none no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 scroll-smooth">
          {INSTAGRAM_HIGHLIGHTS.map((highlight: StoryHighlight, idx: number) => {
            return (
              <button
                key={highlight.id}
                onClick={() => onOpenStory(highlight.id)}
                className="group flex flex-col items-center gap-2 flex-shrink-0 focus:outline-none cursor-pointer transition-transform duration-200 active:scale-95"
                style={{ animationDelay: `${idx * 80}ms` }}
                title={`Buka Sorotan ${highlight.title}`}
                aria-label={`Buka Sorotan ${highlight.title}`}
              >
                {/* Outer Ring with Luxury Gold Gradient */}
                <div className="relative w-[72px] h-[72px] sm:w-[84px] sm:h-[84px] rounded-full p-[2.5px] bg-gradient-to-tr from-gold-500 via-amber-400 to-yellow-200 group-hover:from-gold-400 group-hover:via-amber-300 group-hover:to-white transition-all duration-300 shadow-md group-hover:shadow-gold-500/20 group-hover:scale-105">
                  {/* Dark Gap Ring */}
                  <div className="w-full h-full rounded-full p-[2px] bg-obsidian-950 flex items-center justify-center">
                    {/* Inner Scraped Cover Image */}
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-900">
                      <img
                        src={highlight.coverImage}
                        alt={highlight.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                      />
                      {/* Hover Subtle Dark Overlay with Mini Play Icon */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-gold-500/90 flex items-center justify-center shadow-lg">
                          <Play className="w-3 h-3 fill-obsidian-950 text-obsidian-950 ml-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tiny Slide Counter Pill Badge */}
                  <div className="absolute -bottom-0.5 right-1 px-1.5 py-0.2 rounded-full bg-obsidian-950/90 border border-gold-500/40 text-[9px] font-bold text-gold-400 shadow-sm pointer-events-none">
                    {highlight.slides.length}
                  </div>
                </div>

                {/* Highlight Label (Authentic text with ellipsis if too long) */}
                <span className="text-[11px] sm:text-xs font-medium text-zinc-300 group-hover:text-gold-300 transition-colors text-center max-w-[80px] sm:max-w-[92px] truncate drop-shadow-sm">
                  {highlight.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
