
import React from 'react';
import type { Service, Project, Testimonial } from './types';

// FIX: Rewrote SVG components using React.createElement to avoid JSX syntax in a .ts file.
// SVG Icons as React Components
const WrenchScrewdriverIcon = (props: React.SVGProps<SVGSVGElement>) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.878-5.878m-5.878 5.878L5.828 15.17m5.592 0L14.25 12l-5.878-5.878m5.878 5.878l-5.878 5.878m0-5.878L5.828 9.25m5.592 5.92l5.592-5.92M11.42 15.17l-5.592-5.92m5.592 5.92l-5.592 5.92" })
    )
);

const HomeModernIcon = (props: React.SVGProps<SVGSVGElement>) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" })
    )
);

const PaintBrushIcon = (props: React.SVGProps<SVGSVGElement>) => (
    React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", ...props },
        React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.998 15.998 0 011.622-3.385m5.043.025a2.25 2.25 0 003.285-3.285l-3.285-3.285a2.25 2.25 0 00-3.285 3.285z" })
    )
);


export const SERVICES: Service[] = [
    {
        id: 'kitchen-remodeling',
        title: 'Kitchen Remodeling',
        shortDescription: 'Transform your kitchen into the heart of your home with our expert remodeling services.',
        longDescription: 'From custom cabinetry and modern countertops to state-of-the-art appliances and lighting, we handle every aspect of your kitchen renovation. We work with you to create a functional, beautiful space that fits your lifestyle and budget.',
        details: ['Custom Cabinet Design', 'Granite & Quartz Countertops', 'Tile Backsplash Installation', 'Modern Lighting Solutions', 'Appliance Integration'],
        icon: WrenchScrewdriverIcon,
        image: 'https://picsum.photos/seed/kitchen/800/600',
    },
    {
        id: 'bathroom-renovations',
        title: 'Bathroom Renovations',
        shortDescription: 'Create a personal spa-like retreat with our custom bathroom renovation solutions.',
        longDescription: 'Whether you\'re looking for a simple update or a complete overhaul, we design and build bathrooms that are both luxurious and practical. Our services include walk-in showers, custom vanities, and elegant tiling.',
        details: ['Walk-in Showers & Tubs', 'Custom Vanities', 'Heated Flooring', 'Water-Efficient Fixtures', 'Expert Tile Work'],
        icon: HomeModernIcon,
        image: 'https://picsum.photos/seed/bathroom/800/600',
    },
    {
        id: 'home-additions',
        title: 'Home Additions',
        shortDescription: 'Expand your living space with a seamless and beautifully integrated home addition.',
        longDescription: 'Need more room for your growing family? We specialize in designing and constructing home additions that blend perfectly with your existing home\'s architecture, adding value and functionality.',
        details: ['Second Story Additions', 'In-Law Suites', 'Sunroom Construction', 'Garage Conversions', 'Structural Engineering'],
        icon: HomeModernIcon,
        image: 'https://picsum.photos/seed/addition/800/600',
    },
    {
        id: 'exterior-work',
        title: 'Decks, Siding & Exteriors',
        shortDescription: 'Enhance your curb appeal and outdoor living with our exterior construction services.',
        longDescription: 'From custom decks and patios to durable siding and window replacements, we improve the beauty and resilience of your home\'s exterior. We use high-quality materials to ensure long-lasting results.',
        details: ['Custom Deck Building', 'Vinyl & Fiber Cement Siding', 'Window & Door Replacement', 'Roofing Repairs', 'Patio & Walkway Installation'],
        icon: PaintBrushIcon,
        image: 'https://picsum.photos/seed/exterior/800/600',
    },
];

export const PROJECTS: Project[] = [
    { id: 1, category: 'Kitchens', title: 'Modern Farmhouse Kitchen', imageUrl: 'https://picsum.photos/seed/p1/600/400' },
    { id: 2, category: 'Bathrooms', title: 'Luxury Master Bath', imageUrl: 'https://picsum.photos/seed/p2/600/400' },
    { id: 3, category: 'Additions', title: 'Spacious Sunroom Addition', imageUrl: 'https://picsum.photos/seed/p3/600/400' },
    { id: 4, category: 'Exteriors', title: 'Composite Deck with Pergola', imageUrl: 'https://picsum.photos/seed/p4/600/400' },
    { id: 5, category: 'Kitchens', title: 'Sleek Urban Kitchen', imageUrl: 'https://picsum.photos/seed/p5/600/400' },
    { id: 6, category: 'Bathrooms', title: 'Compact Powder Room', imageUrl: 'https://picsum.photos/seed/p6/600/400' },
    { id: 7, category: 'Kitchens', title: 'Watertown Galley Kitchen Update', imageUrl: 'https://picsum.photos/seed/p7/600/400' },
    { id: 8, category: 'Exteriors', title: 'Full Siding Replacement', imageUrl: 'https://picsum.photos/seed/p8/600/400' },
];

export const TESTIMONIALS: Testimonial[] = [
    {
        name: 'John & Sarah D.',
        location: 'Watertown, MA',
        quote: 'DAL Contractors transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism were second to none. We couldn\'t be happier with the result!',
        avatar: 'https://picsum.photos/seed/avatar1/100/100'
    },
    {
        name: 'Michael P.',
        location: 'Belmont, MA',
        quote: 'The team built a beautiful deck for our backyard. They were efficient, clean, and the craftsmanship is top-notch. It\'s our new favorite spot for summer evenings.',
        avatar: 'https://picsum.photos/seed/avatar2/100/100'
    },
    {
        name: 'Emily R.',
        location: 'Cambridge, MA',
        quote: 'We hired DAL for a full bathroom remodel. They listened to our ideas and brought them to life, offering great suggestions along the way. Highly recommend their services!',
        avatar: 'https://picsum.photos/seed/avatar3/100/100'
    },
];
