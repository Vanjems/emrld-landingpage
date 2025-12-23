"use client";

import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#whitepaper", label: "Whitepaper" },
  { href: "#tokenomics", label: "Tokenomics" },
];

export default function Header() {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{ background: '#00674F' }}
    >
      {/* Desktop Header - Exact Figma specs */}
      <div 
        className="hidden lg:block relative w-full max-w-[1440px] mx-auto"
        style={{ height: '129px' }}
      >
        {/* Logo Group - Position: left: 48px, top: 36px */}
        <div 
          className="absolute flex items-center"
          style={{ 
            left: '48px', 
            top: '36px',
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))'
          }}
        >
          <Image
            src="/images/logo-emrld.svg"
            alt="ai.X - A Pecado Portal"
            width={233}
            height={48}
            className="h-12 w-auto"
            style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))' }}
            priority
          />
        </div>

        {/* Navigation Pill - W:773 H:72, positioned to the right */}
        <nav 
          className="absolute flex flex-col justify-center items-center"
          style={{
            width: '773px',
            height: '72px',
            left: 'calc(50% - 773px/2 + 316.5px)',
            top: '24px',
            background: 'rgba(76, 76, 76, 0.5)',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '100px',
            padding: '18px 0px 18px 15px',
          }}
        >
          <div 
            className="flex flex-row justify-center items-center"
            style={{ gap: '22px' }}
          >
            {/* Nav Links */}
            <div 
              className="flex flex-row items-start"
              style={{ gap: '20px' }}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:opacity-80 transition-opacity"
                  style={{
                    fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '100%',
                    letterSpacing: '0.03em',
                    color: '#FEFEFE',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Launch App Button */}
            <Link
              href="#launch"
              className="flex flex-col justify-center items-center hover:opacity-90 transition-opacity"
              style={{
                width: '151px',
                height: '45px',
                background: '#FFFFFF',
                backdropFilter: 'blur(5px)',
                borderRadius: '65px',
                padding: '12px 28px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                  fontWeight: 700,
                  fontSize: '16px',
                  lineHeight: '100%',
                  letterSpacing: '0.03em',
                  color: '#000000',
                }}
              >
                Launch App
              </span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile/Tablet Header */}
      <div className="lg:hidden flex items-center justify-between px-4 md:px-6 py-4">
        {/* Logo */}
        <div 
          className="flex items-center"
          style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}
        >
          <Image
            src="/images/logo-emrld.svg"
            alt="ai.X - A Pecado Portal"
            width={180}
            height={40}
            className="h-8 md:h-10 w-auto"
            priority
          />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-3">
          {/* Launch App Button - Mobile */}
          <Link
            href="#launch"
            className="hidden sm:flex flex-col justify-center items-center hover:opacity-90 transition-opacity"
            style={{
              height: '40px',
              background: '#FFFFFF',
              backdropFilter: 'blur(5px)',
              borderRadius: '65px',
              padding: '10px 20px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-quicksand), Quicksand, sans-serif',
                fontWeight: 700,
                fontSize: '14px',
                lineHeight: '100%',
                letterSpacing: '0.03em',
                color: '#000000',
              }}
            >
              Launch App
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button className="text-white p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
