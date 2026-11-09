import { ArrowUp, Calendar, Search, Sparkles } from 'lucide-react';

interface ClosingCtaSectionProps {
    onCheckAvailabilityClick: () => void;
}

export function ClosingCtaSection({ onCheckAvailabilityClick }: ClosingCtaSectionProps) {
    return (
        <section className="relative w-full bg-[#141210] text-[#F9F7F3] py-24 sm:py-32 overflow-hidden border-t border-[#2C2825]">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C29062]/12 rounded-full blur-[130px] pointer-events-none" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-xs font-mono uppercase tracking-[0.2em] text-[#D4A373] mb-6">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Direct Hospitality</span>
                </div>

                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white mb-6 leading-tight max-w-2xl mx-auto">
                    Your stay starts here.
                </h2>
                <p className="text-base sm:text-xl text-[#D5CEBF] font-light max-w-xl mx-auto mb-10 leading-relaxed">
                    Pick your travel dates, choose your favorite suite, and confirm your reservation with Bakong KHQR in under two minutes.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={onCheckAvailabilityClick}
                        className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#C29062] to-[#D4A373] hover:from-[#D4A373] hover:to-[#C29062] text-[#141210] font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all shadow-xl shadow-[#C29062]/20 active:scale-95"
                    >
                        <Search className="w-4 h-4" />
                        <span>Check Availability</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
