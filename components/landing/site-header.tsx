import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Logo } from '@/components/brand/logo'
import { cta, ctaArrow } from '@/components/brand/cta'

const links = [
  { href: '#method', label: 'The Method' },
  { href: '#program', label: 'Program' },
  { href: '#how-it-works', label: 'How it works' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <Logo priority />
        <nav aria-label="Main" className="hidden md:block">
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
        <Link href="/access" className={cta({ className: 'h-10 px-4' })}>
          Start Learning
          <ArrowRight aria-hidden className={ctaArrow} />
        </Link>
      </div>
    </header>
  )
}
