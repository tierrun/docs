import '@/styles/tailwind.css';
import {DM_Sans} from 'next/font/google';

import {Header} from '@/components/Header';
import {Sidebar} from '@/components/Sidebar';

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-dmSans'
});

export default function App({Component, pageProps}) {
    return (
        <div className={`${dmSans.variable} font-sans text-white antialiased`}>
            <header className="fixed inset-0 z-40 flex">
                <div className="block px-6 pt-4 pb-8 overflow-y-auto border-r w-72 border-white/10 ">
                    <div className="flex">
                        <p className="h-6">Logo</p>
                    </div>
                    <Header />
                    <Sidebar />
                </div>
            </header>
            <div className="relative px-8 ml-72 pt-14">
                <main className="py-16 prose prose-slate invert">
                    <Component {...pageProps} />
                </main>
            </div>
        </div>
        // <div className={`${dmSans.variable} font-sans`}>

        // </div>
    );
}
