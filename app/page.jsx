import { Card } from 'components/card';

export default function Page() {
    return (
        <div className="flex flex-col gap-8 sm:gap-12 py-6 sm:py-8">
            {/* Hero Section */}
            <section className="text-center py-8 sm:py-12">
                <h1 className="mb-4 sm:mb-6">Professionele Kappers</h1>
                <p className="mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto">
                    Wij zorgen voor de perfecte look. Van klassieke knippen tot moderne stijlen, 
                    wij maken u klaar voor elke gelegenheid.
                </p>
                <a href="#contact" className="btn btn-lg">
                    Maak een Afspraak
                </a>
            </section>

            {/* Diensten Section */}
            <section id="diensten" className="py-6 sm:py-8">
                <h2 className="mb-6 sm:mb-8 text-center">Onze Diensten</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <Card title="Herenknippen">
                        <p className="text-sm sm:text-base">
                            Professioneel herenknippen met aandacht voor detail. 
                            Wij zorgen voor een perfecte pasvorm en stijl die bij u past.
                        </p>
                    </Card>
                    <Card title="Damesknippen">
                        <p className="text-sm sm:text-base">
                            Moderne en klassieke damesknippen. Van kort tot lang, 
                            wij creëren de perfecte look voor elke gelegenheid.
                        </p>
                    </Card>
                    <Card title="Baardverzorging">
                        <p className="text-sm sm:text-base">
                            Professionele baardverzorging en styling. 
                            Van trimmen tot volledige baardverzorging.
                        </p>
                    </Card>
                    <Card title="Haarverzorging">
                        <p className="text-sm sm:text-base">
                            Complete haarverzorging inclusief wassen, knippen en styling. 
                            Laat u verwennen met onze professionele service.
                        </p>
                    </Card>
                </div>
            </section>

            {/* Over Ons Section */}
            <section id="over-ons" className="py-6 sm:py-8 border-t border-black">
                <h2 className="mb-4 sm:mb-6">Over Ons</h2>
                <div className="space-y-4 text-sm sm:text-base">
                    <p>
                        Met jarenlange ervaring in de kappersbranche bieden wij hoogwaardige 
                        kappersdiensten aan. Ons team bestaat uit ervaren professionals die 
                        gepassioneerd zijn over hun vak.
                    </p>
                    <p>
                        Wij combineren traditionele technieken met moderne trends om u de 
                        beste service te bieden. Uw tevredenheid staat bij ons centraal.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-6 sm:py-8 border-t border-black">
                <h2 className="mb-4 sm:mb-6">Contact</h2>
                <Card>
                    <div className="space-y-3 text-sm sm:text-base">
                        <p><strong>Telefoon:</strong> <a href="tel:+31123456789" className="underline">012-3456789</a></p>
                        <p><strong>Email:</strong> <a href="mailto:info@kappers.nl" className="underline">info@kappers.nl</a></p>
                        <p><strong>Openingstijden:</strong></p>
                        <ul className="list-disc list-inside ml-2 space-y-1">
                            <li>Maandag - Vrijdag: 09:00 - 18:00</li>
                            <li>Zaterdag: 09:00 - 17:00</li>
                            <li>Zondag: Gesloten</li>
                        </ul>
                    </div>
                </Card>
            </section>
        </div>
    );
}
