'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { allLessons, curriculum, lessonHref } from '@/lib/content'
import { getLessonStatus, getModuleProgress, isModuleUnlocked } from '@/lib/stores/progress'
import { useLearner } from './learner-context'
import { LessonStatusIcon, statusLabels } from './lesson-status-icon'
import { cn } from '@/lib/utils'

export function ModuleNav({ onNavigate }: { onNavigate?: () => void }) {
  const { progress } = useLearner()
  const pathname = usePathname()
  const activeModuleId = pathname.split('/')[2]
  const [open, setOpen] = useState<string[]>(() => [activeModuleId ?? curriculum[0].id])

  const toggle = (id: string) => setOpen((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]))

  return (
    <nav aria-label="Modules and lessons">
      <ul className="flex flex-col gap-1">
        {curriculum.map((module, moduleIndex) => {
          const isOpen = open.includes(module.id) || module.id === activeModuleId
          const { done, total } = getModuleProgress(progress, module)
          const unlocked = isModuleUnlocked(progress, moduleIndex)
          const panelId = `module-panel-${module.id}`
          return (
            <li key={module.id}>
              <button
                type="button"
                onClick={() => toggle(module.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left transition-colors hover:bg-white/[0.04]"
              >
                <span className={cn('font-display text-sm font-black', unlocked ? 'text-electric' : 'text-white/25')}>
                  {module.number}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-semibold">{module.title}</span>
                  <span className="eyebrow text-[0.6rem] text-muted-foreground">
                    {unlocked ? `${done}/${total} lessons` : 'Locked'}
                  </span>
                </span>
                <ChevronDown
                  aria-hidden
                  className={cn('size-4 text-muted-foreground transition-transform', isOpen && 'rotate-180')}
                />
              </button>
              {isOpen && (
                <ul id={panelId} className="mt-1 mb-2 ml-[1.15rem] border-l border-white/10 pl-3">
                  {module.lessons.map((lesson) => {
                    const ref = allLessons.find((r) => r.module.id === module.id && r.lesson.id === lesson.id)!
                    const status = getLessonStatus(progress, ref)
                    const href = lessonHref(ref)
                    const active = pathname === href
                    const content = (
                      <>
                        <LessonStatusIcon status={status} />
                        <span className="min-w-0 flex-1 truncate">{lesson.title}</span>
                        <span className="sr-only">{`— ${statusLabels[status]}`}</span>
                      </>
                    )
                    const classes = cn(
                      'flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors',
                      active ? 'bg-primary/15 text-foreground' : 'text-muted-foreground',
                      status !== 'locked' && !active && 'hover:bg-white/[0.04] hover:text-foreground',
                    )
                    return (
                      <li key={lesson.id}>
                        {status === 'locked' ? (
                          <span className={cn(classes, 'cursor-not-allowed text-white/30')} aria-disabled>
                            {content}
                          </span>
                        ) : (
                          <Link
                            href={href}
                            onClick={onNavigate}
                            aria-current={active ? 'page' : undefined}
                            className={classes}
                          >
                            {content}
                          </Link>
                        )}
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
