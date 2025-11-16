import Image from 'next/image';
import { Card } from 'components/card';
import Link from 'next/link';
import { Users, Camera, DollarSign, Phone } from 'lucide-react';

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
            <section className="text-center py-12 sm:py-16 lg:py-20 animate-fade-in-up">
                <div className="relative w-full max-w-5xl mx-auto mb-10 sm:mb-12 lg:mb-14 aspect-16/9 overflow-hidden rounded-3xl border border-neutral-200/30 dark:border-neutral-700/30 shadow-2xl min-h-[300px] sm:min-h-[400px] group">
                    <Image
                        src={`https://images.unsplash.com/photo-${heroImage.id}`}
                        alt={heroImage.alt}
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1024px) 100vw, 1280px"
                        priority
                        unoptimized
                        className="transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/20 via-transparent to-[#818cf8]/10 mix-blend-overlay" />
                </div>
                <h1 className="mb-8 sm:mb-10 lg:mb-12 animate-scale-in">Professionele Kappers</h1>
                <p className="mb-10 sm:mb-12 lg:mb-14 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed text-neutral-600 dark:text-neutral-400 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    Wij zorgen voor de perfecte look. Van klassieke knippen tot moderne stijlen, 
                    wij maken u klaar voor elke gelegenheid.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <Link href="/afspraak" className="btn btn-lg">
                        Maak een Afspraak
                    </Link>
                    <Link href="/diensten" className="btn btn-lg">
                        Bekijk Diensten
                    </Link>
                </div>
            </section>

            {/* Diensten Preview Section */}
            <section className="py-12 sm:py-16 lg:py-20">
                <h2 className="mb-8 sm:mb-10 text-center">Onze Diensten</h2>
                <p className="mb-12 sm:mb-14 lg:mb-16 text-center text-base sm:text-lg max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400">
                    Wij bieden een breed scala aan professionele kappersdiensten. 
                    Van klassieke knippen tot moderne styling.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7 mb-10 sm:mb-12">
                    <Card title="Herenknippen" className="animate-fade-in-up text-center" style={{ animationDelay: '0.1s' }}>
                        <div className="relative w-full aspect-square mb-5 overflow-hidden rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 shadow-md group/image">
                            <Image
                                src={`https://images.unsplash.com/photo-${serviceImages.herenknippen.id}`}
                                alt={serviceImages.herenknippen.alt}
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                unoptimized
                                className="transition-all duration-700 ease-out group-hover/image:scale-110 group-hover/image:rotate-2"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                        </div>
                        <Link href="/diensten" className="text-[#6366f1] dark:text-[#818cf8] hover:text-[#4f46e5] dark:hover:text-[#6366f1] transition-colors text-sm font-semibold inline-flex items-center gap-1 group/link">
                            <span>Meer informatie</span>
                            <span className="transition-transform group-hover/link:translate-x-1">→</span>
                        </Link>
                    </Card>
                    <Card title="Damesknippen" className="animate-fade-in-up text-center" style={{ animationDelay: '0.2s' }}>
                        <div className="relative w-full aspect-square mb-5 overflow-hidden rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 shadow-md group/image">
                            <Image
                                src={`https://images.unsplash.com/photo-${serviceImages.damesknippen.id}`}
                                alt={serviceImages.damesknippen.alt}
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                unoptimized
                                className="transition-all duration-700 ease-out group-hover/image:scale-110 group-hover/image:rotate-2"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                        </div>
                        <Link href="/diensten" className="text-[#6366f1] dark:text-[#818cf8] hover:text-[#4f46e5] dark:hover:text-[#6366f1] transition-colors text-sm font-semibold inline-flex items-center gap-1 group/link">
                            <span>Meer informatie</span>
                            <span className="transition-transform group-hover/link:translate-x-1">→</span>
                        </Link>
                    </Card>
                    <Card title="Baardverzorging" className="animate-fade-in-up text-center" style={{ animationDelay: '0.3s' }}>
                        <div className="relative w-full aspect-square mb-5 overflow-hidden rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 shadow-md group/image">
                            <Image
                                src={`https://images.unsplash.com/photo-${serviceImages.baardverzorging.id}`}
                                alt={serviceImages.baardverzorging.alt}
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                unoptimized
                                className="transition-all duration-700 ease-out group-hover/image:scale-110 group-hover/image:rotate-2"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                        </div>
                        <Link href="/diensten" className="text-[#6366f1] dark:text-[#818cf8] hover:text-[#4f46e5] dark:hover:text-[#6366f1] transition-colors text-sm font-semibold inline-flex items-center gap-1 group/link">
                            <span>Meer informatie</span>
                            <span className="transition-transform group-hover/link:translate-x-1">→</span>
                        </Link>
                    </Card>
                    <Card title="Haarverzorging" className="animate-fade-in-up text-center" style={{ animationDelay: '0.4s' }}>
                        <div className="relative w-full aspect-square mb-5 overflow-hidden rounded-2xl border border-neutral-200/50 dark:border-neutral-700/50 shadow-md group/image">
                            <Image
                                src={`https://images.unsplash.com/photo-${serviceImages.haarverzorging.id}`}
                                alt={serviceImages.haarverzorging.alt}
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                unoptimized
                                className="transition-all duration-700 ease-out group-hover/image:scale-110 group-hover/image:rotate-2"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-500" />
                        </div>
                        <Link href="/diensten" className="text-[#6366f1] dark:text-[#818cf8] hover:text-[#4f46e5] dark:hover:text-[#6366f1] transition-colors text-sm font-semibold inline-flex items-center gap-1 group/link">
                            <span>Meer informatie</span>
                            <span className="transition-transform group-hover/link:translate-x-1">→</span>
                        </Link>
                    </Card>
                </div>
                <div className="text-center">
                    <Link href="/diensten" className="btn">
                        Bekijk Alle Diensten
                    </Link>
                </div>
            </section>

            {/* Quick Links Section */}
            <section className="py-12 sm:py-16 lg:py-20 border-t border-neutral-200/50 dark:border-neutral-700/50">
                <h2 className="mb-10 sm:mb-12 lg:mb-14 text-center">Ontdek Meer</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
                    <Link href="/over-ons" className="group">
                        <Card className="h-full text-center transition-all duration-500 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <div className="flex justify-center mb-5">
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#6366f1]/10 to-[#818cf8]/5 dark:from-[#6366f1]/20 dark:to-[#818cf8]/10 group-hover:from-[#6366f1]/20 group-hover:to-[#818cf8]/10 dark:group-hover:from-[#6366f1]/30 dark:group-hover:to-[#818cf8]/20 transition-all duration-500 group-hover:rotate-6">
                                    <Users className="w-8 h-8 text-[#6366f1] dark:text-[#818cf8] group-hover:scale-110 transition-transform duration-500" strokeWidth={2} />
                                </div>
                            </div>
                            <h3 className="mb-3">Over Ons</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                Leer meer over ons team en onze geschiedenis
                            </p>
                        </Card>
                    </Link>
                    <Link href="/galerij" className="group">
                        <Card className="h-full text-center transition-all duration-500 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="flex justify-center mb-5">
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#6366f1]/10 to-[#818cf8]/5 dark:from-[#6366f1]/20 dark:to-[#818cf8]/10 group-hover:from-[#6366f1]/20 group-hover:to-[#818cf8]/10 dark:group-hover:from-[#6366f1]/30 dark:group-hover:to-[#818cf8]/20 transition-all duration-500 group-hover:rotate-6">
                                    <Camera className="w-8 h-8 text-[#6366f1] dark:text-[#818cf8] group-hover:scale-110 transition-transform duration-500" strokeWidth={2} />
                                </div>
                            </div>
                            <h3 className="mb-3">Galerij</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                Bekijk onze werk en laat u inspireren
                            </p>
                        </Card>
                    </Link>
                    <Link href="/prijzen" className="group">
                        <Card className="h-full text-center transition-all duration-500 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <div className="flex justify-center mb-5">
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#6366f1]/10 to-[#818cf8]/5 dark:from-[#6366f1]/20 dark:to-[#818cf8]/10 group-hover:from-[#6366f1]/20 group-hover:to-[#818cf8]/10 dark:group-hover:from-[#6366f1]/30 dark:group-hover:to-[#818cf8]/20 transition-all duration-500 group-hover:rotate-6">
                                    <DollarSign className="w-8 h-8 text-[#6366f1] dark:text-[#818cf8] group-hover:scale-110 transition-transform duration-500" strokeWidth={2} />
                                </div>
                            </div>
                            <h3 className="mb-3">Prijzen</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                Transparante prijzen voor al onze diensten
                            </p>
                        </Card>
                    </Link>
                    <Link href="/contact" className="group">
                        <Card className="h-full text-center transition-all duration-500 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <div className="flex justify-center mb-5">
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-[#6366f1]/10 to-[#818cf8]/5 dark:from-[#6366f1]/20 dark:to-[#818cf8]/10 group-hover:from-[#6366f1]/20 group-hover:to-[#818cf8]/10 dark:group-hover:from-[#6366f1]/30 dark:group-hover:to-[#818cf8]/20 transition-all duration-500 group-hover:rotate-6">
                                    <Phone className="w-8 h-8 text-[#6366f1] dark:text-[#818cf8] group-hover:scale-110 transition-transform duration-500" strokeWidth={2} />
                                </div>
                            </div>
                            <h3 className="mb-3">Contact</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                Neem contact met ons op voor vragen
                            </p>
                        </Card>
                    </Link>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-20 border-t border-neutral-200/50 dark:border-neutral-700/50 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 via-transparent to-[#818cf8]/5 pointer-events-none" />
                <div className="relative z-10">
                    <h2 className="mb-8 sm:mb-10">Klaar voor Uw Nieuwe Look?</h2>
                    <p className="mb-10 sm:mb-12 text-base sm:text-lg max-w-2xl mx-auto text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Maak vandaag nog een afspraak en laat u verwennen met onze professionele service.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link href="/afspraak" className="btn btn-lg">
                            Maak een Afspraak
                        </Link>
                        <Link href="/contact" className="btn btn-lg">
                            Contact Opnemen
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
