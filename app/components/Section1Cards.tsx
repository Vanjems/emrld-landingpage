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
      className="relative w-full overflow-hidden bg-[#FDFBF9] mt-5"
    >
      <div className="w-full max-w-[1440px] mx-auto h-[512px] flex items-center justify-center">
        <div className="flex items-center justify-center gap-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[403px] h-[416px] bg-[#D9D9D9] rounded-[30px] pt-[44px] px-10 text-center"
            >
              {/* Title - Underlined */}
              <h3 className="text-center font-bold text-[24px] leading-[120%] tracking-[0.03em] underline text-black font-quicksand">
                {card.title}
              </h3>

              {/* Subtitle */}
              <p className="mt-6 text-center font-semibold text-[24px] leading-[120%] tracking-[0.03em] text-black font-quicksand">
                {card.subtitle}
              </p>

              {/* Description */}
              <p className="mt-8 font-normal text-[20px] leading-[140%] tracking-[0.03em] text-black font-quicksand">
                {card.description}{" "}
                <Link href={card.link} className="underline font-normal text-black">
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
