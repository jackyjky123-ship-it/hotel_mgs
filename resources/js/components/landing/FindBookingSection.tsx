import { useState } from 'react';
import { Search, TicketCheck, Copy, Check, Printer, X, Calendar, User, Phone, Mail, QrCode, Sparkles, Building2 } from 'lucide-react';

export function FindBookingSection() {
    const [bookingCode, setBookingCode] = useState('');
    const [identifier, setIdentifier] = useState('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [copiedCode, setCopiedCode] = useState(false);
    const [foundReservation, setFoundReservation] = useState<{
        bookingCode: string;
        roomName: string;
        guestName: string;
        guestEmail: string;
        guestPhone: string;
        checkIn: string;
        checkOut: string;
        nights: number;
        addons: string[];
        status: string;
        paidAmount: string;
    } | null>(null);

    // Pre-seeded demo booking for instant testing
    const handleTryDemo = () => {
        setBookingCode('HTL-8X9K2P');
        setIdentifier('guest@example.com');
        setErrorMessage(null);
    };

    const handleLookup = (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage(null);

        const cleanCode = bookingCode.trim().toUpperCase();
        const cleanIdent = identifier.trim().toLowerCase();

        // Check demo or valid pattern
        if (cleanCode === 'HTL-8X9K2P' || (cleanCode.startsWith('HTL-') && cleanIdent.length > 3)) {
            setFoundReservation({
                bookingCode: cleanCode,
                roomName: 'Deluxe King Room',
                guestName: 'Sokha Meng',
                guestEmail: cleanIdent.includes('@') ? cleanIdent : 'sokha.meng@example.com',
                guestPhone: cleanIdent.includes('@') ? '+855 12 345 678' : cleanIdent,
                checkIn: '2026-11-20',
                checkOut: '2026-11-22',
                nights: 2,
                addons: ['Daily Gourmet Breakfast (2 Persons)', 'VIP Airport Transfer'],
                status: 'Confirmed',
                paidAmount: '$169.40 (694,540 ៛)',
            });
        } else {
            setFoundReservation(null);
            // Exact microcopy requirement
            setErrorMessage("We couldn’t find a booking matching those details. Please check and try again.");
        }
    };

    const handleCopy = (code: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2500);
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <section id="find-booking" className="w-full bg-[#F5F2EB] text-[#1E1B18] py-20 sm:py-28 border-b border-[#EAE3D6]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C29062]/10 text-[#A87243] text-xs font-mono uppercase tracking-[0.2em] font-semibold mb-3">
                        <TicketCheck className="w-3.5 h-3.5" />
                        <span>Self-Service Portal</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold tracking-tight text-[#1E1B18] mb-4">
                        Already booked?
                    </h2>
                    <p className="text-base text-[#6B6359] font-light leading-relaxed">
                        Look up your reservation with your booking code and the email or phone number you used. View your stay details, add-ons, and download your voucher anytime.
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E7DFD3] shadow-md mb-8">
                    <form onSubmit={handleLookup} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {/* Booking Code */}
                            <div>
                                <label className="block text-xs font-mono font-medium uppercase tracking-wider text-[#736A5E] mb-2">
                                    Booking Code (e.g. HTL-8X9K2P)
                                </label>
                                <input
                                    type="text"
                                    value={bookingCode}
                                    onChange={(e) => {
                                        setBookingCode(e.target.value);
                                        setErrorMessage(null);
                                    }}
                                    placeholder="HTL-8X9K2P"
                                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF8F5] border border-[#DDD5C7] text-sm font-mono text-[#1E1B18] focus:outline-none focus:border-[#C29062] uppercase tracking-wider transition-colors"
                                    required
                                />
                            </div>

                            {/* Email or Phone */}
                            <div>
                                <label className="block text-xs font-mono font-medium uppercase tracking-wider text-[#736A5E] mb-2">
                                    Email Address or Phone
                                </label>
                                <input
                                    type="text"
                                    value={identifier}
                                    onChange={(e) => {
                                        setIdentifier(e.target.value);
                                        setErrorMessage(null);
                                    }}
                                    placeholder="guest@example.com or +855 12 345 678"
                                    className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF8F5] border border-[#DDD5C7] text-sm text-[#1E1B18] focus:outline-none focus:border-[#C29062] transition-colors"
                                    required
                                />
                            </div>
                        </div>

                        {/* Error Message */}
                        {errorMessage && (
                            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm animate-fadeIn">
                                {errorMessage}
                            </div>
                        )}

                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                            {/* Demo Shortcut */}
                            <button
                                type="button"
                                onClick={handleTryDemo}
                                className="text-xs font-mono text-[#C29062] hover:text-[#A87243] underline transition-colors"
                            >
                                Fill Demo Booking (HTL-8X9K2P)
                            </button>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-[#1E1B18] hover:bg-[#C29062] text-white hover:text-[#141210] font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                            >
                                <Search className="w-4 h-4" />
                                <span>Look Up Booking</span>
                            </button>
                        </div>
                    </form>
                </div>

                {/* Found Reservation Display: Digital Voucher Pass */}
                {foundReservation && (
                    <div className="bg-white rounded-3xl border border-[#E0D7C9] shadow-2xl overflow-hidden animate-fadeIn">
                        {/* Voucher Header Banner */}
                        <div className="bg-[#141210] text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2C2825]">
                            <div className="flex items-center gap-3.5">
                                <div className="w-10 h-10 rounded-xl bg-[#C29062] text-[#141210] flex items-center justify-center font-serif font-black text-xl">
                                    P
                                </div>
                                <div>
                                    <span className="font-serif font-bold text-lg text-white block">
                                        PuKy Boutique Hotel Voucher
                                    </span>
                                    <span className="text-xs font-mono text-[#D4A373] tracking-widest uppercase">
                                        Confirmed Digital Pass
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                                    ● {foundReservation.status}
                                </div>
                                <button
                                    onClick={handlePrint}
                                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                                    title="Print / Save Voucher"
                                >
                                    <Printer className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Voucher Body Details */}
                        <div className="p-6 sm:p-8 space-y-6">
                            {/* Booking Code Callout */}
                            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D6] flex items-center justify-between">
                                <div>
                                    <span className="text-xs font-mono text-[#736A5E] block uppercase tracking-wider">
                                        Booking Confirmation Code
                                    </span>
                                    <span className="text-2xl font-mono font-bold text-[#1E1B18] tracking-widest">
                                        {foundReservation.bookingCode}
                                    </span>
                                </div>
                                <button
                                    onClick={() => handleCopy(foundReservation.bookingCode)}
                                    className="px-4 py-2 rounded-xl bg-[#1E1B18] hover:bg-[#C29062] text-white hover:text-[#141210] text-xs font-mono flex items-center gap-2 transition-all"
                                >
                                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                                    <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                                </button>
                            </div>

                            {/* Details Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
                                <div className="p-3.5 rounded-xl bg-[#F7F4EE] border border-[#EBE4D8]">
                                    <span className="text-[#8C8275] block mb-1">Room Reserved</span>
                                    <span className="font-serif font-bold text-sm text-[#1E1B18] block">
                                        {foundReservation.roomName}
                                    </span>
                                </div>
                                <div className="p-3.5 rounded-xl bg-[#F7F4EE] border border-[#EBE4D8]">
                                    <span className="text-[#8C8275] block mb-1">Guest Name</span>
                                    <span className="font-serif font-bold text-sm text-[#1E1B18] block">
                                        {foundReservation.guestName}
                                    </span>
                                </div>
                                <div className="p-3.5 rounded-xl bg-[#F7F4EE] border border-[#EBE4D8]">
                                    <span className="text-[#8C8275] block mb-1">Stay Period</span>
                                    <span className="font-bold text-[#1E1B18] block">
                                        {foundReservation.checkIn} → {foundReservation.checkOut}
                                    </span>
                                </div>
                                <div className="p-3.5 rounded-xl bg-[#F7F4EE] border border-[#EBE4D8]">
                                    <span className="text-[#8C8275] block mb-1">Total Paid (KHQR)</span>
                                    <span className="font-bold text-[#C29062] block">
                                        {foundReservation.paidAmount}
                                    </span>
                                </div>
                            </div>

                            {/* Addons List */}
                            {foundReservation.addons.length > 0 && (
                                <div className="p-4 rounded-2xl bg-white border border-[#EAE3D6]">
                                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#736A5E] block mb-2">
                                        Included Add-ons:
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {foundReservation.addons.map((add, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-xl bg-[#FAF6EE] text-[#5C5449] text-xs font-medium border border-[#EFE5D5]"
                                            >
                                                ✓ {add}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Check-in instructions */}
                            <div className="pt-4 border-t border-[#F2ECE1] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#736A5E]">
                                <p>
                                    Present this voucher or show your booking code upon arrival at our front desk on Street 240, Daun Penh.
                                </p>
                                <button
                                    onClick={handlePrint}
                                    className="px-5 py-2.5 rounded-xl bg-[#FAF6EE] hover:bg-[#F2ECE1] text-[#1E1B18] font-mono font-semibold uppercase text-xs shrink-0 flex items-center gap-2 border border-[#E2D8C9]"
                                >
                                    <Printer className="w-4 h-4 text-[#C29062]" />
                                    <span>Print / Save Voucher</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
