import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "EMRL.D - Institutional-Grade Liquidity for Emeralds Through Tokenized Real-World Assets",
  description: "Participate in the Next Asset Standard with EMRL.D - Tokenized emerald with institutional liquidity and real-world asset backing.",
  keywords: ["emerald", "tokenized assets", "RWA", "blockchain", "liquidity", "gemstones"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
