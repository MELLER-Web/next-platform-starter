export function Footer() {
    return (
        <footer className="pt-8 pb-6 sm:pt-12 sm:pb-8 border-t border-black mt-auto">
            <p className="text-xs sm:text-sm text-center">
                © {new Date().getFullYear()} Kappers. Alle rechten voorbehouden.
            </p>
        </footer>
    );
}
