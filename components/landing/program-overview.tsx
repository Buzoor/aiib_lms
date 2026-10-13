import { Reveal } from '@/components/brand/reveal'
import { curriculum } from '@/lib/content'

export function ProgramOverview() {
  return (
    <section id="curriculum" className="landing-light scroll-mt-20 bg-[#eaf1f9] px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow text-electric">The Program</p>
            <h2 className="font-display mt-4 text-[clamp(2rem,5vw,3.75rem)] leading-tight font-black uppercase text-balance">
              From Understanding AI to Putting It to Work.
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-muted-foreground">
            Start with AI fundamentals, then apply what you learn to content, communication, sales, and website development.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-5 md:grid-cols-2">
          {curriculum.map((module, i) => (
            <Reveal
              as="li"
              key={module.id}
              delay={i * 80}
              className="landing-card group flex flex-col rounded-xl border p-6 transition-all duration-300 md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="font-display text-5xl leading-none font-black text-blue-700 transition-colors group-hover:text-blue-800">{module.number}</span>
                <span className="eyebrow rounded-full bg-blue-50 px-3 py-1.5 text-blue-700">{module.lessons.length} lessons</span>
              </div>
              <p className="eyebrow mt-5 text-electric">Module {module.number}</p>
              <h3 className="font-display mt-2 text-2xl font-bold text-balance">{module.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{module.summary}</p>
              <details className="mt-5 border-t border-slate-200 pt-4">
                <summary className="cursor-pointer text-sm font-semibold text-blue-700">View Lessons</summary>
                <ul className="mt-3 grid gap-2">
                  {module.lessons.map((lesson) => (
                    <li key={lesson.id} className="flex gap-3 rounded-lg bg-slate-50 px-3 py-2.5 text-sm">
                      <span className="font-semibold text-blue-700">{module.number}.{lesson.number}</span>
                      <span>{lesson.title}</span>
                    </li>
                  ))}
                </ul>
              </details>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
