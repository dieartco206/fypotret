import React, { useState } from 'react';
import { PRICING_PACKAGES, type PricingPackage } from '../data/portfolioData';
import { Check, Sparkles, Clock, HardDrive, MessageCircle, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectPackage: (pkg: PricingPackage) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'graduation' | 'wedding' | 'prewedding' | 'birthday'>('all');

  const filteredPackages = selectedCategory === 'all'
    ? PRICING_PACKAGES
    : PRICING_PACKAGES.filter((p) => p.category === selectedCategory);

  const filterTabs = [
    { id: 'all', label: 'Semua Paket' },
    { id: 'graduation', label: 'Wisuda (Graduation)' },
    { id: 'wedding', label: 'Wedding & Akad' },
    { id: 'prewedding', label: 'Prewedding' },
    { id: 'birthday', label: 'Birthday & Kids' },
  ] as const;

  return (
    <section id="pricing" className="py-16 sm:py-24 border-t border-white/5 relative overflow-hidden">
      {/* Real Photography Backdrop for Pricing Section */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none select-none">
        <img
          src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=2000&q=80"
          alt="Wedding Celebration Atmosphere"
          className="w-full h-full object-cover object-center opacity-25 filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950 via-obsidian-950/92 to-obsidian-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/12 via-transparent to-transparent" />
      </div>

      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Pricelist Transparan & Jujur</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Pilihan Paket Fotografi FYPotret
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 font-sans">
            Harga transparan tanpa biaya tersembunyi. Semua paket sudah termasuk akses Google Drive all raw files.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer min-h-[40px] ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPackages.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300 card-luxury ${
                  pkg.isPopular
                    ? 'border-2 border-gold-500/80 shadow-2xl shadow-gold-500/20 scale-[1.02] ring-1 ring-gold-500/30'
                    : 'hover:border-gold-500/50'
                }`}
              >
                {/* Popular Pill */}
                {pkg.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-gold-500 to-amber-500 text-obsidian-950 font-extrabold text-[11px] uppercase tracking-wider shadow-md shadow-gold-500/30 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-obsidian-950" />
                    Paling Favorit Klien
                  </div>
                )}

                {/* Package Title & Tagline */}
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 min-h-[32px] leading-relaxed">
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
            Butuh paket kustom untuk <strong>Turnamen Olahraga / Event Kantor PLN / Komunitas</strong>?
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20FYPotret%2C%20saya%20ingin%20tanya%20paket%20custom%20untuk%20event..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-gold-400 hover:text-gold-300 text-xs sm:text-sm font-bold mt-2 underline underline-offset-4"
          >
            Hubungi kami untuk penawaran proposal event custom →
          </a>
        </div>

      </div>
    </section>
  );
};
