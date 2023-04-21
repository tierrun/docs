import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export function MainLinks({ mobile }) {
  let { pathname } = useRouter()

  return (
    <div className="mt-8 mb-8 lg:mt-0">
      <li>
        <Link
          href="/docs"
          className={clsx(
            'body-semibold group flex items-center',
            'mb-1 rounded p-2',
            pathname.startsWith('/docs')
              ? '  bg-l-slate-3  text-l-blue-9 dark:bg-d-slate-3 dark:text-d-blue-9'
              : ' text-l-slate-11 hover:text-l-slate-12 dark:text-d-slate-11 dark:hover:text-d-slate-12'
          )}
        >
          <div
            className={clsx(
              'mr-4 rounded ring-1 ring-l-slate-5 dark:ring-0 ',
              pathname.startsWith('/docs')
                ? ['dark:bg-l-blue-6']
                : 'dark:bg-d-slate-4'
            )}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                className={clsx(
                  'fill-l-blue-8 ',
                  pathname.startsWith('/docs')
                    ? 'fill-l-blue-8'
                    : 'dark:fill-d-slate-8'
                )}
                d="M21 5h-5.4c-.955 0-1.87.375-2.546 1.041A3.534 3.534 0 0 0 12 8.556V21c0-.707.284-1.386.79-1.886a2.717 2.717 0 0 1 1.91-.78H21V5Z"
              />
              <path
                className={clsx(
                  'fill-l-blue-10',
                  pathname.startsWith('/docs')
                    ? 'fill-l-blue-10'
                    : 'dark:fill-d-slate-10'
                )}
                d="M3 5h5.4c.955 0 1.87.375 2.546 1.041A3.534 3.534 0 0 1 12 8.556V21a2.65 2.65 0 0 0-.79-1.886 2.717 2.717 0 0 0-1.91-.78H3V5Z"
              />
            </svg>
          </div>
          Documentation
        </Link>
      </li>
      {/* <li>
        <Link
          href="/examples-recipes"
          className={clsx(
            'body-semibold group flex items-center',
            'mb-1 rounded p-2',
            pathname.startsWith('/examples-recipes')
              ? '  bg-l-slate-3  text-l-crimson-9 dark:bg-d-slate-3 dark:text-d-crimson-9'
              : ' text-l-slate-11 hover:text-l-slate-12 dark:text-d-slate-11 dark:hover:text-d-slate-12'
          )}
        >
          <div
            className={clsx(
              'mr-4 rounded ring-1 ring-l-slate-5 dark:ring-0 ',
              pathname.startsWith('/examples-recipes')
                ? ['dark:bg-l-crimson-6']
                : 'dark:bg-d-slate-4'
            )}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                className={clsx(
                  'fill-l-crimson-8 ',
                  pathname.startsWith('/examples-recipes')
                    ? 'fill-l-crimson-8'
                    : 'dark:fill-d-slate-8'
                )}
                d="M13.8 3H6.6a1.8 1.8 0 0 0-1.8 1.8v14.4A1.8 1.8 0 0 0 6.6 21h10.8a1.8 1.8 0 0 0 1.8-1.8V8.4L13.8 3Z"
              />
              <path
                className={clsx(
                  'fill-l-crimson-10',
                  pathname.startsWith('/examples-recipes')
                    ? 'fill-l-crimson-10'
                    : 'dark:fill-d-slate-10'
                )}
                fillRule="evenodd"
                d="M7.5 16.5a.9.9 0 0 1 .9-.9h7.2a.9.9 0 1 1 0 1.8H8.4a.9.9 0 0 1-.9-.9Zm0-3.6a.9.9 0 0 1 .9-.9h7.2a.9.9 0 1 1 0 1.8H8.4a.9.9 0 0 1-.9-.9Zm0-3.6a.9.9 0 0 1 .9-.9h1.8a.9.9 0 1 1 0 1.8H8.4a.9.9 0 0 1-.9-.9Z"
                clipRule="evenodd"
              />
              <path
                className={clsx(
                  'fill-l-crimson-10',
                  pathname.startsWith('/examples-recipes')
                    ? 'fill-l-crimson-10'
                    : 'dark:fill-d-slate-10'
                )}
                d="M13.8 3v5.4h5.4"
              />
            </svg>
          </div>
          Examples & recipes
        </Link>
      </li> */}
      {/* <li>
        <Link
          href="/components"
          className={clsx(
            'body-semibold group flex items-center',
            'mb-1 rounded p-2',
            pathname.startsWith('/components')
              ? '  bg-l-slate-3  text-l-violet-9 dark:bg-d-slate-3 dark:text-d-violet-9'
              : ' text-l-slate-11 hover:text-l-slate-12 dark:text-d-slate-11 dark:hover:text-d-slate-12'
          )}
        >
          <div
            className={clsx(
              'mr-4 rounded ring-1 ring-l-slate-5 dark:ring-0 ',
              pathname.startsWith('/components')
                ? ['dark:bg-l-violet-6']
                : 'dark:bg-d-slate-4'
            )}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                className={clsx(
                  'fill-l-violet-8 ',
                  pathname.startsWith('/components')
                    ? 'fill-l-violet-8'
                    : 'dark:fill-d-slate-8'
                )}
                d="M11 4H4v7h7V4Zm9 0h-7v7h7V4Zm-9 9H4v7h7v-7Z"
              />
              <path
                className={clsx(
                  'fill-l-violet-10',
                  pathname.startsWith('/components')
                    ? 'fill-l-violet-10'
                    : 'dark:fill-d-slate-10'
                )}
                d="M20 13h-7v7h7v-7Z"
              />
            </svg>
          </div>
          Components
        </Link>
      </li>
      <li>
        <Link
          href="/sdk"
          className={clsx(
            'body-semibold group flex items-center',
            'mb-1 rounded p-2',
            pathname.startsWith('/sdk')
              ? '  bg-l-slate-3  text-l-amber-9 dark:bg-d-slate-3 dark:text-d-amber-9'
              : ' text-l-slate-11 hover:text-l-slate-12 dark:text-d-slate-11 dark:hover:text-d-slate-12'
          )}
        >
          <div
            className={clsx(
              'mr-4 rounded ring-1 ring-l-slate-5 dark:ring-0 ',
              pathname.startsWith('/sdk')
                ? ['dark:bg-l-amber-6']
                : 'dark:bg-d-slate-4'
            )}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path
                className={clsx(
                  'fill-l-amber-8 ',
                  pathname.startsWith('/sdk')
                    ? 'fill-l-amber-8'
                    : 'dark:fill-d-slate-8'
                )}
                fillRule="evenodd"
                d="M14.22 7.21a.777.777 0 0 1 1.06 0l4.5 4.285a.69.69 0 0 1 0 1.01l-4.5 4.286a.777.777 0 0 1-1.06 0 .69.69 0 0 1 0-1.01L18.19 12l-3.97-3.78a.69.69 0 0 1 0-1.01Z"
                camberule="evenodd"
              />
              <path
                className={clsx(
                  'fill-l-amber-10',
                  pathname.startsWith('/sdk')
                    ? 'fill-l-amber-10'
                    : 'dark:fill-d-slate-10'
                )}
                fillRule="evenodd"
                d="M9.78 7.21a.69.69 0 0 1 0 1.01L5.81 12l3.97 3.78a.69.69 0 0 1 0 1.01.777.777 0 0 1-1.06 0l-4.5-4.285a.69.69 0 0 1 0-1.01l4.5-4.286a.777.777 0 0 1 1.06 0Z"
                camberule="evenodd"
              />
            </svg>
          </div>
          SDKs
        </Link>
      </li> */}
    </div>
  )
}
