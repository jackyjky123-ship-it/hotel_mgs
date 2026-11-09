import { useState, useRef, useEffect } from 'react';
import {
    Calendar,
    Users,
    ArrowRight,
    ShieldCheck,
    QrCode,
    Search,
    Menu,
    X,
    Clock,
    Sun,
    Moon,
    Sparkles,
    CheckCircle2,
    Lock,
    MapPin,
    Building2,
} from 'lucide-react';

interface HeroSectionProps {
    onSearch: (params: { checkIn: string; checkOut: string; adults: number; children: number }) => void;
    onFindBookingClick: () => void;
    onBookDirectClick: () => void;
}

export function HeroSection({ onSearch, onFindBookingClick, onBookDirectClick }: HeroSectionProps) {
    // Default dates: tomorrow and day after tomorrow
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const dayAfter = new Date(today);
    dayAfter.setDate(today.getDate() + 3);

    const formatDateForInput = (d: Date) => d.toISOString().split('T')[0];

    const [checkIn, setCheckIn] = useState(formatDateForInput(tomorrow));
    const [checkOut, setCheckOut] = useState(formatDateForInput(dayAfter));
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);
    const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
    const [dateError, setDateError] = useState<string | null>(null);
    const [isNightView, setIsNightView] = useState(true); // Default to illuminated night view

    const guestDropdownRef = useRef<HTMLDivElement>(null);

    // Close guest dropdown on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (guestDropdownRef.current && !guestDropdownRef.current.contains(event.target as Node)) {
                setIsGuestDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (checkOut <= checkIn) {
            setDateError('Check-out must be after check-in date.');
            return;
        }
        setDateError(null);
        onSearch({ checkIn, checkOut, adults, children });
    };

    return (
        <header id="hero" className="relative w-full bg-[#141210] text-[#F9F7F3] overflow-hidden border-b border-[#2C2825]">
            {/* Ambient Background & Radial Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[500px] bg-[#C29062]/12 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute inset-0 bg-radial from-transparent via-[#141210]/60 to-[#141210]" />
            </div>

            {/* FLOATING GLASS CAPSULE NAVBAR (Clean, Restrained, High-End) */}
            <div className="sticky top-4 z-40 w-full px-4 sm:px-6 pointer-events-none">
                <div className="max-w-5xl mx-auto relative pointer-events-auto">
                    <nav className="rounded-full backdrop-blur-2xl bg-[#141210]/85 border border-white/12 shadow-[0_8px_32px_rgba(0,0,0,0.45)] px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all">
                        {/* Left: Brand Identity */}
                        <a href="#hero" className="flex items-center gap-2.5 group">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4A373] to-[#A87243] text-[#141210] flex items-center justify-center font-serif font-bold text-base shadow-sm border border-white/20 transition-transform group-hover:scale-105">
                                P
                            </div>
                            <div className="flex items-baseline gap-2">
                                <span className="font-serif text-base sm:text-lg font-bold tracking-wide text-white block">
                                    PuKy
                                </span>
                                <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4A373] font-mono hidden sm:inline-block">
                                    Boutique
                                </span>
                            </div>
                        </a>

                        {/* Center: Curated Navigation Links */}
                        <div className="hidden md:flex items-center gap-6 text-[11px] font-mono tracking-[0.16em] uppercase text-[#C8C0B5]">
                            <a href="#rooms" className="hover:text-white transition-colors py-1">
                                Suites
                            </a>
                            <span className="text-white/15 text-[8px]">•</span>
                            <a href="#amenities" className="hover:text-white transition-colors py-1">
                                Amenities
                            </a>
                            <span className="text-white/15 text-[8px]">•</span>
                            <a href="#addons" className="hover:text-white transition-colors py-1">
                                Add-ons
                            </a>
                            <span className="text-white/15 text-[8px]">•</span>
                            <a href="#faq" className="hover:text-white transition-colors py-1">
                                FAQ
                            </a>
                        </div>

                        {/* Right: Actions Cluster */}
                        <div className="hidden sm:flex items-center gap-3">
                            {/* Subtle live currency chip */}
                            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[10px] font-mono text-[#D4A373]">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span>1 USD ≈ 4.1k ៛</span>
                            </div>

                            {/* Find Booking subtle trigger */}
                            <button
                                onClick={onFindBookingClick}
                                className="text-xs font-mono uppercase tracking-wider text-[#C8C0B5] hover:text-white px-2 py-1 transition-colors"
                            >
                                My Booking
                            </button>

                            {/* Primary Standout CTA */}
                            <button
                                onClick={onBookDirectClick}
                                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#C29062] to-[#D4A373] hover:from-[#D4A373] hover:to-[#C29062] text-[#141210] font-semibold text-xs tracking-wider uppercase transition-all shadow-md active:scale-95 flex items-center gap-1"
                            >
                                <span>Book Direct</span>
                                <ArrowRight className="w-3 h-3" />
                            </button>
                        </div>

                        {/* Mobile Controls */}
                        <div className="flex sm:hidden items-center gap-2">
                            <button
                                onClick={onBookDirectClick}
                                className="px-3 py-1.5 rounded-full bg-[#C29062] text-[#141210] font-semibold text-[11px] uppercase tracking-wider shadow-sm"
                            >
                                Book
                            </button>
                            <button
                                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                                className="p-1.5 text-white hover:text-[#C29062] transition-colors rounded-lg bg-white/[0.05] border border-white/10"
                                aria-label="Toggle navigation menu"
                            >
                                {isMobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>
                        </div>
                    </nav>

                    {/* Mobile Dropdown Drawer */}
                    {isMobileNavOpen && (
                        <div className="sm:hidden absolute top-full left-0 right-0 mt-2 p-5 bg-[#181614]/95 backdrop-blur-2xl border border-white/12 rounded-3xl shadow-2xl space-y-4 animate-fadeIn z-50">
                            <div className="flex flex-col space-y-3 text-xs tracking-widest uppercase text-[#D0C9BF] font-mono">
                                <a
                                    href="#rooms"
                                    onClick={() => setIsMobileNavOpen(false)}
                                    className="py-1 hover:text-white flex items-center justify-between"
                                >
                                    <span>Suites</span>
                                    <span className="text-[10px] text-[#A89F93]">4 Options</span>
                                </a>
                                <a
                                    href="#amenities"
                                    onClick={() => setIsMobileNavOpen(false)}
                                    className="py-1 hover:text-white"
                                >
                                    Amenities
                                </a>
                                <a
                                    href="#addons"
                                    onClick={() => setIsMobileNavOpen(false)}
                                    className="py-1 hover:text-white"
                                >
                                    Add-ons & Extras
                                </a>
                                <a
                                    href="#how-it-works"
                                    onClick={() => setIsMobileNavOpen(false)}
                                    className="py-1 hover:text-white"
                                >
                                    How It Works
                                </a>
                                <a
                                    href="#payments"
                                    onClick={() => setIsMobileNavOpen(false)}
                                    className="py-1 hover:text-white"
                                >
                                    Payments & KHQR
                                </a>
                                <a
                                    href="#faq"
                                    onClick={() => setIsMobileNavOpen(false)}
                                    className="py-1 hover:text-white"
                                >
                                    FAQ
                                </a>
                            </div>

                            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                                <div className="text-xs font-mono text-[#D4A373] flex items-center justify-between">
                                    <span>Live Exchange:</span>
                                    <span>1 USD ≈ 4,100 ៛</span>
                                </div>
                                <button
                                    onClick={() => {
                                        setIsMobileNavOpen(false);
                                        onFindBookingClick();
                                    }}
                                    className="w-full py-2.5 rounded-xl border border-white/15 text-white font-mono text-xs tracking-wider uppercase text-center"
                                >
                                    Find My Booking
                                </button>
                                <button
                                    onClick={() => {
                                        setIsMobileNavOpen(false);
                                        onBookDirectClick();
                                    }}
                                    className="w-full py-2.5 rounded-xl bg-[#C29062] text-[#141210] font-semibold text-xs tracking-wider uppercase text-center"
                                >
                                    Book Direct
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* HERO HEROIC CONTENT */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24 text-center">
                {/* Khmer Welcome Eyebrow Pill */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-xs sm:text-sm font-medium text-[#E8D7C3] mb-6 shadow-sm">
                    <span className="font-serif text-[#D4A373]">សូមស្វាគមន៍</span>
                    <span className="text-white/40">·</span>
                    <span>A sanctuary of calm in Phnom Penh</span>
                    <span className="text-white/40">·</span>
                    <span className="text-[11px] font-mono text-emerald-400">Direct Booking</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white mb-5 leading-[1.14] max-w-4xl mx-auto">
                    A quiet corner of Cambodia,{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EEDAC5] via-[#C29062] to-[#EEDAC5]">
                        made for you.
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="text-base sm:text-lg text-[#D5CEBF] font-light max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
                    Book direct in under two minutes. No account needed, pay instantly with ABA KHQR, and receive your digital check-in pass right away.
                </p>

                {/* INTERACTIVE 3D ARCHITECTURAL SHOWCASE (Day/Night Reveal) */}
                <div className="relative max-w-4xl mx-auto mb-10 sm:mb-12 rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-white/[0.06] to-black/40 p-2 sm:p-3 shadow-2xl backdrop-blur-sm group">
                    {/* Architectural Building Visual */}
                    <div className="relative aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden bg-[#100E0C]">
                        {/* Day Image */}
                        <img
                            src="/images/3d_hotel_day.png"
                            alt="PuKy Boutique Hotel Day View"
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                                isNightView ? 'opacity-0 pointer-events-none' : 'opacity-100'
                            }`}
                        />
                        {/* Night Image */}
                        <img
                            src="/images/3d_hotel_night.png"
                            alt="PuKy Boutique Hotel Illuminated Night View"
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                                isNightView ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            }`}
                        />

                        {/* Subtle atmospheric vignette */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                        {/* Top Floating Badge: Day / Night Lighting Switch */}
                        <div className="absolute top-4 right-4 z-20">
                            <div className="inline-flex items-center p-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono shadow-xl">
                                <button
                                    type="button"
                                    onClick={() => setIsNightView(false)}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                                        !isNightView
                                            ? 'bg-[#C29062] text-[#141210] font-bold shadow'
                                            : 'text-[#D5CEBF] hover:text-white'
                                    }`}
                                >
                                    <Sun className="w-3.5 h-3.5" />
                                    <span>Daylight</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setIsNightView(true)}
                                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all ${
                                        isNightView
                                            ? 'bg-[#C29062] text-[#141210] font-bold shadow'
                                            : 'text-[#D5CEBF] hover:text-white'
                                    }`}
                                >
                                    <Moon className="w-3.5 h-3.5" />
                                    <span>Evening Glow</span>
                                </button>
                            </div>
                        </div>

                        {/* Bottom Architectural Specs Pill on Image */}
                        <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 text-xs">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[#E8D7C3] font-mono">
                                <Building2 className="w-3.5 h-3.5 text-[#C29062]" />
                                <span>Cantilevered Suites · Biophilic Terraces · Street 240</span>
                            </div>
                            <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[#E8D7C3] font-mono">
                                <Lock className="w-3.5 h-3.5 text-[#C29062]" />
                                <span>Row-level Concurrency Lock</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEARCH COMMAND BAR CONTAINER */}
                <div className="max-w-4xl mx-auto bg-[#1E1B18]/95 backdrop-blur-2xl border border-white/20 rounded-3xl p-3 sm:p-4 shadow-2xl text-left">
                    <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        {/* Check-in */}
                        <div className="bg-white/[0.05] hover:bg-white/[0.08] transition-colors rounded-2xl p-3 border border-white/[0.08] focus-within:border-[#C29062]">
                            <label className="block text-[11px] font-mono tracking-wider uppercase text-[#D4A373] mb-1">
                                Check-in Date
                            </label>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-[#D4A373] shrink-0" />
                                <input
                                    type="date"
                                    value={checkIn}
                                    min={formatDateForInput(today)}
                                    onChange={(e) => {
                                        setCheckIn(e.target.value);
                                        setDateError(null);
                                    }}
                                    className="w-full bg-transparent text-white text-sm font-medium focus:outline-none [color-scheme:dark]"
                                    required
                                />
                            </div>
                        </div>

                        {/* Check-out */}
                        <div className="bg-white/[0.05] hover:bg-white/[0.08] transition-colors rounded-2xl p-3 border border-white/[0.08] focus-within:border-[#C29062]">
                            <label className="block text-[11px] font-mono tracking-wider uppercase text-[#D4A373] mb-1">
                                Check-out Date
                            </label>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-[#D4A373] shrink-0" />
                                <input
                                    type="date"
                                    value={checkOut}
                                    min={checkIn || formatDateForInput(today)}
                                    onChange={(e) => {
                                        setCheckOut(e.target.value);
                                        setDateError(null);
                                    }}
                                    className="w-full bg-transparent text-white text-sm font-medium focus:outline-none [color-scheme:dark]"
                                    required
                                />
                            </div>
                        </div>

                        {/* Guests Selector Popover */}
                        <div ref={guestDropdownRef} className="relative bg-white/[0.05] hover:bg-white/[0.08] transition-colors rounded-2xl p-3 border border-white/[0.08] focus-within:border-[#C29062]">
                            <label className="block text-[11px] font-mono tracking-wider uppercase text-[#D4A373] mb-1">
                                Guests & Rooms
                            </label>
                            <button
                                type="button"
                                onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
                                className="w-full flex items-center justify-between text-left text-white text-sm font-medium focus:outline-none"
                            >
                                <div className="flex items-center gap-2 truncate">
                                    <Users className="w-4 h-4 text-[#D4A373] shrink-0" />
                                    <span>
                                        {adults} {adults === 1 ? 'Adult' : 'Adults'}
                                        {children > 0 && ` · ${children} ${children === 1 ? 'Child' : 'Children'}`}
                                    </span>
                                </div>
                            </button>

                            {/* Guest Popover Dropdown */}
                            {isGuestDropdownOpen && (
                                <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-[#231F1C] border border-white/20 rounded-2xl shadow-2xl z-50 space-y-3.5 animate-fadeIn">
                                    <div className="flex items-center justify-between text-xs">
                                        <div>
                                            <span className="text-white font-medium block">Adults</span>
                                            <span className="text-[10px] text-[#A89F93]">Age 13+</span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <button
                                                type="button"
                                                onClick={() => setAdults(Math.max(1, adults - 1))}
                                                className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                                            >
                                                -
                                            </button>
                                            <span className="w-5 text-center font-mono font-bold">{adults}</span>
                                            <button
                                                type="button"
                                                onClick={() => setAdults(Math.min(6, adults + 1))}
                                                className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between text-xs pt-2 border-t border-white/10">
                                        <div>
                                            <span className="text-white font-medium block">Children</span>
                                            <span className="text-[10px] text-[#A89F93]">Age 0–12</span>
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <button
                                                type="button"
                                                onClick={() => setChildren(Math.max(0, children - 1))}
                                                className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                                            >
                                                -
                                            </button>
                                            <span className="w-5 text-center font-mono font-bold">{children}</span>
                                            <button
                                                type="button"
                                                onClick={() => setChildren(Math.min(4, children + 1))}
                                                className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => setIsGuestDropdownOpen(false)}
                                        className="w-full mt-2 py-2 bg-[#C29062] hover:bg-[#D4A373] text-[#141210] rounded-xl text-xs font-semibold uppercase tracking-wider text-center transition-all shadow"
                                    >
                                        Done
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Search Action Button */}
                        <div className="flex items-center">
                            <button
                                type="submit"
                                className="w-full h-full min-h-[52px] px-6 rounded-2xl bg-gradient-to-r from-[#C29062] to-[#D4A373] hover:from-[#D4A373] hover:to-[#C29062] text-[#141210] font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#C29062]/20 active:scale-98"
                            >
                                <Search className="w-4 h-4" />
                                <span>Check Availability</span>
                            </button>
                        </div>
                    </form>

                    {/* Microcopy Validation Message */}
                    {dateError && (
                        <div className="mt-3 px-3.5 py-2 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2 animate-fadeIn">
                            <span>⚠</span>
                            <span>{dateError}</span>
                        </div>
                    )}
                </div>

                {/* Under Search Bar Guarantees */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-5 sm:gap-10 text-xs text-[#C6BEB2] font-mono tracking-wide">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C29062]" />
                        <span>Direct Booking Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-[#C29062]" />
                        <span>15-Minute Inventory Hold</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <QrCode className="w-4 h-4 text-[#C29062]" />
                        <span>Instant ABA KHQR Voucher</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
