import Image from "next/image";
import { assets } from "@/lib/figma-assets";
import Reveal from "@/components/Reveal";
import { type ReactNode } from "react";

interface ServiceItem {
  title: string;
  body: ReactNode;
  icon: "commerce" | "shield";
}

const services: ServiceItem[] = [
  {
    title: "Edtech",
    body: (
      <>
        <p className="mb-0 leading-normal">Interactive and Scalable</p>
        <p className="leading-normal">learning platform.</p>
      </>
    ),
    icon: "commerce",
  },
  {
    title: "Cybersecurity",
    body: (
      <>
        <p className="mb-0 leading-normal">{"Protecting systems and data "}</p>
        <p className="leading-normal">with advanced security solutions.</p>
      </>
    ),
    icon: "shield",
  },
  {
    title: "Tele-medicine",
    body: (
      <>
        <p className="mb-0 leading-normal">Tele-medicine and research</p>
        <p className="leading-normal">tools.</p>
      </>
    ),
    icon: "commerce",
  },
  {
    title: "Coud computing",
    body: (
      <>
        <p className="mb-0 leading-normal">
          {"Flexible and scalable cloud system "}
        </p>
        <p className="leading-normal">for modern digital operations.</p>
      </>
    ),
    icon: "commerce",
  },
  {
    title: "Fintech",
    body: (
      <>
        <p className="mb-0 leading-normal">{"Secure payment and "}</p>
        <p className="leading-normal">platforms.</p>
      </>
    ),
    icon: "commerce",
  },
  {
    title: "Martech",
    body: (
      <>
        <p className="mb-0 leading-normal">{"Automation, Analytics, and "}</p>
        <p className="leading-normal">engagement tools.</p>
      </>
    ),
    icon: "commerce",
  },
  {
    title: "AI & Machine Learning",
    body: (
      <>
        <p className="mb-0 leading-normal">{"Secure payment and "}</p>
        <p className="leading-normal">platforms.</p>
      </>
    ),
    icon: "commerce",
  },
  {
    title: "Blockchain",
    body: <p className="leading-normal">Decentralized systems for trust.</p>,
    icon: "commerce",
  },
  {
    title: "Crypto projects",
    body: (
      <>
        <p className="mb-0 leading-normal">{"Secure payment and "}</p>
        <p className="leading-normal">platforms.</p>
      </>
    ),
    icon: "commerce",
  },
  {
    title: "Crypto projects",
    body: (
      <>
        <p className="mb-0 leading-normal">{"Tokens, Wallets and "}</p>
        <p className="leading-normal">exchange intergrations.</p>
      </>
    ),
    icon: "commerce",
  },
];

function ServiceIcon({ kind }: { kind: "commerce" | "shield" }) {
  if (kind === "shield") {
    return (
      <div className="flex size-[34px] items-center justify-center rounded-[32px] bg-[#e2eddf] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55),0_5px_14px_rgba(0,0,0,0.28)]">
        <div className="relative size-[28px]">
          <Image
            src={assets.exclamationmarkShieldFill}
            alt=""
            width={28}
            height={28}
            className="absolute inset-0 block size-full max-w-none"
            unoptimized
          />
        </div>
      </div>
    );
  }
  return (
    <div className="relative size-[28px] drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
      <Image
        src={assets.creditcardCircleFill}
        alt=""
        width={28}
        height={28}
        className="absolute inset-0 block size-full max-w-none"
        unoptimized
      />
    </div> 
  );
}

export default function ServicesSection() {
  return (
    <Reveal>
      <section
        id="services"
        // Changed w-screen to w-[100vw] to prevent Windows scrollbar overflow bugs
        // Added smooth padding transitions: px-4 -> md:px-8 -> lg:px-16 -> xl:px-36
        className="relative left-[50%] right-[50%] w-[100vw] -ml-[50vw] -mr-[50vw] scroll-mt-24 overflow-clip bg-[#030033] px-4 p-10 md:px-8 md:py-14 lg:scroll-mt-22 lg:px-16 lg:py-16 md:px-36 xl:py-20"
      >
        {/* Re-introduced a safe max-width so it doesn't infinitely stretch on 4K monitors */}
        <div className="mx-auto w-full max-w-[1400px]">
          {/* Header Section */}
          <div className="mb-8 flex flex-col items-center gap-1 text-center lg:mb-12">
            <p className="font-display text-[16px] font-semibold text-[#f5f5f5] [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] xl:text-[18px]">
              What we do
            </p>
            <p className="font-display text-[28px] font-bold text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.45)] lg:text-[32px] xl:text-[36px]">
              Our services
            </p>
          </div>

          {/* Grid Section */}
          {/* Added lg:grid-cols-4 to smooth the transition between tablet and large desktop */}
          <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5">
            {services.map((s, i) => (
              <div
                key={`${s.title}-${i}`}
                className="relative flex min-h-44  flex-col items-start justify-center gap-[7px] rounded-[20px] border-[0.748px] border-[rgba(0,0,0,0.5)] px-4 py-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_14px_36px_rgba(0,0,0,0.42),0_6px_16px_rgba(0,0,0,0.32),0px_1.87px_4.674px_0px_rgba(0,0,0,0.1)] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1 lg:min-h-[180px] xl:min-h-[190px] xl:rounded-[30px]"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[rgba(255,255,255,0.1)]"
                />
                <ServiceIcon kind={s.icon} />
                <div className="relative z-10 flex w-full flex-col items-start gap-[2px]">
                  <p className="min-w-full font-display text-[14px] font-bold leading-normal text-[#fbf7ff] [text-shadow:0_1px_2px_rgba(0,0,0,0.45)] lg:text-[15px] xl:text-[18px]">
                    {s.title}
                  </p>
                  <div className="w-full whitespace-pre-wrap font-display text-[12px] font-normal text-[rgba(255,255,255,0.8)] [text-shadow:0_1px_1px_rgba(0,0,0,0.35)] xl:text-[14px]">
                    {s.body}
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_1.87px_1.87px_3.739px_0px_rgba(0,0,0,0.1)]" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
