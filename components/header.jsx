'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Diensten', href: '/diensten' },
    { linkText: 'Over Ons', href: '/over-ons' },
    { linkText: 'Galerij', href: '/galerij' },
    { linkText: 'Prijzen', href: '/prijzen' },
    { linkText: 'Afspraak', href: '/afspraak' },
    { linkText: 'Contact', href: '/contact' }
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="flex flex-wrap items-center gap-2 sm:gap-3 pt-3 pb-4 sm:pt-4 sm:pb-5 md:pt-5 md:pb-6 border-b border-neutral-200 dark:border-neutral-800 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-50/50 to-transparent dark:via-neutral-900/50 pointer-events-none" />
            <Link 
                href="/" 
                className="text-lg font-bold sm:text-xl relative z-10 bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
                KAPPERS
            </Link>
            {!!navItems?.length && (
                <>
                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex flex-wrap gap-x-1 gap-y-1 ml-3 sm:ml-4 relative z-10">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link 
                                    href={item.href} 
                                    className="inline-flex px-2 py-1.5 text-xs sm:text-sm rounded-md transition-all duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-[#6366f1] dark:hover:text-[#818cf8] font-medium"
                                >
                                    {item.linkText}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden ml-auto px-2 py-1.5 text-xs sm:text-sm rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 relative z-10 flex items-center justify-center"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? (
                            <X className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
                        ) : (
                            <Menu className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
                        )}
                    </button>
                    
                    {/* Mobile Dropdown Menu */}
                    {isMenuOpen && (
                        <ul className="w-full md:hidden mt-2 space-y-0.5 border-t border-neutral-200 dark:border-neutral-800 pt-2 animate-fade-in-up relative z-10">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link 
                                        href={item.href} 
                                        className="block px-2 py-1.5 text-xs sm:text-sm rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 hover:text-[#6366f1] dark:hover:text-[#818cf8] transition-all duration-200 font-medium"
                                        onClick={closeMenu}
                                    >
                                        {item.linkText}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </nav>
    );
}
