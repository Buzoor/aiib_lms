'use client'

import { createContext, use } from 'react'
import type { Trainee } from '@/lib/content/types'
import type { Progress } from '@/lib/stores/progress'

interface LearnerContextValue {
  trainee: Trainee
  progress: Progress
}

export const LearnerContext = createContext<LearnerContextValue | null>(null)

export function useLearner() {
  const value = use(LearnerContext)
  if (!value) throw new Error('useLearner must be used inside the learning space')
  return value
}
