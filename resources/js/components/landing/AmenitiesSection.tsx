import { Wifi, ShowerHead, Tv, Coffee, SunDim, Sparkles, CheckCircle2 } from 'lucide-react';

export function AmenitiesSection() {
    const amenities = [
        {
            icon: Wifi,
            title: 'High-speed Wi-Fi.',
            description: 'Reliable fiber-optic connectivity throughout all rooms, suites, and public gardens.',
        },
        {
            icon: ShowerHead,
            title: 'Rainfall shower.',
            description: 'Custom ceramic tiles, high-pressure rainfall showerheads, and organic botanical amenities.',
        },
        {
            icon: Tv,
            title: 'Smart TV.',
            description: 'Ultra-HD display with AirPlay & Chromecast support to stream your personal favorites.',
        },
        {
            icon: Coffee,
            title: 'Espresso machine.',
            description: 'Freshly roasted regional beans with complimentary pods restocked each morning.',
        },
        {
            icon: SunDim,
            title: 'Private balcony.',
            description: 'Biophilic open-air terrace with lush foliage, crafted teak loungers, and city vistas.',
        },
    ];

    return (
        <section id="amenities" className="w-full bg-[#181614] text-[#F9F7F3] py-20 sm:py-28 border-y border-[#2C2825] relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C29062]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-14 sm:mb-16">
                    <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C29062] font-semibold block mb-3">
                        Thoughtful Details
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-4">
                        The little things, done well
                    </h2>
                    <p className="text-base text-[#B8AFA2] font-light leading-relaxed">
                        Designed for unhurried comfort, whether you are unwinding after exploring Phnom Penh’s riverside or waking up to a slow morning.
                    </p>
                </div>

                {/* Amenities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                    {amenities.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className="p-6 rounded-3xl bg-white/[0.03] border border-white/[0.08] hover:border-[#C29062]/40 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-[#C29062]/10 text-[#D4A373] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#C29062]/20 transition-all">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-serif font-bold text-base text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#A89F93] leading-relaxed font-light">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footnote */}
                <div className="flex items-center gap-2 text-xs text-[#8C8377] font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-[#C29062]" />
                    <span>Private balcony and terrace availability varies by room category. See Curated Stays for details.</span>
                </div>
            </div>
        </section>
    );
}
