import React from 'react';
import { CheckCircle2, MapPin } from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolio-data';

export const Experience: React.FC = () => {
  return (
    <section className="py-20 border-t border-outline-variant/20" id="experience">
      {/* Section Header */}
      <div className="mb-12">
        <div className="font-code text-xs text-primary tracking-widest uppercase mb-2">
          03 // CAREER JOURNEY
        </div>
        <h2 className="font-headline text-3xl md:text-4xl font-semibold text-on-surface">
          Work Experience
        </h2>
      </div>

      {/* Timeline Card */}
      <div className="relative pl-6 md:pl-8 border-l border-outline-variant/40 ml-2 md:ml-4">
        {/* Glowing Timeline Node */}
        <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-surface-container-low border-2 border-primary flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
        </div>

        {EXPERIENCE_ITEMS.map((exp) => (
          <div
            key={exp.company}
            className="bg-surface-container-low p-6 md:p-8 rounded-xl border border-outline-variant/30 hairline-card space-y-6"
          >
            {/* Card Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-outline-variant/20">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-headline text-xl md:text-2xl font-semibold text-on-surface">
                    {exp.company}
                  </h3>
                  {exp.isActive && (
                    <span className="px-2 py-0.5 rounded bg-tertiary/10 text-tertiary border border-tertiary/30 font-code text-[11px]">
                      Active
                    </span>
                  )}
                </div>
                <div className="text-base text-primary font-medium mt-1">
                  {exp.role}
                </div>
              </div>
              <div className="flex flex-col md:items-end font-code text-xs text-on-surface-variant gap-1">
                <span className="px-3 py-1 rounded-full bg-surface-container border border-outline-variant/40 text-on-surface font-medium">
                  {exp.period}
                </span>
                <span className="flex items-center gap-1 text-outline">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Bullet Checklist */}
            <div className="space-y-3">
              <div className="font-code text-xs text-outline uppercase tracking-wider">
                Key Responsibilities & Impact
              </div>
              <ul className="space-y-2.5 text-sm md:text-base text-on-surface-variant">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Chips */}
            <div className="pt-4 border-t border-outline-variant/20 flex flex-wrap items-center gap-2">
              <span className="font-code text-xs text-outline mr-2">TECH STACK:</span>
              {exp.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-surface-container border border-outline-variant/40 text-on-surface font-code text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

