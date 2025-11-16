import Image from 'next/image';
import { Card } from 'components/card';

const galleryImages = [
    { id: '1503951914875-34826072a606', alt: 'Herenknippen', category: 'Heren' },
    { id: '1519699043492-671485b9f4f6', alt: 'Damesknippen', category: 'Dames' },
    { id: '1506794778202-cad84cf45f1d', alt: 'Baardverzorging', category: 'Baard' },
    { id: '1522338241222-1b5e24596fc4', alt: 'Haarverzorging', category: 'Verzorging' },
    { id: '1522337360788-8b13dee7a14e', alt: 'Haarkleuren', category: 'Kleuren' },
    { id: '1562322140-8baeececf3df', alt: 'Salon interieur', category: 'Salon' },
    { id: '1503951914875-34826072a606', alt: 'Moderne stijl', category: 'Heren' },
    { id: '1519699043492-671485b9f4f6', alt: 'Klassieke look', category: 'Dames' },
    { id: '1506794778202-cad84cf45f1d', alt: 'Baard styling', category: 'Baard' },
    { id: '1522338241222-1b5e24596fc4', alt: 'Haar behandeling', category: 'Verzorging' },
    { id: '1522337360788-8b13dee7a14e', alt: 'Highlights', category: 'Kleuren' },
    { id: '1562322140-8baeececf3df', alt: 'Salon sfeer', category: 'Salon' }
];

const categories = ['Alles', 'Heren', 'Dames', 'Baard', 'Verzorging', 'Kleuren', 'Salon'];

export const metadata = {
    title: 'Galerij'
};

export default function GalerijPage() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 py-8 sm:py-12 lg:py-16">
            <section className="text-center py-8 sm:py-12 lg:py-16 animate-fade-in-up">
                <h1 className="mb-6 sm:mb-8 lg:mb-10">Galerij</h1>
                <p className="mb-8 sm:mb-10 lg:mb-12 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                    Bekijk onze werk en laat u inspireren door de looks die wij creëren.
                </p>
            </section>

            <section className="py-8 sm:py-12 lg:py-16">
                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-8 sm:mb-10">
                    {categories.map((category, index) => (
                        <button
                            key={category}
                            className="px-4 py-2 text-sm sm:text-base rounded-lg transition-all duration-200 bg-neutral-100 dark:bg-neutral-800 hover:bg-[#6366f1] hover:text-white dark:hover:bg-[#6366f1] font-medium animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {galleryImages.map((image, index) => (
                        <Card 
                            key={`${image.id}-${index}`}
                            className="p-0 overflow-hidden group animate-fade-in-up"
                            style={{ animationDelay: `${(index + 1) * 0.05}s` }}
                        >
                            <div className="relative w-full aspect-square overflow-hidden">
                                <Image
                                    src={`https://images.unsplash.com/photo-${image.id}`}
                                    alt={image.alt}
                                    fill={true}
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    unoptimized
                                    className="transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-white font-semibold text-sm sm:text-base">{image.alt}</p>
                                        <p className="text-white/80 text-xs sm:text-sm">{image.category}</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="py-8 sm:py-12 lg:py-16 border-t border-neutral-200 dark:border-neutral-800 text-center">
                <h2 className="mb-6 sm:mb-8">Laat U Inspireren</h2>
                <p className="mb-8 text-base sm:text-lg max-w-2xl mx-auto">
                    Heeft u een look gezien die u bevalt? Neem de foto mee naar uw afspraak 
                    en wij helpen u om dezelfde look te bereiken.
                </p>
                <a href="/afspraak" className="btn">
                    Maak een Afspraak
                </a>
            </section>
        </div>
    );
}
