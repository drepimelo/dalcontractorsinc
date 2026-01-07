
import React, { useState, useEffect } from 'react';
import type { Page } from '../types';

interface HeaderProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
    page: Page;
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
    children: React.ReactNode;
}> = ({ page, currentPage, setCurrentPage, children }) => (
    <button
        onClick={() => setCurrentPage(page)}
        className={`px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
            currentPage === page ? 'text-green' : 'hover:text-green'
        }`}
        aria-current={currentPage === page ? 'page' : undefined}
    >
        {children}
    </button>
);

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = (
        <>
            <NavLink page="home" currentPage={currentPage} setCurrentPage={setCurrentPage}>Home</NavLink>
            <NavLink page="services" currentPage={currentPage} setCurrentPage={setCurrentPage}>Services</NavLink>
            <NavLink page="gallery" currentPage={currentPage} setCurrentPage={setCurrentPage}>Gallery</NavLink>
            <NavLink page="about" currentPage={currentPage} setCurrentPage={setCurrentPage}>About Us</NavLink>
        </>
    );

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled || isMenuOpen ? 'bg-navy shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <button onClick={() => setCurrentPage('home')} className="text-2xl font-bold text-white tracking-wider">
                    DAL Contractors
                </button>
                <nav className="hidden md:flex items-center text-white">
                    {navLinks}
                    <button className="ml-4 bg-green text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                        Free Quote
                    </button>
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none" aria-label="Open menu">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-navy">
                    <nav className="flex flex-col items-center px-6 pb-4 pt-2 text-white">
                        {navLinks}
                         <button className="mt-4 w-full bg-green text-white font-bold py-3 px-6 rounded-full hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
                            Free Quote
                        </button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
