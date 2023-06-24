import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { siteConfig } from '@/data/site'

function generateSiteMap(blogXml, changelogXml, docsXml) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://tier.run</loc>
    </url>
    <url>
      <loc>https://tier.run/docs</loc>
    </url>
    ${docsXml}
    <url>
      <loc>https://tier.run/blog</loc>
    </url>
    ${blogXml}
    <url>
      <loc>https://tier.run/changelog</loc>
    </url>
    ${changelogXml}
  </urlset>
    `
}

async function generateBlogXml() {
  const dirFiles = fs.readdirSync(
    path.join(process.cwd(), 'src/pages', 'blog'),
    {
      withFileTypes: true,
    }
  )

  const blogs = dirFiles
    .map((file) => {
      if (!file.name.endsWith('.mdx')) return
      const fileContent = fs.readFileSync(
        path.join(process.cwd(), 'src/pages', 'blog', file.name),
        'utf-8'
      )
      const { data } = matter(fileContent)

      const slug = file.name.replace(/.mdx$/, '')
      const url = `https://${siteConfig.domain}/blog/${slug}`
      const lastUpdated = new Date(
        data.updatedAt ? data.updatedAt : data.publishedAt
      ).toISOString()

      const published = data.published

      return { url, lastUpdated, published }
    })
    .filter((post) => post)
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))

  const blogXml = blogs
    .map(({ url, lastUpdated }) => {
      return `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastUpdated}</lastmod>
    </url>
    `
    })
    .join('')

  return blogXml
}

async function generateChangelogXml() {
  const dirFiles = fs.readdirSync(
    path.join(process.cwd(), 'src/pages', 'changelog'),
    {
      withFileTypes: true,
    }
  )

  const changelogs = dirFiles
    .map((file) => {
      if (!file.name.endsWith('.mdx')) return
      const fileContent = fs.readFileSync(
        path.join(process.cwd(), 'src/pages', 'changelog', file.name),
        'utf-8'
      )
      const { data } = matter(fileContent)

      const slug = file.name.replace(/.mdx$/, '')
      const url = `https://${siteConfig.domain}/changelog/${slug}`
      const lastUpdated = new Date(
        data.updatedAt ? data.updatedAt : data.publishedAt
      ).toISOString()

      const published = data.published

      return { url, lastUpdated, published }
    })
    .filter((post) => post)
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated))

  const changelogXml = changelogs
    .map(({ url, lastUpdated }) => {
      return `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastUpdated}</lastmod>
    </url>
    `
    })
    .join('')

  return changelogXml
}

function getAllFiles(dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath, { withFileTypes: true })

  arrayOfFiles = arrayOfFiles || []

  files.forEach((file) => {
    if (fs.statSync(dirPath + '/' + file.name).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file.name, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(dirPath, '/', file.name))
    }
  })

  return arrayOfFiles
}

async function generateDocsXml() {
  const fullFiles = getAllFiles(path.join(process.cwd(), 'src/pages', 'docs'))

  const docs = fullFiles
    .map((file) => {
      // Ignore all files that are not MDX
      if (!file.endsWith('.mdx')) return
      // We've already added this in the sitemap as "/docs"
      if (file.endsWith('/docs/index.mdx')) return

      const fileContent = fs.readFileSync(file, 'utf-8')
      const { data } = matter(fileContent)

      const pathWithoutExt = file.replace(/.mdx$/, '')
      const docPath = pathWithoutExt.replace(
        `${process.cwd()}/src/pages/docs/`,
        ''
      )

      // Any other path that ends with 'index' should remove the path name "index" from it
      let nonIndexPath
      if (docPath.endsWith('index')) {
        nonIndexPath = docPath.replace('/index', '')
      } else {
        nonIndexPath = docPath
      }

      const url = `https://${siteConfig.domain}/docs/${nonIndexPath}`
      return { url, published: data.published }
    })
    .filter((post) => post)
    .filter((post) => post.published)

  const docsXml = docs
    .map(({ url }) => {
      return `
    <url>
      <loc>${url}</loc>
    </url>
    `
    })
    .join('')

  return docsXml
}

export async function getServerSideProps({ res }) {
  const blogXml = await generateBlogXml()
  const changelogXml = await generateChangelogXml()
  const docsXml = await generateDocsXml()

  const siteMap = generateSiteMap(blogXml, changelogXml, docsXml)

  res.setHeader('Content-Type', 'text/xml')
  res.write(siteMap)
  res.end()

  return {
    props: {},
  }
}

export default function SiteMap() {}
