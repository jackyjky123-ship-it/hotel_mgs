import { useState, useRef } from 'react';
import { Bed, Compass, Maximize2, ChevronLeft, ChevronRight, MoreHorizontal, Sun, Moon, ArrowDown, Eye } from 'lucide-react';

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
    const [isHovered, setIsHovered] = useState(false);
    const [manualNightMode, setManualNightMode] = useState<boolean | null>(null);
    const [lightingPercentage, setLightingPercentage] = useState<number | null>(null);
    const [showLightingControls, setShowLightingControls] = useState(false);

    const activeVilla = VILLAS[villaIndex];
    const prevVilla = VILLAS[(villaIndex - 1 + VILLAS.length) % VILLAS.length];
    const nextVilla = VILLAS[(villaIndex + 1) % VILLAS.length];

    // Compute effective night opacity:
    // If slider active: use slider percentage
    // Else if manual mode active: 1 or 0
    // Else default: 1 on hover, 0 when not hovered
    const nightOpacity =
        lightingPercentage !== null
            ? lightingPercentage / 100
            : manualNightMode !== null
            ? manualNightMode
                ? 1
                : 0
            : isHovered
            ? 1
            : 0;

    const handlePrev = () => {
        setVillaIndex((prev) => (prev - 1 + VILLAS.length) % VILLAS.length);
    };

    const handleNext = () => {
        setVillaIndex((prev) => (prev + 1) % VILLAS.length);
    };

    const scrollToContent = () => {
        const target = document.getElementById('editorial-manifesto');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative w-full p-2 sm:p-4 lg:p-6 bg-[#0B0D11] text-white">
            {/* Outer Frame with Rounded Corners matching hero_section_design_ref.png */}
            <div
                className="relative w-full h-[88vh] min-h-[680px] max-h-[920px] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/10 bg-[#0E1116] flex flex-col justify-between shadow-2xl transition-all duration-700"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Dynamic Architectural Sky Background */}
                <div
                    className="absolute inset-0 pointer-events-none transition-colors duration-1000 ease-out"
                    style={{
                        backgroundColor: nightOpacity > 0.5 ? '#0A0C10' : '#141820',
                    }}
                >
                    {/* Atmospheric ambient glows */}
                    <div
                        className="absolute inset-0 transition-opacity duration-1000"
                        style={{
                            background:
                                nightOpacity > 0.5
                                    ? 'radial-gradient(ellipse at 50% 30%, rgba(30, 41, 59, 0.4) 0%, rgba(10, 12, 16, 0.95) 75%)'
                                    : 'radial-gradient(ellipse at 50% 35%, rgba(148, 163, 184, 0.25) 0%, rgba(15, 23, 42, 0.8) 75%)',
                        }}
                    />
                </div>

                {/* 3D HOTEL DUAL-LAYER CONTAINER (DAY & NIGHT REVEAL) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden p-6 sm:p-10 md:p-14">
                    {/* Layer 1: Day view */}
                    <img
                        src="/images/3d_hotel_day.png"
                        alt="3D Hotel Architecture Daytime"
                        className="w-full h-full object-contain max-h-[82%] sm:max-h-[86%] transition-transform duration-1000 ease-out"
                    />

                    {/* Layer 2: Night view with silky-smooth crossfade ("fade real little by little") */}
                    <img
                        src="/images/3d_hotel_night.png"
                        alt="3D Hotel Architecture Nighttime"
                        className="absolute inset-0 w-full h-full object-contain max-h-[82%] sm:max-h-[86%] m-auto transition-opacity duration-1000 ease-in-out"
                        style={{ opacity: nightOpacity }}
                    />

                    {/* Subtle vignette overlay at edges for cinematic focus */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D11] via-transparent to-[#0B0D11]/30 pointer-events-none" />
                </div>

                {/* TOP NAVIGATION OVERLAY (matching hero_section_design_ref.png) */}
                <header className="relative z-30 flex items-center justify-between px-4 sm:px-8 py-5 sm:py-6">
                    {/* Left: Hamburger + ENQUIRE pill button */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onOpenEnquiry}
                            className="group flex items-center gap-2.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#E5DBC7] hover:bg-white text-[#121316] font-semibold text-[11px] sm:text-xs tracking-[0.2em] uppercase transition-all shadow-lg active:scale-95"
                        >
                            <span className="flex flex-col gap-1 w-3.5">
                                <span className="h-0.5 w-full bg-[#121316] rounded-full group-hover:w-2.5 transition-all" />
                                <span className="h-0.5 w-2.5 bg-[#121316] rounded-full group-hover:w-full transition-all" />
                            </span>
                            <span>Enquire</span>
                        </button>
                    </div>

                    {/* Center: Brand Logo */}
                    <div className="text-center cursor-pointer select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <h1 className="font-luxury text-lg sm:text-2xl tracking-[0.38em] text-white font-medium uppercase drop-shadow">
                            AMĀLI
                        </h1>
                        <p className="text-[9px] sm:text-[10px] tracking-[0.45em] uppercase text-neutral-400 font-light mt-0.5">
                            Island
                        </p>
                    </div>

                    {/* Right: Actions & Day/Night Indicator */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Day/Night Status Pill & Quick Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => setShowLightingControls(!showLightingControls)}
                                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/15 text-white/90 backdrop-blur-md text-[10px] sm:text-xs tracking-[0.18em] uppercase transition-all"
                                title="Adjust Day / Night Lighting"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span
                                        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                                            nightOpacity > 0.3 ? 'bg-amber-400' : 'bg-sky-400'
                                        }`}
                                    />
                                    <span
                                        className={`relative inline-flex rounded-full h-2 w-2 ${
                                            nightOpacity > 0.3 ? 'bg-amber-400' : 'bg-sky-400'
                                        }`}
                                    />
                                </span>
                                <span className="hidden md:inline">
                                    {nightOpacity === 1
                                        ? 'Night View'
                                        : nightOpacity === 0
                                        ? 'Day View'
                                        : `Dusk ${Math.round(nightOpacity * 100)}%`}
                                </span>
                                {nightOpacity > 0.5 ? (
                                    <Moon className="w-3.5 h-3.5 text-amber-300" />
                                ) : (
                                    <Sun className="w-3.5 h-3.5 text-sky-300" />
                                )}
                            </button>

                            {/* Dropdown Lighting Scrub Panel */}
                            {showLightingControls && (
                                <div className="absolute right-0 top-full mt-2 w-64 p-4 rounded-2xl bg-[#0F1218]/95 border border-white/20 backdrop-blur-xl shadow-2xl z-50 text-left">
                                    <div className="flex items-center justify-between mb-3 text-xs tracking-wider uppercase text-neutral-300 font-medium">
                                        <span>Atmosphere Blend</span>
                                        <span className="text-amber-300 font-mono text-[11px]">
                                            {Math.round(nightOpacity * 100)}% Night
                                        </span>
                                    </div>
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={Math.round(nightOpacity * 100)}
                                        onChange={(e) => {
                                            setLightingPercentage(Number(e.target.value));
                                            setManualNightMode(null);
                                        }}
                                        className="w-full accent-amber-300 cursor-pointer h-1.5 bg-white/20 rounded-lg appearance-none"
                                    />
                                    <div className="flex items-center justify-between text-[10px] uppercase text-neutral-400 tracking-widest mt-2">
                                        <span>Day</span>
                                        <span>Golden Dusk</span>
                                        <span>Night</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/10">
                                        <button
                                            onClick={() => {
                                                setManualNightMode(false);
                                                setLightingPercentage(null);
                                            }}
                                            className="px-2 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[10px] uppercase tracking-wider text-neutral-300"
                                        >
                                            Reset Day
                                        </button>
                                        <button
                                            onClick={() => {
                                                setManualNightMode(true);
                                                setLightingPercentage(null);
                                            }}
                                            className="px-2 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 text-[10px] uppercase tracking-wider font-medium"
                                        >
                                            Lock Night
                                        </button>
                                    </div>
                                    <p className="text-[10px] text-neutral-400 mt-2 italic text-center">
                                        *Or simply hover anywhere on the hotel
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* More options button */}
                        <button
                            onClick={() => setShowLightingControls(!showLightingControls)}
                            className="p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/15 text-white backdrop-blur-md transition-all"
                            aria-label="More options"
                        >
                            <MoreHorizontal className="w-4 h-4" />
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
                            Scroll to learn more
                        </span>
                        <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:translate-y-1 transition-transform" />
                    </button>
                </div>

                {/* CENTER BOTTOM HEADLINE: "VILLA AURORA / GRANDE" */}
                <div className="relative z-20 text-center px-4 mt-auto mb-6 sm:mb-8 pointer-events-none select-none">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-[10px] uppercase tracking-[0.3em] text-amber-200/90 mb-3">
                        <Eye className="w-3 h-3" />
                        <span>Hover hotel to reveal illuminated night</span>
                    </div>
                    <h2 className="font-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.22em] text-white font-light uppercase drop-shadow-md">
                        {activeVilla.name}
                    </h2>
                    <p className="text-xs sm:text-sm tracking-[0.4em] uppercase text-neutral-300 font-light mt-1.5">
                        {activeVilla.subtitle}
                    </p>
                </div>

                {/* BOTTOM SPECIFICATION DOCK & NAVIGATION (matching hero_section_design_ref.png) */}
                <div className="relative z-30 px-3 sm:px-6 pb-4 sm:pb-6">
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
