import clsx from 'clsx'

const variantStyles = {
  medium: 'rounded px-1.5 ring-1 ring-inset',
}

const colorStyles = {
  grass: {
    small: 'text-l-grass-9 dark:text-d-grass-9',
    medium:
      'ring-l-grass-7 dark:ring-d-grass-7 bg-l-grass-3 dark:bg-d-grass-3 text-l-grass-9 dark:text-d-grass-9',
  },
  sky: {
    small: 'text-sky-500',
    medium:
      'ring-sky-300 bg-sky-400/10 text-sky-500 dark:ring-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400',
  },
  amber: {
    small: 'text-amber-500',
    medium:
      'ring-amber-300 bg-amber-400/10 text-amber-500 dark:ring-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400',
  },
  rose: {
    small: 'text-red-500 dark:text-rose-500',
    medium:
      'ring-rose-200 bg-rose-50 text-red-500 dark:ring-rose-500/20 dark:bg-rose-400/10 dark:text-rose-400',
  },
  zinc: {
    small: 'text-zinc-400 dark:text-zinc-500',
    medium:
      'ring-zinc-200 bg-zinc-50 text-zinc-500 dark:ring-zinc-500/20 dark:bg-zinc-400/10 dark:text-zinc-400',
  },
}

const valueColorMap = {
  get: 'grass',
  post: 'sky',
  put: 'amber',
  delete: 'rose',
}

export function Tag({
  children,
  variant = 'medium',
  color = valueColorMap[children.toLowerCase()] ?? 'grass',
}) {
  return (
    <span
      className={clsx(
        'font-mono text-[0.625rem] font-semibold leading-6',
        variantStyles[variant],
        colorStyles[color][variant]
      )}
    >
      {children}
    </span>
  )
}
