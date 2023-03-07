import addMdx from '@next/mdx';
import {remarkPlugins} from './mdx/remark.mjs';
import {rehypePlugins} from './mdx/rehype.mjs';
import {recmaPlugins} from './mdx/recma.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
    experimental: {
        appDir: true,
        mdxRs: true
    }
};

const withMDX = addMdx(nextConfig, {
    options: {
        remarkPlugins,
        rehypePlugins,
        recmaPlugins,
        // If you use `MDXProvider`, uncomment the following line.
        providerImportSource: '@mdx-js/react'
    }
});

export default withMDX(nextConfig);
