import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cta, ctaArrow } from '@/components/brand/cta'
import { Logo } from '@/components/brand/logo'
import { Reveal } from '@/components/brand/reveal'

export function FinalCta() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-t border-white/[0.06] px-5 py-28 md:px-8 md:py-36">
        <div aria-hidden className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]" />
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 -z-10 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.55_0.22_264/0.35),transparent_60%)] blur-3xl"
        />
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-electric">Business, powered by AI</p>
          <h2 className="font-display mt-5 text-5xl leading-[0.9] font-black uppercase md:text-7xl text-balance">
            Your business is about to get a lot smarter.
          </h2>
          <Link href="/access" className={cta({ size: 'lg', className: 'mt-10' })}>
            Start Learning
            <ArrowRight aria-hidden className={ctaArrow} />
          </Link>
        </Reveal>
      </section>

      <footer className="border-t border-white/[0.06] px-5 py-10 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <Logo />
          <p className="eyebrow text-muted-foreground">Strategy + Human Touch + AI</p>
          <p className="text-sm text-muted-foreground">{`© ${new Date().getFullYear()} AI in Business`}</p>
        </div>
      </footer>
    </>
  )
}
