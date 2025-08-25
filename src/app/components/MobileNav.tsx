"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#experiences", label: "Experiences" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#educations", label: "Educations" },
    { href: "mailto:hello@corneliusventi.dev", label: "Contact" },
  ];

  return (
    <>
      {/* Mobile menu button - visible on small screens */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-6 h-6 space-y-1 md:hidden"
        aria-label="Toggle mobile menu"
      >
        <div
          className={`w-5 h-0.5 bg-brand-light transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <div
          className={`w-5 h-0.5 bg-brand-light transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-5 h-0.5 bg-brand-light transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Desktop navigation - hidden on small screens */}
      <nav className="hidden md:block overflow-x-auto">
        <ul className="flex min-w-max gap-3 whitespace-nowrap sm:gap-4 xl:gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                className="text-sm transition-all duration-300 hover:scale-105 hover:text-brand-accent hover:underline hover:underline-offset-4 sm:text-base"
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
        className={`fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        {/* X button in top right corner */}
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 xl:top-8 xl:right-8 flex flex-col justify-center items-center w-6 h-6 z-50"
          aria-label="Close mobile menu"
        >
          <div className="w-5 h-0.5 bg-brand-light rotate-45 absolute" />
          <div className="w-5 h-0.5 bg-brand-light -rotate-45 absolute" />
        </button>

        <nav
          className={`absolute top-20 left-0 right-0 mx-4 bg-brand-dark border border-brand-accent border-opacity-20 rounded-lg p-6 transition-all duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="block text-lg font-medium transition-all duration-300 hover:text-brand-accent hover:translate-x-2 py-2"
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