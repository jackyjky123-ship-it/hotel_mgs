import { ArrowUpRight } from 'lucide-react';

interface FeatureCardsSectionProps {
    onCardClick?: (feature: string) => void;
}

export function FeatureCardsSection({ onCardClick }: FeatureCardsSectionProps) {
    const features = [
        {
            id: 'instant-search',
            titleLine1: 'INSTANT',
            titleLine2: 'PROPERTY SEARCH',
            subLine1: 'DISCOVER HOMES AND APARTMENTS',
            subLine2: 'WITH JUST A FEW CLICKS',
            isDark: false,
        },
        {
            id: 'verified-listings',
            titleLine1: 'VERIFIED',
            titleLine2: 'PRO LISTINGS',
            subLine1: '100% VERIFIED AND UPDATED PROPERTY',
            subLine2: 'DETAILS',
            isDark: true,
        },
        {
            id: 'investing-insights',
            titleLine1: 'SMART',
            titleLine2: 'INVESTING INSIGHTS',
            subLine1: 'PERSONALIZED RECOMMENDATIONS TO',
            subLine2: 'GROW YOUR WEALTH',
            isDark: false,
        },
        {
            id: 'real-time-updates',
            titleLine1: 'REAL TIME',
            titleLine2: 'PROPERTY UPDATES',
            subLine1: 'GET INSTANT ALERTS ON NEW LISTINGS',
            subLine2: 'AND PRICE CHANGES',
            isDark: false,
        },
    ];

    return (
        <section
            id="features"
            className="relative w-full bg-[#EFF1F3] text-[#111317] px-4 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-[#D6DAE0]/70"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                    {/* LEFT COLUMN: 4 Feature Cards Stack (matching design_ref.png) */}
                    <div className="lg:col-span-6 flex flex-col justify-between gap-3.5">
                        {features.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => onCardClick?.(`${item.titleLine1} ${item.titleLine2}`)}
                                className={`relative p-5 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer group flex flex-col justify-between min-h-[110px] sm:min-h-[120px] ${
                                    item.isDark
                                        ? 'bg-[#111317] text-white shadow-xl hover:bg-black border border-neutral-800'
                                        : 'bg-white text-[#111317] border border-[#D9DDE2] shadow-2xs hover:shadow-md hover:border-neutral-400'
                                }`}
                            >
                                {/* Top Row: Title (Aligned right) and Cyan Arrow (exact match to design_ref.png) */}
                                <div className="flex items-start justify-end gap-3 text-right">
                                    <div className="leading-tight">
                                        <div
                                            className={`font-display font-light text-sm sm:text-base tracking-[0.12em] uppercase ${
                                                item.isDark ? 'text-white' : 'text-[#111317]'
                                            }`}
                                        >
                                            {item.titleLine1}
                                        </div>
                                        <div
                                            className={`font-display font-light text-sm sm:text-base tracking-[0.12em] uppercase ${
                                                item.isDark ? 'text-white' : 'text-[#111317]'
                                            }`}
                                        >
                                            {item.titleLine2}
                                        </div>
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-[#38BDF8] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                                </div>

                                {/* Bottom Row: Subtitle (Aligned left, exact match to design_ref.png) */}
                                <div className="mt-3 text-left leading-snug">
                                    <div
                                        className={`text-[9px] sm:text-[10px] font-medium tracking-[0.18em] uppercase ${
                                            item.isDark ? 'text-[#8E95A2]' : 'text-[#8E95A2]'
                                        }`}
                                    >
                                        {item.subLine1}
                                    </div>
                                    <div
                                        className={`text-[9px] sm:text-[10px] font-medium tracking-[0.18em] uppercase ${
                                            item.isDark ? 'text-[#8E95A2]' : 'text-[#8E95A2]'
                                        }`}
                                    >
                                        {item.subLine2}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: Matching Architectural Visual (clean modular pod architecture) */}
                    <div className="lg:col-span-6 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D9DDE2] bg-[#E2E6EB] shadow-sm group min-h-[380px] sm:min-h-[460px] lg:min-h-[500px] h-full flex items-center justify-center">
                        <img
                            src="/images/modular_feature_clean.png"
                            alt="City Arcade Modular Glass Architecture Feature View"
                            className="w-full h-full object-cover object-[center_35%] group-hover:scale-102 transition-transform duration-700 ease-out"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
