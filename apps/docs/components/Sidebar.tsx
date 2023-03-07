import Link from 'next/link';

export const highLevelNav = [
    {title: 'Documentation', href: '/', external: false},
    {title: 'Examples', href: '/examples', external: false},
    {
        title: 'Stripe Glossary',
        href: 'https://stripe-glossary.tier.run',
        external: true
    },
    {title: 'PriceOps', href: 'https://pricingops.com', external: true},
    {title: 'Community', href: 'https://tier.slack.com', external: true}
];

export const navigation = [
    {
        main: {title: 'Overview', href: '/'}
    },
    {
        main: {title: 'Getting Started', href: '/getting-started'},
        links: [
            {title: 'Pricing recipe', href: '/getting-started/recipe'},
            {title: 'Next.js', href: '/getting-started/nextjs'},
            {title: 'Node', href: '/getting-started/node'},
            {title: 'Go', href: '/getting-started/go'},
            {title: 'Elixir', href: '/getting-started/elixir'}
        ]
    },
    {
        main: {title: 'Tier Concepts', href: '/tier-concepts'},
        links: [
            {title: 'What is Tier?', href: '/tier-concepts/what-is-tier'},
            {title: 'Features', href: '/tier-concepts/features'},
            {title: 'Architecture', href: '/tier-concepts/architecture'},
            {title: 'Pricing model', href: '/tier-concepts/pricing-model'}
        ]
    },
    {
        main: {title: 'Tutorials', href: '/tutorials'},
        links: [
            {
                title: 'Flat monthly pricing?',
                href: '/tutorials/flat-monthly-pricing'
            },
            {title: 'Per seat pricing', href: '/tutorials/per-set-pricing'},
            {
                title: 'Per seat & tiered pricing',
                href: '/tutorials/per-seat-tiered-pricing'
            },
            {
                title: 'Mixed interval pricing',
                href: '/tutorials/mixed-interval-pricing'
            },
            {title: 'Spike pricing', href: '/tutorials/spike-pricing'}
        ]
    },
    {
        main: {title: 'Tier Cloud', href: '/tier-cloud'},
        links: [
            {
                title: 'Versioning',
                href: '/tier-cloud/versioning'
            },
            {title: 'Hidden features', href: '/tier-cloud/hidden-features'},
            {
                title: 'Journey',
                href: '/tier-cloud/journey'
            },
            {
                title: 'Pricing A/B Test',
                href: '/tier-cloud/a-b-testing'
            }
        ]
    },
    {
        main: {title: 'References', href: '/references'},
        links: [
            {
                title: 'Tier CLI',
                href: '/references/tier-cli'
            },
            {title: 'Node', href: '/references/node'},
            {
                title: 'Go',
                href: '/references/go'
            },
            {
                title: 'Elixir',
                href: '/references/elixir'
            }
        ]
    },
    {
        main: {title: 'Self Hosting', href: '/self-hosting'},
        links: [
            {
                title: 'Comparison',
                href: '/self-hosting/comparison'
            },
            {title: 'Node', href: '/self-hosting/node'},
            {
                title: 'Contribtion',
                href: '/self-hosting/contribtion'
            },
            {
                title: 'Docker',
                href: '/self-hosting/docker'
            },
            {
                title: 'Fly.io',
                href: '/self-hosting/fly-io'
            },
            {
                title: 'Heroku',
                href: '/self-hosting/heroku'
            }
        ]
    }
];

export const miscellaneous = [
    {
        main: {title: 'Miscellaneous'},
        links: [
            {title: 'Stripe mapping', href: '/miscellaneous/stripe-mapping'},
            {title: 'Troubleshooting', href: '/miscellaneous/troubleshooting'},
            {title: 'Tier Glossary', href: '/miscellaneous/tier-glossary'}
        ]
    },
    {
        main: {title: 'Updates'},
        links: [
            {title: 'System status', href: '/system-status'},
            {title: 'Changelog', href: '/changelog'}
        ]
    }
];

export function Sidebar() {
    return (
        <div className="mt-10 block">
            {/* Individual Link */}
            <div className="my-12">
                {highLevelNav.map((group, groupIndex) => (
                    <div className="relative mt-4" key={groupIndex}>
                        <h2 className="text-sm font-semibold">
                            <Link href={group.href}>{group.title}</Link>
                        </h2>
                    </div>
                ))}
            </div>

            {/* Documentation Navigation */}
            {navigation.map((item, itemIndex) => (
                <div className="relative mt-2" key={itemIndex}>
                    <h2 className="text-sm font-semibold">
                        <Link href={item.main.href}>{item.main.title}</Link>
                    </h2>
                    <div className="relative mt-3 pl-2">
                        <ul className="border-l">
                            {item.links?.map((sublink, sublinkIndex) => (
                                <li className="relative" key={sublinkIndex}>
                                    <Link
                                        href={sublink.href}
                                        className="flex justify-between gap-2 py-1 pr-3 pl-4 text-sm text-white">
                                        {sublink.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
            <div className="mb-8 h-8 border-b border-dashed border-white/10"></div>

            {/* Miscellaneous Navigation */}
            {miscellaneous.map((item, itemIndex) => (
                <div className="relative mt-2" key={itemIndex}>
                    <h2 className="text-sm font-semibold">{item.main.title}</h2>
                    <div className="relative mt-3 pl-2">
                        <ul className="border-l">
                            {item.links?.map((sublink, sublinkIndex) => (
                                <li className="relative" key={sublinkIndex}>
                                    <Link
                                        href={sublink.href}
                                        className="flex justify-between gap-2 py-1 pr-3 pl-4 text-sm text-white">
                                        {sublink.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
