import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cta, ctaArrow } from '@/components/brand/cta'
import { GrowthTriad } from '@/components/brand/growth-triad'
import { curriculum, totalLessons } from '@/lib/content'

export function Hero() {
  const stats = [
    { value: String(curriculum.length).padStart(2, '0'), label: 'Modules' },
    { value: String(totalLessons), label: 'Lessons' },
    { value: String(totalLessons), label: 'Real projects' },
  ]

  return (
    <section className="relative isolate overflow-hidden pt-16">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_60%_30%,black,transparent_70%)]" />
      <div
        aria-hidden
        className="absolute -top-40 right-[-10%] -z-10 size-[42rem] animate-drift rounded-full bg-[radial-gradient(circle,oklch(0.55_0.22_264/0.35),transparent_60%)] blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pt-16 pb-20 md:px-8 md:pt-24 lg:grid-cols-[1.25fr_1fr] lg:pb-28">
        <div>
          <p className="eyebrow animate-rise flex items-center gap-3 text-electric">
            <span aria-hidden className="h-px w-8 bg-electric" />
            AI in Business · Season 1
          </p>
          <h1 className="font-display mt-6 animate-rise text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.88] font-black uppercase [animation-delay:80ms]">
            From zero
            <br />
            to <span className="text-electric-gradient">100</span>
            <br />
            with AI.
          </h1>
          <p className="mt-7 max-w-lg animate-rise text-lg leading-relaxed text-muted-foreground text-pretty [animation-delay:160ms]">
            A practical accelerator for business owners ready to create, automate and scale with AI.
          </p>
          <div className="mt-9 flex animate-rise flex-col gap-3 sm:flex-row [animation-delay:240ms]">
            <Link href="/access" className={cta({ size: 'lg' })}>
              Start Learning
              <ArrowRight aria-hidden className={ctaArrow} />
            </Link>
            <a href="#program" className={cta({ size: 'lg', variant: 'secondary' })}>
              Explore the Program
            </a>
          </div>

          <dl className="mt-14 grid max-w-md animate-rise grid-cols-3 border-t border-white/10 pt-6 [animation-delay:320ms]">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="eyebrow text-muted-foreground">{stat.label}</dt>
                <dd className="font-display mt-1 text-3xl font-black">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mx-auto w-full max-w-[26rem] animate-rise [animation-delay:200ms] lg:max-w-[30rem]">
          <div className="animate-float">
            <GrowthTriad />
          </div>
        </div>
      </div>
    </section>
  )
}
