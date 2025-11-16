export function Footer() {
    return (
        <footer className="pt-8 pb-6 sm:pt-12 sm:pb-8 border-t border-neutral-200 dark:border-neutral-800 mt-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-50/50 to-transparent dark:via-neutral-900/50 pointer-events-none" />
            <p className="text-xs sm:text-sm text-center text-neutral-600 dark:text-neutral-400 relative z-10">
                © {new Date().getFullYear()} Kappers. Alle rechten voorbehouden.
            </p>
        </footer>
    );
}
