import { Analytics } from "@vercel/analytics/react";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
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
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="min-h-screen w-screen bg-brand-dark text-brand-light antialiased">
        <header className="absolute inset-x-0 top-0">
          <div className="container mx-auto flex flex-col justify-between p-8 font-mono xl:flex-row">
            <Link href="/">
              <h1 className="text-2xl">Cornelius Venti</h1>
            </Link>
            <nav>
              <ul className="flex gap-4 xl:gap-8">
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
                <li>
                  <Link href="/skills">Skills</Link>
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
        <Analytics />
      </body>
    </html>
  );
}
