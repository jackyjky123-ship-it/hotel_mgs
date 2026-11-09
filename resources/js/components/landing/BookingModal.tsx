import { useState, useEffect } from 'react';
import {
    X,
    Calendar,
    Users,
    Clock,
    QrCode,
    Check,
    Copy,
    Printer,
    Smartphone,
    AlertCircle,
    ArrowRight,
    Sparkles,
    ShieldCheck,
    CheckCircle2,
    Building2,
    DollarSign,
} from 'lucide-react';
import { RoomTypeData } from '@/types/hotel';
import { ADDONS_DATA } from './AddonsSection';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialRoom?: RoomTypeData | null;
    initialDates?: { checkIn: string; checkOut: string; adults: number; children: number };
    exchangeRate?: number;
}

export function BookingModal({
    isOpen,
    onClose,
    initialRoom,
    initialDates,
    exchangeRate = 4100,
}: BookingModalProps) {
    if (!isOpen || !initialRoom) return null;

    const [step, setStep] = useState<'details' | 'payment' | 'confirmed'>('details');

    // Dates & Guests
    const checkInDate = initialDates?.checkIn || '2026-11-15';
    const checkOutDate = initialDates?.checkOut || '2026-11-17';
    const adults = initialDates?.adults || 2;
    const children = initialDates?.children || 0;

    // Calculate nights
    const calculateNights = (inDate: string, outDate: string) => {
        const d1 = new Date(inDate);
        const d2 = new Date(outDate);
        const diff = Math.max(1, Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24)));
        return diff;
    };
    const nights = calculateNights(checkInDate, checkOutDate);

    // Selected Add-ons
    const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>(['breakfast']);

    // Guest Info
    const [guestName, setGuestName] = useState('');
    const [guestEmail, setGuestEmail] = useState('');
    const [guestPhone, setGuestPhone] = useState('');
    const [specialRequests, setSpecialRequests] = useState('');
    const [phoneError, setPhoneError] = useState<string | null>(null);

    // Concurrency / Hold state
    const [secondsLeft, setSecondsLeft] = useState(900); // 15:00
    const [holdExpired, setHoldExpired] = useState(false);
    const [roomTakenError, setRoomTakenError] = useState(false);
    const [bookingCode, setBookingCode] = useState('HTL-8X9K2P');
    const [copiedCode, setCopiedCode] = useState(false);
    const [currency, setCurrency] = useState<'USD' | 'KHR'>('USD');

    // Hold Timer
    useEffect(() => {
        let timer: any;
        if (step === 'payment' && secondsLeft > 0) {
            timer = setInterval(() => {
                setSecondsLeft((prev) => {
                    if (prev <= 1) {
                        setHoldExpired(true);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [step, secondsLeft]);

    // Financial Computations
    const roomSubtotal = initialRoom.priceUsd * nights;

    const addonSubtotal = selectedAddonIds.reduce((sum, addonId) => {
        const addon = ADDONS_DATA.find((a) => a.id === addonId);
        if (!addon) return sum;
        if (addon.priceType === 'per_person') {
            return sum + addon.priceUsd * adults * nights;
        }
        return sum + addon.priceUsd;
    }, 0);

    const netTotal = roomSubtotal + addonSubtotal;
    const vatAmount = netTotal * 0.1; // 10% VAT
    const grandTotalUsd = netTotal + vatAmount;
    const grandTotalKhr = Math.round(grandTotalUsd * exchangeRate);

    const handleAddonToggle = (id: string) => {
        setSelectedAddonIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    // Proceed to payment & validate phone
    const handleProceedToPayment = (e: React.FormEvent) => {
        e.preventDefault();
        setPhoneError(null);

        // Phone validation requirement: "Please enter a valid phone number, e.g. +855 12 345 678."
        const phoneRegex = /^(\+?\d{8,15}|\+855\s?\d{2,3}\s?\d{3}\s?\d{3})$/;
        if (!guestPhone.trim() || !phoneRegex.test(guestPhone.replace(/[\s-]/g, ''))) {
            setPhoneError('Please enter a valid phone number, e.g. +855 12 345 678.');
            return;
        }

        // Generate a random booking code
        const randomCode = 'HTL-' + Math.random().toString(36).substring(2, 8).toUpperCase();
        setBookingCode(randomCode);
        setSecondsLeft(900); // Reset to 15 mins
        setHoldExpired(false);
        setRoomTakenError(false);
        setStep('payment');
    };

    // Simulate instant payment (Dev mode requirement)
    const handleSimulatePayment = () => {
        setStep('confirmed');
    };

    // Simulate Room Just Taken collision (Testing microcopy)
    const handleSimulateCollision = () => {
        setRoomTakenError(true);
    };

    const handleCopyCode = () => {
        navigator.clipboard.writeText(bookingCode);
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
    };

    const handlePrint = () => {
        window.print();
    };

    const formatTimer = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#E7DFD3] text-[#1E1B18] overflow-hidden my-8">
                {/* Header with Step Indicator */}
                <div className="px-6 sm:px-8 py-5 bg-[#141210] text-white flex items-center justify-between border-b border-[#2C2825]">
                    <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-xl bg-[#C29062] text-[#141210] flex items-center justify-center font-serif font-black text-base shadow">
                            P
                        </div>
                        <div>
                            <span className="font-serif font-bold text-base block text-white">
                                {step === 'confirmed' ? 'Reservation Confirmed' : initialRoom.name}
                            </span>
                            <span className="text-[10px] font-mono text-[#D4A373] tracking-widest uppercase">
                                PuKy Boutique Hotel · Phnom Penh
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={onClose}
                        className="p-2 text-white/60 hover:text-white rounded-full hover:bg-white/10 transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* 1. DETAILS & ADD-ONS STEP */}
                {step === 'details' && (
                    <form onSubmit={handleProceedToPayment} className="p-6 sm:p-8 space-y-6">
                        {/* Dates & Room Info Banner */}
                        <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#EAE3D6] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#6B6359]">
                            <div>
                                <span className="font-bold text-[#1E1B18] block">Stay Period:</span>
                                <span>
                                    {checkInDate} → {checkOutDate} ({nights} {nights === 1 ? 'Night' : 'Nights'})
                                </span>
                            </div>
                            <div>
                                <span className="font-bold text-[#1E1B18] block">Occupancy:</span>
                                <span>
                                    {adults} Adults{children > 0 && ` + ${children} Children`}
                                </span>
                            </div>
                            <div>
                                <span className="font-bold text-[#1E1B18] block">Base Rate:</span>
                                <span className="text-[#C29062] font-semibold">${initialRoom.priceUsd} / night</span>
                            </div>
                        </div>

                        {/* Room Just Taken collision message if triggered */}
                        {roomTakenError && (
                            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs sm:text-sm flex items-center gap-2 animate-fadeIn">
                                <AlertCircle className="w-5 h-5 shrink-0" />
                                <span>
                                    Sorry, that room was just booked for these dates. Please choose another option.
                                </span>
                            </div>
                        )}

                        {/* Add-ons Selector */}
                        <div>
                            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#736A5E] mb-3">
                                Select Add-ons & Extras
                            </label>
                            <div className="space-y-2.5">
                                {ADDONS_DATA.map((addon) => {
                                    const isSelected = selectedAddonIds.includes(addon.id);
                                    return (
                                        <div
                                            key={addon.id}
                                            onClick={() => handleAddonToggle(addon.id)}
                                            className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                                                isSelected
                                                    ? 'bg-[#FAF6EE] border-[#C29062] shadow-sm'
                                                    : 'bg-white border-[#E7DFD3] hover:border-[#D0C5B5]'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div
                                                    className={`w-5 h-5 rounded-md flex items-center justify-center border text-white transition-colors ${
                                                        isSelected
                                                            ? 'bg-[#C29062] border-[#C29062]'
                                                            : 'border-[#CCC3B3] bg-white'
                                                    }`}
                                                >
                                                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                                </div>
                                                <div>
                                                    <span className="font-serif font-bold text-sm text-[#1E1B18] block">
                                                        {addon.name}
                                                    </span>
                                                    <span className="text-xs text-[#736A5E] font-light">
                                                        {addon.description}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="text-right shrink-0">
                                                <span className="font-mono font-bold text-sm text-[#1E1B18]">
                                                    ${addon.priceUsd}
                                                </span>
                                                {addon.priceType === 'per_person' && (
                                                    <span className="text-[10px] text-[#8C8275] block font-mono">/guest/night</span>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Guest Details Form */}
                        <div className="space-y-4 pt-2">
                            <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#736A5E]">
                                Guest Details (No account needed)
                            </label>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        value={guestName}
                                        onChange={(e) => setGuestName(e.target.value)}
                                        placeholder="Full Name (e.g. Sokha Meng)"
                                        className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#DDD5C7] text-sm text-[#1E1B18] focus:outline-none focus:border-[#C29062] transition-colors"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        value={guestEmail}
                                        onChange={(e) => setGuestEmail(e.target.value)}
                                        placeholder="Email Address"
                                        className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#DDD5C7] text-sm text-[#1E1B18] focus:outline-none focus:border-[#C29062] transition-colors"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    value={guestPhone}
                                    onChange={(e) => {
                                        setGuestPhone(e.target.value);
                                        setPhoneError(null);
                                    }}
                                    placeholder="Phone Number (e.g. +855 12 345 678)"
                                    className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#DDD5C7] text-sm text-[#1E1B18] focus:outline-none focus:border-[#C29062] transition-colors"
                                    required
                                />
                                {phoneError && (
                                    <p className="mt-1.5 text-xs text-rose-600 font-medium animate-fadeIn">
                                        {phoneError}
                                    </p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    value={specialRequests}
                                    onChange={(e) => setSpecialRequests(e.target.value)}
                                    placeholder="Special requests (optional: quiet room, feather pillows...)"
                                    className="w-full px-4 py-2.5 rounded-2xl bg-[#FAF8F5] border border-[#DDD5C7] text-xs text-[#1E1B18] focus:outline-none focus:border-[#C29062] transition-colors"
                                />
                            </div>
                        </div>

                        {/* Pricing Breakdown Card */}
                        <div className="p-4 rounded-2xl bg-[#F5F2EB] border border-[#E7DFD3] space-y-2 text-xs font-mono text-[#5C5449]">
                            <div className="flex justify-between">
                                <span>Room ({nights} {nights === 1 ? 'night' : 'nights'} @ ${initialRoom.priceUsd}):</span>
                                <span>${roomSubtotal.toFixed(2)}</span>
                            </div>
                            {addonSubtotal > 0 && (
                                <div className="flex justify-between">
                                    <span>Selected Add-ons:</span>
                                    <span>${addonSubtotal.toFixed(2)}</span>
                                </div>
                            )}
                            <div className="flex justify-between">
                                <span>10% Cambodian VAT:</span>
                                <span>${vatAmount.toFixed(2)}</span>
                            </div>
                            <div className="pt-2 border-t border-[#DDD5C7] flex justify-between items-baseline text-sm sm:text-base font-bold text-[#1E1B18]">
                                <span>Total to pay:</span>
                                <div className="text-right">
                                    <span className="text-[#C29062]">${grandTotalUsd.toFixed(2)}</span>
                                    <span className="text-xs font-mono text-[#736A5E] ml-2">
                                        (≈ {grandTotalKhr.toLocaleString('en-US')} ៛)
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Action Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-4 rounded-2xl bg-[#141210] hover:bg-[#C29062] text-white hover:text-[#141210] font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                        >
                            <span>Hold Room & Pay with KHQR</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>
                )}

                {/* 2. PAYMENT STEP (ABA KHQR & 15-MINUTE HOLD) */}
                {step === 'payment' && (
                    <div className="p-6 sm:p-8 space-y-6 text-center">
                        {/* Countdown Indicator Banner */}
                        <div
                            className={`p-3.5 rounded-2xl border flex items-center justify-between text-xs font-mono ${
                                holdExpired
                                    ? 'bg-rose-50 border-rose-200 text-rose-700'
                                    : 'bg-[#FAF6EE] border-[#C29062]/40 text-[#8C6D42]'
                            }`}
                        >
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 animate-spin text-[#C29062]" />
                                <span className="font-bold">
                                    {holdExpired
                                        ? 'This hold expired due to inactivity. Search again to pick your dates.'
                                        : `Room held for you: ${formatTimer(secondsLeft)}`}
                                </span>
                            </div>
                            <span className="text-[11px] font-mono text-[#736A5E]">Code: {bookingCode}</span>
                        </div>

                        {holdExpired ? (
                            <div className="space-y-4 py-8">
                                <p className="text-sm text-[#736A5E]">
                                    Your 15-minute reservation hold has lapsed so that other guests may book.
                                </p>
                                <button
                                    onClick={() => {
                                        setStep('details');
                                        setHoldExpired(false);
                                    }}
                                    className="px-6 py-3 rounded-2xl bg-[#141210] text-white text-xs uppercase tracking-wider"
                                >
                                    Search Again
                                </button>
                            </div>
                        ) : (
                            <>
                                {/* Currency Switcher */}
                                <div className="inline-flex p-1 bg-[#F5F2EB] rounded-xl border border-[#DDD5C7] text-xs font-mono">
                                    <button
                                        type="button"
                                        onClick={() => setCurrency('USD')}
                                        className={`px-4 py-1.5 rounded-lg transition-all ${
                                            currency === 'USD'
                                                ? 'bg-white shadow text-[#1E1B18] font-bold'
                                                : 'text-[#736A5E]'
                                        }`}
                                    >
                                        Pay in USD ($)
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setCurrency('KHR')}
                                        className={`px-4 py-1.5 rounded-lg transition-all ${
                                            currency === 'KHR'
                                                ? 'bg-[#C29062] text-[#141210] font-bold shadow'
                                                : 'text-[#736A5E]'
                                        }`}
                                    >
                                        Pay in Riel (៛)
                                    </button>
                                </div>

                                {/* KHQR Code Display Card */}
                                <div className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#E7DFD3] max-w-sm mx-auto shadow-inner">
                                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EAE3D6]">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 rounded bg-[#E8353A] text-white flex items-center justify-center font-bold text-[10px]">
                                                ABA
                                            </div>
                                            <span className="font-serif font-bold text-xs uppercase tracking-wider text-[#1E1B18]">
                                                Bakong KHQR
                                            </span>
                                        </div>
                                        <span className="text-xs font-mono font-bold text-[#C29062]">
                                            {currency === 'USD'
                                                ? `$${grandTotalUsd.toFixed(2)} USD`
                                                : `${grandTotalKhr.toLocaleString('en-US')} ៛ KHR`}
                                        </span>
                                    </div>

                                    {/* QR Code Graphic with Scan Animation */}
                                    <div className="relative w-48 h-48 mx-auto p-3 rounded-2xl bg-white border border-[#DDD5C7] flex items-center justify-center mb-3">
                                        <QrCode className="w-full h-full text-[#141210]" />
                                        <div className="absolute inset-x-2 h-0.5 bg-gradient-to-r from-transparent via-[#E8353A] to-transparent animate-pulse top-1/2" />
                                    </div>

                                    <p className="text-xs text-[#736A5E] font-mono leading-tight">
                                        Scan with ABA Mobile or any banking app supporting Bakong KHQR.
                                    </p>
                                </div>

                                {/* Deep-link Mobile Action Button */}
                                <div className="space-y-3 max-w-sm mx-auto">
                                    <button
                                        type="button"
                                        onClick={handleSimulatePayment}
                                        className="w-full py-3.5 px-4 rounded-2xl bg-[#E8353A] hover:bg-[#D42A2F] text-white font-semibold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md active:scale-98"
                                    >
                                        <Smartphone className="w-4 h-4" />
                                        <span>Open in ABA Mobile</span>
                                    </button>

                                    {/* Dev Mode Simulation Bar */}
                                    <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs text-left font-mono space-y-1.5">
                                        <div className="flex items-center justify-between font-bold">
                                            <span>⚡ Dev Mode Simulation:</span>
                                            <span className="text-[10px] text-amber-700">Test Controls</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                type="button"
                                                onClick={handleSimulatePayment}
                                                className="px-2.5 py-1 rounded bg-amber-200 hover:bg-amber-300 text-amber-950 text-[11px] font-bold"
                                            >
                                                Simulate Webhook Payment
                                            </button>
                                            <button
                                                type="button"
                                                onClick={handleSimulateCollision}
                                                className="px-2.5 py-1 rounded bg-amber-200 hover:bg-amber-300 text-amber-950 text-[11px]"
                                            >
                                                Simulate Collision
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )}

                {/* 3. CONFIRMED VOUCHER STEP */}
                {step === 'confirmed' && (
                    <div className="p-6 sm:p-8 space-y-6 text-center animate-fadeIn">
                        {/* Success Icon */}
                        <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>

                        <div>
                            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C29062] font-semibold block mb-1">
                                Payment Received
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E1B18] mb-2">
                                Your stay is confirmed!
                            </h3>
                            <p className="text-xs sm:text-sm text-[#736A5E] font-light max-w-md mx-auto">
                                We’ve sent your confirmation and digital voucher to{' '}
                                <strong className="text-[#1E1B18]">{guestEmail || 'your email'}</strong>.
                            </p>
                        </div>

                        {/* Digital Voucher Boarding Card */}
                        <div className="bg-[#FAF8F5] rounded-3xl border border-[#E7DFD3] p-6 text-left space-y-4 shadow-sm max-w-lg mx-auto">
                            <div className="flex items-center justify-between pb-3 border-b border-[#EAE3D6]">
                                <div>
                                    <span className="text-[10px] font-mono text-[#8C8275] uppercase block">
                                        Booking Code
                                    </span>
                                    <span className="text-xl font-mono font-bold text-[#1E1B18] tracking-widest">
                                        {bookingCode}
                                    </span>
                                </div>
                                <button
                                    onClick={handleCopyCode}
                                    className="px-3 py-1.5 rounded-lg bg-white border border-[#DDD5C7] text-xs font-mono flex items-center gap-1.5 text-[#1E1B18] hover:bg-[#F2ECE1]"
                                >
                                    {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                                    <span>{copiedCode ? 'Copied' : 'Copy'}</span>
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                                <div>
                                    <span className="text-[#8C8275] block">Suite:</span>
                                    <span className="font-serif font-bold text-[#1E1B18]">{initialRoom.name}</span>
                                </div>
                                <div>
                                    <span className="text-[#8C8275] block">Guest:</span>
                                    <span className="font-bold text-[#1E1B18]">{guestName || 'Sokha Meng'}</span>
                                </div>
                                <div>
                                    <span className="text-[#8C8275] block">Dates:</span>
                                    <span className="text-[#1E1B18]">{checkInDate} → {checkOutDate}</span>
                                </div>
                                <div>
                                    <span className="text-[#8C8275] block">Amount Paid:</span>
                                    <span className="text-emerald-700 font-bold">
                                        ${grandTotalUsd.toFixed(2)} ({grandTotalKhr.toLocaleString('en-US')} ៛)
                                    </span>
                                </div>
                            </div>

                            {/* Digital Check-in Pass QR code */}
                            <div className="pt-3 border-t border-[#EAE3D6] flex items-center gap-4">
                                <div className="w-16 h-16 p-1.5 bg-white rounded-xl border border-[#DDD5C7] shrink-0">
                                    <QrCode className="w-full h-full text-[#141210]" />
                                </div>
                                <div className="text-[11px] text-[#736A5E] leading-relaxed">
                                    Show this QR code or booking code upon arrival at our front desk. Check-in starts at 14:00.
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <button
                                onClick={handlePrint}
                                className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#141210] hover:bg-[#C29062] text-white hover:text-[#141210] text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow"
                            >
                                <Printer className="w-4 h-4" />
                                <span>Print / Save Voucher</span>
                            </button>
                            <button
                                onClick={onClose}
                                className="w-full sm:w-auto px-6 py-3 rounded-2xl border border-[#DDD5C7] hover:bg-[#FAF8F5] text-xs font-mono uppercase tracking-wider transition-all"
                            >
                                Done
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
