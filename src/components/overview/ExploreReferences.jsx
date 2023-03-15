import Link from 'next/link';
const references = [
    {
        href: '/references/node',
        name: 'Node SDK',
        description: 'lorem Ipsum'
    },
    {
        href: '/references/go',
        name: 'Go SDK',
        description: 'lorem Ipsum'
    },
    {
        href: '/references/elixir',
        name: 'Elixir SDK',
        description: 'lorem Ipsum'
    },
    {
        href: '/references/cli',
        name: 'Tier CLI',
        description: 'lorem Ipsum'
    }
];

export function ExploreReferences() {
    return (
        <div className="mt-6 mb-16 xl:max-w-none">
            <div className="not-prose grid grid-cols-4 gap-8">
                {references.map(reference => (
                    <Link href={reference.href} key={reference.href}>
                        <div className="flex flex-col gap-4 rounded-lg border border-slate-800 px-4 py-6 hover:bg-slate-800">
                            <div className="h-10 w-10 border border-slate-700 bg-slate-900" />
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
    );
}
