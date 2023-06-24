import Head from 'next/head'

import { siteConfig } from '@/data/site'

export const RootSEO = ({ data }) => {
  return (
    <Head>
      <meta charSet="utf-8" key="charset" />
      {/* Viewport */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
        key="viewport"
      />

      {/* Google Verification */}
      <meta
        name="google-site-verification"
        content={siteConfig.googleVerificationToken}
      />

      {/* OG */}
      <meta property="og:locale" content="en_US" key="og:locale" />
      <meta property="og:type" content="website" key="og:type" />

      {/* Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta
        name="twitter:site"
        content={siteConfig.twitter}
        key="twitter:site"
      />
    </Head>
  )
}
