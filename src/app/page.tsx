import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center font-sans">
      {/* Navbar Minimal */}
      <nav className="w-full flex justify-between items-center px-10 py-6 border-b border-white/5 absolute top-0 z-50">
        <h1 className="text-3xl font-serif tracking-widest text-[var(--gold)] drop-shadow-sm">VERILUX</h1>
        <div className="space-x-8 text-sm font-medium tracking-widest uppercase hidden md:block">
          <Link href="/verify" className="hover:text-[var(--gold)] transition-colors">Verify Product</Link>
          <Link href="/marketplace" className="hover:text-[var(--gold)] transition-colors">Marketplace</Link>
          <Link href="/sign-in" className="inline-block px-6 py-2 border border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition-all rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
            Sign In
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full h-screen flex flex-col justify-center items-center text-center px-6 relative bg-black selection:bg-[var(--gold)] selection:text-black">
        {/* Luxurious Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/hero_bg.png" alt="Luxury Background" className="w-full h-full object-cover opacity-60 mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-black/40 to-black/80"></div>
        </div>

        {/* Subtle background glow effect */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[600px] h-[600px] bg-[var(--gold)] rounded-full blur-[200px] opacity-15"></div>
        </div>

        <h2 className="text-xs md:text-sm uppercase tracking-[0.3em] text-[var(--gold)] mb-8 drop-shadow-md z-10">
          The Gold Standard in Beauty
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-tight max-w-5xl z-10">
          Authenticity <br />
          <span className="italic font-light text-white/90 text-4xl md:text-6xl lg:text-7xl">Guaranteed.</span>
        </h1>
        <p className="max-w-2xl text-white/70 text-base md:text-lg mb-12 font-sans font-light leading-relaxed z-10">
          The world's first luxury marketplace with multi-layered verification, holographic authentication, and manufacturing transparency.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 z-10">
          <Link href="/verify" className="px-8 py-4 bg-[var(--gold)] text-black font-semibold text-sm uppercase tracking-widest rounded-sm hover:bg-[var(--gold-light)] transition-all flex items-center justify-center gap-3">
            Verify a Batch
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Link>
          <Link href="/marketplace" className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold text-sm uppercase tracking-widest rounded-sm hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all flex items-center justify-center">
            Shop Collection
          </Link>
        </div>
      </section>

      {/* Feature Section */}
      <section className="w-full py-28 px-10 bg-[#030303] text-center border-t border-white/5 relative">
        <h2 className="text-3xl md:text-4xl font-serif mb-20 text-white">The VeriLux Standard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {/* Feature 1 */}
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 rounded-full border border-white/10 group-hover:border-[var(--gold)] flex items-center justify-center mb-8 text-[var(--gold)] transition-colors duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} className="w-8 h-8" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif mb-4 text-white">Batch Verification</h3>
            <p className="text-white/60 text-sm font-light leading-relaxed max-w-xs">Direct integration with global cosmetic databases guarantees correct origin and precise expiry data.</p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 rounded-full border border-white/10 group-hover:border-[var(--gold)] flex items-center justify-center mb-8 text-[var(--gold)] transition-colors duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} className="w-8 h-8" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5ZM13.5 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5Z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif mb-4 text-white">Digital Passport</h3>
            <p className="text-white/60 text-sm font-light leading-relaxed max-w-xs">Immutable product history via ledger ensures your luxury items are never tampered with post-manufacturing.</p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center group">
            <div className="w-20 h-20 rounded-full border border-white/10 group-hover:border-[var(--gold)] flex items-center justify-center mb-8 text-[var(--gold)] transition-colors duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} className="w-8 h-8" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif mb-4 text-white">Holo-Seals</h3>
            <p className="text-white/60 text-sm font-light leading-relaxed max-w-xs">Every order ships meticulously verified, wrapped with a scannable holographic seal from the primary supplier.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
