export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-center mb-4">EMRLD</h1>
          <p className="text-xl text-center text-gray-400">
            Tokenized Emerald, Institutional Liquidity, Tokenized Real-World Assets
          </p>
        </div>
      </section>

      {/* Section 1 - Tokenomics */}
      <section id="section-1" className="min-h-screen bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Section 1</h2>
          {/* Content will be added here */}
        </div>
      </section>

      {/* Section 2 - Use Cases */}
      <section id="section-2" className="min-h-screen bg-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Section 2</h2>
          {/* Content will be added here */}
        </div>
      </section>

      {/* Section 3 - Participate */}
      <section id="section-3" className="min-h-screen bg-teal-900 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Section 3</h2>
          {/* Content will be added here */}
        </div>
      </section>
    </div>
  );
}
