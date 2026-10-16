import React from 'react';
import { MessageCircle, ArrowRight, MapPin, Mail, Phone, Send } from 'lucide-react';
import { PageId, SERVICES_DATA, CONTACT_DETAILS, getWhatsAppUrl, getGmailComposeUrl } from '../data/siteData';
import { BrandLogoMark } from './BrandLogo';

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
}

/**
 * Matches the "Ready to Grow Your Business?" / "Let’s Grow Your Business"
 * banner from the reference image, with the glowing cyan pill button on the left
 * and the "Let's Build Your Success" paper-plane + sweeping wave graphic on the right.
 */
export const CtaBanner: React.FC<CtaBannerProps> = ({
  title = 'Let’s Grow Your Business',
  subtitle = 'Have a business and need help with marketing? Talk to Bright Digitals.',
}) => {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 border-t border-sky-500/20 bg-gradient-to-r from-[#041026] via-[#071D42] to-[#061838]">
      {/* Sweeping wave SVG on right side matching the reference image */}
      <svg
        viewBox="0 0 1200 320"
        fill="none"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-60"
        preserveAspectRatio="none"
      >
        <path
          d="M 550 320 C 720 290, 830 180, 980 200 C 1090 215, 1150 150, 1200 110 L 1200 320 Z"
          fill="#0A2756"
          fillOpacity="0.55"
        />
        <path
          d="M 500 315 C 710 280, 820 165, 975 190 C 1085 208, 1145 135, 1200 95"
          stroke="#00D2FF"
          strokeOpacity="0.45"
          strokeWidth="2"
        />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="max-w-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-200 leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-7">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 text-sm sm:text-base font-semibold text-[#030D20] bg-gradient-to-r from-[#00E1FF] to-[#00B8FF] hover:from-[#38BDF8] hover:to-[#00D2FF] rounded-full shadow-[0_0_25px_rgba(0,210,255,0.45)] transition-all duration-150 whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Talk to Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Side: "Let's Build Your Success" + Paper Plane Graphic */}
        <div className="hidden md:flex items-center gap-4 pr-6 select-none">
          <div className=" -rotate-6 text-right">
            <span className="block font-display text-lg font-semibold text-sky-100 tracking-wide">
              Let’s Build
            </span>
            <span className="block font-display text-lg font-semibold text-[#00D2FF] tracking-wide">
              Your Success
            </span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-[#09234C] border border-[#00D2FF]/40 flex items-center justify-center text-[#00D2FF] shadow-[0_0_20px_rgba(0,210,255,0.25)] -rotate-12">
            <Send className="w-6 h-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

function renderSocialIcon(platform: string, className = 'w-4 h-4') {
  switch (platform) {
    case 'Instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      );
    case 'Facebook':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case 'TikTok':
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
          <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
        </svg>
      );
  }
}

interface SiteFooterProps {
  onNavigate: (page: PageId, serviceTitle?: string) => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#030B1A] border-t border-sky-500/20 pt-14 pb-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* 4-Column Layout matching reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-sky-500/15">
          {/* Col 1: Logo + Tagline + Social Icons */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-flex items-center gap-2.5"
            >
              <BrandLogoMark className="w-9 h-9 shrink-0" />
              <span className="text-lg font-bold tracking-wide uppercase">
                <span className="text-white">BRIGHT</span>{' '}
                <span className="text-[#00D2FF] font-medium">DIGITALS</span>
              </span>
            </a>

            <p className="text-sm text-slate-300 leading-relaxed max-w-xs">
              Creative. Simple. Affordable digital marketing for businesses in Addis Ababa,
              Ethiopia.
            </p>

            <div className="flex items-center gap-3 pt-1">
              {CONTACT_DETAILS.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.platform} ${social.handle}`}
                  title={`${social.platform}: ${social.handle}`}
                  className="w-9 h-9 rounded-full bg-[#071630] border border-sky-400/25 flex items-center justify-center text-slate-200 hover:text-[#030B1A] hover:bg-[#00D2FF] hover:border-[#00D2FF] transition-colors"
                >
                  {renderSocialIcon(social.platform, 'w-4 h-4')}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold text-white tracking-wide">Quick Links</h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {(
                [
                  { id: 'home', label: 'Home' },
                  { id: 'services', label: 'Services' },
                  { id: 'about', label: 'About' },
                  { id: 'contact', label: 'Contact' },
                ] as { id: PageId; label: string }[]
              ).map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.id);
                    }}
                    className="hover:text-[#00D2FF] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#creative-work"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                    setTimeout(() => {
                      const el = document.getElementById('creative-work');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 150);
                  }}
                  className="hover:text-[#00D2FF] transition-colors text-sky-200"
                >
                  Creative Work
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white tracking-wide">Our Services</h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate('services', service.title)}
                    className="text-left hover:text-[#00D2FF] transition-colors"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us + WhatsApp Button */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white tracking-wide">Contact Us</h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                <a
                  href={getGmailComposeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00D2FF] transition-colors break-all"
                  title="Open in Gmail"
                >
                  {CONTACT_DETAILS.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                <div className="tabular-nums">
                  <a href="tel:0975785777" className="hover:text-[#00D2FF] transition-colors">
                    0975785777
                  </a>
                  <span className="mx-1.5 text-slate-500">/</span>
                  <a href="tel:0973073299" className="hover:text-[#00D2FF] transition-colors">
                    0973073299
                  </a>
                </div>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#030B1A] bg-[#00D2FF] hover:bg-sky-300 rounded-full shadow-[0_0_16px_rgba(0,210,255,0.35)] transition-all whitespace-nowrap"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Bright Digitals. All rights reserved.</p>
          <p className="font-semibold text-xs tracking-wide">
            <span className="text-[#00D2FF]">More Engagement</span>
            <span className="text-slate-500 mx-1.5">•</span>
            <span className="text-white">More Followers</span>
            <span className="text-slate-500 mx-1.5">•</span>
            <span className="text-[#00D2FF]">More Sales</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
