import React from 'react';
import { PRICING_PACKAGES, CONTACT_INFO, type PricingPackage } from '../data/portfolioData';
import { Check, Camera, Flame, Clock, HardDrive, MessageCircle, ArrowRight, Car } from 'lucide-react';

interface PricingSectionProps {
  onSelectPackage: (pkg: PricingPackage) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  return (
    <section id="pricing" className="py-16 sm:py-24 relative isolate overflow-hidden">
      {/* Real Photography Backdrop for Pricing Section */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=75"
          alt="Wedding Celebration Atmosphere"
          className="hidden sm:block w-full h-full object-cover object-center scale-105"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-obsidian-950/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/80 via-transparent to-obsidian-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-400/20 via-transparent to-transparent" />
      </div>

      {/* Subtle Champagne Gold Center Aura behind pricing cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[800px] h-[550px] sm:h-[800px] bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.18)_0%,_rgba(245,158,11,0.06)_40%,_transparent_70%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Investasi & Pilihan Paket</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Paket Dokumentasi Fleksibel & Terjangkau
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 font-sans">
            Harga transparan, sudah termasuk transport area Jabodetabek. Seluruh file master RAW + edit dikirim langsung via Google Drive.
          </p>
        </div>

        {/* Pricing Grid - 2 Columns on Desktop & Tablet (2 x 2 Balanced Grid), 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
          {PRICING_PACKAGES.map((pkg, index) => {
            return (
              <div
                key={pkg.id}
                style={{ animationDelay: `${index * 150}ms` }}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300 card-luxury animate-card-enter hover:-translate-y-1.5 ${
                  pkg.isPopular
                    ? 'border-gold-400/90 shadow-2xl shadow-gold-500/20 ring-1 ring-gold-400/50'
                    : 'hover:border-gold-500/50'
                }`}
              >
                {/* Popular Pill */}
                {pkg.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 text-obsidian-950 font-black text-xs uppercase tracking-wider shadow-md shadow-gold-500/30 flex items-center gap-1.5 whitespace-nowrap z-10">
                    <Flame className="w-3.5 h-3.5 fill-obsidian-950 text-obsidian-950 flex-shrink-0" />
                    <span>Favorit Klien</span>
                  </div>
                )}

                {/* Free Transport Pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4 self-start">
                  <Car className="w-3.5 h-3.5" />
                  <span>Free Transport Jabodetabek</span>
                </div>

                {/* Package Title & Tagline */}
                <div className="mb-5 flex flex-col justify-start">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-tight">
                    {pkg.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-extrabold font-serif text-gold-400 tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs sm:text-sm text-zinc-400 font-sans">/ acara</span>
                  </div>
                </div>

                {/* Key Spec Badges */}
                <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-zinc-300">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/80 border border-white/5">
                    <Clock className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Durasi:</strong> {pkg.duration}</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-900/80 border border-white/5">
                    <HardDrive className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Output:</strong> {pkg.deliverables}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-8 flex-grow">
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
                    Fasilitas Termasuk:
                  </div>
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-gold-400" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA Button */}
                <button
                  onClick={() => onSelectPackage(pkg)}
                  className={`w-full py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer min-h-[46px] ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 shadow-lg shadow-gold-500/25 hover:brightness-110 active:scale-98'
                      : 'bg-white/5 hover:bg-gold-500/20 text-zinc-200 hover:text-gold-300 border border-white/10 hover:border-gold-500/30 active:scale-98'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Pilih Paket Ini</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom Event Note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-zinc-900/60 border border-white/5 max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-zinc-300">
            Butuh penyesuaian kebutuhan khusus atau dokumentasi <strong>Event Perusahaan / Komunitas</strong>?
          </p>
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Halo%20Admin%20FYPotret%2C%20saya%20ingin%20konsultasi%20paket%20dokumentasi%20acara...`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 text-xs sm:text-sm font-bold mt-2 underline underline-offset-4"
          >
            Konsultasikan langsung bersama Admin FYPotret via WhatsApp →
          </a>
        </div>

      </div>
    </section>
  );
};
