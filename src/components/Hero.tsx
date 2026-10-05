import React from 'react';
import {
  Camera,
  MapPin,
  Calendar,
  ArrowUpRight,
  CheckCircle2,
  Sparkles as _UnusedSparkles, // removed AI slop
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

              {/* The 3-Photo Editorial Grid */}
              <div className="grid grid-cols-12 gap-3 sm:gap-4 items-stretch">
                
                {/* 01. Main Anchor Photo (Wedding & Akad) - Tall Portrait Left */}
                <div className="col-span-12 sm:col-span-7 group relative flex flex-col">
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-gold-500/35 bg-obsidian-900 shadow-2xl shadow-black/90 aspect-[3/4] sm:aspect-[4/5.4] w-full flex-grow">
                    <img
                      src="/portfolio/p7_DbVM3ScFJoX.jpg"
                      alt="Wedding & Akad Dian & Rizky - FYPotret"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="eager"
                    />

                    {/* Gentle Bottom Vignette for Crisp Text */}
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/95 via-obsidian-950/25 to-transparent pointer-events-none" />

                    {/* Editorial Index Badge */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-obsidian-950/85 backdrop-blur-md border border-gold-500/40 text-[10px] font-mono tracking-widest text-gold-300 font-bold uppercase shadow-lg">
                      <span>01</span>
                      <span className="text-zinc-500">/</span>
                      <span>WEDDING</span>
                    </div>

                    {/* Client & Location Caption */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3 sm:p-3.5 rounded-xl bg-obsidian-950/90 backdrop-blur-md border border-white/10 shadow-xl flex items-center justify-between">
                      <div className="min-w-0 pr-2">
                        <div className="text-sm sm:text-base font-serif font-bold text-white tracking-tight truncate">
                          Dian & Rizky
                        </div>
                        <div className="text-[11px] text-zinc-300 flex items-center gap-1 mt-0.5 truncate">
                          <MapPin className="w-3 h-3 text-gold-400 flex-shrink-0" />
                          <span className="truncate">Tangerang Selatan • Akad & Resepsi</span>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full overflow-hidden bg-obsidian-900 border border-gold-500/60 flex-shrink-0 flex items-center justify-center shadow">
                        <img src="/logo.jpg" alt="FYPotret" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Sub-Column: 2 Companion Photos (Wisuda & Lamaran) */}
                <div className="col-span-12 sm:col-span-5 grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-4">
                  
                  {/* 02. Secondary Photo (Wisuda Squad) */}
                  <div className="group relative">
                    <div className="relative rounded-2xl overflow-hidden border border-white/15 group-hover:border-gold-500/50 bg-obsidian-900 shadow-xl aspect-square sm:aspect-[4/3] transition-all duration-500">
                      <img
                        src="/portfolio/p2_DbOVvb6E70Q.jpg"
                        alt="Wisuda Ch Lailonas JCC Senayan - FYPotret"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-transparent to-transparent pointer-events-none" />

                      {/* Editorial Index Badge */}
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded bg-obsidian-950/85 backdrop-blur-md border border-white/20 text-[9px] font-mono tracking-wider text-gold-300 font-bold uppercase shadow">
                        <span>02</span>
                        <span className="text-zinc-500">/</span>
                        <span>WISUDA</span>
                      </div>

                      {/* Micro Caption */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left">
                        <p className="text-xs font-serif font-bold text-white truncate">Ch Lailonas, S.Ak</p>
                        <p className="text-[10px] text-zinc-300 truncate">JCC Senayan • Squad Ceria</p>
                      </div>
                    </div>
                  </div>

                  {/* 03. Tertiary Photo (Engagement / Lamaran) */}
                  <div className="group relative">
                    <div className="relative rounded-2xl overflow-hidden border border-white/15 group-hover:border-gold-500/50 bg-obsidian-900 shadow-xl aspect-square sm:aspect-[4/3] transition-all duration-500">
                      <img
                        src="/portfolio/p11_DbmsYCQkysa.jpg"
                        alt="Lamaran Bella & Luthfy Serpong - FYPotret"
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-transparent to-transparent pointer-events-none" />

                      {/* Editorial Index Badge */}
                      <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-2 py-0.5 rounded bg-obsidian-950/85 backdrop-blur-md border border-white/20 text-[9px] font-mono tracking-wider text-gold-300 font-bold uppercase shadow">
                        <span>03</span>
                        <span className="text-zinc-500">/</span>
                        <span>LAMARAN</span>
                      </div>

                      {/* Micro Caption */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 text-left">
                        <p className="text-xs font-serif font-bold text-white truncate">Bella & Luthfy</p>
                        <p className="text-[10px] text-zinc-300 truncate">Serpong • Intimate Session</p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Editorial Strip: Clean Authentic Trust Bar */}
              <div className="mt-3.5 p-3 rounded-2xl bg-obsidian-900/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs text-zinc-300 shadow-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="font-medium text-[11px] sm:text-xs">Foto Asli Karya Fotografer FYPotret</span>
                </div>
                <div className="flex items-center gap-1.5 text-gold-400 font-mono text-[10px] sm:text-[11px]">
                  <span>Jabodetabek Studio & Outdoor</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
