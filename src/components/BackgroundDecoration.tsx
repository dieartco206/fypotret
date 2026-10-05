import React from 'react';

export const BackgroundDecoration: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* 1. Subtle Camera Rule-of-Thirds & Focus Dot Grid Pattern */}
      <div className="absolute inset-0 bg-camera-grid opacity-50" />

      {/* Global Warm Orange Ambient Lighting Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-600/25 via-orange-900/15 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-600/20 via-amber-900/10 to-transparent" />

      {/* 2. Golden Amber & Vibrant Orange Ambient Glow Orbs */}
      {/* Top Left Bright Warm Bokeh (Hero Area) */}
      <div className="absolute -top-20 -left-20 w-[450px] sm:w-[800px] h-[450px] sm:h-[800px] bg-gradient-to-br from-amber-500/45 via-orange-500/35 to-amber-700/10 rounded-full blur-[130px] animate-pulse-subtle" />

      {/* Top Right Orange Glow Accent (Hero & Gallery Transition) */}
      <div className="absolute top-[10%] -right-20 w-[400px] sm:w-[650px] h-[400px] sm:h-[650px] bg-gradient-to-bl from-orange-500/35 via-amber-500/25 to-transparent rounded-full blur-[130px]" />

      {/* Center Left Warm Amber Glow (Gallery Area) */}
      <div className="absolute top-[35%] -left-24 w-[420px] sm:w-[750px] h-[420px] sm:h-[750px] bg-gradient-to-tr from-amber-500/40 via-orange-600/30 to-transparent rounded-full blur-[140px]" />

      {/* Center Right Golden Bokeh (Pricing Area) */}
      <div className="absolute top-[60%] -right-24 w-[450px] sm:w-[800px] h-[450px] sm:h-[800px] bg-gradient-to-tl from-orange-500/40 via-amber-500/30 to-transparent rounded-full blur-[140px]" />

      {/* Bottom Center Rich Golden Glow (Testimonials & Footer Area) */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[550px] sm:w-[950px] h-[400px] sm:h-[600px] bg-gradient-to-t from-amber-500/40 via-orange-500/30 to-transparent rounded-full blur-[130px]" />

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
