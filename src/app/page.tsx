import Image from "next/image";
import icon from "./icon.png";

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen flex-col items-center justify-center px-8 xl:flex-row-reverse">
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
          I&apos;m a Software Enginner
        </h2>
        <h3 className="font-mono text-xl xl:text-2xl">
          Typescript, Python, and more
        </h3>
      </div>
    </main>
  );
}
