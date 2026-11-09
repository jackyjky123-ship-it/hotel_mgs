import { useState } from 'react';
import { Head } from '@inertiajs/react';
import { HeroSection } from '@/components/landing/HeroSection';
import { BrandHeaderSection } from '@/components/landing/BrandHeaderSection';
import { ManifestoSection } from '@/components/landing/ManifestoSection';
import { FeatureCardsSection } from '@/components/landing/FeatureCardsSection';
import { WhyChooseUsSection } from '@/components/landing/WhyChooseUsSection';
import { ArchitecturalFooter } from '@/components/landing/ArchitecturalFooter';
import { EnquiryModal } from '@/components/landing/EnquiryModal';

export default function Welcome() {
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const [selectedVilla, setSelectedVilla] = useState('Villa Aurora Grande');

    const handleOpenEnquiry = (villaName = 'Villa Aurora Grande') => {
        setSelectedVilla(villaName);
        setIsEnquiryOpen(true);
    };

    const handleFeatureClick = (featureTitle: string) => {
        setSelectedVilla(`Inquiry: ${featureTitle}`);
        setIsEnquiryOpen(true);
    };

    return (
        <>
            <Head title="AMĀLI ISLAND · City Arcade | Architectural Sanctuary & Modern Real Estate">
                <meta
                    name="description"
                    content="Experience the convergence of 3D biophilic architecture and timeless hospitality at AMĀLI Island & City Arcade."
                />
            </Head>

            <div className="min-h-screen bg-[#0B0D11] text-[#0E1013] selection:bg-amber-200 selection:text-black font-sans antialiased">
                {/* 1. HERO SECTION (based on hero_section_design_ref.png with 3D Day/Night Hover Reveal) */}
                <div id="hero">
                    <HeroSection
                        onOpenEnquiry={() => handleOpenEnquiry('Villa Aurora Grande')}
                    />
                </div>

                {/* 2. BRAND HEADER & CITY ARCADE HEADLINE SECTION (based on design_ref.png) */}
                <div id="brand-header">
                    <BrandHeaderSection
                        onOpenEnquiry={() => handleOpenEnquiry('City Arcade Property')}
                    />
                </div>

                {/* 3. EDITORIAL MANIFESTO SECTION (staggered typography from design_ref.png) */}
                <div id="manifesto">
                    <ManifestoSection />
                </div>

                {/* 4. 4-CARD FEATURE STACK & ARCHITECTURAL VISUAL (from design_ref.png) */}
                <div id="features">
                    <FeatureCardsSection onCardClick={handleFeatureClick} />
                </div>

                {/* 5. "WHY CITY ARCADE?" SHOWCASE & VALUE PROPOSITION (from design_ref.png) */}
                <div id="why-us">
                    <WhyChooseUsSection
                        onOpenEnquiry={() => handleOpenEnquiry('Villa Aurora Masterpiece')}
                    />
                </div>

                {/* 6. ARCHITECTURAL FOOTER */}
                <ArchitecturalFooter />

                {/* PRIVATE CONCIERGE ENQUIRY MODAL */}
                <EnquiryModal
                    isOpen={isEnquiryOpen}
                    onClose={() => setIsEnquiryOpen(false)}
                    selectedVilla={selectedVilla}
                />
            </div>
        </>
    );
}
