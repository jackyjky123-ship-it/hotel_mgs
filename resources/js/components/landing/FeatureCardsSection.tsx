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
            isHighlighted: false,
            icon: Search,
        },
        {
            id: 'verified-listings',
            title: 'VERIFIED PRO LISTINGS',
            subtitle: '100% VERIFIED AND AUDITED PROPERTY DEEDS',
            isHighlighted: true,
            icon: ShieldCheck,
        },
        {
            id: 'investing-insights',
            title: 'SMART INVESTING INSIGHTS',
            subtitle: 'PERSONALIZED VALUATION METRICS TO GROW YOUR WEALTH',
            isHighlighted: false,
            icon: TrendingUp,
        },
        {
            id: 'real-time-updates',
            title: 'REAL TIME PROPERTY UPDATES',
            subtitle: 'INSTANT ALERTS ON CONFIDENTIAL VILLA RELEASES',
            isHighlighted: false,
            icon: Bell,
        },
    ];

    return (
        <section id="features" className="relative w-full bg-[#0B0D11] text-white px-4 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-white/[0.06]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
                    <div>
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-amber-200/90 font-medium block mb-2">
                            CAPABILITIES · 02
                        </span>
                        <h2 className="font-display font-bold text-2xl sm:text-4xl uppercase tracking-tight text-white">
                            Intelligent Residence Platform
                        </h2>
                    </div>
                    <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-light max-w-xs sm:text-right">
                        Precision engineering meets transparent real estate valuation
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* LEFT COLUMN: 4 Feature Cards Stack (Clean Frosted Obsidian) */}
                    <div className="lg:col-span-6 flex flex-col justify-between gap-4">
                        {features.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => onCardClick?.(item.title)}
                                className={`relative p-5 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[110px] sm:min-h-[120px] ${
                                    item.isHighlighted
                                        ? 'bg-[#151922] border border-amber-300/30 shadow-xl hover:border-amber-300/60'
                                        : 'bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/25 shadow-sm'
                                }`}
                            >
                                {/* Top Row: Icon + Title + Arrow */}
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-center gap-2.5">
                                        <div
                                            className={`p-2 rounded-lg ${
                                                item.isHighlighted
                                                    ? 'bg-amber-400/20 text-amber-300'
                                                    : 'bg-white/5 text-neutral-300 group-hover:text-white'
                                            }`}
                                        >
                                            <item.icon className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2.5 text-right">
                                        <h3
                                            className={`font-display font-bold text-xs sm:text-sm tracking-[0.12em] uppercase ${
                                                item.isHighlighted ? 'text-amber-100' : 'text-white'
                                            }`}
                                        >
                                            {item.title}
                                        </h3>
                                        <ArrowUpRight
                                            className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                                                item.isHighlighted ? 'text-amber-300' : 'text-neutral-400 group-hover:text-white'
                                            }`}
                                        />
                                    </div>
                                </div>

                                {/* Bottom Row: Subtitle / Description */}
                                <div className="mt-3">
                                    <p className="text-[10px] sm:text-[11px] font-normal tracking-[0.16em] uppercase text-neutral-400">
                                        {item.subtitle}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: Matching Architectural Visual (Clean Crop) */}
                    <div
                        onClick={() => onCardClick?.('Modular Cantilevered Suites')}
                        className="lg:col-span-6 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#12151E] shadow-2xl group flex flex-col justify-end min-h-[460px] sm:min-h-[520px] cursor-pointer"
                    >
                        <img
                            src="/images/modular_feature_clean.png"
                            alt="City Arcade Modular Glass Architecture Feature View"
                            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
                        />

                        {/* Subtle inner shadow and gradient highlight */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                        <div className="relative z-10 p-6 sm:p-8 flex items-end justify-between text-white">
                            <div>
                                <span className="block text-[9px] uppercase tracking-[0.25em] text-amber-200/90 font-mono font-medium mb-1">
                                    ARCHITECTURAL HIGHLIGHT
                                </span>
                                <span className="block font-display font-bold text-lg sm:text-xl tracking-wider uppercase text-white">
                                    Modular Cantilevered Suites
                                </span>
                                <span className="block text-[11px] text-neutral-300 font-light mt-1">
                                    Precision prefabricated steel and acoustic thermal glass
                                </span>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#E5DBC7] group-hover:text-[#121316] backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all shadow-lg shrink-0">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
