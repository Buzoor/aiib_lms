'use client'

import { curriculum } from '@/lib/content'
import { LOCK_MODULES_IN_ORDER } from '@/lib/stores/progress'
import { ModuleCard } from './module-card'
import { PageHeader } from './page-header'

export function ModulesOverview() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-10 md:px-10 md:py-14">
      <PageHeader eyebrow="Season 1 curriculum" title="All modules">
        {LOCK_MODULES_IN_ORDER
          ? 'Work through the modules in order. Each one unlocks when the previous module is complete.'
          : 'Work through the modules at your own pace.'}
      </PageHeader>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {curriculum.map((module, i) => (
          <ModuleCard key={module.id} module={module} moduleIndex={i} expanded />
        ))}
      </div>
    </div>
  )
}
