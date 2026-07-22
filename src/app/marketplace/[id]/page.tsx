"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NFTDetailPage() {
    // State interaktif untuk simulasi pembelian
    const [isPurchased, setIsPurchased] = useState(false);

    // Data dummy detail satu NFT
    const nft = {
        title: "Cyber Cosmic #402",
        creator: "@crypto_artist",
        owner: "@web3_collector",
        price: "4.85 ETH",
        usdPrice: "approx. $12,125.00",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
        category: "Digital Art",
        supply: 1,
        totalMinted: 1,
        contractAddress: "0x71C...83a9",
        tokenStandard: "ERC-721",
        blockchain: "Ethereum",
        description: "Karya seni digital generasi masa depan yang merepresentasikan eksplorasi kosmik tanpa batas di jaringan Web3. Dibuat menggunakan teknik render 3D tingkat tinggi dengan sentuhan cyberpunk abstrak.",
    };

    const handleBuy = () => {
        setIsPurchased(true);
        alert(`Berhasil membeli ${nft.title} seharga ${nft.price}!`);
    };

    return (
        <div className="min-h-screen py-10 md:py-16 font-fredoka text-white">
            <Container>
                {/* Tombol Kembali ke Explore */}
                <div className="mb-8">
                    <Link
                        href="/explore"
                        className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-400 hover:text-[#e60076] transition-colors bg-white/5 border border-white/10 px-4 py-2 rounded-full"
                    >
                        &larr; Back to Marketplace
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* BAGIAN KIRI: Gambar NFT Utama */}
                    <div className="lg:col-span-6">
                        <div className="relative w-full h-[350px] sm:h-[450px] rounded-3xl overflow-hidden bg-neutral-800 border border-white/10 shadow-2xl group">
                            <Image
                                src={nft.image}
                                alt={nft.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs font-medium text-white shadow-md">
                                {nft.category}
                            </div>
                        </div>
                    </div>

                    {/* BAGIAN KANAN: Informasi Detail & Transaksi */}
                    <div className="lg:col-span-6 flex flex-col gap-6">

                        {/* Judul & Kreator */}
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs text-gray-400">Created by <span className="text-white font-medium">{nft.creator}</span></span>
                                <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                                    Supply: {nft.totalMinted} / {nft.supply} Minted
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">{nft.title}</h1>
                        </div>

                        {/* Deskripsi */}
                        <div className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md">
                            <h3 className="text-sm font-semibold text-gray-300 mb-1.5">Description</h3>
                            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                                {nft.description}
                            </p>
                        </div>

                        {/* Kotak Harga & Aksi Beli */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md shadow-xl flex flex-col gap-4">
                            <div>
                                <span className="text-xs text-gray-400 block mb-1">Current Price</span>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-2xl sm:text-3xl font-bold text-[#e60076]">{nft.price}</span>
                                    <span className="text-xs text-gray-400">{nft.usdPrice}</span>
                                </div>
                            </div>

                            <button
                                onClick={handleBuy}
                                disabled={isPurchased}
                                className={`w-full font-medium py-4 rounded-2xl text-sm sm:text-base transition-all shadow-lg ${isPurchased
                                        ? "bg-emerald-600 text-white cursor-not-allowed"
                                        : "bg-[#e60076] hover:bg-[#c90066] text-white shadow-[#e60076]/30 cursor-pointer"
                                    }`}
                            >
                                {isPurchased ? "Successfully Owned!" : "Buy Now"}
                            </button>
                        </div>

                        {/* Detail Teknis Blockchain (Atribut Tambahan) */}
                        <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl grid grid-cols-3 gap-2 text-center text-xs">
                            <div>
                                <span className="text-gray-400 block mb-0.5">Token Standard</span>
                                <span className="text-white font-medium">{nft.tokenStandard}</span>
                            </div>
                            <div>
                                <span className="text-gray-400 block mb-0.5">Blockchain</span>
                                <span className="text-white font-medium">{nft.blockchain}</span>
                            </div>
                            <div>
                                <span className="text-gray-400 block mb-0.5">Contract</span>
                                <span className="text-[#e60076] font-medium">{nft.contractAddress}</span>
                            </div>
                        </div>

                    </div>

                </div>
            </Container>
        </div>
    );
}