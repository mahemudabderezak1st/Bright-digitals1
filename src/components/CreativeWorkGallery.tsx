import React from 'react';
import {
  Sparkles,
} from 'lucide-react';
import { CREATIVE_WORK_VIDEOS } from '../data/siteData';
import { CleanVideoPlayer } from './CleanVideoPlayer';

export const CreativeWorkGallery: React.FC = () => {
  return (
    <section id="creative-work" className="py-16 md:py-24 border-t border-sky-500/15 bg-[#030D22] relative overflow-hidden">
      {/* Background radial spotlight */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] rounded-full pointer-events-none opacity-15"
        style={{
          background: 'radial-gradient(ellipse, #00D2FF 0%, #1E40AF 45%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="w-8 h-[2px] bg-[#00D2FF] rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D2FF]">
              OUR CREATIVE WORK
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            Our Creative <span className="text-[#00D2FF]">Video Gallery</span>
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            High-impact reels and creative short videos designed to Engage your audience,
            build brand trust, and turn viewers into paying customers across TikTok,
            Instagram, and Facebook.
          </p>
        </div>

        {/* 9:16 Video Grid (3 balanced vertical cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 max-w-5xl mx-auto items-start">
          {CREATIVE_WORK_VIDEOS.map((video) => (
            <div
              key={video.id}
              className="bg-[#06152E] hover:bg-[#071936] border border-sky-500/20 rounded-2xl p-2 sm:p-2.5 transition-all duration-200 hover:border-[#00D2FF]/60 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_14px_40px_rgba(0,210,255,0.2)]"
            >
              {/* 9:16 Clean Player Frame */}
              <CleanVideoPlayer
                videoUrl={video.videoUrl}
                posterUrl={video.posterUrl}
                aspectRatio="9:16"
                showInfoOverlay={false}
                className="w-full"
              />
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#071B3E] via-[#092454] to-[#061738] border border-sky-500/25 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#00D2FF] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Short-Form Video Production</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Want Similar Creative Videos for Your Business?
            </h3>
            <p className="mt-2 text-sm text-slate-200 leading-relaxed">
              We plan, shoot, edit, and caption short video content tailored for Addis Ababa
              and Ethiopian consumer trends.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-[#030D20] bg-gradient-to-r from-[#00E1FF] to-[#00B8FF] hover:from-[#38BDF8] hover:to-[#00D2FF] rounded-full shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all whitespace-nowrap shrink-0 self-start md:self-center"
          >
            <span>Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
};
