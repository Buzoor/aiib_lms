import Image from 'next/image'
import { Reveal } from '@/components/brand/reveal'

export function SeasonBanner() {
  return (
    <section aria-label="AI in Business Season 1" className="px-5 md:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-lg border border-white/10 shadow-[0_40px_120px_-40px_oklch(0.55_0.22_264/0.7)]">
        <Image
          src="/images/aiib-banner.png"
          alt="AI in Business Season 1 — Practical AI training for business owners, entrepreneurs and creators"
          width={2400}
          height={1350}
          sizes="(min-width: 1280px) 1280px, 100vw"
          className="h-auto w-full"
        />
        <div aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
      </Reveal>
    </section>
  )
}
