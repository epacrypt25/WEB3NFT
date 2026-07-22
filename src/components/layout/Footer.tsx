"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1e2939] border-t border-white/10 text-white font-fredoka pt-16 pb-12 relative overflow-hidden">
      {/* Efek Glow Tipis di Footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-[#e60076]/10 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">

          {/* Kolom Brand & Deskripsi */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#e60076] animate-pulse"></span>
              Web3<span className="text-[#e60076]">NFT</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Marketplace terdesentralisasi terkemuka untuk menemukan, mengoleksi, dan memperdagangkan aset digital langka dengan sistem harga dinamis berbasis Web3.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#e60076] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all">
                🐦
              </a>
              <a href="https://discord.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#e60076] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all">
                💬
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#e60076] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all">
                🐙
              </a>
            </div>
          </div>

          {/* Kolom Navigasi: Marketplace */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase">Marketplace</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li>
                <Link href="/explore" className="hover:text-[#e60076] transition-colors">All NFTs</Link>
              </li>
              <li>
                <Link href="/explore" className="hover:text-[#e60076] transition-colors">Digital Art</Link>
              </li>
              <li>
                <Link href="/explore" className="hover:text-[#e60076] transition-colors">Gaming Assets</Link>
              </li>
              <li>
                <Link href="/explore" className="hover:text-[#e60076] transition-colors">Virtual Worlds</Link>
              </li>
            </ul>
          </div>

          {/* Kolom Navigasi: Akun & Sumber Daya */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase">Resources</h4>
            <ul className="flex flex-col gap-2 text-sm text-gray-400">
              <li>
                <Link href="/contact" className="hover:text-[#e60076] transition-colors">Help Center</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#e60076] transition-colors">Platform Status</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#e60076] transition-colors">Partners</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#e60076] transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Kolom Newsletter */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase">Stay in the Loop</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Dapatkan informasi terbaru seputar tetesan koleksi eksklusif dan tren harga NFT langsung di inbox Anda.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2.5">
              <input
                type="email"
                placeholder="Masukkan email Anda..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs focus:outline-none focus:border-[#e60076] transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-[#e60076] hover:bg-[#c90066] text-white font-medium py-2.5 rounded-xl text-xs shadow-lg shadow-[#e60076]/30 transition-all text-center"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bagian Bawah Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Web3NFT Marketplace. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}