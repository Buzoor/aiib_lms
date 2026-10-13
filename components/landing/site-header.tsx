import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
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
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:px-8">
        <Logo priority />
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
        <div className="flex items-center gap-3">
          <details className="relative lg:hidden">
            <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-md border border-white/15 text-sm" aria-label="Open navigation">☰</summary>
            <nav aria-label="Mobile" className="absolute right-0 top-12 z-50 w-64 rounded-xl border border-white/10 bg-[#111827] p-3 shadow-2xl">
              <ul className="grid gap-1">
                {links.map((link) => <li key={link.href}><a href={link.href} className="block rounded-lg px-3 py-3 text-sm text-white/75 hover:bg-white/5 hover:text-white">{link.label}</a></li>)}
              </ul>
            </nav>
          </details>
          <Link href="/access" className={cta({ className: 'h-10 px-4' })}>
            Access Training
            <ArrowRight aria-hidden className={ctaArrow} />
          </Link>
        </div>
      </div>
    </header>
  )
}
