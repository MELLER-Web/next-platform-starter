import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
    title: {
        template: '%s | Kappers',
        default: 'Kappers'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="nl">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className="antialiased text-black bg-white">
                <div className="flex flex-col min-h-screen px-4 sm:px-6">
                    <div className="flex flex-col w-full max-w-4xl mx-auto grow">
                        <Header />
                        <main className="grow">{children}</main>
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
