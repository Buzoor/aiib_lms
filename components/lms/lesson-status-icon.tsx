import { CircleCheck, CircleDot, Circle, Lock } from 'lucide-react'
import type { LessonStatus } from '@/lib/stores/progress'
import { cn } from '@/lib/utils'

export const statusLabels: Record<LessonStatus, string> = {
  locked: 'Locked',
  available: 'Not started',
  'in-progress': 'In progress',
  completed: 'Completed',
}

export function LessonStatusIcon({ status, className }: { status: LessonStatus; className?: string }) {
  const props = { 'aria-hidden': true, className: cn('size-4 shrink-0', className) }
  if (status === 'completed') return <CircleCheck {...props} className={cn(props.className, 'text-electric')} />
  if (status === 'in-progress') return <CircleDot {...props} className={cn(props.className, 'text-electric')} />
  if (status === 'locked') return <Lock {...props} className={cn(props.className, 'text-white/25')} />
  return <Circle {...props} className={cn(props.className, 'text-white/30')} />
}
