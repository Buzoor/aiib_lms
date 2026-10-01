'use client'

import Link from 'next/link'
import { ArrowRight, CirclePlay } from 'lucide-react'
import { cta, ctaArrow } from '@/components/brand/cta'
import { TriadInline } from '@/components/brand/growth-triad'
import { curriculum, lessonHref, pillarLabels } from '@/lib/content'
import { getSummary } from '@/lib/stores/progress'
import { useLearner } from './learner-context'
import { ModuleCard } from './module-card'
import { ProgressRing } from './progress-visuals'

export function Dashboard() {
  const { trainee, progress } = useLearner()
  const summary = getSummary(progress)
  const current = summary.current
  const firstName = trainee.name.split(' ')[0]
  const finished = summary.completedCount === summary.totalLessons

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 md:px-10 md:py-14">
      <header className="animate-rise">
        <p className="eyebrow text-electric">{trainee.cohort}</p>
        <h1 className="font-display mt-3 text-4xl leading-[0.92] font-black uppercase md:text-6xl text-balance">
          Welcome to AIIB, <span className="text-electric-gradient">{firstName}.</span>
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">Strategy is the foundation. AI is the leverage.</p>
      </header>

      <section
        aria-label="Your progress"
        className="relative mt-10 grid animate-rise overflow-hidden rounded-lg border border-white/10 bg-card [animation-delay:100ms] md:grid-cols-[auto_1fr]"
      >
        <div aria-hidden className="absolute inset-0 bg-grid opacity-60 [mask-image:linear-gradient(90deg,black,transparent_60%)]" />
        <div className="relative flex items-center justify-center gap-8 border-b border-white/[0.06] p-8 md:border-r md:border-b-0 md:p-10">
          <ProgressRing value={summary.percent} />
          <dl className="grid gap-5">
            <div>
              <dt className="eyebrow text-[0.6rem] text-muted-foreground">Lessons</dt>
              <dd className="font-display text-2xl font-black">
                {summary.completedCount}
                <span className="text-base text-muted-foreground">{` / ${summary.totalLessons}`}</span>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-[0.6rem] text-muted-foreground">Modules</dt>
              <dd className="font-display text-2xl font-black">
                {summary.modulesCompleted}
                <span className="text-base text-muted-foreground">{` / ${summary.totalModules}`}</span>
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative flex flex-col justify-center p-8 md:p-10">
          {current && !finished ? (
            <>
              <p className="eyebrow flex items-center gap-2 text-muted-foreground">
                <CirclePlay aria-hidden className="size-3.5 text-electric" />
                {progress.lastVisited ? 'Pick up where you left off' : 'Your first lesson'}
              </p>
              <p className="eyebrow mt-5 text-[0.65rem] text-electric">
                {`Module ${current.module.number} · Lesson ${current.lesson.number} · ${pillarLabels[current.lesson.focus]} focus`}
              </p>
              <h2 className="font-display mt-2 text-2xl font-black uppercase md:text-3xl text-balance">
                {current.lesson.title}
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">{current.lesson.description}</p>
              <Link href={lessonHref(current)} className={cta({ size: 'lg', className: 'mt-7 self-start' })}>
                {progress.completed.length || progress.lastVisited ? 'Continue Learning' : 'Start Learning'}
                <ArrowRight aria-hidden className={ctaArrow} />
              </Link>
            </>
          ) : (
            <>
              <p className="eyebrow text-electric">Season 1 complete</p>
              <h2 className="font-display mt-2 text-3xl font-black uppercase">From zero to 100.</h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                You have completed every lesson and project. Revisit any module to sharpen your system.
              </p>
              <Link href="/learn/modules" className={cta({ size: 'lg', variant: 'secondary', className: 'mt-7 self-start' })}>
                Review modules
              </Link>
            </>
          )}
        </div>
      </section>

      <TriadInline className="mt-6 animate-rise justify-center [animation-delay:160ms] md:justify-start" />

      <section aria-labelledby="modules-heading" className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <h2 id="modules-heading" className="font-display text-2xl font-black uppercase md:text-3xl">
            Your modules
          </h2>
          <Link href="/learn/modules" className="eyebrow text-muted-foreground transition-colors hover:text-foreground">
            View all lessons
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {curriculum.map((module, i) => (
            <ModuleCard key={module.id} module={module} moduleIndex={i} />
          ))}
        </div>
      </section>
    </div>
  )
}
