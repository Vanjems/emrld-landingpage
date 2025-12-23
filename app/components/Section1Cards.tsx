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
      className="relative w-full overflow-hidden"
      style={{
        background: '#FDFBF9',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '2px',
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-0 py-8 lg:py-0" style={{ minHeight: '512px' }}>
        {/* Desktop Layout */}
        <div className="hidden lg:flex gap-6 justify-center items-start" style={{ paddingTop: '34px', paddingBottom: '62px' }}>
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center"
              style={{
                width: '403px',
                height: '416px',
                background: '#D9D9D9',
                borderRadius: '30px',
              }}
            >
              {/* Title - Underlined */}
              <h3
                className="text-center"
                style={{
                  marginTop: '58px',
                  fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                  fontWeight: 700,
                  fontSize: '24px',
                  lineHeight: '180%',
                  letterSpacing: '0.03em',
                  textDecorationLine: 'underline',
                  color: '#000000',
                }}
              >
                {card.title}
              </h3>

              {/* Subtitle */}
              <p
                className="text-center px-8"
                style={{
                  marginTop: '16px',
                  fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                  fontWeight: 600,
                  fontSize: '24px',
                  lineHeight: '100%',
                  letterSpacing: '0.03em',
                  color: '#000000',
                }}
              >
                {card.subtitle}
              </p>

              {/* Description */}
              <p
                className="px-10"
                style={{
                  marginTop: '24px',
                  fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                  fontWeight: 400,
                  fontSize: '20px',
                  lineHeight: '180%',
                  letterSpacing: '0.03em',
                  color: '#000000',
                }}
              >
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
              className="relative flex flex-col items-center p-6"
              style={{
                background: '#D9D9D9',
                borderRadius: '20px',
              }}
            >
              <h3
                className="text-center"
                style={{
                  fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '140%',
                  letterSpacing: '0.03em',
                  textDecorationLine: 'underline',
                  color: '#000000',
                }}
              >
                {card.title}
              </h3>

              <p
                className="text-center mt-3"
                style={{
                  fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                  fontWeight: 600,
                  fontSize: '18px',
                  lineHeight: '120%',
                  letterSpacing: '0.03em',
                  color: '#000000',
                }}
              >
                {card.subtitle}
              </p>

              <p
                className="mt-4"
                style={{
                  fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '180%',
                  letterSpacing: '0.03em',
                  color: '#000000',
                }}
              >
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

