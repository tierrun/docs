import Link from 'next/link'
import { useState } from 'react'
import { getBlogs } from '@/lib/blogUtils'
import { Button } from '@/components/common/Button'

import { authors } from '@/data/authors'
import Image from 'next/image'

export const getStaticProps = () => {
  const data = getBlogs(1)

  return {
    props: {
      blogs: data.blogs,
      totalBlogs: data.totalBlogs,
    },
  }
}

const BlogIndex = ({ blogs, totalBlogs }) => {
  const [filteredBlogs, setFilteredBlogs] = useState(blogs)
  const [currentPageIndex, setCurrentPageIndex] = useState(1)

  const loadMoreBlogs = async () => {
    const res = await fetch(`/api/blog?page=${currentPageIndex + 1}`)
    const data = await res.json()

    setFilteredBlogs((_blogs) => [..._blogs, ...data.blogs])
    setCurrentPageIndex((_pageIndex) => _pageIndex + 1)
  }

  return (
    <div className="not-prose">
      <div className="flex gap-2 mb-6">
        <div className="border-r font-bold text-l-slate-12 dark:text-d-slate-12 border-l-slate-6 dark:border-d-slate-6 pr-2">
          Blog
        </div>
        <span>Updates from our team</span>
      </div>
      <div>
        {filteredBlogs.map((blog) => (
          <div
            className="border-b last:border-0 dark:border-d-slate-6 border-l-slate-6 "
            key={blog.slug}
          >
            <Link href={`/blog/${blog.slug}`}>
              <div className="md:px-10 px-4 pt-10 pb-12 md:mx-0 -mx-4 hover:bg-l-slate-3 dark:hover:bg-d-slate-3 ">
                <div className="flex flex-col items-start gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-l-slate-11 dark:text-d-slate-11 text-sm">
                      {blog.data.category}
                    </span>
                    <h2 className=" font-semibold text-2xl text-l-slate-12 dark:text-d-slate-12">
                      {blog.data.title}
                    </h2>
                    <div className="text-sm flex items-center gap-2">
                      <div className="rounded-full overflow-hidden">
                        <Image
                          src={
                            authors.find(
                              (author) => author.id === blog.data.author
                            ).avatar
                          }
                          width={20}
                          height={20}
                        />
                      </div>
                      <span>
                        {
                          authors.find(
                            (author) => author.id === blog.data.author
                          ).name
                        }
                      </span>
                    </div>
                    <div className="text-sm">
                      {new Date(blog.data.publishedAt).toLocaleDateString(
                        'en-US',
                        {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        }
                      )}{' '}
                      | {blog.timeToRead.text}
                    </div>
                  </div>
                  <p className="line-clamp-2">{blog.data.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {filteredBlogs.length < 5 ? (
        <></>
      ) : totalBlogs !== filteredBlogs.length ? (
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
