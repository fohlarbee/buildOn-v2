import Image from "next/image";
import { assets } from "@/lib/figma-assets";
import Reveal from "@/components/Reveal";

export default function AboutSection() {
  return (
    <Reveal className="w-full">
      <section
        id="about"
        className="relative scroll-mt-24 px-6 py-10 lg:scroll-mt-[88px] lg:py-12 xl:h-[368px] xl:scroll-mt-[117px] xl:px-0 xl:py-0"
      >
        <div className="hidden xl:absolute xl:left-[calc(83.33%+11px)] xl:top-[-9px] xl:block xl:size-[258px]">
          <Image
            src={assets.aboutOrb}
            alt=""
            width={258}
            height={258}
            className="size-full object-contain"
            unoptimized
          />
        </div>

        <div className="flex flex-col items-center gap-4 lg:mx-auto lg:max-w-[min(720px,94vw)] lg:gap-6 xl:absolute xl:left-1/2 xl:top-0 xl:h-[267px] xl:w-[1166px] xl:max-w-none xl:-translate-x-1/2 xl:gap-[7px]">
          <div className="flex w-full flex-col items-center gap-[10px] xl:w-[487px]">
            <div className="flex w-full flex-col items-center gap-[18px] xl:w-[379px] xl:items-start">
              <p className="text-center font-display text-[28px] font-bold leading-normal text-foreground lg:text-[32px] xl:w-[354px] xl:text-[38px]">
                About buildON Inc.
              </p>
              <div className="relative h-0 w-[74px]">
                <div className="absolute inset-[-2px_-2.7%]">
                  <Image
                    src={assets.aboutUnderline}
                    alt=""
                    width={76}
                    height={4}
                    className="block h-auto w-full max-w-none"
                    unoptimized
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full items-center py-[10px]">
              <p className="w-full text-center font-display text-[18px] font-semibold leading-normal text-[#0056a1] lg:text-[22px] xl:text-[24px] xl:whitespace-nowrap">
                Transforming Ideas into Scalable Technology
              </p>
            </div>
          </div>

          <div className="min-w-full text-center font-display text-[16px] font-light text-[rgba(0,0,0,0.8)] lg:text-[18px] xl:text-[20px] dark:text-zinc-300">
            <p className="mb-0">
              <span className="leading-normal">{"Based in "}</span>
              <span className="font-semibold leading-normal text-foreground dark:text-zinc-100">
                Delaware
              </span>
              <span className="leading-normal">
                {
                  ", United States, buildON Inc. is a forward-thinking technology startup focused on turning bold ideas into impactful "
                }
              </span>
              <span className="font-bold leading-normal text-[#256f6f] dark:text-[#6dd4d4]">
                digital solutions
              </span>
              <span className="leading-normal">
                . We partner with businesses at every stage — from early concept
                to fully deployed platforms — delivering scalable, secure, and
                future-ready products.
              </span>
            </p>
            <p className="leading-normal">
              Our multidisciplinary team combines engineering, design, and
              strategic thinking to build solutions that not only solve problems
              but unlock new opportunities for growth and innovation.
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
