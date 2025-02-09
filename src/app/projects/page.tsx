import Link from "next/link";

export default function Projects() {
  const projects = [
    { text: "Terminal", href: "https://terminal.corneliusventi.dev/" },
  ];

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-8 xl:flex-row xl:justify-start">
      <div className="flex flex-col items-center gap-4 text-center xl:items-start xl:gap-8 xl:text-left">
        <h2 className="text-3xl font-black uppercase xl:text-6xl">Projects</h2>
        <p className="text-xl xl:text-2xl">
          {projects.map((project, index) => (
            <>
              <Link
                key={`project_${index}`}
                href={project.href}
                target="_blank"
              >
                {project.text}
              </Link>
              {index <= projects.length - 2 && (
                <span key={`delimiter_${index}`}>
                  {index === projects.length - 2 ? ", and " : ", "}
                </span>
              )}
            </>
          ))}
          .
        </p>
      </div>
    </main>
  );
}
