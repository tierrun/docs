import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

import { Footer } from '@/components/nav/Footer'
import { Header } from '@/components/nav/Header'
import { SectionProvider } from '@/components/nav/SectionProvider'
import { Prose } from '@/components/mdx/Prose'
import { BlogHeader } from '@/components/mdx/BlogHeader'

import { ArticleSEO } from '@/components/seo/ArticleSEO'

import { siteConfig } from '@/data/site'

export function ArticleLayout({ frontMatter, title, children, sections = [] }) {
  let router = useRouter()

  let siteTitle
  let ogImage
  let description
  let url

  const pathName = router.pathname

  switch (true) {
    // If parent path
    case pathName === '/blog':
      siteTitle = siteConfig.blogSiteName
      ogImage = `https://${siteConfig.domain}${siteConfig.blogsOgImage}`
      description = siteConfig.blogSiteDescription
      url = `https://${siteConfig.domain}/blog`
      break

    // If leaf node add path
    case pathName.startsWith('/blog'):
      siteTitle = `${frontMatter.title} | ${siteConfig.blogSiteName}`
      ogImage = `https://${
        siteConfig.domain
      }/api/og/ogBlog?title=${encodeURIComponent(
        frontMatter.title
      )}&description=${encodeURIComponent(
        frontMatter ? frontMatter.description : ''
      )}`
      description = frontMatter ? frontMatter.description : ''
      url = `https://${siteConfig.domain}${frontMatter.path}`
      break

    // If parent path
    case pathName === '/changelog':
      siteTitle = siteConfig.changelogSiteName
      ogImage = `https://${siteConfig.domain}${siteConfig.changelogsOgImage}`
      description = siteConfig.changelogSiteDescription
      url = `https://${siteConfig.domain}/changelog`
      break

    // If leaf node add path
    case pathName.startsWith('/changelog'):
      siteTitle = `${frontMatter.title} | ${siteConfig.changelogSiteName}`
      ogImage = encodeURI(
        `https://${
          siteConfig.domain
        }/api/og/ogChangelog?title=${encodeURIComponent(
          frontMatter.title
        )}&description=${encodeURIComponent(
          frontMatter ? frontMatter.description : ''
        )}`
      )
      description = frontMatter ? frontMatter.description : ''
      url = `https://${siteConfig.domain}${frontMatter.path}`
      break

    default:
      siteTitle = title ? title : siteConfig.name
      ogImage = `https://${siteConfig.domain}${siteConfig.siteOgImage}`
      description = ''
      url = frontMatter
        ? `https://${siteConfig.domain}${frontMatter.path}`
        : `https://${siteConfig.domain}`
      break
  }

  return (
    <>
      <ArticleSEO
        data={{
          title: siteTitle,
          description: description,
          image: ogImage,
          url: url,
        }}
      />
      <SectionProvider sections={sections}>
        <div className="">
          <motion.header
            layoutScroll
            className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
          >
            <div className="lg:pointer-events-auto lg:block lg:pb-8 lg:pt-4 ">
              <Header />
            </div>
          </motion.header>
          <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
            <main className="flex flex-col items-center py-16 ">
              <Prose as="article">
                {frontMatter &&
                (router.pathname.startsWith('/blog') ||
                  router.pathname.startsWith('/changelog')) ? (
                  <BlogHeader
                    title={frontMatter.title}
                    author={frontMatter.author}
                    date={
                      frontMatter.updatedAt
                        ? frontMatter.updatedAt
                        : frontMatter.publishedAt
                    }
                    timeToRead={frontMatter.timeToRead}
                  />
                ) : (
                  <></>
                )}
                {children}
              </Prose>
            </main>
            <Footer />
          </div>
        </div>
      </SectionProvider>
    </>
  )
}
