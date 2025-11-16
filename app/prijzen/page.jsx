import { Card } from 'components/card';
import Link from 'next/link';

const prijzen = [
    {
        category: 'Heren',
        services: [
            { naam: 'Herenknippen', prijs: '€25', duur: '30 min' },
            { naam: 'Herenknippen + Wassen', prijs: '€30', duur: '40 min' },
            { naam: 'Herenknippen + Styling', prijs: '€35', duur: '45 min' },
            { naam: 'Baard trimmen', prijs: '€15', duur: '20 min' },
            { naam: 'Baardverzorging compleet', prijs: '€25', duur: '30 min' },
            { naam: 'Herenknippen + Baard', prijs: '€40', duur: '50 min' }
        ]
    },
    {
        category: 'Dames',
        services: [
            { naam: 'Damesknippen', prijs: '€35', duur: '45 min' },
            { naam: 'Damesknippen + Wassen', prijs: '€40', duur: '55 min' },
            { naam: 'Damesknippen + Styling', prijs: '€50', duur: '60 min' },
            { naam: 'Lange haren knippen', prijs: '€45', duur: '60 min' },
            { naam: 'Korte haren knippen', prijs: '€30', duur: '40 min' },
            { naam: 'Opmaak & Styling', prijs: '€35', duur: '45 min' }
        ]
    },
    {
        category: 'Kleuren',
        services: [
            { naam: 'Volledige kleur', prijs: '€65', duur: '90 min' },
            { naam: 'Highlights (halve kop)', prijs: '€75', duur: '120 min' },
            { naam: 'Highlights (volledige kop)', prijs: '€95', duur: '150 min' },
            { naam: 'Balayage', prijs: '€110', duur: '180 min' },
            { naam: 'Kleurcorrectie', prijs: '€120', duur: '180 min' },
            { naam: 'Toner behandeling', prijs: '€25', duur: '30 min' }
        ]
    },
    {
        category: 'Behandelingen',
        services: [
            { naam: 'Haarverzorging behandeling', prijs: '€30', duur: '45 min' },
            { naam: 'Diepe conditioner behandeling', prijs: '€25', duur: '30 min' },
            { naam: 'Keratine behandeling', prijs: '€150', duur: '180 min' },
            { naam: 'Olaplex behandeling', prijs: '€35', duur: '45 min' },
            { naam: 'Hoofdmassage', prijs: '€20', duur: '20 min' }
        ]
    },
    {
        category: 'Combinaties',
        services: [
            { naam: 'Knippen + Kleuren', prijs: '€90', duur: '150 min' },
            { naam: 'Knippen + Highlights', prijs: '€110', duur: '180 min' },
            { naam: 'Knippen + Behandeling', prijs: '€60', duur: '90 min' },
            { naam: 'Volledige service', prijs: '€130', duur: '210 min' }
        ]
    }
];

export const metadata = {
    title: 'Prijzen'
};

export default function PrijzenPage() {
    return (
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 py-4 sm:py-6 lg:py-8">
            <section className="text-center py-4 sm:py-6 lg:py-8 animate-fade-in-up">
                <h1 className="mb-3 sm:mb-4 lg:mb-6">Onze Prijzen</h1>
                <p className="mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                    Transparante prijzen voor al onze diensten. Alle prijzen zijn inclusief BTW.
                </p>
            </section>

            <section className="py-4 sm:py-6 lg:py-8">
                <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                    {prijzen.map((categorie, catIndex) => (
                        <div key={categorie.category} className="animate-fade-in-up" style={{ animationDelay: `${catIndex * 0.1}s` }}>
                            <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl">{categorie.category}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                {categorie.services.map((service, index) => (
                                    <Card 
                                        key={service.naam}
                                        className="animate-fade-in-up"
                                        style={{ animationDelay: `${(catIndex * 0.1) + (index * 0.05)}s` }}
                                    >
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-100">
                                                {service.naam}
                                            </h3>
                                            <div className="flex items-center justify-between pt-2 border-t border-neutral-200 dark:border-neutral-700">
                                                <span className="text-xl sm:text-2xl font-bold text-[#6366f1]">
                                                    {service.prijs}
                                                </span>
                                                <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                                                    {service.duur}
                                                </span>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-4 sm:py-6 lg:py-8 border-t border-neutral-200 dark:border-neutral-800">
                <Card className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <h2 className="mb-4 sm:mb-6 text-center">Belangrijke Informatie</h2>
                    <div className="space-y-3 text-xs sm:text-sm">
                        <div className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] mt-1.5 flex-shrink-0"></span>
                            <p>
                                Alle prijzen zijn inclusief BTW en kunnen variëren afhankelijk van 
                                haarlengte en complexiteit van de behandeling.
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] mt-1.5 flex-shrink-0"></span>
                            <p>
                                Voor een exacte prijsopgave raden wij aan om een consultatie afspraak te maken 
                                voordat u een behandeling boekt.
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] mt-1.5 flex-shrink-0"></span>
                            <p>
                                Wij accepteren contant, pin en creditcard. 
                                Voor grotere bedragen kunnen wij ook factureren.
                            </p>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1] mt-1.5 flex-shrink-0"></span>
                            <p>
                                Annuleren kan gratis tot 48 uur van tevoren. 
                                Bij late annulering kunnen kosten in rekening worden gebracht.
                            </p>
                        </div>
                    </div>
                </Card>
            </section>

            <section className="py-4 sm:py-6 lg:py-8 border-t border-neutral-200 dark:border-neutral-800 text-center">
                <h2 className="mb-3 sm:mb-4">Klaar om te Boeken?</h2>
                <p className="mb-4 text-sm sm:text-base max-w-xl mx-auto">
                    Heeft u vragen over onze prijzen of wilt u een afspraak maken? 
                    Neem contact met ons op of boek direct online.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                    <Link href="/afspraak" className="btn">
                        Maak Afspraak
                    </Link>
                    <Link href="/contact" className="btn">
                        Contact Opnemen
                    </Link>
                </div>
            </section>
        </div>
    );
}
