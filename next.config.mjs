import nextMDX from '@next/mdx'
import { createLoader } from 'simple-functional-loader'

import { remarkPlugins } from './mdx/remark.mjs'
import { rehypePlugins } from './mdx/rehype.mjs'
import { recmaPlugins } from './mdx/recma.mjs'
import { redirects } from './redirects.mjs'
import { rewrites } from './rewrites.mjs'

const fallbackLayouts = {
  'src/pages/docs/**/*': [
    '@/layouts/DocumentationLayout',
    'DocumentationLayout',
  ],
}

const fallbackDefaultExports = {
  'src/pages/docs/**/*': [
    '@/layouts/DocumentationLayout',
    'DocumentationLayout',
  ],
  'src/pages/components/**/*': ['@/layouts/DefaultLayout', 'DefaultLayout'],
}

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
    providerImportSource: '@mdx-js/react',
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return redirects
  },
  async rewrites() {
    return rewrites
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    scrollRestoration: true,
  },
}

export default withMDX(nextConfig, {
  // webpack(config, options) {
  //   function mainMdxLoader(plugins) {
  //     return [
  //       options.defaultLoaders.babel,
  //     ]
  //   }
  //   return config
  // },
})
