"use client";

export default function GovernanceSection() {
  return null;
  return (
    <section
      id="governance"
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="w-full max-w-[1440px] mx-auto relative min-h-[512px]">
        {/* Desktop Layout */}
        <div className="block relative w-full h-[512px]">
          {/* Left Dark Rectangle */}
          <div className="absolute left-0 top-0 w-[590px] h-[512px] bg-[#4E4E4E]" />

          {/* Right Content */}
          <div className="absolute left-[618px] top-7 w-[761px]">
            <h2 className="font-bold text-2xl leading-none tracking-[0.03em] text-black">
              Governance, Compliance & Long-Term Vision
            </h2>

            <p className="mt-4 font-bold text-xl leading-[180%] tracking-[0.03em] text-black">
              Building the Emerald Standard
            </p>

            <div className="mt-5 font-bold text-xl leading-[180%] tracking-[0.03em] text-black">
              <p className="mb-2">EMRL.D governance principles include:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>NAV-based pricing discipline</li>
                <li>Token holder distributions linked to realized cash</li>
                <li>Warrant-backed stockpile demandability</li>
                <li>Compliance with investment governance norms</li>
              </ul>

              <p className="font-bold mb-2">Long-Term Vision</p>
              <p className="mb-2">Inspired by diamond standardization, EMRL.D aims to establish:</p>
              <ul className="list-disc pl-6">
                <li>An Emerald Index tracking valuations across global traders</li>
                <li>Institutional trust through transparency and monitoring</li>
                <li>Emeralds as a recognized alternative asset class—comparable to gold</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="hidden px-6 py-8">
          {/* Mobile placeholder */}
          <div className="mb-6 w-full h-[200px] bg-[#4E4E4E] rounded-lg" />

          <h2 className="font-bold text-[22px] leading-none tracking-[0.03em] text-black">
            Governance, Compliance & Long-Term Vision
          </h2>

          <p className="mt-3 font-bold text-lg leading-[180%] tracking-[0.03em] text-black">
            Building the Emerald Standard
          </p>

          <div className="mt-4 font-bold text-base leading-[180%] tracking-[0.03em] text-black">
            <p className="mb-2">EMRL.D governance principles include:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>NAV-based pricing discipline</li>
              <li>Token holder distributions linked to realized cash</li>
              <li>Warrant-backed stockpile demandability</li>
              <li>Compliance with investment governance norms</li>
            </ul>

            <p className="font-bold mb-2">Long-Term Vision</p>
            <p className="mb-2">Inspired by diamond standardization, EMRL.D aims to establish:</p>
            <ul className="list-disc pl-6">
              <li>An Emerald Index tracking valuations across global traders</li>
              <li>Institutional trust through transparency and monitoring</li>
              <li>Emeralds as a recognized alternative asset class—comparable to gold</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
