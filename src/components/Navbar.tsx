import React, { useState } from 'react';
import { Terminal, Code, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolio-data';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[1200px] rounded-xl z-50 bg-surface-container-low/80 backdrop-blur-md border border-outline-variant/30 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)]">
      <div className="flex justify-between items-center h-14 px-5 w-full">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group transition-all duration-200 ease-out active:scale-95"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_#4edea3]" />
          <span className="font-headline tracking-tight text-on-surface font-semibold group-hover:text-primary transition-colors">
            {PERSONAL_INFO.brand}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-code text-[13px] text-on-surface-variant hover:text-on-surface transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Trailing Actions */}
        <div className="flex items-center gap-3">
          {/* Availability Pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 border border-tertiary/30 text-tertiary font-code text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping" />
            <span>Available for Roles</span>
          </div>

          {/* Source & Code Icons */}
          <a
            href="#projects"
            className="p-2 rounded-lg bg-surface-container/60 hover:bg-surface-container border border-outline-variant/30 text-on-surface-variant hover:text-primary transition-all duration-200"
            title="Source Architecture"
          >
            <Terminal className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-surface-container/60 hover:bg-surface-container border border-outline-variant/30 text-on-surface-variant hover:text-primary transition-all duration-200"
            title="View Code on GitHub"
          >
            <Code className="w-4 h-4" />
          </a>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex text-[12px] font-semibold px-4 py-2 rounded-lg bg-primary-container text-on-surface hover:bg-inverse-primary border border-primary/20 shadow-[0_0_15px_rgba(128,131,255,0.25)] transition-all duration-200 active:scale-95"
          >
            Get in Touch
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-on-surface-variant hover:text-on-surface"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-5 py-4 border-t border-outline-variant/30 bg-surface-container-low/95 rounded-b-xl flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-code text-sm text-on-surface-variant hover:text-primary py-1 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center mt-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-primary-container text-on-surface"
          >
            Get in Touch
          </a>
        </div>
      )}
    </header>
  );
};

