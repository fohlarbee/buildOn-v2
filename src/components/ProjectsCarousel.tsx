"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { assets } from "@/lib/figma-assets";

interface Project {
  title: string;
  description: string;
  tags: readonly string[];
}

function MobileProjectCard({ p }: { p: Project }) {
  return (
    <div className="relative flex h-full flex-col justify-between rounded-[20px] border-[0.748px] border-[rgba(0,0,0,0.5)] px-5 py-6 shadow-[0px_1.87px_4.674px_0px_rgba(0,0,0,0.1)] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1 dark:border-[#0056a1]/35 dark:bg-[#0f1729] dark:shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[rgba(245,245,245,0.1)] dark:bg-white/6"
      />
      <div className="relative z-10">
        <div className="mb-4 flex size-[40px] items-center justify-center rounded-[14px] bg-[rgba(37,111,111,0.1)] dark:bg-[rgba(0,86,161,0.25)]">
          <div className="relative h-[16px] w-[14px]">
            <Image
              src={assets.projectIcon}
              alt=""
              width={17}
              height={19}
              className="absolute inset-0 block size-full max-w-none"
              unoptimized
            />
          </div>
        </div>
        <h3 className="mb-2 font-sans text-[16px] font-semibold leading-normal text-[#2d3335] dark:text-zinc-100">
          {p.title}
        </h3>
        <p className="font-sans text-[14px] font-normal leading-[22px] text-[#5a6062] dark:text-zinc-400">
          {p.description}
        </p>
      </div>
      <div className="mt-4 flex items-start gap-3 opacity-50 dark:opacity-90">
        {p.tags.map((tag) => (
          <div
            key={tag}
            className="rounded-br-[5px] rounded-tr-[5px] border-[0.935px] border-[#256f6f] bg-[rgba(78,75,213,0.2)] px-[10px] py-[8px] dark:border-[#4fd1c5]/45 dark:bg-[rgba(0,86,161,0.22)]"
          >
            <p className="font-sans text-[12px] font-semibold leading-[16px] text-[#2d3335] dark:text-zinc-200">
              {tag}
            </p>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_1.87px_1.87px_3.739px_0px_rgba(0,0,0,0.1)] dark:shadow-[inset_1.87px_1.87px_3.739px_0px_rgba(255,255,255,0.06)]" />
    </div>
  );
}

export default function ProjectsCarousel({
  projects,
}: {
  projects: readonly Project[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const firstChild = container.firstElementChild as HTMLElement | null;
    if (!firstChild) return;
    const cardWidth = firstChild.offsetWidth;
    const gap = 16;
    const index = Math.round(container.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.max(0, Math.min(index, projects.length - 1)));
  }, [projects.length]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => container.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const firstChild = container.firstElementChild as HTMLElement | null;
    if (!firstChild) return;
    const cardWidth = firstChild.offsetWidth;
    const gap = 16;
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full px-4 sm:px-6">
      <div
        ref={scrollRef}
        className="touch-[pan-x_pan-y] flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-pl-4 scroll-pr-4 pb-4 sm:scroll-pl-6 sm:scroll-pr-6"
      >
        {projects.map((p, i) => (
          <div
            key={i}
            className="min-h-[280px] w-[280px] shrink-0 snap-start sm:w-[300px]"
          >
            <MobileProjectCard p={p} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 py-4">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`rounded-full transition-all duration-300 motion-safe:hover:scale-125 motion-safe:active:scale-95 ${
              i === activeIndex
                ? "h-2.5 w-6 bg-[#030033]"
                : "h-2.5 w-2.5 bg-[rgba(3,0,51,0.3)]"
            }`}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
