"use client";

import Image from "next/image";

const tokenStats = [
  { value: "100M", label: "Token Supply" },
  { value: "LUMIA", label: "Network" },
  { value: "$0.20", label: "Initial Price" },
  { value: "ERC-20", label: "Token Type" },
];

const tokenDetails = [
  { label: "Token Name", value: "EMRL.D" },
  { label: "Token Custodian", value: "Gemini Trust Company, LLC" },
  { label: "Public Chain", value: "Lumia Blockchain" },
  { label: "Contract Address", value: "0xa5173f751e183e9aF8372A6E861b9FBbB4fa4d0A", isAddress: true },
];

export default function TokenomicsSection() {
  return (
    <section
      id="tokenomics"
      className="relative w-full overflow-hidden bg-white"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-0 min-h-[600px]">
        {/* Title */}
        <h2 className="pt-[90px] text-center font-bold text-3xl md:text-4xl leading-none tracking-[0.03em] text-black">
          TOKENOMICS
        </h2>

        {/* Token Logo */}
        <div className="flex justify-center mt-8">
          <Image
            src="/images/e-emerald.svg"
            alt="EMRL.D Token"
            width={140}
            height={140}
            className="w-28 h-28 md:w-36 md:h-36"
          />
        </div>

        {/* Token Stats Grid */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mx-auto mt-10 max-w-[900px]">
          {tokenStats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-[183px] h-[164px] bg-[#004132] rounded-[20px]"
            >
              <span className="font-bold text-4xl leading-none tracking-[0.03em] text-white text-center">
                {stat.value}
              </span>
              <span className="mt-3 font-bold text-base leading-none tracking-[0.03em] text-white text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Token Details Table */}
        <div className="mx-auto mt-10 mb-16 max-w-[603px] bg-[#004132] rounded-[20px] px-8 py-6">
          <h3 className="text-center font-bold text-xl leading-none tracking-[0.03em] text-white mb-5">
            Token Details
          </h3>

          <div className="flex flex-col">
            {tokenDetails.map((detail, index) => (
              <div 
                key={index}
                className={`flex flex-col sm:flex-row justify-between items-center py-3 ${
                  index > 0 ? 'border-t border-white/50' : ''
                }`}
              >
                <span className="font-bold text-base leading-none tracking-[0.03em] text-white">
                  {detail.label}
                </span>
                <span className={`mt-1 sm:mt-0 text-center sm:text-right font-bold leading-none tracking-[0.03em] text-white break-all ${
                  detail.isAddress ? 'text-sm' : 'text-base'
                }`}>
                  {detail.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
