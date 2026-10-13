import { Reveal } from '@/components/brand/reveal'
import { cn } from '@/lib/utils'

const pillars = [
  {
    label: 'Strategy',
    role: 'The judgement',
    body: 'Know what you want to achieve before choosing a tool or creating a workflow.',
    centre: true,
  },
  {
    label: 'Human Touch',
    role: 'The direction',
    body: 'Bring context, creativity, judgement, customer understanding, and your brand’s personality.',
  },
  {
    label: 'AI',
    role: 'The leverage',
    body: 'Use the right tools to support execution, improve efficiency, and turn ideas into practical outputs.',
  },
]

export function MethodSection() {
  return (
    <section id="method" className="landing-dark scroll-mt-20 bg-[linear-gradient(135deg,#080b12_0%,#111827_58%,#172554_100%)] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-electric">The AIIB Growth Triad</p>
          <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight font-black uppercase md:text-5xl text-balance">
            It’s Not Just About Using AI. It’s About Using It Well.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Strategy comes first. Human understanding provides direction. AI helps you execute faster.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.label}
              delay={i * 120}
              className={cn(
                'landing-card relative flex flex-col gap-4 rounded-xl border p-7 md:p-9',
                pillar.centre &&
                  'border-blue-400/40 bg-[linear-gradient(145deg,#172b4b,#111b2b)] md:order-first',
              )}
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow text-muted-foreground">{pillar.role}</span>
                <span className="font-display text-sm font-bold text-slate-300">0{i + 1}</span>
              </div>
              <h3
                className={cn(
                  'font-display text-3xl font-black uppercase md:text-4xl',
                  pillar.centre && 'text-electric-gradient',
                )}
              >
                {pillar.label}
              </h3>
              <p className="leading-relaxed text-muted-foreground">{pillar.body}</p>
              {pillar.centre && (
                <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent" />
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="font-display text-xl font-bold tracking-wide uppercase md:text-2xl">
            Strategy <span className="text-electric">→</span> Human Touch <span className="text-electric">→</span> AI Execution
          </p>
        </Reveal>
      </div>
    </section>
  )
}
