'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Check, Lock } from 'lucide-react'
import { cta, ctaArrow } from '@/components/brand/cta'
import { TriadInline } from '@/components/brand/growth-triad'
import { getAdjacentLessons, getLessonRef, lessonHref, pillarLabels } from '@/lib/content'
import { getLessonStatus, progressActions } from '@/lib/stores/progress'
import { useLearner } from './learner-context'
import { LessonMaterial } from './lesson-material'
import { LessonProject } from './lesson-project'
import { LessonVideo } from './lesson-video'
import { cn } from '@/lib/utils'

const tabs = [
  { id: 'material', label: 'Training material' },
  { id: 'project', label: 'Project' },
] as const

type TabId = (typeof tabs)[number]['id']

export function LessonView({ lessonKey }: { lessonKey: string }) {
  const { trainee, progress } = useLearner()
  const ref = getLessonRef(lessonKey)!
  const { previous, next } = getAdjacentLessons(lessonKey)
  const status = getLessonStatus(progress, ref)
  const [tab, setTab] = useState<TabId>('material')
  const tabRefs = useRef<Record<TabId, HTMLButtonElement | null>>({ material: null, project: null })

  const locked = status === 'locked'
  const completed = status === 'completed'

  useEffect(() => {
    if (!locked) progressActions.visit(trainee.code, lessonKey)
  }, [locked, trainee.code, lessonKey])

  if (locked) return <LockedLesson moduleNumber={ref.module.number} />

  const { module, lesson } = ref
  const nextLocked = next ? getLessonStatus(progress, next) === 'locked' && !completed : false

  function onTabKey(e: React.KeyboardEvent) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const nextTab: TabId = tab === 'material' ? 'project' : 'material'
    setTab(nextTab)
    tabRefs.current[nextTab]?.focus()
  }

  return (
    <article className="mx-auto max-w-5xl px-5 py-8 md:px-10 md:py-12">
      <nav aria-label="Breadcrumb" className="eyebrow flex flex-wrap items-center gap-2 text-[0.65rem] text-muted-foreground">
        <Link href="/learn/modules" className="transition-colors hover:text-foreground">
          {`Module ${module.number}`}
        </Link>
        <span aria-hidden>/</span>
        <span className="truncate">{module.title}</span>
      </nav>

      <header className="mt-4 animate-rise">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-display text-sm font-black text-electric">{`Lesson ${lesson.number}`}</span>
          <span className="eyebrow rounded-full border border-white/15 px-2.5 py-1 text-[0.55rem] text-muted-foreground">
            {`${pillarLabels[lesson.focus]} focus`}
          </span>
          {completed && (
            <span className="eyebrow flex items-center gap-1 rounded-full border border-electric/40 px-2.5 py-1 text-[0.55rem] text-electric">
              <Check aria-hidden className="size-3" />
              Completed
            </span>
          )}
        </div>
        <h1 className="font-display mt-3 text-3xl leading-[0.95] font-black uppercase md:text-5xl text-balance">
          {lesson.title}
        </h1>
        <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{lesson.description}</p>
      </header>

      <div className="mt-8 animate-rise [animation-delay:100ms]">
        <LessonVideo url={lesson.videoUrl} title={`${lesson.title} — training video`} />
      </div>

      <TriadInline highlight={lesson.focus} className="mt-5" />

      <div className="mt-10">
        <div role="tablist" aria-label="Lesson content" className="flex gap-1 border-b border-white/10">
          {tabs.map((t) => {
            const selected = tab === t.id
            return (
              <button
                key={t.id}
                ref={(el) => {
                  tabRefs.current[t.id] = el
                }}
                type="button"
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={selected}
                aria-controls={`panel-${t.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setTab(t.id)}
                onKeyDown={onTabKey}
                className={cn(
                  'eyebrow relative -mb-px flex items-center gap-2 px-4 py-3.5 text-xs transition-colors',
                  selected ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {t.label}
                {t.id === 'project' && progress.projects.includes(lessonKey) && (
                  <Check aria-label="completed" className="size-3.5 text-electric" />
                )}
                {selected && <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 bg-electric" />}
              </button>
            )
          })}
        </div>
        <div
          role="tabpanel"
          id={`panel-${tab}`}
          aria-labelledby={`tab-${tab}`}
          tabIndex={0}
          className="pt-8 outline-none"
        >
          {tab === 'material' ? (
            <LessonMaterial material={lesson.material} />
          ) : (
            <LessonProject key={lessonKey} project={lesson.project} lessonKey={lessonKey} />
          )}
        </div>
      </div>

      <section
        aria-label="Lesson completion"
        className="mt-14 flex flex-col gap-4 rounded-lg border border-white/10 bg-card p-6 md:flex-row md:items-center md:justify-between md:p-8"
      >
        <div>
          <p className="font-display text-lg font-black uppercase">
            {completed ? 'Lesson complete.' : 'Finished this lesson?'}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {completed
              ? next
                ? 'Keep the momentum going with the next lesson.'
                : 'You have reached the end of Season 1.'
              : 'Watch the video, work through the material, then mark it complete.'}
          </p>
        </div>
        {completed ? (
          next && (
            <Link href={lessonHref(next)} className={cta({ size: 'lg' })}>
              Next lesson
              <ArrowRight aria-hidden className={ctaArrow} />
            </Link>
          )
        ) : (
          <button type="button" onClick={() => progressActions.completeLesson(trainee.code, lessonKey)} className={cta({ size: 'lg' })}>
            <Check aria-hidden />
            Mark lesson complete
          </button>
        )}
      </section>

      <nav aria-label="Lesson navigation" className="mt-6 grid gap-3 sm:grid-cols-2">
        {previous ? (
          <Link
            href={lessonHref(previous)}
            className="group flex items-center gap-4 rounded-lg border border-white/[0.06] p-5 transition-colors hover:border-white/20"
          >
            <ArrowLeft aria-hidden className="size-4 text-muted-foreground transition-transform group-hover:-translate-x-1" />
            <span className="min-w-0">
              <span className="eyebrow block text-[0.6rem] text-muted-foreground">Previous</span>
              <span className="block truncate text-sm font-semibold">{previous.lesson.title}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}
        {next &&
          (nextLocked ? (
            <span className="flex items-center justify-end gap-4 rounded-lg border border-white/[0.06] p-5 text-right text-white/35">
              <span className="min-w-0">
                <span className="eyebrow block text-[0.6rem]">Next · Locked</span>
                <span className="block truncate text-sm font-semibold">{next.lesson.title}</span>
              </span>
              <Lock aria-hidden className="size-4" />
            </span>
          ) : (
            <Link
              href={lessonHref(next)}
              className="group flex items-center justify-end gap-4 rounded-lg border border-white/[0.06] p-5 text-right transition-colors hover:border-white/20"
            >
              <span className="min-w-0">
                <span className="eyebrow block text-[0.6rem] text-muted-foreground">Next</span>
                <span className="block truncate text-sm font-semibold">{next.lesson.title}</span>
              </span>
              <ArrowRight aria-hidden className="size-4 text-electric transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
      </nav>
    </article>
  )
}

function LockedLesson({ moduleNumber }: { moduleNumber: string }) {
  return (
    <div className="mx-auto flex min-h-[70dvh] max-w-md flex-col items-center justify-center px-6 text-center">
      <div className="flex size-14 items-center justify-center rounded-full border border-white/10">
        <Lock aria-hidden className="size-6 text-muted-foreground" />
      </div>
      <h1 className="font-display mt-6 text-3xl font-black uppercase">Module locked</h1>
      <p className="mt-3 text-muted-foreground">
        {`Complete the previous module to unlock Module ${moduleNumber}. Every step builds on the last.`}
      </p>
      <Link href="/learn/modules" className={cta({ variant: 'secondary', className: 'mt-8' })}>
        View modules
      </Link>
    </div>
  )
}
