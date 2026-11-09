import { Search, User, ArrowUpRight } from 'lucide-react';

interface BrandHeaderSectionProps {
    onOpenEnquiry: () => void;
    onSignIn?: () => void;
}

export function BrandHeaderSection({ onOpenEnquiry, onSignIn }: BrandHeaderSectionProps) {
    return (
        <section className="relative w-full bg-[#EAECEF] text-[#0E1013] px-4 sm:px-8 lg:px-12 pt-8 pb-16 border-t border-[#D9DDE2]">
            {/* Architectural Sub-Navigation Bar matching design_ref.png */}
            <nav className="max-w-7xl mx-auto flex items-center justify-between pb-8 mb-12 border-b border-[#D2D6DC]/60 text-xs tracking-widest uppercase">
                {/* Brand Monogram Icon */}
                <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-sm bg-[#0E1013] flex items-center justify-center text-white font-display font-bold text-xs tracking-normal">
                        C
                    </div>
                    <span className="font-display font-bold tracking-[0.2em] text-sm text-[#0E1013] hidden sm:inline">
                        CITY ARCADE
                    </span>
                </div>

                {/* Navigation Links */}
                <ul className="hidden md:flex items-center gap-8 text-[11px] font-medium text-neutral-600 tracking-[0.2em]">
                    <li>
                        <a href="#hero" className="text-[#0E1013] font-semibold hover:text-black transition-colors">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#properties" className="hover:text-black transition-colors">
                            Properties
                        </a>
                    </li>
                    <li>
                        <a href="#buy" className="hover:text-black transition-colors">
                            Buy
                        </a>
                    </li>
                    <li>
                        <a href="#rent" className="hover:text-black transition-colors">
                            Rent
                        </a>
                    </li>
                    <li>
                        <a href="#agent" className="hover:text-black transition-colors">
                            Find Agent
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-black transition-colors">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Right Actions: Search + Sign In */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={onOpenEnquiry}
                        className="p-2 rounded-full hover:bg-black/5 text-neutral-700 hover:text-black transition-colors"
                        aria-label="Search properties"
                    >
                        <Search className="w-4 h-4" />
                    </button>

                    <a
                        href="/login"
                        className="flex items-center gap-2 px-5 py-2 rounded-full border border-neutral-400/80 bg-white hover:bg-neutral-900 hover:text-white hover:border-neutral-900 text-neutral-900 font-semibold text-[10px] tracking-[0.2em] uppercase transition-all shadow-sm"
                    >
                        <User className="w-3 h-3" />
                        <span>Sign In</span>
                    </a>
                </div>
            </nav>

            {/* GRAND HEADLINE & STATS GRID (matching design_ref.png) */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
                    {/* Left Column: Badge + Description */}
                    <div className="lg:col-span-3 pt-2">
                        <div className="inline-block px-3.5 py-1 rounded-full border border-neutral-400 bg-transparent text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-800 mb-4">
                            Best Real Estate Agency
                        </div>
                        <p className="text-xs text-neutral-600 uppercase tracking-widest leading-relaxed font-normal">
                            Find your dream home, explore premium properties, and invest with confidence through City Arcade, your trusted partner in modern real estate.
                        </p>
                    </div>

                    {/* Center Column: Giant "CITY ARCADE" Typography */}
                    <div className="lg:col-span-6 text-center lg:text-left">
                        <h1 className="font-display font-black tracking-[-0.03em] leading-[0.88] text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#0E1013] uppercase select-none">
                            <span className="block">CITY</span>
                            <span className="block">ARCADE</span>
                        </h1>
                    </div>

                    {/* Right Column: Key Statistics */}
                    <div className="lg:col-span-3 flex lg:flex-col justify-between sm:justify-around lg:justify-start gap-6 lg:items-end text-right">
                        {/* Stat 1 */}
                        <div className="text-left lg:text-right">
                            <div className="font-display font-bold text-3xl sm:text-4xl text-[#0E1013] tracking-tight">
                                10K
                            </div>
                            <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-medium mt-0.5">
                                Happy Clients
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="text-left lg:text-right">
                            <div className="font-display font-bold text-3xl sm:text-4xl text-[#0E1013] tracking-tight">
                                5K
                            </div>
                            <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-medium mt-0.5">
                                Properties Sold
                            </div>
                        </div>

                        {/* Stat 3 */}
                        <div className="text-left lg:text-right">
                            <div className="font-display font-bold text-3xl sm:text-4xl text-[#0E1013] tracking-tight">
                                15+
                            </div>
                            <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-medium mt-0.5">
                                Cities Covered
                            </div>
                        </div>
                    </div>
                </div>

                {/* ARCHITECTURAL MODULAR BUILDING SHOWCASE (matching design_ref.png) */}
                <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#D8DCE1] border border-[#CCD1D8] shadow-md group">
                    <img
                        src="/images/modular_building_hero.png"
                        alt="City Arcade Modular Glass Cube Architecture"
                        className="w-full h-[320px] sm:h-[440px] md:h-[520px] object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                    />

                    {/* Bottom-left Pill Badge (exact match to design_ref.png) */}
                    <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-neutral-300 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 shadow-md">
                            <span>Future of living with City Arcade</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-700" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
