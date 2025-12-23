"use client";

export default function UseCasesSection() {
  return null;
  return (
    <section
      id="use-cases"
      className="relative w-full overflow-hidden bg-[#FDFBF9] border border-white/10 rounded-sm"
    >
      <div className="w-full max-w-[1440px] mx-auto relative min-h-[512px]">
        {/* Desktop Layout */}
        <div className="block relative w-full h-[512px]">
          {/* Left Content */}
          <div className="absolute left-[98px] top-[30px]">
            <h2 className="font-bold text-2xl leading-none tracking-[0.03em] text-black">
              Use Cases & Market Adoption
            </h2>

            <p className="mt-3 font-bold text-xl leading-[180%] tracking-[0.03em] text-black">
              From Portfolio Allocation to Trade Settlement
            </p>
          </div>

          {/* Content Text */}
          <div className="absolute left-[98px] top-[120px] w-[640px]">
            <div className="font-bold text-xl leading-[180%] tracking-[0.03em] text-black">
              <p className="mb-4">
                <span className="font-bold">For Investors</span>
                <br />
                Diversification into a regulated, asset-backed alternative
                <br />
                Transparent valuation aligned with institutional frameworks
              </p>

              <p className="mb-4">
                <span className="font-bold">For the Gemstone Trade</span>
                <br />
                Digital legal tender among miners, traders, and jewelers
                <br />
                Active interest from hubs including Dubai, Hong Kong, and Miami
              </p>

              <p>
                <span className="font-bold">For the Market</span>
                <br />
                Reduced arbitrage across the value chain
                <br />
                Fairer pricing and profit distribution
              </p>

              <p className="mt-4 font-bold">
                EMRL.D bridges capital markets and physical trade.
              </p>
            </div>
          </div>

          {/* Right Dark Rectangle */}
          <div className="absolute right-0 top-0 w-[613px] h-[512px] bg-[#4E4E4E]" />
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="hidden px-6 py-8">
          <h2 className="font-bold text-[22px] leading-none tracking-[0.03em] text-black">
            Use Cases & Market Adoption
          </h2>

          <p className="mt-2 font-bold text-lg leading-[180%] tracking-[0.03em] text-black">
            From Portfolio Allocation to Trade Settlement
          </p>

          <div className="mt-6 font-bold text-base leading-[180%] tracking-[0.03em] text-black">
            <p className="mb-4">
              <span className="font-bold">For Investors</span>
              <br />
              Diversification into a regulated, asset-backed alternative. Transparent valuation aligned with institutional frameworks.
            </p>

            <p className="mb-4">
              <span className="font-bold">For the Gemstone Trade</span>
              <br />
              Digital legal tender among miners, traders, and jewelers. Active interest from hubs including Dubai, Hong Kong, and Miami.
            </p>

            <p>
              <span className="font-bold">For the Market</span>
              <br />
              Reduced arbitrage across the value chain. Fairer pricing and profit distribution.
            </p>

            <p className="mt-4 font-bold">
              EMRL.D bridges capital markets and physical trade.
            </p>
          </div>

          {/* Mobile placeholder */}
          <div className="mt-6 w-full h-[200px] bg-[#4E4E4E] rounded-lg" />
        </div>
      </div>
    </section>
  );
}
