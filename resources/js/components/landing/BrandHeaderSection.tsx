import { Search, User, ArrowUpRight, Bed, Compass, Maximize2 } from 'lucide-react';

interface BrandHeaderSectionProps {
    onOpenEnquiry: () => void;
    onSignIn?: () => void;
}

export function BrandHeaderSection({ onOpenEnquiry }: BrandHeaderSectionProps) {
    return (
        <section className="relative w-full bg-[#EFF1F3] text-[#111317] px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8 pb-16">
            {/* Top Navigation Bar (exact match to design_ref.png) */}
            <nav className="max-w-7xl mx-auto flex items-center justify-between pb-8 mb-10 border-b border-[#D6DAE0]/70 text-xs tracking-widest uppercase">
                {/* Left: Folded Geometric Architectural Logo Mark */}
                <div className="flex items-center">
                    <div className="w-6 h-6 flex items-center justify-center text-[#111317]">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.5 19.5L12 4.5L20.5 19.5H3.5Z"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinejoin="round"
                            />
                            <path d="M12 4.5V19.5" stroke="currentColor" strokeWidth="2" />
                        </svg>
                    </div>
                </div>

                {/* Center: Navigation Links with subtle divider dots */}
                <ul className="hidden md:flex items-center gap-6 text-[10px] font-semibold text-neutral-500 tracking-[0.25em]">
                    <li>
                        <a href="#hero-header" className="text-[#111317] font-bold hover:text-black transition-colors">
                            Home
                        </a>
                    </li>
                    <span className="text-neutral-300 text-[8px]">•</span>
                    <li>
                        <a href="#properties" className="hover:text-black transition-colors">
                            Properties
                        </a>
                    </li>
                    <span className="text-neutral-300 text-[8px]">•</span>
                    <li>
                        <a href="#features" className="hover:text-black transition-colors">
                            Buy
                        </a>
                    </li>
                    <span className="text-neutral-300 text-[8px]">•</span>
                    <li>
                        <a href="#features" className="hover:text-black transition-colors">
                            Rent
                        </a>
                    </li>
                    <span className="text-neutral-300 text-[8px]">•</span>
                    <li>
                        <a href="#why-us" className="hover:text-black transition-colors">
                            Find Agent
                        </a>
                    </li>
                    <span className="text-neutral-300 text-[8px]">•</span>
                    <li>
                        <button onClick={onOpenEnquiry} className="hover:text-black transition-colors uppercase">
                            Contact
                        </button>
                    </li>
                </ul>

                {/* Right: Circular Search Button + Sign In Pill */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={onOpenEnquiry}
                        className="w-8 h-8 rounded-full bg-[#111317] hover:bg-black text-white flex items-center justify-center transition-all shadow-sm active:scale-95"
                        aria-label="Search properties"
                    >
                        <Search className="w-3.5 h-3.5" />
                    </button>

                    <a
                        href="/login"
                        className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-400 bg-transparent hover:bg-[#111317] hover:text-white hover:border-[#111317] text-[#111317] font-semibold text-[10px] tracking-[0.2em] uppercase transition-all shadow-sm"
                    >
                        <User className="w-3 h-3" />
                        <span>Sign In</span>
                    </a>
                </div>
            </nav>

            {/* GRAND HEADLINE & STATS GRID (exact match to design_ref.png) */}
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
                    {/* Left Column: Pill Badge + Uppercase Description */}
                    <div className="lg:col-span-3 pt-2">
                        <div className="inline-block px-3.5 py-1 rounded-full border border-neutral-350 bg-white/60 text-[9px] uppercase tracking-[0.22em] font-medium text-neutral-700 mb-4 shadow-2xs">
                            Best Real Estate Agency
                        </div>
                        <p className="text-[10px] text-neutral-500 uppercase tracking-[0.16em] leading-relaxed font-normal max-w-[230px]">
                            Find your dream home, explore premium properties, and invest with confidence through City Arcade, your trusted partner in modern real estate.
                        </p>
                    </div>

                    {/* Center Column: Elegant Tall "CITY ARCADE" Typography (Light/Regular weight as in design_ref) */}
                    <div className="lg:col-span-6 text-center lg:text-left">
                        <h1 className="font-display font-light tracking-[-0.01em] leading-[0.88] text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] text-[#111317] uppercase select-none">
                            <span className="block font-light">CITY</span>
                            <span className="block font-light">ARCADE</span>
                        </h1>
                    </div>

                    {/* Right Column: Key Statistics (Vertical stack matching design_ref) */}
                    <div className="lg:col-span-3 flex lg:flex-col justify-between sm:justify-around lg:justify-start gap-5 lg:items-end text-right pt-2">
                        {/* Stat 1 */}
                        <div className="text-left lg:text-right">
                            <div className="font-display font-light text-3xl sm:text-4xl text-[#111317] tracking-tight">
                                10K
                            </div>
                            <div className="text-[9px] uppercase tracking-[0.22em] text-neutral-500 font-medium mt-0.5">
                                Happy Clients
                            </div>
                        </div>

                        {/* Stat 2 */}
                        <div className="text-left lg:text-right">
                            <div className="font-display font-light text-3xl sm:text-4xl text-[#111317] tracking-tight">
                                5K
                            </div>
                            <div className="text-[9px] uppercase tracking-[0.22em] text-neutral-500 font-medium mt-0.5">
                                Properties Sold
                            </div>
                        </div>

                        {/* Stat 3 */}
                        <div className="text-left lg:text-right">
                            <div className="font-display font-light text-3xl sm:text-4xl text-[#111317] tracking-tight">
                                15+
                            </div>
                            <div className="text-[9px] uppercase tracking-[0.22em] text-neutral-500 font-medium mt-0.5">
                                Cities Covered
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3D HOTEL NIGHT ARCHITECTURAL HERO (SYNCHRONIZED CONTAINER & IMAGE) */}
                <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0A0D12] border border-[#CCD1D8] shadow-2xl group">
                    {/* Container aspect ratio strictly matches 16:9 (1024x572) so the image fills the container seamlessly without black letterbox or pillarbox bars */}
                    <div className="w-full aspect-[16/9] relative overflow-hidden bg-[#0A0D12] flex items-center justify-center">
                        {/* Night atmosphere radial ambient glow */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(32,45,60,0.5)_0%,rgba(10,13,18,0.98)_85%)] pointer-events-none" />

                        {/* 3D Hotel Night: fills container 100% edge-to-edge, uncropped and uncompressed */}
                        <img
                            src="/images/3d_hotel_night.png"
                            alt="City Arcade 3D Hotel Night Architecture"
                            className="w-full h-full object-cover object-center relative z-10 transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                        />

                        {/* Subtle atmospheric vignette for contrast and grounded badges */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none z-15" />

                        {/* Bottom-left Pill Badge (exact match to design_ref.png) */}
                        <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20">
                            <div className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border border-neutral-300 text-[9px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 shadow-md">
                                <span>Future of living with City Arcade</span>
                                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-700" />
                            </div>
                        </div>

                        {/* Right: Architectural Specifications Capsule */}
                        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 hidden md:flex items-center gap-4 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-neutral-200 text-[10px] uppercase tracking-wider font-medium shadow-lg">
                            <div className="flex items-center gap-1.5">
                                <Bed className="w-3 h-3 text-neutral-400" />
                                <span>6 Bedrooms</span>
                            </div>
                            <span className="h-3 w-px bg-white/20" />
                            <div className="flex items-center gap-1.5">
                                <Compass className="w-3 h-3 text-neutral-400" />
                                <span>91,332 Sqft Plot</span>
                            </div>
                            <span className="h-3 w-px bg-white/20" />
                            <div className="flex items-center gap-1.5">
                                <Maximize2 className="w-3 h-3 text-neutral-400" />
                                <span>16,017 Sqft Floorplan</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
