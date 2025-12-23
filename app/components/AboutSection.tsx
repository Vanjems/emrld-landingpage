"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#00674F] pt-2 pb-6 px-4"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Desktop Layout */}
        <div className="block">
          {/* Top Center Heading */}
          <h2 className="text-center font-bold text-[32px] leading-none tracking-[0.03em] text-white font-quicksand mb-8">
            Tokenized Emeralds. Institutional Liquidity. Transparent Value.
          </h2>

          {/* Two Column Layout */}
          <div className="flex flex-row gap-2 pl-28">
            {/* First Column - Left */}
            <div className="flex flex-col max-w-[600px]">
              {/* Main Paragraph */}
              <p className="mt-5 font-normal text-[20px] leading-relaxed tracking-[0.03em] text-white font-quicksand">
                EMRL.D introduces a new standard for alternative assets by tokenizing graded and institutionally certified emerald gemstone stockpiles. Built to solve historic illiquidity and opaque pricing in the gemstone trade, EMRL.D combines real-world asset backing, disciplined Net Asset Value (NAV) governance, and structured liquidity mechanisms.
              </p>

              {/* Gap */}
              <div className="h-20" />

              {/* Emphasis Text */}
              <p className="font-normal text-[20px] leading-relaxed tracking-[0.03em] text-white font-quicksand">
                This is not speculative crypto. This is <span className="font-bold">real assets</span>, priced transparently, governed institutionally.
              </p>

              {/* Button - Center Aligned */}
              <div className="flex justify-center mt-6">
                <Link
                  href="#whitepaper"
                  className="flex items-center justify-center bg-white text-black font-bold text-base leading-none tracking-[0.03em] px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-quicksand"
                >
                  Check Our Whitepaper
                </Link>
              </div>
            </div>

            {/* Second Column - Right */}
            <div className="flex-1 flex justify-center items-center">
              {/* Rectangle Placeholder */}
              <div className="w-[710px] h-[409px] bg-[#D9D9D9] rounded-lg" />
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="hidden">
          {/* Top Center Heading */}
          <h2 className="text-center font-bold text-2xl leading-tight tracking-[0.03em] text-white mt-2 font-quicksand px-4 mb-8">
            Tokenized Emeralds. Institutional Liquidity. Transparent Value.
          </h2>

          {/* Content Stack */}
          <div className="flex flex-col gap-6 px-4">
            {/* Main Paragraph */}
            <p className="font-normal text-sm leading-relaxed tracking-[0.03em] text-white font-quicksand">
              EMRL.D introduces a new standard for alternative assets by tokenizing graded and institutionally certified emerald gemstone stockpiles. Built to solve historic illiquidity and opaque pricing in the gemstone trade, EMRL.D combines real-world asset backing, disciplined Net Asset Value (NAV) governance, and structured liquidity mechanisms.
            </p>

            {/* Emphasis Text */}
            <p className="font-normal text-sm leading-relaxed tracking-[0.03em] text-white font-quicksand">
              This is not speculative crypto. This is <span className="font-bold">real assets</span>, priced transparently, governed institutionally.
            </p>

            {/* Button */}
            <div className="flex justify-center">
              <Link
                href="#whitepaper"
                className="flex items-center justify-center bg-white text-black font-bold text-sm leading-none tracking-[0.03em] px-6 py-3 rounded-lg hover:opacity-90 transition-opacity font-quicksand"
              >
                Check Our Whitepaper
              </Link>
            </div>

            {/* Rectangle Placeholder - Mobile */}
            <div className="w-full aspect-710/409 bg-[#D9D9D9] rounded-lg mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
