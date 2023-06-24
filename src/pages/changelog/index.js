import Link from 'next/link'
import { useState } from 'react'
import { getChangelogs } from '@/lib/changelogUtils'
import { Button } from '@/components/common/Button'

import { authors } from '@/data/authors'
import Image from 'next/image'

export const getStaticProps = () => {
  const data = getChangelogs(1)

  return {
    props: {
      changelogs: data.changelogs,
      totalChangelogs: data.totalChangelogs,
    },
  }
}

const BlogIndex = ({ changelogs, totalChangelogs }) => {
  const [filteredChangelogs, setFilteredChangelogs] = useState(changelogs)
  const [currentPageIndex, setCurrentPageIndex] = useState(1)

  const loadMoreBlogs = async () => {
    const res = await fetch(`/api/changelog?page=${currentPageIndex + 1}`)
    const data = await res.json()

    setFilteredChangelogs((_changelogs) => [..._changelogs, ...data.changelogs])
    setCurrentPageIndex((_pageIndex) => _pageIndex + 1)
  }

  return (
    <div className="not-prose">
      <div className="flex gap-2 mb-6">
        <div className="border-r font-bold text-l-slate-12 dark:text-d-slate-12 border-l-slate-6 dark:border-d-slate-6 pr-2">
          Changelog
        </div>
        <span>New updates and improvements to Tier.</span>
      </div>
      <div>
        {filteredChangelogs.map((changelog) => (
          <div
            className="border-b last:border-0 dark:border-d-slate-6 border-l-slate-6 "
            key={changelog.slug}
          >
            <Link href={`/changelog/${changelog.slug}`}>
              <div className="md:px-10 px-4 pt-10 pb-12 md:mx-0 -mx-4 hover:bg-l-slate-3 dark:hover:bg-d-slate-3 ">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex flex-col gap-2">
                    <h2 className=" font-semibold text-2xl text-l-slate-12 dark:text-d-slate-12">
                      {changelog.data.title}
                    </h2>
                    <div className="text-sm flex items-center gap-2">
                      <div className="rounded-full overflow-hidden">
                        <Image
                          src={
                            authors.find(
                              (author) => author.id === changelog.data.author
                            ).avatar
                          }
                          width={20}
                          height={20}
                        />
                      </div>
                      <span>
                        {
                          authors.find(
                            (author) => author.id === changelog.data.author
                          ).name
                        }
                      </span>
                    </div>
                    <div className="text-sm">
                      {new Date(changelog.data.publishedAt).toLocaleDateString(
                        'en-US',
                        {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        }
                      )}{' '}
                      | {changelog.timeToRead.text}
                    </div>
                  </div>
                  <p className="line-clamp-2">{changelog.data.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {filteredChangelogs.length < 5 ? (
        <></>
      ) : totalChangelogs !== filteredChangelogs.length ? (
        <div className="pt-16 flex flex-col items-center">
          <Button variant="secondary" onClick={loadMoreBlogs}>
            Load more
          </Button>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default BlogIndex
