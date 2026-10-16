import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { WORKING_PROCESS, getWhatsAppUrl } from '../data/siteData';

export const WorkingProcessSection: React.FC = () => {
  return (
    <section className="py-16 md:py-22 border-t border-sky-500/15 bg-[#040E22]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="w-8 h-[2px] bg-[#00D2FF] rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D2FF]">
              OUR 4-STEP BLUEPRINT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How We Work With You
          </h2>
          <p className="mt-2.5 text-base text-slate-300 leading-relaxed">
            A structured, collaborative approach designed to get your brand seen, remembered, and chosen.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKING_PROCESS.map((item, idx) => (
            <div
              key={item.step}
              className="relative bg-[#06152D] border border-sky-500/20 hover:border-[#00D2FF]/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 group"
            >
              <div>
                {/* Step badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold font-display text-[#00D2FF]">
                    {item.step}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-[#09224A] px-2.5 py-1 rounded-full border border-sky-400/20">
                    STEP {idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#00D2FF] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-[#38BDF8] font-medium">
                  {item.shortDesc}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.details}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="mt-6 pt-4 border-t border-sky-500/15">
                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  What is included:
                </span>
                <ul className="space-y-1.5">
                  {item.deliverables.map((d, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Process Footer CTA Callout */}
        <div className="mt-10 bg-[#071938] border border-sky-400/25 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h4 className="text-base font-bold text-white">
              Ready to start your growth journey?
            </h4>
            <p className="text-sm text-slate-300 mt-1">
              Let's talk through your business goals, target audience, and current challenges.
            </p>
          </div>
          <a
            href={getWhatsAppUrl('Hello Bright Digitals! I would like to schedule a discovery conversation for my business.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-[#030D20] bg-gradient-to-r from-[#00E1FF] to-[#00B8FF] hover:from-[#38BDF8] hover:to-[#00D2FF] rounded-full shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all whitespace-nowrap shrink-0"
          >
            <span>Start Step 1 (Free Discovery)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
