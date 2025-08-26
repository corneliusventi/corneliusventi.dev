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

export const personalInfo: PersonalInfo = {
  name: "Cornelius Venti",
  title: "Software Engineer",
  email: "cornelius@corneliusventi.dev",
  location: "Indonesia",
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
    "Software Engineer with 6+ years of experience building scalable web applications, APIs, and data processing systems across diverse industries including e-commerce, insurance, and SaaS platforms.",
    "Currently specializing in AI-assisted development and automation, building sophisticated lead generation systems using modern APIs and cloud technologies. Expert in end-to-end development from backend data pipelines to customer-facing storefronts, with a proven track record of delivering complex projects from concept to production.",
  ],
  specializations: [
    "AI-Powered Development",
    "Golang",
    "Python",
    "React",
    "Vue.js",
    "Remote Specialist",
    "Cursor & Claude Code",
  ],
};

export const projects: Project[] = [
  {
    name: "SiftlyAPI",
    description:
      "Enterprise B2B API-as-a-Service for real-time signup risk scoring. Features parallel processing pipeline with 10-40ms response times, comprehensive email intelligence, IP analysis, and fraud detection for SaaS businesses with free trials.",
    href: "https://siftlyapi.com/",
    tech: [
      "Golang",
      "PostgreSQL",
      "Redis",
      "Docker",
      "MaxMind GeoIP",
      "WHOIS",
      "Claude Code",
    ],
  },
  {
    name: "corneliusventi.dev",
    description:
      "Modern portfolio website built with Next.js 15 and React 19 featuring responsive design, accent color system, mobile navigation, status badge, and comprehensive sections for experience, skills, projects, certificates, and education. Includes API endpoints and SEO optimization.",
    href: "https://corneliusventi.dev/",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "API Routes",
      "SEO",
      "Claude Code",
    ],
  },
  {
    name: "Terminal-based Portfolio",
    description:
      "A personal portfolio website built as an interactive terminal-style interface. Features modern development tooling with ESLint configuration, lint-staged pre-commit hooks, and comprehensive build pipeline for development and production environments.",
    href: "https://terminal.corneliusventi.dev/",
    tech: ["React", "TypeScript", "Next.js", "CSS", "ESLint"],
  },
  {
    name: "Static Site Generator",
    description:
      "Build a static site generator from scratch using Python to understand how SEO and performance-optimized tools like Hugo work. Features Markdown processing, HTML generation, and static file management for web deployment.",
    href: "https://github.com/corneliusventi/static-site-generator",
    tech: [
      "Python",
      "Markdown",
      "HTML",
      "CSS",
      "Static Sites",
      "Web Development",
    ],
  },
  {
    name: "Maze Solver",
    description:
      "Build a GUI application using Python and Tkinter that generates randomized mazes and systematically solves them using algorithms. Features visual maze drawing, pathfinding algorithms, and interactive problem-solving.",
    href: "https://github.com/corneliusventi/maze-solver",
    tech: [
      "Python",
      "Tkinter",
      "Algorithms",
      "GUI",
      "Pathfinding",
      "Visualization",
    ],
  },
  {
    name: "Bookbot",
    description:
      "Build a command-line application that performs data analysis on text files and novels. Features word counting, character frequency analysis, professional development setup with Git, and beautiful analytics reporting.",
    href: "https://github.com/corneliusventi/bookbot",
    tech: [
      "Python",
      "CLI",
      "Data Analysis",
      "Text Processing",
      "Git",
      "Reporting",
    ],
  },
  {
    name: "Asteroids",
    description:
      "Build a clone of the classic Asteroids arcade game using Pygame and object-oriented programming. Features game loops, collision detection, sprite management, user input handling, and FPS control.",
    href: "https://github.com/corneliusventi/asteroids",
    tech: [
      "Python",
      "Pygame",
      "Game Development",
      "OOP",
      "Collision Detection",
      "Sprites",
    ],
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
      "GitLab",
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
      "Cursor",
      "GitLab",
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
      "GitLab",
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
      "GitLab",
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
      "GitLab",
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
      "Golang",
      "PHP",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      "React.js",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Tailwind CSS",
      "Material UI",
      "Vuetify",
      "Bootstrap",
    ],
  },
  {
    category: "Backend Development", 
    skills: [
      "Node.js",
      "Express.js",
      "Nest.js",
      "Flask",
      "Laravel",
      "API Development",
      "Microservices",
    ],
  },
  {
    category: "Databases & Caching",
    skills: [
      "PostgreSQL",
      "MySQL", 
      "MongoDB",
      "Redis",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "Docker",
      "Kubernetes", 
      "AWS CloudWatch",
      "GitLab CI/CD",
      "Linux",
      "Shell Scripting",
    ],
  },
  {
    category: "Version Control & Collaboration",
    skills: [
      "Git",
      "GitHub", 
      "GitLab",
      "Slack",
      "Jira",
      "Notion",
    ],
  },
  {
    category: "Third-party APIs & Services",
    skills: [
      "Google Maps API",
      "Google Sheets API",
      "Apollo.io API",
      "Stripe",
      "Shopify",
      "SendGrid",
      "Invoice Ninja API",
      "Xero API",
    ],
  },
  {
    category: "Development Tools & AI",
    skills: [
      "Cursor",
      "Claude Code", 
      "Figma",
      "Postman",
      "ESLint",
      "AI Development",
    ],
  },
  {
    category: "Domain Expertise",
    skills: [
      "E-commerce",
      "Financial Systems",
      "Back Office Systems", 
      "Email Systems",
      "SEO",
      "Data Analysis",
    ],
  },
  {
    category: "Soft Skills & Leadership",
    skills: [
      "Remote Work",
      "Cross-cultural Communication",
      "Problem Solving",
      "Project Management",
      "Team Collaboration",
      "Client Communication",
      "Agile Methodologies",
      "Technical Documentation",
      "Mentoring",
      "Requirements Analysis",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    title: "Learn to Code in Python",
    date: "Feb 17, 2025",
    href: "https://www.boot.dev/certificates/9cf0039d-40d3-413f-b7fa-fc5f10c24f63",
    issuer: "Boot.dev",
    technologies: [
      "Python",
      "Programming Fundamentals",
      "Variables",
      "Functions",
    ],
  },
  {
    title: "Learn Object Oriented Programming in Python",
    date: "Feb 20, 2025",
    href: "https://www.boot.dev/certificates/7fd1477f-a452-41b2-bfa4-487a2daee12e",
    issuer: "Boot.dev",
    technologies: ["Python", "OOP", "Classes", "Inheritance", "Polymorphism"],
  },
  {
    title: "Learn Linux",
    date: "Feb 18, 2025",
    href: "https://www.boot.dev/certificates/cb012954-b97c-4ab2-bbdd-1414ec974465",
    issuer: "Boot.dev",
    technologies: ["Linux", "Command Line", "Shell Scripting", "File Systems"],
  },
  {
    title: "Learn Git",
    date: "Feb 18, 2025",
    href: "https://www.boot.dev/certificates/9adf7f3a-372e-4863-98ca-560ce9d83a9f",
    issuer: "Boot.dev",
    technologies: ["Git", "Version Control", "GitHub", "Branching", "Merging"],
  },
  {
    title: "Learn Functional Programming in Python",
    date: "Feb 25, 2025",
    href: "https://www.boot.dev/certificates/70b21f88-0bc8-448b-9ed3-14a3d0ffdf90",
    issuer: "Boot.dev",
    technologies: [
      "Python",
      "Functional Programming",
      "Lambda Functions",
      "Map",
      "Filter",
    ],
  },
  {
    title: "Learn Data Structures and Algorithms in Python",
    date: "Apr 10, 2025",
    href: "https://www.boot.dev/certificates/e8e5051f-127f-4ff8-86c5-09d2092af4bc",
    issuer: "Boot.dev",
    technologies: [
      "Python",
      "Data Structures",
      "Algorithms",
      "Big O",
      "Trees",
      "Graphs",
    ],
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
