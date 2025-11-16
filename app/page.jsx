import Image from 'next/image';
import { Card } from 'components/card';

// Unsplash foto's voor de kapperswebsite
const heroImage = {
    id: '1522337360788-8b13dee7a14e',
    alt: 'Professionele kapper aan het werk',
    photographer: 'Jonathan Borba',
    photographerUrl: 'https://unsplash.com/@jonathanborba',
    photoUrl: 'https://unsplash.com/photos/man-cutting-hair-1522337360788-8b13dee7a14e'
};

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
    }
};

const aboutImage = {
    id: '1562322140-8baeececf3df',
    alt: 'Kapperssalon interieur',
    photographer: 'Jonathan Borba',
    photographerUrl: 'https://unsplash.com/@jonathanborba',
    photoUrl: 'https://unsplash.com/photos/hair-salon-interior-1562322140-8baeececf3df'
};

export default function Page() {
    return (
        <div className="flex flex-col gap-8 sm:gap-12 py-6 sm:py-8">
            {/* Hero Section */}
            <section className="text-center py-8 sm:py-12">
                <div className="relative w-full max-w-4xl mx-auto mb-6 sm:mb-8 aspect-16/9 overflow-hidden rounded-lg border-2 border-black min-h-[250px]">
                    <Image
                        src={`https://images.unsplash.com/photo-${heroImage.id}`}
                        alt={heroImage.alt}
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        priority
                        unoptimized
                    />
                </div>
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
                        <div className="relative w-full aspect-4/3 mb-4 overflow-hidden rounded border border-black min-h-[200px]">
                            <Image
                                src={`https://images.unsplash.com/photo-${serviceImages.herenknippen.id}`}
                                alt={serviceImages.herenknippen.alt}
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                unoptimized
                            />
                        </div>
                        <p className="text-sm sm:text-base">
                            Professioneel herenknippen met aandacht voor detail. 
                            Wij zorgen voor een perfecte pasvorm en stijl die bij u past.
                        </p>
                    </Card>
                    <Card title="Damesknippen">
                        <div className="relative w-full aspect-4/3 mb-4 overflow-hidden rounded border border-black min-h-[200px]">
                            <Image
                                src={`https://images.unsplash.com/photo-${serviceImages.damesknippen.id}`}
                                alt={serviceImages.damesknippen.alt}
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                unoptimized
                            />
                        </div>
                        <p className="text-sm sm:text-base">
                            Moderne en klassieke damesknippen. Van kort tot lang, 
                            wij creëren de perfecte look voor elke gelegenheid.
                        </p>
                    </Card>
                    <Card title="Baardverzorging">
                        <div className="relative w-full aspect-4/3 mb-4 overflow-hidden rounded border border-black min-h-[200px]">
                            <Image
                                src={`https://images.unsplash.com/photo-${serviceImages.baardverzorging.id}`}
                                alt={serviceImages.baardverzorging.alt}
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                unoptimized
                            />
                        </div>
                        <p className="text-sm sm:text-base">
                            Professionele baardverzorging en styling. 
                            Van trimmen tot volledige baardverzorging.
                        </p>
                    </Card>
                    <Card title="Haarverzorging">
                        <div className="relative w-full aspect-4/3 mb-4 overflow-hidden rounded border border-black min-h-[200px]">
                            <Image
                                src={`https://images.unsplash.com/photo-${serviceImages.haarverzorging.id}`}
                                alt={serviceImages.haarverzorging.alt}
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                unoptimized
                            />
                        </div>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                    <div className="relative w-full aspect-4/3 overflow-hidden rounded-lg border-2 border-black min-h-[250px]">
                        <Image
                            src={`https://images.unsplash.com/photo-${aboutImage.id}`}
                            alt={aboutImage.alt}
                            fill={true}
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            unoptimized
                        />
                    </div>
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
