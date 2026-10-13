'use client'

import { createContext, use } from 'react'
import type { Trainee } from '@/lib/content/types'

interface LearnerContextValue {
  trainee: Trainee
}

export const LearnerContext = createContext<LearnerContextValue | null>(null)

export function useLearner() {
  const value = use(LearnerContext)
  if (!value) throw new Error('useLearner must be used inside the learning space')
  return value
}
