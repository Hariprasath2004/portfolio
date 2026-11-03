import React from 'react';
import {
  Terminal,
  Check,
  Lock,
  Key,
  Shield,
  Search,
  Zap,
  Activity,
  Users,
  Layers,
  Database,
  Compass,
  Settings,
  Ticket,
  XCircle,
  Hash,
  CheckSquare,
  Repeat,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolio-data';

const iconMap: Record<string, React.ElementType> = {
  Check,
  Lock,
  Key,
  Shield,
  Search,
  Zap,
  Activity,
  Users,
  Layers,
  Database,
  Compass,
  Settings,
  Ticket,
  XCircle,
  Hash,
  CheckSquare,
  Repeat,
};

export const Projects: React.FC = () => {
  return (
    <section className="py-20 border-t border-outline-variant/20" id="projects">
      {/* Section Header */}
      <div className="mb-14">
        <div className="font-code text-xs text-primary tracking-widest uppercase mb-2">
          04 // SELECTED WORKS
        </div>
        <h2 className="font-headline text-3xl md:text-4xl font-semibold text-on-surface">
          Featured Projects
        </h2>
        <p className="text-sm md:text-base text-on-surface-variant mt-2 max-w-2xl">
          Production-grade backend architectures, transactional flows, and high-performance caching systems.
        </p>
      </div>

      <div className="space-y-16">
        {PROJECTS.map((project) => {
          return (
            <div
              key={project.id}
              className="p-6 md:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/30 hairline-card space-y-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Project Info */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <div className="font-code text-xs text-primary font-semibold">
                      CASE STUDY // {project.caseStudyNumber}
                    </div>
                    <h3 className="font-headline text-2xl md:text-3xl font-semibold text-on-surface">
                      {project.title}
                    </h3>
                    <p className="text-base text-on-surface-variant leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2.5 py-1 rounded bg-surface-container border border-outline-variant/40 font-code text-[11px] ${
                          tag === 'Redis' ? 'text-tertiary' : 'text-on-surface'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Key Features List */}
                  <div className="space-y-3 pt-2">
                    <div className="font-code text-xs text-outline font-semibold uppercase">
                      Engineered Features
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-on-surface-variant">
                      {project.features.map((feat, fIdx) => {
                        const IconComponent = iconMap[feat.icon] || Check;
                        return (
                          <div key={fIdx} className="flex items-center gap-2">
                            <IconComponent
                              className={`w-3.5 h-3.5 ${
                                feat.highlight ? 'text-tertiary' : 'text-primary'
                              }`}
                            />
                            <span>{feat.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Button CTA */}
                  <div className="pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container border border-outline-variant/40 hover:border-primary/50 text-on-surface hover:text-primary transition-all duration-200 text-xs font-semibold"
                    >
                      <Terminal className="w-4 h-4" />
                      <span>GitHub Repository</span>
                    </a>
                  </div>
                </div>

                {/* Right Architectural UI Preview Mockup */}
                <div className="lg:col-span-6 w-full">
                  <div className="rounded-xl bg-surface-container-lowest border border-outline-variant/40 p-4 md:p-5 shadow-2xl space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2.5 h-2.5 rounded-full inline-block ${
                            project.id === 'job-portal' ? 'bg-primary' : 'bg-tertiary'
                          }`}
                        />
                        <span className="font-code text-xs text-on-surface font-medium">
                          {project.telemetry.header}
                        </span>
                      </div>
                      <span className="font-code text-[11px] text-tertiary">
                        {project.telemetry.statusBadge}
                      </span>
                    </div>

                    {/* Metrics Dashboard Panel for Job Portal */}
                    {project.telemetry.metrics.length > 0 && (
                      <div className="grid grid-cols-3 gap-3">
                        {project.telemetry.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-3 rounded-lg bg-surface-container border border-outline-variant/20"
                          >
                            <div className="font-code text-[10px] text-outline">{m.label}</div>
                            <div
                              className={`font-headline text-lg md:text-xl font-semibold mt-1 ${
                                m.color || 'text-on-surface'
                              }`}
                            >
                              {m.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* PNR Card Simulator for Railway */}
                    {project.telemetry.pnrCard && (
                      <div className="p-4 rounded-lg bg-surface-container-low border border-outline-variant/30 space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-code text-[10px] text-outline">GENERATED PNR</div>
                            <div className="font-headline text-xl font-mono font-bold tracking-widest text-primary">
                              {project.telemetry.pnrCard.pnr}
                            </div>
                          </div>
                          <span className="px-2.5 py-1 rounded bg-tertiary/10 text-tertiary border border-tertiary/30 font-code text-xs font-medium">
                            {project.telemetry.pnrCard.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 font-code text-xs pt-2 border-t border-outline-variant/20 text-on-surface-variant">
                          <div>
                            Train: <span className="text-on-surface">{project.telemetry.pnrCard.train}</span>
                          </div>
                          <div>
                            Coach/Seat: <span className="text-tertiary">{project.telemetry.pnrCard.coach}</span>
                          </div>
                          <div>
                            Source: <span className="text-on-surface">{project.telemetry.pnrCard.source}</span>
                          </div>
                          <div>
                            Destination: <span className="text-on-surface">{project.telemetry.pnrCard.destination}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Pipeline Stream or Seat Matrix Visual */}
                    {project.id === 'job-portal' && (
                      <div className="space-y-2 pt-2">
                        <div className="font-code text-[11px] text-outline">ACTIVE PIPELINE STREAM</div>
                        {project.telemetry.streamItems.map((item, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/30 flex items-center justify-between"
                          >
                            <div>
                              <div className="text-sm font-medium text-on-surface">{item.title}</div>
                              <div className="font-code text-[11px] text-outline">{item.subtitle}</div>
                            </div>
                            <span
                              className={`px-2 py-0.5 rounded font-code text-[11px] border ${item.statusColor}`}
                            >
                              {item.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {project.id === 'railway-reservation' && (
                      <div className="p-3 rounded-lg bg-surface-container border border-outline-variant/20 space-y-2">
                        <div className="flex items-center justify-between font-code text-[11px]">
                          <span className="text-outline">SEAT ALLOCATION INVENTORY</span>
                          <span className="text-tertiary font-mono">
                            {project.telemetry.pnrCard?.seatRemaining}
                          </span>
                        </div>
                        <div className="grid grid-cols-12 gap-1 py-1">
                          {[true, true, false, true, false, true, false, false, true, false, true, true].map(
                            (filled, bIdx) => (
                              <div
                                key={bIdx}
                                className={`h-2 rounded-sm ${
                                  filled ? 'bg-tertiary' : 'bg-outline-variant/60'
                                }`}
                              />
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {/* Console Log Window */}
                    <div className="p-3 rounded-lg bg-[#080B12] border border-outline-variant/20 font-code text-[11px] text-outline space-y-1">
                      {project.telemetry.consoleLogs.map((log, lIdx) => (
                        <div key={lIdx} className={log.color || 'text-outline'}>
                          {log.text}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

