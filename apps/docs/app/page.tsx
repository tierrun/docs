import {Button} from 'ui';

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
                <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
                    Docs for
                    <span className="from-brandred to-brandblue block bg-gradient-to-r bg-clip-text px-2 text-transparent">
                        Tier
                    </span>
                </h1>
                <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
                    <Button />
                </div>
            </main>
        </div>
    );
}
