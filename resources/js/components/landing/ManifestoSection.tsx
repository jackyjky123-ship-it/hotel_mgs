export function ManifestoSection() {
    return (
        <section
            id="editorial-manifesto"
            className="relative w-full bg-[#EFF1F3] text-[#111317] px-4 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-[#D6DAE0]/70"
        >
            <div className="max-w-7xl mx-auto">
                <div className="space-y-2 sm:space-y-3 font-display font-light tracking-tight text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] uppercase select-none leading-[1.12]">
                    {/* Line 1 - Dark */}
                    <div className="text-[#111317] transition-colors duration-300">
                        A MODERN REAL ESTATE PLATFORM,
                    </div>

                    {/* Line 2 - Dark & Indented */}
                    <div className="pl-12 sm:pl-28 md:pl-48 lg:pl-64 text-[#111317] transition-colors duration-300">
                        CITY ARCADE INCORPORATES
                    </div>

                    {/* Line 3 - Muted Architectural Slate */}
                    <div className="text-[#8E95A2] transition-colors duration-300">
                        ADVANCED DIGITAL TOOLS AND
                    </div>

                    {/* Line 4 - Muted Architectural Slate & Indented */}
                    <div className="pl-16 sm:pl-36 md:pl-60 lg:pl-80 text-[#8E95A2] transition-colors duration-300">
                        TRUSTED
                    </div>

                    {/* Line 5 - Muted Architectural Slate & Further Indented */}
                    <div className="pl-24 sm:pl-48 md:pl-76 lg:pl-[28rem] text-[#8E95A2] transition-colors duration-300">
                        LOCAL EXPERTISE
                    </div>
                </div>
            </div>
        </section>
    );
}
