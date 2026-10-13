'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BookOpen, LayoutDashboard, type LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

const items: { href: string; label: string; icon: LucideIcon; isActive: (pathname: string) => boolean }[] = [
  { href: '/learn', label: 'Dashboard', icon: LayoutDashboard, isActive: (p) => p === '/learn' },
  { href: '/learn/introduction', label: 'Introduction', icon: BookOpen, isActive: (p) => p === '/learn/introduction' },
]

export function PrimaryNav({ onNavigate }: { onNavigate?: () => void }) {
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
                  active ? 'bg-slate-800/70 text-foreground' : 'text-muted-foreground hover:bg-slate-700 hover:text-foreground',
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
  const pathname = usePathname()
  const items = [
    { href: '/learn', label: 'Home', active: pathname === '/learn' },
    { href: '/learn/introduction', label: 'Introduction', active: pathname === '/learn/introduction' },
    { href: '/learn/modules', label: 'Modules', active: pathname === '/learn/modules' || pathname.startsWith('/learn/module-') },
    { href: '/learn/conclusion', label: 'Conclusion', active: pathname === '/learn/conclusion' },
  ]
  return (
    <nav aria-label="Course navigation" className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-700 bg-background/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden">
      <ul className="grid grid-cols-4">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={item.active ? 'page' : undefined}
              className={cn('flex min-h-14 items-center justify-center px-1 py-2 text-center text-[0.6rem] font-semibold uppercase tracking-wide transition-colors', item.active ? 'text-electric' : 'text-muted-foreground')}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
