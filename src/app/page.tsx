import Image from "next/image";
import Link from "next/link";
import profile from "./profile.png";
import React from "react";
import {
  personalInfo,
  aboutInfo,
  projects,
  experiences,
  skillGroups,
  educations,
} from "./data/resume";

export default function Home() {
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
                <span className="text-brand-accent">{personalInfo.title}</span>
              </h1>
            </div>

            <div className="w-full max-w-4xl space-y-6">
              <p className="text-xl leading-relaxed opacity-90 xl:text-2xl xl:leading-relaxed">
                {personalInfo.title} specializing in
              </p>

              {/* Enhanced badge groups with better organization */}
              <div className="space-y-4">
                {aboutInfo.specializations.map((group, groupIndex) => (
                  <div key={groupIndex} className="flex flex-wrap gap-3">
                    {group.map((specialization, specIndex) => (
                      <span
                        key={specIndex}
                        className="bg-brand-accent bg-opacity-20 text-brand-dark border-brand-accent border-opacity-30 hover:bg-opacity-40 hover:border-opacity-70 cursor-pointer rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg xl:text-base"
                      >
                        {specialization}
                      </span>
                    ))}
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
                <Link
                  href={`mailto:${personalInfo.email}`}
                  className="group bg-brand-accent text-brand-dark hover:bg-opacity-90 hover:shadow-brand-accent/30 inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold tracking-wide uppercase shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                >
                  Get in Touch
                  <svg
                    className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </Link>

                <Link
                  href="#about"
                  className="group border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-brand-dark inline-flex items-center justify-center rounded-full border-2 px-8 py-4 text-base font-bold tracking-wide uppercase transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  Learn More
                  <svg
                    className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </Link>
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
          <div className="from-brand-dark via-brand-dark to-brand-dark absolute inset-0 bg-gradient-to-br opacity-50"></div>
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
              <h2 className="text-brand-accent relative text-2xl font-black uppercase md:text-3xl lg:text-4xl xl:text-5xl">
                About
              </h2>
            </div>
            <div className="space-y-8 text-base xl:text-lg">
              {aboutInfo.description.map((paragraph, index) => (
                <p key={index} className="leading-relaxed xl:leading-relaxed">
                  {index === 0 ? (
                    <>
                      Software Engineer with{" "}
                      <span className="text-brand-accent font-semibold">
                        {aboutInfo.yearsOfExperience}
                      </span>{" "}
                      {paragraph.replace("Software Engineer with 6+ years", "")}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
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

      {/* Experiences Section */}
      <section id="experiences" className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="from-brand-dark via-brand-dark to-brand-dark absolute inset-0 bg-gradient-to-br opacity-50"></div>
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
              <h2 className="text-brand-accent relative text-2xl font-black uppercase md:text-3xl lg:text-4xl xl:text-5xl">
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
          <div className="from-brand-dark via-brand-dark to-brand-dark absolute inset-0 bg-gradient-to-br opacity-50"></div>
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
              <h2 className="text-brand-accent relative text-2xl font-black uppercase md:text-3xl lg:text-4xl xl:text-5xl">
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
          <div className="from-brand-dark via-brand-dark to-brand-dark absolute inset-0 bg-gradient-to-br opacity-50"></div>
          <div className="absolute top-0 left-0 h-full w-full opacity-7">
            <div className="border-brand-light absolute top-24 left-24 h-28 w-28 -rotate-45 transform border-2"></div>
            <div className="border-brand-light absolute right-16 bottom-20 h-24 w-24 rotate-12 transform border-2"></div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center justify-center px-6 py-16 md:px-8 md:py-24 xl:flex-row xl:justify-start xl:py-32">
          <div className="flex w-full max-w-6xl flex-col items-start gap-10 text-left md:gap-12 xl:gap-16">
            <div className="relative">
              <div className="from-brand-accent absolute -inset-2 bg-gradient-to-r to-transparent opacity-5 blur-sm"></div>
              <h2 className="text-brand-accent relative text-2xl font-black uppercase md:text-3xl lg:text-4xl xl:text-5xl">
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
          <div className="from-brand-dark via-brand-dark to-brand-dark absolute inset-0 bg-gradient-to-br opacity-50"></div>
          <div className="absolute top-0 right-0 h-full w-full opacity-6">
            <div className="border-brand-light absolute top-20 right-32 h-32 w-32 rotate-30 transform border-2"></div>
            <div className="border-brand-light absolute bottom-32 left-20 h-18 w-18 -rotate-30 transform border-2"></div>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-center justify-center px-6 py-16 md:px-8 md:py-24 xl:flex-row xl:justify-start xl:py-32">
          <div className="flex w-full max-w-6xl flex-col items-start gap-10 text-left md:gap-12 xl:gap-16">
            <div className="relative">
              <div className="from-brand-accent absolute -inset-2 bg-gradient-to-r to-transparent opacity-5 blur-sm"></div>
              <h2 className="text-brand-accent relative text-2xl font-black uppercase md:text-3xl lg:text-4xl xl:text-5xl">
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
