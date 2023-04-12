import { motion } from 'framer-motion'

import { Footer } from '@/components/nav/Footer'
import { Header } from '@/components/nav/Header'
import { Navigation } from '@/components/nav/Navigation'
import { SectionProvider } from '@/components/nav/SectionProvider'
import { Prose } from '@/components/mdx/Prose'

export function Layout({ children, sections = [] }) {
  return (
    <SectionProvider sections={sections}>
      <div className="lg:ml-72 xl:ml-80">
        <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
        >
          <div className="lg:pointer-events-auto lg:block lg:pb-8 lg:pt-4 ">
            <Header />
          </div>
          <div className="scroll contents scrollbar:!h-2 scrollbar:!w-2 scrollbar:bg-transparent scrollbar-track:!rounded scrollbar-track:!bg-slate-500/[0.16] scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-500/50 lg:pointer-events-auto lg:mt-14 lg:block lg:w-72 lg:overflow-y-hidden lg:border-r lg:border-zinc-900/10 lg:px-6  lg:pb-8 lg:pt-4 lg:hover:overflow-y-auto lg:dark:border-white/10 xl:w-80 ">
            <Navigation className="hidden lg:block " />
          </div>
        </motion.header>
        <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
          <main className="flex-1 py-16">
            <Prose as="article">{children}</Prose>
          </main>
          <Footer />
        </div>
      </div>
    </SectionProvider>
  )
}
