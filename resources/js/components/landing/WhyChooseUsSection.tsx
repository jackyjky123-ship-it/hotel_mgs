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
        <section
            id="why-us"
            className="relative w-full bg-[#EFF1F3] text-[#111317] px-4 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-[#D6DAE0]/70"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Banner Card (exact match to design_ref.png) */}
                <div className="w-full rounded-2xl sm:rounded-3xl bg-[#CED2D8]/70 border border-[#BFC5CE] p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16 shadow-xs overflow-hidden relative">
                    {/* Left: Building Corner + Caption */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 z-10">
                        <div className="w-[190px] sm:w-[240px] h-[95px] sm:h-[110px] rounded-xl overflow-hidden shadow-xs flex-shrink-0 bg-neutral-200 border border-white/60">
                            <img
                                src="/images/modular_building_bottom.png"
                                alt="City Arcade Architectural Structure"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.22em] text-[#555B66] font-semibold leading-relaxed">
                            <span>Stay updated with property</span>
                            <br />
                            <span>valuations & trends</span>
                        </div>
                    </div>

                    {/* Right: "WHY CITYARCEDE?" & "WHY CHOOSE US" */}
                    <div className="flex flex-col items-start lg:items-end text-left lg:text-right z-10">
                        <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-[#111317] leading-[0.92] select-none">
                            <span className="block font-light">WHY</span>
                            <span className="block font-light">CITYARCEDE?</span>
                        </h2>
                        <div className="mt-3">
                            <span className="inline-block px-3.5 py-1 rounded-full border border-neutral-400 bg-white/70 text-[9px] uppercase tracking-[0.22em] font-medium text-neutral-800 shadow-2xs">
                                Why Choose Us
                            </span>
                        </div>
                    </div>
                </div>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
                    {pillars.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-white border border-[#D9DDE2] shadow-2xs hover:shadow-md hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-9 h-9 rounded-xl bg-neutral-100 group-hover:bg-[#111317] group-hover:text-white transition-colors flex items-center justify-center text-neutral-800">
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="font-display font-light text-sm tracking-wider uppercase text-[#111317] mb-2.5 leading-snug">
                                    {item.title}
                                </h3>

                                <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                                    {item.description}
                                </p>
                            </div>

                            <div className="pt-5 mt-5 border-t border-neutral-100 flex items-center justify-between">
                                <span className="text-[9px] uppercase tracking-widest font-semibold text-neutral-400">
                                    {item.metric}
                                </span>
                                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Masterpiece Collection Banner */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#D9DDE2] bg-[#111317] text-white shadow-xl">
                    <div className="p-8 sm:p-12 max-w-2xl">
                        <span className="inline-block px-3 py-1 rounded-full border border-amber-300/30 bg-amber-400/10 text-amber-200 text-[9px] uppercase tracking-[0.25em] font-semibold mb-4">
                            Masterpiece Collection
                        </span>
                        <h3 className="font-display font-light text-2xl sm:text-3xl uppercase tracking-tight text-white mb-3 leading-tight">
                            Crafted for Visionaries & Collectors
                        </h3>
                        <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6">
                            Experience architecture that blurs the boundary between living sculpture and natural habitat. Schedule a private walkthrough of our signature suites.
                        </p>
                        <button
                            onClick={onOpenEnquiry}
                            className="px-6 py-2.5 rounded-full bg-[#E5DBC7] hover:bg-white text-[#121316] font-semibold text-xs tracking-[0.2em] uppercase transition-all shadow-md active:scale-95"
                        >
                            Schedule Walkthrough
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
