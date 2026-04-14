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

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      disabled={!mounted}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative inline-flex h-9 w-[3.25rem] shrink-0 items-center rounded-full border border-black/12 bg-white/90 p-0.5 shadow-sm transition-colors hover:bg-white focus-visible:ring-2 focus-visible:ring-[#0056a1] focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-50 dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/15 ${className}`}
    >
      <span
        className="pointer-events-none absolute top-0.5 left-0.5 flex h-7 w-7 translate-x-0 items-center justify-center rounded-full bg-[#0056a1] text-white shadow-sm transition-transform duration-200 ease-out dark:translate-x-[1.25rem]"
        aria-hidden
      >
        {mounted ? (
          isDark ? (
            <Moon className="size-3.5" strokeWidth={2.25} />
          ) : (
            <Sun className="size-3.5" strokeWidth={2.25} />
          )
        ) : null}
      </span>
      <span className="sr-only">Toggle dark mode</span>
    </button>
  );
}
