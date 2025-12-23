"use client";

import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden"
      style={{ 
        minHeight: '700px',
        background: '#00674F'
      }}
    >
      <div className="relative w-full max-w-[1440px] mx-auto px-6 md:px-0">
        {/* Headline - Position: left: 208px, top: 25px */}
        <h2
          className="text-center md:text-center w-full md:w-auto md:absolute"
          style={{
            left: '208px',
            top: '25px',
            width: '1023px',
            maxWidth: '100%',
            fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(20px, 4vw, 32px)',
            lineHeight: '100%',
            letterSpacing: '0.03em',
            color: '#FFFFFF',
            paddingTop: '25px',
          }}
        >
          Tokenized Emeralds. Institutional Liquidity. Transparent Value.
        </h2>

        {/* Content Grid */}
        <div 
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 pt-20 md:pt-[100px] pb-16"
        >
          {/* Left Content - Group 227/228 */}
          <div 
            className="w-full lg:w-auto px-4 md:px-0"
            style={{ 
              maxWidth: '609px',
              marginLeft: 'clamp(20px, 6vw, 87px)',
            }}
          >
            {/* Main Paragraph - font-weight: 700, 20px, line-height: 180% */}
            <p
              style={{
                fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(16px, 2.5vw, 20px)',
                lineHeight: '180%',
                letterSpacing: '0.03em',
                color: '#FFFFFF',
                textAlign: 'justify',
              }}
            >
              <span style={{ fontWeight: 700 }}>EMRL.D</span> introduces a new standard for alternative assets by tokenizing{' '}
              <span style={{ fontWeight: 700 }}>graded and institutionally certified emerald gemstone stockpiles</span>. 
              Built to solve historic illiquidity and opaque pricing in the gemstone trade, EMRL.D combines 
              real-world asset backing, disciplined Net Asset Value (NAV) governance, and structured liquidity mechanisms.
            </p>

            {/* Secondary Paragraph - font-weight: 500, 20px, line-height: 180% */}
            <div style={{ marginTop: '40px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                  fontWeight: 500,
                  fontSize: 'clamp(16px, 2.5vw, 20px)',
                  lineHeight: '180%',
                  letterSpacing: '0.03em',
                  color: '#FFFFFF',
                }}
              >
                This is not speculative crypto.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                  fontWeight: 500,
                  fontSize: 'clamp(16px, 2.5vw, 20px)',
                  lineHeight: '180%',
                  letterSpacing: '0.03em',
                  color: '#FFFFFF',
                }}
              >
                This is{' '}
                <span style={{ fontWeight: 700 }}>real assets, priced transparently, governed institutionally</span>.
              </p>
            </div>

            {/* Check Our Whitepaper Button - Position relative to content */}
            <div style={{ marginTop: '40px' }}>
              <Link
                href="#whitepaper"
                className="inline-flex flex-col justify-center items-center hover:opacity-90 transition-opacity"
                style={{
                  width: '240px',
                  height: '45px',
                  background: '#FFFFFF',
                  backdropFilter: 'blur(5px)',
                  borderRadius: '65px',
                  padding: '12px 28px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0.03em',
                    color: '#000000',
                  }}
                >
                  Check Our Whitepaper
                </span>
              </Link>
            </div>
          </div>

          {/* Right Content - Rectangle placeholder for image/video */}
          {/* Position: left: 712px, top: 101px, W:710, H:409 */}
          <div 
            className="w-full lg:w-auto lg:absolute hidden lg:block"
            style={{
              right: '18px',
              top: '101px',
              width: '710px',
              height: '409px',
              background: '#D9D9D9',
            }}
          >
            {/* Placeholder for video/image content */}
          </div>

          {/* Mobile version of the placeholder */}
          <div 
            className="w-full lg:hidden mx-4"
            style={{
              height: '300px',
              background: '#D9D9D9',
              borderRadius: '8px',
            }}
          >
            {/* Placeholder for video/image content */}
          </div>
        </div>
      </div>
    </section>
  );
}





