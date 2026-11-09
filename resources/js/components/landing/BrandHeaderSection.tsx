import { ArrowUpRight, Sparkles } from 'lucide-react';

interface BrandHeaderSectionProps {
    onOpenEnquiry: () => void;
    onSignIn?: () => void;
}

export function BrandHeaderSection({ onOpenEnquiry }: BrandHeaderSectionProps) {
    return (
        <section id="brand-story" className="relative w-full bg-[#0B0D11] text-white px-4 sm:px-8 lg:px-12 py-16 sm:py-24 border-t border-white/[0.06]">
            {/* Subtle atmospheric ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-radial from-amber-500/[0.04] to-transparent blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* SECTION PROLOGUE: Brand Narrative & Key Metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-14 sm:mb-16">
                    {/* Left Column: Pill Badge + Editorial Narrative */}
                    <div className="lg:col-span-4">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-amber-300/30 bg-amber-400/5 text-amber-200 text-[10px] uppercase tracking-[0.25em] font-semibold mb-4">
                            <Sparkles className="w-3 h-3 text-amber-300" />
                            <span>The Curation · City Arcade</span>
                        </div>
                        <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white leading-tight mb-4">
                            Where Sculptural Living Meets Digital Certainty
                        </h2>
                        <p className="text-xs text-neutral-400 tracking-wider leading-relaxed font-light uppercase">
                            City Arcade curates timeless architectural sanctuaries. From cantilevered biophilic terraces to verified smart escrow deeds, we redefine luxury living.
                        </p>
                    </div>

                    {/* Center Column: Grand Monogram Visual Accent */}
                    <div className="lg:col-span-4 text-center lg:text-left flex flex-col justify-end">
                        <div className="inline-block">
                            <span className="block font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-[-0.03em] uppercase text-white/90 leading-none">
                                CITY
                            </span>
                            <span className="block font-display font-black text-5xl sm:text-6xl lg:text-7xl tracking-[-0.03em] uppercase text-white/40 leading-none">
                                ARCADE
                            </span>
                        </div>
                    </div>

                    {/* Right Column: Key Distinction Metrics in Frosted Glass Cards */}
                    <div className="lg:col-span-4 grid grid-cols-3 gap-3 sm:gap-4">
                        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center backdrop-blur-sm">
                            <div className="font-display font-bold text-2xl sm:text-3xl text-amber-200 tracking-tight">
                                10K+
                            </div>
                            <div className="text-[9px] uppercase tracking-[0.18em] text-neutral-400 font-medium mt-1">
                                Residents
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center backdrop-blur-sm">
                            <div className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                                5K+
                            </div>
                            <div className="text-[9px] uppercase tracking-[0.18em] text-neutral-400 font-medium mt-1">
                                Properties
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center backdrop-blur-sm">
                            <div className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                                15+
                            </div>
                            <div className="text-[9px] uppercase tracking-[0.18em] text-neutral-400 font-medium mt-1">
                                Citations
                            </div>
                        </div>
                    </div>
                </div>

                {/* ARCHITECTURAL MODULAR BUILDING SHOWCASE (Clean, Unblemished Image) */}
                <div
                    onClick={onOpenEnquiry}
                    className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#11141D] border border-white/10 shadow-2xl group cursor-pointer"
                >
                    <img
                        src="/images/modular_building_clean.png"
                        alt="City Arcade Modular Glass Cube Architecture"
                        className="w-full h-[280px] sm:h-[400px] md:h-[480px] object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-105"
                    />

                    {/* Vignette Gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />

                    {/* Bottom-left Pill Badge (Clean interactive trigger) */}
                    <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 z-10">
                        <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-xl border border-white/20 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-xl transition-all">
                            <span>Modular Cantilevered Architecture · City Arcade</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-amber-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
