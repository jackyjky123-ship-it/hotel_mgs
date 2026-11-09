import { useState } from 'react';
import { Users, Bed, Sparkles, ArrowRight, Check, ChevronLeft, ChevronRight, Eye, ShieldCheck, Coffee, SunDim } from 'lucide-react';
import { RoomTypeData } from '@/types/hotel';

interface CuratedStaysSectionProps {
    onSelectRoom: (room: RoomTypeData) => void;
    exchangeRate?: number;
}

export const ROOMS_DATA: RoomTypeData[] = [
    {
        id: 'deluxe-king',
        name: 'Deluxe King Room',
        slug: 'deluxe-king-room',
        priceUsd: 65,
        sleepsAdults: 2,
        sleepsChildren: 1,
        scarcityCount: 2,
        description:
            'A calm, light-filled retreat with a king bed, rainfall shower, and everything you need for an easy stay. The perfect base for couples and solo travelers in Phnom Penh.',
        images: [
            'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        ],
        features: ['King Bed', 'Rainfall Shower', 'Smart TV', 'Espresso Machine'],
        balcony: false,
    },
    {
        id: 'tropical-garden-villa',
        name: 'Tropical Garden Villa',
        slug: 'tropical-garden-villa',
        priceUsd: 120,
        sleepsAdults: 2,
        sleepsChildren: 2,
        scarcityCount: 3,
        description:
            'Step out to a private balcony surrounded by biophilic greenery. Slow mornings with espresso, birdsong, and generous room to breathe.',
        images: [
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
        ],
        features: ['Private Balcony', 'Garden View', 'Espresso Machine', 'Rainfall Shower'],
        balcony: true,
    },
    {
        id: 'executive-pool-suite',
        name: 'Executive Pool Suite',
        slug: 'executive-pool-suite',
        priceUsd: 180,
        sleepsAdults: 3,
        sleepsChildren: 2,
        scarcityCount: 1,
        description:
            'Our most generous suite with direct pool access and room to spread out. Designed for special celebrations, longer stays, and effortless relaxation.',
        images: [
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
        ],
        features: ['Direct Pool Access', 'Spacious Lounge', 'King Bed', 'Daybed', 'Balcony'],
        balcony: true,
    },
    {
        id: 'family-heritage-loft',
        name: 'Family Heritage Loft',
        slug: 'family-heritage-loft',
        priceUsd: 150,
        sleepsAdults: 4,
        sleepsChildren: 2,
        scarcityCount: 2,
        description:
            'A spacious two-tier loft with warm heritage-inspired woodwork, crafted for families and small groups who want comfort and connection together.',
        images: [
            'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
            'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
        ],
        features: ['2 King/Queen Beds', 'Mezzanine Loft', 'Espresso Machine', 'Heritage Woodwork'],
        balcony: false,
    },
];

export function CuratedStaysSection({ onSelectRoom, exchangeRate = 4100 }: CuratedStaysSectionProps) {
    const [currencyMode, setCurrencyMode] = useState<'USD' | 'KHR'>('USD');
    const [activeImageIndexes, setActiveImageIndexes] = useState<Record<string, number>>({
        'deluxe-king': 0,
        'tropical-garden-villa': 0,
        'executive-pool-suite': 0,
        'family-heritage-loft': 0,
    });

    const handleNextImage = (roomId: string, max: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveImageIndexes((prev) => ({
            ...prev,
            [roomId]: ((prev[roomId] || 0) + 1) % max,
        }));
    };

    const handlePrevImage = (roomId: string, max: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setActiveImageIndexes((prev) => ({
            ...prev,
            [roomId]: ((prev[roomId] || 0) - 1 + max) % max,
        }));
    };

    return (
        <section id="rooms" className="w-full bg-[#FAF8F5] text-[#1E1B18] py-20 sm:py-28 border-b border-[#EAE3D6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Block with Currency Switcher */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C29062]/10 text-[#A87243] text-xs font-mono uppercase tracking-[0.2em] font-semibold mb-3">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Curated Stays</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-[#1E1B18] mb-4">
                            Rooms with a sense of place
                        </h2>
                        <p className="text-base sm:text-lg text-[#6B6359] font-light leading-relaxed">
                            Four ways to stay, each designed around natural materials, soft light, and unhurried mornings. Prices shown are per night before tax and optional add-ons.
                        </p>
                    </div>

                    {/* Currency Switcher Pill */}
                    <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs font-mono text-[#8C8275] uppercase tracking-wider">Currency:</span>
                        <div className="inline-flex p-1 rounded-full bg-[#EFEBE4] border border-[#DDD5C7] text-xs font-mono">
                            <button
                                type="button"
                                onClick={() => setCurrencyMode('USD')}
                                className={`px-4 py-1.5 rounded-full transition-all ${
                                    currencyMode === 'USD'
                                        ? 'bg-[#1E1B18] text-white font-bold shadow'
                                        : 'text-[#6B6359] hover:text-[#1E1B18]'
                                }`}
                            >
                                USD ($)
                            </button>
                            <button
                                type="button"
                                onClick={() => setCurrencyMode('KHR')}
                                className={`px-4 py-1.5 rounded-full transition-all ${
                                    currencyMode === 'KHR'
                                        ? 'bg-[#C29062] text-[#141210] font-bold shadow'
                                        : 'text-[#6B6359] hover:text-[#1E1B18]'
                                }`}
                            >
                                KHR (៛)
                            </button>
                        </div>
                    </div>
                </div>

                {/* Rooms Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {ROOMS_DATA.map((room) => {
                        const currentImgIdx = activeImageIndexes[room.id] || 0;
                        const khrAmount = Math.round(room.priceUsd * exchangeRate);
                        const khrFormatted = khrAmount.toLocaleString('en-US');

                        return (
                            <div
                                key={room.id}
                                className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#E7DFD3] shadow-sm hover:shadow-2xl hover:border-[#C29062]/50 transition-all duration-500 hover:-translate-y-1"
                            >
                                {/* Room Image Container with Gallery Controls */}
                                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                                    <img
                                        src={room.images[currentImgIdx]}
                                        alt={`${room.name} - Photo ${currentImgIdx + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

                                    {/* Top Left: Scarcity Badge */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <div className="px-3.5 py-1.5 rounded-full bg-[#141210]/90 backdrop-blur-md border border-white/15 text-white text-[11px] font-mono tracking-wide flex items-center gap-2 shadow-lg">
                                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                                            <span>Only {room.scarcityCount} {room.scarcityCount === 1 ? 'room' : 'rooms'} left</span>
                                        </div>
                                    </div>

                                    {/* Top Right: Balcony or Suite badge */}
                                    {room.balcony && (
                                        <div className="absolute top-4 right-4 z-10">
                                            <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1E1B18] text-[11px] font-medium flex items-center gap-1.5 shadow">
                                                <SunDim className="w-3.5 h-3.5 text-[#C29062]" />
                                                <span>Private Balcony</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* Image Carousel Controls */}
                                    {room.images.length > 1 && (
                                        <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button
                                                type="button"
                                                onClick={(e) => handlePrevImage(room.id, room.images.length, e)}
                                                className="w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-md hover:bg-black/90 transition-all active:scale-95 shadow"
                                                aria-label="Previous room photo"
                                            >
                                                <ChevronLeft className="w-5 h-5" />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={(e) => handleNextImage(room.id, room.images.length, e)}
                                                className="w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center backdrop-blur-md hover:bg-black/90 transition-all active:scale-95 shadow"
                                                aria-label="Next room photo"
                                            >
                                                <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    )}

                                    {/* Image Indicator Dots & Occupancy Pill */}
                                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs z-10">
                                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 font-mono">
                                            <Users className="w-3.5 h-3.5 text-[#D4A373]" />
                                            <span>
                                                Sleeps {room.sleepsAdults} Adults + {room.sleepsChildren} {room.sleepsChildren === 1 ? 'Child' : 'Children'}
                                            </span>
                                        </div>

                                        {/* Carousel Dots */}
                                        {room.images.length > 1 && (
                                            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md">
                                                {room.images.map((_, i) => (
                                                    <span
                                                        key={i}
                                                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                                                            i === currentImgIdx ? 'w-4 bg-[#C29062]' : 'bg-white/50'
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Room Content Body */}
                                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-white">
                                    <div>
                                        <div className="flex items-start justify-between gap-4 mb-2">
                                            <h3 className="font-serif font-bold text-2xl text-[#1E1B18] tracking-tight">
                                                {room.name}
                                            </h3>
                                        </div>

                                        {/* Pricing Block with Currency Switch */}
                                        <div className="mb-4 flex flex-wrap items-baseline gap-2.5">
                                            {currencyMode === 'USD' ? (
                                                <>
                                                    <span className="text-3xl font-serif font-bold text-[#1E1B18]">
                                                        ${room.priceUsd}
                                                    </span>
                                                    <span className="text-xs font-mono text-[#8C8275] uppercase">/ night</span>
                                                    <span className="text-xs font-mono text-[#A87243]">
                                                        (≈ {khrFormatted} ៛)
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <span className="text-3xl font-serif font-bold text-[#1E1B18]">
                                                        {khrFormatted} ៛
                                                    </span>
                                                    <span className="text-xs font-mono text-[#8C8275] uppercase">/ night</span>
                                                    <span className="text-xs font-mono text-[#A87243]">
                                                        (${room.priceUsd} USD)
                                                    </span>
                                                </>
                                            )}
                                            <span className="text-[11px] font-mono text-[#A89F93] ml-auto">
                                                Net price + 10% VAT
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-sm sm:text-base text-[#6B6359] leading-relaxed mb-6 font-light">
                                            {room.description}
                                        </p>

                                        {/* Key Feature Chips */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {room.features.map((feat, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 rounded-xl bg-[#FAF6EE] border border-[#EFE5D5] text-[#5C5449] text-xs font-medium flex items-center gap-1.5"
                                                >
                                                    <Check className="w-3 h-3 text-[#C29062]" />
                                                    <span>{feat}</span>
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action CTA Button */}
                                    <button
                                        type="button"
                                        onClick={() => onSelectRoom(room)}
                                        className="w-full py-4 px-6 rounded-2xl bg-[#1E1B18] hover:bg-[#C29062] text-white hover:text-[#141210] font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all shadow-md active:scale-98 group-hover:shadow-lg"
                                    >
                                        <span>Select & Customize Stay</span>
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
