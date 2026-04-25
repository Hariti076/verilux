"use client";

import Link from 'next/link';

const products = [
    {
        id: "la-mer-creme",
        brand: "La Mer",
        name: "Crème de la Mer",
        category: "Moisturizer",
        size: "60ml / 2oz",
        price: "$380.00",
        description: "The moisturizer that started it all. Featuring Miracle Broth™.",
        status: "Sealed & Verified",
        image: "/la_mer.png"
    },
    {
        id: "estee-lauder-anr",
        brand: "Estée Lauder",
        name: "Advanced Night Repair",
        category: "Serum",
        size: "50ml / 1.7oz",
        price: "$115.00",
        description: "Synchronized Multi-Recovery Complex. Backed by Chronolux™ Power Signal Technology.",
        status: "Blockchain Logged",
        image: "/estee.png"
    },
    {
        id: "sk-ii-essence",
        brand: "SK-II",
        name: "Facial Treatment Essence",
        category: "Essence",
        size: "230ml / 7.7oz",
        price: "$235.00",
        description: "Essentially unchanged for over 40 years, featuring PITERA™.",
        status: "GS1 Synced",
        image: "/skii.png"
    }
];

export default function MarketplacePage() {
    return (
        <main className="min-h-screen bg-[#020202] text-white flex flex-col font-sans">
            <header className="w-full flex justify-between items-center px-6 md:px-10 py-6 border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-50 transition-all">
                <Link href="/" className="text-2xl font-serif tracking-widest text-[var(--gold)]">VERILUX</Link>
                <div className="flex gap-8">
                    <Link href="/verify" className="text-xs md:text-sm tracking-widest uppercase text-white/50 hover:text-[var(--gold)] transition-colors">Verify Product</Link>
                </div>
            </header>

            <div className="flex-grow max-w-7xl mx-auto w-full px-6 py-12 md:py-20">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 border-b border-white/10 pb-6 gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-serif mb-4">Curated Collection</h1>
                        <p className="text-white/60 text-sm md:text-base font-light max-w-lg">Explore authenticated luxury cosmetics, explicitly guaranteed by cryptographic holograms and blockchain registries.</p>
                    </div>
                    <p className="text-[var(--gold)] tracking-widest uppercase text-xs border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-4 py-2 rounded-sm flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"></span>
                        </span>
                        Network Active
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
                    {products.map((product) => (
                        <Link key={product.id} href={`/product/${product.id}`} className="group block bg-[#080808] border border-white/5 rounded-xl overflow-hidden hover:border-[var(--gold)]/40 transition-all duration-500 shadow-md hover:shadow-[0_15px_40px_rgba(212,175,55,0.1)] hover:-translate-y-2">
                            <div className="w-full aspect-[4/3] bg-gradient-to-br from-[#111] to-[#050505] flex items-center justify-center relative overflow-hidden">
                                <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 z-0" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>
                                {/* Hover Reveal Effect */}
                                <div className="absolute inset-0 bg-[#0a0a0a]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center backdrop-blur-[2px] z-20">
                                    <div className="w-16 h-16 border border-[var(--gold)] rounded-full flex items-center justify-center mb-4 text-[var(--gold)] group-hover:scale-110 transition-transform duration-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7Z" />
                                        </svg>
                                    </div>
                                    <span className="text-[var(--gold)] text-xs uppercase tracking-widest border-b border-[var(--gold)]/30 pb-1">Trace Ingredients</span>
                                </div>

                                <span className="text-white/80 group-hover:text-white/5 transition-colors duration-700 font-serif text-3xl uppercase tracking-widest z-10 px-6 text-center select-none translate-y-10 group-hover:translate-y-0 relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">{product.brand}</span>

                                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border border-[var(--gold)]/30 text-[var(--gold)] text-[9px] md:text-[10px] px-3 py-1.5 flex items-center gap-2 rounded-sm uppercase tracking-widest z-30 transition-transform duration-500 group-hover:translate-y-[-100%] opacity-100 group-hover:opacity-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse"></span>
                                    {product.status}
                                </div>
                            </div>
                            <div className="p-8 relative">
                                <p className="text-[var(--gold)] text-[10px] tracking-widest uppercase mb-4 flex items-center justify-between">
                                    {product.category}
                                    <span className="text-white/30">{product.size}</span>
                                </p>
                                <h3 className="text-2xl font-serif mb-3 text-white/90 group-hover:text-[var(--gold)] transition-colors">{product.name}</h3>
                                <p className="text-white/50 font-light text-sm mb-8 leading-relaxed line-clamp-2 min-h-[40px]">{product.description}</p>

                                <div className="flex justify-between items-center border-t border-white/10 pt-6">
                                    <p className="text-xl font-light text-white">{product.price}</p>
                                    <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all relative overflow-hidden">
                                        View Passport <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </main>
    );
}
