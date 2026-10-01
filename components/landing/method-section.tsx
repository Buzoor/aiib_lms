import { Reveal } from '@/components/brand/reveal'
import { cn } from '@/lib/utils'

const pillars = [
  {
    label: 'Human Touch',
    role: 'The judgement',
    body: 'Your voice, taste and relationships. AI drafts — you decide what is true, on-brand and ready for customers.',
  },
  {
    label: 'Strategy',
    role: 'The foundation',
    body: 'Clear goals, clear offers, clear audience. Strategy decides where AI is pointed and what success looks like.',
    centre: true,
  },
  {
    label: 'AI',
    role: 'The leverage',
    body: 'The tools that multiply your output — content, marketing, sales and operations at a speed no team could match alone.',
  },
]

export function MethodSection() {
  return (
    <section id="method" className="scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-electric">The AIIB Growth Triad</p>
          <h2 className="font-display mt-4 text-4xl leading-[0.95] font-black uppercase md:text-6xl text-balance">
            AI is not the whole answer.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Every lesson in AIIB is built on one method. Strategy sits at the centre. Human judgement keeps it real.
            AI provides the leverage.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal
              key={pillar.label}
              delay={i * 120}
              className={cn(
                'relative flex flex-col gap-4 bg-background p-8 md:p-10',
                pillar.centre &&
                  'order-first bg-[linear-gradient(180deg,oklch(0.3_0.12_264/0.55),oklch(0.16_0.02_265))] md:order-none',
              )}
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow text-muted-foreground">{pillar.role}</span>
                <span className="font-display text-sm font-bold text-white/30">0{i + 1}</span>
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
            Strategy <span className="text-electric">+</span> Human Touch <span className="text-electric">+</span> AI
          </p>
        </Reveal>
      </div>
    </section>
  )
}
