'use client'

import Link from 'next/link'
import { allLessons, curriculum, lessonHref } from '@/lib/content'
import { getLessonStatus, getModuleProgress, getSummary } from '@/lib/stores/progress'
import { useLearner } from './learner-context'
import { LessonStatusIcon, statusLabels } from './lesson-status-icon'
import { PageHeader } from './page-header'
import { ProgressBar, ProgressRing } from './progress-visuals'

export function ProgressOverview() {
  const { progress } = useLearner()
  const summary = getSummary(progress)
  const projectsDone = allLessons.filter((r) => progress.projects.includes(r.key)).length

  const stats = [
    { label: 'Lessons completed', value: summary.completedCount, total: summary.totalLessons },
    { label: 'Projects completed', value: projectsDone, total: summary.totalLessons },
    { label: 'Modules completed', value: summary.modulesCompleted, total: summary.totalModules },
  ]

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 md:px-10 md:py-14">
      <PageHeader eyebrow="Your journey" title="Progress">
        Every lesson you complete and every project you build moves your business closer to 100.
      </PageHeader>

      <section aria-label="Summary" className="mt-10 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 md:grid-cols-[auto_1fr_1fr_1fr]">
        <div className="flex items-center justify-center bg-card p-8">
          <ProgressRing value={summary.percent} size={140} />
        </div>
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col justify-center bg-card p-6 md:p-8">
            <p className="eyebrow text-[0.6rem] text-muted-foreground">{stat.label}</p>
            <p className="font-display mt-2 text-4xl font-black">
              {stat.value}
              <span className="text-lg text-muted-foreground">{` / ${stat.total}`}</span>
            </p>
          </div>
        ))}
      </section>

      <section aria-labelledby="by-module" className="mt-14">
        <h2 id="by-module" className="font-display text-2xl font-black uppercase">
          By module
        </h2>
        <ol className="mt-6 grid gap-4">
          {curriculum.map((module) => {
            const mp = getModuleProgress(progress, module)
            return (
              <li key={module.id} className="rounded-lg border border-white/10 bg-card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg font-black uppercase">
                    <span className="mr-3 text-electric">{module.number}</span>
                    {module.title}
                  </h3>
                  <span className="eyebrow text-[0.65rem] text-muted-foreground">{`${mp.done} / ${mp.total} · ${mp.percent}%`}</span>
                </div>
                <ProgressBar value={mp.percent} label={`Module ${module.number} progress`} className="mt-4" />
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {allLessons
                    .filter((r) => r.module.id === module.id)
                    .map((ref) => {
                      const status = getLessonStatus(progress, ref)
                      const project = progress.projects.includes(ref.key)
                      return (
                        <li key={ref.key} className="flex items-center gap-3 text-sm">
                          <LessonStatusIcon status={status} />
                          {status === 'locked' ? (
                            <span className="text-white/35">{ref.lesson.title}</span>
                          ) : (
                            <Link href={lessonHref(ref)} className="transition-colors hover:text-electric">
                              {ref.lesson.title}
                            </Link>
                          )}
                          <span className="sr-only">{statusLabels[status]}</span>
                          {project && (
                            <span className="eyebrow ml-auto rounded-full border border-electric/30 px-2 py-0.5 text-[0.55rem] text-electric">
                              Project
                            </span>
                          )}
                        </li>
                      )
                    })}
                </ul>
              </li>
            )
          })}
        </ol>
      </section>
    </div>
  )
}
