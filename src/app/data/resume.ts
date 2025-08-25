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

export type Project = {
  name: string;
  description: string;
  href: string;
  tech: string[];
};

export type PersonalInfo = {
  name: string;
  title: string;
  email: string;
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
  specializations: string[][];
};

export const personalInfo: PersonalInfo = {
  name: "Cornelius Venti",
  title: "Software Engineer",
  email: "cornelius@corneliusventi.dev",
  links: {
    portfolio: "https://corneliusventi.dev",
    resume: "https://corneliusventi.dev/resume.pdf",
    profile: "https://corneliusventi.dev/profile.png",
    github: "https://github.com/corneliusventi",
    linkedin: "https://linkedin.com/in/corneliusventi",
    twitter: "https://x.com/corneliusventi",
  },
};

export const aboutInfo: AboutInfo = {
  yearsOfExperience: "6+ years",
  description: [
    "Software Engineer with 6+ years of experience building scalable web applications, APIs, and data processing systems across diverse industries including e-commerce, insurance, and SaaS platforms.",
    "Currently specializing in AI-assisted development and automation, building sophisticated lead generation systems using modern APIs and cloud technologies. Expert in end-to-end development from backend data pipelines to customer-facing storefronts, with a proven track record of delivering complex projects from concept to production.",
  ],
  specializations: [
    ["AI-Powered Development", "Golang", "Python", "React", "Vue.js"],
    ["Remote Specialist", "Cursor & Claude Code"],
  ],
};

export const projects: Project[] = [
  {
    name: "Terminal-based Portfolio",
    description:
      "A personal portfolio website built as an interactive terminal-style interface. Features modern development tooling with ESLint configuration, lint-staged pre-commit hooks, and comprehensive build pipeline for development and production environments.",
    href: "https://terminal.corneliusventi.dev/",
    tech: ["React", "TypeScript", "Next.js", "CSS", "ESLint"],
  },
  {
    name: "SiftlyAPI",
    description:
      "Enterprise B2B API-as-a-Service for real-time signup risk scoring. Features parallel processing pipeline with 10-40ms response times, comprehensive email intelligence, IP analysis, and fraud detection for SaaS businesses with free trials.",
    href: "https://siftlyapi.com/",
    tech: ["Golang", "PostgreSQL", "Redis", "Docker", "MaxMind GeoIP", "WHOIS"],
  },
];

export const experiences: Experience[] = [
  {
    company: "Icebaths",
    position: "Software Engineer",
    period: "2025 - Present",
    location: "Indonesia (Remote)",
    achievements: [
      "Architected comprehensive lead generation system leveraging Google Maps Places API and Apollo.io integration using Golang",
      "Engineered automated data collection workflows with AI-assisted development using Cursor",
      "Designed robust data processing pipelines optimizing lead qualification and management processes",
      "Integrated Google Sheets API for real-time lead storage and organization",
      "Modernized Shopify storefront theme with performance optimizations and UX enhancements",
    ],
    technologies: [
      "Golang",
      "Google Maps API",
      "Apollo.io",
      "Google Sheets API",
      "Shopify",
      "Cursor",
      "AI Development",
    ],
  },
  {
    company: "Nubela",
    position: "Software Engineer",
    period: "2023 - 2025",
    location: "Singapore (Remote)",
    achievements: [
      "Spearheaded end-to-end development of enterprise Teams feature with sophisticated user management systems",
      "Engineered seamless cross-platform integration between Invoice Ninja and Xero, reducing processing time by 80%",
      "Architected high-performance data processing pipelines for ETL operations across multiple enterprise platforms",
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
    ],
  },
  {
    company: "FWD Insurance",
    position: "Full Stack Developer",
    period: "2020 - 2022",
    location: "Singapore (Remote)",
    achievements: [
      "Developed high-conversion Lead Generation Form using Vue.js and Nest.js, delivered in 3 months",
      "Engineered comprehensive Logger Module for microservices, reducing debugging time by 60%",
      "Built enterprise-grade Email/Report Microservice processing thousands of automated reports monthly",
      "Architected Back Office Promotion Management system with Nest.js, Next.js, and Material UI",
    ],
    technologies: [
      "Vue.js",
      "Nest.js",
      "Next.js",
      "Material UI",
      "AWS CloudWatch",
      "Microservices",
      "Email Systems",
    ],
  },
  {
    company: "Satumarket",
    position: "Staff Development",
    period: "2020 - 2020",
    location: "Indonesia",
    achievements: [
      "Architected comprehensive local e-commerce platform using Nuxt.js, Vuetify, Vuex, and Laravel in 3 months",
      "Engineered sophisticated Back Office System streamlining business management workflows",
    ],
    technologies: [
      "Nuxt.js",
      "Vuetify",
      "Vuex",
      "Laravel",
      "E-commerce",
      "Back Office Systems",
    ],
  },
  {
    company: "Orange Multimedia",
    position: "Web Developer",
    period: "2018 - 2020",
    location: "Indonesia",
    achievements: [
      "Developed Electronic Signature-based Letter System reducing processing time by 70%",
      "Engineered Online Tax Reporting System streamlining government compliance processes",
      "Architected Regional Financial Management Information System managing complex financial operations",
      "Delivered health data management system with 81 complex resource tables",
    ],
    technologies: [
      "Electronic Signatures",
      "Tax Systems",
      "Financial Management",
      "Health Data",
      "Government Systems",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP",
      "Golang",
      "HTML",
      "CSS",
      "Node.js",
    ],
  },
  {
    category: "Frontend Frameworks",
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    category: "Backend Frameworks",
    skills: ["Express.js", "Nest.js", "Flask", "Laravel"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["Docker", "Kubernetes", "AWS CloudWatch", "Redis"],
  },
  {
    category: "APIs & Integrations",
    skills: [
      "Google Maps API",
      "Apollo.io API",
      "Google Sheets API",
      "Invoice Ninja API",
      "Xero API",
      "Shopify",
    ],
  },
  {
    category: "Payment & Communication",
    skills: ["Stripe", "SendGrid"],
  },
  {
    category: "Development Tools",
    skills: ["Git", "Cursor", "Claude Code", "Figma", "Postman"],
  },
  {
    category: "Project Management",
    skills: ["Slack", "Trello", "Jira", "Notion"],
  },
];

export const educations: Education[] = [
  {
    institution: "Boot.dev",
    degree: "Backend Development Specialization",
    period: "2025 - Present",
    technologies: [
      "Backend Development",
      "Go",
      "Python",
      "System Design",
      "Algorithms",
    ],
  },
  {
    institution: "Tanjungpura University, Indonesia",
    degree: "Bachelor of Computer Science in Informatics",
    period: "2015 - 2019",
    technologies: [
      "Computer Science",
      "Software Engineering",
      "Data Structures",
      "Algorithms",
    ],
  },
];
