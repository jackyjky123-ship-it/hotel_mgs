import { Search, BedDouble, QrCode, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';

export function HowBookingWorksSection() {
    const steps = [
        {
            num: '01',
            icon: Search,
            title: 'Search.',
            detail: 'Pick your check-in dates and number of guests.',
        },
        {
            num: '02',
            icon: BedDouble,
            title: 'Choose.',
            detail: 'Select your curated room and customize optional add-ons.',
        },
        {
            num: '03',
            icon: QrCode,
            title: 'Pay.',
            detail: 'Enter your basic details and scan the KHQR code with ABA Mobile.',
        },
        {
            num: '04',
            icon: CheckCircle2,
            title: 'Done.',
            detail: 'Your confirmation and digital check-in QR voucher appear instantly.',
        },
    ];

    return (
        <section id="how-it-works" className="w-full bg-[#141210] text-[#F9F7F3] py-20 sm:py-28 border-b border-[#2C2825] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="max-w-2xl mb-16">
                    <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C29062] font-semibold block mb-3">
                        Seamless Guest Experience
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-4">
                        Reserve in four simple steps
                    </h2>
                    <p className="text-base text-[#B8AFA2] font-light leading-relaxed">
                        No password setup, no redirect hoops. Designed from start to finish for an effortless direct booking experience.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={idx}
                                className="relative p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] hover:border-[#C29062]/40 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <span className="text-3xl sm:text-4xl font-serif font-bold text-[#C29062]/60 group-hover:text-[#C29062] transition-colors">
                                        {step.num}
                                    </span>
                                    <div className="w-12 h-12 rounded-2xl bg-[#C29062]/10 text-[#D4A373] flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-serif font-bold text-xl text-white mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-[#A89F93] leading-relaxed font-light">
                                        {step.detail}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
