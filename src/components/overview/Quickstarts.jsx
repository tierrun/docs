import {Button} from '@/components/Button';
import Link from 'next/link';

export function Quickstarts() {
    return (
        <div className="flex items-center gap-4 mt-3 not-prose">
            <div className="flex flex-col gap-3 pr-3 border-r border-slate-800">
                <p className="uppercase text-caption">Recipes</p>
                <Link
                    href="/tier-concepts/pricing-model"
                    className="flex items-center gap-2 py-2 pl-2 pr-4 rounded-lg hover:bg-slate-800">
                    <div className="w-6 h-6 border border-slate-700"></div>
                    <p className="text-base">Pricing model</p>
                </Link>
            </div>
            <div className="flex flex-col gap-3">
                <p className="uppercase text-caption">Frameworks</p>
                <div className="flex gap-3">
                    <Link
                        href="/getting-started/nextjs"
                        className="flex items-center gap-2 py-2 pl-2 pr-4 rounded-lg hover:bg-slate-800">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/logos/nextjs.svg"
                            className="w-6 h-6"
                            alt="Elixir"
                        />
                        <p className="text-base">NextJS</p>
                    </Link>
                    <Link
                        href="/getting-started/node"
                        className="flex items-center gap-2 py-2 pl-2 pr-4 rounded-lg hover:bg-slate-800">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/logos/node.svg"
                            className="w-6 h-6"
                            alt="Elixir"
                        />
                        <p className="text-base">Node</p>
                    </Link>
                    <Link
                        href="/getting-started/go"
                        className="flex items-center gap-2 py-2 pl-2 pr-4 rounded-lg hover:bg-slate-800">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/logos/go.svg"
                            className="w-6 h-6"
                            alt="Elixir"
                        />
                        <p className="text-base">Go</p>
                    </Link>
                    <Link
                        href="/getting-started/elixir"
                        className="flex items-center gap-2 py-2 pl-2 pr-4 rounded-lg hover:bg-slate-800">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/logos/elixir.svg"
                            className="w-6 h-6"
                            alt="Elixir"
                        />
                        <p className="text-base">Elixir</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
