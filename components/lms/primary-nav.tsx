'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CirclePlay, Layers, LayoutDashboard, TrendingUp, type LucideIcon } from 'lucide-react'
import { lessonHref } from '@/lib/content'
import { getCurrentLesson } from '@/lib/stores/progress'
import { useLearner } from './learner-context'
import { cn } from '@/lib/utils'

interface NavItem {
  href: string
  label: string
  icon: LucideIcon
  isActive: (pathname: string) => boolean
}

export function usePrimaryNav(): NavItem[] {
  const { progress } = useLearner()
  const current = getCurrentLesson(progress)
  const currentHref = current ? lessonHref(current) : '/learn/modules'
  return [
    { href: '/learn', label: 'Dashboard', icon: LayoutDashboard, isActive: (p) => p === '/learn' },
    { href: '/learn/modules', label: 'Modules', icon: Layers, isActive: (p) => p === '/learn/modules' },
    { href: currentHref, label: 'Current Lesson', icon: CirclePlay, isActive: (p) => p === currentHref },
    { href: '/learn/progress', label: 'Progress', icon: TrendingUp, isActive: (p) => p === '/learn/progress' },
  ]
}

export function PrimaryNav({ onNavigate }: { onNavigate?: () => void }) {
  const items = usePrimaryNav()
  const pathname = usePathname()
  return (
    <nav aria-label="Learning space">
      <ul className="flex flex-col gap-1">
        {items.map((item) => {
          const active = item.isActive(pathname)
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onNavigate}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                  active
                    ? 'bg-white/[0.06] text-foreground'
                    : 'text-muted-foreground hover:bg-white/[0.04] hover:text-foreground',
                )}
              >
                {active && <span aria-hidden className="absolute top-2 bottom-2 left-0 w-0.5 rounded-full bg-electric" />}
                <item.icon aria-hidden className={cn('size-4', active && 'text-electric')} />
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export function BottomNav() {
  const items = usePrimaryNav()
  const pathname = usePathname()
  return (
    <nav
      aria-label="Learning space"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-background/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden"
    >
      <ul className="grid grid-cols-4">
        {items.map((item) => {
          const active = item.isActive(pathname)
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'flex flex-col items-center gap-1 py-3 text-[0.65rem] font-semibold tracking-wide uppercase transition-colors',
                  active ? 'text-electric' : 'text-muted-foreground',
                )}
              >
                <item.icon aria-hidden className="size-5" />
                {item.label === 'Current Lesson' ? 'Lesson' : item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
