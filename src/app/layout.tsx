import { Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { MobileNav } from "./components/MobileNav";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Cornelius Venti | Senior Software Engineer | AI-Powered Development",
  description:
    "Software Engineer with 6+ years experience building scalable web applications, APIs, and data processing systems. Specializing in AI-assisted development with Golang, Python, React, and modern cloud technologies. Available for remote work.",
  keywords:
    "software engineer, golang, python, react, typescript, vue.js, AI development, remote developer, full stack developer, backend engineer, API development, web applications",
  authors: [{ name: "Cornelius Venti", url: "https://corneliusventi.dev" }],
  creator: "Cornelius Venti",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://corneliusventi.dev",
    title:
      "Cornelius Venti | Senior Software Engineer | AI-Powered Development",
    description:
      "Software Engineer with 6+ years experience building scalable web applications, APIs, and data processing systems. Specializing in AI-assisted development with modern technologies.",
    siteName: "Cornelius Venti Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cornelius Venti | Senior Software Engineer",
    description:
      "6+ years experience in Golang, Python, React. AI-assisted development specialist.",
    creator: "@corneliusventi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://corneliusventi.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body className="bg-brand-dark text-brand-light min-h-screen w-screen font-mono antialiased">
        <header className="absolute inset-x-0 top-0 z-50">
          <div className="container mx-auto flex items-center justify-between p-4 sm:p-6 xl:p-8">
            <Link href="/" className="">
              <div className="relative">
                <div className="from-brand-accent absolute -inset-1 bg-gradient-to-r to-transparent opacity-5 blur-sm"></div>
                <h1 className="from-brand-light to-brand-accent relative bg-gradient-to-r bg-clip-text text-xl font-bold sm:text-2xl">
                  <span className="text-brand-accent">Cornel</span>ius Venti
                </h1>
              </div>
            </Link>
            <MobileNav />
          </div>
        </header>
        {children}
        <footer>
          <div className="container mx-auto flex flex-col items-center justify-center p-4 sm:p-6 xl:p-8">
            <nav className="mb-6">
              <ul className="flex justify-center gap-4 sm:gap-6 xl:gap-8">
                <li>
                  <Link
                    className="text-sm transition-all duration-300 hover:text-brand-accent hover:underline hover:underline-offset-4 sm:text-base"
                    href="https://github.com/corneliusventi"
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm transition-all duration-300 hover:text-brand-accent hover:underline hover:underline-offset-4 sm:text-base"
                    href="https://linkedin.com/in/corneliusventi"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-sm transition-all duration-300 hover:text-brand-accent hover:underline hover:underline-offset-4 sm:text-base"
                    href="https://x.com/corneliusventi"
                    target="_blank"
                  >
                    X/Twitter
                  </Link>
                </li>
              </ul>
            </nav>
            
            {/* Divider */}
            <div className="border-brand-accent mb-4 w-32 border-t opacity-30"></div>
            
            <div className="text-center text-xs opacity-60 sm:text-sm">
              <div className="relative">
                <div className="from-brand-light absolute -inset-1 bg-gradient-to-r to-transparent opacity-3 blur-sm"></div>
                <span className="relative">&copy; {new Date().getFullYear()} Cornelius Venti. All rights reserved.</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
