import Image from "next/image";
import Link from "next/link";
import icon from "./icon.png";

export default function Home() {
  return (
    <main>
      <section className="container mx-auto flex flex-col items-center p-8 xl:flex-row-reverse">
        <Image
          className="h-auto w-auto"
          src={icon}
          width={512}
          height={512}
          alt="Cornelius Venti Icon"
          priority
        />
        <div className="flex flex-col items-center gap-10 xl:items-start">
          <h2 className="text-center text-3xl font-black xl:text-left xl:text-5xl">
            Are you seeking an experienced full-stack developer to bring your
            project to life?
          </h2>
          <Link
            className="rounded-full bg-brand-light px-4 py-2 font-mono text-xl text-brand-dark"
            href="https://corneliusventi.lemonsqueezy.com/checkout/buy/7e69b89f-a9f7-4d68-8f16-e74d4ada41d0?media=0&discount=0"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
