'use client'

import { useEffect, useId, useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, KeyRound, LoaderCircle } from 'lucide-react'
import { verifyAccessCode } from '@/app/actions/access'
import { cta, ctaArrow } from '@/components/brand/cta'
import { startSession, useTrainee } from '@/lib/stores/session'
import { cn } from '@/lib/utils'

export function AccessForm() {
  const router = useRouter()
  const trainee = useTrainee()
  const [code, setCode] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [pending, startTransition] = useTransition()
  const inputId = useId()
  const errorId = useId()

  useEffect(() => {
    if (trainee) router.replace('/learn')
  }, [trainee, router])

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!code.trim()) {
      setError('Enter the access code you received from AIIB.')
      return
    }
    if (!email.trim()) {
      setError('Enter the email address associated with your access code.')
      return
    }
    setError(null)
    startTransition(async () => {
      const result = await verifyAccessCode(code, email)
      if (!result.ok) {
        setError(result.error)
        return
      }
      startSession(result.trainee)
      router.push('/learn')
    })
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <label htmlFor={`${inputId}-email`} className="eyebrow text-muted-foreground">
        Email address
      </label>
      <div
        className={cn(
          'mt-3 flex h-14 items-center gap-3 rounded-md border bg-white/[0.03] px-4 transition-colors focus-within:border-electric focus-within:bg-white/[0.05]',
          error ? 'border-destructive/70' : 'border-white/15',
        )}
      >
        <input
          id={`${inputId}-email`}
          name="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) setError(null)
          }}
          placeholder="Enter your email address"
          autoComplete="email"
          maxLength={254}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className="h-full w-full bg-transparent text-base text-foreground outline-none placeholder:text-white/25"
        />
      </div>

      <label htmlFor={inputId} className="eyebrow mt-6 block text-muted-foreground">
        Access code
      </label>
      <div
        className={cn(
          'mt-3 flex h-14 items-center gap-3 rounded-md border bg-white/[0.03] px-4 transition-colors focus-within:border-electric focus-within:bg-white/[0.05]',
          error ? 'border-destructive/70' : 'border-white/15',
        )}
      >
        <KeyRound aria-hidden className="size-4 shrink-0 text-muted-foreground" />
        <input
          id={inputId}
          name="code"
          value={code}
          onChange={(e) => {
            setCode(e.target.value.toUpperCase())
            if (error) setError(null)
          }}
          placeholder="Enter your access code"
          autoComplete="one-time-code"
          autoCapitalize="characters"
          spellCheck={false}
          maxLength={40}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
          className="font-display h-full w-full bg-transparent text-lg font-bold tracking-[0.12em] text-foreground uppercase outline-none placeholder:font-normal placeholder:text-white/25"
        />
      </div>
      <p id={errorId} role="alert" className={cn('mt-3 min-h-5 text-sm text-destructive', !error && 'sr-only')}>
        {error}
      </p>

      <button type="submit" disabled={pending} className={cta({ size: 'lg', className: 'mt-4 w-full' })}>
        {pending ? (
          <>
            <LoaderCircle aria-hidden className="animate-spin" />
            Verifying
          </>
        ) : (
          <>
            Enter Learning Space
            <ArrowRight aria-hidden className={ctaArrow} />
          </>
        )}
      </button>
    </form>
  )
}
