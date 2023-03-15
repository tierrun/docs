import Link from 'next/link';
import clsx from 'clsx';

const variantStyles = {
    primary: 'rounded-lg bg-sky-500 py-1 px-4 text-slate-100 hover:bg-sky-600 ',
    secondary:
        'rounded-lg bg-slate-100 py-1 px-4 text-zinc-900 hover:bg-zinc-200 ',
    outline:
        'rounded-lg py-1 px-4 text-slate-100 ring-1 ring-inset ring-slate-100 hover:bg-slate-800 hover:text-slate-200 ',
    text: 'text-blue-500 hover:text-blue-600'
};

export function Button({variant = 'primary', className, children, ...props}) {
    let Component = props.href ? Link : 'button';

    className = clsx(
        'inline-flex gap-1 justify-center overflow-hidden text-caption font-medium transition',
        variantStyles[variant],
        className
    );

    return (
        <Component className={className} {...props}>
            {children}
        </Component>
    );
}
