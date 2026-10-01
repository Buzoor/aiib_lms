'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { Check, ClipboardCheck, Target } from 'lucide-react'
import type { LessonProject as Project } from '@/lib/content/types'
import { progressActions } from '@/lib/stores/progress'
import { cta } from '@/components/brand/cta'
import { useLearner } from './learner-context'
import { cn } from '@/lib/utils'

export function LessonProject({ project, lessonKey }: { project: Project; lessonKey: string }) {
  const { trainee, progress } = useLearner()
  const done = progress.projects.includes(lessonKey)
  const notesId = useId()
  const [note, setNote] = useState(progress.notes[lessonKey] ?? '')
  const [saved, setSaved] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  function handleNote(value: string) {
    setNote(value)
    setSaved(false)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      progressActions.saveNote(trainee.code, lessonKey, value)
      setSaved(true)
    }, 500)
  }

  return (
    <div className="grid gap-8">
      <div className="flex items-start gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary/15">
          <Target aria-hidden className="size-5 text-electric" />
        </div>
        <div>
          <p className="eyebrow text-[0.65rem] text-muted-foreground">Project brief</p>
          <p className="font-display mt-1 text-xl font-black uppercase text-balance">{project.brief}</p>
        </div>
      </div>

      <section aria-labelledby="tasks">
        <h3 id="tasks" className="eyebrow text-muted-foreground">
          Your tasks
        </h3>
        <ol className="mt-4 grid gap-3">
          {project.tasks.map((task, i) => (
            <li key={task} className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.02] p-4">
              <span className="font-display flex size-7 shrink-0 items-center justify-center rounded-full border border-electric/40 text-xs font-black text-electric">
                {i + 1}
              </span>
              <span className="pt-0.5 leading-relaxed">{task}</span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="output" className="rounded-lg border border-dashed border-white/15 p-5">
        <h3 id="output" className="eyebrow flex items-center gap-2 text-[0.65rem] text-muted-foreground">
          <ClipboardCheck aria-hidden className="size-3.5" />
          Expected output
        </h3>
        <p className="mt-2 font-semibold">{project.expectedOutput}</p>
      </section>

      <div>
        <div className="flex items-baseline justify-between">
          <label htmlFor={notesId} className="eyebrow text-muted-foreground">
            Your notes
          </label>
          <span aria-live="polite" className="eyebrow text-[0.6rem] text-muted-foreground">
            {saved ? 'Saved' : ''}
          </span>
        </div>
        {project.notesPrompt && <p className="mt-2 text-sm text-muted-foreground">{project.notesPrompt}</p>}
        <textarea
          id={notesId}
          value={note}
          onChange={(e) => handleNote(e.target.value)}
          rows={5}
          placeholder="Capture your answers, ideas and results here…"
          className="mt-3 w-full resize-y rounded-md border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed outline-none transition-colors placeholder:text-white/25 focus:border-electric focus:bg-white/[0.05]"
        />
      </div>

      <button
        type="button"
        onClick={() => progressActions.completeProject(trainee.code, lessonKey)}
        disabled={done}
        aria-pressed={done}
        className={cn(
          cta({ variant: done ? 'secondary' : 'primary', className: 'self-start' }),
          done && 'disabled:opacity-100 border-electric/40 text-electric',
        )}
      >
        <Check aria-hidden />
        {done ? 'Project completed' : 'Mark project complete'}
      </button>
    </div>
  )
}
