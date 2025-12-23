"use client";

export default function GovernanceSection() {
  return (
    <section
      id="governance"
      className="relative w-full overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      <div className="w-full max-w-[1440px] mx-auto relative" style={{ minHeight: '512px' }}>
        {/* Desktop Layout */}
        <div className="hidden lg:block relative w-full h-[512px]">
          {/* Left Dark Rectangle */}
          <div
            className="absolute"
            style={{
              left: 0,
              top: 0,
              width: '590px',
              height: '512px',
              background: '#4E4E4E',
            }}
          />

          {/* Right Content */}
          <div 
            className="absolute"
            style={{ left: '618px', top: '28px', width: '761px' }}
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
              Governance, Compliance & Long-Term Vision
            </h2>

            <p
              style={{
                marginTop: '16px',
                fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '180%',
                letterSpacing: '0.03em',
                color: '#000000',
              }}
            >
              Building the Emerald Standard
            </p>

            <div
              style={{
                marginTop: '20px',
                fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '180%',
                letterSpacing: '0.03em',
                color: '#000000',
              }}
            >
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
        <div className="lg:hidden px-6 py-8">
          {/* Mobile placeholder */}
          <div
            className="mb-6"
            style={{
              width: '100%',
              height: '200px',
              background: '#4E4E4E',
              borderRadius: '8px',
            }}
          />

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
            Governance, Compliance & Long-Term Vision
          </h2>

          <p
            style={{
              marginTop: '12px',
              fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
              fontWeight: 700,
              fontSize: '18px',
              lineHeight: '180%',
              letterSpacing: '0.03em',
              color: '#000000',
            }}
          >
            Building the Emerald Standard
          </p>

          <div
            className="mt-4"
            style={{
              fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
              fontWeight: 700,
              fontSize: '16px',
              lineHeight: '180%',
              letterSpacing: '0.03em',
              color: '#000000',
            }}
          >
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





