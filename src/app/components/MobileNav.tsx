"use client";

import { useState } from "react";
import Link from "next/link";
import { personalInfo } from "../data/resume";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experiences", label: "Experiences" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#educations", label: "Educations" },
    { href: `mailto:${personalInfo.email}`, label: "Contact" },
  ];

  return (
    <>
      {/* Mobile menu button - visible on small screens */}
      <button
        onClick={toggleMenu}
        className="flex h-6 w-6 flex-col items-center justify-center space-y-1 md:hidden"
        aria-label="Toggle mobile menu"
      >
        <div
          className={`bg-brand-light h-0.5 w-5 transition-all duration-300 ${
            isOpen ? "translate-y-1.5 rotate-45" : ""
          }`}
        />
        <div
          className={`bg-brand-light h-0.5 w-5 transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`bg-brand-light h-0.5 w-5 transition-all duration-300 ${
            isOpen ? "-translate-y-1.5 -rotate-45" : ""
          }`}
        />
      </button>

      {/* Desktop navigation - hidden on small screens */}
      <nav className="hidden overflow-x-auto md:block">
        <ul className="flex min-w-max gap-3 whitespace-nowrap sm:gap-4 xl:gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                className="hover:text-brand-accent text-sm transition-all duration-300 hover:scale-105 hover:underline hover:underline-offset-4 sm:text-base"
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile navigation overlay */}
      <div
        className={`bg-brand-dark/95 fixed inset-0 z-40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeMenu}
      >
        {/* X button in top right corner */}
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 z-50 flex h-6 w-6 flex-col items-center justify-center sm:top-6 sm:right-6 xl:top-8 xl:right-8"
          aria-label="Close mobile menu"
        >
          <div className="bg-brand-light absolute h-0.5 w-5 rotate-45" />
          <div className="bg-brand-light absolute h-0.5 w-5 -rotate-45" />
        </button>

        <nav
          className={`bg-brand-dark border-brand-accent border-opacity-20 absolute top-20 right-0 left-0 mx-4 rounded-lg border p-6 transition-all duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="hover:text-brand-accent block py-2 text-lg font-medium transition-all duration-300 hover:translate-x-2"
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
