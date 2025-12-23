"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#00674F]"
    >
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col px-6 py-10 md:px-8 lg:px-10">
        <h2 className="mx-auto mb-8 w-full max-w-[1023px] text-center font-[700] tracking-[0.03em] text-white text-[20px] md:text-[26px] lg:text-[32px] leading-none">
          Tokenized Emeralds. Institutional Liquidity. Transparent Value.
        </h2>

        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-start lg:gap-12">
          <div className="w-full max-w-[640px] lg:w-[600px] text-white">
            <p className="font-[700] text-[16px] md:text-[18px] lg:text-[20px] leading-[180%] tracking-[0.03em]">
              <span className="font-[700]">EMRL.D</span> introduces a new standard for alternative assets by tokenizing{" "}
              <span className="font-[700]">graded and institutionally certified emerald gemstone stockpiles</span>. Built
              to solve historic illiquidity and opaque pricing in the gemstone trade, EMRL.D combines real-world asset
              backing, disciplined Net Asset Value (NAV) governance, and structured liquidity mechanisms.
            </p>

            <div className="mt-6 space-y-2">
              <p className="font-[500] text-[16px] md:text-[18px] lg:text-[20px] leading-[180%] tracking-[0.03em]">
                This is not speculative crypto.
              </p>
              <p className="font-[500] text-[16px] md:text-[18px] lg:text-[20px] leading-[180%] tracking-[0.03em]">
                This is <span className="font-[700]">real assets, priced transparently, governed institutionally</span>.
              </p>
            </div>

            <div className="mt-7 flex justify-center lg:justify-start">
              <Link
                href="#whitepaper"
                className="inline-flex h-[45px] w-[240px] items-center justify-center rounded-[65px] bg-white px-7 py-3 font-[700] text-[16px] tracking-[0.03em] text-black hover:opacity-90 transition-opacity"
              >
                Check Our Whitepaper
              </Link>
            </div>
          </div>

          <div className="w-full min-h-[280px] bg-[#D9D9D9] lg:h-[409px] lg:w-[710px]">
            {/* Placeholder for video/image content */}
          </div>
        </div>
      </div>
    </section>
  );
}





