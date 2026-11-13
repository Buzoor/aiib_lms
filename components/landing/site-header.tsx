import Link from 'next/link'
import { ArrowRight, Menu } from 'lucide-react'
import { Logo } from '@/components/brand/logo'
import { cta, ctaArrow } from '@/components/brand/cta'

const links = [
  { href: '#about', label: 'About the Programme' },
  { href: '#curriculum', label: 'Curriculum' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#faq', label: 'FAQs' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 sm:gap-4 sm:px-5 md:px-8">
        <Logo priority imageClassName="h-7 sm:h-9" />
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="eyebrow text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href="/access"
            aria-label="Access Training"
            className={cta({ className: 'order-1 h-9 gap-1.5 px-2.5 text-[0.65rem] sm:h-10 sm:gap-2.5 sm:px-4 sm:text-xs' })}
          >
            <span className="sm:hidden">Access</span>
            <span className="hidden sm:inline">Access Training</span>
            <ArrowRight aria-hidden className={ctaArrow} />
          </Link>
          <details className="relative order-2 lg:hidden">
            <summary
              className="flex size-9 cursor-pointer list-none items-center justify-center rounded-md border border-white/15 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Toggle navigation"
            >
              <Menu aria-hidden className="size-4" />
            </summary>
            <nav
              aria-label="Mobile"
              className="absolute right-0 top-11 z-50 max-h-[calc(100dvh-5rem)] w-64 max-w-[calc(100vw-2rem)] overflow-y-auto rounded-xl border border-white/10 bg-[#111827] p-3 shadow-2xl"
            >
              <ul className="grid gap-1">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="block rounded-lg px-3 py-3 text-sm text-white/75 hover:bg-white/5 hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
