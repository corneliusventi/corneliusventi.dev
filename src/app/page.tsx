import Image from "next/image";
import Link from "next/link";
import profile from "./profile.png";
import React from "react";

export default function Home() {
  const projects = [
    {
      name: "Terminal Portfolio",
      description:
        "A personal portfolio website built as an interactive terminal-style interface. Features modern development tooling with ESLint configuration, lint-staged pre-commit hooks, and comprehensive build pipeline for development and production environments.",
      href: "https://terminal.corneliusventi.dev/",
      tech: ["React", "TypeScript", "Next.js", "CSS", "ESLint"],
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
      <section
        id="home"
        className="container mx-auto flex min-h-screen flex-col items-start justify-center px-8 py-16 xl:flex-row-reverse xl:items-center xl:gap-16"
      >
        <div className="flex w-full justify-center xl:w-auto xl:justify-end">
          <Image
            className="mb-8 h-auto w-2/3 xl:mb-0 xl:w-auto"
            src={profile}
            width={512}
            height={512}
            alt="Cornelius Venti Icon"
            priority
          />
        </div>
        <div className="flex flex-col items-start gap-6 text-left xl:gap-10">
          <h1 className="text-3xl leading-tight font-black uppercase xl:text-8xl xl:leading-none">
            I&apos;m a Software Engineer
          </h1>
          <div className="max-w-2xl">
            <p className="mb-4 text-xl leading-relaxed xl:text-2xl xl:leading-relaxed">
              Software Engineer specializing in
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="bg-brand-light bg-opacity-20 text-brand-dark border-brand-light border-opacity-30 hover:bg-opacity-40 cursor-pointer rounded border px-3 py-1 text-sm font-semibold transition-all duration-200 hover:scale-105 xl:text-base">
                AI-Powered Development
              </span>
              <span className="bg-brand-light bg-opacity-20 text-brand-dark border-brand-light border-opacity-30 hover:bg-opacity-40 cursor-pointer rounded border px-3 py-1 text-sm font-semibold transition-all duration-200 hover:scale-105 xl:text-base">
                Golang
              </span>
              <span className="bg-brand-light bg-opacity-20 text-brand-dark border-brand-light border-opacity-30 hover:bg-opacity-40 cursor-pointer rounded border px-3 py-1 text-sm font-semibold transition-all duration-200 hover:scale-105 xl:text-base">
                Python
              </span>
              <span className="bg-brand-light bg-opacity-20 text-brand-dark border-brand-light border-opacity-30 hover:bg-opacity-40 cursor-pointer rounded border px-3 py-1 text-sm font-semibold transition-all duration-200 hover:scale-105 xl:text-base">
                React
              </span>
              <span className="bg-brand-light bg-opacity-20 text-brand-dark border-brand-light border-opacity-30 hover:bg-opacity-40 cursor-pointer rounded border px-3 py-1 text-sm font-semibold transition-all duration-200 hover:scale-105 xl:text-base">
                Vue.js
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-brand-light bg-opacity-20 text-brand-dark border-brand-light border-opacity-30 hover:bg-opacity-40 cursor-pointer rounded border px-3 py-1 text-sm font-semibold transition-all duration-200 hover:scale-105 xl:text-base">
                Remote Specialist
              </span>
              <span className="bg-brand-light bg-opacity-20 text-brand-dark border-brand-light border-opacity-30 hover:bg-opacity-40 cursor-pointer rounded border px-3 py-1 text-sm font-semibold transition-all duration-200 hover:scale-105 xl:text-base">
                Cursor & Claude Code
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="container mx-auto px-8">
        <hr className="border-brand-light opacity-20" />
      </div>

      {/* About Section */}
      <section
        id="about"
        className="container mx-auto flex flex-col items-center justify-center px-8 py-20 xl:flex-row xl:justify-start"
      >
        <div className="flex max-w-4xl flex-col items-start gap-8 text-left xl:gap-12">
          <h2 className="text-3xl font-black uppercase xl:text-6xl">About</h2>
          <div className="flex flex-col gap-8 text-xl xl:text-2xl">
            <p className="leading-relaxed xl:leading-relaxed">
              Software Engineer with 6+ years of experience building scalable
              web applications, APIs, and data processing systems across diverse
              industries including e-commerce, insurance, and SaaS platforms.
            </p>
            <p className="leading-relaxed xl:leading-relaxed">
              Currently specializing in AI-assisted development and automation,
              building sophisticated lead generation systems using modern APIs
              and cloud technologies. Expert in end-to-end development from
              backend data pipelines to customer-facing storefronts, with a
              proven track record of delivering complex projects from concept to
              production.
            </p>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="container mx-auto px-8">
        <hr className="border-brand-light opacity-20" />
      </div>

      {/* Experiences Section */}
      <section
        id="experiences"
        className="container mx-auto flex flex-col items-center justify-center px-8 py-20 xl:flex-row xl:justify-start"
      >
        <div className="flex max-w-5xl flex-col items-start gap-8 text-left xl:gap-12">
          <h2 className="text-3xl font-black uppercase xl:text-6xl">
            Experiences
          </h2>
          <div className="space-y-6 text-base xl:text-lg">
            {experiences.map((exp, index) => (
              <div key={index} className="border-brand-light border-l-4 pl-8">
                <div className="mb-2 text-2xl font-semibold xl:text-3xl">
                  {exp.company}
                </div>
                <div className="mb-1 text-lg opacity-90 xl:text-xl">
                  {exp.position} • {exp.location}
                </div>
                <div className="mb-4 text-sm opacity-80 xl:text-base">
                  {exp.period}
                </div>
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-brand-light bg-opacity-10 text-brand-dark border-brand-light border-opacity-30 hover:bg-opacity-30 cursor-pointer rounded border px-2 py-1 text-xs font-semibold transition-all duration-200 hover:scale-105 xl:text-sm"
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
      </section>

      {/* Section Divider */}
      <div className="container mx-auto px-8">
        <hr className="border-brand-light opacity-20" />
      </div>

      {/* Skills Section */}
      <section
        id="skills"
        className="container mx-auto flex flex-col items-center justify-center px-8 py-20 xl:flex-row xl:justify-start"
      >
        <div className="flex max-w-5xl flex-col items-start gap-8 text-left xl:gap-12">
          <h2 className="text-3xl font-black uppercase xl:text-6xl">Skills</h2>
          <div className="space-y-10 text-base xl:text-lg">
            {skillGroups.map((skillGroup, index) => (
              <div key={index} className="border-brand-light border-l-4 pl-8">
                <div className="mb-4 text-2xl font-semibold xl:text-3xl">
                  {skillGroup.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-brand-light bg-opacity-10 text-brand-dark border-brand-light border-opacity-30 hover:bg-opacity-30 cursor-pointer rounded border px-2 py-1 text-xs font-semibold transition-all duration-200 hover:scale-105 xl:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="container mx-auto px-8">
        <hr className="border-brand-light opacity-20" />
      </div>

      {/* Projects Section */}
      <section
        id="projects"
        className="container mx-auto flex flex-col items-center justify-center px-8 py-20 xl:flex-row xl:justify-start"
      >
        <div className="flex max-w-5xl flex-col items-start gap-8 text-left xl:gap-12">
          <h2 className="text-3xl font-black uppercase xl:text-6xl">
            Projects
          </h2>
          <div className="space-y-10 text-base xl:text-lg">
            {projects.map((project, index) => (
              <div key={index} className="border-brand-light border-l-4 pl-8">
                <Link
                  href={project.href}
                  target="_blank"
                  className="mb-2 text-2xl font-semibold transition-colors hover:underline hover:underline-offset-4 xl:text-3xl"
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
                      className="bg-brand-light bg-opacity-20 text-brand-dark border-brand-light border-opacity-30 hover:bg-opacity-40 cursor-pointer rounded border px-2 py-1 text-xs font-semibold transition-all duration-200 hover:scale-105 xl:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="container mx-auto px-8">
        <hr className="border-brand-light opacity-20" />
      </div>

      {/* Educations Section */}
      <section
        id="educations"
        className="container mx-auto flex flex-col items-center justify-center px-8 py-20 xl:flex-row xl:justify-start"
      >
        <div className="flex max-w-5xl flex-col items-start gap-8 text-left xl:gap-12">
          <h2 className="text-3xl font-black uppercase xl:text-6xl">
            Educations
          </h2>
          <div className="space-y-6 text-base xl:text-lg">
            {educations.map((edu, index) => (
              <div key={index} className="border-brand-light border-l-4 pl-8">
                <div className="mb-2 text-2xl font-semibold xl:text-3xl">
                  {edu.institution}
                </div>
                <div className="mb-1 text-lg opacity-90 xl:text-xl">
                  {edu.degree}
                </div>
                <div className="mb-4 text-sm opacity-80 xl:text-base">
                  {edu.period}
                </div>
                {edu.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {edu.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-brand-light bg-opacity-10 text-brand-dark border-brand-light border-opacity-30 hover:bg-opacity-30 cursor-pointer rounded border px-2 py-1 text-xs font-semibold transition-all duration-200 hover:scale-105 xl:text-sm"
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
      </section>
    </>
  );
}
