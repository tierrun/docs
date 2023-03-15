import Link from 'next/link';
const references = [
    {
        href: '/references/tier-cli',
        name: 'Tier CLI',
        icon: '/logos/cli.svg',
        links: [
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            }
        ]
    },
    {
        href: '/references/node',
        name: 'Node',
        icon: '/logos/node.svg',
        links: [
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            }
        ]
    },
    {
        href: '/references/go',
        name: 'Go',
        icon: '/logos/go.svg',
        links: [
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            }
        ]
    },
    {
        href: '/references/elixir',
        name: 'Elixir',
        icon: '/logos/elixir.svg',
        links: [
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            }
        ]
    }
];

const mainLinks = [
    {
        id: 1,
        links: [
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            }
        ]
    },
    {
        id: 2,
        links: [
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            }
        ]
    },
    {
        id: 3,
        links: [
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            }
        ]
    },
    {
        id: 4,
        links: [
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            },
            {
                href: '#',
                name: 'Lorem Ipsum'
            }
        ]
    }
];

export function ReferencesIndex() {
    return (
        <>
            <div className="mt-12 mb-16 xl:max-w-none">
                <div className="grid grid-cols-4 gap-8 not-prose">
                    {references.map(reference => (
                        <div
                            key={reference.href}
                            className="flex flex-col gap-3 ">
                            <img
                                src={reference.icon}
                                className="w-10 h-10"
                                alt=""
                            />
                            <Link
                                href={reference.href}
                                className="text-sm font-semibold text-white">
                                <div className="flex items-center gap-2">
                                    {reference.name}
                                    <svg
                                        className="w-5 h-5 stroke-slate-100"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                        aria-hidden="true">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.167 10h11.666M10 4.167 15.833 10 10 15.834"
                                        />
                                    </svg>
                                </div>
                            </Link>
                            {reference.links.map(link => (
                                <Link
                                    href={link.href}
                                    key={link.href}
                                    className="text-sm text-slate-300">
                                    <div className="flex items-center">
                                        {link.name}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <h3 className="text-title-md">More useful links</h3>
            <div className="mt-6 mb-16 xl:max-w-none">
                {mainLinks.map(links => (
                    <div key={links}>
                        <div className="grid grid-cols-4 gap-8 not-prose">
                            {links.links.map(link => (
                                <Link
                                    href={link.href}
                                    key={link.href}
                                    className="py-2 text-sm text-slate-300">
                                    <div className="flex items-center">
                                        {link.name}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
