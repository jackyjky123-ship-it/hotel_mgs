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
        <section className="relative w-full bg-[#EAECEF] text-[#0E1013] px-4 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-[#D9DDE2]">
            <div className="max-w-7xl mx-auto">
                {/* Header Section (matching design_ref.png) */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="inline-block px-3.5 py-1 rounded-full border border-neutral-400 text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-800">
                                Why Choose Us
                            </span>
                        </div>
                        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#0E1013]">
                            Why City Arcade?
                        </h2>
                    </div>

                    <div className="text-left md:text-right">
                        <p className="text-xs uppercase tracking-[0.22em] text-neutral-500 font-medium">
                            Stay updated with property valuations & trends
                        </p>
                    </div>
                </div>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {pillars.map((item, index) => (
                        <div
                            key={index}
                            className="p-6 sm:p-7 rounded-2xl bg-white border border-[#CCD1D8] shadow-sm hover:shadow-lg hover:border-neutral-400 transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-[#0E1013] group-hover:text-white transition-colors flex items-center justify-center text-neutral-800">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-400">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="font-display font-bold text-sm tracking-wider uppercase text-[#0E1013] mb-3 leading-snug">
                                    {item.title}
                                </h3>

                                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                                    {item.description}
                                </p>
                            </div>

                            <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                                <span className="text-[10px] uppercase tracking-widest font-semibold text-neutral-500">
                                    {item.metric}
                                </span>
                                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Architectural Bottom Feature Strip (matching design_ref.png) */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#CCD1D8] bg-[#0E1013] text-white shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                        <div className="lg:col-span-5 p-8 sm:p-12">
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
                                className="px-6 py-2.5 rounded-full bg-[#E5DBC7] hover:bg-white text-[#121316] font-semibold text-xs tracking-[0.2em] uppercase transition-all shadow-md"
                            >
                                Schedule Walkthrough
                            </button>
                        </div>

                        <div className="lg:col-span-7 h-56 sm:h-72 lg:h-full relative min-h-[220px]">
                            <img
                                src="/images/modular_building_bottom.png"
                                alt="City Arcade Architectural Details"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0E1013] via-transparent to-transparent hidden lg:block" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
