import { Container } from "@/components/ui/Container";
import Image from "next/image";

export default function ExplorePage() {
    // Data dummy NFT untuk halaman marketplace / explore
    const NFT_ITEMS = [
        {
            id: 1,
            title: "Cyber Cosmic #402",
            creator: "@crypto_artist",
            price: "4.85 ETH",
            image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
            category: "Digital Art",
        },
        {
            id: 2,
            title: "Neon Abstract #12",
            creator: "@pixel_master",
            price: "2.15 ETH",
            image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
            category: "Digital Art",
        },
        {
            id: 3,
            title: "Metaverse Walker",
            creator: "@meta_art",
            price: "3.40 ETH",
            image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
            category: "Gaming",
        },
        {
            id: 4,
            title: "Cyberpunk Genesis",
            creator: "@cyber_vibe",
            price: "1.90 ETH",
            image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=800&auto=format&fit=crop",
            category: "Virtual Worlds",
        },
        {
            id: 5,
            title: "Ethereal Dreamscape",
            creator: "@dreamer",
            price: "5.10 ETH",
            image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=800&auto=format&fit=crop",
            category: "Digital Art",
        },
        {
            id: 6,
            title: "Sonic Waveform #09",
            creator: "@sound_wave",
            price: "1.20 ETH",
            image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
            category: "Music",
        },
    ];

    return (
        <div className="min-h-screen py-10 md:py-16">
            <Container>
                {/* Header Marketplace */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <span className="text-[#e60076] font-fredoka text-sm uppercase tracking-wider font-semibold">Web3 Marketplace</span>
                        <h1 className="text-3xl sm:text-4xl font-bold font-fredoka text-white mt-1">Explore All NFTs</h1>
                        <p className="text-gray-400 font-fredoka text-sm mt-1.5">Temukan, beli, dan kumpulkan aset digital eksklusif dari kreator terbaik.</p>
                    </div>

                    {/* Filter Kategori Singkat */}
                    <div className="flex flex-wrap gap-2 font-fredoka">
                        <button className="px-4 py-2 rounded-full bg-[#e60076] text-white text-xs font-medium shadow-md shadow-[#e60076]/30 transition-all">
                            All Items
                        </button>
                        <button className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-xs font-medium transition-all">
                            Digital Art
                        </button>
                        <button className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-xs font-medium transition-all">
                            Gaming
                        </button>
                        <button className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 text-xs font-medium transition-all">
                            Music
                        </button>
                    </div>
                </div>

                {/* Grid Kartu Marketplace */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {NFT_ITEMS.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white/5 border border-white/10 p-4 rounded-3xl backdrop-blur-xl shadow-2xl group hover:border-[#e60076]/50 transition-all flex flex-col justify-between"
                        >
                            <div>
                                {/* Gambar NFT */}
                                <div className="relative w-full h-72 rounded-2xl overflow-hidden bg-neutral-800">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Badge Kategori */}
                                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-fredoka text-white shadow-md">
                                        {item.category}
                                    </div>
                                </div>

                                {/* Informasi Detail NFT */}
                                <div className="mt-4 flex items-center justify-between font-fredoka">
                                    <div>
                                        <h3 className="text-white font-semibold text-base sm:text-lg">{item.title}</h3>
                                        <p className="text-xs text-gray-400 mt-0.5">By {item.creator}</p>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[11px] text-gray-400 block">Price</span>
                                        <span className="text-[#e60076] font-bold text-sm sm:text-base">{item.price}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Tombol Aksi */}
                            <button className="w-full mt-4 bg-white/10 hover:bg-[#e60076] text-white font-medium py-3 rounded-xl text-xs sm:text-sm font-fredoka transition-colors">
                                Buy / Place Bid
                            </button>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}