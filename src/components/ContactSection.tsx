import Image from "next/image";
import { assets } from "@/lib/figma-assets";
import Reveal from "@/components/Reveal";

export default function ContactSection() {
  return (
    <Reveal className="w-full">
      <section className="relative px-6 py-8 xl:h-[207px] xl:px-0 xl:py-0">
        {/* Mobile + tablet: stacked layout */}
        <div className="flex flex-col items-center gap-6 bg-[#030033] p-6 xl:hidden">
          <div className="flex items-end gap-3">
            <div className="font-display text-[20px] font-semibold leading-normal text-[#fbf7ff]">
              <p className="mb-0 whitespace-pre">{"HEARD "}</p>
              <p className="whitespace-pre">ENOUGH?</p>
            </div>
            <div className="relative size-[24px] shrink-0">
              <Image
                src={assets.arrowRightCircleFill}
                alt=""
                width={24}
                height={24}
                className="absolute inset-0 block size-full max-w-none"
                unoptimized
              />
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="font-display text-[36px] font-bold uppercase leading-normal text-white">
              Contact Us
            </p>
            <div className="relative h-0 w-[160px]">
              <div className="absolute inset-[-5.77px_-2.65%_-5.77px_-0.46%]">
                <Image
                  src={assets.contactUnderline}
                  alt=""
                  width={224}
                  height={12}
                  className="block size-full max-w-none"
                  unoptimized
                />
              </div>
            </div>
          </div>
          <div className="relative size-[60px] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:scale-105">
            <Image
              src={assets.arrowRightCircleFillLarge}
              alt=""
              width={86}
              height={86}
              className="absolute inset-0 block size-full max-w-none"
              unoptimized
            />
          </div>
        </div>

        {/* Desktop xl+: grid layout */}
        <div className="hidden xl:absolute xl:left-[89px] xl:top-0 xl:grid xl:h-[150px] xl:w-[1288px] xl:grid-cols-[repeat(3,fit-content(100%))] xl:grid-rows-[repeat(1,fit-content(100%))] xl:gap-x-[314px] xl:gap-y-[314px] xl:bg-[#030033] xl:p-[32px]">
          <div className="col-start-1 row-start-1 flex items-end gap-[12px] self-start justify-self-start">
            <div className="flex items-center justify-center px-[10px]">
              <div className="font-display text-[24px] font-semibold leading-normal text-[#fbf7ff] whitespace-nowrap">
                <p className="mb-0 leading-normal whitespace-pre">{"HEARD "}</p>
                <p className="leading-normal whitespace-pre">ENOUGH?</p>
              </div>
            </div>
            <div className="relative size-[28px] shrink-0">
              <Image
                src={assets.arrowRightCircleFill}
                alt=""
                width={24}
                height={24}
                className="absolute inset-0 block size-full max-w-none"
                unoptimized
              />
            </div>
          </div>
          <div className="col-start-2 row-start-1 flex w-[306px] flex-col items-end gap-[6px] self-start">
            <p className="min-w-full font-display text-[48px] font-bold uppercase leading-normal text-white">
              Contact Us
            </p>
            <div className="relative h-0 w-[218px]">
              <div className="absolute inset-[-5.77px_-2.65%_-5.77px_-0.46%]">
                <Image
                  src={assets.contactUnderline}
                  alt=""
                  width={224}
                  height={12}
                  className="block size-full max-w-none"
                  unoptimized
                />
              </div>
            </div>
          </div>
          <div className="col-start-3 row-start-1 relative size-[86px] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:scale-105">
            <Image
              src={assets.arrowRightCircleFillLarge}
              alt=""
              width={86}
              height={86}
              className="absolute inset-0 block size-full max-w-none"
              unoptimized
            />
          </div>
        </div>
      </section>
    </Reveal>
  );
}
