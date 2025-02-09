import { Metadata } from "next";
import { Rubik, Rubik_Mono_One } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
const rubik_mono_one = Rubik_Mono_One({
  subsets: ["latin"],
  variable: "--font-rubik-mono-one",
  weight: "400",
});

const title = "Cornelius Venti | Full Stack Developer";
const description =
  "Experienced Full Stack Developer: Typescript, NextJS, Tailwind CSS and more";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    title,
    description,
    card: "app",
  },
  openGraph: {
    title,
    description,
    url: "https://corneliusventi.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rubik.variable} ${rubik_mono_one.variable}`}>
      <body className="min-h-screen w-screen bg-brand-dark text-brand-light antialiased">
        <header className="absolute inset-x-0 top-0">
          <div className="container mx-auto flex flex-col justify-between p-8 xl:flex-row">
            <Link href="/">
              <h1 className="font-mono text-2xl">Cornelius Venti</h1>
            </Link>
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
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
