import Image from "next/image";
import { assets } from "@/lib/figma-assets";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function Footer() {
  return (
    <Reveal className="w-full xl:mt-10">
      <footer
        className="relative left-[50%] w-[100vw] -translate-x-1/2 overflow-hidden px-6 py-12 lg:px-8 lg:py-16 xl:py-20"
        style={{
          backgroundImage:
            "linear-gradient(115.37deg, rgb(3, 0, 51) 36.996%, rgb(0, 86, 161) 86.237%, rgb(1, 148, 236) 100.94%)",
        }}
      >
        {/* Main Content Wrapper */}
        <div className="mx-auto flex w-full max-w-[1288px] flex-col gap-12 lg:flex-row lg:justify-between lg:gap-8">
          
          {/* Column 1: Logo + description + socials */}
          <div className="flex flex-col items-center gap-6 text-center lg:max-w-[380px] lg:items-start lg:text-left">
            <div className="flex w-full flex-col items-center gap-4 lg:items-start">
              <p className="font-display text-[28px] font-bold text-white lg:text-[32px]">
                <span className="leading-normal">Build</span>
                <span className="leading-normal text-[#0194ec]">ON</span>
                <span className="leading-normal">{" Inc."}</span>
              </p>
              <p className="font-display text-[16px] font-normal leading-relaxed text-[rgba(255,255,255,0.7)] lg:text-[18px]">
                builds innovative, scalable technology solutions that empower
                businesses across industries.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link href={"https://x.com/buildON_Inc"}>
                <div className="relative size-10 cursor-pointer motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-110 lg:size-12">
                  <Image
                    src={assets.socialX}
                    alt="X"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </Link>
              <div className="relative size-10 cursor-pointer motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-110 lg:size-12">
                <Image
                  src={assets.socialLinkedIn}
                  alt="LinkedIn"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <Link
                href="mailto:support@buildonhq.org"
                className="cursor-pointer motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:scale-105"
              >
                <div className="relative size-10 cursor-pointer motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-110 lg:size-12">
                  <Image
                    src={assets.socialEmail}
                    alt="Email"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* Columns 2 & 3 Wrapper: Quick Links + Services */}
          {/* Changed items-center to items-start, added w-full max-w-[400px] to spread evenly on mobile */}
          <div className="mx-auto flex w-full max-w-[400px] flex-row items-start justify-between gap-8 sm:max-w-none sm:justify-center sm:gap-20 lg:mx-0 lg:w-auto lg:gap-32">
            
            {/* Column 2: Quick Links */}
            <div className="flex flex-col items-start gap-4">
              <p className="font-display text-[22px] font-semibold text-white lg:text-[26px]">
                Quick Links
              </p>
              {/* Changed mobile alignment from items-center/text-center to items-start/text-left */}
              <div className="flex flex-col items-start gap-3 text-left font-display text-[16px] font-light text-[rgba(255,255,255,0.8)] lg:text-[18px]">
                <span className="cursor-pointer transition-colors duration-200 ease-out hover:text-white">
                  About
                </span>
                <span className="cursor-pointer transition-colors duration-200 ease-out hover:text-white">
                  Our work
                </span>
                <span className="cursor-pointer transition-colors duration-200 ease-out hover:text-white">
                  Services
                </span>
                <span className="cursor-pointer transition-colors duration-200 ease-out hover:text-white">
                  Contact
                </span>
              </div>
            </div>

            {/* Column 3: Services */}
            <div className="flex flex-col items-start gap-4">
              <p className="font-display text-[22px] font-semibold text-white lg:text-[26px]">
                Services
              </p>
              {/* Changed mobile alignment from items-center/text-center to items-start/text-left */}
              <div className="flex flex-col items-start gap-3 text-left font-display text-[16px] font-light text-[rgba(255,255,255,0.8)] lg:text-[18px]">
                <span className="cursor-pointer transition-colors duration-200 ease-out hover:text-white">
                  Fintech
                </span>
                <span className="cursor-pointer transition-colors duration-200 ease-out hover:text-white">
                  AI & Machine Learning
                </span>
                <span className="cursor-pointer transition-colors duration-200 ease-out hover:text-white">
                  Blockchain
                </span>
                <span className="cursor-pointer transition-colors duration-200 ease-out hover:text-white">
                  Cloud Computing
                </span>
                <span className="cursor-pointer transition-colors duration-200 ease-out hover:text-white">
                  Cybersecurity
                </span>
                <span className="cursor-pointer transition-colors duration-200 ease-out hover:text-white">
                  IoT
                </span>
              </div>
            </div>
            
          </div>
        </div>

        {/* Copyright */}
        <div className="mx-auto mt-12 flex w-full max-w-[1288px] justify-center lg:mt-16">
          <p className="font-display text-[14px] font-light leading-normal text-[rgba(255,255,255,0.8)] lg:text-[16px]">
            © 2026 buildON Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </Reveal>
  );
}