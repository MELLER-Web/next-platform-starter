import Image from 'next/image';
import { Card } from 'components/card';
import Link from 'next/link';

const serviceImages = {
    herenknippen: {
        id: '1503951914875-34826072a606',
        alt: 'Herenknippen',
        photographer: 'Jonathan Borba',
        photographerUrl: 'https://unsplash.com/@jonathanborba',
        photoUrl: 'https://unsplash.com/photos/man-getting-haircut-1503951914875-34826072a606'
    },
    damesknippen: {
        id: '1519699043492-671485b9f4f6',
        alt: 'Damesknippen',
        photographer: 'Jonathan Borba',
        photographerUrl: 'https://unsplash.com/@jonathanborba',
        photoUrl: 'https://unsplash.com/photos/woman-getting-haircut-1519699043492-671485b9f4f6'
    },
    baardverzorging: {
        id: '1506794778202-cad84cf45f1d',
        alt: 'Baardverzorging',
        photographer: 'Dmitriy Frantsev',
        photographerUrl: 'https://unsplash.com/@dmitriy',
        photoUrl: 'https://unsplash.com/photos/man-with-beard-1506794778202-cad84cf45f1d'
    },
    haarverzorging: {
        id: '1522338241222-1b5e24596fc4',
        alt: 'Haarverzorging',
        photographer: 'Jonathan Borba',
        photographerUrl: 'https://unsplash.com/@jonathanborba',
        photoUrl: 'https://unsplash.com/photos/woman-getting-hair-treatment-1522338241222-1b5e24596fc4'
    },
    kleuren: {
        id: '1522337360788-8b13dee7a14e',
        alt: 'Haarkleuren',
        photographer: 'Jonathan Borba',
        photographerUrl: 'https://unsplash.com/@jonathanborba',
        photoUrl: 'https://unsplash.com/photos/man-cutting-hair-1522337360788-8b13dee7a14e'
    },
    styling: {
        id: '1562322140-8baeececf3df',
        alt: 'Haarstyling',
        photographer: 'Jonathan Borba',
        photographerUrl: 'https://unsplash.com/@jonathanborba',
        photoUrl: 'https://unsplash.com/photos/hair-salon-interior-1562322140-8baeececf3df'
    }
};

const services = [
    {
        title: 'Herenknippen',
        image: serviceImages.herenknippen,
        description: 'Professioneel herenknippen met aandacht voor detail. Wij zorgen voor een perfecte pasvorm en stijl die bij u past. Van klassieke tot moderne stijlen.',
        features: ['Klassieke knippen', 'Moderne stijlen', 'Fade & Undercut', 'Precisie werk']
    },
    {
        title: 'Damesknippen',
        image: serviceImages.damesknippen,
        description: 'Moderne en klassieke damesknippen. Van kort tot lang, wij creëren de perfecte look voor elke gelegenheid. Onze stylisten zijn gespecialiseerd in alle haartypes.',
        features: ['Layered cuts', 'Bob knippen', 'Long layers', 'Pixie cuts']
    },
    {
        title: 'Baardverzorging',
        image: serviceImages.baardverzorging,
        description: 'Professionele baardverzorging en styling. Van trimmen tot volledige baardverzorging. Wij zorgen dat uw baard er altijd verzorgd uitziet.',
        features: ['Baard trimmen', 'Baard styling', 'Hot towel behandeling', 'Baard olie']
    },
    {
        title: 'Haarverzorging',
        image: serviceImages.haarverzorging,
        description: 'Complete haarverzorging inclusief wassen, knippen en styling. Laat u verwennen met onze professionele service en hoogwaardige producten.',
        features: ['Haar wassen', 'Behandelingen', 'Haarverzorging producten', 'Professioneel advies']
    },
    {
        title: 'Haarkleuren',
        image: serviceImages.kleuren,
        description: 'Professioneel haarkleuren met de nieuwste technieken en hoogwaardige producten. Van highlights tot volledige kleurverandering.',
        features: ['Highlights', 'Balayage', 'Volledige kleur', 'Kleurcorrectie']
    },
    {
        title: 'Haarstyling',
        image: serviceImages.styling,
        description: 'Professionele haarstyling voor speciale gelegenheden. Van bruiloften tot feesten, wij zorgen dat u er perfect uitziet.',
        features: ['Bruiloft styling', 'Feest styling', 'Opmaak', 'Haar accessoires']
    }
];

export const metadata = {
    title: 'Diensten'
};

export default function DienstenPage() {
    return (
        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 py-4 sm:py-6 lg:py-8">
            <section className="text-center py-4 sm:py-6 lg:py-8 animate-fade-in-up">
                <h1 className="mb-3 sm:mb-4 lg:mb-6">Onze Diensten</h1>
                <p className="mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                    Wij bieden een breed scala aan professionele kappersdiensten. 
                    Van klassieke knippen tot moderne styling, wij hebben alles wat u nodig heeft.
                </p>
            </section>

            <section className="py-4 sm:py-6 lg:py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                    {services.map((service, index) => (
                        <Card 
                            key={service.title} 
                            title={service.title} 
                            className="animate-fade-in-up" 
                            style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                        >
                            <div className="relative w-full aspect-4/3 mb-3 overflow-hidden rounded-md border border-neutral-200 dark:border-neutral-700 shadow-sm group/image min-h-[180px]">
                                <Image
                                    src={`https://images.unsplash.com/photo-${service.image.id}`}
                                    alt={service.image.alt}
                                    fill={true}
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    unoptimized
                                    className="transition-transform duration-500 group-hover/image:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                            </div>
                            <p className="text-xs sm:text-sm leading-relaxed mb-3">
                                {service.description}
                            </p>
                            <ul className="space-y-1.5 mb-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm">
                                        <span className="w-1 h-1 rounded-full bg-[#6366f1] flex-shrink-0"></span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/afspraak" className="btn mt-2 w-full">
                                Maak Afspraak
                            </Link>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="py-4 sm:py-6 lg:py-8 border-t border-neutral-200 dark:border-neutral-800 text-center">
                <h2 className="mb-3 sm:mb-4">Vragen over onze diensten?</h2>
                <p className="mb-4 text-sm sm:text-base max-w-xl mx-auto">
                    Neem contact met ons op voor meer informatie of maak direct een afspraak.
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
                    <Link href="/contact" className="btn">
                        Contact Opnemen
                    </Link>
                    <Link href="/afspraak" className="btn">
                        Afspraak Maken
                    </Link>
                </div>
            </section>
        </div>
    );
}
