export interface RoomTypeData {
    id: string;
    name: string;
    slug: string;
    priceUsd: number;
    sleepsAdults: number;
    sleepsChildren: number;
    description: string;
    scarcityCount: number;
    images: string[];
    features: string[];
    balcony: boolean;
}

export interface AddonItem {
    id: string;
    name: string;
    priceUsd: number;
    priceType: 'per_person' | 'per_stay' | 'per_night';
    description: string;
}

export interface GuestReview {
    quote: string;
    firstName: string;
    country: string;
    roomName: string;
    rating: number;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface BookingHoldDetails {
    bookingCode: string;
    roomType: RoomTypeData;
    checkIn: string;
    checkOut: string;
    adults: number;
    children: number;
    nights: number;
    guestName: string;
    guestEmail: string;
    guestPhone: string;
    selectedAddons: string[];
    currency: 'USD' | 'KHR';
    baseTotalUsd: number;
    addonTotalUsd: number;
    vatTotalUsd: number;
    grandTotalUsd: number;
    grandTotalKhr: number;
    status: 'pending' | 'confirmed' | 'expired';
    expiresAt: string;
}
