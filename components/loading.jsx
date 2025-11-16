'use client';
import { useEffect, useState } from 'react';
import { Scissors } from 'lucide-react';

export function Loading() {
    const [isLoading, setIsLoading] = useState(true);
    const [isFadingOut, setIsFadingOut] = useState(false);

    useEffect(() => {
        // Simuleer een minimale laadtijd voor een betere UX
        const timer = setTimeout(() => {
            setIsFadingOut(true);
            // Na fade-out animatie volledig verbergen
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 transition-opacity duration-500 ${
                isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
        >
            <div className="flex flex-col items-center gap-4 sm:gap-6">
                {/* Professional Animated Scissors Icon */}
                <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 border-3 sm:border-4 border-[#6366f1] rounded-full flex items-center justify-center relative overflow-hidden">
                        {/* Rotating gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] via-[#818cf8] to-[#6366f1] opacity-20 animate-spin-slow"></div>
                        {/* Scissors icon */}
                        <Scissors 
                            className="w-8 h-8 sm:w-10 sm:h-10 text-[#6366f1] relative z-10 animate-pulse" 
                            strokeWidth={2.5}
                        />
                    </div>
                    {/* Pulsing rings */}
                    <div className="absolute inset-0 border-3 sm:border-4 border-[#6366f1] rounded-full animate-ping opacity-20"></div>
                    <div className="absolute inset-0 border-3 sm:border-4 border-[#818cf8] rounded-full animate-ping opacity-10" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Loading Text */}
                <div className="text-center">
                    <h2 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 dark:from-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent mb-2">
                        KAPPERS
                    </h2>
                    <div className="flex gap-1 sm:gap-1.5 justify-center">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#6366f1] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#6366f1] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#6366f1] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
