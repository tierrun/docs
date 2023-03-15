import Link from 'next/link';
const links = [
    {
        href: '/tier-concepts',
        name: 'Tier Concepts',
        description: 'lorem Ipsum'
    },
    {
        href: '/tutorials',
        name: 'Tutorials',
        description: 'lorem Ipsum'
    },
    {
        href: '/examples',
        name: 'Examples',
        description: 'lorem Ipsum'
    }
];

export function ExploreTier() {
    return (
        <div className="mt-6 mb-16 xl:max-w-none">
            <div className="not-prose grid grid-cols-3 gap-8">
                {links.map(link => (
                    <Link href={link.href} key={link.href}>
                        <div className="flex flex-col gap-4 rounded-lg border border-slate-800 px-4 py-6 hover:bg-slate-800">
                            <div className="h-10 w-10 border border-slate-700 bg-slate-900" />
                            <div>
                                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                                    {link.name}
                                </h3>
                                <p className="text-sm text-slate-400 ">
                                    {link.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
