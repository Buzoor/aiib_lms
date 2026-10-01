import { Reveal } from '@/components/brand/reveal'

const steps = [
  { label: 'Enter', body: 'Use your unique AIIB access code. No passwords.' },
  { label: 'Watch', body: 'A focused video lesson from the AIIB team.' },
  { label: 'Learn', body: 'Principles, real business examples and use cases.' },
  { label: 'Do', body: 'Complete a practical project for your business.' },
  { label: 'Advance', body: 'Mark it complete and move to the next lesson.' },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 border-t border-white/[0.06] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow text-electric">How it works</p>
          <h2 className="font-display mt-4 text-4xl leading-[0.95] font-black uppercase md:text-6xl">
            Watch. Learn. Build.
          </h2>
        </Reveal>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
          <span aria-hidden className="absolute top-[11px] right-0 left-0 hidden h-px bg-gradient-to-r from-electric/70 via-white/15 to-white/5 md:block" />
          {steps.map((step, i) => (
            <Reveal as="li" key={step.label} delay={i * 90} className="relative flex gap-5 md:flex-col md:gap-6">
              <span className="relative flex size-6 shrink-0 items-center justify-center rounded-full border border-electric/60 bg-background">
                <span className="size-2 rounded-full bg-electric" />
              </span>
              <div>
                <p className="eyebrow text-muted-foreground">Step {String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-display mt-1 text-2xl font-black uppercase">{step.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
