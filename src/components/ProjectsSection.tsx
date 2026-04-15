import Image from "next/image";
import { assets } from "@/lib/figma-assets";
import GlassCtaButton from "@/components/GlassCtaButton";
import Reveal from "@/components/Reveal";
import ProjectsCarousel from "./ProjectsCarousel";

const projects = [
  {
    title: "NextGen Banking Platform",
    description:
      "A secure, scalable fintech platform enabling seamless digital banking and payment solutions.",
    tags: ["#Twitter", "#LinkedIn", "#YouTube"],
  },
  {
    title: "AI Marketing Suite",
    description:
      "An intelligent automation platform that enhances customer engagement through data-driven insights",
    tags: ["#Twitter", "#Pinterest", "#YouTube"],
  },
  {
    title: "Decentralized Crypto Wallet",
    description:
      "A secure blockchain-based wallet with seamless token management and exchange integrations.",
    tags: ["#Twitter", "#LinkedIn", "#YouTube"],
  },
  {
    title: "Telemedicine Platform",
    description:
      "A modern healthtech solution connecting patients and providers through real-time virtual care.",
    tags: ["#Twitter", "#Medicine", "#YouTube"],
  },
  {
    title: "NextGen Banking Platform",
    description:
      "A secure, scalable fintech platform enabling seamless digital banking and payment solutions.",
    tags: ["#Twitter", "#LinkedIn", "#YouTube"],
  },
] as const;

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  return (
    <div className="relative mx-auto flex min-h-[300px] w-full max-w-[400px] flex-col justify-center gap-5 rounded-[30px] border-[0.75px] border-[rgba(0,0,0,0.5)] p-6 shadow-[0px_1.87px_4.674px_0px_rgba(0,0,0,0.1)] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1 dark:border-[#0056a1]/35 dark:bg-[#0f1729] dark:shadow-[0_12px_40px_rgba(0,0,0,0.45)]">
      
      {/* Background Overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[rgba(245,245,245,0.1)] dark:bg-white/5"
      />

      {/* Top Content Area (Icon + Text) */}
      <div className="relative z-10 flex flex-col gap-4">
        
        {/* Icon */}
        <div className="flex size-[45px] items-center justify-center rounded-[18px] bg-[rgba(37,111,111,0.1)] dark:bg-[rgba(0,86,161,0.25)]">
          <div className="relative h-[19px] w-[17px]">
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

        {/* Text Container */}
        <div className="flex flex-col gap-2">
          <h3 className="font-sans text-[18px] font-semibold leading-tight text-[#2d3335] dark:text-zinc-100">
            {p.title}
          </h3>
          <p className="font-sans text-[15px] leading-relaxed text-[#5a6062] dark:text-zinc-400">
            {p.description}
          </p>
        </div>

      </div>

      {/* Tags Container */}
      <div className="relative z-10 mt-1 flex w-full flex-wrap gap-3 opacity-80">
        {p.tags.map((tag) => (
          <div
            key={tag}
            className="rounded-br-[6px] rounded-tr-[6px] border border-[#256f6f] bg-[rgba(78,75,213,0.2)] px-3 py-2 dark:border-[#4fd1c5]/45 dark:bg-[rgba(0,86,161,0.22)]"
          >
            <span className="font-sans text-[13px] font-semibold text-[#2d3335] dark:text-zinc-200">
              {tag}
            </span>
          </div>
        ))}
      </div>

      {/* Inner Shadow Overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_1.87px_1.87px_3.739px_0px_rgba(0,0,0,0.1)] dark:shadow-[inset_1.87px_1.87px_3.739px_0px_rgba(255,255,255,0.06)]" />
    </div>
  );
}
export default function ProjectsSection() {
  return (
    <Reveal className="w-full">
      <section
        id="projects"
        className="relative w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] scroll-mt-24 overflow-hidden bg-[#d9effc] py-12 transition-colors dark:bg-[#0b1220] lg:py-20"
      >
        <div className="absolute left-[-100px] top-[-50px] size-[328px] rounded-full bg-[#030033] blur-[200px]" />

        <div className="mx-auto w-full max-w-screen-xl">
          {/* Header - Kept px-4 here so the text doesn't touch the screen edge */}
          <div className="mb-8 px-4 text-center lg:mb-14 xl:px-8">
            <h2 className="font-display text-[28px] font-bold text-foreground lg:text-[38px]">
              Projects
            </h2>
          </div>

          {/* 2. MOBILE CAROUSEL - Removed padding! Now the carousel can touch the absolute edges of the screen */}
          <div className="w-full xl:hidden">
            <ProjectsCarousel projects={projects} />
          </div>

          {/* Desktop xl+: Flex layout - Kept padding so cards don't touch edges on large screens */}
          <div className="hidden px-6  xl:flex xl:flex-wrap xl:justify-center xl:gap-7 xl:px-8">
            {projects.map((p, i) => (
              <div key={`project-${i}`} className="w-[calc(33.333%-1.5rem)] ">
                <ProjectCard p={p} />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-10 flex justify-center px-4 lg:mt-16 xl:px-8">
            <GlassCtaButton
              variant="navy"
              className="h-[45px] w-[300px] whitespace-nowrap font-display text-[14px] font-normal sm:text-[16px] xl:w-[367px]"
            >
              View all projects
            </GlassCtaButton>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
