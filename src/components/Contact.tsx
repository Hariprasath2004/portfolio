import React, { useState } from 'react';
import { Mail, MapPin, Network, Clock, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio-data';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="py-20 border-t border-outline-variant/20" id="contact">
      {/* Section Header */}
      <div className="mb-12">
        <div className="font-code text-xs text-primary tracking-widest uppercase mb-2">
          07 // GET IN TOUCH
        </div>
        <h2 className="font-headline text-3xl md:text-4xl font-semibold text-on-surface">
          Let's Build Something Great Together.
        </h2>
        <p className="text-sm md:text-base text-on-surface-variant mt-2 max-w-2xl">
          I'm open to Java Backend Developer and Software Engineer opportunities. Feel free to connect with me.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30 hairline-card space-y-6">
            <h3 className="font-headline text-lg font-semibold text-on-surface">
              Contact Information
            </h3>
            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-surface-container text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-code text-[11px] text-outline">EMAIL DIRECTLY</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm md:text-base text-on-surface hover:text-primary transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-surface-container text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-code text-[11px] text-outline">LOCATION</div>
                  <div className="text-sm md:text-base text-on-surface">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>

              {/* Social Profiles */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-surface-container text-primary">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-code text-[11px] text-outline">PROFESSIONAL NETWORKS</div>
                  <div className="flex items-center gap-4 mt-1">
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="font-code text-[13px] text-on-surface hover:text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                    <span className="text-outline">•</span>
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-code text-[13px] text-on-surface hover:text-primary transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Pledge */}
            <div className="p-3.5 rounded-lg bg-surface-container border border-outline-variant/30 flex items-center gap-3">
              <Clock className="w-4 h-4 text-tertiary shrink-0" />
              <span className="font-code text-[11px] text-on-surface-variant">
                {PERSONAL_INFO.replyPledge}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Engineering Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-8 rounded-xl bg-surface-container-low border border-outline-variant/30 hairline-card space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="font-code text-[11px] text-on-surface-variant">YOUR NAME</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Henderson"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface placeholder:text-outline text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-code text-[11px] text-on-surface-variant">YOUR EMAIL</label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface placeholder:text-outline text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="font-code text-[11px] text-on-surface-variant">SUBJECT</label>
              <input
                type="text"
                required
                placeholder="Java Backend Opportunity / Full-time Role"
                className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface placeholder:text-outline text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="font-code text-[11px] text-on-surface-variant">MESSAGE</label>
              <textarea
                required
                rows={4}
                placeholder="Hi Hariprasath, I reviewed your portfolio and would like to discuss..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface placeholder:text-outline text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary-container text-on-surface text-xs font-semibold shadow-[0_0_20px_rgba(128,131,255,0.3)] hover:bg-inverse-primary border border-primary/30 flex items-center justify-center gap-2 transition-all duration-200 active:scale-95"
            >
              {submitted ? (
                <span className="text-tertiary">✓ Message Sent!</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

