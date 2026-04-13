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
    <div className="relative flex h-[323px] w-[452px] flex-col items-start justify-center rounded-[29.913px] border-[0.748px] border-[rgba(0,0,0,0.5)] px-[18.696px] shadow-[0px_1.87px_4.674px_0px_rgba(0,0,0,0.1)] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[rgba(245,245,245,0.1)]"
      />
      <div className="relative z-10 h-[177.609px] w-full">
        <div className="absolute left-0 top-0 flex size-[44.87px] items-center justify-center rounded-[18.696px] bg-[rgba(37,111,111,0.1)]">
          <div className="relative h-[18.696px] w-[16.826px]">
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
        <div className="absolute left-0 right-[-0.31px] top-[67.3px] flex flex-col items-start">
          <div className="flex h-[26.174px] w-[283.239px] flex-col justify-center font-sans text-[18px] font-semibold leading-normal text-[#2d3335]">
            <p>{p.title}</p>
          </div>
        </div>
        <div className="absolute left-0 top-[94.41px] flex h-[57.957px] w-[402.891px] items-center justify-center py-[9.348px] pr-[9.348px]">
          <div className="flex w-[392.609px] flex-col justify-center font-sans text-[15px] font-normal text-[#5a6062]">
            <p className="leading-[24.304px]">{p.description}</p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-start pt-[13.087px]">
        <div className="flex h-[38.696px] w-full items-start gap-[14.957px] overflow-clip opacity-50">
          {p.tags.map((tag) => (
            <div
              key={tag}
              className="flex flex-col items-start self-stretch rounded-br-[5.609px] rounded-tr-[5.609px] border-[0.935px] border-[#256f6f] bg-[rgba(78,75,213,0.2)] px-[11.217px] py-[10px]"
            >
              <div className="flex flex-col justify-center font-sans text-[13.087px] font-semibold text-[#2d3335]">
                <p className="leading-[18.696px]">{tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_1.87px_1.87px_3.739px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <Reveal className="w-full">
      <section
        id="projects"
        className="relative mt-[-2px] scroll-mt-24 overflow-hidden bg-[#d9effc] py-10 lg:scroll-mt-[88px] lg:py-12 xl:h-[996px] xl:scroll-mt-[117px] xl:py-0"
      >
        <div className="absolute left-[-105.69px] top-[-38px] h-[328px] w-[328.688px] rounded-[275.052px] bg-[#030033] blur-[250px]" />

        <div className="mb-6 text-center font-display text-[28px] font-bold text-black lg:mb-8 lg:text-[32px] xl:absolute xl:left-[calc(50%+17.5px)] xl:top-[40px] xl:mb-0 xl:w-[487px] xl:-translate-x-1/2 xl:-translate-y-1/2 xl:text-[38px]">
          <p className="leading-normal">Projects</p>
        </div>

        {/* Mobile + tablet: Carousel */}
        <div className="xl:hidden">
          <ProjectsCarousel projects={projects} />
        </div>

        {/* Desktop xl+: Grid layout */}
        <div className="hidden xl:absolute xl:left-[26px] xl:top-[154px] xl:grid xl:w-[1388px] xl:grid-cols-1 xl:grid-rows-[repeat(2,fit-content(100%))] xl:gap-x-[27px] xl:gap-y-[27px]">
          <div className="col-start-1 row-start-1 flex items-center gap-[16px] self-start">
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard key={`r1-${i}`} p={p} />
            ))}
          </div>
          <div className="col-start-1 row-start-2 flex items-center justify-center gap-[53px] self-start">
            {projects.slice(3).map((p, i) => (
              <ProjectCard key={`r2-${i}`} p={p} />
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center lg:mt-10 xl:absolute xl:left-[calc(50%+0.5px)] xl:top-[882px] xl:mt-0 xl:-translate-x-1/2">
          <GlassCtaButton
            variant="navy"
            className="h-[45px] w-[300px] font-display text-[14px] font-normal leading-normal whitespace-nowrap xl:w-[367px] xl:text-[16px]"
          >
            View all projects
          </GlassCtaButton>
        </div>
      </section>
    </Reveal>
  );
}
