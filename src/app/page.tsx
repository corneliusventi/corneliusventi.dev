import Image from "next/image";
import icon from "./icon.png";

export default function Home() {
  return (
    <main>
      <section className="container mx-auto flex flex-col items-center px-8 xl:flex-row-reverse">
        <Image
          className="h-auto w-2/3 xl:w-auto"
          src={icon}
          width={512}
          height={512}
          alt="Cornelius Venti Icon"
          priority
        />
        <div className="flex flex-col items-center gap-4 text-center xl:items-start xl:gap-8 xl:text-left">
          <h2 className="text-3xl font-black uppercase xl:text-8xl">
            I&apos;m a Full Stack Developer
          </h2>
          <h3 className="text-2xl">
            Typescript, Next.js, Tailwind CSS, and more
          </h3>
        </div>
      </section>
    </main>
  );
}
