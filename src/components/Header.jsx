import Link from 'next/link';

export function Header() {
    return (
        <div className="fixed inset-x-0 top-0 left-72 z-30 flex h-14 items-center justify-between gap-12 px-8 backdrop-blur-sm">
            <div className="bg-white/7.5 absolute inset-x-0 top-full h-px"></div>
            {/* Search */}
            <div>Search</div>
            {/* Top Menu */}
            <div className="flex items-center gap-3">
                <Link href="/">Docs</Link>
                <Link href="/blog/">Blog</Link>
                <Link href="/changelog/">Changelog</Link>
            </div>
        </div>
    );
}
