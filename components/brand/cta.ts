import { cn } from '@/lib/utils'

const base =
  'group/cta relative inline-flex items-center justify-center gap-2.5 rounded-md font-semibold uppercase tracking-[0.14em] transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0'

const sizes = {
  md: 'h-11 px-5 text-xs',
  lg: 'h-13 px-7 text-[0.8rem]',
}

const variants = {
  primary:
    'bg-primary text-primary-foreground shadow-[0_0_0_1px_oklch(0.72_0.16_255/0.5),0_12px_40px_-12px_oklch(0.6_0.2_263/0.9)] hover:bg-[oklch(0.65_0.2_262)] hover:shadow-[0_0_0_1px_oklch(0.78_0.14_255/0.7),0_16px_50px_-10px_oklch(0.6_0.2_263)]',
  secondary: 'border border-white/15 bg-white/[0.03] text-foreground hover:border-white/30 hover:bg-white/[0.07]',
  ghost: 'text-muted-foreground hover:text-foreground',
}

export function cta({
  variant = 'primary',
  size = 'md',
  className,
}: { variant?: keyof typeof variants; size?: keyof typeof sizes; className?: string } = {}) {
  return cn(base, sizes[size], variants[variant], className)
}

export const ctaArrow = 'transition-transform duration-300 group-hover/cta:translate-x-1'
