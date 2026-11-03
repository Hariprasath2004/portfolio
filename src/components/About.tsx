import React from 'react';
import { User, Terminal, Database, Layers, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: Terminal,
      title: "Java Backend Development",
      desc: "Java 17, Struts 2, JDBC, REST endpoints, clean architecture.",
      iconBg: "bg-primary-container/20 text-primary",
    },
    {
      icon: Database,
      title: "Database Management",
      desc: "PostgreSQL relational design, MySQL queries, Redis low-latency cache layer.",
      iconBg: "bg-tertiary/10 text-tertiary",
    },
    {
      icon: Layers,
      title: "Web Application Development",
      desc: "Full request lifecycle, MVC architecture, DAO patterns, JSP, Tomcat.",
      iconBg: "bg-secondary-container/20 text-secondary",
    },
    {
      icon: ShieldCheck,
      title: "Problem Solving",
      desc: "Algorithmic efficiency, debugging complex transactions, BCrypt security.",
      iconBg: "bg-primary/20 text-primary",
    },
  ];

  const techBadges = [
    "Java 17",
    "Apache Struts 2",
    "PostgreSQL",
    "Redis",
    "JDBC",
    "Spring Boot (In Progress)",
  ];

  return (
    <section className="py-20 border-t border-outline-variant/20" id="about">
      {/* Section Header */}
      <div className="mb-12">
        <div className="font-code text-xs text-primary tracking-widest uppercase mb-2">
          01 // PROFILE
        </div>
        <h2 className="font-headline text-3xl md:text-4xl font-semibold text-on-surface">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Verbatim Bio Text Block */}
        <div className="lg:col-span-7 bg-surface-container-low p-6 md:p-8 rounded-xl border border-outline-variant/30 hairline-card space-y-4">
          <div className="flex items-center gap-3 pb-3 border-b border-outline-variant/20">
            <User className="w-5 h-5 text-primary" />
            <h3 className="font-headline text-lg font-semibold text-on-surface">
              Backend Engineering Focus
            </h3>
          </div>
          <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
            I'm a Java Backend Developer Intern at Tsoft Corporation Private Limited, with hands-on
            experience developing Java web applications. I have practical experience with Java 17,
            Apache Struts 2, JSP, JDBC, PostgreSQL, and Redis. I enjoy solving backend problems,
            designing database-driven applications, and understanding how systems work behind the scenes.
            I'm continuously improving my skills in REST API development and Spring Boot, with the goal
            of becoming a skilled backend engineer.
          </p>

          <div className="pt-2 flex flex-wrap gap-2 font-code text-[11px]">
            {techBadges.map((badge) => (
              <span
                key={badge}
                className={`px-2.5 py-1 rounded bg-surface-container border border-outline-variant/40 ${
                  badge.includes('Spring Boot') ? 'text-primary' : 'text-on-surface'
                }`}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* 4 High-Fidelity Highlight Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 hairline-card hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg ${item.iconBg}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-headline text-sm font-semibold text-on-surface">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

