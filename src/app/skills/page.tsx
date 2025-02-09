export default function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "Javascript",
    "Typescript",
    "React.js",
    "Vue.js",
    "Next.js",
    "Nuxt.js",
    "Tailwind CSS",
    "Bootstrap",
    "Radix UI",
    "Material UI",
    "Vuetify",
    "Vuex",
    "Vue Router",
    "VeeValidate",
    "Axios",
    "Lodash",
    "Chart.js",
    "Moment.js",
    "Jest",
    "Node.js",
    "Nest.js",
    "Express.js",
    "Handlebars.js",
    "TypeORM",
    "MySQL",
    "MongoDB",
    "Firebase Firestore",
    "Redis",
    "Git",
    "Github",
    "GitLab",
    "Firebase",
    "Postman",
    "SendGrid API",
    "MailChimp API",
    "Mediastack API",
    "Jira",
    "Slack",
    "Figma",
    "Visual Studio Code",
  ];

  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-8 xl:flex-row xl:justify-start">
      <div className="flex flex-col items-center gap-4 text-center xl:items-start xl:gap-8 xl:text-left">
        <h2 className="text-3xl font-black uppercase xl:text-6xl">Skills</h2>
        <p className="text-xl xl:text-2xl">
          {skills.map((skill, index) => (
            <>
              <span key={index}>{skill}</span>
              {index < skills.length - 2 && (
                <span key={`delimiter_${index}`}>, </span>
              )}
              {index === skills.length - 2 && (
                <span key={`delimiter_${index}`}>, and </span>
              )}
            </>
          ))}
        </p>
      </div>
    </main>
  );
}
