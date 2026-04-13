import { Analytics } from "@vercel/analytics/next";
import { DM_Sans, Space_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { personalInfo } from "./resume";
import { ThemeToggle } from "./components/ThemeToggle";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

export const metadata = {
  title: "Cornelius Venti — Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer with 6+ years of experience architecting distributed Go services, high-concurrency Python backends, and performant React 19 interfaces. Specialist in asynchronous ETL pipelines and AI-driven development.",
  authors: [{ name: personalInfo.name, url: personalInfo.links.portfolio }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: personalInfo.links.portfolio,
    title: "Cornelius Venti — Senior Full Stack Engineer",
    description:
      "Senior Full Stack Engineer with 6+ years of experience architecting distributed Go services, high-concurrency Python backends, and performant React 19 interfaces. Specialist in asynchronous ETL pipelines and AI-driven development.",
    siteName: "corneliusventi.dev",
  },
  twitter: {
    card: "summary",
    title: "Cornelius Venti — Senior Full Stack Engineer",
    description:
      "Senior Full Stack Engineer with 6+ years of experience architecting distributed Go services, high-concurrency Python backends, and performant React 19 interfaces. Specialist in asynchronous ETL pipelines and AI-driven development.",
  },
  alternates: {
    canonical: personalInfo.links.portfolio,
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceMono.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-[#09090b] text-zinc-950 dark:text-zinc-50 min-h-screen font-sans antialiased transition-colors duration-300 relative selection:bg-zinc-100 dark:selection:bg-zinc-800">
        <div className="grain pointer-events-none" />
        <header className="mx-auto max-w-2xl px-6 pt-24 pb-12 flex justify-between items-end">
          <div className="flex flex-col gap-2">
            <Link href="/" className="inline-block group">
              <h1 className="text-3xl font-semibold tracking-tight group-hover:text-zinc-500 transition-colors">
                {personalInfo.name}
              </h1>
            </Link>
            <div className="flex items-center gap-2 print:hidden">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                Available for remote projects
              </span>
            </div>
          </div>
          <div className="theme-toggle print:hidden">
            <ThemeToggle />
          </div>
        </header>
        <main className="mx-auto max-w-2xl px-6">
          {children}
        </main>
        <footer className="mx-auto max-w-2xl border-t border-zinc-100 dark:border-zinc-900 px-6 py-16 mt-16 print:mt-8 print:py-8">
          <div className="flex flex-col gap-10">
            <nav className="print:hidden">
              <ul className="flex flex-wrap gap-x-10 gap-y-4 text-xs font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-[0.2em] font-mono">
                <li>
                  <Link
                    className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
                    href={personalInfo.links.github}
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
                    href={personalInfo.links.linkedin}
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
                    href={personalInfo.links.twitter}
                    target="_blank"
                  >
                    X
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
                    href={personalInfo.links.resume}
                    target="_blank"
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col gap-4">
              <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
                Core Stack: TS / JS / GOLANG / PYTHON / REACT / NEXT.JS / NODE.JS / AWS / DOCKER / REDIS
              </p>
              <p className="text-sm text-zinc-400 dark:text-zinc-600 font-mono tracking-tight uppercase">
                &copy; {new Date().getFullYear()} {personalInfo.name}
              </p>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
