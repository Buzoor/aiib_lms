import { Briefcase, Lightbulb, Sparkles } from 'lucide-react'
import type { LessonMaterial as Material } from '@/lib/content/types'

export function LessonMaterial({ material }: { material: Material }) {
  return (
    <div className="grid gap-10">
      <p className="text-lg leading-relaxed text-pretty text-foreground/90">{material.intro}</p>

      <section aria-labelledby="principles">
        <h3 id="principles" className="eyebrow text-muted-foreground">
          Key principles
        </h3>
        <ol className="mt-4 grid gap-3 md:grid-cols-3">
          {material.principles.map((p, i) => (
            <li key={p.title} className="rounded-lg border border-white/10 bg-white/[0.02] p-5">
              <span className="font-display text-sm font-black text-electric">{String(i + 1).padStart(2, '0')}</span>
              <p className="mt-2 font-semibold">{p.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="example"
        className="relative overflow-hidden rounded-lg border border-primary/30 bg-gradient-to-br from-primary/15 to-transparent p-6 md:p-8"
      >
        <h3 id="example" className="eyebrow flex items-center gap-2 text-electric">
          <Briefcase aria-hidden className="size-3.5" />
          Business example
        </h3>
        <p className="font-display mt-3 text-xl font-black uppercase">{material.businessExample.title}</p>
        <p className="mt-2 leading-relaxed text-foreground/85">{material.businessExample.scenario}</p>
      </section>

      <section aria-labelledby="use-cases">
        <h3 id="use-cases" className="eyebrow flex items-center gap-2 text-muted-foreground">
          <Sparkles aria-hidden className="size-3.5" />
          Practical use cases
        </h3>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {material.useCases.map((u) => (
            <li key={u} className="flex items-start gap-3 rounded-md border border-white/[0.06] px-4 py-3 text-sm">
              <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-electric" />
              {u}
            </li>
          ))}
        </ul>
      </section>

      <aside className="flex gap-4 border-l-2 border-electric pl-5">
        <Lightbulb aria-hidden className="mt-0.5 size-5 shrink-0 text-electric" />
        <div>
          <p className="eyebrow text-[0.65rem] text-muted-foreground">Key takeaway</p>
          <p className="font-display mt-1 text-lg leading-snug font-bold text-balance">{material.takeaway}</p>
        </div>
      </aside>
    </div>
  )
}
