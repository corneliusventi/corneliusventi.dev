import Link from "next/link";
import React from "react";
import {
  personalInfo,
  projects,
  experiences,
  skillGroups,
} from "./resume";
import { CopyEmail } from "./components/CopyEmail";

export default function Home() {
  // Explicitly curate and reorder the top 3 projects
  const curatedProjects = [
    projects.find((p) => p.name.toLowerCase() === "siftlyapi"),
    projects.find((p) => p.name.toLowerCase() === "preces"),
    projects.find((p) => p.name.toLowerCase() === "jobsh"),
  ].filter((p): p is typeof projects[0] => p !== undefined);

  // Curate to last 3 experiences
  const curatedExperiences = experiences.slice(0, 3);

  return (
    <div className="flex flex-col gap-24">
      {/* Intro - High Impact Tagline */}
      <section className="animate-reveal reveal-0">
        <p className="text-2xl leading-relaxed text-zinc-900 dark:text-zinc-100 font-medium">
          Senior Full Stack Engineer with 6+ years of experience architecting distributed Go services, 
          high-concurrency Python backends, and performant React 19 interfaces. Specialist in asynchronous ETL pipelines and AI-driven development.
        </p>
      </section>

      {/* Projects - Curated & Concise */}
      <section className="flex flex-col gap-8 animate-reveal reveal-1">
        <h2 className="text-xs font-medium text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.2em] font-mono">
          Selected Engineering Projects
        </h2>
        <div className="flex flex-col gap-12">
          {curatedProjects.map((project, index) => (
            <div key={index} className="group flex flex-col gap-2">
              <Link
                href={project.href}
                target="_blank"
                className="text-lg font-bold text-zinc-950 dark:text-zinc-50 link-underline inline-flex items-center gap-2 font-mono uppercase tracking-tight"
              >
                <span className="transition-transform group-hover:translate-x-1">{project.name}</span>
              </Link>
              <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 mt-1 font-mono">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills - Technical Expertise Grid */}
      <section className="flex flex-col gap-8 animate-reveal reveal-2">
        <h2 className="text-xs font-medium text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.2em] font-mono">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
          {skillGroups.map((group, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="text-sm font-bold text-zinc-950 dark:text-zinc-50 uppercase tracking-tight font-mono">
                {group.category}
              </h3>
              <p className="text-[13px] text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {group.skills.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience - Seniority Focus */}
      <section className="flex flex-col gap-8 animate-reveal reveal-3">
        <h2 className="text-xs font-medium text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.2em] font-mono">
          Recent Experience
        </h2>
        <div className="flex flex-col gap-10">
          {curatedExperiences.map((exp, index) => (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-4 group">
                <span className="text-lg font-bold text-zinc-950 dark:text-zinc-50 transition-transform group-hover:translate-x-1 font-mono uppercase tracking-tight">
                  {exp.company}
                </span>
                <span className="text-xs text-zinc-400 dark:text-zinc-600 tabular-nums font-mono">
                  {exp.period}
                </span>
              </div>
              <span className="text-base text-zinc-500 dark:text-zinc-400">{exp.position}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="pt-4 animate-reveal reveal-4">
        <CopyEmail email={personalInfo.email} />
      </section>
    </div>
  );
}
