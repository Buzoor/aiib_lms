'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getAdjacentCourseItems, getLessonRef, lessonHref, pillarLabels } from '@/lib/content'
import { LessonMaterial } from './lesson-material'
import { LessonProject } from './lesson-project'
import { LessonVideo } from './lesson-video'
import { cn } from '@/lib/utils'

const tabs = [
  { id: 'material', label: 'Training Material' },
  { id: 'project', label: 'Project' },
] as const

type TabId = (typeof tabs)[number]['id']

export function LessonView({ lessonKey }: { lessonKey: string }) {
  const ref = getLessonRef(lessonKey)!
  const { module, lesson } = ref
  const { previous, next } = getAdjacentCourseItems(lessonHref(ref))
  const [tab, setTab] = useState<TabId>('material')
  const tabRefs = useRef<Record<TabId, HTMLButtonElement | null>>({ material: null, project: null })

  function onTabKey(e: React.KeyboardEvent) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const nextTab: TabId = tab === 'material' ? 'project' : 'material'
    setTab(nextTab)
    tabRefs.current[nextTab]?.focus()
  }

  return (
    <article className="mx-auto max-w-5xl px-5 py-8 md:px-10 md:py-12">
      <nav aria-label="Breadcrumb" className="eyebrow flex flex-wrap items-center gap-2 text-[0.65rem] text-muted-foreground">
        <Link href="/learn/modules" className="transition-colors hover:text-foreground">Module {module.number}</Link>
        <span aria-hidden>/</span>
        <span>{module.title}</span>
      </nav>

      <header className="mt-4">
        <p className="font-display text-sm font-black text-electric">Lesson {lesson.number}</p>
        <h1 className="font-display mt-3 text-3xl leading-tight font-black uppercase text-balance md:text-5xl">{lesson.title}</h1>
      </header>

      <div className="mt-8">
        <LessonVideo url={lesson.videoUrl} title={`${lesson.title} training video`} />
      </div>

      <div className="mt-10">
        <div role="tablist" aria-label="Lesson content" className="flex gap-1 border-b border-slate-700">
          {tabs.map((item) => {
            const selected = tab === item.id
            return (
              <button
                key={item.id}
                ref={(el) => { tabRefs.current[item.id] = el }}
                type="button"
                role="tab"
                id={`tab-${item.id}`}
                aria-selected={selected}
                aria-controls={`panel-${item.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setTab(item.id)}
                onKeyDown={onTabKey}
                className={cn(
                  'eyebrow relative -mb-px flex min-h-12 items-center px-4 py-3.5 text-xs transition-colors',
                  selected ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
                {selected && <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 bg-electric" />}
              </button>
            )
          })}
        </div>
        <div role="tabpanel" id={`panel-${tab}`} aria-labelledby={`tab-${tab}`} tabIndex={0} className="pt-8 outline-none">
          {tab === 'material' ? <LessonMaterial material={lesson.material} /> : <LessonProject project={lesson.project} />}
        </div>
      </div>

      <nav aria-label="Lesson navigation" className="mt-12 grid gap-3 sm:grid-cols-2">
        {previous ? (
          <Link href={previous.href} className="group flex min-h-16 items-center gap-4 rounded-lg border border-slate-700 p-4 transition-colors hover:border-electric/50 hover:bg-slate-800/70">
            <ArrowLeft aria-hidden className="size-4 shrink-0 text-electric transition-transform group-hover:-translate-x-1" />
            <span className="min-w-0">
              <span className="eyebrow block text-[0.6rem] text-muted-foreground">Previous</span>
              <span className="block text-sm font-semibold text-pretty">{previous.title}</span>
            </span>
          </Link>
        ) : <span />}
        {next && (
          <Link href={next.href} className="group flex min-h-16 items-center justify-end gap-4 rounded-lg border border-slate-700 p-4 text-right transition-colors hover:border-electric/50 hover:bg-slate-800/70">
            <span className="min-w-0">
              <span className="eyebrow block text-[0.6rem] text-muted-foreground">{next.type === 'conclusion' ? 'Next' : 'Next lesson'}</span>
              <span className="block text-sm font-semibold text-pretty">{next.title}</span>
            </span>
            <ArrowRight aria-hidden className="size-4 shrink-0 text-electric transition-transform group-hover:translate-x-1" />
          </Link>
        )}
      </nav>
    </article>
  )
}
