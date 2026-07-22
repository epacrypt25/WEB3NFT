"use client";

import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SITE_NAME } from "@/constants/site";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="text-white border-neutral-700 relative z-50">
      <Container className="flex h-16 items-center justify-between w-full">

        {/* KIRI: Logo */}
        <div className="flex shrink-0">
          <div className="flex shrink-0">
            <Link href="/" className="flex items-center text-xl font-bold font-fredoka text-white">
              <span className="font-kaushan text-[#e60076] text-2xl mr-0.5">W</span>
              {SITE_NAME}
            </Link>
          </div>
        </div>

        {/* TENGAH: Menu Desktop (Hilang di Mobile) */}
        <nav className="hidden md:flex items-center gap-8 font-fredoka">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* KANAN: Connect Wallet (Desktop) & Tombol Hamburger (Mobile) */}
        <div className="flex shrink-0 items-center gap-4">

          {/* Tombol Desktop */}
          <button className="hidden md:block font-fredoka bg-yellow-600 hover:bg-yellow-700 text-black text-sm font-medium px-4 py-1 shadow-2xl rounded-full transition-colors">
            Connect Wallet
          </button>

          {/* Tombol Mobile (Muncul khusus di layar kecil) */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-md border border-gray-600 text-gray-200 hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>

        </div>
      </Container>

      {/* TAMPILAN MENU MOBILE (Hanya muncul jika tombol hamburger diklik) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-[#1e2939] border-b border-neutral-700 shadow-xl font-fredoka">
          <div className="flex flex-col px-6 py-6 gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg text-gray-200 font-medium hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-yellow-600 hover:bg-yellow-700 text-black font-medium rounded-sm transition-colors 
  text-xs px-5 py-2     
">
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </header>
  );
}