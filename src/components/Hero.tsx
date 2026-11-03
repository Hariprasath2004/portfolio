import React from 'react';
import { ArrowRight, Mail, Terminal, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio-data';
import { CodeInspector } from './CodeInspector';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-6rem)] flex flex-col justify-center py-12 lg:py-20" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-6 flex flex-col items-start gap-6">
          {/* Availability Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tertiary/10 border border-tertiary/30 shadow-[0_0_12px_rgba(78,222,163,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary" />
            </span>
            <span className="font-code text-[11px] text-tertiary tracking-wider font-semibold">
              {PERSONAL_INFO.status}
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-on-surface tracking-tight font-bold">
              Hi, I'm <span className="text-on-surface">{PERSONAL_INFO.shortName}.</span>
            </h1>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-primary via-[#c0c1ff] to-tertiary bg-clip-text text-transparent">
              {PERSONAL_INFO.title}
            </h2>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary-container text-on-surface text-sm font-semibold shadow-[0_0_20px_rgba(128,131,255,0.35)] hover:bg-inverse-primary border border-primary/30 transition-all duration-200 active:scale-95 group"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-surface-container-low hover:bg-surface-container border border-outline-variant/40 text-on-surface text-sm font-medium transition-all duration-200 active:scale-95"
            >
              <span>Contact Me</span>
              <Mail className="w-4 h-4 text-on-surface-variant" />
            </a>
          </div>

          {/* Social Connect Bar */}
          <div className="flex items-center gap-6 pt-4 border-t border-outline-variant/20 w-full font-code text-[11px] text-on-surface-variant">
            <span className="text-outline">CONNECT:</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-primary transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Code Inspector Window */}
        <div className="lg:col-span-6 w-full">
          <CodeInspector />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="flex flex-col items-center justify-center pt-16 gap-2 opacity-70 hover:opacity-100 transition-opacity">
        <a href="#about" className="flex flex-col items-center gap-2 text-on-surface-variant group">
          <div className="w-5 h-9 rounded-full border border-outline-variant flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
          <span className="font-code text-[11px] tracking-widest text-outline group-hover:text-primary transition-colors">
            SCROLL DOWN
          </span>
        </a>
      </div>
    </section>
  );
};

