import { Rubik, Rubik_Mono_One } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
const rubik_mono_one = Rubik_Mono_One({
  subsets: ["latin"],
  variable: "--font-rubik-mono-one",
  weight: "400",
});

export const metadata = {
  title: "Cornelius Venti | Experienced Full Stack Developer",
  description:
    "Are you seeking an experienced full-stack developer to bring your project to life? Look no further! I offer a range of services with customizable features to meet your specific needs, whether you require basic, intermediate, or advanced features.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${rubik.variable} ${rubik_mono_one.variable}`}>
      <body className="min-h-screen w-screen bg-brand-dark text-brand-light antialiased">
        <header className="container sticky top-0 mx-auto flex flex-row justify-center bg-brand-dark p-8">
          <h1 className="font-mono text-2xl">Cornelius Venti</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
