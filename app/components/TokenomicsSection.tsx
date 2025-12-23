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
  { label: "Contract Address", value: "0xa5173f751e183e9aF8372A6E861b9FBbB4fa4d0A" },
];

export default function TokenomicsSection() {
  return (
    <section
      id="tokenomics"
      className="relative w-full overflow-hidden"
      style={{ background: '#FFFFFF' }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-0" style={{ minHeight: '600px' }}>
        {/* Title */}
        <h2
          className="text-center"
          style={{
            paddingTop: '90px',
            fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(28px, 5vw, 40px)',
            lineHeight: '100%',
            letterSpacing: '0.03em',
            color: '#000000',
          }}
        >
          TOKENOMICS
        </h2>

        {/* Token Logo */}
        <div className="flex justify-center" style={{ marginTop: '30px' }}>
          <Image
            src="/images/e-emerald.svg"
            alt="EMRL.D Token"
            width={140}
            height={140}
            className="w-28 h-28 md:w-36 md:h-36"
          />
        </div>

        {/* Token Stats Grid */}
        <div 
          className="flex flex-wrap justify-center gap-4 md:gap-6 mx-auto"
          style={{ marginTop: '40px', maxWidth: '900px' }}
        >
          {tokenStats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
              style={{
                width: '183px',
                height: '164px',
                background: '#004132',
                borderRadius: '20px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                  fontWeight: 700,
                  fontSize: '36px',
                  lineHeight: '100%',
                  letterSpacing: '0.03em',
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}
              >
                {stat.value}
              </span>
              <span
                style={{
                  marginTop: '12px',
                  fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0.03em',
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Token Details Table */}
        <div 
          className="mx-auto"
          style={{ 
            marginTop: '40px', 
            marginBottom: '60px',
            maxWidth: '603px',
            background: '#004132',
            borderRadius: '20px',
            padding: '24px 32px',
          }}
        >
          <h3
            className="text-center"
            style={{
              fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
              fontWeight: 700,
              fontSize: '20px',
              lineHeight: '100%',
              letterSpacing: '0.03em',
              color: '#FFFFFF',
              marginBottom: '20px',
            }}
          >
            Token Details
          </h3>

          <div className="flex flex-col">
            {tokenDetails.map((detail, index) => (
              <div 
                key={index}
                className="flex flex-col sm:flex-row justify-between items-center py-3"
                style={{
                  borderTop: index > 0 ? '0.5px solid #FFFFFF' : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0.03em',
                    color: '#FFFFFF',
                  }}
                >
                  {detail.label}
                </span>
                <span
                  className="mt-1 sm:mt-0 text-center sm:text-right"
                  style={{
                    fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                    fontWeight: 700,
                    fontSize: detail.label === "Contract Address" ? '14px' : '16px',
                    lineHeight: '100%',
                    letterSpacing: '0.03em',
                    color: '#FFFFFF',
                    wordBreak: 'break-all',
                  }}
                >
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

