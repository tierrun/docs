import Link from 'next/link';
const quickstarts = [
    {
        href: '/getting-started/nextjs',
        name: 'NextJS',
        description: 'lorem Ipsum'
    },
    {
        href: '/getting-started/node',
        name: 'node',
        description: 'lorem Ipsum'
    },
    {
        href: '/getting-started/go',
        name: 'Go',
        description: 'lorem Ipsum'
    },
    {
        href: '/getting-started/elixir',
        name: 'Elixir',
        description: 'lorem Ipsum'
    }
];

export function FrameworkQuickstart() {
    return (
        <div className="mt-6 mb-16 xl:max-w-none">
            <div className="not-prose grid grid-cols-4 gap-8">
                {quickstarts.map(quickstart => (
                    <Link href={quickstart.href} key={quickstart.href}>
                        <div className="flex flex-col gap-4 rounded-lg border border-slate-800 px-4 py-6 hover:bg-slate-800">
                            <div className="h-10 w-10 border border-slate-700 bg-slate-900" />
                            <div>
                                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                                    {quickstart.name}
                                </h3>
                                <p className="text-sm text-slate-400 ">
                                    {quickstart.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
