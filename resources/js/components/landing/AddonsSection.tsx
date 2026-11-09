import { useState } from 'react';
import { Utensils, Car, Clock, Plus, Check, Sparkles, ArrowRight } from 'lucide-react';
import { AddonItem } from '@/types/hotel';

export const ADDONS_DATA: AddonItem[] = [
    {
        id: 'breakfast',
        name: 'Daily Gourmet Breakfast',
        priceUsd: 12,
        priceType: 'per_person',
        description: 'Start every morning well with artisanal Khmer coffee, fresh tropical fruits, pastries, and chef-prepared hot dishes.',
    },
    {
        id: 'airport-transfer',
        name: 'VIP Airport Transfer',
        priceUsd: 25,
        priceType: 'per_stay',
        description: 'Skip the taxi queues. A private chilled vehicle with dedicated driver awaits you at Phnom Penh International.',
    },
    {
        id: 'late-checkout',
        name: 'Late Check-out (until 16:00)',
        priceUsd: 20,
        priceType: 'per_stay',
        description: 'Sleep in or explore the city without rushing. Keep your room relaxed until late afternoon on departure day.',
    },
];

interface AddonsSectionProps {
    onBookClick?: () => void;
}

export function AddonsSection({ onBookClick }: AddonsSectionProps) {
    const [selectedAddons, setSelectedAddons] = useState<string[]>(['breakfast']);

    const icons = {
        breakfast: Utensils,
        'airport-transfer': Car,
        'late-checkout': Clock,
    };

    const toggleAddon = (id: string) => {
        setSelectedAddons((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <section id="addons" className="w-full bg-[#F5F2EB] text-[#1E1B18] py-20 sm:py-28 border-b border-[#EAE3D6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="max-w-3xl mb-14">
                    <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C29062] font-semibold block mb-3">
                        Make It Yours
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-[#1E1B18] mb-4">
                        Small extras, big difference
                    </h2>
                    <p className="text-base sm:text-lg text-[#6B6359] font-light leading-relaxed">
                        Tailor your reservation seamlessly during checkout. All add-ons are itemized with transparent pricing and zero surprise resort fees.
                    </p>
                </div>

                {/* Addons Grid / Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
                    {ADDONS_DATA.map((addon) => {
                        const Icon = icons[addon.id as keyof typeof icons] || Plus;
                        const isSelected = selectedAddons.includes(addon.id);

                        return (
                            <div
                                key={addon.id}
                                onClick={() => toggleAddon(addon.id)}
                                className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                                    isSelected
                                        ? 'bg-white border-[#C29062] shadow-xl ring-2 ring-[#C29062]/20 -translate-y-1'
                                        : 'bg-white/80 border-[#E7DFD3] hover:border-[#C29062]/50 hover:bg-white shadow-sm'
                                }`}
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div
                                            className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                                                isSelected
                                                    ? 'bg-[#C29062] text-white shadow-md'
                                                    : 'bg-[#C29062]/10 text-[#C29062] group-hover:bg-[#C29062]/20'
                                            }`}
                                        >
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="text-right">
                                            <span className="text-2xl font-serif font-bold text-[#1E1B18]">
                                                ${addon.priceUsd}
                                            </span>
                                            {addon.priceType === 'per_person' ? (
                                                <span className="text-xs text-[#8C8275] block font-mono">per person/night</span>
                                            ) : (
                                                <span className="text-xs text-[#8C8275] block font-mono">per stay</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 mb-2">
                                        <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1E1B18]">
                                            {addon.name}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-[#6B6359] font-light leading-relaxed mb-6">
                                        {addon.description}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-[#F2ECE1] flex items-center justify-between text-xs font-mono">
                                    <div className="flex items-center gap-1.5 text-[#5C5449]">
                                        <div
                                            className={`w-4 h-4 rounded-full flex items-center justify-center border text-white transition-colors ${
                                                isSelected ? 'bg-[#C29062] border-[#C29062]' : 'border-[#CCC3B3]'
                                            }`}
                                        >
                                            {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                                        </div>
                                        <span>{isSelected ? 'Selected for Stay' : 'Click to preview'}</span>
                                    </div>
                                    <span className="text-[#C29062] font-semibold">Instant confirmation</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Table View for Complete Pricing Transparency */}
                <div className="bg-white rounded-3xl border border-[#E7DFD3] overflow-hidden shadow-sm">
                    <div className="px-6 sm:px-8 py-4 bg-[#EFEBE4] border-b border-[#E0D8CB] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#C29062]" />
                            <h4 className="font-serif font-bold text-sm uppercase tracking-wider text-[#3D372F]">
                                Add-on Pricing Breakdown
                            </h4>
                        </div>
                        <span className="text-xs font-mono text-[#736A5E]">All prices in USD (KHR calculated at checkout)</span>
                    </div>

                    <div className="divide-y divide-[#F2ECE1]">
                        <div className="px-6 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm">
                            <div>
                                <span className="font-serif font-semibold text-[#1E1B18] block">Daily Gourmet Breakfast</span>
                                <span className="text-xs text-[#8C8275]">Served daily 07:00 – 10:30 at the Courtyard Cafe</span>
                            </div>
                            <div className="text-right font-mono text-sm font-semibold text-[#1E1B18]">
                                $12.00 <span className="text-xs font-normal text-[#8C8275]">/ guest / night</span>
                            </div>
                        </div>

                        <div className="px-6 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm">
                            <div>
                                <span className="font-serif font-semibold text-[#1E1B18] block">VIP Airport Transfer</span>
                                <span className="text-xs text-[#8C8275]">Includes meet-and-greet flight tracking at Phnom Penh Airport</span>
                            </div>
                            <div className="text-right font-mono text-sm font-semibold text-[#1E1B18]">
                                $25.00 <span className="text-xs font-normal text-[#8C8275]">flat fee per vehicle</span>
                            </div>
                        </div>

                        <div className="px-6 sm:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm">
                            <div>
                                <span className="font-serif font-semibold text-[#1E1B18] block">Late Check-out Privilege</span>
                                <span className="text-xs text-[#8C8275]">Guaranteed 16:00 checkout with pool & shower access</span>
                            </div>
                            <div className="text-right font-mono text-sm font-semibold text-[#1E1B18]">
                                $20.00 <span className="text-xs font-normal text-[#8C8275]">per stay</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
