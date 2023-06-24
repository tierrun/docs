import { Router, useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'
import ProgressBar from '@badrap/bar-of-progress'
import PlausibleProvider from 'next-plausible'

import { DocumentationLayout } from '@/layouts/DocumentationLayout.jsx'
import { ArticleLayout } from '@/layouts/ArticleLayout.jsx'
import * as mdxComponents from '@/components/mdx/Components'
import { useMobileNavigationStore } from '@/components/nav/MobileNav'

import { RootSEO } from '@/components/seo/RootSEO'

import '@/styles/globals.css'
import 'focus-visible'

const progress = new ProgressBar({
  size: 2,
  color: '#0091FF',
  className: 'bar-of-progress',
  delay: 100,
})

Router.events.on('routeChangeStart', () => progress.start())
Router.events.on('routeChangeComplete', () => progress.finish())
Router.events.on('routeChangeError', () => progress.finish())

Router.events.on('routeChangeStart', onRouteChange)
Router.events.on('hashChangeStart', onRouteChange)
function onRouteChange() {
  useMobileNavigationStore.getState().close()
}

export default function App({ Component, pageProps }) {
  let router = useRouter()

  // let Layout;
  // if(router.pathname === '/docs')

  return (
    <>
      <RootSEO />
      <div>
        <PlausibleProvider domain="tier.run">
          <MDXProvider components={mdxComponents}>
            {router.pathname.startsWith('/docs') ? (
              <DocumentationLayout {...pageProps}>
                <Component {...pageProps} />
              </DocumentationLayout>
            ) : (
              <ArticleLayout {...pageProps}>
                <Component {...pageProps} />
              </ArticleLayout>
            )}
          </MDXProvider>
        </PlausibleProvider>
      </div>
    </>
  )
}
