import React from 'react';

export const BackgroundDecoration: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* 1. Subtle Camera Rule-of-Thirds & Focus Dot Grid Pattern */}
      <div className="absolute inset-0 bg-camera-grid opacity-40" />

      {/* 2. Champagne Gold Lens Flares & Optical Bokeh (Harmonious Luxury, Not pitch-black) */}
      {/* Top Left Warm Champagne Gold Halo (Hero Headline Area) */}
      <div className="absolute -top-16 -left-16 w-[520px] sm:w-[800px] h-[520px] sm:h-[800px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-gold-400/26 via-amber-500/14 to-transparent rounded-full blur-[95px] animate-pulse-subtle" />

      {/* Center Right Optical Bokeh (Gallery Area) */}
      <div className="absolute top-[35%] -right-16 w-[450px] sm:w-[720px] h-[450px] sm:h-[720px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-amber-400/22 via-gold-500/12 to-transparent rounded-full blur-[95px]" />

      {/* Mid Left Subtle Gold Flare (Pricing Area) */}
      <div className="absolute top-[65%] -left-16 w-[480px] sm:w-[740px] h-[480px] sm:h-[740px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-gold-400/22 via-amber-500/12 to-transparent rounded-full blur-[95px]" />

      {/* Bottom Center Champagne Gold Halo (Testimonials & Footer Area) */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[520px] sm:w-[850px] h-[360px] sm:h-[520px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold-400/24 via-amber-400/12 to-transparent rounded-full blur-[90px]" />

      {/* 3. Luxury Lens Aperture & Golden Rings Watermark */}
      <div className="absolute top-40 right-10 w-96 h-96 opacity-[0.08] hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold-400 stroke-current animate-spin" style={{ animationDuration: '90s' }}>
          <circle cx="100" cy="100" r="95" fill="none" strokeWidth="0.8" strokeDasharray="4 6" />
          <circle cx="100" cy="100" r="75" fill="none" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="50" fill="none" strokeWidth="1" strokeDasharray="2 8" />
          <line x1="100" y1="5" x2="100" y2="195" strokeWidth="0.4" />
          <line x1="5" y1="100" x2="195" y2="100" strokeWidth="0.4" />
        </svg>
      </div>

      <div className="absolute top-[60%] left-8 w-80 h-80 opacity-[0.06] hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold-400 stroke-current">
          <circle cx="100" cy="100" r="90" fill="none" strokeWidth="0.8" />
          <circle cx="100" cy="100" r="65" fill="none" strokeWidth="0.5" strokeDasharray="6 6" />
          <polygon points="100,20 170,140 30,140" fill="none" strokeWidth="0.5" />
          <polygon points="100,180 30,60 170,60" fill="none" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Subtle Noise / 35mm Film Grain Simulation */}
      <div className="absolute inset-0 bg-film-grain opacity-[0.03]" />
    </div>
  );
};
