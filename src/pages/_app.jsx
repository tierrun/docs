import '@/styles/tailwind.css';
import {DM_Sans} from 'next/font/google';

import {MDXProvider} from '@mdx-js/react';
import * as mdxComponents from '@/components/MDX';

import {Layout} from '@/components/Layout';
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
            <MDXProvider components={mdxComponents}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MDXProvider>
        </div>
    );
}
