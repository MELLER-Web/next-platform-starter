import { Card } from 'components/card';
import Link from 'next/link';

export const metadata = {
    title: 'Contact'
};

export default function ContactPage() {
    return (
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 py-4 sm:py-6 lg:py-8">
            <section className="text-center py-4 sm:py-6 lg:py-8 animate-fade-in-up">
                <h1 className="mb-3 sm:mb-4 lg:mb-6">Contact</h1>
                <p className="mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                    Neem contact met ons op voor vragen, afspraken of meer informatie over onze diensten.
                </p>
            </section>

            <section className="py-4 sm:py-6 lg:py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                    <Card title="Contactgegevens" className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                                <strong className="text-neutral-900 dark:text-neutral-100 min-w-[100px]">Telefoon:</strong>
                                <a href="tel:+31123456789" className="text-[#6366f1] hover:text-[#818cf8] transition-colors font-medium">
                                    012-3456789
                                </a>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1">
                                <strong className="text-neutral-900 dark:text-neutral-100 min-w-[100px]">Email:</strong>
                                <a href="mailto:info@kappers.nl" className="text-[#6366f1] hover:text-[#818cf8] transition-colors font-medium">
                                    info@kappers.nl
                                </a>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-start gap-1">
                                <strong className="text-neutral-900 dark:text-neutral-100 min-w-[100px]">Adres:</strong>
                                <div>
                                    <p>Hoofdstraat 123</p>
                                    <p>1234 AB Amsterdam</p>
                                    <p>Nederland</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card title="Openingstijden" className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="space-y-3">
                            <ul className="space-y-2">
                                <li className="flex items-center justify-between gap-3 pb-2 border-b border-neutral-200 dark:border-neutral-700 text-xs sm:text-sm">
                                    <span className="font-semibold">Maandag - Vrijdag</span>
                                    <span className="text-[#6366f1] font-medium">09:00 - 18:00</span>
                                </li>
                                <li className="flex items-center justify-between gap-3 pb-2 border-b border-neutral-200 dark:border-neutral-700 text-xs sm:text-sm">
                                    <span className="font-semibold">Zaterdag</span>
                                    <span className="text-[#6366f1] font-medium">09:00 - 17:00</span>
                                </li>
                                <li className="flex items-center justify-between gap-3 text-xs sm:text-sm">
                                    <span className="text-neutral-600 dark:text-neutral-400">Zondag</span>
                                    <span className="text-neutral-600 dark:text-neutral-400">Gesloten</span>
                                </li>
                            </ul>
                            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-3">
                                * Tijdens feestdagen kunnen de openingstijden afwijken. 
                                Neem contact met ons op voor meer informatie.
                            </p>
                        </div>
                    </Card>
                </div>
            </section>

            <section className="py-4 sm:py-6 lg:py-8 border-t border-neutral-200 dark:border-neutral-800">
                <Card className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <h2 className="mb-4 sm:mb-6">Stuur Ons een Bericht</h2>
                    <form className="space-y-4 sm:space-y-5">
                        <div>
                            <label htmlFor="naam" className="block mb-1.5 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                                Naam *
                            </label>
                            <input
                                type="text"
                                id="naam"
                                name="naam"
                                required
                                className="input w-full"
                                placeholder="Uw naam"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1.5 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                                Email *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="input w-full"
                                placeholder="uw@email.nl"
                            />
                        </div>
                        <div>
                            <label htmlFor="telefoon" className="block mb-1.5 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                                Telefoon
                            </label>
                            <input
                                type="tel"
                                id="telefoon"
                                name="telefoon"
                                className="input w-full"
                                placeholder="012-3456789"
                            />
                        </div>
                        <div>
                            <label htmlFor="bericht" className="block mb-1.5 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                                Bericht *
                            </label>
                            <textarea
                                id="bericht"
                                name="bericht"
                                required
                                rows={4}
                                className="input w-full resize-none"
                                placeholder="Uw bericht..."
                            ></textarea>
                        </div>
                        <button type="submit" className="btn w-full sm:w-auto">
                            Verstuur Bericht
                        </button>
                    </form>
                </Card>
            </section>

            <section className="py-4 sm:py-6 lg:py-8 border-t border-neutral-200 dark:border-neutral-800 text-center">
                <h2 className="mb-3 sm:mb-4">Bezoek Ons</h2>
                <p className="mb-4 text-sm sm:text-base max-w-xl mx-auto">
                    Wij zijn gevestigd in het centrum van Amsterdam. 
                    Parkeren is mogelijk in de buurt, en wij zijn goed bereikbaar met het openbaar vervoer.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                    <Link href="/afspraak" className="btn">
                        Maak Afspraak
                    </Link>
                    <Link href="/diensten" className="btn">
                        Bekijk Diensten
                    </Link>
                </div>
            </section>
        </div>
    );
}
