import { Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Cornelius Venti | Software Developer",
  description: "Experienced Software Developer: Typescript, Python and more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body className="bg-brand-dark text-brand-light min-h-screen w-screen font-mono antialiased">
        <header className="absolute inset-x-0 top-0">
          <div className="container mx-auto flex flex-col justify-between p-8 xl:flex-row">
            <Link href="/">
              <h1 className="text-2xl">Cornelius Venti</h1>
            </Link>
            <nav>
              <ul className="flex gap-4 xl:gap-8">
                <li>
                  <Link className="hover:underline hover:underline-offset-4" href="/projects">Projects</Link>
                </li>
                <li>
                  <Link className="hover:underline hover:underline-offset-4" href="/skills">Skills</Link>
                </li>
                <li>
                  <Link className="hover:underline hover:underline-offset-4" href="/about">About</Link>
                </li>
                <li>
                  <Link className="hover:underline hover:underline-offset-4" href="mailto:hello@corneliusventi.dev">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="absolute inset-x-0 bottom-0">
          <div className="container mx-auto flex flex-col justify-between p-8 xl:flex-row">
            <nav>
              <ul className="flex gap-4 xl:gap-8">
                <li>
                  <Link className="hover:underline hover:underline-offset-4" href="https://github.com/corneliusventi" target="_blank">GitHub</Link>
                </li>
                <li>
                  <Link className="hover:underline hover:underline-offset-4" href="https://linkedin.com/in/corneliusventi" target="_blank">LinkedIn</Link>
                </li>
                <li>
                  <Link className="hover:underline hover:underline-offset-4" href="https://x.com/corneliusventi" target="_blank">X/Twitter</Link>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
