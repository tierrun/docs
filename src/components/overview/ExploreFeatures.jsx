import Link from 'next/link';
const features = [
    {
        href: '/tier-concepts/features#pricing-model',
        name: 'Pricing Model',
        description: 'lorem Ipsum'
    },
    {
        href: '/tier-concepts/features#authentication',
        name: 'Authentication',
        description: 'lorem Ipsum'
    },
    {
        href: '/tier-concepts/features#feature-identifiers',
        name: 'Feature Identifiers',
        description: 'lorem Ipsum'
    },
    {
        href: '/tier-concepts/features#entitlements',
        name: 'Entitlements',
        description: 'lorem Ipsum'
    },
    {
        href: '/tier-concepts/features#grandparenting',
        name: 'Grandparenting',
        description: 'lorem Ipsum'
    },
    {
        href: '/tier-concepts/features#metering',
        name: 'Metering',
        description: 'lorem Ipsum'
    }
];

export function ExploreFeatures() {
    return (
        <div className="mt-6 mb-16 xl:max-w-none">
            <div className="not-prose grid grid-cols-3 gap-8">
                {features.map(feature => (
                    <Link href={feature.href} key={feature.href}>
                        <div className="flex flex-col gap-4 rounded-lg border border-slate-800 px-4 py-6 hover:bg-slate-800">
                            <div className="h-10 w-10 border border-slate-700 bg-slate-900" />
                            <div>
                                <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                                    {feature.name}
                                </h3>
                                <p className="text-sm text-slate-400 ">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
