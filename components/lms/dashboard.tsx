'use client'

import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'
import { cta, ctaArrow } from '@/components/brand/cta'
import { TriadInline } from '@/components/brand/growth-triad'
import { curriculum } from '@/lib/content'
import { useLearner } from './learner-context'
import { ModuleCard } from './module-card'

export function Dashboard() {
  const { trainee } = useLearner()

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 md:px-10 md:py-14">
      <header className="animate-rise">
        {trainee.cohort && <p className="eyebrow text-electric">{trainee.cohort}</p>}
        <h1 className="font-display mt-3 text-4xl leading-tight font-black uppercase md:text-6xl text-balance">
          Welcome to AIIB, <span className="text-electric-gradient">{trainee.firstName}.</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">Strategy comes first. Human understanding provides direction. AI helps you execute faster.</p>
      </header>

      <section className="relative mt-10 overflow-hidden rounded-2xl border border-blue-400/30 bg-[linear-gradient(135deg,#101a2b_0%,#13294b_60%,#172554_100%)] p-7 md:p-10">
        <div aria-hidden className="absolute -right-20 -top-24 size-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="relative max-w-2xl">
          <p className="eyebrow flex items-center gap-2 text-blue-300"><BookOpen aria-hidden className="size-4" /> Start here</p>
          <h2 className="font-display mt-4 text-3xl font-black md:text-4xl">Introduction</h2>
          <p className="mt-3 leading-relaxed text-slate-300">Begin with a short introduction to the AIIB training, then move into Module 1 and the rest of the course.</p>
          <Link href="/learn/introduction" className={cta({ size: 'lg', className: 'mt-6' })}>
            Start the Introduction
            <ArrowRight aria-hidden className={ctaArrow} />
          </Link>
        </div>
      </section>

      <TriadInline className="mt-6 justify-center md:justify-start" />

      <section aria-labelledby="modules-heading" className="mt-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-electric">Course content</p>
            <h2 id="modules-heading" className="font-display mt-2 text-2xl font-black uppercase md:text-3xl">Four modules</h2>
          </div>
          <Link href="/learn/modules" className="eyebrow text-muted-foreground transition-colors hover:text-foreground">View all lessons</Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {curriculum.map((module) => <ModuleCard key={module.id} module={module} />)}
        </div>
      </section>
    </div>
  )
}
