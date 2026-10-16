/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Share2,
  Megaphone,
  PenTool,
  Palette,
  Video,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  MapPin,
  Sparkles,
  HeartHandshake,
  Wallet,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';
import {
  PageId,
  SERVICES_DATA,
  WHY_BRIGHT_DIGITALS,
  WHO_WE_HELP,
  getWhatsAppUrl,
  ServiceItem,
} from './data/siteData';
import { BrandLogoMark } from './components/BrandLogo';
import { HeroLaptopGraphic } from './components/HeroLaptopGraphic';
import { TrustPillarsBar } from './components/TrustPillarsBar';
import { WorkingProcessSection } from './components/WorkingProcessSection';
import { PackagesSection } from './components/PackagesSection';
import { CreativeWorkGallery } from './components/CreativeWorkGallery';
import { TeamSection } from './components/TeamSection';
import { CtaBanner, SiteFooter } from './components/FooterAndCta';
import { ContactSection } from './components/ContactSection';
import aboutIllustrationUrl from './assets/images/about_blue_studio_graphic_1790586453226.jpg';

function renderServiceIcon(iconName: ServiceItem['iconName'], className = 'w-5 h-5') {
  switch (iconName) {
    case 'share':
      return <Share2 className={className} />;
    case 'megaphone':
      return <Megaphone className={className} />;
    case 'pen':
      return <PenTool className={className} />;
    case 'palette':
      return <Palette className={className} />;
    case 'video':
      return <Video className={className} />;
  }
}

function getServiceBadgeStyle(index: number): string {
  const styles = [
    'bg-gradient-to-br from-[#00D4FF] to-[#0077FF] shadow-[0_6px_18px_rgba(0,194,255,0.35)]',
    'bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] shadow-[0_6px_18px_rgba(37,99,235,0.4)]',
    'bg-gradient-to-br from-[#00E0C6] to-[#0099B8] shadow-[0_6px_18px_rgba(0,224,198,0.3)]',
    'bg-gradient-to-br from-[#38BDF8] to-[#2563EB] shadow-[0_6px_18px_rgba(56,189,248,0.35)]',
    'bg-gradient-to-br from-[#00C8FF] to-[#1E40AF] shadow-[0_6px_18px_rgba(0,200,255,0.35)]',
  ];
  return styles[index % styles.length];
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBusinessIndex, setSelectedBusinessIndex] = useState<number>(0);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string | undefined>(
    undefined
  );
  const [aboutImgError, setAboutImgError] = useState(false);

  // Sync URL hash with active page
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (['home', 'services', 'about', 'contact'].includes(hash)) {
        setActivePage(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId, preselectedService?: string) => {
    if (preselectedService) {
      setSelectedServiceForContact(preselectedService);
    }
    setActivePage(page);
    setMobileMenuOpen(false);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeBusinessInfo = WHO_WE_HELP[selectedBusinessIndex] || WHO_WE_HELP[0];

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#040E22] text-slate-100 transition-colors duration-150">
      {/* =========================================================
          TOP NAVIGATION BAR (Strict Brand & Color Reference Match)
      ========================================================= */}
      <header className="sticky top-0 z-40 bg-[#030C1E]/95 backdrop-blur-md border-b border-sky-500/15">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
          {/* Left: Brand Logo & Wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('home');
            }}
            className="inline-flex items-center gap-2.5 text-white transition-opacity hover:opacity-90 whitespace-nowrap"
          >
            <BrandLogoMark className="w-10 h-10 shrink-0" />
            <span className="text-lg sm:text-xl tracking-wide uppercase font-display">
              <strong className="font-bold text-white">BRIGHT</strong>{' '}
              <span className="font-normal text-[#00D2FF]">DIGITALS</span>
            </span>
          </a>

          {/* Center: 4 Navigation Links with Cyan Active Bar */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-9 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateTo(item.id);
                  }}
                  className={`relative py-2 transition-colors duration-150 whitespace-nowrap ${
                    isActive ? 'text-[#00D2FF] font-semibold' : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#00D2FF] rounded-full shadow-[0_0_8px_#00D2FF]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Glowing Cyan Pill Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#030D20] bg-gradient-to-r from-[#00E1FF] to-[#00B8FF] hover:from-[#38BDF8] hover:to-[#00D2FF] rounded-full shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-150 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Talk to Our Team</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-sky-400/10 transition-colors cursor-pointer"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#06152E] border-b border-sky-500/20 px-5 py-5 space-y-4">
            <div className="flex flex-col space-y-2.5 pt-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateTo(item.id)}
                  className={`text-left py-2 text-base font-medium transition-colors cursor-pointer ${
                    activePage === item.id ? 'text-[#00D2FF]' : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="pt-3 border-t border-sky-500/15">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#030D20] bg-gradient-to-r from-[#00E1FF] to-[#00B8FF] rounded-full shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Talk to Our Team</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {/* =========================================================
            HOME PAGE
        ========================================================= */}
        {activePage === 'home' && (
          <div>
            {/* 1. HERO SECTION (Exact Match to Visual Direction) */}
            <section className="relative overflow-hidden py-12 md:py-20 bg-gradient-to-b from-[#030C1E] via-[#061736] to-[#040E22] border-b border-sky-500/20">
              {/* Subtle bottom-left blue glow */}
              <div
                className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, rgba(0, 194, 255, 0.18) 0%, rgba(4, 14, 34, 0) 70%)',
                }}
              />

              <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                  {/* Left Column: Location, Heading, Subtitle, Pill Buttons */}
                  <div className="lg:col-span-6">
                    <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm mb-5">
                      <MapPin className="w-4 h-4 text-[#00D2FF] shrink-0" />
                      <span className="font-semibold text-[#00D2FF]">Addis Ababa, Ethiopia</span>
                      <span className="text-slate-500" aria-hidden="true">
                        |
                      </span>
                      <span className="text-slate-200 font-medium">
                        Digital Marketing & Strategy
                      </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.12]">
                      <span className="block text-white">Creative Social Media</span>
                      <span className="block text-[#00D2FF] mt-1">That Grows Your Brand</span>
                    </h1>

                    <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg">
                      Bright Digitals helps businesses in Ethiopia with affordable and creative digital marketing. From social media management to custom graphics and video reels, we help your business get noticed.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <a
                        href={getWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#030D20] bg-gradient-to-r from-[#00E1FF] to-[#00B8FF] hover:from-[#38BDF8] hover:to-[#00D2FF] rounded-full shadow-[0_0_26px_rgba(0,210,255,0.45)] transition-all duration-150 whitespace-nowrap"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Talk to Our Team</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>

                      <button
                        type="button"
                        onClick={() => navigateTo('services')}
                        className="inline-flex items-center gap-3 px-6 py-3.5 text-sm sm:text-base font-medium text-white bg-[#06152E]/80 hover:bg-[#0B2248] border border-sky-400/35 hover:border-[#00D2FF] rounded-full transition-all duration-150 whitespace-nowrap cursor-pointer"
                      >
                        <span>Explore Services</span>
                        <ArrowRight className="w-4 h-4 text-slate-300" />
                      </button>

                      <a
                        href="#creative-work"
                        className="inline-flex items-center gap-2 px-5 py-3.5 text-sm sm:text-base font-medium text-[#00D2FF] bg-[#071938]/70 hover:bg-[#0C2454] border border-sky-400/30 hover:border-[#00D2FF] rounded-full transition-all duration-150 whitespace-nowrap cursor-pointer"
                      >
                        <span>Our Creative Work</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Laptop + Floating Badges Graphic */}
                  <div className="lg:col-span-6">
                    <HeroLaptopGraphic />
                  </div>
                </div>
              </div>
            </section>

            {/* TRUST & STRATEGIC PILLARS BAR (No fake stats, 100% honest positioning) */}
            <TrustPillarsBar />

            {/* 2. OUR SERVICES SECTION */}
            <section id="home-services" className="py-16 md:py-22 bg-[#040E22]">
              <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
                  <div>
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="w-8 h-[2px] bg-[#00D2FF] rounded-full" />
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D2FF]">
                        WHAT WE DO
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                      Services Tailored for Growth
                    </h2>
                    <p className="mt-2.5 text-base text-slate-300 max-w-md leading-relaxed">
                      Simple, creative, and results-driven marketing solutions crafted for businesses.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => navigateTo('services')}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#00D2FF] hover:text-sky-300 transition-colors whitespace-nowrap self-start sm:self-auto cursor-pointer"
                  >
                    <span>See All Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* 5 Service Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SERVICES_DATA.map((service, idx) => (
                    <div
                      key={service.id}
                      onClick={() => navigateTo('services', service.title)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          navigateTo('services', service.title);
                        }
                      }}
                      className="bg-[#06152D] border border-sky-500/20 hover:border-[#00D2FF]/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between text-left transition-all duration-150 cursor-pointer group shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
                    >
                      <div>
                        {/* Vibrant Rounded-xl Square Icon Badge */}
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center text-white mb-5 ${getServiceBadgeStyle(
                            idx
                          )}`}
                        >
                          {renderServiceIcon(service.iconName, 'w-6 h-6')}
                        </div>

                        <h3 className="text-lg font-bold text-white group-hover:text-[#00D2FF] transition-colors">
                          {service.title}
                        </h3>

                        <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                          {service.shortDescription}
                        </p>
                      </div>

                      {/* Bottom Row: "Learn More" + Circular Arrow Button */}
                      <div className="mt-6 pt-2 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00D2FF] group-hover:translate-x-0.5 transition-transform">
                          <span>Learn More</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>

                        <span className="w-8 h-8 rounded-full border border-sky-400/30 flex items-center justify-center text-[#00D2FF] group-hover:bg-[#00D2FF] group-hover:text-[#040E22] group-hover:border-[#00D2FF] transition-colors">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. WORKING PROCESS SECTION (Builds trust through clear strategy) */}
            <WorkingProcessSection />

            {/* 4. WHY BRIGHT DIGITALS SECTION */}
            <section className="py-16 md:py-22 border-t border-sky-500/15 bg-[#05132C]">
              <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                  {/* Left Column: Vector/UI Graphic matching the Hero graphic style */}
                  <div className="lg:col-span-5">
                    <div className="relative w-full max-w-[460px] mx-auto py-4 select-none">
                      {/* Ambient blue radial spotlight */}
                      <div
                        className="absolute inset-0 -m-4 rounded-full pointer-events-none"
                        style={{
                          background:
                            'radial-gradient(circle at 50% 48%, rgba(0, 194, 255, 0.26) 0%, rgba(29, 78, 216, 0.16) 42%, rgba(5, 19, 44, 0) 72%)',
                        }}
                      />

                      {/* Decorative dot grid */}
                      <div
                        className="absolute top-3 left-6 w-14 h-10 opacity-35 pointer-events-none"
                        style={{
                          backgroundImage: 'radial-gradient(#38BDF8 1.5px, transparent 1.5px)',
                          backgroundSize: '10px 10px',
                        }}
                      />

                      <div className="relative aspect-[5/4] w-full flex items-center justify-center">
                        {/* Subtle orbital circle */}
                        <div className="absolute w-[84%] h-[84%] rounded-full border border-sky-400/20 pointer-events-none" />

                        {/* Top-Left Floating Badge */}
                        <div className="absolute top-2 left-2 sm:left-4 z-20 flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#0A214A]/90 backdrop-blur-md border border-sky-400/35 shadow-[0_10px_28px_rgba(0,0,0,0.45)]">
                          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#0077FF] flex items-center justify-center text-[#040F25] shadow-[0_0_10px_rgba(0,212,255,0.5)] shrink-0">
                            <Sparkles className="w-3.5 h-3.5 stroke-[2.4]" />
                          </div>
                          <div className="leading-tight pr-1">
                            <span className="block text-xs font-semibold text-white">
                              Creative & Simple
                            </span>
                            <span className="block text-xs font-semibold text-sky-100">
                              Designed for impact
                            </span>
                          </div>
                        </div>

                        {/* Floating Icon Tile (Top Right) */}
                        <div className="absolute top-6 right-3 sm:right-5 z-20 w-11 h-11 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] border border-sky-300/40 shadow-[0_8px_20px_rgba(29,78,216,0.55)] flex items-center justify-center text-white">
                          <Palette className="w-5 h-5" />
                        </div>

                        {/* Floating Icon Tile (Bottom Left) */}
                        <div className="absolute bottom-8 left-2 sm:left-4 z-20 w-11 h-11 rounded-xl bg-gradient-to-br from-[#00C8FF] to-[#2563EB] border border-sky-300/45 shadow-[0_8px_20px_rgba(0,200,255,0.45)] flex items-center justify-center text-white">
                          <Video className="w-5 h-5" />
                        </div>

                        {/* Central Digital Strategy Frame */}
                        <div className="relative z-10 w-[72%] rounded-2xl bg-[#07152E] p-2 border-2 border-sky-400/40 shadow-[0_0_36px_rgba(0,180,255,0.22)]">
                          <div className="rounded-xl bg-gradient-to-br from-[#06132C] via-[#091E46] to-[#051026] border border-sky-400/20 p-3.5 sm:p-4">
                            {/* Window Header */}
                            <div className="flex items-center justify-between pb-2.5 border-b border-sky-400/15">
                              <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#00D2FF]" />
                                <div className="h-1.5 w-14 rounded-full bg-sky-300/70" />
                              </div>
                              <div className="h-1.5 w-8 rounded-full bg-sky-400/40" />
                            </div>

                            {/* Rising Line + Bar Chart */}
                            <div className="relative h-24 w-full flex items-end justify-between px-2 pt-4 my-2 border-b border-sky-400/20">
                              <svg
                                viewBox="0 0 180 70"
                                className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-10"
                              >
                                <path
                                  d="M 10 55 L 42 40 L 76 46 L 112 24 L 144 30 L 170 8"
                                  fill="none"
                                  stroke="#00E5FF"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <circle cx="10" cy="55" r="3" fill="#00E5FF" />
                                <circle cx="42" cy="40" r="3" fill="#00E5FF" />
                                <circle cx="76" cy="46" r="3" fill="#00E5FF" />
                                <circle cx="112" cy="24" r="3" fill="#00E5FF" />
                                <circle cx="144" cy="30" r="3" fill="#00E5FF" />
                                <circle cx="170" cy="8" r="3.5" fill="#00E5FF" />
                              </svg>

                              {[32, 48, 40, 65, 56, 85].map((h, i) => (
                                <div
                                  key={i}
                                  style={{ height: `${h}%` }}
                                  className="w-3.5 rounded-t bg-gradient-to-t from-[#1D4ED8] to-[#00C8FF] opacity-90"
                                />
                              ))}
                            </div>

                            {/* Clean Visual Status Bars */}
                            <div className="flex items-center justify-between gap-3 pt-1">
                              <span className="h-2 w-1/2 rounded-full bg-sky-400/40" />
                              <span className="h-2 w-1/3 rounded-full bg-[#00D2FF]/70" />
                            </div>
                          </div>
                        </div>

                        {/* Bottom-Right Floating Glass Badge */}
                        <div className="absolute bottom-2 right-1 sm:right-3 z-20 bg-[#0A214A]/95 backdrop-blur-md border border-[#00D2FF]/45 rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-[0_10px_28px_rgba(0,0,0,0.45)]">
                          <div className="w-7 h-7 rounded-lg bg-[#071633] border border-sky-400/30 flex items-center justify-center text-[#00D4FF] shrink-0">
                            <TrendingUp className="w-4 h-4" />
                          </div>
                          <div className="leading-tight pr-1">
                            <span className="block text-xs font-semibold text-white">
                              Our Mission
                            </span>
                            <span className="block text-xs font-semibold text-[#00D2FF]">
                              Grow your presence online
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Eyebrow, Heading, and Circular Blue Icon Points */}
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="w-8 h-[2px] bg-[#00D2FF] rounded-full" />
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D2FF]">
                        WHY BRIGHT DIGITALS
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                      Honest, Creative & Focused on Your Growth
                    </h2>

                    <p className="mt-3 text-base text-slate-300 leading-relaxed max-w-xl">
                      We combine thoughtful creative execution with clear, accessible marketing services tailored for the Ethiopian market.
                    </p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {[
                        {
                          title: WHY_BRIGHT_DIGITALS[0].title,
                          description: WHY_BRIGHT_DIGITALS[0].description,
                          icon: <Wallet className="w-5 h-5" />,
                        },
                        {
                          title: WHY_BRIGHT_DIGITALS[1].title,
                          description: WHY_BRIGHT_DIGITALS[1].description,
                          icon: <Sparkles className="w-5 h-5" />,
                        },
                        {
                          title: WHY_BRIGHT_DIGITALS[2].title,
                          description: WHY_BRIGHT_DIGITALS[2].description,
                          icon: <HeartHandshake className="w-5 h-5" />,
                        },
                        {
                          title: 'Local Market Understanding',
                          description: 'Tailored for Ethiopian customer habits in Addis Ababa across Instagram, Facebook, and TikTok.',
                          icon: <MapPin className="w-5 h-5" />,
                        },
                      ].map((point) => (
                        <div key={point.title} className="flex items-start gap-4">
                          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#00C8FF] to-[#1D4ED8] flex items-center justify-center text-white shrink-0 shadow-[0_0_18px_rgba(0,200,255,0.35)]">
                            {point.icon}
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-white">{point.title}</h3>
                            <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                              {point.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. TRANSPARENT PACKAGES */}
            <PackagesSection />

            {/* 6. WHO WE HELP SECTION (We Work With) */}
            <section className="py-16 md:py-20 border-t border-sky-500/15 bg-[#040E22]">
              <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <div className="max-w-2xl mb-8">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="w-8 h-[2px] bg-[#00D2FF] rounded-full" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D2FF]">
                      WHO WE HELP
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                    Built for Growing Businesses in Addis Ababa
                  </h2>
                  <p className="mt-2 text-base text-slate-300">
                    We partner with businesses across sectors to enhance visibility and drive engagement.
                  </p>
                </div>

                {/* 8 Category Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                  {WHO_WE_HELP.map((item, idx) => {
                    const isSelected = selectedBusinessIndex === idx;
                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => setSelectedBusinessIndex(idx)}
                        className={`p-4 rounded-xl border text-left transition-all duration-150 cursor-pointer ${
                          isSelected
                            ? 'bg-[#0A224A] border-[#00D2FF] text-white shadow-[0_0_18px_rgba(0,210,255,0.2)]'
                            : 'bg-[#06152D] border-sky-500/20 text-slate-200 hover:border-sky-400/50 hover:text-white'
                        }`}
                      >
                        <span className="block text-sm sm:text-base font-semibold whitespace-nowrap truncate">
                          {item.name}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Contextual detail box for the selected business type */}
                <div className="mt-5 bg-[#06152D] border border-sky-500/25 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#00D2FF]">
                      <span>How we help:</span>
                      <span aria-hidden="true">·</span>
                      <span>{activeBusinessInfo.name}</span>
                    </div>
                    <p className="mt-1.5 text-sm sm:text-base text-slate-200 leading-relaxed">
                      {activeBusinessInfo.howWeHelp}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => navigateTo('contact')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#030D20] bg-gradient-to-r from-[#00E1FF] to-[#00B8FF] hover:from-[#38BDF8] hover:to-[#00D2FF] rounded-full transition-all whitespace-nowrap shrink-0 self-start sm:self-center cursor-pointer"
                  >
                    <span>Ask About Your Business</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>

            {/* 7. OUR CREATIVE WORK VIDEO GALLERY */}
            <CreativeWorkGallery />

            {/* 8. OUR TEAM SECTION */}
            <TeamSection />

            {/* 9. FINAL SECTION (Let's Grow Your Business CTA Banner) */}
            <CtaBanner />
          </div>
        )}

        {/* =========================================================
            SERVICES PAGE
        ========================================================= */}
        {activePage === 'services' && (
          <div>
            <section className="py-14 md:py-20 bg-[#040E22]">
              <div className="max-w-5xl mx-auto px-5 sm:px-8">
                <div className="max-w-2xl mb-12">
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="w-8 h-[2px] bg-[#00D2FF] rounded-full" />
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D2FF]">
                      OUR SERVICES
                    </span>
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                    Complete Digital Marketing Solutions
                  </h1>
                  <p className="mt-3 text-base sm:text-lg text-slate-300 leading-relaxed">
                    Designed to help businesses build credibility, reach local customers, and expand online.
                  </p>
                </div>

                <div className="space-y-6">
                  {SERVICES_DATA.map((service, idx) => (
                    <div
                      key={service.id}
                      className="bg-[#06152D] border border-sky-500/20 rounded-2xl p-6 sm:p-8"
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div className="max-w-2xl">
                          <div className="flex items-center gap-3.5 mb-3.5">
                            <div
                              className={`w-11 h-11 rounded-xl flex items-center justify-center text-white shrink-0 ${getServiceBadgeStyle(
                                idx
                              )}`}
                            >
                              {renderServiceIcon(service.iconName, 'w-5 h-5')}
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-wider text-[#00D2FF]">
                              {service.number}. Service
                            </span>
                          </div>

                          <h2 className="text-xl sm:text-2xl font-bold text-white">
                            {service.title}
                          </h2>

                          <p className="mt-2.5 text-base text-slate-200 leading-relaxed">
                            {service.extendedDescription}
                          </p>

                          {/* Simple Included List */}
                          <div className="mt-5 pt-5 border-t border-sky-500/15">
                            <h3 className="text-xs font-semibold text-slate-400 mb-3">
                              What we help you with:
                            </h3>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                              {service.includedItems.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-sm text-slate-300 leading-snug"
                                >
                                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Service Action Buttons */}
                        <div className="flex sm:flex-row md:flex-col gap-3 shrink-0 md:w-48 pt-2 md:pt-0">
                          <a
                            href={getWhatsAppUrl(`Hello Bright Digitals! I would like to ask about your ${service.title} service.`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#030D20] bg-gradient-to-r from-[#00E1FF] to-[#00B8FF] hover:from-[#38BDF8] hover:to-[#00D2FF] rounded-full transition-all whitespace-nowrap"
                          >
                            <MessageCircle className="w-4 h-4" />
                            <span>Ask on WhatsApp</span>
                          </a>

                          <button
                            type="button"
                            onClick={() => navigateTo('contact', service.title)}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-200 bg-[#040E22] hover:bg-[#0B2248] border border-sky-400/30 rounded-full transition-colors whitespace-nowrap cursor-pointer"
                          >
                            <span>Send Message</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Creative Video Work Gallery on Services Page */}
            <CreativeWorkGallery />

            {/* Packages Section on Services Page */}
            <PackagesSection />

            <CtaBanner
              title="Ready to Start Growing Online?"
              subtitle="Get in touch today to schedule a conversation about how we can help your brand grow."
            />
          </div>
        )}

        {/* =========================================================
            ABOUT PAGE
        ========================================================= */}
        {activePage === 'about' && (
          <div>
            <section className="py-14 md:py-20 bg-[#040E22]">
              <div className="max-w-6xl mx-auto px-5 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-3 mb-2.5">
                      <span className="w-8 h-[2px] bg-[#00D2FF] rounded-full" />
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D2FF]">
                        ABOUT BRIGHT DIGITALS
                      </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                      Creative Marketing for Modern Businesses
                    </h1>

                    <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed">
                      Bright Digitals is a digital marketing agency located in Addis Ababa, Ethiopia. We believe that powerful, modern marketing shouldn't be complicated or unaffordable. We work closely with business owners to build compelling social media channels, create eye-catching graphic assets, and launch effective ad campaigns that produce real engagement.
                    </p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="bg-[#06152D] border border-sky-500/20 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-1.5">
                          <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
                          <h3 className="text-sm font-bold text-[#00D2FF]">Honest & Simple</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          Clear scopes, realistic expectations, and transparent communication from day one.
                        </p>
                      </div>
                      <div className="bg-[#06152D] border border-sky-500/20 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-1.5">
                          <HeartHandshake className="w-4 h-4 text-[#00D2FF]" />
                          <h3 className="text-sm font-bold text-[#00D2FF]">Dedicated Support</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          We treat your business like our own, ensuring fast responses and consistent delivery.
                        </p>
                      </div>
                      <div className="bg-[#06152D] border border-sky-500/20 rounded-2xl p-4">
                        <div className="flex items-center gap-2 mb-1.5">
                          <MapPin className="w-4 h-4 text-[#00D2FF]" />
                          <h3 className="text-sm font-bold text-[#00D2FF]">Local Insight</h3>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          Deep understanding of what resonates with consumers and business owners in Ethiopia.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="rounded-2xl overflow-hidden bg-[#06152D] border border-sky-500/25 p-3">
                      <div className="aspect-4/3 w-full rounded-xl overflow-hidden bg-[#040E22] flex items-center justify-center">
                        {!aboutImgError ? (
                          <img
                            src={aboutIllustrationUrl}
                            alt="Bright Digitals Creative Studio Workspace in Addis Ababa"
                            referrerPolicy="no-referrer"
                            onError={() => setAboutImgError(true)}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="p-6 text-center flex flex-col items-center justify-center">
                            <BrandLogoMark className="w-16 h-16 mb-3" />
                            <p className="text-sm font-medium text-white">
                              Bright Digitals Studio · Addis Ababa, Ethiopia
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Working Process on About page */}
            <WorkingProcessSection />

            {/* Show the team on the About page */}
            <TeamSection />

            {/* CTA Banner */}
            <CtaBanner />
          </div>
        )}

        {/* =========================================================
            CONTACT PAGE
        ========================================================= */}
        {activePage === 'contact' && (
          <ContactSection initialService={selectedServiceForContact} />
        )}
      </main>

      {/* =========================================================
          FOOTER (Exact Match to Reference Image 1)
      ========================================================= */}
      <SiteFooter onNavigate={navigateTo} />
    </div>
  );
}
