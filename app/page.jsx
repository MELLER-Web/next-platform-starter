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
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <Link href="/afspraak" className="btn btn-lg">
                        Maak een Afspraak
                    </Link>
                    <Link href="/diensten" className="btn btn-lg">
                        Bekijk Diensten
                    </Link>
                </div>
            </section>

            {/* Diensten Preview Section */}
            <section className="py-8 sm:py-12 lg:py-16">
                <h2 className="mb-6 sm:mb-8 text-center">Onze Diensten</h2>
                <p className="mb-10 sm:mb-12 lg:mb-16 text-center text-base sm:text-lg max-w-2xl mx-auto">
                    Wij bieden een breed scala aan professionele kappersdiensten. 
                    Van klassieke knippen tot moderne styling.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
                    <Card title="Herenknippen" className="animate-fade-in-up text-center" style={{ animationDelay: '0.1s' }}>
                        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-lg group/image">
                            <Image
                                src={`https://images.unsplash.com/photo-${serviceImages.herenknippen.id}`}
                                alt={serviceImages.herenknippen.alt}
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                unoptimized
                                className="transition-transform duration-500 group-hover/image:scale-110"
                            />
                        </div>
                        <Link href="/diensten" className="text-[#6366f1] hover:underline text-sm font-medium">
                            Meer informatie →
                        </Link>
                    </Card>
                    <Card title="Damesknippen" className="animate-fade-in-up text-center" style={{ animationDelay: '0.2s' }}>
                        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-lg group/image">
                            <Image
                                src={`https://images.unsplash.com/photo-${serviceImages.damesknippen.id}`}
                                alt={serviceImages.damesknippen.alt}
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                unoptimized
                                className="transition-transform duration-500 group-hover/image:scale-110"
                            />
                        </div>
                        <Link href="/diensten" className="text-[#6366f1] hover:underline text-sm font-medium">
                            Meer informatie →
                        </Link>
                    </Card>
                    <Card title="Baardverzorging" className="animate-fade-in-up text-center" style={{ animationDelay: '0.3s' }}>
                        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-lg group/image">
                            <Image
                                src={`https://images.unsplash.com/photo-${serviceImages.baardverzorging.id}`}
                                alt={serviceImages.baardverzorging.alt}
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                unoptimized
                                className="transition-transform duration-500 group-hover/image:scale-110"
                            />
                        </div>
                        <Link href="/diensten" className="text-[#6366f1] hover:underline text-sm font-medium">
                            Meer informatie →
                        </Link>
                    </Card>
                    <Card title="Haarverzorging" className="animate-fade-in-up text-center" style={{ animationDelay: '0.4s' }}>
                        <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-lg group/image">
                            <Image
                                src={`https://images.unsplash.com/photo-${serviceImages.haarverzorging.id}`}
                                alt={serviceImages.haarverzorging.alt}
                                fill={true}
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                unoptimized
                                className="transition-transform duration-500 group-hover/image:scale-110"
                            />
                        </div>
                        <Link href="/diensten" className="text-[#6366f1] hover:underline text-sm font-medium">
                            Meer informatie →
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
            <section className="py-8 sm:py-12 lg:py-16 border-t border-neutral-200 dark:border-neutral-800">
                <h2 className="mb-8 sm:mb-10 lg:mb-12 text-center">Ontdek Meer</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    <Link href="/over-ons" className="group">
                        <Card className="h-full text-center transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <div className="flex justify-center mb-4">
                                <div className="p-3 rounded-full bg-[#6366f1]/10 dark:bg-[#6366f1]/20 group-hover:bg-[#6366f1]/20 dark:group-hover:bg-[#6366f1]/30 transition-colors">
                                    <Users className="w-8 h-8 text-[#6366f1] group-hover:scale-110 transition-transform" strokeWidth={2} />
                                </div>
                            </div>
                            <h3 className="mb-2">Over Ons</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Leer meer over ons team en onze geschiedenis
                            </p>
                        </Card>
                    </Link>
                    <Link href="/galerij" className="group">
                        <Card className="h-full text-center transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="flex justify-center mb-4">
                                <div className="p-3 rounded-full bg-[#6366f1]/10 dark:bg-[#6366f1]/20 group-hover:bg-[#6366f1]/20 dark:group-hover:bg-[#6366f1]/30 transition-colors">
                                    <Camera className="w-8 h-8 text-[#6366f1] group-hover:scale-110 transition-transform" strokeWidth={2} />
                                </div>
                            </div>
                            <h3 className="mb-2">Galerij</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Bekijk onze werk en laat u inspireren
                            </p>
                        </Card>
                    </Link>
                    <Link href="/prijzen" className="group">
                        <Card className="h-full text-center transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <div className="flex justify-center mb-4">
                                <div className="p-3 rounded-full bg-[#6366f1]/10 dark:bg-[#6366f1]/20 group-hover:bg-[#6366f1]/20 dark:group-hover:bg-[#6366f1]/30 transition-colors">
                                    <DollarSign className="w-8 h-8 text-[#6366f1] group-hover:scale-110 transition-transform" strokeWidth={2} />
                                </div>
                            </div>
                            <h3 className="mb-2">Prijzen</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Transparante prijzen voor al onze diensten
                            </p>
                        </Card>
                    </Link>
                    <Link href="/contact" className="group">
                        <Card className="h-full text-center transition-all duration-300 hover:scale-105 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <div className="flex justify-center mb-4">
                                <div className="p-3 rounded-full bg-[#6366f1]/10 dark:bg-[#6366f1]/20 group-hover:bg-[#6366f1]/20 dark:group-hover:bg-[#6366f1]/30 transition-colors">
                                    <Phone className="w-8 h-8 text-[#6366f1] group-hover:scale-110 transition-transform" strokeWidth={2} />
                                </div>
                            </div>
                            <h3 className="mb-2">Contact</h3>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                Neem contact met ons op voor vragen
                            </p>
                        </Card>
                    </Link>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-8 sm:py-12 lg:py-16 border-t border-neutral-200 dark:border-neutral-800 text-center">
                <h2 className="mb-6 sm:mb-8">Klaar voor Uw Nieuwe Look?</h2>
                <p className="mb-8 text-base sm:text-lg max-w-2xl mx-auto">
                    Maak vandaag nog een afspraak en laat u verwennen met onze professionele service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/afspraak" className="btn btn-lg">
                        Maak een Afspraak
                    </Link>
                    <Link href="/contact" className="btn btn-lg">
                        Contact Opnemen
                    </Link>
                </div>
            </section>
        </div>
    );
}
