import clsx from 'clsx';

export {CodeGroup, Code as code, Pre as pre} from '@/components/Code';

export {Button} from '@/components/Button';

export {NewToTier} from '@/components/overview/NewToTier';
export {Quickstarts} from '@/components/overview/Quickstarts';
export {ExploreTier} from '@/components/overview/ExploreTier';
export {ExploreReferences} from '@/components/overview/ExploreReferences';
export {MainFooter} from '@/components/overview/MainFooter';

export {QuickStartRecipe} from '@/components/getting-started/QuickStartRecipe';
export {FrameworkQuickstart} from '@/components/getting-started/FrameworkQuickstart';

export {TierConcepts} from '@/components/tier-concepts/TierConcepts';

export {Tutorials} from '@/components/tutorials/Tutorials';

export {TierCloudFeatures} from '@/components/tier-cloud/TierCloudFeatures';

export {DeploymentOptions} from '@/components/self-hosting/DeploymentOptions';

export {ReferencesIndex} from '@/components/references/ReferencesIndex';

function InfoIcon(props) {
    return (
        <svg aria-hidden="true" {...props} viewBox="0 0 24 24">
            <path
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-6v-4m0-4h.01"
            />
        </svg>
    );
}

export function Banner({children}) {
    return (
        <div className="my-6 flex gap-2.5 rounded-lg border border-slate-700 bg-slate-800 p-5 leading-6 text-gray-200">
            <InfoIcon className="flex-none w-4 h-4 mt-1 stroke-slate-400 " />
            <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
                {children}
            </div>
        </div>
    );
}

export function Row({children}) {
    return (
        <div className="grid items-start grid-cols-1 gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
            {children}
        </div>
    );
}

export function Col({children, sticky = false}) {
    return (
        <div
            className={clsx(
                '[&>:first-child]:mt-0 [&>:last-child]:mb-0',
                sticky && 'xl:sticky xl:top-24'
            )}>
            {children}
        </div>
    );
}
