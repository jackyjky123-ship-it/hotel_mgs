export function ManifestoSection() {
    return (
        <section
            id="editorial-manifesto"
            className="relative w-full bg-[#EAECEF] text-[#0E1013] px-4 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-[#D9DDE2]"
        >
            <div className="max-w-7xl mx-auto">
                <div className="space-y-3 sm:space-y-4 font-display font-medium tracking-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase select-none leading-none">
                    {/* Line 1 */}
                    <div className="text-[#0E1013] transition-colors duration-500 hover:text-black">
                        A MODERN REAL ESTATE PLATFORM,
                    </div>

                    {/* Line 2 - Indented */}
                    <div className="pl-8 sm:pl-20 md:pl-40 lg:pl-56 text-[#242A35] transition-colors duration-500 hover:text-black">
                        CITY ARCADE INCORPORATES
                    </div>

                    {/* Line 3 */}
                    <div className="text-[#4E5868] transition-colors duration-500 hover:text-[#0E1013]">
                        ADVANCED DIGITAL TOOLS AND
                    </div>

                    {/* Line 4 - Indented */}
                    <div className="pl-12 sm:pl-28 md:pl-52 lg:pl-72 text-[#7C8797] transition-colors duration-500 hover:text-[#242A35]">
                        TRUSTED
                    </div>

                    {/* Line 5 - Further Indented */}
                    <div className="pl-16 sm:pl-36 md:pl-64 lg:pl-96 text-[#9CA6B5] transition-colors duration-500 hover:text-[#4E5868]">
                        LOCAL EXPERTISE
                    </div>
                </div>
            </div>
        </section>
    );
}
