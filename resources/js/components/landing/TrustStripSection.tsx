import { ShieldCheck, UserCheck, QrCode, TicketCheck } from 'lucide-react';

export function TrustStripSection() {
    const guarantees = [
        {
            icon: ShieldCheck,
            title: 'Book direct.',
            detail: 'Best rate guaranteed, straight from our hotel.',
        },
        {
            icon: UserCheck,
            title: 'No sign-up.',
            detail: 'Just your name, email, and phone number.',
        },
        {
            icon: QrCode,
            title: 'Pay with KHQR.',
            detail: 'Scan with ABA Mobile or any KHQR-enabled app.',
        },
        {
            icon: TicketCheck,
            title: 'Instant voucher.',
            detail: 'Digital pass and check-in QR in under two minutes.',
        },
    ];

    return (
        <section className="w-full bg-[#1B1815] text-[#F3EFEA] border-b border-[#2C2825] py-8 sm:py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {guarantees.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#C29062]/30 hover:bg-white/[0.05] transition-all duration-300 group"
                            >
                                <div className="w-11 h-11 rounded-xl bg-[#C29062]/15 text-[#D4A373] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#C29062]/25 transition-all">
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div className="space-y-1">
                                    <div className="font-serif font-semibold text-base text-white">
                                        {item.title}
                                    </div>
                                    <p className="text-xs sm:text-sm text-[#B8AFA2] leading-snug font-light">
                                        {item.detail}
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
