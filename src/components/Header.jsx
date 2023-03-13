import Link from 'next/link';

export function Header() {
    return (
        <div className="fixed inset-x-0 top-0 z-50 left-72">
            <div className="flex items-center justify-between gap-12 px-8 h-14 backdrop-blur-lg">
                <div className="absolute inset-x-0 h-px top-full bg-slate-800"></div>
                {/* Search */}
                <div>Search</div>
                {/* Top Menu */}
                <div className="flex items-center gap-3">
                    <Link href="/">Docs</Link>
                    <Link href="/blog/">Blog</Link>
                    <Link href="/changelog/">Changelog</Link>
                </div>
            </div>
        </div>
    );
}
