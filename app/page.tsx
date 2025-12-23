import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Section1Cards from "./components/Section1Cards";
import TokenomicsSection from "./components/TokenomicsSection";
import UseCasesSection from "./components/UseCasesSection";
import GovernanceSection from "./components/GovernanceSection";
import ParticipateSection from "./components/ParticipateSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero - EMRL.D main section */}
      <HeroSection />
      
      {/* Desktop - 17: About section with Tokenized Emeralds headline */}
      <AboutSection />
      
      {/* Section 1: Three cards - Market Problem, Solution, Returns */}
      <Section1Cards />
      
      {/* Desktop - 18: Tokenomics */}
      <TokenomicsSection />
      
      {/* Section 2: Use Cases & Market Adoption */}
      <UseCasesSection />
      
      {/* Desktop - 19: Governance, Compliance & Long-Term Vision */}
      <GovernanceSection />
      
      {/* Section 3: Participate CTA */}
      <ParticipateSection />
    </div>
  );
}
