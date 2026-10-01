import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ href = '/', className, priority }: { href?: string; className?: string; priority?: boolean }) {
  return (
    <Link href={href} className={cn('inline-flex shrink-0 items-center rounded-sm', className)} aria-label="AI in Business — home">
      <Image
        src="/images/aiib-logo.png"
        alt="AIIB — AI in Business"
        width={1340}
        height={530}
        priority={priority}
        className="h-9 w-auto"
      />
    </Link>
  )
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image src="/images/aiib-mark.png" alt="" aria-hidden width={740} height={380} className={cn('h-6 w-auto', className)} />
  )
}
