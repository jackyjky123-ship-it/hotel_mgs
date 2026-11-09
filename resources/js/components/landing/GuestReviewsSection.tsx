import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { GuestReview } from '@/types/hotel';

export const REVIEWS_DATA: GuestReview[] = [
    {
        quote:
            'The light in the Tropical Garden Villa is magical in the morning. Truly an oasis in Phnom Penh, and paying with ABA KHQR took literally ten seconds.',
        firstName: 'Sophie',
        country: 'France',
        roomName: 'Tropical Garden Villa',
        rating: 5,
    },
    {
        quote:
            'Impeccably clean, whisper-quiet air conditioning, and the rainfall shower is divine. Having direct guest checkout without creating an account was such a breath of fresh air.',
        firstName: 'David',
        country: 'Singapore',
        roomName: 'Deluxe King Room',
        rating: 5,
    },
    {
        quote:
            'Our family loved the loft space. The heritage wooden details blend effortlessly with modern comforts. The airport transfer was waiting right outside arrival.',
        firstName: 'Elena',
        country: 'Australia',
        roomName: 'Family Heritage Loft',
        rating: 5,
    },
];

export function GuestReviewsSection() {
    return (
        <section className="w-full bg-[#181614] text-[#F9F7F3] py-20 sm:py-28 border-b border-[#2C2825] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="max-w-2xl mb-14 sm:mb-16">
                    <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C29062] font-semibold block mb-3">
                        Guest Stories
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-4">
                        Kind words from our guests
                    </h2>
                    <p className="text-base text-[#B8AFA2] font-light leading-relaxed">
                        Quiet reflections and memorable stays from travelers who found their calm corner in Cambodia with us.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {REVIEWS_DATA.map((rev, idx) => (
                        <div
                            key={idx}
                            className="bg-[#231F1C] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#C29062]/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-1 text-[#C29062]">
                                        {[...Array(rev.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                    <Quote className="w-6 h-6 text-white/10 group-hover:text-[#C29062]/30 transition-colors" />
                                </div>

                                <p className="text-sm sm:text-base text-[#D5CEBF] font-light leading-relaxed italic mb-8">
                                    "{rev.quote}"
                                </p>
                            </div>

                            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#C29062]/20 text-[#D4A373] flex items-center justify-center font-serif font-bold text-sm border border-[#C29062]/30">
                                        {rev.firstName.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-serif font-semibold text-sm text-white flex items-center gap-1.5">
                                            <span>{rev.firstName}</span>
                                            <span className="text-[10px] text-white/40">({rev.country})</span>
                                        </div>
                                        <span className="text-xs font-mono text-[#D4A373] block">
                                            {rev.roomName}
                                        </span>
                                    </div>
                                </div>

                                <div className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    <span>Verified</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
