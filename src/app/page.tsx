import Image from "next/image";
import Link from "next/link";
import profile from "./profile.png";
import React from "react";

export default function Home() {
  const projects = [
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
      tech: [
        "Golang",
        "PostgreSQL",
        "Redis",
        "Docker",
        "MaxMind GeoIP",
        "WHOIS",
      ],
    },
  ];

  type Experience = {
    company: string;
    position: string;
    period: string;
    location: string;
    achievements: string[];
    technologies?: string[];
  };

  const experiences: Experience[] = [
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

  type SkillGroup = {
    category: string;
    skills: string[];
  };

  const skillGroups: SkillGroup[] = [
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

  type Education = {
    institution: string;
    degree: string;
    period: string;
    technologies?: string[];
  };

  const educations: Education[] = [
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

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          {/* Subtle gradient overlay */}
          <div className="from-brand-dark via-brand-dark to-brand-dark absolute inset-0 bg-gradient-to-br opacity-50"></div>
          {/* Geometric pattern */}
          <div className="absolute top-0 left-0 h-full w-full opacity-10">
            <div className="border-brand-light absolute top-10 left-10 h-32 w-32 rotate-12 transform border-2 opacity-30"></div>
            <div className="border-brand-light absolute top-32 right-20 h-24 w-24 -rotate-12 transform border-2 opacity-20"></div>
            <div className="border-brand-accent absolute bottom-20 left-20 h-20 w-20 rotate-45 transform border-2 opacity-40"></div>
            <div className="border-brand-light absolute right-40 bottom-40 h-16 w-16 -rotate-45 transform border-2 opacity-15"></div>
          </div>
        </div>

        <div className="container mx-auto flex min-h-screen flex-col items-start justify-center px-6 py-20 md:px-8 md:py-24 xl:flex-row-reverse xl:items-center xl:gap-20 xl:py-32">
          {/* Profile Image with Enhanced Styling */}
          <div className="flex w-full justify-center xl:w-auto xl:justify-center">
            <Image
              className="border-brand-accent border-opacity-50 relative mb-10 h-auto w-2/3 rounded-full border-4 md:mb-12 xl:mb-0 xl:w-auto"
              src={profile}
              width={512}
              height={512}
              alt="Cornelius Venti Icon"
              priority
            />
          </div>

          {/* Content with Enhanced Typography */}
          <div className="flex flex-col items-start gap-8 text-left xl:gap-12">
            <div className="relative">
              {/* Background accent for title */}
              <div className="from-brand-accent absolute -inset-2 bg-gradient-to-r to-transparent opacity-5 blur-sm"></div>
              <h1 className="from-brand-light to-brand-accent relative bg-gradient-to-r bg-clip-text text-4xl leading-tight font-black uppercase md:text-5xl lg:text-6xl xl:text-8xl xl:leading-none">
                I&apos;m a{" "}
                <span className="text-brand-accent">Software Engineer</span>
              </h1>
            </div>

            <div className="w-full max-w-4xl space-y-6">
              <p className="text-xl leading-relaxed opacity-90 xl:text-2xl xl:leading-relaxed">
                Software Engineer specializing in
              </p>

              {/* Enhanced badge groups with better organization */}
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <span className="bg-brand-accent bg-opacity-20 text-brand-dark border-brand-accent border-opacity-30 hover:bg-opacity-40 hover:border-opacity-70 cursor-pointer rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg xl:text-base">
                    AI-Powered Development
                  </span>
                  <span className="bg-brand-accent bg-opacity-20 text-brand-dark border-brand-accent border-opacity-30 hover:bg-opacity-40 hover:border-opacity-70 cursor-pointer rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg xl:text-base">
                    Golang
                  </span>
                  <span className="bg-brand-accent bg-opacity-20 text-brand-dark border-brand-accent border-opacity-30 hover:bg-opacity-40 hover:border-opacity-70 cursor-pointer rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg xl:text-base">
                    Python
                  </span>
                  <span className="bg-brand-accent bg-opacity-20 text-brand-dark border-brand-accent border-opacity-30 hover:bg-opacity-40 hover:border-opacity-70 cursor-pointer rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg xl:text-base">
                    React
                  </span>
                  <span className="bg-brand-accent bg-opacity-20 text-brand-dark border-brand-accent border-opacity-30 hover:bg-opacity-40 hover:border-opacity-70 cursor-pointer rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg xl:text-base">
                    Vue.js
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="bg-brand-accent bg-opacity-20 text-brand-dark border-brand-accent border-opacity-30 hover:bg-opacity-40 hover:border-opacity-70 cursor-pointer rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg xl:text-base">
                    Remote Specialist
                  </span>
                  <span className="bg-brand-accent bg-opacity-20 text-brand-dark border-brand-accent border-opacity-30 hover:bg-opacity-40 hover:border-opacity-70 cursor-pointer rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg xl:text-base">
                    Cursor & Claude Code
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="container mx-auto px-6 md:px-8">
        <div className="relative flex items-center justify-center py-8">
          <div className="bg-brand-accent absolute h-px w-full opacity-20"></div>
          <div className="bg-brand-accent mx-4 h-2 w-2 rotate-45 transform opacity-40"></div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="from-brand-dark via-brand-accent/10 to-brand-dark absolute inset-0 bg-gradient-to-bl opacity-30"></div>
          <div className="absolute top-0 right-0 h-full w-full opacity-5">
            <div className="border-brand-accent absolute top-20 right-10 h-28 w-28 -rotate-12 transform border-2 opacity-60"></div>
            <div className="border-brand-light absolute bottom-32 left-10 h-20 w-20 rotate-45 transform border-2"></div>
            <div className="border-brand-accent absolute top-40 left-32 h-12 w-12 rotate-30 transform border-2 opacity-40"></div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center justify-center px-6 py-16 md:px-8 md:py-24 xl:flex-row xl:justify-start xl:py-32">
          <div className="flex w-full max-w-6xl flex-col items-start gap-10 text-left md:gap-12 xl:gap-16">
            <div className="relative">
              <div className="from-brand-accent absolute -inset-2 bg-gradient-to-r to-transparent opacity-5 blur-sm"></div>
              <h2 className="from-brand-light to-brand-accent relative bg-gradient-to-r bg-clip-text text-2xl font-black uppercase md:text-3xl lg:text-4xl xl:text-5xl">
                About
              </h2>
            </div>
            <div className="space-y-8 text-base xl:text-lg">
              <p className="leading-relaxed xl:leading-relaxed">
                Software Engineer with{" "}
                <span className="text-brand-accent font-semibold">
                  6+ years
                </span>{" "}
                of experience building scalable web applications, APIs, and data
                processing systems across diverse industries including
                e-commerce, insurance, and SaaS platforms.
              </p>
              <p className="leading-relaxed xl:leading-relaxed">
                Currently specializing in AI-assisted development and
                automation, building sophisticated lead generation systems using
                modern APIs and cloud technologies. Expert in end-to-end
                development from backend data pipelines to customer-facing
                storefronts, with a proven track record of delivering complex
                projects from concept to production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="container mx-auto px-6 md:px-8">
        <div className="relative flex items-center justify-center py-8">
          <div className="bg-brand-accent absolute h-px w-full opacity-20"></div>
          <div className="bg-brand-accent mx-4 h-2 w-2 rotate-45 transform opacity-40"></div>
        </div>
      </div>

      {/* Experiences Section */}
      <section id="experiences" className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="from-brand-dark via-brand-accent/8 to-brand-dark absolute inset-0 bg-gradient-to-tr opacity-25"></div>
          <div className="absolute top-0 left-0 h-full w-full opacity-8">
            <div className="border-brand-light absolute top-16 left-16 h-24 w-24 rotate-12 transform border-2"></div>
            <div className="border-brand-accent absolute top-40 right-12 h-32 w-32 -rotate-12 transform border-2 opacity-50"></div>
            <div className="border-brand-light absolute right-24 bottom-24 h-16 w-16 rotate-45 transform border-2"></div>
            <div className="border-brand-accent absolute bottom-40 left-20 h-20 w-20 -rotate-30 transform border-2 opacity-40"></div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center justify-center px-6 py-16 md:px-8 md:py-24 xl:flex-row xl:justify-start xl:py-32">
          <div className="flex w-full max-w-6xl flex-col items-start gap-10 text-left md:gap-12 xl:gap-16">
            <div className="relative">
              <div className="from-brand-accent absolute -inset-2 bg-gradient-to-r to-transparent opacity-5 blur-sm"></div>
              <h2 className="from-brand-light to-brand-accent relative bg-gradient-to-r bg-clip-text text-2xl font-black uppercase md:text-3xl lg:text-4xl xl:text-5xl">
                Experiences
              </h2>
            </div>
            <div className="space-y-8 text-base md:space-y-10 xl:text-lg">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border-brand-accent border-l-4 pl-6 md:pl-8"
                >
                  <div className="mb-2 text-xl font-semibold md:text-2xl xl:text-3xl">
                    {exp.company}
                  </div>
                  <div className="mb-1 text-base opacity-90 md:text-lg xl:text-xl">
                    {exp.position} • {exp.location}
                  </div>
                  <div className="mb-4 text-sm opacity-80 md:text-base xl:text-lg">
                    <span className="text-brand-accent font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-brand-accent bg-opacity-15 text-brand-dark border-brand-accent border-opacity-30 hover:bg-opacity-35 hover:border-opacity-60 cursor-pointer rounded-lg border px-3 py-2 text-xs font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md xl:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="container mx-auto px-6 md:px-8">
        <div className="relative flex items-center justify-center py-8">
          <div className="bg-brand-accent absolute h-px w-full opacity-20"></div>
          <div className="bg-brand-accent mx-4 h-2 w-2 rotate-45 transform opacity-40"></div>
        </div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="from-brand-dark via-brand-dark to-brand-dark absolute inset-0 bg-gradient-to-tl opacity-35"></div>
          <div className="absolute top-0 right-0 h-full w-full opacity-6">
            <div className="border-brand-accent absolute top-12 right-20 h-36 w-36 rotate-45 transform border-2 opacity-50"></div>
            <div className="border-brand-light absolute bottom-16 left-12 h-20 w-20 -rotate-12 transform border-2"></div>
            <div className="border-brand-accent absolute top-32 left-16 h-16 w-16 -rotate-45 transform border-2 opacity-35"></div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center justify-center px-6 py-16 md:px-8 md:py-24 xl:flex-row xl:justify-start xl:py-32">
          <div className="flex w-full max-w-6xl flex-col items-start gap-10 text-left md:gap-12 xl:gap-16">
            <div className="relative">
              <div className="from-brand-accent absolute -inset-2 bg-gradient-to-r to-transparent opacity-5 blur-sm"></div>
              <h2 className="from-brand-light to-brand-accent relative bg-gradient-to-r bg-clip-text text-2xl font-black uppercase md:text-3xl lg:text-4xl xl:text-5xl">
                Skills
              </h2>
            </div>
            <div className="space-y-8 text-base md:space-y-10 xl:text-lg">
              {skillGroups.map((skillGroup, index) => (
                <div
                  key={index}
                  className="border-brand-accent border-l-4 pl-6 md:pl-8"
                >
                  <div className="mb-4 text-2xl font-semibold xl:text-3xl">
                    {skillGroup.category}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-brand-accent bg-opacity-15 text-brand-dark border-brand-accent border-opacity-30 hover:bg-opacity-35 hover:border-opacity-60 cursor-pointer rounded-lg border px-3 py-2 text-xs font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md xl:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="container mx-auto px-6 md:px-8">
        <div className="relative flex items-center justify-center py-8">
          <div className="bg-brand-accent absolute h-px w-full opacity-20"></div>
          <div className="bg-brand-accent mx-4 h-2 w-2 rotate-45 transform opacity-40"></div>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="from-brand-dark via-brand-accent/8 to-brand-dark absolute inset-0 bg-gradient-to-br opacity-28"></div>
          <div className="absolute top-0 left-0 h-full w-full opacity-7">
            <div className="border-brand-light absolute top-24 left-24 h-28 w-28 -rotate-45 transform border-2"></div>
            <div className="border-brand-light absolute right-16 bottom-20 h-24 w-24 rotate-12 transform border-2"></div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center justify-center px-6 py-16 md:px-8 md:py-24 xl:flex-row xl:justify-start xl:py-32">
          <div className="flex w-full max-w-6xl flex-col items-start gap-10 text-left md:gap-12 xl:gap-16">
            <div className="relative">
              <div className="from-brand-accent absolute -inset-2 bg-gradient-to-r to-transparent opacity-5 blur-sm"></div>
              <h2 className="from-brand-light to-brand-accent relative bg-gradient-to-r bg-clip-text text-2xl font-black uppercase md:text-3xl lg:text-4xl xl:text-5xl">
                Projects
              </h2>
            </div>
            <div className="space-y-8 text-base md:space-y-10 xl:text-lg">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="border-brand-accent border-l-4 pl-6 md:pl-8"
                >
                  <Link
                    href={project.href}
                    target="_blank"
                    className="hover:text-brand-accent mb-2 text-xl font-semibold transition-colors hover:underline hover:underline-offset-4 md:text-2xl xl:text-3xl"
                  >
                    {project.name}
                  </Link>
                  <div className="mb-4 text-base leading-relaxed opacity-90 xl:text-lg">
                    {project.description}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-brand-accent bg-opacity-20 text-brand-dark border-brand-accent border-opacity-30 hover:bg-opacity-40 hover:border-opacity-70 cursor-pointer rounded-lg border px-3 py-2 text-xs font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg xl:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="container mx-auto px-6 md:px-8">
        <div className="relative flex items-center justify-center py-8">
          <div className="bg-brand-accent absolute h-px w-full opacity-20"></div>
          <div className="bg-brand-accent mx-4 h-2 w-2 rotate-45 transform opacity-40"></div>
        </div>
      </div>

      {/* Educations Section */}
      <section id="educations" className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="from-brand-dark via-brand-dark to-brand-dark absolute inset-0 bg-gradient-to-tr opacity-32"></div>
          <div className="absolute top-0 right-0 h-full w-full opacity-6">
            <div className="border-brand-light absolute top-20 right-32 h-32 w-32 rotate-30 transform border-2"></div>
            <div className="border-brand-light absolute bottom-32 left-20 h-18 w-18 -rotate-30 transform border-2"></div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center justify-center px-6 py-16 md:px-8 md:py-24 xl:flex-row xl:justify-start xl:py-32">
          <div className="flex w-full max-w-6xl flex-col items-start gap-10 text-left md:gap-12 xl:gap-16">
            <div className="relative">
              <div className="from-brand-accent absolute -inset-2 bg-gradient-to-r to-transparent opacity-5 blur-sm"></div>
              <h2 className="from-brand-light to-brand-accent relative bg-gradient-to-r bg-clip-text text-2xl font-black uppercase md:text-3xl lg:text-4xl xl:text-5xl">
                Educations
              </h2>
            </div>
            <div className="space-y-8 text-base md:space-y-10 xl:text-lg">
              {educations.map((edu, index) => (
                <div
                  key={index}
                  className="border-brand-accent border-l-4 pl-6 md:pl-8"
                >
                  <div className="mb-2 text-xl font-semibold md:text-2xl xl:text-3xl">
                    {edu.institution}
                  </div>
                  <div className="mb-1 text-base opacity-90 md:text-lg xl:text-xl">
                    {edu.degree}
                  </div>
                  <div className="mb-4 text-sm opacity-80 md:text-base xl:text-lg">
                    <span className="text-brand-accent font-semibold">
                      {edu.period}
                    </span>
                  </div>
                  {edu.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {edu.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-brand-accent bg-opacity-15 text-brand-dark border-brand-accent border-opacity-30 hover:bg-opacity-35 hover:border-opacity-60 cursor-pointer rounded-lg border px-3 py-2 text-xs font-semibold transition-all duration-300 hover:scale-105 hover:shadow-md xl:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
