import Head from 'next/head'

export const IgnoreSEO = ({ data }) => {
  return (
    <Head>
      {/* Makes it non crawl-able */}
      <meta name="robots" content="noindex, nofollow" key="robots" />
    </Head>
  )
}
