import React from 'react';
import { Sparkles, MapPin, Calendar, Heart, ShieldCheck, ArrowUpRight, Camera } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Background Soft Flare Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[680px] h-[340px] sm:h-[680px] bg-gradient-to-tr from-amber-500/15 via-gold-500/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-600/8 rounded-full blur-[110px] pointer-events-none -z-10" />

      {/* Decorative Viewfinder Lines */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 pointer-events-none hidden md:flex items-center justify-between text-[11px] font-mono text-gold-500/30">
        <span>[ REC • 4K 60FPS ]</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>AF-TRACKING ACTIVE</span>
        </span>
        <span>[ EXP 0.0 • 5600K ]</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold mb-6 shadow-sm shadow-gold-500/5">
              <Sparkles className="w-3.5 h-3.5 animate-spin text-gold-400" />
              <span>Jasa Fotografi Profesional Jabodetabek</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] sm:leading-[1.12] mb-5">
              Setiap Detik Berharga,{' '}
              <span className="italic font-normal text-gold-gradient block sm:inline">
                Diabadikan
              </span>{' '}
              dengan Rasa & Kehangatan.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-300 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Spesialis dokumentasi momen sakral <strong>Wedding</strong>, <strong>Prewedding</strong>,{' '}
              <strong>Wisuda</strong>, hingga pesta <strong>Kids & Birthday</strong>. Kami mengarahkan gaya dengan sabar, santai, dan tanpa canggung agar tawa alami Anda bersinar di setiap frame.
            </p>

            {/* Location & Coverage Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-8 text-xs text-zinc-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-gold-500/20 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                Tangerang
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-gold-500/20 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                Depok
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900/90 border border-gold-500/20 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-gold-400" />
                Jakarta & Sekitarnya
              </span>
            </div>

            {/* Action Buttons (Mobile-First Touch Optimized) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-amber-600 text-obsidian-950 font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-gold-500/30 hover:shadow-gold-500/50 hover:brightness-110 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2.5 min-h-[48px]"
              >
                <Calendar className="w-4 h-4 fill-obsidian-950" />
                <span>Konsultasi & Cek Tanggal</span>
              </button>

              <a
                href="#gallery"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold text-sm sm:text-base border border-gold-500/30 hover:border-gold-400 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 min-h-[48px]"
              >
                <span>Lihat Koleksi Foto</span>
                <ArrowUpRight className="w-4 h-4 text-gold-400" />
              </a>
            </div>

            {/* Quick Micro Trust Indicators */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-10 pt-8 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold font-serif text-white">500+</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Momen Terabadikan</div>
              </div>
              <div className="text-center lg:text-left border-x border-white/10 px-2 sm:px-4">
                <div className="text-xl sm:text-2xl font-bold font-serif text-gold-400">4.9 ★</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Rating Kepuasan</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold font-serif text-white">H+1</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Preview All Raw</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Collage Cards with Viewfinder Brackets */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Camera Viewfinder Corners on Main Card */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-gold-400/80 z-20 pointer-events-none" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-gold-400/80 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-gold-400/80 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-gold-400/80 z-20 pointer-events-none" />

              {/* Main Visual Image Card */}
              <div className="relative rounded-2xl overflow-hidden border border-gold-500/40 shadow-2xl shadow-black/90 aspect-[4/5] bg-obsidian-900 group">
                <img
                  src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=85"
                  alt="FYPotret Wedding Moment"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
                
                {/* 35mm Analog Film Edge Number Watermark */}
                <div className="absolute top-3 left-3 text-[10px] font-mono text-gold-400/70 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded border border-gold-500/30">
                  🎞️ 35mm • EXP 24A
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />

                {/* Bottom Details Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-obsidian-900/90 backdrop-blur-md border border-gold-500/30 shadow-lg flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-gold-400 flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 fill-gold-400" />
                      Wedding & Akad
                    </div>
                    <div className="text-sm font-semibold text-white mt-0.5">Dian & Rizky</div>
                    <div className="text-[11px] text-zinc-400">Tangerang Selatan</div>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400">
                    <Camera className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Floating Mini Highlight Card (Top Right) */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-obsidian-900/95 backdrop-blur-md border border-gold-500/50 rounded-xl p-3 shadow-xl hidden sm:flex items-center gap-3 animate-pulse-subtle">
                <div className="w-9 h-9 rounded-lg bg-gold-500/20 flex items-center justify-center text-gold-400 font-bold text-xs">
                  🎓
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Wisuda & Graduation</div>
                  <div className="text-[10px] text-zinc-400">Outdoor & Studio UI Depok</div>
                </div>
              </div>

              {/* Floating Mini Trust Card (Bottom Left) */}
              <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-obsidian-900/95 backdrop-blur-md border border-gold-500/40 rounded-xl p-3 shadow-xl flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <div>
                  <div className="text-xs font-bold text-white">Fotografer Ramah & Sabar</div>
                  <div className="text-[10px] text-zinc-400">Bebas Konsultasi Moodboard</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
