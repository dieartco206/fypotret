import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, CalendarCheck } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Karya', href: '#gallery' },
    { name: 'Layanan', href: '#services' },
    { name: 'Paket Harga', href: '#pricing' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-obsidian-950/85 backdrop-blur-md border-b border-white/5 py-3 shadow-2xl'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden bg-obsidian-900 border-2 border-gold-500/80 flex items-center justify-center shadow-lg shadow-gold-500/20 group-hover:border-gold-400 group-hover:scale-105 transition-all duration-300">
              <img
                src="/logo.jpg"
                alt="FYPotret Official Logo"
                className="w-full h-full object-cover"
              />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-gold-400 rounded-full animate-ping opacity-75" />
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-xl sm:text-2xl font-black tracking-tight font-sans text-gold-400">
                  FYP<span className="text-white font-bold">otret</span>
                </span>
              </div>
              <p className="text-[9px] uppercase tracking-[0.22em] text-zinc-400 font-sans font-medium hidden xs:block">
                Capture Your Moment
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-gold-400 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://instagram.com/fypotretid"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-pink-400 transition-all duration-200 border border-white/5"
              aria-label="Instagram FYPotret"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenBooking}
              className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 fill-obsidian-950" />
              <span>Reservasi</span>
            </button>
          </div>

          {/* Mobile Menu Button (Apple HIG / Android 44x44px touch target) */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenBooking}
              className="p-2.5 rounded-full bg-gold-500 text-obsidian-950 font-bold shadow-md shadow-gold-500/20 active:scale-95 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Reservasi WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-obsidian-950" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg bg-zinc-900/80 text-zinc-300 border border-white/10 active:bg-zinc-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-obsidian-900/95 backdrop-blur-xl border-b border-white/10 px-4 pt-3 pb-6 animate-fade-in">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-medium text-zinc-200 hover:text-gold-400 hover:bg-white/5 active:bg-white/10 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-gold-500">→</span>
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 font-bold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20 active:scale-98"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Reservasi Jadwal</span>
              </button>

              <a
                href="https://instagram.com/fypotretid"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-white/5 text-zinc-300 hover:text-white text-sm font-medium flex items-center justify-center gap-2 border border-white/5"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>Follow @fypotretid di Instagram</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
