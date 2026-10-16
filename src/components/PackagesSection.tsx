import React from 'react';
import {
  Check,
  CheckCircle2,
  ArrowRight,
  Crown,
  Sparkles,
  Eye,
  Users,
  BarChart2,
  ShoppingCart,
  Shield,
  Heart,
  Megaphone,
  MessageCircle,
} from 'lucide-react';
import {
  TRANSPARENT_PACKAGES,
  PACKAGE_GOALS,
  PACKAGE_DISCLAIMER,
  PackageTier,
  getWhatsAppUrl,
} from '../data/siteData';

function renderGoalIcon(icon: string, className = 'w-5 h-5') {
  switch (icon) {
    case 'sparkles':
      return <Eye className={className} />;
    case 'users':
      return <Users className={className} />;
    case 'trending':
      return <BarChart2 className={className} />;
    case 'cart':
      return <ShoppingCart className={className} />;
    case 'shield':
      return <Shield className={className} />;
    default:
      return <Sparkles className={className} />;
  }
}

export const PackagesSection: React.FC = () => {
  return (
    <section id="packages" className="py-16 md:py-24 border-t border-sky-500/15 bg-[#030B1C] relative overflow-hidden">
      {/* Background ambient lighting matching the flyer's deep cyan atmosphere */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(ellipse, #00D2FF 0%, #1E3A8A 40%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Matching the Flyer */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] text-[#00D2FF] mb-3">
            Choose Your Growth Plan
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none uppercase font-display drop-shadow-[0_0_30px_rgba(0,210,255,0.4)]">
            TRANSPARENT <span className="text-[#00D2FF]">PACKAGES</span>
          </h2>

          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-[#00D2FF]" />
            <p className="text-xs sm:text-sm md:text-base font-bold tracking-wide text-sky-200">
              “More Engagement • More Followers • More Sales”
            </p>
            <span className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-[#00D2FF]" />
          </div>

          {/* Value Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-300">
            <span className="px-4 py-1.5 rounded-full bg-[#071630] border border-sky-500/30 text-[#00D2FF] shadow-[0_0_12px_rgba(0,210,255,0.15)] font-bold">
              More Engagement
            </span>
            <span className="text-[#00D2FF] font-bold">•</span>
            <span className="px-4 py-1.5 rounded-full bg-[#071630] border border-sky-500/30 text-white shadow-[0_0_12px_rgba(255,255,255,0.1)] font-bold">
              More Followers
            </span>
            <span className="text-[#00D2FF] font-bold">•</span>
            <span className="px-4 py-1.5 rounded-full bg-[#071630] border border-sky-500/30 text-[#00D2FF] shadow-[0_0_12px_rgba(0,210,255,0.15)] font-bold">
              More Sales
            </span>
          </div>
        </div>

        {/* 3 Main Package Cards Matching Flyer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-3">
          {TRANSPARENT_PACKAGES.map((tier: PackageTier) => {
            const isStandard = tier.id === 'standard';
            const isPremium = tier.id === 'premium';

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-200 ${
                  isStandard
                    ? 'bg-gradient-to-b from-[#081B3D] via-[#061633] to-[#040E24] border-2 border-[#00D2FF] shadow-[0_0_40px_rgba(0,210,255,0.3)] ring-1 ring-[#00D2FF]/50'
                    : isPremium
                    ? 'bg-gradient-to-b from-[#0A1D40] via-[#071632] to-[#040E22] border-2 border-sky-500/40 hover:border-[#00D2FF]/70 shadow-[0_0_30px_rgba(0,180,255,0.15)]'
                    : 'bg-gradient-to-b from-[#081938] via-[#061430] to-[#040D20] border-2 border-sky-500/30 hover:border-sky-400/60 shadow-[0_0_25px_rgba(0,0,0,0.4)]'
                }`}
              >
                {/* Floating Top Badge for Standard */}
                {isStandard && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                    <span className="px-4 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-gradient-to-r from-[#00E5FF] to-[#0099FF] text-[#030D20] shadow-[0_0_20px_rgba(0,210,255,0.6)] whitespace-nowrap">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {/* Floating Top Badge for Premium */}
                {isPremium && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-gradient-to-r from-sky-400 to-[#00D2FF] text-[#030D20] shadow-[0_0_20px_rgba(0,210,255,0.4)] whitespace-nowrap">
                      <Crown className="w-3.5 h-3.5 fill-current" />
                      FULL SERVICE
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  {/* Top Price Box Matching Flyer */}
                  <div className="w-full bg-[#051736]/90 border border-sky-400/30 rounded-2xl py-5 px-4 text-center mb-7 shadow-[inset_0_1px_15px_rgba(0,210,255,0.12)]">
                    {/* Package Name Pill */}
                    <div className="inline-flex items-center justify-center px-6 py-1.5 rounded-full bg-gradient-to-r from-[#00D2FF]/20 to-[#0088FF]/30 border border-[#00D2FF]/50 text-xs sm:text-sm font-black uppercase tracking-widest text-[#00D2FF] mb-2.5 shadow-[0_0_14px_rgba(0,210,255,0.2)]">
                      {tier.name}
                    </div>

                    {/* Price with ETB */}
                    <div className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                      {tier.price}{' '}
                      <span className="text-xl sm:text-2xl font-bold text-[#00D2FF]">ETB</span>
                    </div>

                    {/* Billing Period */}
                    <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                      {tier.billingPeriod || '/month'}
                    </div>
                  </div>

                  {/* Categories & Deliverables matching flyer layout */}
                  <div className="space-y-5 flex-1">
                    {tier.categories.map((cat, catIdx) => (
                      <div key={catIdx} className="space-y-2">
                        {/* Category Header with Blue Circular Check Icon */}
                        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white">
                          <div className="w-5 h-5 rounded-full bg-[#00D2FF] flex items-center justify-center text-[#030D20] shrink-0 shadow-[0_0_8px_rgba(0,210,255,0.4)]">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span>{cat.title}</span>
                        </div>

                        {/* Deliverable Items with Checkmarks */}
                        <ul className="space-y-1.5 pl-7">
                          {cat.items.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="flex items-start gap-2 text-xs sm:text-sm text-slate-200 leading-snug"
                            >
                              <Check className="w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5 stroke-[2.5]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer with SELECT PLAN Button */}
                <div className="p-6 sm:p-7 pt-2 bg-[#030B1A]/70 border-t border-sky-500/15">
                  <a
                    href={getWhatsAppUrl(
                      `Hello Bright Digitals! I want to select the ${tier.name} package (${tier.price} ETB/month) for my business.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-black uppercase tracking-wider transition-all duration-150 shadow-[0_0_22px_rgba(0,210,255,0.4)] ${
                      isStandard
                        ? 'bg-gradient-to-r from-[#00E5FF] via-[#00B8FF] to-[#0088FF] hover:from-[#38BDF8] hover:to-[#00D2FF] text-[#030D20]'
                        : 'bg-gradient-to-r from-[#00D2FF] to-[#0077FF] hover:from-[#38BDF8] hover:to-[#0099FF] text-[#030D20]'
                    }`}
                  >
                    <span>SELECT PLAN</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </a>

                  <p className="text-center text-[11px] text-slate-400 mt-2.5">
                    Click to discuss & confirm setup with our team on WhatsApp
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5 Bottom Pillars of Impact (Matches Flyer) */}
        <div className="mt-14 pt-10 border-t border-sky-500/20">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#00D2FF]">
              OUR COMMITMENT WITH EVERY PACKAGE
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {PACKAGE_GOALS.map((goal, idx) => (
              <div
                key={idx}
                className="bg-[#061734] border border-sky-500/20 rounded-2xl p-4 flex flex-col items-center text-center justify-center hover:border-[#00D2FF]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#092248] border border-sky-400/30 flex items-center justify-center text-[#00D2FF] mb-2.5">
                  {renderGoalIcon(goal.icon, 'w-5 h-5')}
                </div>
                <span className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {goal.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Notice & Brand Motto Cards (Matches Flyer Footer) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Advertising & Influencer Fees Notice */}
          <div className="md:col-span-7 bg-[#071836] border border-sky-400/25 rounded-2xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#0A2652] border border-sky-400/30 flex items-center justify-center text-[#00D2FF] shrink-0">
              <Megaphone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                Advertising & Influencer Fees Notice
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {PACKAGE_DISCLAIMER}
              </p>
            </div>
          </div>

          {/* Motto and Direct Phone Contact */}
          <div className="md:col-span-5 bg-gradient-to-br from-[#0C2552] to-[#071630] border border-[#00D2FF]/35 rounded-2xl p-5 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-2">
              <span className="text-sm font-bold text-white">
                Bright Digitals · Creative. Simple. Affordable.
              </span>
              <Heart className="w-4 h-4 text-[#00D2FF] shrink-0 fill-current" />
            </div>

            <div className="mt-3 pt-3 border-t border-sky-500/20 flex items-center justify-between">
              <div className="text-xs text-slate-300">
                <span>Direct Hotline:</span>
                <a
                  href="tel:0973073299"
                  className="block font-bold text-[#00D2FF] hover:underline text-sm"
                >
                  0973073299
                </a>
              </div>

              <a
                href={getWhatsAppUrl('Hello Bright Digitals! I want to ask about your social media packages.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-[#030D20] bg-gradient-to-r from-[#00E1FF] to-[#00B8FF] hover:from-[#38BDF8] hover:to-[#00D2FF] shadow-[0_0_12px_rgba(0,210,255,0.3)]"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Message Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
