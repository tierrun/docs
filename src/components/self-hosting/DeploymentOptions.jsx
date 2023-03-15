import Link from 'next/link';
const concepts = [
    {
        href: '/self-deployment/docker',
        name: 'Docker',
        description: 'lorem Ipsum',
        icon: '/logos/docker.svg'
    },
    {
        href: '/self-deployment/fly-io',
        name: 'Fly.io',
        description: 'lorem Ipsum',
        icon: '/logos/flyio.svg'
    },
    {
        href: '/self-deployment/heroku',
        name: 'Heroku',
        description: 'lorem Ipsum',
        icon: '/logos/heroku.svg'
    }
];

export function DeploymentOptions() {
    return (
        <div className="mt-6 mb-16 xl:max-w-none">
            <div className="grid grid-cols-3 gap-8 not-prose">
                {concepts.map(concept => (
                    <Link href={concept.href} key={concept.href}>
                        <div className="flex flex-col gap-4 px-4 py-6 border rounded-lg border-slate-800 hover:bg-slate-800">
                            {/* <div className="w-10 h-10 border border-slate-700 bg-slate-900" /> */}
                            <img
                                src={concept.icon}
                                className="w-10 h-10"
                                alt=""
                            />
                            <div>
                                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                                    {concept.name}
                                </h3>
                                <p className="text-sm text-slate-400 ">
                                    {concept.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
