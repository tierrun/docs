import Image from 'next/image'
import { authors } from '@/data/authors'

export function BlogHeader({ title, author, date, timeToRead }) {
  return (
    <div className="flex flex-col items-center not-prose gap-6 pb-16">
      <h1 className="text-3xl text-center font-semibold text-l-slate-12 dark:text-d-slate-12">
        {title}
      </h1>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 ">
          <div className="rounded-full overflow-hidden">
            <Image
              src={authors.find((_author) => _author.id === author).avatar}
              width={20}
              height={20}
            />
          </div>
          <span>{authors.find((_author) => _author.id === author).name}</span>
        </div>
        {date ? (
          <div>
            {new Date(date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          </div>
        ) : (
          <></>
        )}
        {timeToRead ? <div>{timeToRead}</div> : <></>}
      </div>
    </div>
  )
}
