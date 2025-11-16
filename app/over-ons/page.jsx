import Image from 'next/image';
import { Card } from 'components/card';
import Link from 'next/link';

const aboutImage = {
    id: '1562322140-8baeececf3df',
    alt: 'Kapperssalon interieur',
    photographer: 'Jonathan Borba',
    photographerUrl: 'https://unsplash.com/@jonathanborba',
    photoUrl: 'https://unsplash.com/photos/hair-salon-interior-1562322140-8baeececf3df'
};

const teamImage = {
    id: '1522337360788-8b13dee7a14e',
    alt: 'Ons team',
    photographer: 'Jonathan Borba',
    photographerUrl: 'https://unsplash.com/@jonathanborba',
    photoUrl: 'https://unsplash.com/photos/man-cutting-hair-1522337360788-8b13dee7a14e'
};

const values = [
    {
        title: 'Kwaliteit',
        description: 'Wij gebruiken alleen de beste producten en technieken om u de hoogste kwaliteit service te bieden.'
    },
    {
        title: 'Ervaring',
        description: 'Ons team heeft jarenlange ervaring en blijft op de hoogte van de nieuwste trends en technieken.'
    },
    {
        title: 'Gastvrijheid',
        description: 'Bij ons voelt u zich thuis. Wij zorgen voor een warme en gastvrije sfeer tijdens uw bezoek.'
    },
    {
        title: 'Persoonlijke Aandacht',
        description: 'Elke klant krijgt persoonlijke aandacht en advies op maat voor de perfecte look.'
    }
];

export const metadata = {
    title: 'Over Ons'
};

export default function OverOnsPage() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 py-8 sm:py-12 lg:py-16">
            <section className="text-center py-8 sm:py-12 lg:py-16 animate-fade-in-up">
                <h1 className="mb-6 sm:mb-8 lg:mb-10">Over Ons</h1>
                <p className="mb-8 sm:mb-10 lg:mb-12 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                    Welkom bij Kappers, waar traditie en moderniteit samenkomen voor de perfecte look.
                </p>
            </section>

            <section className="py-8 sm:py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                    <div className="relative w-full aspect-4/3 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl min-h-[300px] group order-2 md:order-1">
                        <Image
                            src={`https://images.unsplash.com/photo-${aboutImage.id}`}
                            alt={aboutImage.alt}
                            fill={true}
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            unoptimized
                            className="transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="space-y-5 sm:space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed order-1 md:order-2">
                        <h2 className="text-2xl sm:text-3xl mb-4">Ons Verhaal</h2>
                        <p>
                            Met jarenlange ervaring in de kappersbranche bieden wij hoogwaardige 
                            kappersdiensten aan. Ons team bestaat uit ervaren professionals die 
                            gepassioneerd zijn over hun vak.
                        </p>
                        <p>
                            Wij combineren traditionele technieken met moderne trends om u de 
                            beste service te bieden. Uw tevredenheid staat bij ons centraal.
                        </p>
                        <p>
                            Sinds onze oprichting hebben wij duizenden tevreden klanten geholpen 
                            om hun perfecte look te vinden. Wij geloven dat iedereen er op zijn 
                            best uit moet zien.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-8 sm:py-12 lg:py-16 border-t border-neutral-200 dark:border-neutral-800">
                <h2 className="mb-8 sm:mb-10 lg:mb-12 text-center">Onze Waarden</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {values.map((value, index) => (
                        <Card 
                            key={value.title} 
                            title={value.title}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                        >
                            <p className="text-sm sm:text-base leading-relaxed">
                                {value.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="py-8 sm:py-12 lg:py-16 border-t border-neutral-200 dark:border-neutral-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                    <div className="space-y-5 sm:space-y-6 text-sm sm:text-base lg:text-lg leading-relaxed order-2 md:order-2">
                        <h2 className="text-2xl sm:text-3xl mb-4">Ons Team</h2>
                        <p>
                            Ons team bestaat uit gepassioneerde professionals die continu bijscholen 
                            en op de hoogte blijven van de nieuwste trends en technieken in de 
                            kappersbranche.
                        </p>
                        <p>
                            Wij werken samen als een team om u de beste ervaring te bieden. 
                            Elke stylist heeft zijn of haar eigen specialisatie, waardoor wij 
                            een breed scala aan diensten kunnen aanbieden.
                        </p>
                        <p>
                            Kom langs en maak kennis met ons team. Wij staan klaar om u te 
                            helpen uw perfecte look te vinden.
                        </p>
                    </div>
                    <div className="relative w-full aspect-4/3 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl min-h-[300px] group order-1 md:order-1">
                        <Image
                            src={`https://images.unsplash.com/photo-${teamImage.id}`}
                            alt={teamImage.alt}
                            fill={true}
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            unoptimized
                            className="transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                </div>
            </section>

            <section className="py-8 sm:py-12 lg:py-16 border-t border-neutral-200 dark:border-neutral-800 text-center">
                <h2 className="mb-6 sm:mb-8">Kom Bij Ons Langs</h2>
                <p className="mb-8 text-base sm:text-lg max-w-2xl mx-auto">
                    Wij nodigen u uit om onze salon te bezoeken en kennis te maken met ons team. 
                    Maak een afspraak of neem contact met ons op.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
