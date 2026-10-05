import React from 'react';
import {
  Camera,
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

      {/* Subtle Studio Status Indicator */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 pointer-events-none hidden md:flex items-center justify-between text-[11px] font-mono text-gold-500/40 z-10">
        <span>[ FYPOTRET • OFFICIAL PORTFOLIO ]</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>JADWAL BOOKING JABODETABEK TERSEDIA</span>
        </span>
        <span>[ TANGERANG • DEPOK • JAKARTA ]</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold mb-6 shadow-sm shadow-gold-500/5">
              <Camera className="w-3.5 h-3.5 text-gold-400" />
              <span>Dokumentasi Momen Hangat & Seru di Jabodetabek</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] sm:leading-[1.12] mb-5">
              Biar Momen Bahagia Kamu Nggak Lewat Gitu Aja,{' '}
              <span className="italic font-normal text-gold-gradient block sm:inline">
                Abadikan
              </span>{' '}
              Bareng FYPotret.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-zinc-300 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Mulai dari serunya selebrasi <strong>Wisuda</strong> bareng bestie, sakralnya <strong>Akad & Wedding</strong>, romantisnya <strong>Lamaran</strong>, sampai lucunya pesta <strong>Ulang Tahun Si Kecil</strong>. Nggak usah khawatir kalau kaku di depan kamera, tim fotografer kita siap arahin gaya dengan santai biar ketawa lepas kamu keluar alami.
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
                <span className="relative z-10">Tanya Jadwal & Booking</span>
              </button>

              <a
                href="#gallery"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold text-sm sm:text-base border border-gold-500/30 hover:border-gold-400 active:scale-98 transition-all duration-200 flex items-center justify-center gap-2 min-h-[48px]"
              >
                <span>Lihat Hasil Foto</span>
                <ArrowUpRight className="w-4 h-4 text-gold-400" />
              </a>
            </div>

            {/* Quick Micro Trust Indicators */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-10 pt-8 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold font-serif text-white">500+</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Momen Klien</div>
              </div>
              <div className="text-center lg:text-left border-x border-white/10 px-2 sm:px-4">
                <div className="text-xl sm:text-2xl font-bold font-serif text-gold-400">4.9 / 5.0</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Rating Kepuasan</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-bold font-serif text-white">H+1</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">Semua File Mentahan</div>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetric Editorial Magazine Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Subtle Ambient Golden Glow Behind Collage */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-gold-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

              {/* The 3-Photo Editorial Grid (Clean & Minimalist) */}
              <div className="grid grid-cols-12 gap-3 sm:gap-4 items-stretch">
                
                {/* 01. Foto Utama (Wedding & Akad) */}
                <div className="col-span-12 sm:col-span-7 group relative flex flex-col">
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-gold-500/30 bg-obsidian-900 shadow-2xl shadow-black/80 aspect-[3/4] sm:aspect-[4/5.4] w-full flex-grow">
                    <img
                      src="/portfolio/p7_DbVM3ScFJoX.jpg"
                      alt="Wedding Dian & Rizky - FYPotret"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="eager"
                    />

                    {/* Soft Bottom Gradient for Text Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                    {/* Simple Minimalist Caption */}
                    <div className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 z-10">
                      <p className="text-sm sm:text-base font-serif font-bold text-white drop-shadow">
                        Wedding & Akad
                      </p>
                      <p className="text-xs text-gold-300 font-sans mt-0.5">
                        Dian & Rizky
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Sub-Column: 2 Foto Pendamping (Wisuda & Lamaran) */}
                <div className="col-span-12 sm:col-span-5 grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">
                  
                  {/* 02. Foto Wisuda */}
                  <div className="group relative">
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-gold-500/40 bg-obsidian-900 shadow-xl aspect-square sm:aspect-[4/3] transition-all duration-500">
                      <img
                        src="/portfolio/p2_DbOVvb6E70Q.jpg"
                        alt="Wisuda Ch Lailonas - FYPotret"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      {/* Simple Minimalist Caption */}
                      <div className="absolute bottom-3 left-3 z-10">
                        <p className="text-xs sm:text-sm font-serif font-bold text-white drop-shadow">
                          Wisuda
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 03. Foto Lamaran */}
                  <div className="group relative">
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 group-hover:border-gold-500/40 bg-obsidian-900 shadow-xl aspect-square sm:aspect-[4/3] transition-all duration-500">
                      <img
                        src="/portfolio/p11_DbmsYCQkysa.jpg"
                        alt="Lamaran Bella & Luthfy - FYPotret"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      {/* Simple Minimalist Caption */}
                      <div className="absolute bottom-3 left-3 z-10">
                        <p className="text-xs sm:text-sm font-serif font-bold text-white drop-shadow">
                          Lamaran
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
