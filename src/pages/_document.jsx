import {Html, Head, Main, NextScript} from 'next/document';

import {Header} from '@/components/Header';
import {Sidebar} from '@/components/Sidebar';

export default function Document() {
    return (
        <Html lang="en" className="font-sans bg-slate-900">
            <Head>
                {/* Preloading Inter */}
                <link
                    rel="preload"
                    href="/fonts/Inter/inter-var-latin.woff2"
                    as="font"
                    type="font/woff2"
                    crossOrigin="anonymous"
                />
            </Head>
            <body className="antialiased text-white ">
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
                        <Main />
                    </main>
                </div>
                <NextScript />
            </body>
        </Html>
    );
}
