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
      <div className="w-full max-w-[1440px] mx-auto h-[1024px] px-10">
        {/* Title */}
        <h2 className="pt-[90px] text-center font-bold text-[40px] leading-none tracking-[0.03em] text-black font-quicksand">
          TOKENOMICS
        </h2>

        {/* Token Logo */}
        <div className="flex justify-center mt-6">
          <Image
            src="/images/e-emerald.svg"
            alt="EMRL.D Token"
            width={110}
            height={110}
            className="w-[110px] h-[110px]"
          />
        </div>

        {/* Main Content */}
        <div className="mt-14 flex items-start justify-center gap-12">
          {/* Left: 2x2 Stats Grid */}
          <div className="grid grid-cols-2 gap-10">
            {tokenStats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center w-[200px] h-[190px] bg-[#004132] rounded-[20px]"
              >
                <span className="font-bold text-[40px] leading-none tracking-[0.03em] text-white text-center font-quicksand">
                  {stat.value}
                </span>
                <span className="mt-2 font-bold text-[16px] leading-none tracking-[0.03em] text-white text-center font-quicksand">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Token Details Card */}
          <div className="w-[760px] bg-[#004132] rounded-[20px] overflow-hidden">
            <div className="px-10 py-6">
              <h3 className="font-bold text-[20px] leading-none tracking-[0.03em] text-white font-quicksand">
                Token Details
              </h3>
            </div>

            <div className="border-t border-white/25" />

            <div className="flex flex-col">
              {tokenDetails.map((detail, index) => (
                <div key={index}>
                  <div className="flex flex-row justify-between items-center px-10 py-6">
                    <span className="font-bold text-[14px] leading-none tracking-[0.03em] text-white font-quicksand">
                      {detail.label}
                    </span>
                    <span
                      className={`text-right font-bold leading-none tracking-[0.03em] text-white font-quicksand ${
                        detail.isAddress ? "text-[12px]" : "text-[14px]"
                      }`}
                    >
                      {detail.value}
                    </span>
                  </div>
                  {index < tokenDetails.length - 1 ? (
                    <div className="border-t border-white/25" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
