"use client";

export default function ParticipateSection() {
  return (
    <section
      id="participate"
      className="relative w-full overflow-hidden"
      style={{
        background: '#00674F',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '2px',
      }}
    >
      <div 
        className="w-full max-w-[1440px] mx-auto px-6 flex flex-col justify-center items-center"
        style={{ minHeight: '221px', padding: '40px 24px' }}
      >
        {/* Title */}
        <h2
          className="text-center"
          style={{
            fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(28px, 5vw, 40px)',
            lineHeight: '100%',
            letterSpacing: '0.03em',
            color: '#FFFFFF',
          }}
        >
          Participate in the Next Asset Standard
        </h2>

        {/* Subtitle */}
        <p
          className="text-center mt-4"
          style={{
            maxWidth: '754px',
            fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(18px, 3vw, 24px)',
            lineHeight: '100%',
            letterSpacing: '0.03em',
            color: '#FFFFFF',
          }}
        >
          EMRL.D is positioned at the intersection of real assets, institutional finance, and tokenized liquidity.
        </p>
      </div>
    </section>
  );
}

