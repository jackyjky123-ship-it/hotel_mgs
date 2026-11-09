import { useState } from 'react';
import { X, CheckCircle, Calendar, Users, Home, Mail, Phone, User, Send } from 'lucide-react';

interface EnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    selectedVilla?: string;
}

export function EnquiryModal({ isOpen, onClose, selectedVilla = 'Villa Aurora Grande' }: EnquiryModalProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '2 Guests',
        villa: selectedVilla,
        notes: '',
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 800);
    };

    const handleReset = () => {
        setIsSubmitted(false);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md transition-all">
            <div className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-[#0F1115] border border-white/10 text-white shadow-2xl">
                {/* Header background glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-amber-500/10 blur-3xl pointer-events-none" />

                <div className="relative p-6 sm:p-8">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                        aria-label="Close dialog"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {isSubmitted ? (
                        <div className="py-12 text-center flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-luxury tracking-[0.15em] text-white uppercase mb-2">
                                Enquiry Received
                            </h3>
                            <p className="text-sm text-neutral-300 max-w-md mx-auto mb-8 font-light leading-relaxed">
                                Thank you for your interest in <span className="text-amber-200 font-medium">{formData.villa}</span>. Our private concierge team will contact you within 24 hours with custom arrangements and pricing.
                            </p>
                            <button
                                onClick={handleReset}
                                className="px-8 py-3 rounded-full bg-[#E5DBC7] text-[#121316] font-medium tracking-widest text-xs uppercase hover:bg-white transition-all shadow-lg"
                            >
                                Back to Residence
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="mb-6">
                                <div className="inline-block px-3 py-1 rounded-full border border-amber-300/30 bg-amber-500/10 text-[10px] uppercase tracking-[0.25em] text-amber-200 font-semibold mb-3">
                                    Private Concierge Booking
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-luxury tracking-[0.15em] text-white uppercase">
                                    Enquire Residence
                                </h2>
                                <p className="text-xs text-neutral-400 mt-1 tracking-wider uppercase font-light">
                                    Bespoke stays & verified architectural sanctuaries
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1.5 font-medium">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                                            <input
                                                type="text"
                                                required
                                                placeholder="Lord Harrison"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-300/50 focus:ring-1 focus:ring-amber-300/50 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1.5 font-medium">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                                            <input
                                                type="email"
                                                required
                                                placeholder="concierge@guest.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-300/50 focus:ring-1 focus:ring-amber-300/50 transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1.5 font-medium">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                                            <input
                                                type="tel"
                                                placeholder="+1 (555) 019-2834"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-300/50 focus:ring-1 focus:ring-amber-300/50 transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1.5 font-medium">
                                            Selected Residence
                                        </label>
                                        <div className="relative">
                                            <Home className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                                            <select
                                                value={formData.villa}
                                                onChange={(e) => setFormData({ ...formData, villa: e.target.value })}
                                                className="w-full pl-10 pr-4 py-2.5 bg-[#171A21] border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-amber-300/50 focus:ring-1 focus:ring-amber-300/50 transition-all"
                                            >
                                                <option value="Villa Aurora Grande">Villa Aurora - Grande</option>
                                                <option value="Villa Aria Minima">Villa Aria - Minima</option>
                                                <option value="Villa Zephyr Penthouse">Villa Zephyr - Penthouse</option>
                                                <option value="The Monolith Sky Residence">The Monolith Sky Residence</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1.5 font-medium">
                                            Arrival
                                        </label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-500" />
                                            <input
                                                type="date"
                                                value={formData.checkIn}
                                                onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                                                className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-amber-300/50"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1.5 font-medium">
                                            Departure
                                        </label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-500" />
                                            <input
                                                type="date"
                                                value={formData.checkOut}
                                                onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                                                className="w-full pl-9 pr-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-amber-300/50"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1.5 font-medium">
                                            Guests
                                        </label>
                                        <div className="relative">
                                            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-neutral-500" />
                                            <select
                                                value={formData.guests}
                                                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                                className="w-full pl-9 pr-2 py-2 bg-[#171A21] border border-white/10 rounded-xl text-xs text-white focus:outline-none focus:border-amber-300/50"
                                            >
                                                <option value="1 Guest">1 Guest</option>
                                                <option value="2 Guests">2 Guests</option>
                                                <option value="4 Guests">4 Guests</option>
                                                <option value="6+ Guests">6+ Guests (Private Villa)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1.5 font-medium">
                                        Special Requests / Private Concierge Notes
                                    </label>
                                    <textarea
                                        rows={3}
                                        placeholder="Airport yacht transfer, private chef requirements, bespoke wine cellar selection..."
                                        value={formData.notes}
                                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                        className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-300/50 focus:ring-1 focus:ring-amber-300/50 transition-all resize-none"
                                    />
                                </div>

                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#E5DBC7] text-[#121316] font-semibold tracking-[0.2em] text-xs uppercase hover:bg-white transition-all shadow-xl disabled:opacity-50"
                                    >
                                        {isLoading ? (
                                            <span>Processing Request...</span>
                                        ) : (
                                            <>
                                                <span>Request Private Reservation</span>
                                                <Send className="w-3.5 h-3.5" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
