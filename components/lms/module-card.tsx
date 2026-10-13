import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Module } from '@/lib/content/types'
import { lessonHref } from '@/lib/content'

export function ModuleCard({ module, expanded = false }: { module: Module; expanded?: boolean }) {
  const firstLesson = module.lessons[0]
  const firstHref = lessonHref({ module, lesson: firstLesson })

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-700 bg-card transition-colors hover:border-electric/50">
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="font-display text-5xl leading-none font-black text-electric">{module.number}</span>
          <span className="eyebrow rounded-full border border-slate-700 px-2.5 py-1 text-[0.6rem] text-muted-foreground">
            {module.lessons.length} lessons
          </span>
        </div>
        <h2 className="font-display mt-5 text-xl font-bold text-balance">{module.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{module.summary}</p>

        {expanded && (
          <ol className="mt-6 border-t border-slate-700 pt-2">
            {module.lessons.map((lesson) => (
              <li key={lesson.id} className="border-b border-slate-700 last:border-0">
                <Link
                  href={lessonHref({ module, lesson })}
                  className="flex items-center gap-3 py-3 text-sm transition-colors hover:text-electric"
                >
                  <span className="eyebrow w-6 text-[0.65rem] text-muted-foreground">{lesson.number}</span>
                  <span className="flex-1">{lesson.title}</span>
                  <ArrowRight aria-hidden className="size-3.5 text-electric" />
                </Link>
              </li>
            ))}
          </ol>
        )}

        {!expanded && <p className="eyebrow mt-auto pt-6 text-[0.6rem] text-muted-foreground">{module.lessons.length} lessons in this module</p>}
      </div>
      <Link
        href={firstHref}
        className="group/link eyebrow flex items-center justify-between border-t border-slate-700 px-6 py-4 text-foreground transition-colors hover:bg-slate-800/70"
      >
        Open module
        <ArrowRight aria-hidden className="size-4 text-electric transition-transform group-hover/link:translate-x-1" />
      </Link>
    </article>
  )
}
