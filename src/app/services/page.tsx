import Link from "next/link";

export default function About() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-8 xl:flex-row xl:justify-start">
      <div className="flex flex-col items-center gap-4 text-center xl:items-start xl:gap-8 xl:text-left">
        <h2 className="text-3xl font-black uppercase xl:text-6xl">services</h2>
        <p className="text-xl xl:text-2xl">
          Are you looking for a professional full-stack developer to bring your
          project to life? Look no further! I offer a range of services with
          customizable features to meet your specific needs, whether you require
          basic, intermediate, or advanced features. Let me bring your vision to
          life with my expert full-stack development. Contact me today to get
          started!
        </p>
        <Link
          className="rounded-md bg-brand-light px-4 py-1 text-xl font-medium text-brand-dark"
          href="https://www.fiverr.com/corneliusventi"
          target="_blank"
        >
          Get Started
        </Link>
      </div>
    </main>
  );
}
