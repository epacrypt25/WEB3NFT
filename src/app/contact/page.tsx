"use client";

import { Container } from "@/components/ui/Container";

export default function ContactPage() {
    return (
        <div className="min-h-screen py-12 md:py-20">
            <Container>
                {/* Header Contact */}
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <span className="text-[#e60076] font-fredoka text-sm uppercase tracking-wider font-semibold">Get in Touch</span>
                    <h1 className="text-3xl sm:text-4xl font-bold font-fredoka text-white mt-1">Contact Our Support Team</h1>
                    <p className="text-gray-400 font-fredoka text-sm sm:text-base mt-2">
                        Punya pertanyaan seputar NFT, kendala wallet, atau ingin berkolaborasi dengan platform kami? Kirimkan pesan Anda di bawah ini.
                    </p>
                </div>

                {/* Konten Utama */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">

                    {/* Info Kontak & Sosial Media (Kiri) */}
                    <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-xl font-fredoka flex flex-col gap-6">
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-2">Informasi Kontak</h3>
                            <p className="text-gray-400 text-sm">Tim kami siap membantu Anda 24/7 untuk segala kebutuhan transaksi Web3 Anda.</p>
                        </div>

                        <div className="flex flex-col gap-4 text-sm">
                            <div className="flex items-center gap-3.5 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-[#e60076]/20 flex items-center justify-center text-[#e60076] shrink-0">
                                    📧
                                </div>
                                <div>
                                    <span className="text-xs text-gray-400 block">Email Dukungan</span>
                                    <span className="text-white font-medium">support@web3nft.io</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3.5 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-[#e60076]/20 flex items-center justify-center text-[#e60076] shrink-0">
                                    💬
                                </div>
                                <div>
                                    <span className="text-xs text-gray-400 block">Discord Community</span>
                                    <span className="text-white font-medium">discord.gg/web3nft</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3.5 text-gray-300">
                                <div className="w-10 h-10 rounded-full bg-[#e60076]/20 flex items-center justify-center text-[#e60076] shrink-0">
                                    🐦
                                </div>
                                <div>
                                    <span className="text-xs text-gray-400 block">Twitter / X</span>
                                    <span className="text-white font-medium">@web3nft_official</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/10">
                            <span className="text-xs text-gray-400 block mb-2">Kantor Pusat</span>
                            <p className="text-sm text-gray-300">Crypto Valley, Lantai 8, Jakarta Selatan, Indonesia</p>
                        </div>
                    </div>

                    {/* Form Kirim Pesan (Kanan) */}
                    <div className="lg:col-span-7 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-xl shadow-2xl font-fredoka">
                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1.5">Nama Lengkap</label>
                                <input
                                    type="text"
                                    placeholder="Masukkan nama Anda..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e60076] transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1.5">Alamat Email</label>
                                <input
                                    type="email"
                                    placeholder="nama@email.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e60076] transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1.5">Pesan</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tuliskan pesan atau kendala Anda di sini..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e60076] transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#e60076] hover:bg-[#c90066] text-white font-medium py-3.5 rounded-xl text-sm shadow-lg shadow-[#e60076]/30 transition-all mt-2"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>

                </div>
            </Container>
        </div>
    );
}