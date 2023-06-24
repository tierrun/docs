import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const filterChangelogsByPageIndex = (changelogs, pageIndex) => {
  const changelogsPerPage = 5
  // get the total posts from page 1 to current page
  const totalPageChangelogs = +pageIndex * changelogsPerPage

  // get the total posts from page 1 to previous page
  const prevPageChangelogs = totalPageChangelogs - changelogsPerPage

  return changelogs.filter(
    (changelog, index) =>
      index < totalPageChangelogs && index >= prevPageChangelogs
  )
}

export const getChangelogs = (pageIndex) => {
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
      const { data, content } = matter(fileContent)

      const timeToRead = readingTime(content)

      const slug = file.name.replace(/.mdx$/, '')
      return { data, content, timeToRead, slug }
    })
    .filter((changelog) => changelog)
    .sort((a, b) => new Date(b.data.publishedAt) - new Date(a.data.publishedAt))

  const totalChangelogs = changelogs.length

  return {
    changelogs: filterChangelogsByPageIndex(changelogs, pageIndex),
    totalChangelogs,
  }
}
