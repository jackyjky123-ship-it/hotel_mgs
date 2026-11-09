import { MapPin, Phone, Mail, ArrowUp, Sparkles, Building2 } from 'lucide-react';

interface ArchitecturalFooterProps {
    onFindBookingClick?: () => void;
    onContactClick?: () => void;
}

export function ArchitecturalFooter({ onFindBookingClick, onContactClick }: ArchitecturalFooterProps) {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full bg-[#100E0C] text-[#F3EFEA] border-t border-[#231F1C] pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Row */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
                    {/* Brand & Tagline */}
                    <div className="md:col-span-5 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4A373] to-[#A87243] text-[#141210] flex items-center justify-center font-serif font-bold text-xl shadow-lg border border-white/20">
                                P
                            </div>
                            <div>
                                <span className="font-serif text-xl font-bold tracking-wide text-white block">
                                    PuKy Boutique Hotel
                                </span>
                                <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4A373] block font-mono">
                                    A Quiet Corner of Cambodia
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-[#B8AFA2] font-light max-w-sm leading-relaxed">
                            A curated boutique hotel in Daun Penh, Phnom Penh, blending biophilic cantilevered architecture with authentic warm Cambodian hospitality.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:col-span-3 space-y-3">
                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4A373] block mb-2 font-semibold">
                            Quick Links
                        </span>
                        <ul className="space-y-2 text-sm text-[#D5CEBF]">
                            <li>
                                <a href="#rooms" className="hover:text-white transition-colors">
                                    Rooms & Suites
                                </a>
                            </li>
                            <li>
                                <a href="#amenities" className="hover:text-white transition-colors">
                                    Amenities
                                </a>
                            </li>
                            <li>
                                <a href="#addons" className="hover:text-white transition-colors">
                                    Add-ons & Extras
                                </a>
                            </li>
                            <li>
                                <a href="#payments" className="hover:text-white transition-colors">
                                    Bakong KHQR Payments
                                </a>
                            </li>
                            <li>
                                <button
                                    onClick={onFindBookingClick}
                                    className="hover:text-white transition-colors text-left"
                                >
                                    Find My Booking
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="md:col-span-4 space-y-3">
                        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#D4A373] block mb-2 font-semibold">
                            Contact & Location
                        </span>
                        <div className="space-y-3 text-xs sm:text-sm text-[#B8AFA2]">
                            <div className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-[#C29062] shrink-0 mt-0.5" />
                                <span>Street 240, Daun Penh, Phnom Penh, Cambodia</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-[#C29062] shrink-0" />
                                <a href="tel:+85523999888" className="hover:text-white transition-colors font-mono">
                                    +855 23 999 888
                                </a>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-[#C29062] shrink-0" />
                                <a href="mailto:stay@pukyboutique.com" className="hover:text-white transition-colors font-mono">
                                    stay@pukyboutique.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row & Khmer Sign-Off */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8377]">
                    {/* Khmer Sign-off from requirements */}
                    <div className="text-sm sm:text-base font-serif text-[#D4A373]">
                        អរគុណ · Thank you for choosing to stay with us.
                    </div>

                    <div className="flex items-center gap-4">
                        <span>© 2026 PuKy Boutique Hotel. All rights reserved.</span>
                        <button
                            onClick={scrollToTop}
                            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white transition-colors flex items-center gap-1.5"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp className="w-4 h-4" />
                            <span className="text-[11px] font-mono">Top</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
