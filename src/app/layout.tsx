import { Rubik, Rubik_Mono_One } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
const rubik_mono_one = Rubik_Mono_One({
  subsets: ["latin"],
  variable: "--font-rubik-mono-one",
  weight: "400",
});

export const metadata = {
  title: "Cornelius Venti | Full Stack Developer",
  description:
    "Experienced Full Stack Developer: Typescript, NextJS, Tailwind CSS and more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rubik.variable} ${rubik_mono_one.variable}`}>
      <body className="min-h-screen w-screen bg-brand-dark text-brand-light antialiased">
        <header className="container absolute top-0 mx-auto flex flex-col justify-between p-8 xl:flex-row">
          <h1 className="font-mono text-2xl">Cornelius Venti</h1>
          <nav>
            <ul className="flex gap-8">
              <li>
                <Link href="/skills">Skills</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
