import React, { useState, useEffect } from 'react';
import {
  Camera,
  MapPin,
  Calendar,
  Heart,
  ShieldCheck,
  ArrowUpRight,
  GraduationCap,
  Sun,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

const FEATURED_SHOTS = [
  {
    id: 'wedding',
    tag: 'Wedding & Akad',
    icon: Heart,
    image: '/portfolio/p7_DbVM3ScFJoX.jpg',
    client: 'Dian & Rizky',
    location: 'Tangerang Selatan',
    desc: 'Akad Nikah Penuh Haru & Bahagia',
  },
  {
    id: 'graduation',
    tag: 'Wisuda Squad',
    icon: GraduationCap,
    image: '/portfolio/p2_DbOVvb6E70Q.jpg',
    client: 'Ch Lailonas, S.Ak',
    location: 'JCC Senayan, Jakarta',
    desc: 'Selebrasi Toga Bareng Sahabat',
  },
  {
    id: 'engagement',
    tag: 'Lamaran & Prewed',
    icon: Camera,
    image: '/portfolio/p11_DbmsYCQkysa.jpg',
    client: 'Bella & Luthfy',
    location: 'Serpong, Tangerang',
    desc: 'Momen Lamaran Intimate & Manis',
  },
  {
    id: 'rooftop',
    tag: 'Outdoor Golden Hour',
    icon: Sun,
    image: '/portfolio/p6_DbOWVZSk3Xz.jpg',
    client: 'Sarah, S.Ked',
    location: 'Rooftop Senayan',
    desc: 'Sudut Estetik & Warm Tone Alami',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [currentShotIndex, setCurrentShotIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentShotIndex((prev) => (prev + 1) % FEATURED_SHOTS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const currentShot = FEATURED_SHOTS[currentShotIndex];
  const CurrentIcon = currentShot.icon;

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

      {/* Decorative Viewfinder Lines */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 pointer-events-none hidden md:flex items-center justify-between text-[11px] font-mono text-gold-500/40 z-10">
        <span>[ REC • 4K 60FPS ]</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>AF-TRACKING ACTIVE</span>
        </span>
        <span>[ EXP 0.0 • 5600K ]</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold mb-6 shadow-sm shadow-gold-500/5">
              <Camera className="w-3.5 h-3.5 text-gold-400" />
              <span>Dokumentasi Momen Hangat & Seru di Jabodetabek</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15] sm:leading-[1.12] mb-5">
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

          {/* Right Column: Interactive Editorial Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Category Filter Pills (Quick Switcher) */}
              <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-obsidian-900/90 border border-white/10 backdrop-blur-md mb-3.5 justify-between">
                {FEATURED_SHOTS.map((shot, idx) => {
                  const Icon = shot.icon;
                  const isActive = idx === currentShotIndex;
                  return (
                    <button
                      key={shot.id}
                      onClick={() => setCurrentShotIndex(idx)}
                      className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl text-xs font-medium transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'bg-gold-500 text-obsidian-950 font-bold shadow-md shadow-gold-500/25'
                          : 'text-zinc-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{shot.tag}</span>
                    </button>
                  );
                })}
              </div>

              {/* Stacked Photo Frame Container */}
              <div
                className="relative group"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* Secondary Background Layer (Simulating Stacked Editorial Prints) */}
                <div className="absolute inset-0 rounded-3xl bg-obsidian-900 border border-gold-500/20 translate-x-2.5 translate-y-2.5 rotate-1 opacity-60 pointer-events-none transition-transform duration-500 group-hover:rotate-2 group-hover:translate-x-3.5" />

                {/* Main Visual Image Card */}
                <div className="relative rounded-3xl overflow-hidden border border-gold-500/40 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] aspect-[4/5] bg-obsidian-900">
                  <img
                    key={currentShot.image}
                    src={currentShot.image}
                    alt={`${currentShot.client} - ${currentShot.tag} FYPotret`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out animate-fade-in"
                    loading="eager"
                  />

                  {/* Gradient Shadow at Bottom for Crisp Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/95 via-obsidian-950/30 to-transparent pointer-events-none" />

                  {/* Category Pill Tag at Top Left (Clean & Accurate to Active Photo) */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-obsidian-950/80 backdrop-blur-md border border-gold-500/40 text-gold-400 text-xs font-semibold shadow-lg">
                    <CurrentIcon className="w-3.5 h-3.5 text-gold-400" />
                    <span>{currentShot.tag}</span>
                  </div>

                  {/* Micro Live Indicator at Top Right */}
                  <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>FYPotret Signature</span>
                  </div>

                  {/* Left & Right Interactive Navigation Controls */}
                  <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentShotIndex((prev) => (prev === 0 ? FEATURED_SHOTS.length - 1 : prev - 1));
                      }}
                      className="w-8 h-8 rounded-full bg-obsidian-950/80 hover:bg-gold-500 hover:text-obsidian-950 text-white flex items-center justify-center backdrop-blur-md pointer-events-auto border border-white/15 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer shadow-lg"
                      aria-label="Foto Sebelumnya"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentShotIndex((prev) => (prev + 1) % FEATURED_SHOTS.length);
                      }}
                      className="w-8 h-8 rounded-full bg-obsidian-950/80 hover:bg-gold-500 hover:text-obsidian-950 text-white flex items-center justify-center backdrop-blur-md pointer-events-auto border border-white/15 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 cursor-pointer shadow-lg"
                      aria-label="Foto Selanjutnya"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Clean Non-Overlapping Bottom Details Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-obsidian-900/85 backdrop-blur-md border border-white/10 shadow-2xl flex items-center justify-between">
                    <div className="min-w-0 pr-3">
                      <div className="text-sm sm:text-base font-serif font-bold text-white tracking-tight truncate">
                        {currentShot.client}
                      </div>
                      <div className="text-xs text-zinc-300 flex items-center gap-1.5 mt-0.5 truncate">
                        <MapPin className="w-3 h-3 text-gold-400 flex-shrink-0" />
                        <span className="truncate">{currentShot.location}</span>
                        <span className="text-zinc-500">•</span>
                        <span className="text-zinc-400 hidden sm:inline truncate">{currentShot.desc}</span>
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-full overflow-hidden bg-obsidian-900 border border-gold-500/60 flex items-center justify-center shadow-lg flex-shrink-0">
                      <img
                        src="/logo.jpg"
                        alt="FYPotret Official Logo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Dots Indicator */}
              <div className="flex items-center justify-center gap-2 mt-4 mb-3">
                {FEATURED_SHOTS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentShotIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentShotIndex
                        ? 'w-7 bg-gold-400'
                        : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                    }`}
                    aria-label={`Lihat karya ke-${idx + 1}`}
                  />
                ))}
              </div>

              {/* Clean Bottom Trust Badges (Terpisah rapi, tidak menabrak foto!) */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-zinc-300">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900/80 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="truncate">Arah Gaya Santai & Luwes</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-900/80 border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
                  <span className="truncate">Konsultasi Konsep Gratis</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
