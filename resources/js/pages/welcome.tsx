import { useState } from 'react';
import { Head } from '@inertiajs/react';
import { HeroSection } from '@/components/landing/HeroSection';
import { TrustStripSection } from '@/components/landing/TrustStripSection';
import { CuratedStaysSection, ROOMS_DATA } from '@/components/landing/CuratedStaysSection';
import { AmenitiesSection } from '@/components/landing/AmenitiesSection';
import { AddonsSection } from '@/components/landing/AddonsSection';
import { HowBookingWorksSection } from '@/components/landing/HowBookingWorksSection';
import { PaymentsSection } from '@/components/landing/PaymentsSection';
import { HoldingRoomSection } from '@/components/landing/HoldingRoomSection';
import { FindBookingSection } from '@/components/landing/FindBookingSection';
import { GuestReviewsSection } from '@/components/landing/GuestReviewsSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { ClosingCtaSection } from '@/components/landing/ClosingCtaSection';
import { ArchitecturalFooter } from '@/components/landing/ArchitecturalFooter';
import { BookingModal } from '@/components/landing/BookingModal';
import { RoomTypeData } from '@/types/hotel';

export default function Welcome() {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState<RoomTypeData | null>(ROOMS_DATA[0]);

    // Active search parameters
    const [searchDates, setSearchDates] = useState({
        checkIn: '',
        checkOut: '',
        adults: 2,
        children: 0,
    });

    const handleSearch = (params: { checkIn: string; checkOut: string; adults: number; children: number }) => {
        setSearchDates(params);
        // Smooth scroll to curated rooms section
        const roomsEl = document.getElementById('rooms');
        if (roomsEl) {
            roomsEl.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSelectRoom = (room: RoomTypeData) => {
        setSelectedRoom(room);
        setIsBookingModalOpen(true);
    };

    const handleScrollToBookingLookup = () => {
        const findBookingEl = document.getElementById('find-booking');
        if (findBookingEl) {
            findBookingEl.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleScrollToTopSearch = () => {
        const heroEl = document.getElementById('hero');
        if (heroEl) {
            heroEl.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Head title="PuKy Boutique Hotel · A Quiet Corner of Cambodia, Made for You">
                <meta
                    name="description"
                    content="Book direct in under two minutes. No account needed, pay instantly with ABA KHQR, and receive your digital check-in pass right away."
                />
            </Head>

            <div className="min-h-screen bg-[#FBF9F5] text-[#1E1B18] selection:bg-[#C29062] selection:text-white font-sans antialiased">
                {/* 1. HERO SECTION (Navbar, Eyebrow, Headline, Subheadline, Search Bar, Under Search Bar) */}
                <HeroSection
                    onSearch={handleSearch}
                    onFindBookingClick={handleScrollToBookingLookup}
                    onBookDirectClick={() => handleSelectRoom(ROOMS_DATA[0])}
                />

                {/* 2. TRUST STRIP (4 Guarantees: Book direct, No sign-up, Pay with KHQR, Instant voucher) */}
                <TrustStripSection />

                {/* 3. CURATED STAYS (Rooms with a sense of place: 4 Room Types, Prices in USD & KHR, Scarcity Badges) */}
                <CuratedStaysSection
                    onSelectRoom={handleSelectRoom}
                    exchangeRate={4100}
                />

                {/* 4. AMENITIES (The little things, done well: 5 core amenities + Balcony note) */}
                <AmenitiesSection />

                {/* 5. MAKE IT YOURS / ADD-ONS (Small extras, big difference: Breakfast, VIP Transfer, Late Checkout) */}
                <AddonsSection
                    onBookClick={() => handleSelectRoom(ROOMS_DATA[0])}
                />

                {/* 6. HOW BOOKING WORKS (Reserve in four simple steps: Search, Choose, Pay, Done) */}
                <HowBookingWorksSection />

                {/* 7. PAYMENTS & PRICING TRANSPARENCY (Clear prices. Local payments. Net prices, 10% VAT, USD/KHR via KHQR) */}
                <PaymentsSection />

                {/* 8. HOLDING YOUR ROOM (Your room is held while you pay: 15-minute hold countdown demo) */}
                <HoldingRoomSection />

                {/* 9. FIND MY BOOKING (Already booked? Look up with code & email/phone, voucher display) */}
                <FindBookingSection />

                {/* 10. GUEST REVIEWS (Kind words from our guests: 3 verified traveler cards) */}
                <GuestReviewsSection />

                {/* 11. FAQ (Frequently Asked Questions: 8 exact Q&As with accordion) */}
                <FaqSection />

                {/* 12. CLOSING CTA (Your stay starts here. Pick your dates and see what’s available.) */}
                <ClosingCtaSection onCheckAvailabilityClick={handleScrollToTopSearch} />

                {/* 13. FOOTER (PuKy Boutique Hotel, a boutique stay in Phnom Penh, Cambodia. Contact, Links, Khmer Sign-off) */}
                <ArchitecturalFooter
                    onFindBookingClick={handleScrollToBookingLookup}
                    onContactClick={handleScrollToBookingLookup}
                />

                {/* 14. INTERACTIVE RESERVATION MODAL (Section 14 Microcopy UI messages, 15-min hold, KHQR, Dev mode simulate) */}
                <BookingModal
                    isOpen={isBookingModalOpen}
                    onClose={() => setIsBookingModalOpen(false)}
                    initialRoom={selectedRoom}
                    initialDates={searchDates.checkIn ? searchDates : undefined}
                    exchangeRate={4100}
                />
            </div>
        </>
    );
}
