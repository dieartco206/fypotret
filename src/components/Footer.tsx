import React from 'react';
import { MessageCircle, MapPin, Heart } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="relative isolate bg-obsidian-950 border-t border-gold-500/25 pt-16 pb-12 text-zinc-400 text-xs sm:text-sm overflow-hidden">
      {/* Background Photography Vintage Camera Accent */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none opacity-30">
        <img
          src="https://images.unsplash.com/photo-1495707902641-75cac588d2e9?auto=format&fit=crop&w=1600&q=80"
          alt="Vintage Photography Setup"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/85 to-obsidian-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-500/28 via-orange-500/15 to-transparent" />
      </div>

      {/* Warm Golden/Amber Glow from bottom */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[250px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/30 via-orange-500/16 to-transparent rounded-full blur-[80px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-obsidian-900 border-2 border-gold-500/80 flex items-center justify-center shadow-lg shadow-gold-500/20">
                <img
                  src="/logo.jpg"
                  alt="FYPotret Official Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-black tracking-tight font-sans text-gold-400">
                FYP<span className="text-white font-bold">otret</span>
              </span>
            </div>
            
            <p className="text-zinc-300 max-w-md leading-relaxed mb-4 text-xs sm:text-sm">
              Capturing Love, Joy, & Memories — Jasa fotografi profesional untuk mengabadikan momen Wedding, Prewedding, Wisuda, Ulang Tahun, dan Dokumentasi Event di Jabodetabek.
            </p>

            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Studio Partner & Outdoor Sessions • Jabodetabek Area</span>
            </div>
          </div>

          {/* Col 2: Kategori Layanan */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-serif">
              Layanan Utama
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-300">
              <li><a href="#gallery" className="hover:text-gold-400 transition-colors">Wedding & Akad Nikah</a></li>
              <li><a href="#gallery" className="hover:text-gold-400 transition-colors">Prewedding & Lamaran</a></li>
              <li><a href="#gallery" className="hover:text-gold-400 transition-colors">Wisuda & Kelulusan</a></li>
              <li><a href="#gallery" className="hover:text-gold-400 transition-colors">Ulang Tahun & Anak</a></li>
              <li><a href="#gallery" className="hover:text-gold-400 transition-colors">Dokumentasi Event & Perusahaan</a></li>
            </ul>
          </div>

          {/* Col 3: Media Sosial & Kontak */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-serif">
              Hubungi Kami
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/fypotretid"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-pink-400 transition-all border border-white/5 text-xs"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>Instagram: @fypotretid</span>
              </a>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-200 hover:text-emerald-400 transition-all border border-white/5 text-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: Booking & Konsultasi</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} FYPotret (@fypotretid). All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-zinc-400">
            Dibuat dengan <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400" /> untuk setiap memori berharga.
          </div>
        </div>

      </div>
    </footer>
  );
};
