import {Button} from '@/components/Button';

export function NewToTier() {
    return (
        <div className="not-prose flex flex-col items-start rounded-lg bg-slate-800 p-12 outline outline-1 outline-slate-700">
            <div className="relative w-full">
                <div className="relative z-10 flex justify-between">
                    <div className="h-10 w-10 border border-slate-700 bg-slate-700" />
                    <div className="h-10 w-10 border border-slate-700 bg-slate-700" />
                    <div className="h-10 w-10 border border-slate-700 bg-slate-700" />
                    <div className="h-10 w-10 border border-slate-700 bg-slate-700" />
                </div>
                <div className="absolute top-0 mt-5 w-full">
                    <div className="flex border border-dashed border-slate-700"></div>
                </div>
            </div>
            <h4 className="mt-6 text-title-sm font-medium">New to Tier</h4>
            <p className="mt-1 text-base text-slate-300">
                Follow this quick setup guide to get you started with Tier:
            </p>
            <div className="mt-3 grid grid-flow-col grid-rows-2 gap-x-20 gap-y-3">
                <p className="text-base text-slate-300">
                    1. Setup your account
                </p>
                <p className="text-base text-slate-300">
                    2. Create pricing model
                </p>
                <p className="text-base text-slate-300">3. Sync with Stripe</p>
                <p className="text-base text-slate-300">4. Connect your code</p>
            </div>
            <div className="mt-8">
                <Button href="/onboarding/setup-account" variant="outline">
                    Setup your account in Tier
                </Button>
            </div>
        </div>
    );
}
