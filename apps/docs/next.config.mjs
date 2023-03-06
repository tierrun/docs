import nextMDX from '@next/mdx';

import {remarkPlugins} from './mdx/remark.mjs';
import {rehypePlugins} from './mdx/rehype.mjs';
import {recmaPlugins} from './mdx/recma.mjs';

// addMdx(nextConfig, {
//     options: {
//         remarkPlugins,
//         rehypePlugins,
//         recmaPlugins,
//         providerImportSource: '@mdx-js/react'
//     }
// });

// export default {
//     pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
//     experimental: {
//         appDir: true,
//         mdxRs: true,
//         scrollRestoration: true
//     }
// };

const withMDX = nextMDX({
    options: {
        remarkPlugins,
        rehypePlugins,
        recmaPlugins,
        providerImportSource: '@mdx-js/react'
    }
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    experimental: {
        appDir: true,
        mdxRs: true,
        scrollRestoration: true
    }
};

export default withMDX(nextConfig);
