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
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 py-8 sm:py-12 lg:py-16">
            {/* Hero Section */}
            <section className="text-center py-8 sm:py-12 lg:py-16 animate-fade-in-up">
                <div className="relative w-full max-w-5xl mx-auto mb-8 sm:mb-10 lg:mb-12 aspect-16/9 overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl min-h-[300px] sm:min-h-[400px] group">
                    <Image
                        src={`https://images.unsplash.com/photo-${heroImage.id}`}
                        alt={heroImage.alt}
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1024px) 100vw, 1280px"
                        priority
                        unoptimized
                        className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-neutral-900/20 to-transparent" />
                </div>
                <h1 className="mb-6 sm:mb-8 lg:mb-10">Professionele Kappers</h1>
                <p className="mb-8 sm:mb-10 lg:mb-12 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                    Wij zorgen voor de perfecte look. Van klassieke knippen tot moderne stijlen, 
                    wij maken u klaar voor elke gelegenheid.
                </p>
                <a href="#contact" className="btn btn-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Maak een Afspraak
                </a>
            </section>

            {/* Diensten Section */}
            <section id="diensten" className="py-8 sm:py-12 lg:py-16">
                <h2 className="mb-10 sm:mb-12 lg:mb-16 text-center">Onze Diensten</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                    <Card title="Herenknippen" className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <div className="relative w-full aspect-4/3 mb-5 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-lg group/image min-h-[220px]">
                            <Image
                                src={`https://images.unsplash.com/photo-${serviceImages.herenknippen.id}`}
                                alt={serviceImages.herenknippen.alt}
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                unoptimized
                                className="transition-transform duration-500 group-hover/image:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                        </div>
                        <p className="text-sm sm:text-base leading-relaxed">
                            Professioneel herenknippen met aandacht voor detail. 
                            Wij zorgen voor een perfecte pasvorm en stijl die bij u past.
                        </p>
                    </Card>
                    <Card title="Damesknippen" className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="relative w-full aspect-4/3 mb-5 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-lg group/image min-h-[220px]">
                            <Image
                                src={`https://images.unsplash.com/photo-${serviceImages.damesknippen.id}`}
                                alt={serviceImages.damesknippen.alt}
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                unoptimized
                                className="transition-transform duration-500 group-hover/image:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                        </div>
                        <p className="text-sm sm:text-base leading-relaxed">
                            Moderne en klassieke damesknippen. Van kort tot lang, 
                            wij creëren de perfecte look voor elke gelegenheid.
                        </p>
                    </Card>
                    <Card title="Baardverzorging" className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="relative w-full aspect-4/3 mb-5 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-lg group/image min-h-[220px]">
                            <Image
                                src={`https://images.unsplash.com/photo-${serviceImages.baardverzorging.id}`}
                                alt={serviceImages.baardverzorging.alt}
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                unoptimized
                                className="transition-transform duration-500 group-hover/image:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                        </div>
                        <p className="text-sm sm:text-base leading-relaxed">
                            Professionele baardverzorging en styling. 
                            Van trimmen tot volledige baardverzorging.
                        </p>
                    </Card>
                    <Card title="Haarverzorging" className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="relative w-full aspect-4/3 mb-5 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-lg group/image min-h-[220px]">
                            <Image
                                src={`https://images.unsplash.com/photo-${serviceImages.haarverzorging.id}`}
                                alt={serviceImages.haarverzorging.alt}
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                unoptimized
                                className="transition-transform duration-500 group-hover/image:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                        </div>
                        <p className="text-sm sm:text-base leading-relaxed">
                            Complete haarverzorging inclusief wassen, knippen en styling. 
                            Laat u verwennen met onze professionele service.
                        </p>
                    </Card>
                </div>
            </section>

            {/* Over Ons Section */}
            <section id="over-ons" className="py-8 sm:py-12 lg:py-16 border-t border-neutral-200 dark:border-neutral-800">
                <h2 className="mb-8 sm:mb-10 lg:mb-12">Over Ons</h2>
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
            <section id="contact" className="py-8 sm:py-12 lg:py-16 border-t border-neutral-200 dark:border-neutral-800">
                <h2 className="mb-8 sm:mb-10 lg:mb-12">Contact</h2>
                <Card className="max-w-2xl mx-auto">
                    <div className="space-y-5 sm:space-y-6 text-sm sm:text-base lg:text-lg">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <strong className="text-neutral-900 dark:text-neutral-100 min-w-[100px]">Telefoon:</strong>
                            <a href="tel:+31123456789" className="text-[#6366f1] hover:text-[#818cf8] transition-colors font-medium">
                                012-3456789
                            </a>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                            <strong className="text-neutral-900 dark:text-neutral-100 min-w-[100px]">Email:</strong>
                            <a href="mailto:info@kappers.nl" className="text-[#6366f1] hover:text-[#818cf8] transition-colors font-medium">
                                info@kappers.nl
                            </a>
                        </div>
                        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                            <p className="mb-4 font-semibold text-neutral-900 dark:text-neutral-100">
                                <strong>Openingstijden:</strong>
                            </p>
                            <ul className="space-y-2 ml-2">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#6366f1]"></span>
                                    <span>Maandag - Vrijdag: <strong>09:00 - 18:00</strong></span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#6366f1]"></span>
                                    <span>Zaterdag: <strong>09:00 - 17:00</strong></span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-neutral-400"></span>
                                    <span className="text-neutral-600 dark:text-neutral-400">Zondag: Gesloten</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Card>
            </section>
        </div>
    );
}
