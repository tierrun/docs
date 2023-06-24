import Head from 'next/head'

import { siteConfig } from '@/data/site'
import { navigation } from '@/navs/documentation'

export const DocsSEO = ({ data }) => {
  const path = data.url.replace(`https://${siteConfig.domain}`, '')

  let subNavItem
  const mainNavItem = navigation.find((navItem) => {
    const navSubItem = navItem.links.find((navSubItem) => {
      if (navSubItem.href === path) {
        subNavItem = navSubItem
        return true
      }
    })
    if (navSubItem) return true
  })

  return (
    <Head>
      <title>{data.title}</title>
      <meta name="description" content={data.description} key="description" />

      {/* Canonical URL */}
      <link rel="canonical" href={data.url} key="canonical" />

      {/* OG */}
      <meta property="og:url" content={data.url} key="og:url" />
      <meta property="og:title" content={data.title} key="og:title" />
      <meta
        property="og:description"
        content={data.description}
        key="og:description"
      />
      <meta property="og:image" content={data.image} key="og:image" />
      {/* Twitter image will be auto-generated */}

      {/* Twitter */}
      <meta name="twitter:title" content={data.title} key="twitter:title" />
      <meta
        name="twitter:description"
        content={data.description}
        key="twitter:description"
      />
      <meta name="twitter:image" content={data.image} key="twitter:image" />
      {/* Twitter image will be auto-generated */}

      {/* Algolia */}
      <meta
        name="algolia:title"
        content={mainNavItem ? mainNavItem.title : 'Docs'}
      />
      <meta
        name="algolia:subtitle"
        content={
          subNavItem
            ? subNavItem.title
            : data.title.replace(` | ${siteConfig.docsSiteName}`, '')
        }
      />
      <meta
        level="0"
        name="algolia:hierachy:0"
        content={mainNavItem ? mainNavItem.title : 'Docs'}
      />
      <meta
        level="1"
        name="algolia:hierachy:1"
        content={
          subNavItem
            ? subNavItem.algoliaTitle
            : data.title.replace(` | ${siteConfig.docsSiteName}`, '')
        }
      />
      {/* <meta name="algolia:depth" content="2" data-rh="true" /> */}
    </Head>
  )
}
