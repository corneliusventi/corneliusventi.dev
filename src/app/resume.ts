export type Experience = {
  company: string;
  position: string;
  period: string;
  location: string;
  achievements: string[];
  technologies?: string[];
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export type Education = {
  institution: string;
  degree: string;
  period: string;
  technologies?: string[];
};

export type Certificate = {
  title: string;
  date: string;
  href: string;
  issuer: string;
  technologies?: string[];
};

export type Project = {
  name: string;
  description: string;
  href: string;
  tech: string[];
};

export type PersonalInfo = {
  name: string;
  title: string;
  headline: string;
  email: string;
  location: string;
  links: {
    portfolio: string;
    resume: string;
    profile: string;
    github: string;
    linkedin: string;
    twitter: string;
  };
};

export type AboutInfo = {
  yearsOfExperience: string;
  description: string[];
  specializations: string[];
};

export type Language = {
  name: string;
  level: string;
};

export const personalInfo: PersonalInfo = {
  name: "Cornelius Venti",
  title: "Senior Full Stack Engineer",
  headline:
    "Senior Full Stack Engineer | 6+ Years | Distributed Systems | Global Remote",
  email: "cornelius@corneliusventi.dev",
  location: "Global",
  links: {
    portfolio: "https://corneliusventi.dev",
    resume: "https://corneliusventi.dev/resume.pdf",
    profile: "https://corneliusventi.dev/profile.jpg",
    github: "https://github.com/corneliusventi",
    linkedin: "https://linkedin.com/in/corneliusventi",
    twitter: "https://x.com/corneliusventi",
  },
};

export const aboutInfo: AboutInfo = {
  yearsOfExperience: "6+ years",
  description: [
    "Senior Full Stack Engineer with 6+ years of experience architecting distributed web platforms and high-concurrency API services. Specialized in transforming complex business requirements into scalable reality—from engineering bidirectional financial sync engines to architecting fraud-detection pipelines. Expert in creating high-performance, accessible user experiences using React 19 and Next.js 15, while maintaining robust concurrent backends in Golang. An async-first remote specialist with a documentation-driven development philosophy that prioritizes rapid delivery without compromising on system integrity.",
  ],
  specializations: [
    "Distributed Systems",
    "Golang",
    "Python",
    "React 19",
    "Next.js 15",
    "AI-Driven Development",
    "Async Remote Specialist",
    "Global Timezone Flexibility",
    "Documentation-Driven Development",
  ],
};

export const projects: Project[] = [
  {
    name: "siftlyapi",
    description:
      "Enterprise-grade fraud detection API for real-time signup risk scoring. Engineered high-throughput ingestion pipelines handling real-time signals with sub-100ms predictive scoring latency.",
    href: "https://siftlyapi.com/",
    tech: ["Golang", "Convex", "Redis", "Claude Code", "Python"],
  },
  {
    name: "jobsh",
    description:
      "High-performance Go TUI for aggregating and managing remote job postings. Features concurrent RSS parsing and local SQLite-backed persistent storage for high-speed offline access.",
    href: "https://github.com/corneliusventi/jobsh",
    tech: [
      "Golang",
      "SQLite",
      "TUI",
      "Bubble Tea",
      "Background Processing",
      "Rate Limiting",
    ],
  },
  {
    name: "preces",
    description:
      "A minimalist digital prayer companion optimized for zero-latency performance. Leveraging React 19 Server Components and Next.js 15 for perfect Lighthouse scores and accessibility.",
    href: "https://preces.corneliusventi.dev/",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Lucide React"],
  },
];

export const experiences: Experience[] = [
  {
    company: "icebaths",
    position: "Senior Full Stack Engineer (Growth & Automation - Project Contract)",
    period: "Jul 2025 - Sep 2025",
    location: "Indonesia (Remote)",
    achievements: [
      "Architected a scalable lead generation engine leveraging Google Maps Places API and Apollo.io, processing 10k+ data points with Golang",
      "Engineered a fault-tolerant data synchronization engine between Golang services and distributed Google Sheets for real-time business intelligence",
      "Designed robust data processing pipelines to automate lead qualification and management, reducing manual research time by 90%",
      "Integrated AI-driven development workflows using Cursor to accelerate feature delivery and improve code quality",
    ],
    technologies: [
      "Golang",
      "Google Maps API",
      "Apollo.io",
      "Google Sheets API",
      "Cursor",
      "AI Development",
      "GitLab",
    ],
  },
  {
    company: "nubela",
    position: "Senior Full Stack Engineer (Enterprise Systems)",
    period: "Jul 2023 - Jan 2025",
    location: "Singapore (Remote)",
    achievements: [
      "Spearheaded end-to-end development of enterprise Teams feature with sophisticated RBAC and user management systems",
      "Architected a bidirectional financial sync engine between Invoice Ninja and Xero, automating reconciliation and reducing overhead by 80%",
      "Engineered high-performance data processing pipelines for ETL operations across multiple enterprise platforms supporting 10k+ seats",
      "Led technical documentation and API design standards for core enterprise services to improve team velocity and code quality",
    ],
    technologies: [
      "Python",
      "Flask",
      "React",
      "Docker",
      "Kubernetes",
      "Stripe",
      "Invoice Ninja",
      "Xero API",
      "Cursor",
      "GitLab",
    ],
  },
  {
    company: "fwd",
    position: "Full Stack Engineer (Microservices)",
    period: "Oct 2020 - Aug 2022",
    location: "Singapore (Remote)",
    achievements: [
      "Engineered a high-throughput user acquisition pipeline using Vue.js and Nest.js, delivering a mission-critical revenue engine in under 3 months",
      "Designed a comprehensive Logger Module for distributed microservices, reducing production debugging time by 60%",
      "Built enterprise-grade Email/Report Microservice processing thousands of automated compliance reports monthly",
      "Architected a Back Office Promotion Management system with Nest.js, Next.js, and Material UI for centralized marketing orchestration",
    ],
    technologies: [
      "Vue.js",
      "Nest.js",
      "Next.js",
      "Material UI",
      "AWS CloudWatch",
      "Microservices",
      "Email Systems",
      "GitLab",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend & Systems",
    skills: ["Golang", "Python", "Node.js", "Nest.js", "Flask", "TypeScript", "SQL"],
  },
  {
    category: "Frontend & UX",
    skills: [
      "React 19",
      "Next.js 15",
      "Vue.js",
      "Nuxt.js",
      "Tailwind CSS",
      "Material UI",
      "Figma",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["Docker", "Kubernetes", "AWS", "Redis", "PostgreSQL", "MongoDB", "Linux"],
  },
  {
    category: "Architecture & Engineering",
    skills: [
      "Distributed Systems",
      "ETL Pipelines",
      "API Design",
      "System Design",
      "AI-Driven Development",
    ],
  },
  {
    category: "Development Tools",
    skills: ["Git", "GitLab CI/CD", "Cursor", "Claude Code", "Postman", "Jira"],
  },
];

export const certificates: Certificate[] = [
  {
    title: "Data Structures & Algorithms in Python",
    date: "2025",
    href: "https://www.boot.dev/certificates/e8e5051f-127f-4ff8-86c5-09d2092af4bc",
    issuer: "Boot.dev",
  },
  {
    title: "Backend Development Specialization",
    date: "2025",
    href: "https://www.boot.dev/certificates/cb012954-b97c-4ab2-bbdd-1414ec974465",
    issuer: "Boot.dev",
  },
];

export const languages: Language[] = [
  {
    name: "English",
    level: "Professional Working Proficiency",
  },
  {
    name: "Indonesian",
    level: "Native or Bilingual Proficiency",
  },
];

export const educations: Education[] = [
  {
    institution: "Tanjungpura University, Indonesia",
    degree: "B.S. Computer Science in Informatics",
    period: "2015 - 2019",
  },
];
