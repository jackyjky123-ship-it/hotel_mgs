import { Sparkles, Shield, Wifi, Anchor, ArrowUpRight } from 'lucide-react';

interface WhyChooseUsSectionProps {
    onOpenEnquiry?: () => void;
}

export function WhyChooseUsSection({ onOpenEnquiry }: WhyChooseUsSectionProps) {
    const pillars = [
        {
            title: 'BIOPHILIC LIVING TERRACES',
            description:
                'Every suite features automated vertical micro-gardens, cantilevered shaded decks, and continuous natural airflow architecture.',
            icon: Sparkles,
            metric: '40% Less Carbon',
        },
        {
            title: 'VERIFIED DEED & TITLE TRANSPARENCY',
            description:
                'Instant property ownership verification, smart escrow contracts, and full valuation audit reports.',
            icon: Shield,
            metric: '100% Guaranteed',
        },
        {
            title: 'INTELLIGENT SUITE ECOSYSTEM',
            description:
                'Automated circadian lighting, acoustic attenuation walls, and passkey biometric access controls.',
            icon: Wifi,
            metric: 'Smart Home IoT',
        },
        {
            title: 'PRIVATE MARINA & HELIPORT',
            description:
                'Direct deep-water yacht moorings and 24/7 dedicated air transfers connecting to metropolitan hubs.',
            icon: Anchor,
            metric: 'Direct Access',
        },
    ];

    return (
        <section id="why-us" className="relative w-full bg-[#0B0D11] text-white px-4 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-white/[0.06]">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
                    <div>
                        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-amber-200/90 font-medium block mb-2">
                            DISTINCTION · 03
                        </span>
                        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
                            Why City Arcade?
                        </h2>
                    </div>

                    <div className="text-left md:text-right">
                        <p className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-light">
                            Engineered for permanence, biophilic wellness, and digital certainty
                        </p>
                    </div>
                </div>

                {/* 4 Pillars Grid (Clean Modern Frosted Obsidian Cards) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 sm:mb-16">
                    {pillars.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 shadow-sm hover:shadow-xl hover:bg-white/[0.06] hover:border-amber-300/40 transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#E5DBC7] group-hover:text-[#121316] transition-colors flex items-center justify-center text-amber-200">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="font-display font-bold text-sm tracking-wider uppercase text-white mb-3 leading-snug">
                                    {item.title}
                                </h3>

                                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </div>

                            <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                                <span className="text-[10px] uppercase tracking-widest font-semibold text-neutral-300">
                                    {item.metric}
                                </span>
                                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Architectural Masterpiece Banner (Replaces redundant graphic with authentic 3D hotel night visual) */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#10131A] text-white shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                        <div className="lg:col-span-5 p-8 sm:p-12 relative z-10">
                            <span className="inline-block px-3 py-1 rounded-full border border-amber-300/30 bg-amber-400/10 text-amber-200 text-[10px] uppercase tracking-[0.25em] font-semibold mb-4">
                                Masterpiece Collection
                            </span>
                            <h3 className="font-display font-bold text-2xl sm:text-3xl uppercase tracking-tight text-white mb-3 leading-tight">
                                Crafted for Visionaries & Collectors
                            </h3>
                            <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6">
                                Experience architecture that blurs the boundary between living sculpture and natural habitat. Schedule a private walkthrough of Villa Aurora.
                            </p>
                            <button
                                onClick={onOpenEnquiry}
                                className="px-6 py-2.5 rounded-full bg-[#E5DBC7] hover:bg-white text-[#121316] font-semibold text-xs tracking-[0.2em] uppercase transition-all shadow-md active:scale-95"
                            >
                                Schedule Walkthrough
                            </button>
                        </div>

                        <div className="lg:col-span-7 h-64 sm:h-80 lg:h-full relative min-h-[260px] overflow-hidden">
                            <img
                                src="/images/3d_hotel_night.png"
                                alt="Amāli Island Illuminated Architectural Hotel at Night"
                                className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            {/* Seamless gradient blend between copy and 3D hotel visual */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#10131A] via-[#10131A]/60 to-transparent hidden lg:block" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#10131A] via-transparent to-transparent lg:hidden" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
