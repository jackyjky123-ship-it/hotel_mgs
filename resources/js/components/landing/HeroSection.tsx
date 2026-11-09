import { useState } from 'react';
import { Bed, Compass, Maximize2, ChevronLeft, ChevronRight, Sun, Moon, ArrowDown, User } from 'lucide-react';

interface HeroSectionProps {
    onOpenEnquiry: () => void;
    onExploreVillas?: () => void;
}

const VILLAS = [
    {
        name: 'VILLA AURORA',
        subtitle: 'GRANDE',
        bedrooms: '6 BEDROOMS',
        plot: '91,332 SQFT PLOT',
        floorplan: '16,017 SQFT FLOORPLAN',
        description: 'Biophilic architectural sanctuary with private lagoon & sky terrace',
    },
    {
        name: 'VILLA ARIA',
        subtitle: 'MINIMA',
        bedrooms: '4 BEDROOMS',
        plot: '54,200 SQFT PLOT',
        floorplan: '9,850 SQFT FLOORPLAN',
        description: 'Sculpted cantilevered residence overlooking tranquil garden groves',
    },
    {
        name: 'THE MONOLITH',
        subtitle: 'SKY RESIDENCE',
        bedrooms: '8 BEDROOMS',
        plot: '120,500 SQFT PLOT',
        floorplan: '24,000 SQFT FLOORPLAN',
        description: 'Crown penthouse with 360-degree panoramic ocean and skyline vistas',
    },
];

export function HeroSection({ onOpenEnquiry }: HeroSectionProps) {
    const [villaIndex, setVillaIndex] = useState(0);
    const [isNightMode, setIsNightMode] = useState(false);

    const activeVilla = VILLAS[villaIndex];
    const prevVilla = VILLAS[(villaIndex - 1 + VILLAS.length) % VILLAS.length];
    const nextVilla = VILLAS[(villaIndex + 1) % VILLAS.length];

    const handlePrev = () => {
        setVillaIndex((prev) => (prev - 1 + VILLAS.length) % VILLAS.length);
    };

    const handleNext = () => {
        setVillaIndex((prev) => (prev + 1) % VILLAS.length);
    };

    const scrollToContent = () => {
        const target = document.getElementById('brand-story') || document.getElementById('manifesto');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative w-full p-2 sm:p-4 lg:p-6 bg-[#080A0E] text-white">
            {/* Outer Frame with Rounded Corners matching hero_section_design_ref.png */}
            <div className="relative w-full h-[90vh] min-h-[720px] max-h-[960px] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/10 bg-[#0E1116] flex flex-col justify-between shadow-2xl transition-all select-none">
                {/* Architectural Neutral Studio Backdrop */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#10131A] via-[#0D1016] to-[#0A0C10]">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(55,65,81,0.35)_0%,rgba(10,12,16,0.96)_75%)]" />
                </div>

                {/* 3D HOTEL ISOLATED DISPLAY (BACKGROUND REMOVED, NO HOVER EFFECT) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden p-6 sm:p-10 md:p-14">
                    {/* Daytime 3D Hotel (No Background) */}
                    <img
                        src="/images/3d_hotel_day_nobg.png"
                        alt="3D Hotel Architecture Daytime"
                        className={`w-full h-full object-contain max-h-[82%] sm:max-h-[86%] transition-opacity duration-700 ease-in-out drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${
                            isNightMode ? 'opacity-0' : 'opacity-100'
                        }`}
                    />

                    {/* Nighttime 3D Hotel (No Background) */}
                    <img
                        src="/images/3d_hotel_night_nobg.png"
                        alt="3D Hotel Architecture Nighttime"
                        className={`absolute inset-0 w-full h-full object-contain max-h-[82%] sm:max-h-[86%] m-auto transition-opacity duration-700 ease-in-out drop-shadow-[0_20px_60px_rgba(251,191,36,0.25)] ${
                            isNightMode ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                </div>

                {/* CONSOLIDATED PRIMARY NAVIGATION (Harmonized, Clean & Complete) */}
                <header className="relative z-30 flex items-center justify-between px-4 sm:px-8 py-5 sm:py-6 border-b border-white/[0.06] bg-black/20 backdrop-blur-md">
                    {/* Brand Logo & Tagline */}
                    <div
                        className="flex items-center gap-3 cursor-pointer select-none group"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        <div className="w-8 h-8 rounded-lg bg-[#E5DBC7] text-[#0E1013] flex items-center justify-center font-display font-black text-sm shadow-md group-hover:bg-white transition-colors">
                            C
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="font-luxury text-base sm:text-lg tracking-[0.3em] text-white font-medium uppercase drop-shadow">
                                    AMĀLI
                                </span>
                                <span className="text-[10px] tracking-[0.25em] uppercase text-neutral-400 font-light">
                                    ISLAND
                                </span>
                            </div>
                            <p className="text-[8px] tracking-[0.3em] uppercase text-amber-200/80 font-mono hidden sm:block">
                                CITY ARCADE RESIDENCES
                            </p>
                        </div>
                    </div>

                    {/* Primary Navigation Links */}
                    <nav className="hidden lg:flex items-center gap-8 text-[11px] font-medium tracking-[0.22em] uppercase text-neutral-300">
                        <a href="#hero" className="text-white hover:text-amber-200 transition-colors">
                            Residences
                        </a>
                        <a href="#brand-story" className="hover:text-white transition-colors">
                            Curation
                        </a>
                        <a href="#manifesto" className="hover:text-white transition-colors">
                            Philosophy
                        </a>
                        <a href="#features" className="hover:text-white transition-colors">
                            Features
                        </a>
                        <a href="#why-us" className="hover:text-white transition-colors">
                            Why Us
                        </a>
                    </nav>

                    {/* Actions: Client Portal + Day/Night Toggle + Enquire */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Client Portal Link */}
                        <a
                            href="/login"
                            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white text-[10px] font-semibold tracking-[0.18em] uppercase transition-all backdrop-blur-sm"
                        >
                            <User className="w-3 h-3 text-neutral-400" />
                            <span>Portal</span>
                        </a>

                        {/* Day / Night View Toggle Pill */}
                        <button
                            onClick={() => setIsNightMode(!isNightMode)}
                            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-black/50 hover:bg-black/70 border border-white/15 text-white/90 backdrop-blur-md text-[10px] sm:text-xs tracking-[0.18em] uppercase transition-all shadow-sm active:scale-95"
                            title="Toggle Day / Night View"
                        >
                            <span className="relative flex h-2 w-2">
                                <span
                                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                                        isNightMode ? 'bg-amber-400' : 'bg-sky-400'
                                    }`}
                                />
                                <span
                                    className={`relative inline-flex rounded-full h-2 w-2 ${
                                        isNightMode ? 'bg-amber-400' : 'bg-sky-400'
                                    }`}
                                />
                            </span>
                            <span className="hidden xs:inline">{isNightMode ? 'Night' : 'Day'}</span>
                            {isNightMode ? (
                                <Moon className="w-3.5 h-3.5 text-amber-300" />
                            ) : (
                                <Sun className="w-3.5 h-3.5 text-sky-300" />
                            )}
                        </button>

                        {/* Enquire Button */}
                        <button
                            onClick={onOpenEnquiry}
                            className="group flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#E5DBC7] hover:bg-white text-[#121316] font-semibold text-[10px] sm:text-xs tracking-[0.2em] uppercase transition-all shadow-lg active:scale-95"
                        >
                            <span>Enquire</span>
                        </button>
                    </div>
                </header>

                {/* RIGHT VERTICAL RAIL: "SCROLL TO LEARN MORE" */}
                <div className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-3">
                    <button
                        onClick={scrollToContent}
                        className="group flex flex-col items-center gap-3 text-white/50 hover:text-white transition-colors cursor-pointer"
                    >
                        <span className="[writing-mode:vertical-rl] text-[10px] tracking-[0.3em] uppercase font-light">
                            Scroll to explore
                        </span>
                        <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:translate-y-1 transition-transform" />
                    </button>
                </div>

                {/* CENTER BOTTOM HEADLINE: "VILLA AURORA / GRANDE" */}
                <div className="relative z-20 text-center px-4 mt-auto mb-6 sm:mb-8 pointer-events-none select-none">
                    <h2 className="font-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.22em] text-white font-light uppercase drop-shadow-md">
                        {activeVilla.name}
                    </h2>
                    <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-neutral-300 font-light mt-1.5">
                        {activeVilla.subtitle}
                    </p>
                </div>

                {/* BOTTOM SPECIFICATION DOCK & NAVIGATION (matching hero_section_design_ref.png) */}
                <div className="relative z-30 px-3 sm:px-6 pb-4 sm:pb-6 pointer-events-auto">
                    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                        {/* Previous Villa Button */}
                        <button
                            onClick={handlePrev}
                            className="w-full sm:w-auto flex items-center justify-between sm:justify-start gap-3 px-4 sm:px-5 py-2.5 rounded-full bg-black/60 hover:bg-black/80 border border-white/15 backdrop-blur-xl text-white transition-all group active:scale-95"
                        >
                            <span className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-colors">
                                <ChevronLeft className="w-3.5 h-3.5" />
                            </span>
                            <div className="text-left">
                                <span className="block text-[8px] uppercase tracking-[0.25em] text-neutral-400">
                                    Previous Villa
                                </span>
                                <span className="block text-[10px] uppercase tracking-[0.18em] font-medium text-neutral-200">
                                    {prevVilla.name} - {prevVilla.subtitle}
                                </span>
                            </div>
                        </button>

                        {/* Center Specifications Pill */}
                        <div className="w-full sm:w-auto flex items-center justify-center sm:justify-between gap-3 sm:gap-6 px-5 sm:px-8 py-3 rounded-full bg-black/70 border border-white/15 backdrop-blur-2xl text-neutral-200 shadow-2xl">
                            {/* Bedrooms */}
                            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-wider font-medium">
                                <Bed className="w-3.5 h-3.5 text-neutral-400" />
                                <span>{activeVilla.bedrooms}</span>
                            </div>

                            <span className="h-3.5 w-px bg-white/20" />

                            {/* Plot Size */}
                            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-wider font-medium">
                                <Compass className="w-3.5 h-3.5 text-neutral-400" />
                                <span>{activeVilla.plot}</span>
                            </div>

                            <span className="h-3.5 w-px bg-white/20" />

                            {/* Floorplan */}
                            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] uppercase tracking-wider font-medium">
                                <Maximize2 className="w-3.5 h-3.5 text-neutral-400" />
                                <span>{activeVilla.floorplan}</span>
                            </div>
                        </div>

                        {/* Next Villa Button */}
                        <button
                            onClick={handleNext}
                            className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-3 px-4 sm:px-5 py-2.5 rounded-full bg-black/60 hover:bg-black/80 border border-white/15 backdrop-blur-xl text-white transition-all group active:scale-95"
                        >
                            <div className="text-right">
                                <span className="block text-[8px] uppercase tracking-[0.25em] text-neutral-400">
                                    Next Villa
                                </span>
                                <span className="block text-[10px] uppercase tracking-[0.18em] font-medium text-neutral-200">
                                    {nextVilla.name} - {nextVilla.subtitle}
                                </span>
                            </div>
                            <span className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-colors">
                                <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
