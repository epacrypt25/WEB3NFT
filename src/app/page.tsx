import { Container } from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden py-10 md:py-24">
        {/* Efek Cahaya / Glow Background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] md:w-[600px] md:h-[600px] bg-[#e60076]/20 blur-[100px] md:blur-[140px] rounded-full pointer-events-none" />

        <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* BAGIAN KIRI: Teks Utama & Tombol */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-5">

            {/* Badge Kecil */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-fredoka text-gray-300 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#e60076] animate-pulse"></span>
              Explore & Trade Next-Gen Digital Art
            </div>

            {/* Judul & Deskripsi */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-fredoka leading-[1.15] tracking-tight">
                Discover, Collect, and Sell <br className="hidden sm:block" />
                Extraordinary <span className="font-kaushan text-[#e60076]">NFT</span> Assets
              </h1>
              <p className="mt-3.5 text-gray-400 font-fredoka text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                Marketplace terdesentralisasi terkemuka untuk karya seni digital langka, aset game, dan koleksi eksklusif berbasis Web3.
              </p>
            </div>

            {/* Tombol Aksi (Desktop) */}
            <div className="hidden lg:flex flex-row items-center gap-3 w-full sm:w-auto justify-start">
              <Link
                href="/explore"
                className="font-fredoka bg-[#e60076] hover:bg-[#c90066] text-white font-medium px-10 py-4 rounded-full shadow-lg shadow-[#e60076]/30 transition-all text-center text-base"
              >
                Explore Now
              </Link>
              <Link
                href="/create"
                className="font-fredoka bg-white/10 hover:bg-white/15 text-white border border-white/10 font-medium px-10 py-4 rounded-full transition-all text-center text-base"
              >
                Create NFT
              </Link>
            </div>

          </div>

          {/* BAGIAN TENGAH/KANAN: Kartu Preview NFT */}
          <div className="lg:col-span-5 flex justify-center w-full my-2 lg:my-0">
            <div className="relative w-full max-w-[280px] sm:max-w-sm bg-white/5 border border-white/10 p-3 sm:p-4 rounded-3xl backdrop-blur-xl shadow-2xl group hover:border-[#e60076]/50 transition-all">

              {/* Gambar NFT */}
              <div className="relative w-full h-56 sm:h-80 rounded-2xl overflow-hidden bg-neutral-800">
                <Image
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
                  alt="Featured NFT Art"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge Live Auction */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-fredoka text-white flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Live Auction
                </div>
              </div>

              {/* Informasi Detail NFT */}
              <div className="mt-3.5 flex items-center justify-between font-fredoka">
                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-lg">Cyber Cosmic #402</h3>
                  <p className="text-[11px] sm:text-xs text-gray-400">By @crypto_artist</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] sm:text-[11px] text-gray-400 block">Current Bid</span>
                  <span className="text-[#e60076] font-bold text-sm sm:text-base">4.85 ETH</span>
                </div>
              </div>

              <button className="w-full mt-3.5 bg-white/10 hover:bg-[#e60076] text-white font-medium py-2.5 rounded-xl text-xs sm:text-sm font-fredoka transition-colors">
                Place Bid
              </button>

            </div>
          </div>

          {/* Tombol Aksi (Mobile) */}
          <div className="lg:hidden flex flex-row items-center gap-3 w-full justify-center">
            <Link
              href="/explore"
              className="flex-1 font-fredoka bg-[#e60076] hover:bg-[#c90066] text-white font-medium py-3 rounded-full shadow-lg shadow-[#e60076]/30 transition-all text-center text-xs"
            >
              Explore Now
            </Link>
            <Link
              href="/create"
              className="flex-1 font-fredoka bg-white/10 hover:bg-white/15 text-white border border-white/10 font-medium py-3 rounded-full transition-all text-center text-xs"
            >
              Create NFT
            </Link>
          </div>

          {/* Statistik Market Info */}
          <div className="lg:col-span-12 flex flex-col items-center gap-6 w-full">
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-white/10 w-full max-w-lg font-fredoka text-center">
              <div className="bg-white/[0.02] sm:bg-transparent p-2.5 sm:p-0 rounded-2xl border border-white/5 sm:border-0">
                <h3 className="text-lg sm:text-2xl font-bold text-white">45K+</h3>
                <p className="text-[10px] sm:text-sm text-gray-400 mt-0.5">Artwork</p>
              </div>
              <div className="bg-white/[0.02] sm:bg-transparent p-2.5 sm:p-0 rounded-2xl border border-white/5 sm:border-0">
                <h3 className="text-lg sm:text-2xl font-bold text-white">18K+</h3>
                <p className="text-[10px] sm:text-sm text-gray-400 mt-0.5">Creators</p>
              </div>
              <div className="bg-white/[0.02] sm:bg-transparent p-2.5 sm:p-0 rounded-2xl border border-white/5 sm:border-0">
                <h3 className="text-lg sm:text-2xl font-bold text-white">2.5K</h3>
                <p className="text-[10px] sm:text-sm text-gray-400 mt-0.5">ETH Volume</p>
              </div>
            </div>
          </div>

        </Container>
      </section>

      {/* 2. SECTION: LIVE TRENDING AUCTIONS */}
      <section className="py-12 border-white/10">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <span className="text-[#e60076] font-fredoka text-sm uppercase tracking-wider font-semibold">Hot Items</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-fredoka text-white mt-1">Live Trending Auctions</h2>
            </div>
            <Link href="/explore" className="text-sm font-fredoka text-gray-300 hover:text-[#e60076] transition-colors">
              View All Auctions &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md group hover:border-[#e60076]/40 transition-all">
              <div className="relative w-full h-64 rounded-xl overflow-hidden bg-neutral-800">
                <Image src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop" alt="NFT 1" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="mt-4 flex justify-between items-center font-fredoka">
                <div>
                  <h3 className="text-white font-medium text-base">Neon Abstract #12</h3>
                  <p className="text-xs text-gray-400">@pixel_master</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-400 block">Highest Bid</span>
                  <span className="text-[#e60076] font-semibold">2.15 ETH</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md group hover:border-[#e60076]/40 transition-all">
              <div className="relative w-full h-64 rounded-xl overflow-hidden bg-neutral-800">
                <Image src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop" alt="NFT 2" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="mt-4 flex justify-between items-center font-fredoka">
                <div>
                  <h3 className="text-white font-medium text-base">Metaverse Walker</h3>
                  <p className="text-xs text-gray-400">@meta_art</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-400 block">Highest Bid</span>
                  <span className="text-[#e60076] font-semibold">3.40 ETH</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md group hover:border-[#e60076]/40 transition-all">
              <div className="relative w-full h-64 rounded-xl overflow-hidden bg-neutral-800">
                <Image src="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=800&auto=format&fit=crop" alt="NFT 3" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="mt-4 flex justify-between items-center font-fredoka">
                <div>
                  <h3 className="text-white font-medium text-base">Cyberpunk Genesis</h3>
                  <p className="text-xs text-gray-400">@cyber_vibe</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-400 block">Highest Bid</span>
                  <span className="text-[#e60076] font-semibold">1.90 ETH</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. SECTION: TOP CATEGORIES / COLLECTIONS */}
      <section className="py-12 border-white/10">
        <Container>
          <div className="text-center mb-10">
            <span className="text-[#e60076] font-fredoka text-sm uppercase tracking-wider font-semibold">Discover More</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-fredoka text-white mt-1">Browse By Categories</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-fredoka">
            <div className="bg-white/5 hover:bg-white/10 border border-white/10 p-5 rounded-2xl text-center transition-all cursor-pointer group">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#e60076]/20 flex items-center justify-center text-[#e60076] font-bold text-lg group-hover:scale-110 transition-transform">🎨</div>
              <h3 className="text-white font-semibold text-base">Digital Art</h3>
              <p className="text-xs text-gray-400 mt-1">12.4K Items</p>
            </div>

            <div className="bg-white/5 hover:bg-white/10 border border-white/10 p-5 rounded-2xl text-center transition-all cursor-pointer group">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#e60076]/20 flex items-center justify-center text-[#e60076] font-bold text-lg group-hover:scale-110 transition-transform">🎮</div>
              <h3 className="text-white font-semibold text-base">Gaming Assets</h3>
              <p className="text-xs text-gray-400 mt-1">8.1K Items</p>
            </div>

            <div className="bg-white/5 hover:bg-white/10 border border-white/10 p-5 rounded-2xl text-center transition-all cursor-pointer group">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#e60076]/20 flex items-center justify-center text-[#e60076] font-bold text-lg group-hover:scale-110 transition-transform">🤖</div>
              <h3 className="text-white font-semibold text-base">Virtual Worlds</h3>
              <p className="text-xs text-gray-400 mt-1">5.3K Items</p>
            </div>

            <div className="bg-white/5 hover:bg-white/10 border border-white/10 p-5 rounded-2xl text-center transition-all cursor-pointer group">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#e60076]/20 flex items-center justify-center text-[#e60076] font-bold text-lg group-hover:scale-110 transition-transform">🎵</div>
              <h3 className="text-white font-semibold text-base">Music & Audio</h3>
              <p className="text-xs text-gray-400 mt-1">3.9K Items</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}