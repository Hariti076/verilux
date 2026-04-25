"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function VerifyPage() {
    const [code, setCode] = useState("");
    const [status, setStatus] = useState<"idle" | "scanning" | "success">("idle");
    const [logs, setLogs] = useState<string[]>([]);

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        if (!code) return;
        setStatus("scanning");
        setLogs([]);
    };

    useEffect(() => {
        if (status === "scanning") {
            const sequence = [
                "Initiating secure handshake...",
                "Connecting to Aura Blockchain Consortium nodes...",
                "Validating GS1 EPCIS Global Registry...",
                "Querying Cryptographic Hash [0x9A4...3B1F]...",
                "Checking cold-chain temperature deviations...",
                "Validating Holo-Seal integrity protocol...",
                "Match verified. Compiling Digital Passport."
            ];

            let i = 0;
            const interval = setInterval(() => {
                if (i < sequence.length) {
                    setLogs(prev => [...prev, sequence[i]]);
                    i++;
                } else {
                    clearInterval(interval);
                    setStatus("success");
                }
            }, 700);

            return () => clearInterval(interval);
        }
    }, [status]);

    return (
        <main className="min-h-screen bg-[#020202] text-white flex flex-col font-sans selection:bg-[var(--gold)] selection:text-black">
            <header className="w-full flex justify-between items-center px-6 md:px-10 py-6 border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-50">
                <Link href="/" className="text-2xl font-serif tracking-widest text-[var(--gold)]">VERILUX</Link>
                <Link href="/marketplace" className="text-xs md:text-sm tracking-widest uppercase text-white/50 hover:text-[var(--gold)] transition-colors">← To Marketplace</Link>
            </header>

            <div className="flex-grow flex flex-col items-center p-6 w-full max-w-4xl mx-auto mt-12 md:mt-24">

                {status === "idle" && (
                    <div className="w-full text-center animate-in fade-in duration-700 pt-10">
                        <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">Authenticity Scanner</h1>
                        <p className="text-white/50 font-light mb-12 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
                            Scan your physical holo-seal or manually input the batch code. Our engine cross-references independent registries and ledger histories to guarantee zero tampering.
                        </p>

                        <form onSubmit={handleVerify} className="w-full relative max-w-2xl mx-auto group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--gold)] to-[#aa8529] rounded-sm blur opacity-0 group-hover:opacity-25 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="e.g. LM-0925-NX"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    className="w-full bg-[#050505] border border-white/20 rounded-sm py-5 md:py-7 px-6 text-xl md:text-2xl tracking-widest uppercase text-center focus:outline-none focus:border-[var(--gold)] transition-all placeholder:text-white/10 shadow-inner text-[var(--gold)]"
                                />
                                <button
                                    type="submit"
                                    disabled={!code}
                                    className="absolute right-2 top-2 bottom-2 bg-[var(--gold)] text-black px-6 md:px-10 font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-[#eadd9a] transition-all disabled:opacity-20 disabled:hover:bg-[var(--gold)] shadow-lg"
                                >
                                    Scan
                                </button>
                            </div>
                        </form>

                        <div className="mt-16 flex justify-center opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                        </div>
                        <p className="mt-4 text-[10px] tracking-widest uppercase text-white/30">NFC Ready</p>
                    </div>
                )}

                {status === "scanning" && (
                    <div className="w-full max-w-2xl animate-in fade-in zoom-in-95 duration-500 bg-[#080808] border border-white/10 rounded-sm p-6 md:p-10 font-mono text-xs md:text-sm text-[var(--gold)]/80 shadow-[0_0_30px_rgba(212,175,55,0.05)] pt-10">
                        <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
                            <div className="w-6 h-6 border-2 border-[var(--gold)] border-t-transparent rounded-full animate-spin"></div>
                            <span className="uppercase tracking-[0.2em] text-white">System Scanning / Node connection active</span>
                        </div>
                        <div className="space-y-4 min-h-[200px]">
                            {logs.map((log, idx) => (
                                <div key={idx} className="animate-in slide-in-from-left-4 fade-in duration-300">
                                    <span className="text-white/30 mr-4">&gt;</span>
                                    {log}
                                </div>
                            ))}
                            <span className="animate-pulse inline-block w-2 h-4 bg-[var(--gold)] ml-1 align-middle"></span>
                        </div>
                    </div>
                )}

                {status === "success" && (
                    <div className="w-full animate-in slide-in-from-bottom-8 fade-in duration-1000 flex flex-col items-center">
                        <div className="w-20 h-20 bg-[var(--gold)]/10 border border-[var(--gold)] rounded-full flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(212,175,55,0.4)] relative">
                            <div className="absolute inset-0 rounded-full border border-[var(--gold)]/50 animate-ping opacity-20 duration-1000"></div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-[var(--gold)]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-serif mb-2 text-white">Authentic Artifact</h2>
                        <p className="text-[var(--gold)] mb-12 tracking-[0.3em] uppercase text-[10px] md:text-xs">Ledger Record Secured</p>

                        <div className="w-full bg-[#080808] border border-white/10 rounded-xl overflow-hidden shadow-2xl relative">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-50"></div>

                            <div className="bg-[#111] p-6 md:p-8 flex items-center justify-between border-b border-white/5">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-1">La Mer</h3>
                                    <p className="text-[var(--gold)] font-light italic text-sm">Crème de la Mer (60ml)</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2">Batch Match</p>
                                    <p className="font-mono text-white tracking-widest bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm text-sm">{code || "LM-0925-NX"}</p>
                                </div>
                            </div>

                            <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                        <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest">Global Trade ID</span>
                                        <span className="text-white/90 font-mono text-xs md:text-sm">0887167095944</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                        <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest">Date Mfr.</span>
                                        <span className="text-white text-xs md:text-sm font-light">August 12, 2025</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                        <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest">Expiration</span>
                                        <span className="text-white text-xs md:text-sm font-light">August 2028</span>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                        <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest">Cold-Chain Transit</span>
                                        <span className="text-green-500 text-[10px] md:text-xs font-semibold uppercase tracking-widest flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                            Optimal (21°C)
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                                        <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest">Holo-Seal Integrity</span>
                                        <span className="text-green-500 text-[10px] md:text-xs font-semibold uppercase tracking-widest flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                            Intact
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/5 pb-3 flex-wrap">
                                        <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-widest">Verified Retailer</span>
                                        <span className="text-white text-xs md:text-sm font-light">Sephora, Topanga</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
                            <Link href="/product/la-mer-creme" className="py-4 px-10 bg-[var(--gold)] text-black font-semibold text-[10px] md:text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-[var(--gold-light)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
                                Access Full Passport Details
                            </Link>
                            <button
                                onClick={() => { setCode(""); setStatus("idle"); }}
                                className="text-white/40 hover:text-[var(--gold)] uppercase tracking-[0.2em] text-[10px] md:text-xs transition-colors"
                            >
                                Scan Another Batch
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </main>
    );
}
