export interface Project {
  id: string;
  caseStudyNumber: string;
  title: string;
  description: string;
  tags: string[];
  features: {
    icon: string;
    text: string;
    highlight?: boolean;
  }[];
  githubUrl: string;
  telemetry: {
    header: string;
    statusBadge: string;
    metrics: { label: string; value: string; color?: string }[];
    streamTitle: string;
    streamItems: { title: string; subtitle: string; status: string; statusColor: string }[];
    consoleLogs: { text: string; color?: string }[];
    pnrCard?: {
      pnr: string;
      status: string;
      train: string;
      coach: string;
      source: string;
      destination: string;
      seatRemaining: string;
    };
  };
}

export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  icon: string;
  skills: { name: string; badge?: string; badgeColor?: string; subtitle?: string }[];
  footer: string;
  spanCol?: boolean;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  isActive: boolean;
  responsibilities: string[];
  techStack: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  periodOrDuration: string;
  type: string;
  metricLabel: string;
  metricValue: string;
}

export interface CertificationItem {
  title: string;
  organization: string;
  year: string;
}

