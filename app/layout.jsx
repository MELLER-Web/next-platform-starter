import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';
import { Loading } from '../components/loading';

export const metadata = {
    title: {
        template: '%s | Kappers',
        default: 'Kappers'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="nl" className="scroll-smooth">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className="antialiased text-neutral-900 dark:text-neutral-100">
                <Loading />
                <div className="flex flex-col min-h-screen px-3 sm:px-4 lg:px-6">
                    <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                        <Header />
                        <main className="grow animate-fade-in">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
