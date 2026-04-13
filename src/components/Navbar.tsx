"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import GlassCtaButton from "@/components/GlassCtaButton";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#services" },
  { label: "Work", href: "#projects" },
  { label: "Team", href: "#team" },
] as const;

const linkClass = (isHome: boolean) =>
  isHome
    ? "text-black transition-opacity duration-200 ease-out hover:opacity-80"
    : "text-[rgba(0,0,0,0.5)] transition-colors duration-200 ease-out hover:text-[#0056a1]";

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
      <header className="fixed top-0 right-0 left-0 z-100 h-16 overflow-clip border-b border-white/45 bg-[rgba(204,234,251,0.78)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.65),0_4px_24px_rgba(1,148,236,0.1)] backdrop-blur-xl backdrop-saturate-150 lg:h-[88px] lg:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.65),0_6px_28px_rgba(1,148,236,0.12)] xl:h-[117px] xl:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.65),0_8px_32px_rgba(1,148,236,0.14)]">
        <div className="relative mx-auto h-full w-full max-w-[1440px]">
          {/* Mobile: &lt; lg */}
          <div className="flex h-full items-center justify-between px-5 lg:hidden">
            <div className="flex items-center justify-center p-[10px]">
              <p className="font-sans font-bold whitespace-nowrap leading-none">
                <span className="text-[22px] leading-normal text-black">
                  Build
                </span>
                <span className="text-[22px] leading-normal text-[#0056a1]">
                  ON
                </span>
                <span className="text-[22px] leading-normal text-black">
                  {" Inc."}
                </span>
              </p>
            </div>
            <button
              type="button"
              className="relative z-60 p-2"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <div className="flex h-5 w-6 flex-col justify-center gap-1.5">
                <span
                  className={`block h-0.5 w-6 bg-black transition-transform ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 w-6 bg-black transition-opacity ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 w-6 bg-black transition-transform ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>

          {/* Tablet: lg–xl — compact horizontal bar */}
          <div className="hidden h-full items-center justify-between gap-4 px-6 lg:flex xl:hidden">
            <div className="flex shrink-0 items-center justify-center p-2">
              <p className="font-sans font-bold whitespace-nowrap leading-none">
                <span className="text-[22px] leading-normal text-black lg:text-[24px]">
                  Build
                </span>
                <span className="text-[22px] leading-normal text-[#0056a1] lg:text-[24px]">
                  ON
                </span>
                <span className="text-[22px] leading-normal text-black lg:text-[24px]">
                  {" Inc."}
                </span>
              </p>
            </div>
            <nav className="flex min-w-0 flex-1 items-center justify-center gap-4 text-[13px] font-normal whitespace-nowrap lg:gap-5 lg:text-[14px]">
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
            <GlassCtaButton
              variant="brand"
              className="h-10 w-[min(168px,18vw)] shrink-0 px-3 font-sans text-[11px] font-normal leading-normal"
            >
              Get in touch
            </GlassCtaButton>
          </div>

          {/* Desktop xl+: Figma absolute layout */}
          <div className="relative hidden h-full xl:block">
            <div className="absolute top-1/2 left-5 flex -translate-y-1/2 items-center justify-center p-[10px] xl:left-[36px] xl:top-[38px] xl:translate-y-0">
              <p className="font-sans font-bold whitespace-nowrap leading-none">
                <span className="text-[22px] leading-normal text-black xl:text-[28px]">
                  Build
                </span>
                <span className="text-[22px] leading-normal text-[#0056a1] xl:text-[28px]">
                  ON
                </span>
                <span className="text-[22px] leading-normal text-black xl:text-[28px]">
                  {" Inc."}
                </span>
              </p>
            </div>
            <div className="absolute top-[52px] left-[calc(50%-6px)] hidden -translate-x-1/2 items-center gap-[40px] font-sans text-[16px] font-normal leading-normal whitespace-nowrap xl:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={linkClass(link.label === "Home")}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <GlassCtaButton
              variant="brand"
              className="absolute top-[39px] left-[1155px] hidden h-[45px] w-[224px] font-sans text-[12px] font-normal leading-normal whitespace-nowrap xl:flex"
            >
              Get in touch
            </GlassCtaButton>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 xl:hidden"
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
              className="absolute top-16 right-0 left-0 flex max-h-[calc(100vh-4rem)] flex-col gap-1 overflow-y-auto rounded-b-3xl border-x border-b border-white/45 bg-[rgba(232,246,253,0.72)] px-6 py-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55),0_12px_40px_rgba(1,148,236,0.16)] backdrop-blur-2xl backdrop-saturate-150"
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
                  className="rounded-xl px-4 py-3 font-sans text-[16px] text-[rgba(0,0,0,0.85)] transition-colors duration-200 ease-out hover:bg-white/35 active:bg-[rgba(1,148,236,0.18)] active:scale-[0.99]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <GlassCtaButton
                variant="brand"
                className="mt-4 h-[45px] w-full font-sans text-[12px] font-normal"
                onClick={() => setMenuOpen(false)}
              >
                Get in touch
              </GlassCtaButton>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
