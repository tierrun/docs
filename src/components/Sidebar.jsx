import Link from 'next/link';

export const highLevelNav = [
    {title: 'Documentation', href: '/', external: false},
    {title: 'Examples & recipes', href: '/examples', external: false},
    {
        title: 'Components',
        href: '/components',
        external: false
    },
    {title: 'SDKs', href: '/sdk', external: false}
];

export const navigation = [
    {
        main: {title: 'Getting started', href: '/'},
        links: [
            {title: 'Overview', href: '/'},
            {title: 'What is Tier?', href: '/getting-started/what-is-tier'},
            {title: 'Tier Cloud', href: '/getting-started/tier-cloud'}
        ]
    },
    {
        main: {title: 'Quickstarts', href: '/quickstarts'},
        links: [
            {
                title: 'Create & sync a pricing model',
                href: '/quickstarts/create-pricing-model'
            },
            {
                title: 'Register a customer',
                href: '/quickstarts/register-customer'
            },
            {
                title: 'Check for feature access',
                href: '/quickstarts/check-feature-access'
            },
            {
                title: 'Render a pricing table',
                href: '/quickstarts/render-pricing-table'
            },
            {
                title: 'Initiate subscription',
                href: '/quickstarts/initiate-subscription'
            },
            {
                title: 'Report feature usage',
                href: '/quickstarts/report-feature-usage'
            },
            {
                title: 'Create customer portal',
                href: '/quickstarts/create-customer-portal'
            }
        ]
    },
    {
        main: {
            title: 'Fullstack framework tutorial',
            href: '/fullstack-framework-tutorials'
        },
        links: [
            {title: 'Overview', href: '/fullstack-framework-tutorials'},
            {
                title: 'Flat rate',
                href: '/fullstack-framework-tutorials/flat-rate'
            }
        ]
    },
    {
        main: {title: 'Features', href: '/features'},
        links: [
            {
                title: 'Model builder',
                href: '/features/model-builder'
            },
            {
                title: 'Subscription & billing',
                href: '/features/subscription-billing'
            },
            {
                title: 'Grandparenting',
                href: '/features/grandparenting'
            },
            {
                title: 'Entitlements & access',
                href: '/features/entitlements-access'
            },
            {title: 'Metering', href: '/features/metering'}
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
                title: 'Overview',
                href: '/self-hosting'
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

export function Sidebar() {
    return (
        <div className="block mt-16">
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
                    <div className="relative pl-2 mt-3">
                        <ul className="border-l">
                            {item.links?.map((sublink, sublinkIndex) => (
                                <li className="relative" key={sublinkIndex}>
                                    <Link
                                        href={sublink.href}
                                        className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-white">
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
