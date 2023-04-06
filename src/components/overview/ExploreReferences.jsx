import Link from 'next/link';
const references = [
    {
        href: '/references/tier-cli',
        name: 'Tier CLI',
        description: 'Command Tier using your terminal.',
        icon: '/logos/cli.svg'
    },
    {
        href: '/references/node',
        name: 'Node SDK',
        description: 'Use in node, deno and edge workers envs.',
        icon: '/logos/node.svg'
    },
    {
        href: '/references/go',
        name: 'Go SDK',
        description: 'Use the library used to build Tier.',
        icon: '/logos/go.svg'
    },
    {
        href: '/references/elixir',
        name: 'Elixir SDK',
        description: 'Community maintained library.',
        icon: '/logos/elixir.svg'
    }
];

export function ExploreReferences() {
    return (
        <div className="mt-6 mb-16 xl:max-w-none">
            <div className="grid grid-cols-4 gap-8 not-prose">
                {references.map(reference => (
                    <Link href={reference.href} key={reference.href}>
                        <div className="flex flex-col gap-4 px-4 py-6 border rounded-lg border-slate-800 hover:bg-slate-800">
                            {/* <div className="w-10 h-10 border border-slate-700 bg-slate-900" /> */}
                            <img
                                src={reference.icon}
                                className="w-10 h-10"
                                alt=""
                            />
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
