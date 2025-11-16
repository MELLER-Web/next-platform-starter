export function Footer() {
    return (
        <footer className="pt-10 pb-8 sm:pt-14 sm:pb-10 border-t border-neutral-200/50 dark:border-neutral-700/50 mt-auto relative backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-t from-[#6366f1]/5 via-transparent to-transparent pointer-events-none" />
            <div className="relative z-10 text-center">
                <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                    © {new Date().getFullYear()} Kappers. Alle rechten voorbehouden.
                </p>
                <div className="mt-4 flex justify-center">
                    <div className="h-1 w-16 bg-gradient-to-r from-transparent via-[#6366f1]/40 to-transparent rounded-full" />
                </div>
            </div>
        </footer>
    );
}
