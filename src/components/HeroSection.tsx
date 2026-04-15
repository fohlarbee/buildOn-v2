"use client";
import Image from "next/image";
import { assets } from "@/lib/figma-assets";
import GlassCtaButton from "@/components/GlassCtaButton";
import HeroEntrance from "@/components/HeroEntrance";
import Link from "next/link";

export default function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="relative flex flex-col items-center px-6 py-10 lg:min-h-[460px] xl:block xl:h-[524px] xl:px-0 xl:py-0">
      <div className="pointer-events-none hidden xl:absolute xl:left-[calc(8.33%+22px)] xl:top-[100.97px] xl:block xl:h-[382.745px] xl:w-[1039.171px]">
        <Image
          src={assets.heroStars}
          alt=""
          fill
          className="object-fill"
          sizes="1040px"
          priority
          unoptimized
        />
      </div>

      <HeroEntrance>
        <div className="flex w-full flex-col items-center gap-4 text-center lg:mx-auto lg:max-w-[min(720px,92vw)] xl:absolute xl:left-[calc(25%+39px)] xl:top-[96px] xl:w-[643px] xl:max-w-none xl:items-end xl:gap-[18px]">
          <div className="flex w-full flex-col items-center lg:text-[32px] lg:leading-tight xl:hidden">
            <p className="font-courier text-[26px] leading-tight text-foreground sm:text-[30px] lg:text-[32px]">
              Pioneering
            </p>
            <p className="mt-1 font-display text-[26px] font-semibold leading-tight text-foreground sm:text-[30px] lg:text-[32px]">
              Technology for
            </p>
            <p className="mt-1 font-display text-[26px] font-semibold leading-tight text-foreground sm:text-[30px] lg:text-[32px]">
              Limitless Possibilities
            </p>
          </div>

          {/* Desktop xl+: Figma overlay grid */}
          <div className="relative hidden text-[48px] leading-none text-foreground xl:inline-grid xl:grid-cols-[max-content] xl:grid-rows-[max-content] xl:place-items-start">
            <div className="col-start-1 row-start-1 mt-0 w-full font-display font-semibold whitespace-pre-wrap xl:ml-[96px] xl:w-[547px]">
              <p className="mb-0 leading-normal">
                <span className="hidden xl:inline">
                  {"                     "}
                </span>
                {"Technology for "}
              </p>
              <p className="leading-normal">Limitless Possibilities</p>
            </div>
            <p className="col-start-1 row-start-1 mt-[2px] font-courier leading-normal whitespace-nowrap">
              {"Pioneering "}
            </p>
          </div>

          <p className="w-full font-display text-[16px] font-light leading-normal text-foreground/80 dark:text-zinc-300 lg:text-[17px] xl:w-[622px] xl:text-[20px]">
            We design, build, and scale innovative digital products — from
            concept to deployment — empowering businesses to lead in a rapidly
            evolving world.
          </p>
        </div>

        <div className="mt-8 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center lg:mt-10 lg:gap-8 xl:absolute xl:left-[calc(25%+99px)] xl:top-[337px] xl:mt-0 xl:w-auto xl:gap-[76px]">
          <Link href={"https://x.com/buildON_Inc"} className="cursor-pointer">
            <GlassCtaButton
              variant="navy"
              className="h-[45px] w-full max-w-[277px] cursor-pointer shrink-0 font-display text-[12px] font-normal leading-normal whitespace-nowrap lg:max-w-[240px] xl:w-[277px] xl:max-w-none"
            >
              Get in touch
            </GlassCtaButton>
          </Link>

          <GlassCtaButton
            onClick={scrollToProjects}
            variant="azure"
            className="h-[45px] cursor-pointer w-full max-w-[277px] shrink-0 font-display text-[12px] font-normal leading-normal whitespace-nowrap lg:max-w-[240px] xl:w-[277px] xl:max-w-none"
          >
            Explore our work
          </GlassCtaButton>
        </div>
      </HeroEntrance>
    </section>
  );
}
