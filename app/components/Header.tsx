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
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#00674F]">
      {/* Desktop Header */}
      <div className="block relative w-full max-w-360 mx-auto h-[129px]">
        {/* Logo Group */}
        <div className="absolute left-12 top-9 flex items-center drop-shadow-md">
          <Image
            src="/images/logo-emrld.svg"
            alt="ai.X - A Pecado Portal"
            width={233}
            height={48}
            className="h-12 w-auto drop-shadow-lg"
            priority
          />
        </div>

        {/* Navigation Pill */}
        <nav className="absolute w-[773px] h-[72px] left-[calc(50%-773px/2+316.5px)] top-6 flex flex-col justify-center items-center bg-[#4C4C4C]/50 shadow-md rounded-full py-4 pl-4">
          <div className="flex flex-row justify-center items-center gap-20">
            {/* Nav Links */}
            <div className="flex flex-row items-start gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-semibold text-base leading-none tracking-[0.03em] text-[#FEFEFE] hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Launch App Button */}
            <Link
              href="#launch"
              className="flex flex-col justify-center items-center w-[151px] h-[45px] bg-white backdrop-blur-sm rounded-[65px] px-7 py-3 hover:opacity-90 transition-opacity font-quicksand"
            >
              <span className="font-bold text-base leading-none tracking-[0.03em] text-black">
                Launch App
              </span>
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile/Tablet Header */}
      <div className="hidden items-center justify-between px-4 py-4">
        {/* Logo */}
        <div className="flex items-center drop-shadow-md">
          <Image
            src="/images/logo-emrld.svg"
            alt="ai.X - A Pecado Portal"
            width={180}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-3">
          {/* Launch App Button - Mobile */}
          <Link
            href="#launch"
            className="hidden flex-col justify-center items-center h-10 bg-white backdrop-blur-sm rounded-[65px] px-5 py-2.5 hover:opacity-90 transition-opacity"
          >
            <span className="font-bold text-sm leading-none tracking-[0.03em] text-black">
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
