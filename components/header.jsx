'use client';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'Diensten', href: '#diensten' },
    { linkText: 'Over Ons', href: '#over-ons' },
    { linkText: 'Contact', href: '#contact' }
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
        <nav className="flex flex-wrap items-center gap-3 pt-4 pb-6 sm:pt-6 sm:pb-8 md:pt-8 md:pb-12 border-b border-black">
            <Link href="/" className="text-xl font-bold sm:text-2xl">
                KAPPERS
            </Link>
            {!!navItems?.length && (
                <>
                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex flex-wrap gap-x-3 gap-y-1 sm:gap-x-4 ml-4 sm:ml-6">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href} className="inline-flex px-2 py-1 text-sm sm:text-base hover:underline">
                                    {item.linkText}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden ml-auto px-2 py-1 text-sm sm:text-base hover:underline"
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? '✕' : '☰'}
                    </button>
                    
                    {/* Mobile Dropdown Menu */}
                    {isMenuOpen && (
                        <ul className="w-full md:hidden mt-4 space-y-2 border-t border-black pt-4">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link 
                                        href={item.href} 
                                        className="block px-2 py-1 text-sm sm:text-base hover:underline"
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
