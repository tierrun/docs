import Link from 'next/link'
import { useRouter } from 'next/router'

import { Button } from '@/components/common/Button'
import { navigation } from '@/navs/documentation'
import { footer } from '@/navs/footer'

function PageLink({ label, page, previous = false }) {
  return (
    <>
      <Button
        href={page.href}
        aria-label={`${label}: ${page.title}`}
        variant="secondary"
        arrow={previous ? 'left' : 'right'}
      >
        {label}
      </Button>
      <Link
        href={page.href}
        tabIndex={-1}
        aria-hidden="true"
        className="text-base font-semibold transition text-zinc-900 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
      >
        {page.title}
      </Link>
    </>
  )
}

function PageNavigation() {
  let router = useRouter()
  let allPages = navigation.flatMap((group) => group.links)
  let currentPageIndex = allPages.findIndex(
    (page) => page.href === router.pathname
  )

  if (currentPageIndex === -1) {
    return null
  }

  let previousPage = allPages[currentPageIndex - 1]
  let nextPage = allPages[currentPageIndex + 1]

  if (!previousPage && !nextPage) {
    return null
  }

  return (
    <div className="flex">
      {previousPage && (
        <div className="flex flex-col items-start gap-3">
          <PageLink label="Previous" page={previousPage} previous />
        </div>
      )}
      {nextPage && (
        <div className="flex flex-col items-end gap-3 ml-auto">
          <PageLink label="Next" page={nextPage} />
        </div>
      )}
    </div>
  )
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M16.712 6.652c.01.146.01.29.01.436 0 4.449-3.267 9.579-9.242 9.579v-.003a8.963 8.963 0 0 1-4.98-1.509 6.379 6.379 0 0 0 4.807-1.396c-1.39-.027-2.608-.966-3.035-2.337.487.097.99.077 1.467-.059-1.514-.316-2.606-1.696-2.606-3.3v-.041c.45.26.956.404 1.475.42C3.18 7.454 2.74 5.486 3.602 3.947c1.65 2.104 4.083 3.382 6.695 3.517a3.446 3.446 0 0 1 .94-3.217 3.172 3.172 0 0 1 4.596.148 6.38 6.38 0 0 0 2.063-.817 3.357 3.357 0 0 1-1.428 1.861 6.283 6.283 0 0 0 1.865-.53 6.735 6.735 0 0 1-1.62 1.744Z" />
    </svg>
  )
}

function GitHubIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.667c-4.605 0-8.334 3.823-8.334 8.544 0 3.78 2.385 6.974 5.698 8.106.417.075.573-.182.573-.406 0-.203-.011-.875-.011-1.592-2.093.397-2.635-.522-2.802-1.002-.094-.246-.5-1.005-.854-1.207-.291-.16-.708-.556-.01-.567.656-.01 1.124.62 1.281.876.75 1.292 1.948.93 2.427.705.073-.555.291-.93.531-1.143-1.854-.213-3.791-.95-3.791-4.218 0-.929.322-1.698.854-2.296-.083-.214-.375-1.09.083-2.265 0 0 .698-.224 2.292.876a7.576 7.576 0 0 1 2.083-.288c.709 0 1.417.096 2.084.288 1.593-1.11 2.291-.875 2.291-.875.459 1.174.167 2.05.084 2.263.53.599.854 1.357.854 2.297 0 3.278-1.948 4.005-3.802 4.219.302.266.563.78.563 1.58 0 1.143-.011 2.061-.011 2.35 0 .224.156.491.573.405a8.365 8.365 0 0 0 4.11-3.116 8.707 8.707 0 0 0 1.567-4.99c0-4.721-3.73-8.545-8.334-8.545Z"
      />
    </svg>
  )
}

export function SlackIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path d="M6 15a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2h2v2m1 0a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-5m2-8a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2v2H9m0 1a2 2 0 0 1 2 2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5m8 2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-2v-2m-1 0a2 2 0 0 1-2 2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2a2 2 0 0 1 2 2v5m-2 8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-2h2m0-1a2 2 0 0 1-2-2a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-5Z"></path>
    </svg>
  )
}

function SocialLink({ href, icon: Icon, children }) {
  return (
    <Link href={href} className="group">
      <span className="sr-only">{children}</span>
      <Icon className="w-5 h-5 transition fill-zinc-700 group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500" />
    </Link>
  )
}

function FooterBase() {
  return (
    <div className="flex flex-col border-t border-l-slate-6 dark:border-d-slate-6">
      <div className="flex flex-col items-start justify-between mt-16 lg:flex-row">
        {/* Logo */}
        <Link href="/" className="mb-12 lg:mb-0">
          <svg className="w-[35px] h-[25px]" fill="none" viewBox="0 0 36 25">
            <path
              className="fill-l-slate-12 dark:fill-d-slate-12"
              d="M.93 0h33.163a.93.93 0 0 1 .93.93v4.651a.93.93 0 0 1-.93.93H.93a.93.93 0 0 1-.93-.93V.931A.93.93 0 0 1 .93 0Zm6.651 8.744h19.86a.93.93 0 0 1 .931.93v4.652a.93.93 0 0 1-.93.93H7.582a.93.93 0 0 1-.93-.93V9.674a.93.93 0 0 1 .93-.93Zm6.186 8.744h7.489a.93.93 0 0 1 .93.93v4.652a.93.93 0 0 1-.93.93h-7.489a.93.93 0 0 1-.93-.93v-4.651a.93.93 0 0 1 .93-.93Z"
            />
          </svg>
        </Link>
        <div className="flex flex-col items-start lg:flex-row">
          {/* Links Group */}
          <div className="flex flex-wrap gap-x-16 gap-y-10">
            {footer.map((group, groupIndex) => (
              <div key={groupIndex} className="flex flex-col gap-3">
                {/* Links group Title */}
                <h5 className="caption-semibold text-l-slate-12 dark:text-d-slate-12">
                  {group.title}
                </h5>
                {/* Links  */}
                {group.links.map((link, linkIndex) => (
                  <Link
                    className="w-40 caption text-l-slate-11 dark:text-d-slate-11"
                    key={linkIndex}
                    href={link.href}
                  >
                    <div className="flex items-end gap-1">
                      {link.title}
                      {/* External Links */}
                      {link.external === true && (
                        <svg
                          fill="none"
                          viewBox="0 0 17 18"
                          className="w-[17px] h-[17px]"
                        >
                          <path
                            className="stroke-l-slate-8 dark:stroke-d-slate-8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="m4.958 12.542 7.084-7.084m-7.084 0h7.084v7.084"
                          />
                        </svg>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
          {/* Social Links */}
          <div className="flex flex-row gap-3 mt-12 lg:flex-col lg:mt-0 ">
            <SocialLink
              href="https://twitter.com/tierdotrun"
              icon={TwitterIcon}
            >
              Follow us on Twitter
            </SocialLink>
            <SocialLink
              href="https://github.com/tierrun/tier"
              icon={GitHubIcon}
            >
              Follow us on GitHub
            </SocialLink>
            <SocialLink href="/slack" icon={SlackIcon}>
              Join our Slack
            </SocialLink>
          </div>
        </div>
      </div>
      <p className="mt-6 text-xs text-zinc-600 dark:text-zinc-400">
        &copy; Tier.run, Inc. {new Date().getFullYear()}. All rights reserved.
      </p>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="max-w-2xl pb-16 mx-auto space-y-10 lg:max-w-5xl">
      <PageNavigation />
      <FooterBase />
    </footer>
  )
}
