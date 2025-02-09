import Image from "next/image";
import Link from "next/link";
import icon from "./icon.png";

export default function Home() {
  return (
    <main>
      <section className="container mx-auto flex flex-col items-center px-8 xl:flex-row-reverse">
        <Image
          className="h-auto w-auto xl:w-2/5"
          src={icon}
          width={512}
          height={512}
          alt="Cornelius Venti Icon"
          priority
        />
        <div className="flex flex-col items-center gap-4 text-center xl:items-start xl:gap-8 xl:text-left">
          <h2 className="text-3xl font-black uppercase xl:text-7xl">
            Development as a Subscription
          </h2>
          <h3 className="text-xl">
            Are you looking for a professional full-stack developer to bring
            your project to life? Look no further! I offer a range of services
            with customizable features to meet your specific needs, whether you
            require basic, intermediate, or advanced features.
          </h3>
          <Link
            className="rounded-full bg-brand-light px-4 py-2 text-xl font-extrabold uppercase text-brand-dark"
            href="https://corneliusventi.lemonsqueezy.com/checkout/buy/7e69b89f-a9f7-4d68-8f16-e74d4ada41d0?media=0&discount=0"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
