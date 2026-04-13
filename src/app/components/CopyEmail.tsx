"use client";

import React, { useState } from "react";

interface CopyEmailProps {
  email: string;
}

export function CopyEmail({ email }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="relative inline-flex items-center get-in-touch-btn print:hidden">
      <button
        onClick={handleCopy}
        className="text-base font-medium text-zinc-950 dark:text-zinc-50 link-underline cursor-pointer flex items-center gap-2 group"
      >
        <span>Drop a line</span>
        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
      </button>
      
      {/* Tooltip */}
      <div
        className={`absolute -top-10 left-0 px-2 py-1 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 text-[10px] font-mono uppercase tracking-widest rounded transition-all duration-300 ${
          copied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        Email Copied
      </div>
    </div>
  );
}
