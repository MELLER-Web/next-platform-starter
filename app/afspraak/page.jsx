import { Card } from 'components/card';
import Link from 'next/link';

export const metadata = {
    title: 'Afspraak Maken'
};

export default function AfspraakPage() {
    return (
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 py-4 sm:py-6 lg:py-8">
            <section className="text-center py-4 sm:py-6 lg:py-8 animate-fade-in-up">
                <h1 className="mb-3 sm:mb-4 lg:mb-6">Maak een Afspraak</h1>
                <p className="mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                    Plan uw bezoek aan onze salon. Kies een datum en tijd die u uitkomt.
                </p>
            </section>

            <section className="py-4 sm:py-6 lg:py-8">
                <Card className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <h2 className="mb-4 sm:mb-6">Afspraak Formulier</h2>
                    <form className="space-y-4 sm:space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                            <div>
                                <label htmlFor="voornaam" className="block mb-1.5 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                                    Voornaam *
                                </label>
                                <input
                                    type="text"
                                    id="voornaam"
                                    name="voornaam"
                                    required
                                    className="input w-full"
                                    placeholder="Uw voornaam"
                                />
                            </div>
                            <div>
                                <label htmlFor="achternaam" className="block mb-1.5 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                                    Achternaam *
                                </label>
                                <input
                                    type="text"
                                    id="achternaam"
                                    name="achternaam"
                                    required
                                    className="input w-full"
                                    placeholder="Uw achternaam"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
                                    Telefoon *
                                </label>
                                <input
                                    type="tel"
                                    id="telefoon"
                                    name="telefoon"
                                    required
                                    className="input w-full"
                                    placeholder="012-3456789"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="dienst" className="block mb-1.5 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                                Gewenste Dienst *
                            </label>
                            <select
                                id="dienst"
                                name="dienst"
                                required
                                className="input w-full"
                            >
                                <option value="">Selecteer een dienst</option>
                                <option value="herenknippen">Herenknippen</option>
                                <option value="damesknippen">Damesknippen</option>
                                <option value="baardverzorging">Baardverzorging</option>
                                <option value="haarverzorging">Haarverzorging</option>
                                <option value="haarkleuren">Haarkleuren</option>
                                <option value="haarstyling">Haarstyling</option>
                                <option value="combinatie">Combinatie</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                            <div>
                                <label htmlFor="datum" className="block mb-1.5 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                                    Gewenste Datum *
                                </label>
                                <input
                                    type="date"
                                    id="datum"
                                    name="datum"
                                    required
                                    className="input w-full"
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            </div>
                            <div>
                                <label htmlFor="tijd" className="block mb-1.5 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                                    Gewenste Tijd *
                                </label>
                                <select
                                    id="tijd"
                                    name="tijd"
                                    required
                                    className="input w-full"
                                >
                                    <option value="">Selecteer tijd</option>
                                    <option value="09:00">09:00</option>
                                    <option value="09:30">09:30</option>
                                    <option value="10:00">10:00</option>
                                    <option value="10:30">10:30</option>
                                    <option value="11:00">11:00</option>
                                    <option value="11:30">11:30</option>
                                    <option value="12:00">12:00</option>
                                    <option value="12:30">12:30</option>
                                    <option value="13:00">13:00</option>
                                    <option value="13:30">13:30</option>
                                    <option value="14:00">14:00</option>
                                    <option value="14:30">14:30</option>
                                    <option value="15:00">15:00</option>
                                    <option value="15:30">15:30</option>
                                    <option value="16:00">16:00</option>
                                    <option value="16:30">16:30</option>
                                    <option value="17:00">17:00</option>
                                    <option value="17:30">17:30</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="opmerkingen" className="block mb-1.5 text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                                Opmerkingen of Speciale Wensen
                            </label>
                            <textarea
                                id="opmerkingen"
                                name="opmerkingen"
                                rows={3}
                                className="input w-full resize-none"
                                placeholder="Heeft u speciale wensen of opmerkingen? Laat het ons weten..."
                            ></textarea>
                        </div>

                        <div className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                id="akkoord"
                                name="akkoord"
                                required
                                className="mt-0.5 w-4 h-4 text-[#6366f1] border-neutral-300 rounded focus:ring-[#6366f1]"
                            />
                            <label htmlFor="akkoord" className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                                Ik ga akkoord met de <Link href="/contact" className="text-[#6366f1] hover:underline">algemene voorwaarden</Link> en 
                                geef toestemming voor het verwerken van mijn gegevens. *
                            </label>
                        </div>

                        <button type="submit" className="btn w-full sm:w-auto btn-lg">
                            Afspraak Bevestigen
                        </button>
                    </form>
                </Card>
            </section>

            <section className="py-4 sm:py-6 lg:py-8 border-t border-neutral-200 dark:border-neutral-800">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                    <Card className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="text-2xl sm:text-3xl font-bold text-[#6366f1] mb-1">24/7</div>
                        <h3 className="mb-1">Online Boeken</h3>
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                            Boek uw afspraak op elk moment van de dag
                        </p>
                    </Card>
                    <Card className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="text-2xl sm:text-3xl font-bold text-[#6366f1] mb-1">48u</div>
                        <h3 className="mb-1">Annuleren</h3>
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                            Gratis annuleren tot 48 uur van tevoren
                        </p>
                    </Card>
                    <Card className="text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="text-2xl sm:text-3xl font-bold text-[#6366f1] mb-1">100%</div>
                        <h3 className="mb-1">Tevredenheid</h3>
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                            Onze klanten zijn tevreden met onze service
                        </p>
                    </Card>
                </div>
            </section>

            <section className="py-4 sm:py-6 lg:py-8 border-t border-neutral-200 dark:border-neutral-800 text-center">
                <h2 className="mb-3 sm:mb-4">Vragen?</h2>
                <p className="mb-4 text-sm sm:text-base max-w-xl mx-auto">
                    Heeft u vragen over het maken van een afspraak? Neem gerust contact met ons op.
                </p>
                <Link href="/contact" className="btn">
                    Contact Opnemen
                </Link>
            </section>
        </div>
    );
}
