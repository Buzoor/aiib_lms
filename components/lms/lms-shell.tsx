'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { LogOut, Menu, X } from 'lucide-react'
import { Logo, LogoMark } from '@/components/brand/logo'
import { endSession, useTrainee } from '@/lib/stores/session'
import { getSummary, useProgress, type Progress } from '@/lib/stores/progress'
import type { Trainee } from '@/lib/content/types'
import { LearnerContext } from './learner-context'
import { ModuleNav } from './module-nav'
import { BottomNav, PrimaryNav } from './primary-nav'
import { ProgressBar } from './progress-visuals'
import { cn } from '@/lib/utils'

export function LmsShell({ children }: { children: ReactNode }) {
  const router = useRouter()
  const trainee = useTrainee()
  const progress = useProgress(trainee?.code)

  useEffect(() => {
    if (trainee === null) router.replace('/access')
  }, [trainee, router])

  if (!trainee || !progress) return <LoadingScreen />

  return (
    <LearnerContext value={{ trainee, progress }}>
      <ShellLayout trainee={trainee} progress={progress}>
        {children}
      </ShellLayout>
    </LearnerContext>
  )
}

function ShellLayout({ trainee, progress, children }: { trainee: Trainee; progress: Progress; children: ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const summary = getSummary(progress)

  useEffect(() => {
    if (!drawerOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setDrawerOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  function logout() {
    endSession()
    router.replace('/access')
  }

  const sidebarBody = (onNavigate?: () => void) => (
    <>
      <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
        <p className="eyebrow text-[0.6rem] text-muted-foreground">{trainee.cohort}</p>
        <p className="mt-1 truncate font-semibold">{trainee.name}</p>
        <div className="mt-4 flex items-baseline justify-between">
          <span className="eyebrow text-[0.6rem] text-muted-foreground">Overall</span>
          <span className="font-display text-sm font-black">{summary.percent}%</span>
        </div>
        <ProgressBar value={summary.percent} label="Overall course progress" className="mt-2" />
      </div>
      <div className="mt-6">
        <PrimaryNav onNavigate={onNavigate} />
      </div>
      <div className="mt-8 border-t border-white/[0.06] pt-6">
        <p className="eyebrow mb-3 px-3 text-[0.6rem] text-muted-foreground">Course</p>
        <ModuleNav key={pathname} onNavigate={onNavigate} />
      </div>
    </>
  )

  return (
    <div className="min-h-dvh lg:grid lg:grid-cols-[18.5rem_1fr]">
      <aside className="sticky top-0 hidden h-dvh flex-col border-r border-white/[0.06] bg-sidebar lg:flex">
        <div className="flex h-16 shrink-0 items-center px-5">
          <Logo href="/learn" />
        </div>
        <div className="flex-1 overflow-y-auto px-3 pb-6">{sidebarBody()}</div>
        <div className="border-t border-white/[0.06] p-3">
          <LogoutButton onClick={logout} code={trainee.code} />
        </div>
      </aside>

      <header className="sticky top-0 z-40 flex h-14 items-center justify-between gap-4 border-b border-white/[0.06] bg-background/85 px-4 backdrop-blur-xl lg:hidden">
        <Logo href="/learn" className="[&_img]:h-7" />
        <div className="flex items-center gap-3">
          <span className="eyebrow text-xs text-muted-foreground">
            <span className="text-foreground">{summary.percent}%</span> complete
          </span>
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open course menu"
            aria-expanded={drawerOpen}
            className="flex size-10 items-center justify-center rounded-md border border-white/10 text-foreground"
          >
            <Menu aria-hidden className="size-5" />
          </button>
        </div>
      </header>

      <div
        className={cn('fixed inset-0 z-50 lg:hidden', drawerOpen ? 'pointer-events-auto' : 'pointer-events-none')}
        aria-hidden={!drawerOpen}
        inert={!drawerOpen}
      >
        <div
          className={cn('absolute inset-0 bg-black/70 transition-opacity', drawerOpen ? 'opacity-100' : 'opacity-0')}
          onClick={() => setDrawerOpen(false)}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Course menu"
          className={cn(
            'absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col border-r border-white/10 bg-sidebar transition-transform duration-300',
            drawerOpen ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <div className="flex h-14 shrink-0 items-center justify-between px-4">
            <LogoMark />
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close course menu"
              className="flex size-10 items-center justify-center rounded-md text-muted-foreground hover:text-foreground"
            >
              <X aria-hidden className="size-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-3 pb-6">{sidebarBody(() => setDrawerOpen(false))}</div>
          <div className="border-t border-white/[0.06] p-3">
            <LogoutButton onClick={logout} code={trainee.code} />
          </div>
        </div>
      </div>

      <main id="main" className="min-w-0 pb-24 lg:pb-0">
        {children}
      </main>
      <BottomNav />
    </div>
  )
}

function LogoutButton({ onClick, code }: { onClick: () => void; code: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground"
    >
      <LogOut aria-hidden className="size-4" />
      <span className="flex-1 text-left">Log out</span>
      <span className="eyebrow text-[0.6rem] text-white/30">{code}</span>
    </button>
  )
}

function LoadingScreen() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6" role="status">
      <LogoMark className="h-10 animate-pulse" />
      <span className="sr-only">Loading your learning space</span>
    </div>
  )
}
