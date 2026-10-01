import { Reveal } from '@/components/brand/reveal'
import { curriculum } from '@/lib/content'

export function ProgramOverview() {
  return (
    <section id="program" className="scroll-mt-20 border-t border-white/[0.06] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-electric">The Program</p>
            <h2 className="font-display mt-4 text-4xl leading-[0.95] font-black uppercase md:text-6xl">
              Four modules.
              <br />
              One system.
            </h2>
          </div>
          <p className="max-w-sm leading-relaxed text-muted-foreground">
            Every lesson follows the same rhythm: watch the video, learn the principles, then build something real for
            your business.
          </p>
        </Reveal>

        <ol className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {curriculum.map((module, i) => (
            <Reveal
              as="li"
              key={module.id}
              delay={i * 80}
              className="group grid gap-6 py-10 transition-colors md:grid-cols-[8rem_1fr_1.2fr] md:gap-10"
            >
              <span className="font-display text-6xl leading-none font-black text-white/15 transition-colors duration-500 group-hover:text-electric md:text-7xl">
                {module.number}
              </span>
              <div>
                <p className="eyebrow text-muted-foreground">Module {module.number}</p>
                <h3 className="font-display mt-2 text-2xl font-black uppercase md:text-3xl text-balance">{module.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">{module.summary}</p>
              </div>
              <ul className="grid content-start gap-px">
                {module.lessons.map((lesson) => (
                  <li key={lesson.id} className="flex items-baseline gap-4 border-b border-white/[0.06] py-3 last:border-0">
                    <span className="eyebrow w-6 shrink-0 text-electric">{lesson.number}</span>
                    <span className="text-foreground/90">{lesson.title}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
