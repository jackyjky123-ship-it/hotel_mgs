import { ArrowUpRight, Search, ShieldCheck, TrendingUp, Bell } from 'lucide-react';

interface FeatureCardsSectionProps {
    onCardClick?: (feature: string) => void;
}

export function FeatureCardsSection({ onCardClick }: FeatureCardsSectionProps) {
    const features = [
        {
            id: 'instant-search',
            title: 'INSTANT PROPERTY SEARCH',
            subtitle: 'DISCOVER HOMES AND APARTMENTS WITH JUST A FEW CLICKS',
            isDark: false,
            icon: Search,
        },
        {
            id: 'verified-listings',
            title: 'VERIFIED PRO LISTINGS',
            subtitle: '100% VERIFIED AND UPDATED PROPERTY DETAILS',
            isDark: true,
            icon: ShieldCheck,
        },
        {
            id: 'investing-insights',
            title: 'SMART INVESTING INSIGHTS',
            subtitle: 'PERSONALIZED RECOMMENDATIONS TO GROW YOUR WEALTH',
            isDark: false,
            icon: TrendingUp,
        },
        {
            id: 'real-time-updates',
            title: 'REAL TIME PROPERTY UPDATES',
            subtitle: 'GET INSTANT ALERTS ON NEW LISTINGS AND PRICE CHANGES',
            isDark: false,
            icon: Bell,
        },
    ];

    return (
        <section className="relative w-full bg-[#EAECEF] text-[#0E1013] px-4 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-[#D9DDE2]">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* LEFT COLUMN: 4 Feature Cards Stack (matching design_ref.png) */}
                    <div className="lg:col-span-6 flex flex-col justify-between gap-4">
                        {features.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => onCardClick?.(item.title)}
                                className={`relative p-6 sm:p-7 rounded-2xl transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[110px] sm:min-h-[125px] ${
                                    item.isDark
                                        ? 'bg-[#0E1013] text-white shadow-xl hover:bg-black border border-neutral-800'
                                        : 'bg-white text-[#0E1013] border border-[#CCD1D8] shadow-sm hover:shadow-md hover:border-neutral-400'
                                }`}
                            >
                                {/* Top Row: Title (Right aligned in design_ref) & Arrow Icon */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-2">
                                        <item.icon
                                            className={`w-4 h-4 ${
                                                item.isDark ? 'text-amber-400' : 'text-neutral-500'
                                            }`}
                                        />
                                    </div>
                                    <div className="flex items-center gap-3 text-right">
                                        <h3
                                            className={`font-display font-bold text-sm sm:text-base tracking-[0.1em] uppercase ${
                                                item.isDark ? 'text-white' : 'text-[#0E1013]'
                                            }`}
                                        >
                                            {item.title}
                                        </h3>
                                        <ArrowUpRight
                                            className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                                                item.isDark ? 'text-white' : 'text-[#0E1013]'
                                            }`}
                                        />
                                    </div>
                                </div>

                                {/* Bottom Row: Subtitle / Description (Left aligned in design_ref) */}
                                <div className="mt-4">
                                    <p
                                        className={`text-[10px] sm:text-xs font-medium tracking-[0.18em] uppercase ${
                                            item.isDark ? 'text-neutral-400' : 'text-neutral-500'
                                        }`}
                                    >
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: Matching Architectural Visual (matching design_ref.png) */}
                    <div className="lg:col-span-6 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#CCD1D8] bg-[#D4D8DD] shadow-md group flex flex-col justify-end min-h-[460px] sm:min-h-[520px]">
                        <img
                            src="/images/modular_building_feature.png"
                            alt="City Arcade Modular Glass Architecture Feature View"
                            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                        />

                        {/* Subtle inner shadow and gradient highlight */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                            <div>
                                <span className="block text-[10px] uppercase tracking-[0.25em] text-neutral-300 font-medium">
                                    Architectural Highlight
                                </span>
                                <span className="block font-display font-bold text-lg tracking-wider uppercase text-white mt-0.5">
                                    Modular Cantilevered Suites
                                </span>
                            </div>
                            <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
