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
      <section className="relative px-6 py-10 lg:min-h-[420px] lg:py-14 xl:h-[446px] xl:px-0 xl:py-0">
        <div className="mb-6 text-center font-display text-[28px] font-bold leading-none text-black [text-shadow:0_1px_2px_rgba(0,0,0,0.06)] lg:mb-8 lg:text-[32px] xl:absolute xl:left-1/2 xl:top-[10px] xl:mb-0 xl:-translate-x-1/2 xl:-translate-y-1/2 xl:text-[38px] xl:whitespace-nowrap">
          <p className="leading-[20px]">Core Values</p>
        </div>

        <div className="flex flex-col items-center gap-10 rounded-[30px] bg-[#030033] px-6 py-10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14),0_20px_50px_rgba(0,0,0,0.45),0_8px_28px_rgba(0,0,0,0.35)] lg:mx-auto lg:max-w-[min(960px,96vw)] lg:grid lg:grid-cols-3 lg:gap-6 lg:gap-y-10 lg:rounded-[36px] lg:px-5 lg:py-8 xl:absolute xl:left-1/2 xl:top-[60px] xl:inline-grid xl:h-[336px] xl:max-w-none xl:-translate-x-1/2 xl:grid-cols-[repeat(3,fit-content(100%))] xl:grid-rows-1 xl:gap-x-[80px] xl:gap-y-[80px] xl:rounded-[45px] xl:px-0 xl:py-0">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`flex w-full flex-col items-center justify-center self-stretch font-display motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1 lg:w-[352px] ${i === 0 ? "lg:col-start-1" : i === 1 ? "lg:col-start-2" : "lg:col-start-3"} lg:row-start-1`}
            >
              <div className="relative flex size-[80px] items-center justify-center rounded-[12px] bg-[#0056a1] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_10px_28px_rgba(0,0,0,0.4),0_4px_12px_rgba(0,0,0,0.25)] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:scale-105">
                <div className="absolute left-1/2 top-0 -translate-x-1/2 size-[80px] rounded-[12px] bg-[rgba(255,255,255,0)] shadow-[0px_20px_25px_-5px_rgba(78,75,213,0.2),0px_8px_10px_-6px_rgba(78,75,213,0.2)]" />
                <div className="relative size-[27.5px]">
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

              <div className="flex flex-col items-center pt-[24px] xl:items-start">
                <div className="flex w-full flex-col items-center gap-[8px] xl:w-[316.56px]">
                  <div className="flex w-full flex-col items-center">
                    <p className="text-center text-[18px] font-semibold leading-normal text-[#fbf7ff] [text-shadow:0_1px_2px_rgba(0,0,0,0.45)] lg:text-[19px] xl:h-[28px] xl:w-[316px] xl:text-[20px]">
                      {card.title}
                    </p>
                  </div>
                  <div className="flex w-full flex-col items-center">
                    <div className="flex w-full flex-col justify-center text-center font-display text-[13px] font-normal text-[rgba(255,255,255,0.7)] [text-shadow:0_1px_1px_rgba(0,0,0,0.35)] lg:text-[13px] xl:h-[40px] xl:w-[316.56px] xl:text-[14px]">
                      <p className="leading-[20px]">{card.body}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
