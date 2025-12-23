"use client";

import Link from "next/link";

const cards = [
  {
    title: "THE MARKET PROBLEM",
    subtitle: "A $Billion Asset Class Trapped by Illiquidity",
    description: "Emeralds have long been trusted as portable stores of value, yet the gemstone market remains...",
    link: "#market-problem",
  },
  {
    title: "THE EMRL.D SOLUTION",
    subtitle: "Real-World Assets, Tokenized with Discipline",
    description: "EMRL.D introduces a tokenized liquidity model anchored in physical emerald stockpiles that arec...",
    link: "#solution",
  },
  {
    title: "RETURNS & VALUE DRIVERS",
    subtitle: "Cash Flow, Commercial Upside, and Scarcity",
    description: "EMRL.D value is driven by: Intrinsic Value: Commercial realization of gemstone stockpiles with a minimum 3× bid target ...",
    link: "#returns",
  },
];

export default function Section1Cards() {
  return (
    <section
      id="section-1"
      className="relative w-full overflow-hidden bg-[#FDFBF9] border border-white/10 rounded-sm"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-0 py-8 lg:py-0 min-h-[512px]">
        {/* Desktop Layout */}
        <div className="hidden lg:flex gap-6 justify-center items-start pt-[34px] pb-[62px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center w-[403px] h-[416px] bg-[#D9D9D9] rounded-[30px]"
            >
              {/* Title - Underlined */}
              <h3 className="mt-[58px] text-center font-bold text-2xl leading-[180%] tracking-[0.03em] underline text-black">
                {card.title}
              </h3>

              {/* Subtitle */}
              <p className="mt-4 text-center px-8 font-semibold text-2xl leading-none tracking-[0.03em] text-black">
                {card.subtitle}
              </p>

              {/* Description */}
              <p className="mt-6 px-10 font-normal text-xl leading-[180%] tracking-[0.03em] text-black">
                {card.description}
                <Link 
                  href={card.link}
                  className="text-[#00674F] hover:underline font-bold"
                >
                  READ MORE
                </Link>
              </p>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden flex flex-col gap-6 py-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center p-6 bg-[#D9D9D9] rounded-[20px]"
            >
              <h3 className="text-center font-bold text-xl leading-[140%] tracking-[0.03em] underline text-black">
                {card.title}
              </h3>

              <p className="mt-3 text-center font-semibold text-lg leading-[120%] tracking-[0.03em] text-black">
                {card.subtitle}
              </p>

              <p className="mt-4 font-normal text-base leading-[180%] tracking-[0.03em] text-black">
                {card.description}
                <Link 
                  href={card.link}
                  className="text-[#00674F] hover:underline font-bold"
                >
                  READ MORE
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
