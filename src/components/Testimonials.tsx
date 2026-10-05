import React from 'react';
import { TESTIMONIALS, FAQ_ITEMS } from '../data/portfolioData';
import { Star, Quote, ChevronDown, Sparkles, MessageCircle } from 'lucide-react';

interface TestimonialsProps {
  onOpenBooking: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenBooking }) => {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 relative isolate overflow-hidden">
      {/* Real Photography Backdrop for Testimonials Section */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=85"
          alt="Event and Reception Atmosphere"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-120"
        />
        <div className="absolute inset-0 bg-obsidian-950/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian-950 via-transparent to-obsidian-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/12 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kesan & Cerita Klien</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            Dipercaya Ratusan Klien di Jabodetabek
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Lihat apa kata mereka tentang pengalaman pemotretan bersama tim FYPotret.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-20">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl p-6 card-luxury transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-gold-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-zinc-600" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-gold-500/40"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-[11px] text-zinc-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Accordion Section */}
        <div id="faq" className="max-w-3xl mx-auto pt-10 border-t border-white/10">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-white">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Segala hal penting yang perlu Anda ketahui sebelum sesi pemotretan.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-obsidian-900/80 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-white hover:text-gold-400 transition-colors cursor-pointer min-h-[48px]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gold-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-3 animate-fade-in">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick FAQ CTA */}
          <div className="mt-8 text-center">
            <p className="text-xs text-zinc-400 mb-3">Punya pertanyaan lain yang belum terjawab?</p>
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-gold-500/20 text-zinc-200 hover:text-gold-300 border border-white/10 hover:border-gold-500/30 text-xs font-semibold transition-all cursor-pointer min-h-[44px]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-gold-400" />
              <span>Tanya Admin FYPotret Langsung di WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
