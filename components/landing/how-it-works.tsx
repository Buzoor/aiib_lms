import { Reveal } from '@/components/brand/reveal'

const steps = [
  { label: 'Understand', body: 'Learn the principles behind each topic in beginner-friendly lessons.' },
  { label: 'Watch', body: 'Follow practical demonstrations of how AI tools can be used.' },
  { label: 'Practise', body: 'Apply what you’ve learned through lesson projects and practical tasks.' },
  { label: 'Build', body: 'Turn each lesson into useful outputs for your business or work.' },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="landing-dark scroll-mt-20 bg-[linear-gradient(135deg,#080b12_0%,#111827_58%,#172554_100%)] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="eyebrow text-electric">How it works</p>
          <h2 className="font-display mt-4 text-4xl leading-tight font-black uppercase md:text-5xl text-balance">
            Learn It. See It. Apply It.
          </h2>
        </Reveal>

        <ol className="relative mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.label} delay={i * 90} className="landing-card relative flex gap-5 rounded-xl border p-6 md:flex-col md:gap-5">
              <span className="relative flex size-10 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-sm font-bold text-blue-700">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold">{step.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
