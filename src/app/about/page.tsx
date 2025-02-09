export default function About() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-8 xl:flex-row xl:justify-start">
      <div className="flex flex-col items-center gap-4 text-center xl:items-start xl:gap-8 xl:text-left">
        <h2 className="text-3xl font-black uppercase xl:text-6xl">About</h2>
        <p className="text-xl xl:text-2xl">
          I&apos;m a Full Stack Developer with 4+ years of experience building
          and maintaining responsive websites in Orange Multimedia, Satumarket
          and FWD Insurance. Recently, I delivered several responsive websites
          using Typescript, Next.js and Tailwind CSS with news feeds integration
          (Mediastack API) and email waitlist integration (MailChimp API).
        </p>
      </div>
    </main>
  );
}
