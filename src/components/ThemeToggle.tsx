"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle({
  className = "",
}: {
  className?: string;
}) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hydration-safe dark mode check
  const isDark = mounted ? resolvedTheme === "dark" : false;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      disabled={!mounted}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      // Added active:scale-95 for tactile click feedback and cursor-pointer
      className={`relative inline-flex h-9 w-[3.25rem] shrink-0 cursor-pointer items-center rounded-full border border-black/12 bg-white/90 p-0.5 shadow-sm transition-all duration-300 hover:bg-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0056a1] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/15 ${className}`}
    >
      {/* The sliding knob with a custom bouncy spring easing */}
      <span
        className={`pointer-events-none absolute left-0 top-0.7 flex h-7 w-7 items-center justify-center rounded-full bg-[#0056a1] text-white shadow-md transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isDark ? "translate-x-[1.25rem]" : "translate-x-0"
        }`}
        aria-hidden
      >
        {/* Sun Icon - Spins and shrinks away when switching to dark */}
        <Sun
          className={`absolute size-3.5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            isDark
              ? "-rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
          strokeWidth={2.25}
        />

        {/* Moon Icon - Spins and grows into view when switching to dark */}
        <Moon
          className={`absolute size-3.5 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          }`}
          strokeWidth={2.25}
        />
      </span>
      <span className="sr-only">Toggle dark mode</span>
    </button>
  );
}
