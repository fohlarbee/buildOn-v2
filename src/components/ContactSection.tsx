import Image from "next/image";
import { assets } from "@/lib/figma-assets";
import Reveal from "@/components/Reveal";

export default function ContactSection() {
  return (
    <Reveal className="w-full mt-20">
      <section className="relative left-[50%] w-[100vw] -translate-x-1/2 bg-[#030033] px-6 py-10 xl:static xl:mx-auto xl:w-[90%] xl:-translate-x-0 xl:px-12 xl:py-6">
        {/* Unified Flex Layout: Stacks on mobile, sits in a row on desktop */}
        <div className="mx-auto flex w-full max-w-[1288px] flex-col items-center justify-between gap-10 xl:flex-row xl:gap-4">
          {/* Part 1: "HEARD ENOUGH?" + Small Arrow */}
          <div className=" ">
            <div className="flex justify-between items-end  gap-5  font-display text-[20px] font-semibold leading-normal text-[#fbf7ff] xl:text-[24px]">
              <p className="mb-0 whitespace-pre  xl:text-left">
                HEARD <br />
                ENOUGH ?
              </p>
              <div className=" mb-[2px] size-[24px] shrink-0 xl:size-[28px]">
                <Image
                  src={assets.arrowRightCircleFill}
                  alt=""
                  width={28}
                  height={28}
                  className=" block size-full max-w-none"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Part 2: "Contact Us" Title + Underline */}
          <div className="flex flex-col items-center gap-2 xl:items-end xl:gap-[6px]">
            <p className="font-display text-[36px] font-bold uppercase leading-normal text-white xl:text-[40px]">
              Contact Us
            </p>
            {/* Underline container */}
            <div className="relative h-0 w-[160px] xl:w-[218px]">
              <div className="absolute inset-[-5.77px_-2.65%_-5.77px_-0.46%]">
                <Image
                  src={assets.contactUnderline}
                  alt=""
                  width={224}
                  height={12}
                  className="block h-auto w-full max-w-none"
                  unoptimized
                />
              </div>
            </div>
          </div>

          {/* Part 3: Large Clickable Arrow Button */}
          <div className="xl:flex xl:items-center xl:justify-center cursor-pointer motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:scale-105 xl:size-[86px]">
            <Image
              src={assets.arrowRightCircleFillLarge}
              alt=""
              width={86}
              height={86}
              className=" block size-12 "
              unoptimized
            />
          </div>
        </div>
      </section>
    </Reveal>
  );
}
