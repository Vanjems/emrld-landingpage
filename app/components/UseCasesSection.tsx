"use client";

export default function UseCasesSection() {
  return (
    <section
      id="use-cases"
      className="relative w-full overflow-hidden"
      style={{
        background: '#FDFBF9',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '2px',
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto relative" style={{ minHeight: '512px' }}>
        {/* Desktop Layout */}
        <div className="hidden lg:block relative w-full h-[512px]">
          {/* Left Content */}
          <div 
            className="absolute"
            style={{ left: '98px', top: '30px' }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                fontWeight: 700,
                fontSize: '24px',
                lineHeight: '100%',
                letterSpacing: '0.03em',
                color: '#000000',
              }}
            >
              Use Cases & Market Adoption
            </h2>

            <p
              style={{
                marginTop: '12px',
                fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '180%',
                letterSpacing: '0.03em',
                color: '#000000',
              }}
            >
              From Portfolio Allocation to Trade Settlement
            </p>
          </div>

          {/* Content Text */}
          <div
            className="absolute"
            style={{ 
              left: '98px', 
              top: '120px',
              width: '640px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '180%',
                letterSpacing: '0.03em',
                color: '#000000',
              }}
            >
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
          <div
            className="absolute"
            style={{
              right: 0,
              top: 0,
              width: '613px',
              height: '512px',
              background: '#4E4E4E',
            }}
          />
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="lg:hidden px-6 py-8">
          <h2
            style={{
              fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
              fontWeight: 700,
              fontSize: '22px',
              lineHeight: '100%',
              letterSpacing: '0.03em',
              color: '#000000',
            }}
          >
            Use Cases & Market Adoption
          </h2>

          <p
            style={{
              marginTop: '8px',
              fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '180%',
              letterSpacing: '0.03em',
              color: '#000000',
            }}
          >
            From Portfolio Allocation to Trade Settlement
          </p>

          <div
            className="mt-6"
            style={{
              fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '180%',
              letterSpacing: '0.03em',
              color: '#000000',
            }}
          >
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
          <div
            className="mt-6"
            style={{
              width: '100%',
              height: '200px',
              background: '#4E4E4E',
              borderRadius: '8px',
            }}
          />
        </div>
      </div>
    </section>
  );
}

