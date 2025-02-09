export default function Skills() {
  type SkillGroup = {
    category: string;
    skills: string[];
  };

  const skillGroups: SkillGroup[] = [
    {
      category: "Languages",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Typescript",
        "Node.js",
        "Python",
        "PHP",
      ],
    },
    {
      category: "Frameworks",
      skills: [
        "React.js",
        "Next.js",
        "Vue.js",
        "Nuxt.js",
        "Express.js",
        "Nest.js",
        "Flask",
        "Tailwind CSS",
        "Bootstrap",
        "Laravel",
      ],
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools",
      skills: [
        "Git",
        "Docker",
        "Kubernetes",
        "Redis",
        "SendGrid",
        "Stripe",
        "Invoice Ninja",
        "Xero",
      ],
    },
    {
      category: "Softwares",
      skills: ["Figma", "Postman", "Slack", "Trello", "Jira"],
    },
  ];

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-8 xl:flex-row xl:justify-start">
      <div className="flex flex-col items-center gap-4 text-center xl:items-start xl:gap-8 xl:text-left">
        <h2 className="text-3xl font-black uppercase xl:text-6xl">Skills</h2>
        <div className="flex flex-col gap-y-2 font-mono">
          {skillGroups.map((skillGroup, index) => (
            <div key={index}>
              <h1 className="text-xl xl:text-2xl">{skillGroup.category}</h1>
              <p className="text-base xl:text-lg">
                {skillGroup.skills.map((skill, index) => (
                  <>
                    <span key={`skill_${index}`}>{skill}</span>
                    {index < skillGroup.skills.length - 2 && (
                      <span key={`delimiter_${index}`}>, </span>
                    )}
                    {index === skillGroup.skills.length - 2 && (
                      <span key={`delimiter_${index}`}>, and </span>
                    )}
                  </>
                ))}
                .
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
