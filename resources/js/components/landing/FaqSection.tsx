import { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FaqItem } from '@/types/hotel';

export const FAQ_DATA: FaqItem[] = [
    {
        question: 'What time is check-in and check-out?',
        answer: 'Check-in is from 14:00 and check-out is by 12:00 noon. Need extra time? You can add Late Check-out (until 16:00) during reservation.',
    },
    {
        question: 'Do I need an account to book?',
        answer: 'No. Guest direct checkout only requires your name, email address, and phone number for instant voucher delivery.',
    },
    {
        question: 'How do I pay with KHQR?',
        answer: 'Scan the generated KHQR code with ABA Mobile or any banking app that supports Bakong KHQR. You can choose to pay in either US Dollars or Cambodian Riel.',
    },
    {
        question: 'Are taxes included in the room prices shown?',
        answer: 'Room rates are shown net on the overview. Standard 10% Cambodian VAT and any selected add-ons are itemized transparently at checkout so there are no surprises.',
    },
    {
        question: 'How long is my room held while I pay?',
        answer: 'Your room is locked for 15 minutes via database concurrency control. If the countdown expires before payment, the room is released safely so you can search again.',
    },
    {
        question: 'How do I cancel or modify my booking?',
        answer: 'Please contact our front desk team with your booking confirmation code (e.g. HTL-8X9K2P). Our staff is available 24/7 to assist with rescheduling or cancellations.',
    },
    {
        question: 'What do I show upon arrival at the front desk?',
        answer: 'Simply show the digital check-in QR code on your mobile pass or booking voucher, along with a valid passport or government ID.',
    },
    {
        question: 'Can I print or save a PDF of my confirmation?',
        answer: 'Yes! Use the “Print / Save Voucher” button on your confirmation modal or via the self-service “Find My Booking” portal anytime.',
    },
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    const toggleItem = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <section id="faq" className="w-full bg-[#FAF8F5] text-[#1E1B18] py-20 sm:py-28 border-b border-[#EAE3D6]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C29062]/10 text-[#A87243] text-xs font-mono uppercase tracking-[0.2em] font-semibold mb-3">
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Common Questions</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-[#1E1B18] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base text-[#6B6359] font-light leading-relaxed">
                        Everything you need to know about reserving your stay, payments with KHQR, and check-in procedures.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {FAQ_DATA.map((item, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <div
                                key={idx}
                                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                                    isOpen
                                        ? 'bg-white border-[#C29062]/50 shadow-md ring-1 ring-[#C29062]/20'
                                        : 'bg-white/80 border-[#E7DFD3] hover:border-[#D4C8B8] shadow-sm'
                                }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleItem(idx)}
                                    className="w-full px-6 sm:px-8 py-5 text-left flex items-center justify-between gap-4 transition-colors"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-serif font-semibold text-base sm:text-lg text-[#1E1B18]">
                                        {item.question}
                                    </span>
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                                            isOpen
                                                ? 'bg-[#C29062] text-white rotate-180'
                                                : 'bg-[#F5F2EB] text-[#8C8275]'
                                        }`}
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </div>
                                </button>

                                {isOpen && (
                                    <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#6B6359] font-light leading-relaxed border-t border-[#F5F1E8] animate-fadeIn">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
