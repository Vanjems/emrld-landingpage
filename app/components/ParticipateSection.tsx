"use client";

export default function ParticipateSection() {
  return (
    <section
      id="participate"
      className="relative w-full overflow-hidden bg-[#00674F] border border-white/10 rounded-sm"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 flex flex-col justify-center items-center min-h-[221px] py-10">
        {/* Title */}
        <h2 className="text-center font-bold text-3xl md:text-4xl leading-none tracking-[0.03em] text-white">
          Participate in the Next Asset Standard
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-center max-w-[754px] font-bold text-lg md:text-xl lg:text-2xl leading-none tracking-[0.03em] text-white">
          EMRL.D is positioned at the intersection of real assets, institutional finance, and tokenized liquidity.
        </p>
      </div>
    </section>
  );
}
