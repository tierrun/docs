import {Button} from '@/components/Button';
import Link from 'next/link';

export function Quickstarts() {
    return (
        <div className="not-prose mt-3 flex items-center gap-4">
            <div className="flex flex-col gap-3 border-r border-slate-800 pr-3">
                <p className="text-caption uppercase">Recipes</p>
                <Link
                    href="/tier-concepts/pricing-model"
                    className="flex items-center gap-2 rounded-lg py-2 pl-2 pr-4 hover:bg-slate-800">
                    <div className="h-6 w-6 border border-slate-700"></div>
                    <p className="text-base">Pricing model</p>
                </Link>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-caption uppercase">Frameworks</p>
                <div className="flex gap-3">
                    <Link
                        href="/references/next-js"
                        className="flex items-center gap-2 rounded-lg py-2 pl-2 pr-4 hover:bg-slate-800">
                        <div className="h-6 w-6 border border-slate-700"></div>
                        <p className="text-base">NextJS</p>
                    </Link>
                    <Link
                        href="/references/node"
                        className="flex items-center gap-2 rounded-lg py-2 pl-2 pr-4 hover:bg-slate-800">
                        <div className="h-6 w-6 border border-slate-700"></div>
                        <p className="text-base">Node</p>
                    </Link>
                    <Link
                        href="/references/go"
                        className="flex items-center gap-2 rounded-lg py-2 pl-2 pr-4 hover:bg-slate-800">
                        <div className="h-6 w-6 border border-slate-700"></div>
                        <p className="text-base">Go</p>
                    </Link>
                    <Link
                        href="/references/elixir"
                        className="flex items-center gap-2 rounded-lg py-2 pl-2 pr-4 hover:bg-slate-800">
                        <div className="h-6 w-6 border border-slate-700"></div>
                        <p className="text-base">Elixir</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
