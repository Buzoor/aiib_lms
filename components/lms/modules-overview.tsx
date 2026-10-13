import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cta, ctaArrow } from '@/components/brand/cta'
import { curriculum } from '@/lib/content'
import { ModuleCard } from './module-card'
import { PageHeader } from './page-header'

export function ModulesOverview() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 md:px-10 md:py-14">
      <PageHeader eyebrow="Course content" title="All modules">
        Explore the lessons in any order. Open a lesson to watch its video, read a brief summary, and access its project link.
      </PageHeader>
      <Link href="/learn/introduction" className={cta({ className: 'mt-7' })}>
        Return to Introduction
        <ArrowRight aria-hidden className={ctaArrow} />
      </Link>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {curriculum.map((module) => <ModuleCard key={module.id} module={module} expanded />)}
      </div>
    </div>
  )
}
