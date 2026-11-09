import { useState, useEffect } from 'react';
import { Clock, ShieldAlert, RefreshCw, Lock, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

export function HoldingRoomSection() {
    // 15 minute countdown demonstration (15 * 60 = 900 seconds)
    const [secondsLeft, setSecondsLeft] = useState(874); // Starts around 14:34 for realistic demo
    const [isExpired, setIsExpired] = useState(false);

    useEffect(() => {
        if (isExpired) return;

        const timer = setInterval(() => {
            setSecondsLeft((prev) => {
                if (prev <= 1) {
                    setIsExpired(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [isExpired]);

    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // SVG Circular progress computation
    const totalSeconds = 900;
    const progressPercent = (secondsLeft / totalSeconds) * 100;
    const strokeDashoffset = 283 - (283 * progressPercent) / 100;

    const handleSimulateExpiry = () => {
        setSecondsLeft(0);
        setIsExpired(true);
    };

    const handleReset = () => {
        setSecondsLeft(900);
        setIsExpired(false);
    };

    return (
        <section className="w-full bg-[#181614] text-[#F9F7F3] py-20 sm:py-28 border-b border-[#2C2825] relative overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#C29062]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Left: Copy */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C29062]/15 text-[#D4A373] text-xs font-mono uppercase tracking-[0.2em] font-semibold mb-3">
                            <Lock className="w-3.5 h-3.5" />
                            <span>Inventory Lock Guarantee</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-white mb-6">
                            Your room is held while you pay
                        </h2>
                        <p className="text-base sm:text-lg text-[#D5CEBF] font-light leading-relaxed mb-8">
                            Once you proceed to payment, our database locks your room for 15 minutes. A live countdown shows your exact remaining window. If time elapses, the hold is safely released so others can book, and you can search again anytime.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#D0C7BC] font-mono">
                            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                <Lock className="w-5 h-5 text-[#C29062] shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-bold text-white block">Row-level Lock</span>
                                    <span className="text-[#A89F93] text-xs">Zero double-booking collision tolerance on PostgreSQL.</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                                <RefreshCw className="w-5 h-5 text-[#C29062] shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-bold text-white block">Automated Release</span>
                                    <span className="text-[#A89F93] text-xs">Expired holds release inventory back to search automatically.</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Live Interactive Countdown Widget Preview */}
                    <div className="lg:col-span-5">
                        <div className="bg-[#231F1C] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden text-center backdrop-blur-xl">
                            {/* Circular Countdown Ring */}
                            <div className="relative w-44 h-44 mx-auto mb-6 flex items-center justify-center">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                    {/* Track */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        className="text-white/10 stroke-current"
                                        strokeWidth="6"
                                        fill="transparent"
                                    />
                                    {/* Animated Progress Indicator */}
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="45"
                                        className={`stroke-current transition-all duration-1000 ease-linear ${
                                            isExpired ? 'text-rose-500' : 'text-[#C29062]'
                                        }`}
                                        strokeWidth="6"
                                        strokeDasharray="283"
                                        strokeDashoffset={strokeDashoffset}
                                        strokeLinecap="round"
                                        fill="transparent"
                                    />
                                </svg>

                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                    <Clock className={`w-5 h-5 mb-1 ${isExpired ? 'text-rose-400' : 'text-[#D4A373]'}`} />
                                    <span className="text-3xl font-mono font-bold text-white tracking-wider">
                                        {formattedTime}
                                    </span>
                                    <span className="text-[10px] font-mono text-[#A89F93] uppercase tracking-widest">
                                        {isExpired ? 'Expired' : 'Remaining'}
                                    </span>
                                </div>
                            </div>

                            <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#D4A373] block mb-2 font-semibold">
                                Live Concurrency Protection
                            </span>

                            {/* Microcopy message display */}
                            <div
                                className={`py-3.5 px-4 rounded-2xl border text-xs sm:text-sm font-mono mb-6 transition-all ${
                                    isExpired
                                        ? 'bg-rose-500/15 border-rose-500/40 text-rose-300'
                                        : 'bg-white/[0.05] border-white/10 text-[#D5CEBF]'
                                }`}
                            >
                                {isExpired
                                    ? 'This hold expired due to inactivity. Search again to pick your dates.'
                                    : `Room held for you: ${formattedTime}`}
                            </div>

                            {/* Interactive Demo Buttons */}
                            <div className="flex items-center justify-center gap-3">
                                {isExpired ? (
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="px-5 py-2.5 rounded-full bg-[#C29062] hover:bg-[#D4A373] text-[#141210] font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow"
                                    >
                                        Reset 15-Min Hold
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={handleSimulateExpiry}
                                        className="px-4 py-2 rounded-full border border-white/20 hover:border-white/40 text-[11px] font-mono text-[#D5CEBF] hover:text-white transition-all"
                                    >
                                        Test Expiry Microcopy
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
