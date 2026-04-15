import Image from "next/image";
import { assets } from "@/lib/figma-assets";
import Reveal from "@/components/Reveal";

const cards = [
  {
    title: "1. Vision-Driven Development",
    body: "We turn ambitious ideas into real, market-ready products.",
  },
  {
    title: "2. Scalable Architecture",
    body: "Built to grow with your business — flexible, reliable, and efficient.",
  },
  {
    title: "3. Industry Versatility",
    body: "From fintech to AI, we adapt and deliver across sectors.",
  },
] as const;

export default function CoreValuesSection() {
  return (
    <Reveal className="w-full">
      <section className="relative w-full px-6 py-12 lg:py-16 xl:py-20">
        {/* Main Content Wrapper to keep things centered and properly constrained */}
        <div className="mx-auto w-full max-w-[1200px]">
          {/* Header */}
          <div className="mb-8 text-center font-display text-[28px] font-bold leading-none text-foreground [text-shadow:0_1px_2px_rgba(0,0,0,0.06)] dark:[text-shadow:0_1px_2px_rgba(0,0,0,0.4)] md:mb-10 lg:text-[32px] xl:text-[38px]">
            <p>Core Values</p>
          </div>

          {/* Blue Container Grid - Now fully responsive across all sizes */}
          <div className="grid w-full grid-cols-1 gap-10 rounded-[30px] bg-[#030033] px-6 py-10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_20px_50px_rgba(0,0,0,0.45),0_8px_28px_rgba(0,0,0,0.35)] md:grid-cols-3 md:gap-6 md:px-8 md:py-12 lg:gap-10 lg:rounded-[36px] lg:px-12 lg:py-16 xl:rounded-[45px]">
            {cards.map((card) => (
              <div
                key={card.title}
                className="flex w-full flex-col items-center justify-start text-center font-display motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1"
              >
                {/* Icon Wrapper */}
                <div className="relative mb-6 flex size-[80px] shrink-0 items-center justify-center rounded-[12px] bg-[#0056a1] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_10px_28px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.25)] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:scale-105">
                  <div className="absolute left-1/2 top-0 size-[80px] -translate-x-1/2 rounded-[12px] bg-transparent shadow-[0px_20px_25px_-5px_rgba(78,75,213,0.2),0px_8px_10px_-6px_rgba(78,75,213,0.2)]" />
                  <div className="relative size-[28px]">
                    <Image
                      src={assets.valueIcon}
                      alt=""
                      width={28}
                      height={28}
                      className="absolute inset-0 block size-full max-w-none"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex w-full flex-col items-center gap-3">
                  <h3 className="text-[18px] font-semibold leading-tight text-[#fbf7ff] [text-shadow:0_1px_2px_rgba(0,0,0,0.45)] lg:text-[19px] xl:text-[20px]">
                    {card.title}
                  </h3>
                  <p className="max-w-[320px] text-[13px] font-normal leading-relaxed text-[rgba(255,255,255,0.7)] [text-shadow:0_1px_1px_rgba(0,0,0,0.35)] xl:text-[14px]">
                    {card.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
