"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden min-h-screen bg-[#00674F]"
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block relative w-full h-[1024px]">
        {/* Background Image */}
        <div className="absolute left-0 right-0 top-[129px] h-[895px] w-full">
          <Image
            src="/images/section1-bg-image.svg"
            alt="Emerald Gemstone"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 via-40% to-transparent" />
        </div>

        {/* Content Container */}
        <div className="relative w-full max-w-[1440px] mx-auto h-full">
          {/* E Token Logo */}
          <div className="absolute left-[91px] top-[316px] w-[280px] h-[280px]">
            <Image
              src="/images/e-emerald.svg"
              alt="EMRLD Symbol"
              width={280}
              height={280}
              className="w-full h-full"
              priority
            />
          </div>

          {/* Title & Subtitle */}
          <div className="absolute left-[101px] top-[577px] w-[579px]">
            <h1 className="font-bold text-[70px] leading-none tracking-[0.03em] text-white">
              EMRL.D
            </h1>
            <p className="font-bold text-[35px] leading-[120%] tracking-[0.03em] text-white mt-2">
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
          <div className="absolute inset-0 bg-linear-to-b from-[#00674F]/30 via-black/80 via-50% to-black/90" />
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
          <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl leading-none tracking-[0.03em] text-white">
            EMRL.D
          </h1>

          {/* Subtitle */}
          <p className="font-bold text-xl md:text-2xl lg:text-[35px] leading-[130%] tracking-[0.03em] text-white mt-4">
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
