import { ExternalLink, Link2 } from 'lucide-react'
import type { LessonProject as Project } from '@/lib/content/types'

export function LessonProject({ project }: { project: Project }) {
  return (
    <section aria-labelledby="project-link-heading" className="max-w-3xl rounded-xl border border-slate-700 bg-card p-6 md:p-8">
      <h2 id="project-link-heading" className="eyebrow text-muted-foreground">Project Link</h2>
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-11 items-center gap-3 rounded-lg border border-electric/40 bg-primary/10 px-4 py-3 font-semibold text-electric underline-offset-4 transition-colors hover:bg-primary/20 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          <Link2 aria-hidden className="size-4" />
          Open project
          <ExternalLink aria-hidden className="size-4" />
        </a>
      ) : (
        <p className="mt-4 text-muted-foreground">Project link will be added here.</p>
      )}
    </section>
  )
}
