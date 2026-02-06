/* eslint-disable @next/next/no-img-element */
"use client";
import { ButtonSmall } from "@/components/ui/Button";
import { RiDownloadLine } from "@/components/ui/Icons";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Hero() {
  return (
    <div className="bg-white border-animation dark:bg-[#0e0e0f] border border-[#d0d0d0] dark:border-[#272730] rounded-lg overflow-hidden relative min-h-143.5 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="inner">
        <div className="absolute -top-120    left-0 w-full h-[1108px] opacity-10 dark:opacity-5 pointer-events-none">
          <div className="absolute left-0 w-1/2 h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900" />
          <div className="absolute right-0 w-1/2 h-full bg-gradient-to-bl from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900" />
        </div>

        <div className="relative mx-auto px-[36px] py-[54px] flex gap-12 bg-white dark:bg-[#0e0e0f] ">
          {/* Left Side - Image */}
          <div className="relative w-[512px] h-[461px] flex-shrink-0">
            <div className="absolute inset-0 rounded-2xl">
              <img
                src="/avt.jpg"
                className="w-full h-full object-cover rounded-2xl rounded-full"
                alt=""
              />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[81px] h-[73px]">
              <img src="/dev-2.png" alt="Decorative Bottom" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1 pt-11">
            {/* Name Tag */}
            <p className="font-dm-mono text-[16px] mb-2">
              <span className="text-[var(--theme-primary-1)]">
                &lt;span&gt;
              </span>
              <span className="text-[var(--foreground)] text-[20px]">
                Hey, I&apos;m Hoàn
              </span>
              <span className="text-[var(--theme-primary-1)]">
                &lt;/span&gt;
              </span>
            </p>

            {/* Title */}
            <h1 className="font-urbanist font-bold text-[50px] leading-[1.2] mb-6">
              <span className="text-[var(--foreground)]">Junior </span>
              <span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">
                {`{Full Stack}`}
              </span>
              <br />
              <span className="text-[var(--foreground)]">
                Web & App developer_
              </span>
            </h1>

            {/* Description */}
            <p className="font-dm-mono text-[16px] leading-[1.5] text-[var(--neutral-300)] dark:text-[var(--secondary)] mb-8">
              <span className="text-[var(--theme-primary-1)]">&lt;p&gt;</span>
              With expertise in cutting-edge technologies such as{" "}
              <span className="text-[var(--theme-primary-1)]">
                NodeJS
              </span>, <span className="text-(--theme-primary-1)">React</span>,{" "}
              <span className="text-(--theme-primary-1)">Angular</span>, and{" "}
              <span className="text-(--theme-primary-1)">Laravel</span>
              ... I deliver web solutions that are both innovative and robust.
              <span className="text-(--theme-primary-1)">&lt;/p&gt;</span>
            </p>

            {/* Tech Stack Icons */}
            <div className="flex gap-[8px] items-center mb-6">
              <div className="w-full max-w-[400px] overflow-hidden">
                <Marquee speed={30} gradient={false} pauseOnHover={true}>
                  <div className="size-[67px] rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center mx-1">
                    <img src="/nextjs.svg" alt="" />
                  </div>
                  <div className="size-[67px] rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center mx-1">
                    <img src="/nodejs.svg" alt="" />
                  </div>
                  <div className="size-[67px] rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center mx-1">
                    <img src="/firebase.svg" alt="" />
                  </div>
                  <div className="size-[67px] rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center mx-1">
                    <img src="/mongodb.svg" alt="" />
                  </div>
                  <div className="size-[67px] rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center mx-1">
                    <img src="/Photoshop.svg" alt="" />
                  </div>
                  <div className="size-[67px] rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center mx-1">
                    <img src="/tailwind.svg" alt="" />
                  </div>
                  <div className="size-[67px] rounded-xl bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center mx-1">
                    <img src="/React.svg" alt="" />
                  </div>
                </Marquee>
              </div>
              <span className="font-dm-mono text-[16px] text-[var(--neutral-300)] dark:text-[var(--secondary)] flex-shrink-0">
                ...and more
              </span>
            </div>

            <button className="download_btn">
              <div className="svg-wrapper-1">
                <div className="svg-wrapper">
                  <RiDownloadLine />
                </div>
              </div>
              <span className="font-dm-mono">[ Download CV ]</span>
            </button>
            {/* Download CV Button */}
            {/* <ButtonSmall icon={<RiDownloadLine />}>[ Download CV ]</ButtonSmall> */}
          </div>
        </div>

        {/* Decorative Border Gradient */}
        <div className="absolute top-[133.5px] right-0 w-[164px] h-[163.5px] bg-gradient-to-br from-emerald-400/20 to-green-500/20 rounded-tl-full" />
      </div>
    </div>
  );
}
