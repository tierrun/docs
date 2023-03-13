import Link from 'next/link';
import {motion} from 'framer-motion';

import {Header} from '@/components/Header';
import {Sidebar} from '@/components/Sidebar';
import {Prose} from '@/components/Prose';

export function Layout({children}) {
    return (
        <div className="lg:ml-72 xl:ml-80">
            <motion.header
                layoutScroll
                className="fixed inset-0 z-40 flex pointer-events-none">
                <div className="block px-6 pt-4 pb-8 overflow-y-auto border-r pointer-events-auto w-72 border-slate-100/10">
                    <div className="fixed z-50 flex w-64 px-6 py-4 -mx-6 -my-4 backdrop-blur-lg">
                        <Link href="/" aria-label="Home">
                            <p className="h-6">Logo</p>
                        </Link>
                    </div>
                    <Header />
                    <Sidebar className="block mt-10 -z-10" />
                </div>
            </motion.header>
            <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
                <main className="py-16">
                    <Prose as="article">{children}</Prose>
                </main>
            </div>
        </div>
    );
}
