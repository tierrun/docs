import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

import { Layout } from '@/layouts/DocumentationLayout.jsx'
import * as mdxComponents from '@/components/mdx/Components'
import { useMobileNavigationStore } from '@/components/nav/MobileNav'

import { DM_Sans } from 'next/font/google'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import 'focus-visible'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dmSans',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

function onRouteChange() {
  useMobileNavigationStore.getState().close()
}

Router.events.on('routeChangeStart', onRouteChange)
Router.events.on('hashChangeStart', onRouteChange)

export default function App({ Component, pageProps }) {
  let router = useRouter()
  return (
    <>
      <Head>
        {router.pathname === '/' ? (
          <title>Tier Docs</title>
        ) : (
          <title>{`${pageProps.title} - Tier Docs`}</title>
        )}
        <meta name="description" content={pageProps.description} />
      </Head>
      <div className={`${inter.variable} ${dmSans.variable} font-sans`}>
        <MDXProvider components={mdxComponents}>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </div>
    </>
  )
}
