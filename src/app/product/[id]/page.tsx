"use client";

import { useState, use } from 'react';
import Link from 'next/link';

// Mock DB of actual legendary cosmetics
const db: Record<string, any> = {
    "la-mer-creme": {
        brand: "La Mer",
        name: "Crème de la Mer",
        price: "$380.00",
        description: "The moisturizer that started it all. Featuring the legendary Miracle Broth™, this ultra-rich cream heals dryness and powerfully restores radiance.",
        batch: "LM-0925-NX",
        origin: "Max Huber Research Labs, NY",
        mfrDate: "August 12, 2025",
        image: "/la_mer.png",
        ingredients: ["Algae Extract", "Mineral Oil", "Petrolatum", "Glycerin", "Isohexadecane", "Microcrystalline Wax", "Lanolin Alcohol", "Citrus Aurantifolia (Lime) Extract"],
        transit: [
            { step: "Manufactured & Formulated", location: "New York, USA", time: "Aug 12, 2025 - 08:45 AM", status: "Verified" },
            { step: "Holo-Sealed & Authenticated", location: "New York, USA", time: "Aug 14, 2025 - 14:20 PM", status: "Verified" },
            { step: "Blockchain Registration", location: "Ethereum L2 Node", time: "Aug 14, 2025 - 14:22 PM", status: "Verified" },
            { step: "Retail Distribution Hub", location: "Global Dist, CA", time: "Aug 22, 2025 - 11:00 AM", status: "Pending" }
        ]
    },
    "estee-lauder-anr": {
        brand: "Estée Lauder",
        name: "Advanced Night Repair",
        price: "$115.00",
        description: "Synchronized Multi-Recovery Complex. Backed by Chronolux™ Power Signal Technology to reduce multiple signs of aging while you sleep.",
        batch: "EL-ANR-772A",
        origin: "Estée Lauder Facility, Melville, NY",
        mfrDate: "September 05, 2025",
        image: "/estee.png",
        ingredients: ["Water\\Aqua\\Eau", "Bifida Ferment Lysate", "Peg-8", "Propanediol", "Bis-Peg-18 Methyl Ether Dimethyl Silane", "Methyl Gluceth-20", "Glycereth-26", "Peg-75", "Butylene Glycol"],
        transit: [
            { step: "Compounding & Synthesis", location: "Melville, NY", time: "Sep 05, 2025 - 06:30 AM", status: "Verified" },
            { step: "Bottling & NFC Tagging", location: "Melville, NY", time: "Sep 06, 2025 - 16:20 PM", status: "Verified" },
            { step: "Dispatched to Retail", location: "Nordstrom Dist.", time: "Sep 10, 2025 - 10:15 AM", status: "Verified" }
        ]
    },
    "sk-ii-essence": {
        brand: "SK-II",
        name: "Facial Treatment Essence",
        price: "$235.00",
        description: "Essentially unchanged for over 40 years, Facial Treatment Essence is SK-II’s signature best-seller with more than 90% PITERA™.",
        batch: "SK2-JP-8819",
        origin: "Shiga Plant, Japan",
        mfrDate: "July 22, 2025",
        image: "/skii.png",
        ingredients: ["Galactomyces Ferment Filtrate (PITERA™)", "Butylene Glycol", "Pentylene Glycol", "Water", "Sodium Benzoate", "Methylparaben", "Sorbic Acid"],
        transit: [
            { step: "Fermentation Complete", location: "Shiga, Japan", time: "Jul 10, 2025 - 12:00 PM", status: "Verified" },
            { step: "Bottling & Sealing", location: "Shiga, Japan", time: "Jul 22, 2025 - 08:30 AM", status: "Verified" },
            { step: "Customs Security Scan", location: "Tokyo Narita", time: "Jul 25, 2025 - 18:45 PM", status: "Verified" },
            { step: "Global Dist Hub", location: "Los Angeles, CA", time: "Jul 28, 2025 - 09:20 AM", status: "Verified" }
        ]
    }
};

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const data = db[resolvedParams.id] || db["la-mer-creme"]; // Safe fallback
    const [activeTab, setActiveTab] = useState<"passport" | "ingredients" | "transit">("passport");

    return (
        <main className="min-h-screen bg-[#020202] text-white flex flex-col font-sans selection:bg-[var(--gold)] selection:text-black">
            <header className="w-full flex justify-between items-center px-6 md:px-10 py-6 border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-50 transition-all">
                <Link href="/" className="text-2xl font-serif tracking-widest text-[var(--gold)]">VERILUX</Link>
                <Link href="/marketplace" className="text-xs md:text-sm tracking-widest uppercase text-white/50 hover:text-[var(--gold)] transition-colors">← Back to Marketplace</Link>
            </header>

            <div className="flex-grow flex flex-col lg:flex-row max-w-7xl mx-auto w-full px-6 py-12 gap-12 lg:gap-20">

                {/* Left Side: Product Image & Interactive Holographic Seal */}
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center relative perspective-[1000px]">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[var(--gold)] rounded-full blur-[140px] opacity-10"></div>

                    <div className="w-full max-w-md aspect-square bg-[#0a0a0a]/90 backdrop-blur-3xl border border-white/10 rounded-2xl flex flex-col items-center justify-center relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 overflow-hidden group hover:border-[var(--gold)]/50 transition-all duration-700">
                        <img src={data.image} alt={data.name} className="w-full h-full object-cover absolute inset-0 z-0 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 mix-blend-lighten" />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-0"></div>

                        <span className="text-white/90 font-serif text-3xl md:text-4xl uppercase tracking-widest text-center px-4 group-hover:text-white transition-colors duration-700 z-10 drop-shadow-xl translate-y-16 group-hover:translate-y-8">{data.brand}</span>
                        <span className="mt-4 text-[var(--gold)] font-medium text-sm italic opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 text-center px-8 z-10 translate-y-12 group-hover:translate-y-8">{data.name}</span>

                        {/* The Verification Badge (Holo-Seal) */}
                        <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-gradient-to-r from-black/80 to-[#111] border border-[#d4af37]/50 px-5 py-2.5 rounded-lg backdrop-blur-xl shadow-[0_0_20px_rgba(212,175,55,0.2)] cursor-pointer hover:scale-105 transition-transform duration-500">
                            <span className="relative flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-br from-[#d4af37] to-[#aa8529] shadow-[0_0_15px_rgba(212,175,55,1)]"></span>
                            </span>
                            <span className="text-[var(--gold)] text-[10px] md:text-xs uppercase tracking-widest font-bold">GS1 Tag Scanned</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: Product Information */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h1 className="text-5xl md:text-6xl font-serif mb-4 leading-tight text-white">{data.brand}</h1>
                    <h2 className="text-2xl md:text-3xl font-light italic text-white/70 mb-6">{data.name}</h2>
                    <p className="text-3xl md:text-4xl text-[var(--gold)] mb-8 font-light tracking-wide">{data.price}</p>

                    <p className="text-white/60 font-light leading-relaxed mb-10 w-full text-base md:text-lg">
                        {data.description}
                    </p>

                    <div className="flex border-b border-white/10 mb-8 w-full gap-6 md:gap-10 overflow-x-auto no-scrollbar">
                        <button
                            onClick={() => setActiveTab("passport")}
                            className={`pb-4 text-[10px] md:text-xs tracking-widest uppercase transition-all duration-300 relative whitespace-nowrap ${activeTab === "passport" ? "text-[var(--gold)]" : "text-white/50 hover:text-white/80"}`}
                        >
                            Digital Passport
                            {activeTab === "passport" && <span className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-[var(--gold)] shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>}
                        </button>
                        <button
                            onClick={() => setActiveTab("ingredients")}
                            className={`pb-4 text-[10px] md:text-xs tracking-widest uppercase transition-all duration-300 relative whitespace-nowrap ${activeTab === "ingredients" ? "text-[var(--gold)]" : "text-white/50 hover:text-white/80"}`}
                        >
                            Chemical Trace
                            {activeTab === "ingredients" && <span className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-[var(--gold)] shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>}
                        </button>
                        <button
                            onClick={() => setActiveTab("transit")}
                            className={`pb-4 text-[10px] md:text-xs tracking-widest uppercase transition-all duration-300 relative whitespace-nowrap ${activeTab === "transit" ? "text-[var(--gold)]" : "text-white/50 hover:text-white/80"}`}
                        >
                            Supply Chain Map
                            {activeTab === "transit" && <span className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-[var(--gold)] shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>}
                        </button>
                    </div>

                    <div className="w-full min-h-[250px]">
                        {activeTab === "passport" && (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-xs uppercase tracking-widest text-white/50 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[var(--gold)]"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Z" /></svg>
                                        Batch Signature
                                    </span>
                                    <span className="text-xs font-mono bg-white/10 px-3 py-1 rounded-sm text-white/90 shadow-inner border border-white/5">{data.batch}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-xs uppercase tracking-widest text-white/50">Origin Facility</span>
                                    <span className="text-sm font-light text-white/90">{data.origin}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-xs uppercase tracking-widest text-white/50">Mfr Date</span>
                                    <span className="text-sm font-light text-white/90">{data.mfrDate}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                                    <span className="text-xs uppercase tracking-widest text-white/50">Smart Contract Ledger</span>
                                    <Link href="#" className="text-xs font-mono text-[var(--gold)] hover:text-white transition-colors">0x8B3...9F0A ↗</Link>
                                </div>
                            </div>
                        )}

                        {activeTab === "ingredients" && (
                            <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                                <p className="text-sm text-white/60 mb-6 leading-relaxed font-light">VeriLux ensures that the chemical composition matches the authenticated brand formula via strictly monitored supply chain tracking of raw materials. No counterfeits.</p>
                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    {data.ingredients.map((ing: string, i: number) => (
                                        <span key={i} className="px-4 py-2 text-xs border border-white/10 rounded-full font-light hover:border-[var(--gold)]/60 hover:bg-[var(--gold)]/10 hover:text-[var(--gold)] transition-all cursor-default">
                                            {ing}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {activeTab === "transit" && (
                            <div className="animate-in fade-in slide-in-from-right-8 duration-500 space-y-6 md:space-y-8 border-l-2 border-white/10 ml-3 pl-8 relative">
                                {data.transit.map((tr: any, i: number) => (
                                    <div key={i} className="relative group">
                                        <span className={`absolute -left-[41px] top-1.5 h-4 w-4 rounded-full transition-all duration-300 ${tr.status === 'Verified' ? 'bg-[var(--gold)] shadow-[0_0_15px_rgba(212,175,55,0.8)] border border-black group-hover:scale-125' : 'border-2 border-white/30 bg-black'}`}></span>
                                        <h4 className="text-white text-base font-serif mb-1 group-hover:text-[var(--gold)] transition-colors">{tr.step}</h4>
                                        <p className="text-sm text-white/60 font-light">{tr.location}</p>
                                        <p className="text-[10px] text-[var(--gold)]/70 font-mono tracking-widest mt-1.5">{tr.time}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <button className="w-full md:w-2/3 mt-8 py-5 md:py-6 bg-white text-black font-semibold text-sm uppercase tracking-[0.2em] rounded-sm hover:bg-[var(--gold)] hover:text-white transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_40px_rgba(212,175,55,0.3)] hover:-translate-y-1">
                        Buy Authenticated
                    </button>
                </div>
            </div>
        </main>
    );
}
