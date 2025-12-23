"use client";

export default function AdoptionAndGovernanceSection() {
  return (
    <section id="adoption-governance" className="w-full bg-[#FDFBF9]">
      <div className="mx-auto w-full max-w-[1440px] h-[1028px] flex flex-col gap-1">
        {/* Row 1: Text (2/3) + Placeholder (1/3) */}
        <div className="flex w-full h-[512px]">
          <div className="w-2/3 px-[98px] pt-[30px] text-black">
            <h2 className="font-bold text-2xl leading-none tracking-[0.03em] font-quicksand">
              Use Cases &amp; Market Adoption
            </h2>
            <p className="mt-3 font-bold text-xl leading-[180%] tracking-[0.03em] underline font-quicksand">
              From Portfolio Allocation to Trade Settlement
            </p>

            <div className="mt-6 font-normal text-lg leading-[180%] tracking-[0.03em] font-quicksand">
              <p className="font-bold">For Investors</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Diversification into a regulated, asset-backed alternative</li>
                <li>Transparent valuation aligned with institutional frameworks</li>
              </ul>

              <p className="mt-6 font-bold">For the Gemstone Trade</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Digital legal tender among miners, traders, and jewelers</li>
                <li>Active interest from hubs including Dubai, Hong Kong, and Miami</li>
              </ul>

              <p className="mt-6 font-bold">For the Market</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Reduced arbitrage across the value chain</li>
                <li>Fairer pricing and profit distribution</li>
              </ul>

              <p className="mt-6 font-bold">
                EMRL.D bridges capital markets and physical trade.
              </p>
            </div>
          </div>

          <div className="w-1/3 bg-[#4E4E4E]" />
        </div>

        {/* Row 2: Placeholder (1/3) + Text (2/3) */}
        <div className="flex w-full h-[512px]">
          <div className="w-1/3 bg-[#4E4E4E]" />

          <div className="w-2/3 px-[98px] pt-[30px] text-black">
            <h2 className="font-bold text-2xl leading-none tracking-[0.03em] font-quicksand">
              Governance, Compliance &amp; Long-Term Vision
            </h2>
            <p className="mt-4 font-bold text-xl leading-[180%] tracking-[0.03em] font-quicksand">
              Building the Emerald Standard
            </p>

            <div className="mt-5 font-normal text-lg leading-[180%] tracking-[0.03em] font-quicksand">
              <p className="font-bold">EMRL.D governance principles include:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>NAV-based pricing discipline</li>
                <li>Token holder distributions linked to realized cash</li>
                <li>Warrant-backed stockpile demandability</li>
                <li>Compliance with investment governance norms</li>
              </ul>

              <p className="mt-6 font-bold">Long-Term Vision</p>
              <p className="mt-2">
                Inspired by diamond standardization, EMRL.D aims to establish:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>An Emerald Index tracking valuations across global traders</li>
                <li>Institutional trust through transparency and monitoring</li>
                <li>
                  Emeralds as a recognized alternative asset class—comparable to gold
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


