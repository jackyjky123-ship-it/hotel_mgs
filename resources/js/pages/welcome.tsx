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
                    content="Experience the convergence of 3D biophilic architecture, cantilevered suites, and timeless hospitality at AMĀLI Island & City Arcade."
                />
            </Head>

            <div className="min-h-screen bg-[#080A0E] text-white selection:bg-amber-300/30 selection:text-amber-100 font-sans antialiased">
                {/* 1. HERO SECTION (Amāli Island 3D Villa & Hotel Showcase with Interactive Day/Night Reveal) */}
                <div id="hero">
                    <HeroSection
                        onOpenEnquiry={() => handleOpenEnquiry('Villa Aurora Grande')}
                    />
                </div>

                {/* 2. BRAND STORY & CURATION SECTION (City Arcade Architectural Masterpiece) */}
                <div id="brand-story">
                    <BrandHeaderSection
                        onOpenEnquiry={() => handleOpenEnquiry('City Arcade Modular Suites')}
                    />
                </div>

                {/* 3. EDITORIAL MANIFESTO SECTION (Cinematic staggered architectural typography) */}
                <div id="manifesto">
                    <ManifestoSection />
                </div>

                {/* 4. 4-CARD FEATURE STACK & ARCHITECTURAL VISUAL (Intelligent Residence Platform) */}
                <div id="features">
                    <FeatureCardsSection onCardClick={handleFeatureClick} />
                </div>

                {/* 5. "WHY CITY ARCADE?" DISTINCTION & MASTERPIECE COLLECTION */}
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
