import React from 'react';

export const BackgroundDecoration: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* 1. Subtle Camera Rule-of-Thirds & Focus Dot Grid Pattern */}
      <div className="absolute inset-0 bg-camera-grid opacity-35" />

      {/* 2. Soft Amber & Orange Bokeh Orbs (Keeps dark dominant, subtle warm presence) */}
      {/* Top Left Warm Bokeh (Hero Area) */}
      <div className="absolute -top-24 -left-24 w-[380px] sm:w-[680px] h-[380px] sm:h-[680px] bg-gradient-to-br from-amber-500/24 via-orange-500/15 to-transparent rounded-full blur-[140px] animate-pulse-subtle" />

      {/* Center Right Warm Bokeh (Gallery Area) */}
      <div className="absolute top-[35%] -right-24 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-gradient-to-bl from-amber-600/20 via-orange-500/12 to-transparent rounded-full blur-[140px]" />

      {/* Mid Left Soft Bronze/Orange Orb (Pricing Area) */}
      <div className="absolute top-[65%] -left-28 w-[360px] sm:w-[620px] h-[360px] sm:h-[620px] bg-gradient-to-tr from-amber-500/20 via-orange-600/12 to-transparent rounded-full blur-[150px]" />

      {/* Bottom Center Golden/Orange Glow (Testimonials & Footer Area) */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[420px] sm:w-[750px] h-[300px] sm:h-[450px] bg-gradient-to-t from-amber-500/22 via-orange-600/14 to-transparent rounded-full blur-[130px]" />

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
