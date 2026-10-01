import type { Trainee } from './types'

/**
 * AIIB TRAINEE ACCESS CODES
 * ---------------------------------------------------------------
 * Add one line per trainee. The code is their only credential.
 * This file is only read on the server, so codes are never shipped
 * to the browser. Replace with a database lookup when needed —
 * only `findTraineeByCode` below has to change.
 */
const trainees: Trainee[] = [
  { code: 'AIIB-C1-001', name: 'Amara Okafor', cohort: 'Cohort 1' },
  { code: 'AIIB-C1-002', name: 'Daniel Mensah', cohort: 'Cohort 1' },
  { code: 'AIIB-C1-003', name: 'Grace Adeyemi', cohort: 'Cohort 1' },
  { code: 'AIIB-C1-004', name: 'Kwame Boateng', cohort: 'Cohort 1' },
  { code: 'AIIB-C1-005', name: 'Zainab Bello', cohort: 'Cohort 1' },
]

export function normaliseCode(raw: string) {
  return raw.trim().toUpperCase().replace(/\s+/g, '')
}

export async function findTraineeByCode(raw: string): Promise<Trainee | null> {
  const code = normaliseCode(raw)
  return trainees.find((trainee) => trainee.code === code) ?? null
}
