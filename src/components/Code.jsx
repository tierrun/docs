export function CodeGroup({children, title, ...props}) {
    return (
        <pre className="my-6 overflow-hidden border rounded-lg not-prose border-slate-700 bg-slate-800">
            <div className="p-6 text-base">{children}</div>
        </pre>
    );
}

export function Pre({children, ...props}) {
    return <CodeGroup {...props}>{children}</CodeGroup>;
}
