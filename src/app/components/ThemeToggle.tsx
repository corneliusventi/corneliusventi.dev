"use client";

import React, { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <button className="text-xs font-mono uppercase tracking-widest text-zinc-400 invisible">
        Loading
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center gap-2 cursor-pointer py-1"
      aria-label="Toggle dark mode"
    >
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
}
