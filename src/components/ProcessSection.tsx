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
      <section className="w-full py-12 lg:py-20">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-10 px-6 lg:gap-14 lg:px-8">
          {/* Header Section */}
          <div className="flex flex-col gap-4 lg:gap-6">
            <div className="flex items-center gap-4">
              <div className="relative w-[47px]">
                <Image
                  src={assets.processAccent}
                  alt=""
                  width={49}
                  height={4}
                  className="block h-auto w-full max-w-none"
                  unoptimized
                />
              </div>
              <p className="font-display text-[20px] font-bold leading-normal text-foreground whitespace-nowrap">
                OUR PROCESS
              </p>
            </div>
            <h2 className="max-w-2xl font-display text-[28px] font-bold capitalize leading-normal text-[#0056a1] lg:text-[40px]">
              A simple yet effective four step process....
            </h2>
          </div>

          {/* Steps Container */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {/* Step 01 — Featured Step (Spans full width) */}
            <div className="flex w-full items-center gap-4 rounded-[24px] border border-[rgba(0,0,0,0.06)] bg-[#0056a1] p-5 shadow-sm motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] lg:rounded-[32px] lg:p-6">
              <div className="flex min-w-[70px] flex-col items-center justify-center lg:min-w-[100px]">
                <p className="font-display text-[36px] font-extrabold capitalize leading-none text-white lg:text-[48px]">
                  {steps[0].num}
                </p>
              </div>
              <div className="flex flex-col items-start gap-1 capitalize">
                <p className="font-display text-[18px] font-normal leading-tight text-white lg:text-[20px]">
                  {steps[0].title}
                </p>
                <p className="font-display text-[13px] font-light leading-snug text-[#fbf7ff] lg:text-[14px]">
                  {steps[0].desc}
                </p>
              </div>
            </div>

            {/* Steps 02-04 — Grid Layout (1 column mobile, 3 columns desktop) */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
              {steps.slice(1).map((step) => (
                <div
                  key={step.num}
                  className="flex w-full items-center gap-4 rounded-[24px] border border-[#0056a1] bg-[#edf6fc] p-5 shadow-sm motion-safe:transition-[transform,background-color] motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:bg-[rgba(0,86,161,0.1)] motion-safe:hover:shadow-[0_12px_32px_rgba(0,86,161,0.22)] dark:border-[#2b8fd9] dark:bg-[#e8f2fb] dark:hover:bg-[#c1ccd5] lg:rounded-[32px] lg:p-6"
                >
                  <div className="flex min-w-[70px] flex-col items-center justify-center lg:min-w-[90px]">
                    <p className="font-display text-[36px] font-extrabold capitalize leading-none text-[#003d6b] dark:text-[#0056a1] lg:text-[48px]">
                      {step.num}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1 capitalize">
                    <p className="font-display text-[18px] font-normal leading-tight text-zinc-900 dark:text-[#0a1628] lg:text-[20px]">
                      {step.title}
                    </p>
                    <p className="font-display text-[13px] font-light leading-snug text-zinc-600 dark:text-zinc-700 lg:text-[14px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
