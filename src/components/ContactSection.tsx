import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Mail, CheckCircle2, ArrowRight, Copy, Check, ExternalLink } from 'lucide-react';
import { SERVICES_DATA, CONTACT_DETAILS, getWhatsAppUrl, getGmailComposeUrl } from '../data/siteData';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    service: initialService || 'Social Media Management',
    message: '',
  });
  const [formError, setFormError] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(CONTACT_DETAILS.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
      setFormSubmitted(false);
    }
  }, [initialService]);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 9) {
      setFormError('Please enter a valid phone number (for example, 0975785777).');
      return;
    }
    setFormError(null);
    setFormSubmitted(true);
  };

  return (
    <section className="py-14 md:py-20 bg-[#040E22]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-2.5">
            <span className="w-8 h-[2px] bg-[#00D2FF] rounded-full" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#00D2FF]">
              GET IN TOUCH
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Contact Bright Digitals
          </h1>
          <p className="mt-2.5 text-base text-slate-300 leading-relaxed">
            Call us, chat with us on WhatsApp, or send a quick message using the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Contact Details & Social Handles */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Chat on WhatsApp Card */}
            <div className="bg-[#071630] border border-[#00D2FF]/40 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white">Quickest Way to Reach Us</h2>
              <p className="mt-1 text-sm text-slate-300">
                Message our team directly on WhatsApp for a fast reply.
              </p>
              <div className="mt-5">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-[#030D20] bg-gradient-to-r from-[#00E1FF] to-[#00B8FF] hover:from-[#38BDF8] hover:to-[#00D2FF] rounded-full shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Phone, WhatsApp, Email */}
            <div className="bg-[#071630] border border-sky-500/20 rounded-2xl p-6 space-y-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#00D2FF] mb-2">
                  <Phone className="w-4 h-4" />
                  <span>Phone</span>
                </div>
                <div className="space-y-1 text-base font-medium tabular-nums">
                  <div>
                    <a
                      href="tel:0975785777"
                      className="text-white hover:text-[#00D2FF] transition-colors"
                    >
                      0975785777
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:0973073299"
                      className="text-white hover:text-[#00D2FF] transition-colors"
                    >
                      0973073299
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-sky-500/15">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#00D2FF] mb-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </div>
                <div className="space-y-1 text-base font-medium tabular-nums">
                  <div>
                    <a
                      href={getWhatsAppUrl(undefined, false)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#00D2FF] transition-colors"
                    >
                      0975785777
                    </a>
                  </div>
                  <div>
                    <a
                      href={getWhatsAppUrl(undefined, true)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-[#00D2FF] transition-colors"
                    >
                      0973073299
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-sky-500/15">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#00D2FF]">
                    <Mail className="w-4 h-4" />
                    <span>Email (Gmail)</span>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmailToClipboard}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-300 hover:text-[#00D2FF] transition-colors py-0.5 px-2.5 rounded-md bg-[#040E22] border border-sky-500/25 cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-300">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>

                <a
                  href={getGmailComposeUrl(
                    'Marketing Inquiry — Bright Digitals',
                    'Hello Bright Digitals,\n\nI would like to ask about your digital marketing services for my business in Ethiopia.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-medium text-white hover:text-[#00D2FF] transition-colors break-all inline-flex items-center gap-1.5 group"
                  title="Click to open in Gmail compose"
                >
                  <span>{CONTACT_DETAILS.email}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00D2FF] shrink-0" />
                </a>

                <div className="mt-2.5 flex flex-wrap items-center gap-2">
                  <a
                    href={getGmailComposeUrl(
                      'Marketing Inquiry — Bright Digitals',
                      'Hello Bright Digitals,\n\nI would like to ask about your digital marketing services for my business in Ethiopia.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#030D20] bg-gradient-to-r from-[#00E1FF] to-[#00B8FF] hover:from-[#38BDF8] hover:to-[#00D2FF] px-3.5 py-1.5 rounded-full shadow-[0_0_12px_rgba(0,210,255,0.3)] transition-all whitespace-nowrap"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open in Gmail</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a
                    href={`mailto:${CONTACT_DETAILS.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white bg-[#040E22] hover:bg-[#081C3D] border border-sky-400/25 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
                  >
                    <span>Default Mail App</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Handles */}
            <div className="bg-[#071630] border border-sky-500/20 rounded-2xl p-6">
              <h2 className="text-sm font-semibold text-[#00D2FF] mb-3">Social Media</h2>
              <div className="space-y-2.5 text-sm">
                {CONTACT_DETAILS.socials.map((social) => (
                  <div
                    key={social.platform}
                    className="flex items-center justify-between py-1.5 border-b border-sky-500/10 last:border-0"
                  >
                    <span className="text-slate-300">{social.platform}:</span>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white hover:text-[#00D2FF] transition-colors"
                    >
                      {social.handle}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Simple Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#071630] border border-sky-500/20 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white">Send Us a Message</h2>
              <p className="mt-1 text-sm text-slate-300">
                Fill out your details below and we will get back to you shortly.
              </p>

              {formSubmitted ? (
                <div className="mt-6 bg-[#040E22] border border-[#00D2FF]/40 rounded-xl p-6">
                  <div className="flex items-center gap-2.5 text-[#00D2FF] font-semibold text-base">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Thank you, {formData.name}! Your message is ready.</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                    We have recorded your inquiry for{' '}
                    <span className="text-white font-medium">{formData.service}</span>. For an
                    immediate response from our team, you can also send this message directly on
                    WhatsApp or by email below:
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={getWhatsAppUrl(
                        `Hello Bright Digitals!\nName: ${formData.name}\nBusiness: ${
                          formData.businessName || 'N/A'
                        }\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${
                          formData.message || 'I would like to learn more.'
                        }`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#030D20] bg-[#00D2FF] hover:bg-sky-300 rounded-full transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp Now</span>
                    </a>

                    <a
                      href={getGmailComposeUrl(
                        `Marketing Inquiry from ${formData.name} (${
                          formData.businessName || 'Business'
                        })`,
                        `Name: ${formData.name}\nBusiness Name: ${
                          formData.businessName || 'N/A'
                        }\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${
                          formData.message || 'I would like to learn more about your services.'
                        }`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#030D20] bg-gradient-to-r from-[#00E1FF] to-[#00B8FF] hover:from-[#38BDF8] hover:to-[#00D2FF] rounded-full shadow-[0_0_15px_rgba(0,210,255,0.35)] transition-all whitespace-nowrap"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send via Gmail</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={`mailto:${CONTACT_DETAILS.email}?subject=${encodeURIComponent(
                        `Marketing Inquiry from ${formData.name} (${
                          formData.businessName || 'Business'
                        })`
                      )}&body=${encodeURIComponent(
                        `Name: ${formData.name}\nBusiness Name: ${formData.businessName}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
                      )}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-200 bg-[#071630] hover:bg-[#0C234B] border border-sky-400/30 rounded-full transition-colors whitespace-nowrap"
                    >
                      <span>Default Mail App</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          businessName: '',
                          phone: '',
                          service: 'Social Media Management',
                          message: '',
                        });
                      }}
                      className="px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="mt-6 space-y-4" noValidate>
                  {formError && (
                    <div
                      role="alert"
                      className="p-3.5 rounded-lg bg-red-950/60 border border-red-400/40 text-xs sm:text-sm text-red-200"
                    >
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#040E22] border border-sky-500/25 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00D2FF]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="businessName"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Business Name
                      </label>
                      <input
                        id="businessName"
                        name="businessName"
                        type="text"
                        value={formData.businessName}
                        onChange={handleFormChange}
                        placeholder="Your shop, clinic, or company"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#040E22] border border-sky-500/25 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00D2FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Phone *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="e.g. 0975785777"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#040E22] border border-sky-500/25 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00D2FF] tabular-nums"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-xs font-medium text-slate-300 mb-1.5"
                      >
                        Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleFormChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#040E22] border border-sky-500/25 text-sm text-white focus:outline-none focus:border-[#00D2FF]"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.title} className="bg-[#040E22] text-white">
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Tell us a little about your business and how we can help..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#040E22] border border-sky-500/25 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00D2FF]"
                    />
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold text-[#030D20] bg-gradient-to-r from-[#00E1FF] to-[#00B8FF] hover:from-[#38BDF8] hover:to-[#00D2FF] rounded-full shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all whitespace-nowrap cursor-pointer"
                    >
                      <span>Send Message</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#040E22] hover:bg-[#0B2147] border border-sky-400/35 rounded-full transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4 text-[#00D2FF]" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
