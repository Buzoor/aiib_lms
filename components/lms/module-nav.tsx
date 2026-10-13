'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { curriculum, lessonHref } from '@/lib/content'
import { cn } from '@/lib/utils'

export function ModuleNav({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()
  const activeModuleId = pathname.split('/')[2]
  const [open, setOpen] = useState<string[]>(() => [activeModuleId ?? curriculum[0].id])
  const toggle = (id: string) => setOpen((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]))

  return (
    <nav aria-label="Modules and lessons">
      <Link
        href="/learn/modules"
        onClick={onNavigate}
        aria-current={pathname === '/learn/modules' ? 'page' : undefined}
        className={cn('mb-2 block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-slate-700 hover:text-foreground', pathname === '/learn/modules' && 'bg-slate-800/70 text-foreground')}
      >
        All modules
      </Link>
      <ul className="flex flex-col gap-1">
        {curriculum.map((module) => {
          const isOpen = open.includes(module.id) || module.id === activeModuleId
          const panelId = `module-panel-${module.id}`
          return (
            <li key={module.id}>
              <button
                type="button"
                onClick={() => toggle(module.id)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left transition-colors hover:bg-slate-700"
              >
                <span className="font-display text-sm font-black text-electric">{module.number}</span>
                <span className="min-w-0 flex-1 truncate text-sm font-semibold">{module.title}</span>
                <ChevronDown aria-hidden className={cn('size-4 text-muted-foreground transition-transform', isOpen && 'rotate-180')} />
              </button>
              {isOpen && (
                <ul id={panelId} className="mt-1 mb-2 ml-[1.15rem] border-l border-slate-700 pl-3">
                  {module.lessons.map((lesson) => {
                    const href = lessonHref({ module, lesson })
                    const active = pathname === href
                    return (
                      <li key={lesson.id}>
                        <Link
                          href={href}
                          onClick={onNavigate}
                          aria-current={active ? 'page' : undefined}
                          className={cn(
                            'block rounded-md px-2.5 py-2 text-sm transition-colors',
                            active ? 'bg-primary/15 text-foreground' : 'text-muted-foreground hover:bg-slate-700 hover:text-foreground',
                          )}
                        >
                          {lesson.number}. {lesson.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
      <Link
        href="/learn/conclusion"
        onClick={onNavigate}
        aria-current={pathname === '/learn/conclusion' ? 'page' : undefined}
        className={cn('mt-2 block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-slate-700 hover:text-foreground', pathname === '/learn/conclusion' && 'bg-slate-800/70 text-foreground')}
      >
        Conclusion
      </Link>
    </nav>
  )
}
