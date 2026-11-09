export function ManifestoSection() {
    return (
        <section
            id="manifesto"
            className="relative w-full bg-[#0B0D11] text-white px-4 sm:px-8 lg:px-12 py-20 sm:py-28 border-t border-white/[0.06] overflow-hidden"
        >
            {/* Ambient background light */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(245,158,11,0.03)_0%,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Manifesto Eyebrow Tag */}
                <div className="flex items-center justify-between mb-8 sm:mb-12 border-b border-white/10 pb-4">
                    <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-amber-200/90 font-medium">
                        EDITORIAL MANIFESTO · 01
                    </span>
                    <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-500">
                        SANCTUARY FORM & VISION
                    </span>
                </div>

                {/* Staggered Monumental Typography */}
                <div className="space-y-4 sm:space-y-6 font-display font-bold tracking-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase select-none leading-[0.95]">
                    {/* Line 1 */}
                    <div className="text-white transition-colors duration-500 hover:text-amber-200">
                        A MODERN REAL ESTATE PLATFORM,
                    </div>

                    {/* Line 2 - Indented */}
                    <div className="pl-6 sm:pl-16 md:pl-32 lg:pl-48 text-neutral-300 transition-colors duration-500 hover:text-white">
                        CITY ARCADE INCORPORATES
                    </div>

                    {/* Line 3 */}
                    <div className="text-neutral-400 transition-colors duration-500 hover:text-neutral-200">
                        ADVANCED DIGITAL TOOLS AND
                    </div>

                    {/* Line 4 - Indented */}
                    <div className="pl-10 sm:pl-24 md:pl-48 lg:pl-64 text-neutral-500 transition-colors duration-500 hover:text-neutral-300">
                        TRUSTED
                    </div>

                    {/* Line 5 - Further Indented with Amber Glow */}
                    <div className="pl-14 sm:pl-32 md:pl-64 lg:pl-80 text-amber-200/90 transition-colors duration-500 hover:text-amber-100">
                        LOCAL EXPERTISE
                    </div>
                </div>
            </div>
        </section>
    );
}
