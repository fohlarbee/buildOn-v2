"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GlassCtaButton from "@/components/GlassCtaButton";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Team", href: "#team" },
] as const;

const linkClass = (isHome: boolean) =>
  isHome
    ? "text-foreground transition-opacity duration-200 ease-out hover:opacity-80"
    : "text-foreground/55 transition-colors duration-200 ease-out hover:text-[#0056a1] dark:text-zinc-400 dark:hover:text-[#7ec8ff]";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-100 h-16 overflow-clip border-b border-white/45 bg-[#030033] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.65),0_4px_24px_rgba(1,148,236,0.1)] backdrop-blur-xl backdrop-saturate-150 transition-all dark:border-white/10 dark:bg-[rgba(15,18,35,0.88)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_4px_24px_rgba(0,0,0,0.35)] md:bg-[rgba(204,234,251,0.78)] lg:h-22 lg:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.65),0_6px_28px_rgba(1,148,236,0.12)] lg:dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_6px_28px_rgba(0,0,0,0.35)] xl:h-[117px] xl:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.65),0_8px_32px_rgba(1,148,236,0.14)] xl:dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_8px_32px_rgba(0,0,0,0.35)]">
        <div className="mx-auto flex h-full w-full max-w-screen-2xl items-center justify-between px-5 lg:px-8 xl:px-12">
          {/* Logo (Shared across all screen sizes) */}
          <div className="flex shrink-0 items-center justify-center p-2.5 lg:p-0">
            <p className="font-sans font-bold leading-none whitespace-nowrap">
              <span className="dark:text-white  text-[22px] leading-normal text-white  md:text-foreground lg:text-[24px] xl:text-[28px]">
                Build
              </span>
              <span className="text-[22px] leading-normal  text-[#0056a1] lg:text-[24px] xl:text-[28px]">
                ON
              </span>
              <span className="text-[22px] leading-normal text-[#0056a1] md:dark:text-[#0056a1] md:text-foreground lg:text-[24px] xl:text-[28px] ">
                {" Inc."}
              </span>
            </p>
          </div>

          {/* Desktop/Tablet Navigation Links */}
          <nav className="hidden flex-1 items-center justify-center gap-6 font-sans text-[14px] font-normal whitespace-nowrap lg:flex xl:gap-10 xl:text-[16px]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={linkClass(link.label === "Home")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop/Tablet Right Controls */}
          <div className="hidden shrink-0 items-center gap-4 lg:flex xl:gap-6">
            <ThemeToggle />
            <Link href={"https://x.com/buildON_Inc"} className="cursor-pointer">
              <GlassCtaButton
                variant="brand"
                className="h-10 w-36 px-3 font-sans text-[12px] font-normal leading-normal whitespace-nowrap xl:h-[45px] xl:w-48 xl:text-[14px]"
              >
                Get in touch
              </GlassCtaButton>
            </Link>
          </div>

          {/* Mobile Hamburger Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="relative z-60 p-2"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <div className="flex h-5 w-6 flex-col justify-center gap-1.5">
                <span
                  className={`block h-0.5 w-6 bg-zinc-100 transition-transform ${menuOpen ? "translate-y-1.75 rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-6 bg-zinc-100 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 w-6 bg-zinc-100 transition-transform ${menuOpen ? "-translate-y-1.75 -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay (Unchanged) */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/35 backdrop-blur-[2px]"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            />
            <motion.nav
              className="absolute top-16 right-0 left-0 flex max-h-[calc(100vh-4rem)] flex-col gap-1 overflow-y-auto rounded-b-3xl border-x border-b border-white/45 bg-[rgba(232,246,253,0.72)] px-6 py-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55),0_12px_40px_rgba(1,148,236,0.16)] backdrop-blur-2xl backdrop-saturate-150 dark:border-white/12 dark:bg-[rgba(22,26,48,0.94)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_12px_40px_rgba(0,0,0,0.45)]"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 0.82,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-4 py-3 font-sans text-[16px] text-foreground/90 transition-colors duration-200 ease-out hover:bg-white/35 active:scale-[0.99] active:bg-[rgba(1,148,236,0.18)] dark:hover:bg-white/10"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link
                href={"https://x.com/buildON_Inc"}
                className="cursor-pointer"
              >
                <GlassCtaButton
                  variant="brand"
                  className="mt-4 h-11.25 w-full font-sans text-[12px] font-normal"
                  onClick={() => setMenuOpen(false)}
                >
                  Get in touch
                </GlassCtaButton>
              </Link>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
