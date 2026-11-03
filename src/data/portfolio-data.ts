import { Project, SkillCategory, ExperienceItem, EducationItem, CertificationItem } from '../types';

export const PERSONAL_INFO = {
  name: "Hariprasath Ranjithkumar",
  shortName: "Hariprasath",
  brand: "HR.dev",
  title: "Java Backend Developer",
  tagline: "I build scalable backend applications, REST APIs, and database-driven web solutions using Java and modern web technologies.",
  email: "ranjithhari2004@gmail.com",
  location: "Kumbakonam, Tamil Nadu, India",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  status: "AVAILABLE FOR OPPORTUNITIES",
  replyPledge: "Typically replies within 24 hours.",
};

export const CODE_SNIPPETS = {
  jobService: {
    filename: "JobService.java",
    language: "java",
    lines: [
      { num: "01", tokens: [{ text: "@Service", type: "annotation" }] },
      { num: "02", tokens: [{ text: "public class ", type: "keyword" }, { text: "JobApplicationService", type: "class" }, { text: " {" }] },
      { num: "03", tokens: [{ text: "    @Transactional", type: "annotation" }, { text: "(rollbackFor = SQLException.class)" }] },
      { num: "04", tokens: [{ text: "    public ", type: "keyword" }, { text: "Response " }, { text: "processApplication", type: "method" }, { text: "(UUID candidateId, Long jobId) {" }] },
      { num: "05", tokens: [{ text: "        // Check Redis Cache for duplicate prevention", type: "comment" }] },
      { num: "06", tokens: [{ text: "        String " }, { text: "cacheKey = " }, { text: '"app:" + candidateId + ":" + jobId;', type: "string" }] },
      { num: "07", tokens: [{ text: "        if ", type: "keyword" }, { text: "(redisClient.exists(cacheKey)) " }, { text: "return ", type: "keyword" }, { text: "Response.conflict();" }] },
      { num: "08", tokens: [{ text: "        // Persistent commit with PostgreSQL DAO", type: "comment" }] },
      { num: "09", tokens: [{ text: "        ApplicationRecord " }, { text: "record = dao." }, { text: "insertWithLock", type: "method" }, { text: "(candidateId, jobId);" }] },
      { num: "10", tokens: [{ text: "        redisClient.setex(cacheKey, 3600, " }, { text: '"LOCKED"', type: "string" }, { text: ");" }] },
      { num: "11", tokens: [{ text: "        return ", type: "keyword" }, { text: "Response.ok(record);" }] },
      { num: "12", tokens: [{ text: "    }" }] },
      { num: "13", tokens: [{ text: "}" }] },
    ]
  },
  databasePool: {
    filename: "DatabasePool.java",
    language: "java",
    lines: [
      { num: "01", tokens: [{ text: "@Configuration", type: "annotation" }] },
      { num: "02", tokens: [{ text: "public class ", type: "keyword" }, { text: "DatabasePoolConfig", type: "class" }, { text: " {" }] },
      { num: "03", tokens: [{ text: "    @Bean", type: "annotation" }] },
      { num: "04", tokens: [{ text: "    public ", type: "keyword" }, { text: "DataSource " }, { text: "hikariDataSource", type: "method" }, { text: "() {" }] },
      { num: "05", tokens: [{ text: "        HikariConfig cfg = new HikariConfig();" }] },
      { num: "06", tokens: [{ text: "        cfg.setJdbcUrl(" }, { text: '"jdbc:postgresql://db.prod/app"', type: "string" }, { text: ");" }] },
      { num: "07", tokens: [{ text: "        cfg.setMaximumPoolSize(" }, { text: "10", type: "number" }, { text: ");" }] },
      { num: "08", tokens: [{ text: "        cfg.setMinimumIdle(" }, { text: "2", type: "number" }, { text: ");" }] },
      { num: "09", tokens: [{ text: "        cfg.setConnectionTimeout(" }, { text: "30000", type: "number" }, { text: ");" }] },
      { num: "10", tokens: [{ text: "        return new HikariDataSource(cfg);" }] },
      { num: "11", tokens: [{ text: "    }" }] },
      { num: "12", tokens: [{ text: "}" }] },
    ]
  },
  redisCache: {
    filename: "RedisCache.java",
    language: "java",
    lines: [
      { num: "01", tokens: [{ text: "@Component", type: "annotation" }] },
      { num: "02", tokens: [{ text: "public class ", type: "keyword" }, { text: "RedisCacheManager", type: "class" }, { text: " {" }] },
      { num: "03", tokens: [{ text: "    private final JedisPool jedisPool;" }] },
      { num: "04", tokens: [{ text: "    public ", type: "keyword" }, { text: "boolean " }, { text: "acquireIdempotencyLock", type: "method" }, { text: "(String key, int ttlSec) {" }] },
      { num: "05", tokens: [{ text: "        try (Jedis jedis = jedisPool.getResource()) {" }] },
      { num: "06", tokens: [{ text: "            SetParams params = SetParams.setParams().nx().ex(ttlSec);" }] },
      { num: "07", tokens: [{ text: "            String res = jedis.set(key, " }, { text: '"ACQUIRED"', type: "string" }, { text: ", params);" }] },
      { num: "08", tokens: [{ text: "            return ", type: "keyword" }, { text: '"OK".equalsIgnoreCase(res);', type: "string" }] },
      { num: "09", tokens: [{ text: "        }" }] },
      { num: "10", tokens: [{ text: "    }" }] },
      { num: "11", tokens: [{ text: "}" }] },
    ]
  }
};

export const HIGHLIGHT_CARDS = [
  {
    icon: "Terminal",
    title: "Java Backend Development",
    desc: "Java 17, Struts 2, JDBC, REST endpoints, clean architecture.",
    color: "primary"
  },
  {
    icon: "Database",
    title: "Database Management",
    desc: "PostgreSQL relational design, MySQL queries, Redis low-latency cache layer.",
    color: "tertiary"
  },
  {
    icon: "Layers",
    title: "Web Application Development",
    desc: "Full request lifecycle, MVC architecture, DAO patterns, JSP, Tomcat.",
    color: "secondary"
  },
  {
    icon: "ShieldCheck",
    title: "Problem Solving",
    desc: "Algorithmic efficiency, debugging complex transactions, BCrypt security.",
    color: "primary"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    number: "01",
    title: "Programming",
    icon: "Code",
    skills: [
      { name: "Java (Core & Advanced)", badge: "Primary", badgeColor: "primary" },
      { name: "Python", badge: "Basics", badgeColor: "muted" }
    ],
    footer: "JVM memory model, Multi-threading basics"
  },
  {
    id: "backend",
    number: "02",
    title: "Backend Architecture & Frameworks",
    icon: "Cpu",
    spanCol: true,
    skills: [
      { name: "Core Java (OOP, Collections)" },
      { name: "JDBC Connection Pools" },
      { name: "Apache Struts 2" },
      { name: "JSP & Servlets" },
      { name: "MVC Architecture" },
      { name: "DAO Pattern" },
      { name: "REST API Development" },
      { name: "Spring Boot (Learning)", badge: "In Progress", badgeColor: "tertiary" }
    ],
    footer: "Focus: Stateless REST, Separation of concerns, Safe concurrency"
  },
  {
    id: "database",
    number: "03",
    title: "Database & Caching",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", subtitle: "Relational schemas, constraints & indexes" },
      { name: "MySQL", subtitle: "Complex joins & transaction management" },
      { name: "Redis", subtitle: "In-memory cache, TTLs, session storage" }
    ],
    footer: "Sub-millisecond reads via Redis, ACID compliance in PostgreSQL"
  },
  {
    id: "tools",
    number: "04",
    title: "Tools & Ecosystem",
    icon: "Wrench",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Maven" },
      { name: "Apache Tomcat" },
      { name: "Eclipse IDE" },
      { name: "VS Code" }
    ],
    footer: "Build automation, semantic commits & server deployments"
  },
  {
    id: "frontend",
    number: "05",
    title: "Frontend Foundations",
    icon: "Globe",
    skills: [
      { name: "HTML5 Semantic Structure", subtitle: "Layouts" },
      { name: "CSS3 Styling & Flexbox", subtitle: "Responsive" },
      { name: "JavaScript", badge: "Basics", badgeColor: "muted" }
    ],
    footer: "Client-side form validation and DOM manipulation"
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    company: "Tsoft Corporation Private Limited",
    role: "Java Backend Developer Intern",
    period: "May 2026 – Present",
    location: "Tamil Nadu, India",
    isActive: true,
    responsibilities: [
      "Working on Java backend development tasks.",
      "Practising debugging and improving Java programming skills.",
      "Working with application logic and backend technologies.",
      "Using Git and GitHub for version control.",
      "Learning and improving backend development practices."
    ],
    techStack: ["Java 17", "Struts 2", "JDBC", "PostgreSQL", "Git"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "job-portal",
    caseStudyNumber: "01",
    title: "Job Portal System",
    description: "Developed a Java-based recruitment platform connecting job seekers and recruiters through a centralized job portal.",
    tags: ["Java 17", "Apache Struts 2", "JSP", "JDBC", "PostgreSQL", "Redis", "Maven", "Tomcat"],
    features: [
      { icon: "Check", text: "User Registration and Login" },
      { icon: "Lock", text: "BCrypt Password Hashing" },
      { icon: "Key", text: "Session Management" },
      { icon: "Shield", text: "Role-Based Access Control" },
      { icon: "Search", text: "Job Search and Application" },
      { icon: "Zap", text: "Duplicate Application Prevention", highlight: true },
      { icon: "Activity", text: "Application Status Tracking" },
      { icon: "Users", text: "Recruiter Job Management" },
      { icon: "Layers", text: "MVC and DAO Architecture" },
      { icon: "Database", text: "PostgreSQL Database Integration" },
      { icon: "Zap", text: "Redis Caching", highlight: true }
    ],
    githubUrl: "https://github.com",
    telemetry: {
      header: "JobPortal // Admin & Recruiter Telemetry",
      statusBadge: "Live System",
      metrics: [
        { label: "Active Postings", value: "142" },
        { label: "Processed Apps", value: "1,894", color: "text-primary" },
        { label: "Redis Hit Rate", value: "94.8%", color: "text-tertiary" }
      ],
      streamTitle: "ACTIVE PIPELINE STREAM",
      streamItems: [
        { title: "Senior Backend Engineer", subtitle: "ID: #JOB-8841 • PostgreSQL Pool: 4 conn", status: "Reviewing", statusColor: "text-tertiary border-tertiary/20 bg-tertiary/10" },
        { title: "Java Systems Architect", subtitle: "ID: #JOB-9023 • Redis Cache Validated", status: "Interviewed", statusColor: "text-primary border-primary/20 bg-primary-container/20" }
      ],
      consoleLogs: [
        { text: "[REDIS] GET candidate_session:a9f24b -> HIT (0.42ms)" },
        { text: "[BCRYPT] salt_rounds=12 verified for user_id=4091" },
        { text: "[DAO] Application record saved to 'job_applications' (id=1894)", color: "text-tertiary" }
      ]
    }
  },
  {
    id: "railway-reservation",
    caseStudyNumber: "02",
    title: "Railway Reservation System",
    description: "Developed a web-based railway reservation system with separate user and admin functionalities.",
    tags: ["Java", "Apache Struts 2", "JSP", "JDBC", "PostgreSQL", "Redis", "Maven", "GitHub"],
    features: [
      { icon: "Key", text: "User Authentication" },
      { icon: "Compass", text: "Train Search" },
      { icon: "Settings", text: "Train Management" },
      { icon: "Ticket", text: "Ticket Booking" },
      { icon: "XCircle", text: "Ticket Cancellation" },
      { icon: "Hash", text: "PNR Generation and Search", highlight: true },
      { icon: "CheckSquare", text: "Seat Availability Validation", highlight: true },
      { icon: "Repeat", text: "Transaction Management" },
      { icon: "Lock", text: "BCrypt Password Hashing" },
      { icon: "Zap", text: "Redis Caching", highlight: true }
    ],
    githubUrl: "https://github.com",
    telemetry: {
      header: "Ticket Engine // PNR Dispatcher",
      statusBadge: "ACID ISOLATION: SERIALIZABLE",
      metrics: [],
      pnrCard: {
        pnr: "8492-3019-11",
        status: "CONFIRMED (CNF)",
        train: "12675 Kovai Express",
        coach: "B3 - 42 (MB)",
        source: "Chennai Central (MAS)",
        destination: "Coimbatore (CBE)",
        seatRemaining: "18 / 72 SEATS REMAINING"
      },
      streamTitle: "SEAT ALLOCATION INVENTORY",
      streamItems: [],
      consoleLogs: [
        { text: "[TRANSACTION] BEGIN ISOLATION LEVEL READ COMMITTED" },
        { text: "[POSTGRES] SELECT seats FROM train_inventory WHERE train_id=12675 FOR UPDATE" },
        { text: "[COMMIT] PNR 8492301911 persisted. Notification fired.", color: "text-tertiary" }
      ]
    }
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: "B.Tech – Artificial Intelligence and Data Science",
    institution: "Dhanalakshmi Srinivasan College of Engineering, Coimbatore",
    periodOrDuration: "2021 – 2025",
    type: "Undergraduate Degree",
    metricLabel: "Academic Performance:",
    metricValue: "CGPA: 7.8"
  },
  {
    degree: "Java Full Stack Development Training",
    institution: "Freshkite, Cuddalore, Tamil Nadu",
    periodOrDuration: "6 Months Duration",
    type: "Professional Bootcamp",
    metricLabel: "Program Scope:",
    metricValue: "Intensive hands-on Java, enterprise frameworks & databases"
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Core Python",
    organization: "Coregenic IT Solution",
    year: "2024"
  },
  {
    title: "Artificial Intelligence",
    organization: "AICRA",
    year: "2024"
  },
  {
    title: "Data Science",
    organization: "Techvolt Software Pvt. Ltd.",
    year: "2024"
  }
];

