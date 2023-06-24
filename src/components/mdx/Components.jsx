import Link from 'next/link'
import clsx from 'clsx'

import { Heading } from '@/components/mdx/Heading'

export const a = Link
export { Button } from '@/components/common/Button'
export {
  CodeTabs,
  CodeGroup,
  Code as code,
  Pre as pre,
} from '@/components/mdx/Code'

export const h2 = function H2(props) {
  return <Heading level={2} {...props} />
}

function InfoIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <circle cx="8" cy="8" r="8" strokeWidth="0" />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.75 7.75h1.5v3.5"
      />
      <circle cx="8" cy="4" r=".5" fill="none" />
    </svg>
  )
}

export function Banner({ children }) {
  return (
    <div className="my-6 flex gap-2.5 rounded border border-l-blue-alpha-6 bg-l-blue-alpha-2 p-4 leading-6 text-l-blue-alpha-12 dark:border-d-blue-alpha-6 dark:bg-d-blue-alpha-2 dark:text-d-blue-alpha-12 dark:[--tw-prose-links-hover:theme(colors.d.blue.10)] dark:[--tw-prose-links:theme(colors.d.blue.9)]">
      <InfoIcon className="flex-none w-4 h-4 mt-1 fill-l-blue-9 stroke-l-blue-1 dark:fill-d-blue-9 dark:stroke-d-blue-1" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}

export function Row({ children }) {
  return (
    <div className="grid items-start grid-cols-1 gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
      {children}
    </div>
  )
}

export function Col({ children, sticky = false }) {
  return (
    <div
      className={clsx(
        '[&>:first-child]:mt-0 [&>:last-child]:mb-0',
        sticky && 'xl:sticky xl:top-24'
      )}
    >
      {children}
    </div>
  )
}

export function Properties({ children }) {
  return (
    <div className="my-6">
      <ul
        role="list"
        className="m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-l-slate-5 p-0 dark:divide-d-slate-5"
      >
        {children}
      </ul>
    </div>
  )
}

export function Property({ name, type, children }) {
  return (
    <li className="px-0 py-4 m-0 first:pt-0 last:pb-0">
      <dl className="flex flex-wrap items-center m-0 gap-x-3 gap-y-2">
        <dt className="sr-only">Name</dt>
        <dd>
          <code>{name}</code>
        </dd>
        <dt className="sr-only">Type</dt>
        <dd className="font-mono text-xs text-l-slate-11 dark:text-d-slate-11">
          {type}
        </dd>
        <dt className="sr-only">Description</dt>
        <dd className="w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {children}
        </dd>
      </dl>
    </li>
  )
}
