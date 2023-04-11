import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'

import { Button } from '@/components/common/Button'
import { Logo } from '@/images/logos/Tier'
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
} from '@/components/nav/MobileNav'
import { useMobileNavigationStore } from '@/components/nav/MobileNav'
import { ModeToggle } from '@/components/common/ModeToggle'

// Navigation Links
import { main } from '@/navs/main'

function TopLevelNavItem({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm leading-5 transition text-l-slate-alpha-11 hover:text-l-slate-alpha-12 dark:text-d-slate-alpha-11 dark:hover:text-d-slate-alpha-12"
      >
        {children}
      </Link>
    </li>
  )
}

export const Header = forwardRef(function Header({ className }, ref) {
  let { isOpen: mobileNavIsOpen } = useMobileNavigationStore()
  let isInsideMobileNavigation = useIsInsideMobileNavigation()

  let { scrollY } = useScroll()
  let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9])
  let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8])

  return (
    <motion.div
      ref={ref}
      className={clsx(
        className,
        'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:z-30 lg:px-8',
        !isInsideMobileNavigation && 'backdrop-blur-sm dark:backdrop-blur',
        isInsideMobileNavigation
          ? 'bg-l-slate-1 dark:bg-d-slate-1'
          : 'bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]'
      )}
      style={{
        '--bg-opacity-light': bgOpacityLight,
        '--bg-opacity-dark': bgOpacityDark,
      }}
    >
      <div
        className={clsx(
          'absolute inset-x-0 top-full h-px transition',
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
            'bg-l-slate-alpha-6 dark:bg-d-slate-alpha-6'
        )}
      />
      <div className="hidden gap-6 lg:flex lg:w-[450px]">
        <Link href="/" aria-label="Home">
          <Logo className="h-6" />
        </Link>
        {/* Include actual Search */}
      </div>
      <div className="flex items-center gap-5 lg:hidden">
        <MobileNavigation />
        <Link href="/" aria-label="Home">
          <Logo className="h-6" />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <nav className="hidden md:block">
          <ul role="list" className="flex items-center gap-8">
            {main.map((mainNavItem, mainNavItemIndex) => (
              <TopLevelNavItem key={mainNavItemIndex} href={mainNavItem.href}>
                {mainNavItem.title}
              </TopLevelNavItem>
            ))}
          </ul>
        </nav>
        <div className="hidden md:block md:h-5 md:w-px md:bg-l-slate-alpha-6 md:dark:bg-d-slate-alpha-6" />
        <div className="flex gap-4">
          {/* Include Mobile Search */}
          <ModeToggle />
        </div>
        <div className="hidden min-[416px]:contents">
          <Button href="#">Sign in</Button>
        </div>
      </div>
    </motion.div>
  )
})
