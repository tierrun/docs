import nextMDX from '@next/mdx';
import {remarkPlugins} from './mdx/remark.mjs';
import {rehypePlugins} from './mdx/rehype.mjs';
import {recmaPlugins} from './mdx/recma.mjs';

const withMDX = nextMDX({
    options: {
        remarkPlugins: remarkPlugins,
        rehypePlugins: rehypePlugins,
        recmaPlugins: recmaPlugins,
        providerImportSource: '@mdx-js/react'
    }
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/self-hosting/docker',
                destination: 'https://hub.docker.com/u/tierrun',
                permanent: false
            },
            {
                source: '/self-hosting/fly-io',
                destination: 'https://github.com/gordalina/fly-tier',
                permanent: false
            },
            {
                source: '/self-hosting/heroku',
                destination: 'https://github.com/tierrun/tier-run-buildpack',
                permanent: false
            },

            {
                source: '/references/node',
                destination: 'https://www.npmjs.com/package/tier',
                permanent: false
            },
            {
                source: '/references/go',
                destination: 'https://pkg.go.dev/tier.run/client/tier',
                permanent: false
            },
            {
                source: '/references/elixir',
                destination: 'https://github.com/gordalina/ex_tier/',
                permanent: false
            },
            {
                source: '/pricing-json-schema',
                destination:
                    'https://raw.githubusercontent.com/tierrun/tier/main/pricing/schema.json',
                permanent: false
            }
        ];
    },
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    experimental: {
        scrollRestoration: true
    }
};

export default withMDX(nextConfig);
