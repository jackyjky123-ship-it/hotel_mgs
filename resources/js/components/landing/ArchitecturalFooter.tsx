import { useState } from 'react';
import { ArrowUpRight, Check, Send } from 'lucide-react';

export function ArchitecturalFooter() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setTimeout(() => {
                setIsSubscribed(false);
                setEmail('');
            }, 3000);
        }
    };

    return (
        <footer className="relative w-full bg-[#0C0E12] text-white px-4 sm:px-8 lg:px-12 pt-16 pb-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                {/* Top Row: Brand & Newsletter */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
                    {/* Brand Col */}
                    <div className="lg:col-span-5">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-8 h-8 rounded-sm bg-white text-[#0C0E12] flex items-center justify-center font-display font-black text-sm">
                                C
                            </div>
                            <span className="font-display font-bold tracking-[0.25em] text-base text-white">
                                CITY ARCADE
                            </span>
                        </div>
                        <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm mb-6">
                            A curated convergence of biophilic architectural design, bespoke hospitality, and modern real estate investment.
                        </p>
                        <div className="text-[11px] text-neutral-500 font-mono tracking-wider">
                            COORDINATES: 25.1972° N, 55.2744° E · SANCTUARY BAY
                        </div>
                    </div>

                    {/* Quick Links Col */}
                    <div className="lg:col-span-3 grid grid-cols-2 gap-8 text-xs tracking-widest uppercase">
                        <div>
                            <h4 className="text-[10px] text-neutral-500 font-mono tracking-[0.25em] mb-4">
                                Residences
                            </h4>
                            <ul className="space-y-3 text-neutral-300 font-medium">
                                <li>
                                    <a href="#hero" className="hover:text-white transition-colors">
                                        Villa Aurora
                                    </a>
                                </li>
                                <li>
                                    <a href="#hero" className="hover:text-white transition-colors">
                                        Villa Aria
                                    </a>
                                </li>
                                <li>
                                    <a href="#hero" className="hover:text-white transition-colors">
                                        The Monolith
                                    </a>
                                </li>
                                <li>
                                    <a href="#properties" className="hover:text-white transition-colors">
                                        Penthouse Sky
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[10px] text-neutral-500 font-mono tracking-[0.25em] mb-4">
                                Platform
                            </h4>
                            <ul className="space-y-3 text-neutral-300 font-medium">
                                <li>
                                    <a href="#features" className="hover:text-white transition-colors">
                                        Pro Listings
                                    </a>
                                </li>
                                <li>
                                    <a href="#manifesto" className="hover:text-white transition-colors">
                                        Philosophy
                                    </a>
                                </li>
                                <li>
                                    <a href="#why-us" className="hover:text-white transition-colors">
                                        Valuations
                                    </a>
                                </li>
                                <li>
                                    <a href="/login" className="hover:text-white transition-colors">
                                        Client Portal
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Col */}
                    <div className="lg:col-span-4">
                        <h4 className="text-[10px] text-neutral-400 font-mono tracking-[0.25em] uppercase mb-2">
                            Architectural Dispatch
                        </h4>
                        <p className="text-xs text-neutral-400 font-light mb-4">
                            Receive private invitations to confidential off-market architectural reveals and seasonal suites.
                        </p>
                        <form onSubmit={handleSubscribe} className="relative">
                            <input
                                type="email"
                                required
                                placeholder="Enter your private email..."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-4 pr-12 py-3 rounded-full bg-white/5 border border-white/15 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white/40 transition-all"
                            />
                            <button
                                type="submit"
                                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#E5DBC7] text-[#121316] flex items-center justify-center hover:bg-white transition-colors"
                                aria-label="Subscribe"
                            >
                                {isSubscribed ? <Check className="w-3.5 h-3.5" /> : <Send className="w-3.5 h-3.5" />}
                            </button>
                        </form>
                        {isSubscribed && (
                            <p className="text-[10px] text-emerald-400 font-medium mt-2 tracking-wider uppercase">
                                ✓ You are subscribed to private architectural releases.
                            </p>
                        )}
                    </div>
                </div>

                {/* Bottom Row: Legal & Copyright */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-neutral-500 uppercase tracking-widest font-mono">
                    <div>
                        © {new Date().getFullYear()} CITY ARCADE · AMĀLI ISLAND. ALL RIGHTS RESERVED.
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-neutral-300 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-neutral-300 transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-neutral-300 transition-colors">
                            Security & Escrow
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
