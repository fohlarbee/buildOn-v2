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
        <p className="mb-0 leading-normal">{"Automation,Analytics,and "}</p>
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
    <Reveal className="w-full">
      <section
        id="services"
        className="relative scroll-mt-24 overflow-clip bg-[#030033] px-4 py-10 lg:scroll-mt-[88px] lg:py-12 xl:h-[642px] xl:scroll-mt-[117px] xl:px-0 xl:py-0"
      >
        <div className="mb-6 flex flex-col items-center gap-[2px] leading-normal lg:mb-8 xl:absolute xl:left-[611px] xl:top-[28px] xl:mb-0 xl:w-[210px] xl:items-start">
          <p className="font-display text-[16px] font-semibold text-[#f5f5f5] [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] xl:w-full xl:text-[18px]">
            What we do
          </p>
          <p className="font-display text-[28px] font-bold text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.45)] lg:text-[32px] xl:w-full xl:text-[36px]">
            Our services
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:mx-auto lg:max-w-[min(920px,96vw)] lg:grid-cols-3 lg:gap-4 xl:absolute xl:left-[217px] xl:top-[128px] xl:inline-grid xl:max-w-none xl:grid-cols-[repeat(5,fit-content(100%))] xl:gap-x-[37px] xl:gap-y-[37px]">
          {services.map((s, i) => (
            <div
              key={`${s.title}-${i}`}
              className="relative flex min-h-[160px] flex-col items-start justify-center gap-[7px] rounded-[20px] border-[0.748px] border-[rgba(0,0,0,0.5)] px-3 py-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_14px_36px_rgba(0,0,0,0.42),0_6px_16px_rgba(0,0,0,0.32),0px_1.87px_4.674px_0px_rgba(0,0,0,0.1)] motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-1 lg:min-h-[170px] xl:h-[187px] xl:w-[170px] xl:rounded-[29.913px] xl:px-[18.696px] xl:py-0"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[rgba(255,255,255,0.1)]"
              />
              <ServiceIcon kind={s.icon} />
              <div className="relative z-10 flex w-full flex-col items-start gap-[2px] xl:w-[135px]">
                <p className="min-w-full font-display text-[14px] font-bold leading-normal text-[#fbf7ff] [text-shadow:0_1px_2px_rgba(0,0,0,0.45)] lg:text-[15px] xl:text-[18px]">
                  {s.title}
                </p>
                <div className="w-full whitespace-pre-wrap font-display text-[12px] font-normal text-[rgba(255,255,255,0.8)] [text-shadow:0_1px_1px_rgba(0,0,0,0.35)] xl:w-[135px] xl:text-[14px]">
                  {s.body}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_1.87px_1.87px_3.739px_0px_rgba(0,0,0,0.1)]" />
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
