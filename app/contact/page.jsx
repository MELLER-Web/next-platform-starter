import { Card } from 'components/card';
import Link from 'next/link';

export const metadata = {
    title: 'Contact'
};

export default function ContactPage() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 py-8 sm:py-12 lg:py-16">
            <section className="text-center py-8 sm:py-12 lg:py-16 animate-fade-in-up">
                <h1 className="mb-6 sm:mb-8 lg:mb-10">Contact</h1>
                <p className="mb-8 sm:mb-10 lg:mb-12 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                    Neem contact met ons op voor vragen, afspraken of meer informatie over onze diensten.
                </p>
            </section>

            <section className="py-8 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                    <Card title="Contactgegevens" className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div className="space-y-5 sm:space-y-6 text-sm sm:text-base lg:text-lg">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <strong className="text-neutral-900 dark:text-neutral-100 min-w-[120px]">Telefoon:</strong>
                                <a href="tel:+31123456789" className="text-[#6366f1] hover:text-[#818cf8] transition-colors font-medium">
                                    012-3456789
                                </a>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <strong className="text-neutral-900 dark:text-neutral-100 min-w-[120px]">Email:</strong>
                                <a href="mailto:info@kappers.nl" className="text-[#6366f1] hover:text-[#818cf8] transition-colors font-medium">
                                    info@kappers.nl
                                </a>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                                <strong className="text-neutral-900 dark:text-neutral-100 min-w-[120px]">Adres:</strong>
                                <div>
                                    <p>Hoofdstraat 123</p>
                                    <p>1234 AB Amsterdam</p>
                                    <p>Nederland</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card title="Openingstijden" className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="space-y-4">
                            <ul className="space-y-3">
                                <li className="flex items-center justify-between gap-4 pb-2 border-b border-neutral-200 dark:border-neutral-700">
                                    <span className="font-semibold">Maandag - Vrijdag</span>
                                    <span className="text-[#6366f1] font-medium">09:00 - 18:00</span>
                                </li>
                                <li className="flex items-center justify-between gap-4 pb-2 border-b border-neutral-200 dark:border-neutral-700">
                                    <span className="font-semibold">Zaterdag</span>
                                    <span className="text-[#6366f1] font-medium">09:00 - 17:00</span>
                                </li>
                                <li className="flex items-center justify-between gap-4">
                                    <span className="text-neutral-600 dark:text-neutral-400">Zondag</span>
                                    <span className="text-neutral-600 dark:text-neutral-400">Gesloten</span>
                                </li>
                            </ul>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-4">
                                * Tijdens feestdagen kunnen de openingstijden afwijken. 
                                Neem contact met ons op voor meer informatie.
                            </p>
                        </div>
                    </Card>
                </div>
            </section>

            <section className="py-8 sm:py-12 lg:py-16 border-t border-neutral-200 dark:border-neutral-800">
                <Card className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <h2 className="mb-6 sm:mb-8">Stuur Ons een Bericht</h2>
                    <form className="space-y-5 sm:space-y-6">
                        <div>
                            <label htmlFor="naam" className="block mb-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
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
                            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
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
                            <label htmlFor="telefoon" className="block mb-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
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
                            <label htmlFor="bericht" className="block mb-2 text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                                Bericht *
                            </label>
                            <textarea
                                id="bericht"
                                name="bericht"
                                required
                                rows={6}
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

            <section className="py-8 sm:py-12 lg:py-16 border-t border-neutral-200 dark:border-neutral-800 text-center">
                <h2 className="mb-6 sm:mb-8">Bezoek Ons</h2>
                <p className="mb-8 text-base sm:text-lg max-w-2xl mx-auto">
                    Wij zijn gevestigd in het centrum van Amsterdam. 
                    Parkeren is mogelijk in de buurt, en wij zijn goed bereikbaar met het openbaar vervoer.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
