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
        <nav className="flex flex-wrap items-center gap-3 pt-5 pb-7 sm:pt-7 sm:pb-9 md:pt-9 md:pb-14 border-b border-neutral-200/50 dark:border-neutral-700/50 relative backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6366f1]/5 to-transparent pointer-events-none" />
            <Link 
                href="/" 
                className="text-xl font-black sm:text-2xl relative z-10 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-100 bg-clip-text text-transparent hover:scale-105 transition-all duration-300 tracking-tight"
            >
                KAPPERS
            </Link>
            {!!navItems?.length && (
                <>
                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex flex-wrap gap-x-2 gap-y-1 ml-6 relative z-10">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <Link 
                                    href={item.href} 
                                    className="inline-flex px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 hover:bg-white/60 dark:hover:bg-neutral-800/60 backdrop-blur-sm hover:text-[#6366f1] dark:hover:text-[#818cf8] hover:shadow-md hover:-translate-y-0.5 border border-transparent hover:border-neutral-200/50 dark:hover:border-neutral-700/50"
                                >
                                    {item.linkText}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden ml-auto p-2.5 rounded-xl hover:bg-white/60 dark:hover:bg-neutral-800/60 backdrop-blur-sm transition-all duration-300 relative z-10 flex items-center justify-center border border-neutral-200/50 dark:border-neutral-700/50 hover:border-[#6366f1]/50 hover:shadow-md"
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
                        <ul className="w-full md:hidden mt-4 space-y-2 border-t border-neutral-200/50 dark:border-neutral-700/50 pt-4 animate-fade-in-up relative z-10">
                            {navItems.map((item, index) => (
                                <li key={index} className="animate-slide-in-right" style={{ animationDelay: `${index * 0.05}s` }}>
                                    <Link 
                                        href={item.href} 
                                        className="block px-4 py-3 text-sm font-semibold rounded-xl hover:bg-white/60 dark:hover:bg-neutral-800/60 backdrop-blur-sm hover:text-[#6366f1] dark:hover:text-[#818cf8] transition-all duration-300 border border-transparent hover:border-neutral-200/50 dark:hover:border-neutral-700/50 hover:shadow-md"
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
