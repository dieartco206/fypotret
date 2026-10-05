import React from 'react';
import { MessageCircle, Clock, ShieldCheck, Calendar, Zap, Palette, MapPin } from 'lucide-react';

interface CtaBannerProps {
  onOpenBooking: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative isolate py-20 sm:py-28 overflow-hidden border-y-2 border-gold-500/40 shadow-2xl">
      {/* High-Impact Photography Background with Golden Sunset Sky */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=85"
          alt="Graduation and Wedding Celebration Sky"
          className="w-full h-full object-cover object-center filter brightness-85 contrast-115 scale-105 animate-ken-burns"
        />
        {/* Cinematic Golden Amber Vignette */}
        <div className="absolute inset-0 bg-[#070709]/70 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian-950/90 via-transparent to-obsidian-950/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-obsidian-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/25 via-transparent to-obsidian-950/80" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-gold-500/10">
          <Clock className="w-4 h-4 text-gold-400" />
          <span>Yuk Amankan Tanggalmu Lebih Awal!</span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
          Hari Bahagia Cuma Sekali Seumur Hidup,{' '}
          <span className="italic font-normal text-gold-gradient block sm:inline">
            Jangan Sampai Nyesel
          </span>{' '}
          Nggak Didokumentasiin.
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base lg:text-lg text-zinc-200 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
          Jadwal akhir pekan dan musim wisuda cepet banget penuhnya! Mau tanya rekomendasi tempat foto estetik, cocokin tema baju, atau diskusi rundown acara? Bebas ngobrol bareng tim fotografer kita, gratis kok.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="relative overflow-hidden w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-amber-600 text-obsidian-950 font-extrabold text-sm sm:text-base uppercase tracking-wider shadow-2xl shadow-gold-500/40 hover:shadow-gold-500/60 hover:brightness-110 active:scale-98 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer min-h-[52px] group"
          >
            {/* Shimmer Light Sweep */}
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/45 to-transparent pointer-events-none animate-shimmer-sweep" />
            <MessageCircle className="w-5 h-5 fill-obsidian-950 relative z-10" />
            <span className="relative z-10">Chat WhatsApp Sekarang</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-zinc-300 mt-2 sm:mt-0">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Bebas Konsultasi Konsep & Moodboard</span>
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10 text-xs text-zinc-300">
          <div className="flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4 text-gold-400" />
            <span>Booking Fleksibel</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-gold-400" />
            <span>H+1 All Raw Files</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Palette className="w-4 h-4 text-gold-400" />
            <span>Tone Warna Hangat</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-gold-400" />
            <span>Cover Area Jabodetabek</span>
          </div>
        </div>

      </div>
    </section>
  );
};
