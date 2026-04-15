"use client";

import Image from "next/image";
import { teamMembers } from "@/lib/figma-assets";
import GlassCtaButton from "@/components/GlassCtaButton";
import Reveal from "@/components/Reveal";
import Link from "next/link";

function Avatar({
  member,
  compact,
}: {
  member: (typeof teamMembers)[number];
  compact?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:scale-[1.02] xl:w-[178px] ${compact ? "gap-1.5" : "gap-3"} xl:gap-[24px]`}
    >
      <div
        className={`relative mx-auto aspect-178/170 w-full overflow-hidden border border-[#0056a1] motion-safe:transition-shadow motion-safe:duration-300 motion-safe:hover:shadow-[0_8px_24px_rgba(0,86,161,0.25)] ${compact ? "max-w-[92px] rounded-[20px] lg:max-w-[100px]" : "max-w-[150px] rounded-[35px]"} xl:max-w-none xl:rounded-[50px]`}
      >
        <Image
          src={member.src}
          alt=""
          width={456}
          height={456}
          className="absolute max-w-none"
          style={{
            left: member.pos.left,
            top: member.pos.top,
            height: member.pos.h,
            width: member.pos.w,
          }}
          unoptimized
        />
      </div>
      <div
        className={`flex flex-col items-center gap-[2px] text-center leading-tight text-foreground xl:gap-[4px] xl:leading-normal ${compact ? "text-[10px] lg:text-[12px] xl:text-[20px]" : "text-[14px] xl:text-[20px]"}`}
      >
        <p className="font-display font-medium">{member.role}</p>
        <p className="font-display font-light">{member.name}</p>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <Reveal className="w-full">
      <section
        id="team"
        // REMOVED: xl:h-[1029px]. Sections should grow naturally with their content!
        className="relative w-full scroll-mt-24 px-6 lg:scroll-mt-[88px] lg:py-12 xl:scroll-mt-[117px] xl:px-0 xl:py-16"
      >
        {/* Text Header Wrapper */}
        {/* REMOVED: xl:absolute xl:left-[calc(...)] */}
        {/* ADDED: xl:mx-auto to center it dynamically */}
        <div className="flex flex-col items-center gap-4 lg:mx-auto lg:max-w-[min(720px,94vw)] lg:gap-5 xl:mx-auto xl:w-full xl:max-w-[899px] xl:gap-[7px]">
          <div className="flex w-full flex-col items-center gap-3 xl:w-[487px] xl:gap-[14px]">
            <div className="flex w-full flex-col justify-center text-center font-display text-[28px] font-bold text-foreground lg:text-[32px] xl:text-[38px]">
              <p className="leading-normal">Our Team</p>
            </div>
            <div className="flex w-full items-center py-[10px]">
              <p className="w-full text-center font-display text-[18px] font-semibold leading-normal text-[#0056a1] lg:text-[22px] xl:w-[487px] xl:text-[24px]">
                The People Behind the Innovation
              </p>
            </div>
          </div>
          <p className="min-w-full text-center font-display text-[16px] font-light leading-normal text-[rgba(0,0,0,0.8)] lg:text-[18px] xl:text-[20px] dark:text-zinc-300">
            Our team is made up of engineers, designers, and strategists
            passionate about building technology that makes a difference. We
            collaborate, innovate, and push boundaries to deliver exceptional
            results.
          </p>
        </div>

        {/* Mobile avatar grid */}
        <div className="relative left-[50%] mt-8 w-[100vw] -translate-x-1/2 grid grid-cols-3 gap-x-2 gap-y-5 bg-[rgba(1,148,236,0.15)] px-6 py-8 transition-colors dark:bg-[rgba(1,148,236,0.08)] lg:static lg:mx-auto lg:w-full lg:max-w-[min(640px,94vw)] lg:translate-x-0 lg:gap-x-3 lg:px-4 xl:hidden">
          {teamMembers.map((m, i) => (
            <div
              key={m.name}
              className={
                i === teamMembers.length - 1
                  ? "col-start-2 justify-self-center"
                  : ""
              }
            >
              <Avatar member={m} compact />
            </div>
          ))}
          <div className="col-span-3 flex justify-center pt-4">
            <Link href={"https://x.com/buildON_Inc"} className="cursor-pointer">
              <GlassCtaButton
                variant="navy"
                className="h-[45px] w-[277px] cursor-pointer font-display text-[12px] font-normal leading-normal whitespace-nowrap"
              >
                Get in touch
              </GlassCtaButton>
            </Link>
          </div>
        </div>

        {/* Desktop avatar frame */}
        {/* REMOVED: xl:absolute, hardcoded pixel widths/heights, and messy grid specs */}
        {/* ADDED: Standard Flexbox centering and the 100vw breakout trick */}
        <div className="hidden xl:relative xl:left-[50%] xl:mt-16 xl:flex xl:w-[100vw] xl:-translate-x-1/2 xl:flex-col xl:items-center xl:gap-12 xl:overflow-clip xl:bg-[rgba(1,148,236,0.15)] xl:pb-[60px] xl:pt-[75px]">
          {/* Row 1 (Centered) */}
          <div className="flex w-full max-w-[1200px] shrink-0 items-center justify-center gap-[77px]">
            {teamMembers.slice(0, 4).map((m) => (
              <Avatar key={m.name} member={m} />
            ))}
          </div>

          {/* Row 2 (Centered) */}
          <div className="flex w-full max-w-[1200px] shrink-0 items-center justify-center gap-[73px]">
            {teamMembers.slice(4).map((m) => (
              <Avatar key={m.name} member={m} />
            ))}
          </div>

          {/* Button (Centered) */}
          <Link
            href={"https://x.com/buildON_Inc"}
            className="mt-4 cursor-pointer"
          >
            <GlassCtaButton
              variant="navy"
              className="h-[45px] w-[277px] font-display text-[12px] font-normal leading-normal whitespace-nowrap"
            >
              Get in touch
            </GlassCtaButton>
          </Link>
        </div>
      </section>
    </Reveal>
  );
}
