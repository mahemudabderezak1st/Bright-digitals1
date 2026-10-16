import React from 'react';
import { Target, Compass, Layers, Users } from 'lucide-react';
import { STRATEGIC_PILLARS } from '../data/siteData';

const PILLAR_ICONS = [
  <Target key="target" className="w-5 h-5 text-[#00D2FF]" />,
  <Compass key="compass" className="w-5 h-5 text-[#38BDF8]" />,
  <Layers key="layers" className="w-5 h-5 text-[#00E5FF]" />,
  <Users key="users" className="w-5 h-5 text-[#00C8FF]" />,
];

export const TrustPillarsBar: React.FC = () => {
  return (
    <section
      aria-label="Bright Digitals Strategic Principles"
      className="relative py-10 md:py-12 bg-[#05132C] border-b border-sky-500/20 overflow-hidden"
    >
      {/* Subtle radial cyan highlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(0, 210, 255, 0.08) 0%, rgba(5, 19, 44, 0) 75%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#00D2FF] block mb-1">
            HOW WE OPERATE
          </span>
          <h2 className="text-lg sm:text-xl font-bold text-white">
            Strategic principles built on clarity, local insight, and measurable impact.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {STRATEGIC_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#071938]/80 hover:bg-[#0A224A] border border-sky-400/20 hover:border-[#00D2FF]/50 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#092248] border border-sky-400/30 flex items-center justify-center mb-3.5 shadow-[0_0_15px_rgba(0,210,255,0.15)]">
                  {PILLAR_ICONS[idx % PILLAR_ICONS.length]}
                </div>
                <h3 className="text-base font-bold text-white leading-snug">
                  {pillar.title}
                </h3>
                <span className="text-xs font-semibold text-[#00D2FF] block mt-0.5">
                  {pillar.subtitle}
                </span>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
