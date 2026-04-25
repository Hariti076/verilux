import Link from 'next/link';

export default function SignInPage() {
    return (
        <main className="min-h-screen bg-[#020202] text-white flex flex-col font-sans relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img src="/hero_bg.png" alt="Luxury Background" className="w-full h-full object-cover opacity-30 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            </div>

            <div className="relative z-10 flex-grow flex flex-col items-center justify-center p-6 w-full max-w-lg mx-auto">
                <Link href="/" className="text-4xl font-serif tracking-widest text-[var(--gold)] mb-12 drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">VERILUX</Link>

                <div className="w-full bg-[#050505]/70 backdrop-blur-2xl border border-[var(--gold)]/20 rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent opacity-80"></div>

                    <h1 className="text-3xl font-serif mb-2 text-white/90">Authentication</h1>
                    <p className="text-[var(--gold)]/70 text-xs font-semibold tracking-[0.2em] uppercase mb-10">Access your digital vault</p>

                    <form className="space-y-6">
                        <div className="relative group">
                            <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">Email Address</label>
                            <input type="email" placeholder="client@example.com" className="w-full bg-transparent border-b border-white/20 pb-3 focus:outline-none focus:border-[var(--gold)] transition-colors text-white text-lg font-light placeholder:text-white/10" required />
                        </div>
                        <div className="relative group">
                            <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2 mt-8 flex justify-between">
                                Password
                                <span className="hover:text-[var(--gold)] transition-colors cursor-pointer">Forgot?</span>
                            </label>
                            <input type="password" placeholder="••••••••" className="w-full bg-transparent border-b border-white/20 pb-3 focus:outline-none focus:border-[var(--gold)] transition-colors text-white text-xl tracking-widest placeholder:text-white/10 placeholder:tracking-normal" required />
                        </div>

                        <button type="submit" className="w-full py-4 mt-10 bg-[var(--gold)] text-black font-semibold text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-[var(--gold-light)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex justify-center items-center gap-3">
                            Sign In
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </form>

                    <p className="text-center mt-10 text-xs text-white/40 tracking-wider">
                        Not a member? <Link href="/marketplace" className="text-white hover:text-[var(--gold)] underline underline-offset-4 ml-1 transition-colors">Apply for Access</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}
