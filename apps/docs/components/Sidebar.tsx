import Link from 'next/link';

export const highLevelNav = [
    {title: 'Documentation', href: '/', external: false},
    {title: 'Examples', href: '/example', external: false},
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
            {title: 'What is Tier?', href: '/tier-concepts'},
            {title: 'Features', href: '/tier-concepts'},
            {title: 'Architecture', href: '/tier-concepts'},
            {title: 'Pricing model', href: '/tier-concepts'},
            {title: 'Attachments', href: '/tier-concepts'}
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
        </div>
    );
}
