import './globals.css';
// include styles from the ui package
import 'ui/styles.css';

import {Inter} from 'next/font/google';

import type {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Tier Docs',
    description: 'Best possible docs for Tier'
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ['latin'],
    display: 'swap'
});

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en" className={inter.className}>
            <body className="bg-zinc-900 antialiased">{children}</body>
        </html>
    );
}
