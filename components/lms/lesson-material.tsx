import type { LessonMaterial as Material } from '@/lib/content/types'
import { BookOpenText, Lightbulb, Sparkles, Target } from 'lucide-react'

export function LessonMaterial({ material }: { material: Material }) {
  if (material.layout === 'enhanced') {
    return (
      <section aria-labelledby="lesson-summary" className="lesson-material-enter mx-auto max-w-4xl space-y-5 text-slate-900">
        <div className="lesson-material-section rounded-2xl border border-blue-100 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex items-center gap-2 text-blue-700">
            <BookOpenText aria-hidden className="size-5" />
            <h2 id="lesson-summary" className="text-sm font-bold uppercase tracking-[0.12em]">Lesson overview</h2>
          </div>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700 sm:text-[1.05rem]">{material.intro}</p>
        </div>

        <div className="lesson-material-section rounded-2xl border border-slate-200 bg-[#F7F9FC] p-5 shadow-sm sm:p-7">
          <div className="flex items-center gap-2 text-slate-900">
            <Lightbulb aria-hidden className="size-5 text-blue-600" />
            <h2 className="text-sm font-bold uppercase tracking-[0.12em]">What you’ll explore</h2>
          </div>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {material.principles.map((principle) => (
              <li key={principle.title} className="rounded-xl border border-slate-200 bg-white p-4 transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md">
                <h3 className="font-semibold text-slate-900">{principle.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{principle.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lesson-material-section rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex items-center gap-2 text-slate-900">
            <Target aria-hidden className="size-5 text-blue-600" />
            <h2 className="text-sm font-bold uppercase tracking-[0.12em]">Putting it into practice</h2>
          </div>
          <h3 className="mt-4 font-semibold text-slate-900">{material.businessExample.title}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{material.businessExample.scenario}</p>
        </div>

        <div className="lesson-material-section rounded-2xl border border-blue-200 bg-blue-50 p-5 shadow-sm transition duration-200 hover:border-blue-300 hover:shadow-md sm:p-6">
          <div className="flex items-center gap-2 text-blue-800">
            <Sparkles aria-hidden className="size-5" />
            <h2 className="text-sm font-bold uppercase tracking-[0.12em]">Key takeaway</h2>
          </div>
          <p className="mt-3 text-base leading-7 font-semibold text-slate-900">{material.takeaway}</p>
        </div>
      </section>
    )
  }

  return (
    <section aria-labelledby="lesson-summary" className="max-w-3xl">
      <h2 id="lesson-summary" className="eyebrow text-muted-foreground">Lesson summary</h2>
      <p className="mt-4 text-lg leading-relaxed text-pretty text-foreground">{material.intro}</p>
    </section>
  )
}
