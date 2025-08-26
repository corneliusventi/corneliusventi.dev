import { Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { MobileNav } from "./components/MobileNav";
import { personalInfo } from "./resume";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: `${personalInfo.name} | ${personalInfo.headline}`,
  description:
    "Software Engineer with 6+ years experience building scalable web applications, APIs, and data processing systems across Indonesia and Singapore. Specializing in AI-assisted development with Golang, Python, React, and modern cloud technologies. Remote-first professional available for international opportunities.",
  keywords: [
    // Core technical skills
    "software engineer", "golang developer", "python developer", "react developer", 
    "typescript", "vue.js", "next.js", "node.js", "API development",
    // Specializations
    "AI development", "AI-assisted development", "machine learning", "automation",
    "scalable web applications", "data processing systems", "microservices",
    // Experience & roles
    "full stack developer", "backend engineer", "frontend developer", 
    "6 years experience", "senior developer",
    // Geographic & work style
    "remote developer", "indonesia developer", "singapore developer", 
    "southeast asia", "international remote work", "cross-cultural communication",
    // Industries
    "e-commerce developer", "saas developer", "insurance technology", 
    "financial systems", "enterprise software",
    // Technologies
    "docker", "kubernetes", "postgresql", "mongodb", "redis", "aws", 
    "gitlab", "stripe", "shopify", "google maps api"
  ].join(", "),
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
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    url: personalInfo.links.portfolio,
    title: `${personalInfo.name} | ${personalInfo.headline}`,
    description:
      "Software Engineer with 6+ years experience building scalable web applications, APIs, and data processing systems across Indonesia and Singapore. Specializing in AI-assisted development with modern technologies.",
    siteName: "corneliusventi.dev",
    images: [
      {
        url: personalInfo.links.profile,
        width: 400,
        height: 400,
        alt: `${personalInfo.name} - Software Engineer Profile Photo`,
      },
    ],
    profile: {
      firstName: "Cornelius",
      lastName: "Venti",
      username: "corneliusventi",
      gender: "male",
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@corneliusventi",
    creator: "@corneliusventi",
    title: `${personalInfo.name} | ${personalInfo.headline}`,
    description:
      "6+ years experience in Golang, Python, React. AI-assisted development specialist. Remote-first professional across Indonesia & Singapore.",
    images: [personalInfo.links.profile],
  },
  alternates: {
    canonical: personalInfo.links.portfolio,
    languages: {
      'en-US': personalInfo.links.portfolio,
      'id-ID': personalInfo.links.portfolio,
    },
  },
  category: "technology",
  classification: "Software Engineering Portfolio",
  referrer: "origin-when-cross-origin",
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5e6ca" },
    { media: "(prefers-color-scheme: dark)", color: "#343f56" },
  ],
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
                    className="hover:text-brand-accent text-sm transition-all duration-300 hover:underline hover:underline-offset-4 sm:text-base"
                    href={personalInfo.links.github}
                    target="_blank"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-brand-accent text-sm transition-all duration-300 hover:underline hover:underline-offset-4 sm:text-base"
                    href={personalInfo.links.linkedin}
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-brand-accent text-sm transition-all duration-300 hover:underline hover:underline-offset-4 sm:text-base"
                    href={personalInfo.links.twitter}
                    target="_blank"
                  >
                    X/Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-brand-accent text-sm transition-all duration-300 hover:underline hover:underline-offset-4 sm:text-base"
                    href={personalInfo.links.resume}
                    target="_blank"
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Divider */}
            <div className="border-brand-accent mb-4 w-32 border-t opacity-30"></div>

            <div className="text-center text-xs opacity-60 sm:text-sm">
              <div className="relative">
                <div className="from-brand-light absolute -inset-1 bg-gradient-to-r to-transparent opacity-3 blur-sm"></div>
                <span className="relative">
                  &copy; {new Date().getFullYear()} {personalInfo.name}. All
                  rights reserved.
                </span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
