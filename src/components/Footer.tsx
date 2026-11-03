import React from 'react';
import { PERSONAL_INFO } from '../data/portfolio-data';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface border-t border-outline-variant/20 mt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand & Built by */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="font-code text-sm text-on-surface font-medium flex items-center gap-2">
            <span>Designed & Built by {PERSONAL_INFO.name}</span>
          </div>
          <div className="text-xs text-on-surface-variant">
            © 2026 {PERSONAL_INFO.name}. Built for robust backend systems.
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 font-code text-xs text-on-surface-variant">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-on-surface hover:underline transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-on-surface hover:underline transition-colors"
          >
            LinkedIn
          </a>
          <a href="#projects" className="hover:text-on-surface hover:underline transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-on-surface hover:underline transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

