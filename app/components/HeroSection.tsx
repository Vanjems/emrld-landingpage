"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ 
        minHeight: '100vh',
        background: '#00674F'
      }}
    >
      {/* Desktop Layout - Exact Figma specs */}
      <div className="hidden lg:block relative w-full" style={{ height: '1024px' }}>
        {/* Background Image - Position: top: 129px, full width, height: 895px */}
        <div 
          className="absolute left-0 right-0"
          style={{ 
            top: '129px',
            height: '895px',
            width: '100%',
          }}
        >
          <Image
            src="/images/section1-bg-image.svg"
            alt="Emerald Gemstone"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient overlay for text readability */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)'
            }}
          />
        </div>

        {/* Content Container */}
        <div className="relative w-full max-w-[1440px] mx-auto h-full">
          {/* E Token Logo - Position: left: 91px, top: 316px, 280x280 */}
          <div 
            className="absolute"
            style={{ 
              left: '91px', 
              top: '316px',
              width: '280px',
              height: '280px',
            }}
          >
            <Image
              src="/images/e-emerald.svg"
              alt="EMRLD Symbol"
              width={280}
              height={280}
              className="w-full h-full"
              priority
            />
          </div>

          {/* Title & Subtitle - Position: left: 101px, top: 577px */}
          <div 
            className="absolute"
            style={{ 
              left: '101px', 
              top: '577px',
              width: '579px',
            }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                fontWeight: 700,
                fontSize: '70px',
                lineHeight: '100%',
                letterSpacing: '0.03em',
                color: '#FFFFFF',
              }}
            >
              EMRL.D
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                fontWeight: 700,
                fontSize: '35px',
                lineHeight: '120%',
                letterSpacing: '0.03em',
                color: '#FFFFFF',
                marginTop: '8px',
              }}
            >
              Institutional-Grade Liquidity
              <br />
              for Emeralds Through
              <br />
              Tokenized Real-World Assets
            </p>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden relative w-full min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/section1-bg-image.svg"
            alt="Emerald Gemstone"
            fill
            className="object-cover object-right"
            priority
          />
          {/* Gradient overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(0,103,79,0.3) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.9) 100%)'
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-start min-h-screen px-6 md:px-12 pt-32 pb-16">
          {/* E Token Logo */}
          <div className="mb-6">
            <Image
              src="/images/e-emerald.svg"
              alt="EMRLD Symbol"
              width={200}
              height={200}
              className="w-40 h-40 md:w-52 md:h-52"
              priority
            />
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(48px, 12vw, 70px)',
              lineHeight: '100%',
              letterSpacing: '0.03em',
              color: '#FFFFFF',
            }}
          >
            EMRL.D
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(20px, 5vw, 35px)',
              lineHeight: '130%',
              letterSpacing: '0.03em',
              color: '#FFFFFF',
              marginTop: '16px',
            }}
          >
            Institutional-Grade Liquidity
            <br />
            for Emeralds Through
            <br />
            Tokenized Real-World Assets
          </p>
        </div>
      </div>
    </section>
  );
}
