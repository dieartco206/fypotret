import React from 'react';

export const BackgroundDecoration: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* 1. Subtle Camera Rule-of-Thirds & Focus Dot Grid Pattern */}
      <div className="absolute inset-0 bg-camera-grid opacity-40" />

      {/* 2. Golden Bokeh & Lens Flare Ambient Orbs */}
      {/* Top Left Warm Bokeh (Hero Area) */}
      <div className="absolute -top-24 -left-24 w-[380px] sm:w-[650px] h-[380px] sm:h-[650px] bg-gradient-to-br from-amber-500/20 via-gold-500/15 to-transparent rounded-full blur-[140px] animate-pulse-subtle" />

      {/* Center Right Golden Bokeh (Stories & Gallery Area) */}
      <div className="absolute top-[35%] -right-28 w-[320px] sm:w-[580px] h-[320px] sm:h-[580px] bg-gradient-to-bl from-amber-600/18 via-yellow-500/12 to-transparent rounded-full blur-[140px]" />

      {/* Mid Left Soft Bronze Orb (Pricing Area) */}
      <div className="absolute top-[65%] -left-32 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-amber-500/18 via-orange-600/10 to-transparent rounded-full blur-[150px]" />

      {/* Bottom Center Golden Glow (Testimonials & Footer) */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[400px] sm:w-[700px] h-[300px] sm:h-[450px] bg-gradient-to-t from-gold-500/15 via-amber-600/10 to-transparent rounded-full blur-[120px]" />

      {/* 3. Luxury Lens Aperture & Golden Rings Watermark */}
      <div className="absolute top-40 right-10 w-96 h-96 opacity-[0.06] hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full text-gold-400 stroke-current animate-spin" style={{ animationDuration: '90s' }}>
          <circle cx="100" cy="100" r="95" fill="none" strokeWidth="0.8" strokeDasharray="4 6" />
          <circle cx="100" cy="100" r="75" fill="none" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="50" fill="none" strokeWidth="1" strokeDasharray="2 8" />
          <line x1="100" y1="5" x2="100" y2="195" strokeWidth="0.4" />
          <line x1="5" y1="100" x2="195" y2="100" strokeWidth="0.4" />
        </svg>
      </div>

      <div className="absolute top-[60%] left-8 w-80 h-80 opacity-[0.05] hidden lg:block">
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
