'use client'

import Link from 'next/link'
import { ArrowRight, Lock } from 'lucide-react'
import { allLessons, lessonHref, type Module } from '@/lib/content'
import { getLessonStatus, getModuleProgress, isModuleUnlocked } from '@/lib/stores/progress'
import { useLearner } from './learner-context'
import { LessonStatusIcon, statusLabels } from './lesson-status-icon'
import { ProgressBar } from './progress-visuals'
import { cn } from '@/lib/utils'

export function ModuleCard({ module, moduleIndex, expanded }: { module: Module; moduleIndex: number; expanded?: boolean }) {
  const { progress } = useLearner()
  const unlocked = isModuleUnlocked(progress, moduleIndex)
  const { done, total, percent } = getModuleProgress(progress, module)
  const refs = allLessons.filter((r) => r.module.id === module.id)
  const nextRef = refs.find((r) => !progress.completed.includes(r.key)) ?? refs[0]
  const state = !unlocked ? 'Locked' : percent === 100 ? 'Completed' : done > 0 ? 'In progress' : 'Not started'

  return (
    <article
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg border bg-card transition-colors',
        unlocked ? 'border-white/10 hover:border-white/20' : 'border-white/[0.06]',
      )}
    >
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <span
            className={cn(
              'font-display text-5xl leading-none font-black transition-colors',
              unlocked ? 'text-white/20 group-hover:text-electric' : 'text-white/10',
            )}
          >
            {module.number}
          </span>
          <span
            className={cn(
              'eyebrow rounded-full border px-2.5 py-1 text-[0.6rem]',
              state === 'Completed' && 'border-electric/40 text-electric',
              state === 'In progress' && 'border-white/20 text-foreground',
              (state === 'Not started' || state === 'Locked') && 'border-white/10 text-muted-foreground',
            )}
          >
            {state === 'Locked' && <Lock aria-hidden className="mr-1 -mt-px inline size-3" />}
            {state}
          </span>
        </div>
        <h2 className="font-display mt-5 text-xl font-black uppercase text-balance">{module.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{module.summary}</p>

        {expanded && (
          <ol className="mt-6 border-t border-white/[0.06]">
            {refs.map((ref) => {
              const status = getLessonStatus(progress, ref)
              const inner = (
                <>
                  <span className="eyebrow w-6 text-[0.65rem] text-muted-foreground">{ref.lesson.number}</span>
                  <span className="flex-1 text-sm">{ref.lesson.title}</span>
                  <LessonStatusIcon status={status} />
                  <span className="sr-only">{statusLabels[status]}</span>
                </>
              )
              return (
                <li key={ref.key} className="border-b border-white/[0.06] last:border-0">
                  {status === 'locked' ? (
                    <span className="flex items-center gap-3 py-3 text-white/35">{inner}</span>
                  ) : (
                    <Link
                      href={lessonHref(ref)}
                      className="flex items-center gap-3 py-3 transition-colors hover:text-electric"
                    >
                      {inner}
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        )}

        <div className="mt-auto pt-6">
          <div className="flex items-baseline justify-between">
            <span className="eyebrow text-[0.6rem] text-muted-foreground">{`${done} / ${total} lessons`}</span>
            <span className="font-display text-sm font-black">{percent}%</span>
          </div>
          <ProgressBar value={percent} label={`Module ${module.number} progress`} className="mt-2" />
        </div>
      </div>

      {unlocked ? (
        <Link
          href={lessonHref(nextRef)}
          className="group/link eyebrow flex items-center justify-between border-t border-white/[0.06] px-6 py-4 text-foreground transition-colors hover:bg-white/[0.03]"
        >
          {percent === 100 ? 'Review module' : done > 0 ? 'Continue module' : 'Start module'}
          <ArrowRight aria-hidden className="size-4 text-electric transition-transform group-hover/link:translate-x-1" />
        </Link>
      ) : (
        <p className="eyebrow border-t border-white/[0.06] px-6 py-4 text-muted-foreground">
          Complete Module {String(moduleIndex).padStart(2, '0')} to unlock
        </p>
      )}
    </article>
  )
}
