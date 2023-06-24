import Link from 'next/link'
import clsx from 'clsx'

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
      />
    </svg>
  )
}

const variantStyles = {
  primary:
    'rounded-[4px] bg-l-blue-9 py-1 px-3 text-white hover:bg-l-blue-10 dark:bg-d-blue-alpha-2 dark:text-d-blue-alpha-9 dark:ring-1 dark:ring-inset dark:ring-d-blue-alpha-6 dark:hover:bg-d-blue-alpha-3 dark:hover:text-d-blue-alpha-10 dark:hover:ring-d-blue-alpha-7',
  secondary:
    'rounded-[4px] bg-l-slate-3 py-1 px-3 text-l-slate-11 hover:bg-l-slate-4 dark:bg-d-slate-alpha-3 dark:text-d-slate-11 dark:ring-1 dark:ring-inset dark:ring-d-slate-7 dark:hover:bg-d-slate-alpha-4 dark:hover:text-d-slate-12',
  filled:
    'rounded-[4px] bg-l-slate-12 py-1 px-3 text-white hover:bg-l-slate-12 dark:bg-d-blue-9 dark:text-white dark:hover:bg-d-blue-10',
  outline:
    'rounded-[4px] py-1 px-3 bg-l-slate-2 ring-1 ring-inset ring-l-slate-6 text-l-slate-11 hover:bg-l-slate-3 hover:text-l-slate-12 dark:text-d-slate-alpha-11 dark:ring-d-slate-alpha-6 dark:bg-d-slate-alpha-2 dark:hover:bg-d-slate-alpha-3 dark:hover:text-d-slate-alpha-12',
  text: 'text-l-blue-9 hover:text-l-blue-10 dark:text-d-blue-9 dark:hover:text-d-blue-10',
}

export function Button({
  variant = 'primary',
  className,
  children,
  arrow,
  ...props
}) {
  let Component = props.href ? Link : 'button'

  className = clsx(
    'inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition',
    variantStyles[variant],
    className
  )

  let arrowIcon = (
    <ArrowIcon
      className={clsx(
        'mt-0.5 h-5 w-5',
        variant === 'text' && 'relative top-px',
        arrow === 'left' && '-ml-1 rotate-180',
        arrow === 'right' && '-mr-1'
      )}
    />
  )

  return (
    <Component className={className} {...props}>
      {arrow === 'left' && arrowIcon}
      {children}
      {arrow === 'right' && arrowIcon}
    </Component>
  )
}
