'use server'

import { findTraineeByCode } from '@/lib/content/trainees'
import type { Trainee } from '@/lib/content/types'

export type AccessResult = { ok: true; trainee: Trainee } | { ok: false; error: string }

export async function verifyAccessCode(code: string): Promise<AccessResult> {
  if (typeof code !== 'string' || code.length > 40) {
    return { ok: false, error: "That access code isn't recognised. Check your code and try again." }
  }
  const trainee = await findTraineeByCode(code)
  if (!trainee) {
    return { ok: false, error: "That access code isn't recognised. Check your code and try again." }
  }
  return { ok: true, trainee }
}
