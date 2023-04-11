import { useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { AnimatePresence, motion, useIsPresent } from 'framer-motion'

import { Button } from '@/components/common/Button'
import { useIsInsideMobileNavigation } from '@/components/nav/MobileNav'
import { useSectionStore } from '@/components/nav/SectionProvider'
import { Tag } from '@/components/common/Tag'
import { remToPx } from '@/lib/remToPx'

// Navigations
import { navigation } from '@/navs/documentation'
import { main } from '@/navs/main'
import { MainLinks } from '@/components/nav/MainLinks'

function useInitialValue(value, condition = true) {
  let initialValue = useRef(value).current
  return condition ? initialValue : value
}

function TopLevelNavItem({ href, children }) {
  return (
    <li className="md:hidden">
      <Link
        href={href}
        className="block py-1 transition body text-l-slate-alpha-11 hover:text-l-slate-alpha-12 dark:text-d-slate-alpha-11 dark:hover:text-d-slate-alpha-12"
      >
        {children}
      </Link>
    </li>
  )
}

function NavLink({ href, tag, active, isAnchorLink = false, children }) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'caption flex justify-between gap-2 py-1 pr-3 transition',
        isAnchorLink ? 'pl-7' : 'pl-4',
        active
          ? 'text-l-slate-12 dark:text-d-slate-12'
          : 'text-l-slate-11 hover:text-l-slate-12 dark:text-d-slate-11 dark:hover:text-d-slate-12'
      )}
    >
      <span className="truncate">{children}</span>
      {tag && (
        <Tag variant="small" color="zinc">
          {tag}
        </Tag>
      )}
    </Link>
  )
}

function VisibleSectionHighlight({ group, pathname }) {
  let [sections, visibleSections] = useInitialValue(
    [
      useSectionStore((s) => s.sections),
      useSectionStore((s) => s.visibleSections),
    ],
    useIsInsideMobileNavigation()
  )

  let isPresent = useIsPresent()
  let firstVisibleSectionIndex = Math.max(
    0,
    [{ id: '_top' }, ...sections].findIndex(
      (section) => section.id === visibleSections[0]
    )
  )
  let itemHeight = remToPx(1.75)
  let height = isPresent
    ? Math.max(1, visibleSections.length) * itemHeight
    : itemHeight
  let top =
    group.links.findIndex((link) => link.href === pathname) * itemHeight +
    firstVisibleSectionIndex * itemHeight

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      className="absolute inset-x-0 top-0 bg-l-slate-3 will-change-transform dark:bg-d-slate-alpha-3"
      style={{ borderRadius: 4, height, top }}
    />
  )
}

function ActivePageMarker({ group, pathname }) {
  let itemHeight = remToPx(1.75)
  let offset = remToPx(0.25)
  let activePageIndex = group.links.findIndex((link) => link.href === pathname)
  let top = offset + activePageIndex * itemHeight

  return (
    <motion.div
      layout
      className="absolute w-px h-6 left-2 bg-l-blue-9"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      style={{ top }}
    />
  )
}

function NavigationGroup({ group, className }) {
  // If this is the mobile navigation then we always render the initial
  // state, so that the state does not change during the close animation.
  // The state will still update when we re-open (re-render) the navigation.
  let isInsideMobileNavigation = useIsInsideMobileNavigation()
  let [router, sections] = useInitialValue(
    [useRouter(), useSectionStore((s) => s.sections)],
    isInsideMobileNavigation
  )

  let isActiveGroup =
    group.links.findIndex((link) => link.href === router.pathname) !== -1

  return (
    <li className={clsx('relative mt-6', className)}>
      <motion.h2
        layout="position"
        className="caption-semibold text-l-slate-alpha-12 dark:text-d-slate-alpha-12"
      >
        {group.title}
      </motion.h2>
      <div className="relative pl-2 mt-3">
        <AnimatePresence initial={!isInsideMobileNavigation}>
          {isActiveGroup && (
            <VisibleSectionHighlight group={group} pathname={router.pathname} />
          )}
        </AnimatePresence>
        <motion.div
          layout
          className="absolute inset-y-0 w-px left-2 bg-l-slate-alpha-3 dark:bg-d-slate-alpha-3"
        />
        <AnimatePresence initial={false}>
          {isActiveGroup && (
            <ActivePageMarker group={group} pathname={router.pathname} />
          )}
        </AnimatePresence>
        <ul role="list" className="border-l border-transparent">
          {group.links.map((link) => (
            <motion.li key={link.href} layout="position" className="relative">
              <NavLink href={link.href} active={link.href === router.pathname}>
                <div className="flex items-end gap-1">
                  {link.title}
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
              </NavLink>
              <AnimatePresence mode="popLayout" initial={false}>
                {link.href === router.pathname && sections.length > 0 && (
                  <motion.ul
                    role="list"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.1 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15 },
                    }}
                  >
                    {sections.map((section) => (
                      <li key={section.id}>
                        <NavLink
                          href={`${link.href}#${section.id}`}
                          tag={section.tag}
                          isAnchorLink
                        >
                          {section.title}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export function Navigation(props) {
  return (
    <nav {...props}>
      <ul role="list">
        {main.map((mainNavItem, mainNavItemIndex) => (
          <TopLevelNavItem key={mainNavItemIndex} href={mainNavItem.href}>
            {mainNavItem.title}
          </TopLevelNavItem>
        ))}
        {/* Insert External Links */}
        <MainLinks />
        {navigation.map((group, groupIndex) => (
          <NavigationGroup
            key={group.title}
            group={group}
            className={groupIndex === 0 && 'md:mt-0'}
          />
        ))}
        <li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
          <Button href="#" variant="filled" className="w-full">
            Sign in
          </Button>
        </li>
      </ul>
    </nav>
  )
}
