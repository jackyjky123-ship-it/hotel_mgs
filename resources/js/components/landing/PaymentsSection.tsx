import { useState } from 'react';
import { QrCode, Smartphone, Zap, Check, ArrowRight, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

export function PaymentsSection() {
    const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'KHR'>('USD');

    return (
        <section id="payments" className="w-full bg-[#FAF8F5] text-[#1E1B18] py-20 sm:py-28 border-b border-[#EAE3D6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left Column: Copy & Details */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C29062]/10 text-[#A87243] text-xs font-mono uppercase tracking-[0.2em] font-semibold mb-3">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Transparent Hospitality</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-[#1E1B18] mb-6">
                            Clear prices. Local payments.
                        </h2>
                        <p className="text-base sm:text-lg text-[#6B6359] font-light leading-relaxed mb-8">
                            Room prices are shown net with no hidden resort fees. At checkout you will see your transparent breakdown: room rate, chosen add-ons, 10% Cambodian VAT, and your grand total itemized in both US Dollars and Cambodian Riel.
                        </p>

                        {/* Pay Your Way List */}
                        <div className="space-y-4 mb-8">
                            <h3 className="font-serif font-bold text-lg text-[#1E1B18]">
                                Pay your way:
                            </h3>
                            <div className="space-y-3.5">
                                <div className="flex items-start gap-3.5">
                                    <div className="w-6 h-6 rounded-full bg-[#C29062]/15 text-[#C29062] flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-sm sm:text-base text-[#474036]">
                                        Pay in USD or KHR via KHQR
                                    </span>
                                </div>
                                <div className="flex items-start gap-3.5">
                                    <div className="w-6 h-6 rounded-full bg-[#C29062]/15 text-[#C29062] flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-sm sm:text-base text-[#474036]">
                                        Scan in-app or tap Open ABA Mobile on your phone
                                    </span>
                                </div>
                                <div className="flex items-start gap-3.5">
                                    <div className="w-6 h-6 rounded-full bg-[#C29062]/15 text-[#C29062] flex items-center justify-center shrink-0 mt-0.5">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-sm sm:text-base text-[#474036]">
                                        Payment is detected automatically and your booking confirms on the spot
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Exchange Rate Note Box */}
                        <div className="p-4 sm:p-5 rounded-2xl bg-[#EFECE5] border border-[#E0D8CB] text-xs sm:text-sm font-mono text-[#5C5449]">
                            <span className="font-bold text-[#1E1B18] block mb-1">Exchange rate note:</span>
                            Riel amounts are calculated at today’s rate (1 USD ≈ 4,100 ៛) and rounded to a whole Riel.
                        </div>
                    </div>

                    {/* Right Column: Visual Card Demonstration */}
                    <div className="lg:col-span-5">
                        <div className="bg-[#141210] text-white rounded-3xl p-6 sm:p-8 border border-[#2C2825] shadow-2xl relative overflow-hidden">
                            {/* Decorative ambient badge */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C29062]/10 rounded-full blur-3xl pointer-events-none" />

                            <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-lg bg-[#E8353A] text-white flex items-center justify-center font-bold text-xs tracking-wider shadow">
                                        ABA
                                    </div>
                                    <span className="font-serif font-bold text-sm sm:text-base tracking-wide">
                                        Bakong KHQR
                                    </span>
                                </div>
                                <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 font-mono text-[10px] tracking-wider uppercase border border-emerald-500/30">
                                    Instant Detection
                                </span>
                            </div>

                            {/* Currency Switcher */}
                            <div className="flex justify-center mb-6">
                                <div className="inline-flex p-1 rounded-full bg-white/[0.08] border border-white/10 text-xs font-mono">
                                    <button
                                        type="button"
                                        onClick={() => setSelectedCurrency('USD')}
                                        className={`px-4 py-1.5 rounded-full transition-all ${
                                            selectedCurrency === 'USD'
                                                ? 'bg-[#C29062] text-[#141210] font-bold shadow'
                                                : 'text-[#C6BEB2] hover:text-white'
                                        }`}
                                    >
                                        USD ($)
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedCurrency('KHR')}
                                        className={`px-4 py-1.5 rounded-full transition-all ${
                                            selectedCurrency === 'KHR'
                                                ? 'bg-[#C29062] text-[#141210] font-bold shadow'
                                                : 'text-[#C6BEB2] hover:text-white'
                                        }`}
                                    >
                                        KHR (៛)
                                    </button>
                                </div>
                            </div>

                            {/* Simulated Bakong KHQR Preview Card */}
                            <div className="bg-white rounded-2xl p-6 text-[#141210] text-center shadow-inner relative overflow-hidden group">
                                <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1">
                                    PuKy Boutique Hotel
                                </div>
                                <div className="text-xl sm:text-2xl font-serif font-bold text-[#141210] mb-4">
                                    {selectedCurrency === 'USD' ? '$143.00 USD' : '586,300 ៛ KHR'}
                                </div>

                                {/* QR Code Graphic with Scan Animation */}
                                <div className="relative w-44 h-44 mx-auto p-3 rounded-xl bg-neutral-50 border-2 border-[#E8353A]/30 flex items-center justify-center mb-4">
                                    <QrCode className="w-full h-full text-[#141210]" />
                                    {/* Laser scan line effect */}
                                    <div className="absolute inset-x-2 h-0.5 bg-gradient-to-r from-transparent via-[#E8353A] to-transparent animate-pulse top-1/2" />
                                </div>

                                <div className="text-[11px] font-mono text-neutral-600">
                                    Scan with ABA Mobile or any Bakong KHQR app
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="mt-6">
                                <a
                                    href="#rooms"
                                    className="w-full py-3.5 px-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/10 text-white font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                                >
                                    <Smartphone className="w-4 h-4 text-[#D4A373]" />
                                    <span>Try Instant Booking Experience</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
