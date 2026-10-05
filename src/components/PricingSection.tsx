import React, { useState } from 'react';
import { PRICING_PACKAGES, type PricingPackage } from '../data/portfolioData';
import { Check, Camera, Flame, Clock, HardDrive, MessageCircle, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPackage: (pkg: PricingPackage) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'graduation' | 'wedding' | 'prewedding' | 'birthday'>('all');

  const filteredPackages = selectedCategory === 'all'
    ? PRICING_PACKAGES
    : PRICING_PACKAGES.filter((p) => p.category === selectedCategory);

  const filterTabs = [
    { id: 'all', label: 'Semua' },
    { id: 'graduation', label: 'Wisuda' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'prewedding', label: 'Prewed' },
    { id: 'birthday', label: 'Birthday' },
  ] as const;

  return (
    <section id="pricing" className="py-16 sm:py-24 border-t border-gold-500/20 relative isolate overflow-hidden">
      {/* Real Photography Backdrop for Pricing Section */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=2000&q=85"
          alt="Wedding Celebration Atmosphere"
          className="w-full h-full object-cover object-center scale-105 filter brightness-100 contrast-105"
        />
        <div className="absolute inset-0 bg-obsidian-950/65 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950/80 via-transparent to-obsidian-950/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-400/20 via-transparent to-transparent" />
      </div>

      {/* Subtle Champagne Gold Center Aura behind pricing cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[800px] h-[550px] sm:h-[800px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-gold-400/24 via-amber-400/14 to-transparent rounded-full blur-[95px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Investasi & Pilihan Paket</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Paket Foto Fleksibel dengan Hasil Optimal
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 font-sans">
            Harga transparan tanpa biaya tersembunyi. Seluruh file master resolusi tinggi langsung kami unggah ke Google Drive Anda setelah sesi selesai.
          </p>

          {/* Category Tabs */}
          <div className="flex sm:flex-wrap items-center justify-start sm:justify-center gap-2 mt-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none no-scrollbar">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer min-h-[40px] flex-shrink-0 whitespace-nowrap ${
                  selectedCategory === tab.id
                    ? 'bg-gold-500 text-obsidian-950 font-bold shadow-md shadow-gold-500/20'
                    : 'bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredPackages.map((pkg, index) => {
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
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 text-obsidian-950 font-black text-xs uppercase tracking-wider shadow-md shadow-gold-500/30 flex items-center gap-1.5 whitespace-nowrap z-10">
                    <Flame className="w-3.5 h-3.5 fill-obsidian-950 text-obsidian-950 flex-shrink-0" />
                    <span>Favorit</span>
                  </div>
                )}

                {/* Package Title & Tagline with identical fixed height so price is 100% sebaris */}
                <div className="h-[76px] sm:h-[80px] mb-5 flex flex-col justify-start">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white truncate" title={pkg.title}>
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold font-serif text-gold-400 tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-zinc-400 font-sans">/ sesi</span>
                  </div>
                </div>

                {/* Key Spec Badges */}
                <div className="space-y-2.5 mb-6 text-xs text-zinc-300">
                  <div className="flex items-start gap-2 p-2.5 rounded-lg bg-zinc-900/80 border border-white/5">
                    <Clock className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Durasi:</strong> {pkg.duration}</span>
                  </div>
                  <div className="flex items-start gap-2 p-2.5 rounded-lg bg-zinc-900/80 border border-white/5">
                    <HardDrive className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Output:</strong> {pkg.deliverables}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-8 flex-grow">
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
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
                  className={`w-full py-3.5 px-5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer min-h-[46px] ${
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
            Membutuhkan paket khusus untuk <strong>Event Perusahaan / Turnamen / Seminar</strong>?
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20Admin%20FYPotret%2C%20saya%20ingin%20konsultasi%20paket%20event..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 text-xs sm:text-sm font-bold mt-2 underline underline-offset-4"
          >
            Konsultasikan penawaran dan proposal event bersama tim kami →
          </a>
        </div>

      </div>
    </section>
  );
};
