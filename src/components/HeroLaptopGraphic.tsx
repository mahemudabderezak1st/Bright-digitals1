import React from 'react';
import { Target, BarChart3, Megaphone } from 'lucide-react';

/**
 * Recreates the exact Hero right-column graphic from the design reference:
 * - Glowing deep blue circular backdrop & subtle dot grid
 * - Sleek perspective laptop displaying a rising cyan line chart & blue bar chart
 * - Floating "More Visibility" and "Higher Engagement" glass cards
 * - Floating Instagram, Megaphone, and Facebook 3D-style icon tiles
 * - Small green plant in a white pot beside the laptop with desk reflection
 */
export const HeroLaptopGraphic: React.FC = () => {
  return (
    <div className="relative w-full max-w-[540px] mx-auto select-none py-4 sm:py-6">
      {/* Ambient blue radial spotlight behind the laptop */}
      <div
        className="absolute inset-0 -m-6 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 54% 48%, rgba(0, 180, 255, 0.28) 0%, rgba(29, 78, 216, 0.18) 38%, rgba(4, 15, 37, 0) 72%)',
        }}
      />

      {/* Circular orbital ring & background dome */}
      <div className="relative aspect-[5/4] w-full flex items-center justify-center">
        {/* Subtle outer orbital arc */}
        <div className="absolute w-[88%] h-[88%] rounded-full border border-sky-400/20 pointer-events-none" />
        <div
          className="absolute w-[74%] h-[74%] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 35%, rgba(0, 168, 255, 0.22) 0%, rgba(10, 32, 74, 0.65) 65%, rgba(4, 15, 37, 0) 100%)',
          }}
        />

        {/* Top-right decorative dot grid */}
        <div
          className="absolute top-3 right-8 w-16 h-12 opacity-35 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#38BDF8 1.5px, transparent 1.5px)',
            backgroundSize: '10px 10px',
          }}
        />

        {/* Mid-left decorative dot grid */}
        <div
          className="absolute top-1/3 left-12 w-12 h-8 opacity-25 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#38BDF8 1.5px, transparent 1.5px)',
            backgroundSize: '9px 9px',
          }}
        />

        {/* =====================================================
            FLOATING CARD 1: "More Visibility" (Top Left)
        ===================================================== */}
        <div className="absolute top-2 left-3 sm:left-6 z-20 flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#0A214A]/90 backdrop-blur-md border border-sky-400/35 shadow-[0_10px_28px_rgba(0,0,0,0.45)]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0072FF] flex items-center justify-center text-[#040F25] shadow-[0_0_12px_rgba(0,212,255,0.6)] shrink-0">
            <Target className="w-4 h-4 stroke-[2.4]" />
          </div>
          <div className="leading-tight pr-1">
            <span className="block text-xs sm:text-sm font-semibold text-white">
              More Visibility
            </span>
            <span className="block text-xs sm:text-sm font-semibold text-sky-100">
              Growing Reach
            </span>
          </div>
        </div>

        {/* =====================================================
            FLOATING CARD 2: "Higher Engagement" (Top Right)
        ===================================================== */}
        <div className="absolute top-10 sm:top-12 right-0 sm:right-1 z-20 flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-[#0A214A]/90 backdrop-blur-md border border-sky-400/35 shadow-[0_10px_28px_rgba(0,0,0,0.45)]">
          <div className="w-8 h-8 rounded-lg bg-[#071633] border border-sky-400/30 flex items-center justify-center text-[#00D4FF] shrink-0">
            <BarChart3 className="w-4 h-4 stroke-[2.4]" />
          </div>
          <div className="leading-tight pr-1">
            <span className="block text-xs sm:text-sm font-semibold text-white">
              Higher Engagement
            </span>
            <span className="block text-xs sm:text-sm font-semibold text-sky-100">
              Active Audience
            </span>
          </div>
        </div>

        {/* =====================================================
            FLOATING ICON TILE: TikTok (Upper Left)
        ===================================================== */}
        <a
          href="https://tiktok.com/@brightdigitalss"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bright Digitals on TikTok"
          className="absolute top-[23%] left-0 sm:left-2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#00D4FF] via-[#0284C7] to-[#1E3A8A] border border-sky-300/50 shadow-[0_8px_20px_rgba(0,212,255,0.45)] flex items-center justify-center text-white transition-transform hover:scale-110"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 sm:w-5.5 sm:h-5.5"
            aria-hidden="true"
          >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.71a8.21 8.21 0 0 0 4.82 1.55v-3.57h-.05Z" />
          </svg>
        </a>

        {/* =====================================================
            FLOATING ICON TILE 1: Instagram (Left)
        ===================================================== */}
        <a
          href="https://instagram.com/brightdigitalss"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bright Digitals on Instagram"
          className="absolute top-[44%] left-1 sm:left-3 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] border border-sky-300/40 shadow-[0_8px_20px_rgba(29,78,216,0.55)] flex items-center justify-center text-white transition-transform hover:scale-110"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>

        {/* =====================================================
            FLOATING ICON TILE 2: Megaphone (Right)
        ===================================================== */}
        <div className="absolute top-[47%] right-2 sm:right-4 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#00C8FF] to-[#2563EB] border border-sky-300/50 shadow-[0_8px_24px_rgba(0,200,255,0.45)] flex items-center justify-center text-white">
          <Megaphone className="w-6 h-6 sm:w-7 sm:h-7 -rotate-12 stroke-[2.2]" />
        </div>

        {/* =====================================================
            FLOATING ICON TILE 3: Facebook (Bottom Right)
        ===================================================== */}
        <a
          href="https://www.facebook.com/share/19TZbjYhx9/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Bright Digitals on Facebook"
          className="absolute bottom-[14%] right-6 sm:right-10 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1E40AF] border border-sky-300/40 shadow-[0_8px_20px_rgba(30,64,175,0.6)] flex items-center justify-center text-white transition-transform hover:scale-110"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6"
            aria-hidden="true"
          >
            <path d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V6.65c0-1.05.29-1.73 1.76-1.73Z" />
          </svg>
        </a>

        {/* =====================================================
            SMALL POTTED PLANT (Bottom Left beside Laptop)
        ===================================================== */}
        <div className="absolute bottom-[17%] left-4 sm:left-8 z-10 flex flex-col items-center">
          {/* Green leaves */}
          <svg viewBox="0 0 60 50" className="w-12 h-10 sm:w-14 sm:h-12 -mb-1.5">
            <path
              d="M30 48 C30 30, 14 22, 10 8 C22 12, 28 24, 30 48 Z"
              fill="#10B981"
            />
            <path
              d="M30 48 C28 26, 22 14, 30 2 C37 14, 32 28, 30 48 Z"
              fill="#34D399"
            />
            <path
              d="M30 48 C32 30, 46 22, 50 10 C38 14, 32 26, 30 48 Z"
              fill="#059669"
            />
            <path
              d="M28 48 C20 36, 8 34, 4 24 C16 26, 24 34, 28 48 Z"
              fill="#047857"
            />
            <path
              d="M32 48 C40 36, 52 34, 56 24 C44 26, 36 34, 32 48 Z"
              fill="#10B981"
            />
          </svg>
          {/* White/sky ceramic pot */}
          <div className="w-8 sm:w-9 h-7 sm:h-8 rounded-b-lg rounded-t-sm bg-gradient-to-b from-slate-100 to-sky-200 border border-sky-300/50 shadow-md" />
        </div>

        {/* =====================================================
            CENTRAL LAPTOP ILLUSTRATION
        ===================================================== */}
        <div className="relative z-10 w-[72%] sm:w-[70%] mt-6">
          {/* Laptop Screen Lid */}
          <div className="rounded-t-2xl bg-[#07152E] p-2 sm:p-2.5 border-2 border-sky-400/40 shadow-[0_0_40px_rgba(0,180,255,0.22)]">
            {/* Inner Screen Display */}
            <div className="aspect-[16/10] w-full rounded-lg bg-gradient-to-br from-[#06132C] via-[#091E46] to-[#051026] border border-sky-400/20 p-3 sm:p-4 flex flex-col justify-between overflow-hidden relative">
              {/* Top Window Header Bar */}
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-sky-300" />
                <div className="h-1.5 w-10 rounded-full bg-sky-300/80" />
              </div>

              {/* Screen Body: Sidebar + Chart Area */}
              <div className="grid grid-cols-12 gap-3 my-auto pt-2 items-end">
                {/* Left Sidebar items */}
                <div className="col-span-3 space-y-2 pr-1 border-r border-sky-400/15">
                  {[1, 2, 3, 4, 5].map((row) => (
                    <div key={row} className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-sky-400/70 shrink-0" />
                      <div className="h-1.5 w-full rounded-full bg-sky-400/25" />
                    </div>
                  ))}
                </div>

                {/* Right Analytics Chart */}
                <div className="col-span-9 flex flex-col justify-end">
                  <div className="relative h-24 sm:h-28 w-full flex items-end justify-between px-1 pt-4 border-b border-sky-400/20">
                    {/* Horizontal grid lines */}
                    <div className="absolute inset-x-0 top-3 border-t border-sky-400/10" />
                    <div className="absolute inset-x-0 top-10 border-t border-sky-400/10" />
                    <div className="absolute inset-x-0 top-17 border-t border-sky-400/10" />

                    {/* Rising Cyan Line Graph SVG Overlay */}
                    <svg
                      viewBox="0 0 200 80"
                      className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-10"
                    >
                      <defs>
                        <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#38BDF8" />
                          <stop offset="100%" stopColor="#00E5FF" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 12 62 L 48 45 L 82 54 L 118 30 L 150 38 L 184 10"
                        fill="none"
                        stroke="url(#lineGlow)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Arrowhead at top right */}
                      <path
                        d="M 175 9 L 186 8 L 183 19"
                        fill="none"
                        stroke="#00E5FF"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      {/* Data nodes */}
                      <circle cx="12" cy="62" r="3.5" fill="#00E5FF" />
                      <circle cx="48" cy="45" r="3.5" fill="#00E5FF" />
                      <circle cx="82" cy="54" r="3.5" fill="#00E5FF" />
                      <circle cx="118" cy="30" r="3.5" fill="#00E5FF" />
                      <circle cx="150" cy="38" r="3.5" fill="#00E5FF" />
                    </svg>

                    {/* Vertical Bar Columns */}
                    {[28, 42, 35, 58, 50, 78].map((heightPct, idx) => (
                      <div
                        key={idx}
                        style={{ height: `${heightPct}%` }}
                        className="w-3.5 sm:w-4 rounded-t bg-gradient-to-t from-[#1D4ED8] to-[#00C8FF] opacity-90"
                      />
                    ))}
                  </div>

                  {/* Bottom Mini Summary Pills inside screen */}
                  <div className="grid grid-cols-2 gap-2 mt-2.5">
                    <div className="bg-[#051129]/90 border border-sky-400/20 rounded-md p-1.5 space-y-1">
                      <div className="h-1.5 w-3/4 rounded-full bg-sky-400/60" />
                      <div className="h-1.5 w-1/2 rounded-full bg-sky-400/30" />
                    </div>
                    <div className="bg-[#051129]/90 border border-sky-400/20 rounded-md p-1.5 space-y-1">
                      <div className="h-1.5 w-2/3 rounded-full bg-sky-400/60" />
                      <div className="h-1.5 w-1/2 rounded-full bg-sky-400/30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Laptop Keyboard Base */}
          <div className="relative -mx-4 sm:-mx-6 h-3.5 sm:h-4 rounded-b-xl bg-gradient-to-r from-[#1E3A8A] via-[#38BDF8] to-[#1D4ED8] border-t border-sky-200/50 shadow-[0_12px_28px_rgba(0,180,255,0.35)] flex items-center justify-center">
            <div className="w-12 h-1 rounded-full bg-[#06152E]/60" />
          </div>
        </div>

        {/* Desk Surface Glow Reflection underneath laptop */}
        <div
          className="absolute bottom-3 inset-x-8 h-5 rounded-full blur-md pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(0, 200, 255, 0.38) 0%, rgba(29, 78, 216, 0.15) 55%, transparent 80%)',
          }}
        />
      </div>
    </div>
  );
};
