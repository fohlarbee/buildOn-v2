import Image from "next/image";
import { assets } from "@/lib/figma-assets";
import Reveal from "@/components/Reveal";

const steps = [
  {
    num: "01.",
    title: "Discover Idea",
    desc: "Understanding your vision, goals, and challenges.",
    highlighted: true,
  },
  {
    num: "02.",
    title: "Design",
    desc: "Crafting intuitive and scalable product experiences.",
    highlighted: false,
  },
  {
    num: "03.",
    title: "Develop",
    desc: "Building robust, high-performance solutions.",
    highlighted: false,
  },
  {
    num: "04.",
    title: "Deploy & Scale",
    desc: "Launching and optimizing for long-term success.",
    highlighted: false,
  },
] as const;

export default function ProcessSection() {
  return (
    <Reveal className="w-full">
      <section className="relative px-6 py-10 lg:min-h-[640px] lg:py-12 xl:h-[681px] xl:px-0 xl:py-0">
        <div className="flex flex-col gap-6 lg:mx-auto lg:max-w-[min(560px,92vw)] lg:gap-8 xl:absolute xl:left-[70px] xl:top-[67px] xl:mx-0 xl:w-[515px] xl:max-w-none xl:gap-[37px]">
          <div className="flex items-center gap-[17px]">
            <div className="relative h-0 w-[47px]">
              <div className="absolute inset-[-2px_-4.26%]">
                <Image
                  src={assets.processAccent}
                  alt=""
                  width={49}
                  height={4}
                  className="block h-auto w-full max-w-none"
                  unoptimized
                />
              </div>
            </div>
            <p className="font-display text-[20px] font-bold leading-normal text-foreground whitespace-nowrap">
              OUR PROCESS
            </p>
          </div>
          <div className="font-display text-[28px] font-bold capitalize leading-normal text-[#0056a1] whitespace-pre-wrap lg:text-[34px] xl:min-w-full xl:text-[40px]">
            <p className="mb-0 leading-normal">
              {"A simple yet effective four "}
            </p>
            <p className="leading-normal">step process....</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 lg:mx-auto lg:mt-10 lg:max-w-[min(960px,96vw)] lg:gap-5 xl:absolute xl:left-[70px] xl:top-[303px] xl:mt-0 xl:w-[1307px] xl:max-w-none xl:gap-[31px]">
          {/* Step 01 — featured step (highlighted in data); blue fill is intentional */}
          <div className="flex h-[80px] w-full items-center gap-4 rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-[#0056a1] motion-safe:transition-[transform,box-shadow] motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] lg:h-[90px] lg:gap-[14px] lg:rounded-[28px] xl:h-[97px] xl:gap-[16px] xl:rounded-[32px]">
            <div className="flex w-[70px] flex-col items-center justify-center p-[10px] xl:w-[87px]">
              <p className="font-display text-[32px] font-extrabold capitalize leading-normal text-white lg:text-[40px] xl:w-[70px] xl:text-[48px]">
                {steps[0].num}
              </p>
            </div>
            <div className="flex flex-col items-start gap-[4px] capitalize leading-normal xl:w-[259px]">
              <p className="font-display text-[16px] font-normal text-white lg:text-[17px] xl:w-full xl:text-[20px]">
                {steps[0].title}
              </p>
              <p className="font-display text-[11px] font-light text-[#fbf7ff] xl:w-full xl:text-[12px]">
                {steps[0].desc}
              </p>
            </div>
          </div>

          {/* Steps 02-04: stacked on mobile, row on desktop */}
          <div className="flex flex-col gap-4 lg:flex-col xl:flex-row xl:gap-[43px]">
            {steps.slice(1).map((step) => (
              <div
                key={step.num}
                className="flex h-[80px] w-full items-center gap-4 rounded-[24px] border border-[#0056a1] bg-[#edf6fc] motion-safe:transition-[transform,box-shadow,background-color] motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-0.5 motion-safe:hover:bg-[rgba(0,86,161,0.1)] motion-safe:hover:shadow-[0_12px_32px_rgba(0,86,161,0.22)] dark:border-[#2b8fd9] dark:bg-[#e8f2fb] lg:h-[90px] lg:gap-[14px] lg:rounded-[28px] lg:px-2 xl:h-[97px] xl:w-[405px] xl:gap-[16px] xl:rounded-[32px] xl:px-[10px]"
              >
                <div className="flex w-[80px] flex-col items-center justify-center p-[10px] xl:w-[103px]">
                  <p className="font-display text-[32px] font-extrabold capitalize leading-normal text-[#003d6b] lg:text-[40px] xl:w-[87px] xl:text-[48px] dark:text-[#0056a1]">
                    {step.num}
                  </p>
                </div>
                <div className="flex flex-col items-start gap-[4px] capitalize leading-normal xl:w-[259px]">
                  <p className="font-display text-[16px] font-normal text-zinc-900 lg:text-[17px] xl:w-full xl:text-[20px] dark:text-[#0a1628]">
                    {step.title}
                  </p>
                  <p className="font-display text-[11px] font-light text-zinc-600 xl:w-full xl:text-[12px] dark:text-zinc-700">
                    {step.desc}
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
