'use client'

import type { Trainee } from '@/lib/content/types'
import { removeKey, useStoredJSON, writeJSON } from './browser-storage'

/**
 * The active session lives in sessionStorage, so closing the browser
 * ends it and the trainee re-enters their code next time.
 */
const SESSION_KEY = 'aiib_session'

type SessionState = { trainee: Trainee | null }
const EMPTY: SessionState = { trainee: null }

export function startSession(trainee: Trainee) {
  writeJSON('session', SESSION_KEY, { trainee })
}

export function endSession() {
  removeKey('session', SESSION_KEY)
}

/** `undefined` while hydrating, `null` when signed out. */
export function useTrainee(): Trainee | null | undefined {
  const state = useStoredJSON<SessionState>('session', SESSION_KEY, EMPTY)
  return state === undefined ? undefined : state.trainee
}
