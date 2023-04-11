import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

import { Layout } from '@/layouts/DocumentationLayout.jsx'
import * as mdxComponents from '@/components/mdx/Components'
import { useMobileNavigationStore } from '@/components/nav/MobileNav'

import '@/styles/globals.css'
import 'focus-visible'

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
      <div>
        <MDXProvider components={mdxComponents}>
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </div>
    </>
  )
}
