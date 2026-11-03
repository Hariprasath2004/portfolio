import React from 'react';
import { Code2, Cpu, Database, Wrench, Globe, Bolt, Table } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section className="py-20 border-t border-outline-variant/20" id="skills">
      {/* Section Header */}
      <div className="mb-12">
        <div className="font-code text-xs text-primary tracking-widest uppercase mb-2">
          02 // TECH STACK
        </div>
        <h2 className="font-headline text-3xl md:text-4xl font-semibold text-on-surface">
          Technical Skills
        </h2>
        <p className="text-sm md:text-base text-on-surface-variant mt-2 max-w-2xl">
          Categorized toolset focused on robust backend engineering and distributed data management.
        </p>
      </div>

      {/* Categorized Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Category 1: Programming */}
        <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30 hairline-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20 mb-4">
              <div className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-primary" />
                <h3 className="font-headline text-base font-semibold text-on-surface">Programming</h3>
              </div>
              <span className="font-code text-xs text-outline">01</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container border border-outline-variant/20">
                <span className="text-sm font-medium text-on-surface">Java (Core & Advanced)</span>
                <span className="px-2 py-0.5 rounded font-code text-[11px] bg-primary-container/20 text-primary border border-primary/30">
                  Primary
                </span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container border border-outline-variant/20">
                <span className="text-sm font-medium text-on-surface">Python</span>
                <span className="px-2 py-0.5 rounded font-code text-[11px] bg-surface-container-high text-outline border border-outline-variant/30">
                  Basics
                </span>
              </div>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-outline-variant/20 font-code text-[11px] text-outline">
            JVM memory model, Multi-threading basics
          </div>
        </div>

        {/* Category 2: Backend Architecture & Frameworks (Spans 2 cols on md/lg) */}
        <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30 hairline-card md:col-span-2 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20 mb-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-tertiary" />
                <h3 className="font-headline text-base font-semibold text-on-surface">
                  Backend Architecture & Frameworks
                </h3>
              </div>
              <span className="font-code text-xs text-outline">02</span>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {[
                'Core Java (OOP, Collections)',
                'JDBC Connection Pools',
                'Apache Struts 2',
                'JSP & Servlets',
                'MVC Architecture',
                'DAO Pattern',
                'REST API Development',
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-3 py-2 rounded-lg bg-surface-container border border-outline-variant/30 text-on-surface font-code text-[12px] flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {skill}
                </div>
              ))}
              <div className="px-3 py-2 rounded-lg bg-surface-container border border-tertiary/40 text-tertiary font-code text-[12px] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse" />
                Spring Boot (Learning)
              </div>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-outline-variant/20 font-code text-[11px] text-outline">
            Focus: Stateless REST, Separation of concerns, Safe concurrency
          </div>
        </div>

        {/* Category 3: Database & Caching */}
        <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30 hairline-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20 mb-4">
              <div className="flex items-center gap-2">
                <Database className="w-5 h-5 text-secondary" />
                <h3 className="font-headline text-base font-semibold text-on-surface">
                  Database & Caching
                </h3>
              </div>
              <span className="font-code text-xs text-outline">03</span>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-surface-container border border-outline-variant/20 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-on-surface">PostgreSQL</div>
                  <div className="text-xs text-on-surface-variant">Relational schemas, constraints & indexes</div>
                </div>
                <Database className="w-4 h-4 text-outline" />
              </div>
              <div className="p-3 rounded-lg bg-surface-container border border-outline-variant/20 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-on-surface">MySQL</div>
                  <div className="text-xs text-on-surface-variant">Complex joins & transaction management</div>
                </div>
                <Table className="w-4 h-4 text-outline" />
              </div>
              <div className="p-3 rounded-lg bg-surface-container border border-outline-variant/20 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-tertiary">Redis</div>
                  <div className="text-xs text-on-surface-variant">In-memory cache, TTLs, session storage</div>
                </div>
                <Bolt className="w-4 h-4 text-tertiary" />
              </div>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-outline-variant/20 font-code text-[11px] text-outline">
            Sub-millisecond reads via Redis, ACID compliance in PostgreSQL
          </div>
        </div>

        {/* Category 4: Tools & Ecosystem */}
        <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30 hairline-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20 mb-4">
              <div className="flex items-center gap-2">
                <Wrench className="w-5 h-5 text-primary" />
                <h3 className="font-headline text-base font-semibold text-on-surface">
                  Tools & Ecosystem
                </h3>
              </div>
              <span className="font-code text-xs text-outline">04</span>
            </div>
            <div className="grid grid-cols-2 gap-2 font-code text-[12px]">
              {['Git', 'GitHub', 'Maven', 'Apache Tomcat', 'Eclipse IDE', 'VS Code'].map((tool) => (
                <div
                  key={tool}
                  className="p-2.5 rounded-lg bg-surface-container border border-outline-variant/20 text-on-surface"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-outline-variant/20 font-code text-[11px] text-outline">
            Build automation, semantic commits & server deployments
          </div>
        </div>

        {/* Category 5: Frontend Foundations */}
        <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30 hairline-card flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20 mb-4">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-secondary" />
                <h3 className="font-headline text-base font-semibold text-on-surface">
                  Frontend Foundations
                </h3>
              </div>
              <span className="font-code text-xs text-outline">05</span>
            </div>
            <div className="space-y-2.5">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container border border-outline-variant/20">
                <span className="text-sm text-on-surface">HTML5 Semantic Structure</span>
                <span className="font-code text-[11px] text-outline">Layouts</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container border border-outline-variant/20">
                <span className="text-sm text-on-surface">CSS3 Styling & Flexbox</span>
                <span className="font-code text-[11px] text-outline">Responsive</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container border border-outline-variant/20">
                <span className="text-sm text-on-surface">JavaScript</span>
                <span className="px-2 py-0.5 rounded font-code text-[11px] bg-surface-container-high text-outline border border-outline-variant/30">
                  Basics
                </span>
              </div>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-outline-variant/20 font-code text-[11px] text-outline">
            Client-side form validation and DOM manipulation
          </div>
        </div>
      </div>
    </section>
  );
};

