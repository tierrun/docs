export {CodeGroup, Code as code, Pre as pre} from '@/components/Code';

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
        <div className="my-6 flex gap-2.5 rounded-lg border border-slate-700 bg-slate-800 p-4 leading-6 text-gray-200">
            <InfoIcon className="flex-none w-4 h-4 mt-1 stroke-slate-400 " />
            <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
                {children}
            </div>
        </div>
    );
}
