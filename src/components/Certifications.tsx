import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolio-data';

export const Certifications: React.FC = () => {
  return (
    <section className="py-20 border-t border-outline-variant/20" id="certifications">
      {/* Section Header */}
      <div className="mb-12">
        <div className="font-code text-xs text-primary tracking-widest uppercase mb-2">
          06 // CREDENTIALS
        </div>
        <h2 className="font-headline text-3xl md:text-4xl font-semibold text-on-surface">
          Certifications
        </h2>
      </div>

      {/* Grid of 3 Verified Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.title}
            className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30 hairline-card flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Award className="w-5 h-5 text-primary" />
                <span className="font-code text-xs text-outline">{cert.year}</span>
              </div>
              <h3 className="font-headline text-base md:text-lg font-semibold text-on-surface">
                {cert.title}
              </h3>
              <p className="text-xs text-on-surface-variant">
                {cert.organization}
              </p>
            </div>
            <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between font-code text-xs text-outline">
              <span>Credential ID Verified</span>
              <CheckCircle2 className="w-4 h-4 text-tertiary" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

