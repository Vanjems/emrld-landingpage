"use client";

import Image from "next/image";

export default function ParticipateSection() {
  return (
    <section
      id="participate"
      className="relative w-full overflow-hidden bg-[#00674F]"
    >
      <div className="w-full max-w-[1440px] mx-auto min-h-[1024px]">
        {/* Title */}
        <h2 className="pt-[41px] mx-auto w-[967px] text-center font-bold text-[40px] leading-[40px] tracking-[0.03em] text-white font-quicksand">
          Participate in the Next Asset Standard
        </h2>

        {/* Subtitle */}
        <p className="mt-6 mx-auto w-[754px] text-center font-normal text-[24px] leading-[24px] tracking-[0.03em] text-white font-quicksand">
          <span className="font-bold">EMRL.D</span> is positioned at the intersection of real assets,
          institutional finance, and tokenized liquidity.
        </p>

        {/* Group / Content */}
        <div className="mt-10 mx-auto w-[1201px] h-[801px] flex gap-12">
          {/* Left column */}
          <div className="w-[520px] flex flex-col">
            {/* Illustration */}
            <div className="w-[445px] h-[445px]">
              <Image
                src="/images/phone.svg"
                alt="Contact illustration"
                width={445}
                height={445}
                className="w-[445px] h-[445px]"
                priority
              />
            </div>

            {/* Follow us */}
            <div className="mt-12">
              <p className="font-bold text-[20px] leading-none tracking-[0.03em] text-white font-quicksand">
                Follow us
              </p>
              <div className="mt-4 flex items-center gap-5">
                {/* Facebook */}
                <a aria-label="Facebook" href="#" className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-white">
                    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1.3 10.3v6.2h-2.2v-6.2H9.6v-2h1.5V8.9c0-1.7 1-2.7 2.6-2.7.7 0 1.4.1 1.4.1v1.8h-.8c-.8 0-1 .5-1 1v1.2h1.8l-.3 2h-1.5Z" />
                  </svg>
                </a>
                {/* X */}
                <a aria-label="X" href="#" className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-white">
                    <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.3L6.3 22H3.2l7.3-8.4L1 2h6.3l4.4 5.7L18.9 2Zm-1.1 18h1.7L6.2 3.9H4.4L17.8 20Z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a aria-label="Instagram" href="#" className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-9 h-9">
                    <path
                      d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-white"
                    />
                    <path
                      d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-white"
                    />
                    <path
                      d="M17.5 6.5h.01"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="text-white"
                    />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a aria-label="LinkedIn" href="#" className="w-10 h-10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-white">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 8h4V23h-4V8ZM8.5 8h3.8v2.1h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.8 2.6 4.8 6V23h-4v-7c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V23h-4V8Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact us */}
            <div className="mt-12">
              <p className="font-bold text-[20px] leading-none tracking-[0.03em] text-white font-quicksand">
                Contact us
              </p>
              <div className="mt-4 flex flex-col gap-3 text-white font-quicksand">
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path
                      d="M4 4h16v16H4V4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-white"
                    />
                    <path
                      d="M4 7l8 6 8-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-white"
                    />
                  </svg>
                  <span className="text-[18px] leading-none tracking-[0.03em]">info@pecapital.org</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                    <path
                      d="M6.5 2h3l1.1 5-2 1.2c1.2 2.5 3.2 4.6 5.7 5.8l1.2-2 5 1.1v3c0 1.1-.9 2-2 2C9.6 21.1 2.9 14.4 2.9 6c0-1.1.9-2 2-2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-white"
                    />
                  </svg>
                  <span className="text-[18px] leading-none tracking-[0.03em]">+1 888 929 2825</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Form */}
          <div className="flex-1">
            <form className="w-full">
              {/* Name */}
              <label className="block font-bold text-[20px] leading-none tracking-[0.03em] text-white font-quicksand mb-3">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="What is your name?"
                className="w-full h-[64px] rounded-[16px] bg-white/10 px-8 text-[18px] tracking-[0.03em] text-white placeholder:text-white/40 font-quicksand outline-none"
              />

              {/* Email */}
              <label className="mt-10 block font-bold text-[20px] leading-none tracking-[0.03em] text-white font-quicksand mb-3">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Please enter your email"
                className="w-full h-[64px] rounded-[16px] bg-white/10 px-8 text-[18px] tracking-[0.03em] text-white placeholder:text-white/40 font-quicksand outline-none"
              />

              {/* Message */}
              <label className="mt-10 block font-bold text-[20px] leading-none tracking-[0.03em] text-white font-quicksand mb-3 opacity-30">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Type your message here ..."
                className="w-full h-[320px] rounded-[16px] bg-white/10 px-8 py-6 text-[18px] tracking-[0.03em] text-white placeholder:text-white/40 font-quicksand outline-none resize-none opacity-60"
              />

              {/* Submit */}
              <button
                type="button"
                className="mt-10 inline-flex items-center justify-center h-[60px] px-14 rounded-full bg-white text-black font-bold text-[18px] tracking-[0.03em] font-quicksand"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
