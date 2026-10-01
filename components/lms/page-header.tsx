import type { ReactNode } from 'react'

export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <header className="animate-rise">
      <p className="eyebrow text-electric">{eyebrow}</p>
      <h1 className="font-display mt-3 text-4xl leading-[0.92] font-black uppercase md:text-5xl text-balance">{title}</h1>
      {children && <div className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{children}</div>}
    </header>
  )
}
