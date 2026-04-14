import Image from "next/image";
import { assets } from "@/lib/figma-assets";
import Reveal from "@/components/Reveal";

export default function Footer() {
  return (
    <Reveal className="w-[calc(100%+2rem)] -mx-4 sm:w-[calc(100%+3rem)] sm:-mx-6 lg:w-[calc(100%+4rem)] lg:-mx-8 xl:mx-0 xl:w-full">
      <footer
        className="relative overflow-clip px-6 py-10 lg:py-14 xl:h-[435px] xl:px-0 xl:py-0"
        style={{
          backgroundImage:
            "linear-gradient(115.37deg, rgb(3, 0, 51) 36.996%, rgb(0, 86, 161) 86.237%, rgb(1, 148, 236) 100.94%)",
        }}
      >
        {/* Logo + description + socials */}
        <div className="flex flex-col items-center gap-5 text-center lg:mx-auto lg:max-w-[min(520px,94vw)] lg:items-start lg:gap-[18px] lg:text-left xl:absolute xl:left-[52px] xl:top-[53px] xl:mx-0 xl:w-[382px] xl:max-w-none xl:gap-[20px]">
          <div className="flex w-full flex-col items-center gap-[14px] lg:items-start">
            <p className="font-display text-[28px] font-bold text-white lg:text-[30px] xl:w-full xl:text-[32px]">
              <span className="leading-normal">Build</span>
              <span className="leading-normal text-[#0194ec]">ON</span>
              <span className="leading-normal">{" Inc."}</span>
            </p>
            <p className="font-display text-[16px] font-normal leading-normal text-[rgba(255,255,255,0.7)] lg:text-[17px] xl:w-full xl:text-[18px]">
              builds innovative, scalable technology solutions that empower
              businesses across industries.
            </p>
          </div>
          <div className="flex h-[50px] w-[90px] items-center justify-center gap-[14px] lg:h-[62px] lg:w-[100px] xl:h-[69px] xl:w-[110px]">
            <div className="relative min-h-px min-w-px flex-1 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-110 lg:h-[58px] xl:h-[65px]">
              <Image
                src={assets.socialX}
                alt="X"
                fill
                className="pointer-events-none object-contain"
                unoptimized
              />
            </div>
            <div className="relative min-h-px min-w-px flex-1 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-110 lg:h-[58px] xl:h-[65px]">
              <Image
                src={assets.socialLinkedIn}
                alt="LinkedIn"
                fill
                className="pointer-events-none object-contain"
                unoptimized
              />
            </div>
            <div className="relative min-h-px min-w-px flex-1 motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-110 lg:h-[58px] xl:h-[65px]">
              <Image
                src={assets.socialEmail}
                alt="Email"
                fill
                className="pointer-events-none object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Quick Links + Services: side by side on mobile, absolute on desktop */}
        <div className="mt-8 flex justify-center gap-12 lg:mt-10 lg:gap-16 xl:contents">
          <div className="flex flex-col items-center gap-[11px] leading-normal lg:items-start xl:absolute xl:left-[707px] xl:top-[53px] xl:w-[137px]">
            <p className="font-display text-[22px] font-semibold text-white lg:text-[24px] xl:min-w-full xl:text-[26px]">
              Quick Links
            </p>
            <div className="flex flex-col items-center justify-center gap-[10px] text-center font-display text-[16px] font-light text-[rgba(255,255,255,0.8)] lg:items-start lg:text-left lg:text-[17px] xl:w-[71px] xl:text-[18px]">
              <span className="transition-colors duration-200 ease-out hover:text-white">
                About
              </span>
              <span className="transition-colors duration-200 ease-out hover:text-white">
                Our work
              </span>
              <span className="transition-colors duration-200 ease-out hover:text-white">
                Services
              </span>
              <span className="transition-colors duration-200 ease-out hover:text-white">
                Contact
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-[11px] leading-normal text-center lg:items-start lg:text-left xl:absolute xl:left-[1117px] xl:top-[53px] xl:w-[191px]">
            <p className="font-display text-[22px] font-semibold text-white lg:text-[24px] xl:w-full xl:text-[26px]">
              Services
            </p>
            <div className="flex flex-col items-center justify-center gap-[10px] font-display text-[16px] font-light text-[rgba(255,255,255,0.8)] lg:items-start lg:text-left lg:text-[17px] xl:w-full xl:text-[18px]">
              <span className="transition-colors duration-200 ease-out hover:text-white">
                Fintech
              </span>
              <span className="transition-colors duration-200 ease-out hover:text-white">
                {"AI & Machine Learning"}
              </span>
              <span className="transition-colors duration-200 ease-out hover:text-white">
                Blockchain
              </span>
              <span className="transition-colors duration-200 ease-out hover:text-white">
                Cloud Computing
              </span>
              <span className="transition-colors duration-200 ease-out hover:text-white">
                Cybersecurity
              </span>
              <span className="transition-colors duration-200 ease-out hover:text-white">
                IoT
              </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-center font-display text-[14px] font-light leading-normal text-white lg:mt-10 xl:absolute xl:left-[calc(50%+0.5px)] xl:top-[392px] xl:mt-0 xl:-translate-x-1/2 xl:text-[16px] xl:whitespace-nowrap">
          © 2026 buildON Inc. All rights reserved.
        </p>
      </footer>
    </Reveal>
  );
}
