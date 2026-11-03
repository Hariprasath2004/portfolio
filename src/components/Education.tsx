import React from 'react';
import { EDUCATION_ITEMS } from '../data/portfolio-data';

export const Education: React.FC = () => {
  return (
    <section className="py-20 border-t border-outline-variant/20" id="education">
      {/* Section Header */}
      <div className="mb-12">
        <div className="font-code text-xs text-primary tracking-widest uppercase mb-2">
          05 // ACADEMICS
        </div>
        <h2 className="font-headline text-3xl md:text-4xl font-semibold text-on-surface">
          Education & Background
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDUCATION_ITEMS.map((item, idx) => (
          <div
            key={idx}
            className="p-6 md:p-8 rounded-xl bg-surface-container-low border border-outline-variant/30 hairline-card flex flex-col justify-between space-y-6"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span
                  className={`px-2.5 py-1 rounded-full font-code text-[11px] border ${
                    idx === 0
                      ? 'bg-primary-container/20 text-primary border-primary/30'
                      : 'bg-tertiary/10 text-tertiary border-tertiary/30'
                  }`}
                >
                  {item.type}
                </span>
                <span className="font-code text-xs text-outline">{item.periodOrDuration}</span>
              </div>
              <h3 className="font-headline text-xl md:text-2xl font-semibold text-on-surface">
                {item.degree}
              </h3>
              <p className="text-sm md:text-base text-on-surface-variant">
                {item.institution}
              </p>
            </div>

            <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between font-code text-xs">
              <span className="text-outline">{item.metricLabel}</span>
              {idx === 0 ? (
                <span className="px-3 py-1 rounded bg-surface-container border border-outline-variant/40 text-tertiary font-semibold">
                  {item.metricValue}
                </span>
              ) : (
                <span className="text-on-surface font-medium text-right max-w-[60%]">
                  {item.metricValue}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

