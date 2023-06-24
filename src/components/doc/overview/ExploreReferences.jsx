import Link from 'next/link'
const references = [
  {
    href: '/docs/references/tier-cli',
    name: 'Tier CLI',
    description: 'Command Tier using from your terminal.',
    icon: '/logos/cli.svg',
  },
  {
    href: '/docs/references/node',
    name: 'Node SDK',
    description: 'Use in node, deno and edge workers envs.',
    icon: '/logos/node.svg',
  },
  {
    href: '/docs/references/go',
    name: 'Go SDK',
    description: 'Use the library that we used to build Tier.',
    icon: '/logos/go.svg',
  },
  {
    href: '/docs/references/elixir',
    name: 'Elixir SDK',
    description: 'Community contributed & maintained library.',
    icon: '/logos/elixir.svg',
  },
]

export function ExploreReferences() {
  return (
    <div className="mt-6 mb-16 xl:max-w-none">
      <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 not-prose">
        {references.map((reference) => (
          <Link href={reference.href} key={reference.href}>
            <div className="flex flex-col gap-4 px-4 py-6 border rounded-lg border-l-slate-6 hover:bg-l-slate-3 dark:border-d-slate-6 dark:hover:bg-d-slate-3">
              {/* <div className="w-10 h-10 border border-slate-700 bg-slate-900" /> */}
              <img src={reference.icon} className="w-10 h-10" alt="" />
              <div>
                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {reference.name}
                </h3>
                <p className="text-sm text-slate-400 ">
                  {reference.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
