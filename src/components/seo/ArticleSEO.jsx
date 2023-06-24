import Head from 'next/head'

export const ArticleSEO = ({ data }) => {
  return (
    <Head>
      <title>{data.title ? data.title : ''}</title>
      <meta
        name="description"
        content={data.description ? data.description : ''}
        key="description"
      />

      {/* Canonical URL */}
      <link rel="canonical" href={data.url ? data.url : ''} key="canonical" />

      {/* OG */}
      <meta property="og:type" content="article" key="og:type" />
      <meta property="og:url" content={data.url ? data.url : ''} key="og:url" />
      <meta
        property="og:title"
        content={data.title ? data.title : ''}
        key="og:title"
      />
      <meta
        property="og:description"
        content={data.description ? data.description : ''}
        key="og:description"
      />
      <meta
        property="og:image"
        content={data.image ? data.image : ''}
        key="og:image"
      />
      {/* Twitter image will be auto-generated */}

      {/* Twitter */}
      <meta
        name="twitter:title"
        content={data.title ? data.title : ''}
        key="twitter:title"
      />
      <meta
        name="twitter:description"
        content={data.description ? data.description : ''}
        key="twitter:description"
      />
      <meta
        name="twitter:creator"
        content={data.author ? data.author.twitter : ''}
        key="twitter:creator"
      />
      <meta
        name="twitter:image"
        content={data.image ? data.image : ''}
        key="twitter:image"
      />
      {/* Twitter image will be auto-generated */}

      {/* Algolia */}
    </Head>
  )
}
