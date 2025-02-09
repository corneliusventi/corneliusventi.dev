export default function About() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-8 xl:flex-row xl:justify-start">
      <div className="flex flex-col items-center gap-4 text-center xl:items-start xl:gap-8 xl:text-left">
        <h2 className="text-3xl font-black uppercase xl:text-6xl">About</h2>
        <p className="font-mono text-xl xl:text-2xl">
          I&apos;m a Software Engineer with 6+ years of experience building and
          maintaining responsive websites & APIs in Orange Multimedia,
          Satumarket, FWD Insurance and Proxycurl. Recently, I led and managed
          the development of Teams feature implementation, including user
          management, team creation workflows, and access control systems.
        </p>
      </div>
    </main>
  );
}
