import type { TriadPillar } from '@/lib/content/types'
import { cn } from '@/lib/utils'

const satellites = [
  { id: 'human' as const, label: 'Human Touch', role: 'Judgement', x: 16, y: 74 },
  { id: 'ai' as const, label: 'AI', role: 'Leverage', x: 84, y: 74 },
]

/** The AIIB Growth Triad — Strategy at the centre, Human Touch and AI in orbit. */
export function GrowthTriad({ className, highlight }: { className?: string; highlight?: TriadPillar }) {
  return (
    <figure
      className={cn('relative aspect-square w-full select-none', className)}
      aria-label="The AIIB Growth Triad: Strategy at the centre, supported by Human Touch and AI"
    >
      <div aria-hidden className="absolute inset-[6%] rounded-full border border-white/[0.06]" />
      <div aria-hidden className="absolute inset-[20%] rounded-full border border-dashed border-white/10" />
      <div
        aria-hidden
        className="absolute inset-[22%] animate-drift rounded-full bg-[radial-gradient(circle,oklch(0.6_0.2_263/0.35),transparent_65%)] blur-2xl"
      />

      <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 size-full overflow-visible">
        {satellites.map((s) => (
          <line
            key={s.id}
            x1="50"
            y1="46"
            x2={s.x}
            y2={s.y}
            stroke="oklch(0.7 0.18 255 / 0.55)"
            strokeWidth="0.35"
            strokeDasharray="1.4 1"
            className="animate-dash"
          />
        ))}
        <line x1={16} y1={74} x2={84} y2={74} stroke="oklch(1 0 0 / 0.08)" strokeWidth="0.3" />
        <circle cx="50" cy="12" r="0.9" fill="oklch(0.7 0.18 255)" />
        <circle cx="88" cy="32" r="0.6" fill="oklch(1 0 0 / 0.4)" />
        <circle cx="10" cy="40" r="0.6" fill="oklch(1 0 0 / 0.4)" />
      </svg>

      <div
        className={cn(
          'absolute top-[46%] left-1/2 flex aspect-square w-[38%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-[oklch(0.72_0.16_255/0.6)] bg-[radial-gradient(circle_at_30%_25%,oklch(0.68_0.2_258),oklch(0.42_0.2_266)_70%)] text-center shadow-[0_0_80px_-10px_oklch(0.6_0.2_263/0.9)]',
          highlight === 'strategy' && 'ring-4 ring-[oklch(0.7_0.18_255/0.35)]',
        )}
      >
        <span className="eyebrow text-[0.55rem] text-white/70 sm:text-[0.6rem]">The centre</span>
        <span className="font-display text-sm font-black tracking-tight text-white uppercase sm:text-lg md:text-xl">Strategy</span>
      </div>

      {satellites.map((s) => (
        <div
          key={s.id}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-center"
          style={{ left: `${s.x}%`, top: `${s.y}%` }}
        >
          <span
            className={cn(
              'flex size-12 items-center justify-center rounded-full border bg-background sm:size-14',
              highlight === s.id
                ? 'animate-pulse-node border-[oklch(0.72_0.16_255)]'
                : 'border-white/20',
            )}
          >
            <span className={cn('size-2.5 rounded-full', highlight === s.id ? 'bg-electric' : 'bg-white/70')} />
          </span>
          <span className="font-display text-xs font-bold tracking-wide whitespace-nowrap text-foreground uppercase sm:text-sm">
            {s.label}
          </span>
          <span className="eyebrow -mt-1 text-[0.55rem] text-muted-foreground">{s.role}</span>
        </div>
      ))}
    </figure>
  )
}

/** Compact one-line version for headers and panels. */
export function TriadInline({ className, highlight }: { className?: string; highlight?: TriadPillar }) {
  const items: { id: TriadPillar; label: string }[] = [
    { id: 'strategy', label: 'Strategy' },
    { id: 'human', label: 'Human Touch' },
    { id: 'ai', label: 'AI' },
  ]
  return (
    <p className={cn('eyebrow flex flex-wrap items-center gap-x-2.5 gap-y-1 text-muted-foreground', className)}>
      {items.map((item, i) => (
        <span key={item.id} className="flex items-center gap-2.5">
          {i > 0 && <span aria-hidden className="text-white/25">+</span>}
          <span
            className={cn(
              item.id === 'strategy' && 'text-foreground',
              highlight === item.id && 'text-electric',
            )}
          >
            {item.label}
          </span>
        </span>
      ))}
    </p>
  )
}
