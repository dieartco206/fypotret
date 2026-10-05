import React from 'react';
import {
  MapPin,
  Calendar,
  ArrowUpRight,
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative isolate pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Real Photography Background with Cinematic Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
          alt="Cinematic Photography Backdrop"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90 contrast-115 animate-ken-burns"
        />
        {/* Layered Dark Vignette - Foto tetap jelas terlihat, teks putih tajam kontras */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/95 via-obsidian-950/75 to-obsidian-950/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-obsidian-950/60" />
      </div>

      {/* Background Soft Flare Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[680px] h-[340px] sm:h-[680px] bg-gradient-to-tr from-amber-500/15 via-gold-500/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-amber-600/10 rounded-full blur-[110px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 text-center lg:text-left">

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] sm:leading-[1.12] mb-5">
              Jangan Biarkan Momen Bahagia Terlewatkan,{' '}
              <span className="italic font-normal text-gold-gradient block sm:inline">
                Abadikan
              </span>{' '}
              Bersama FYPotret.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-300 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Mulai dari sakralnya <strong>Akad & Pernikahan</strong>, selebrasi <strong>Wisuda</strong> bersama keluarga dan sahabat, romantisnya <strong>Lamaran</strong>, hingga keceriaan pesta <strong>Ulang Tahun Buah Hati</strong>. Tim fotografer kami siap memandu pose dengan ramah dan nyaman agar senyum natural Anda terpancar sempurna.
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
                className="relative overflow-hidden w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-amber-600 text-obsidian-950 font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-gold-500/30 hover:shadow-gold-500/50 hover:brightness-110 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2.5 min-h-[48px] group"
              >
                {/* Golden Shimmer Light Sweep Effect */}
                <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none animate-shimmer-sweep" />
                <Calendar className="w-4 h-4 fill-obsidian-950 relative z-10" />
                <span className="relative z-10">Konsultasi Jadwal & Booking</span>
              </button>

              <a
                href="#gallery"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold text-sm sm:text-base border border-gold-500/30 hover:border-gold-400 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 min-h-[48px]"
              >
                <span>Lihat Galeri Foto</span>
                <ArrowUpRight className="w-4 h-4 text-gold-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Staggered Dual-Column Editorial Showcase */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Subtle Ambient Golden Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] bg-gold-500/10 rounded-full blur-[110px] pointer-events-none -z-10" />

              {/* 2-Column Staggered Grid (Mobile-friendly: 2 columns side by side) */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4.5 items-start">
                
                {/* Column 1 */}
                <div className="flex flex-col gap-3 sm:gap-4.5">
                  {/* 01. Wedding & Akad */}
                  <a
                    href="#gallery"
                    className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-gold-500/50 bg-obsidian-900 shadow-xl shadow-black/60 aspect-[3/4] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-gold-500/20 block"
                  >
                    <img
                      src="/portfolio/p7_DbVM3ScFJoX.jpg"
                      alt="Wedding & Akad Dian & Rizky - FYPotret"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 z-10">
                      <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-gold-500 text-obsidian-950 inline-block mb-1 font-sans shadow-sm">
                        Wedding
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-white tracking-wide">
                        Dian & Rizky
                      </p>
                    </div>
                  </a>

                  {/* 02. Lamaran & Prewedding */}
                  <a
                    href="#gallery"
                    className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-gold-500/50 bg-obsidian-900 shadow-xl shadow-black/60 aspect-[3/4] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-gold-500/20 block"
                  >
                    <img
                      src="/portfolio/p11_DbmsYCQkysa.jpg"
                      alt="Lamaran Bella & Luthfy - FYPotret"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 z-10">
                      <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-gold-500 text-obsidian-950 inline-block mb-1 font-sans shadow-sm">
                        Lamaran
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-white tracking-wide">
                        Bella & Luthfy
                      </p>
                    </div>
                  </a>
                </div>

                {/* Column 2 (Offset / Staggered down) */}
                <div className="flex flex-col gap-3 sm:gap-4.5 pt-5 sm:pt-9">
                  {/* 03. Wisuda Solo */}
                  <a
                    href="#gallery"
                    className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-gold-500/50 bg-obsidian-900 shadow-xl shadow-black/60 aspect-[3/4] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-gold-500/20 block"
                  >
                    <img
                      src="/portfolio/p2_DbOVvb6E70Q.jpg"
                      alt="Wisuda Ch Lailonas - FYPotret"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 z-10">
                      <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-gold-500 text-obsidian-950 inline-block mb-1 font-sans shadow-sm">
                        Wisuda
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-white tracking-wide">
                        Graduation Solo
                      </p>
                    </div>
                  </a>

                  {/* 04. Wisuda Squad / Sahabat */}
                  <a
                    href="#gallery"
                    className="group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-gold-500/50 bg-obsidian-900 shadow-xl shadow-black/60 aspect-[3/4] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-gold-500/20 block"
                  >
                    <img
                      src="/portfolio/p4_DbOWBkKE80l.jpg"
                      alt="Wisuda Bestie Squad - FYPotret"
                      className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 z-10">
                      <span className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full bg-gold-500 text-obsidian-950 inline-block mb-1 font-sans shadow-sm">
                        Squad
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-white tracking-wide">
                        Momen Bersama Sahabat
                      </p>
                    </div>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
