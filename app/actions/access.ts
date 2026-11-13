'use server'

import type { Trainee } from '@/lib/content/types'

/** Server-only configuration for the Apps Script lookup endpoint. */
const ACCESS_LOOKUP_URL =
  'https://script.google.com/macros/s/AKfycbynoiwLQhrHsrVv22HnQ_5MdeqeDnt8qLlR3_73m8ZxB4ewJBsPZb4ybBbTJiDCri1J/exec'

type JsonRecord = Record<string, unknown>

export type AccessResult = { ok: true; trainee: Trainee } | { ok: false; error: string }

const invalidCodeMessage = 'That access code is invalid or inactive. Check the code and try again.'
const lookupErrorMessage = 'We could not verify your access code right now. Please try again shortly.'

function isRecord(value: unknown): value is JsonRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function getLookupRecords(payload: JsonRecord): JsonRecord[] {
  const records: JsonRecord[] = [payload]
  for (const key of ['trainee', 'data', 'result']) {
    const value = payload[key]
    if (!isRecord(value)) continue
    records.push(value)
    for (const nestedKey of ['trainee', 'data', 'result']) {
      if (isRecord(value[nestedKey])) records.push(value[nestedKey] as JsonRecord)
    }
  }
  return records
}

function activeState(record: JsonRecord): 'active' | 'inactive' | undefined {
  for (const key of ['active', 'isActive', 'is_active']) {
    const value = record[key]
    if (value === true || value === 1) return 'active'
    if (value === false || value === 0) return 'inactive'
    if (typeof value === 'string') {
      const normalisedValue = value.trim().toLowerCase()
      if (['true', 'active', 'enabled', 'yes', '1'].includes(normalisedValue)) return 'active'
      if (['false', 'inactive', 'disabled', 'suspended', 'no', '0'].includes(normalisedValue)) return 'inactive'
    }
  }
  const status = [record.status, record.state]
    .find((value) => typeof value === 'string')
  if (typeof status !== 'string') return undefined
  const normalised = status.trim().toLowerCase()
  if (['active', 'enabled', 'yes'].includes(normalised)) return 'active'
  if (['inactive', 'disabled', 'invalid', 'suspended', 'not found', 'no'].includes(normalised)) return 'inactive'
  return undefined
}

function stringField(records: JsonRecord[], keys: string[]): string | undefined {
  for (const record of records) {
    for (const key of keys) {
      const value = record[key]
      if (typeof value === 'string' && value.trim()) return value.trim()
    }
  }
  return undefined
}

export async function verifyAccessCode(rawCode: string, rawEmail: string): Promise<AccessResult> {
  if (typeof rawCode !== 'string' || rawCode.trim().length === 0 || rawCode.length > 40) {
    return { ok: false, error: invalidCodeMessage }
  }
  if (typeof rawEmail !== 'string' || rawEmail.trim().length === 0 || rawEmail.length > 254) {
    return { ok: false, error: invalidCodeMessage }
  }

  const code = rawCode.trim().toUpperCase().replace(/\s+/g, '')
  const email = rawEmail.trim().toLowerCase()
  const url = new URL(ACCESS_LOOKUP_URL)
  url.searchParams.set('action', 'lookup')
  url.searchParams.set('code', code)
  url.searchParams.set('email', email)

  try {
    const response = await fetch(url, {
      method: 'GET',
      cache: 'no-store',
      signal: AbortSignal.timeout(12_000),
      headers: { Accept: 'application/json' },
    })
    if (!response.ok) return { ok: false, error: lookupErrorMessage }

    const payload: unknown = await response.json()
    if (!isRecord(payload)) return { ok: false, error: lookupErrorMessage }

    const records = getLookupRecords(payload)
    const states = records.map(activeState).filter((state) => state !== undefined)
    if (states.includes('inactive')) {
      return { ok: false, error: invalidCodeMessage }
    }
    const confirmedActive = states.includes('active') || payload.ok === true
    if (!confirmedActive) {
      const rejection = stringField(records, ['message', 'error'])?.toLowerCase() ?? ''
      if (payload.ok === false && /access code|inactive|not found|invalid/.test(rejection)) {
        return { ok: false, error: invalidCodeMessage }
      }
      return { ok: false, error: lookupErrorMessage }
    }

    const firstName = stringField(records, ['firstName', 'first_name', 'firstname', 'givenName'])
      ?? stringField(records, ['name'])?.split(/\s+/)[0]
    if (!firstName) return { ok: false, error: lookupErrorMessage }

    const cohort = stringField(records, ['cohort', 'cohortName', 'cohort_name'])
    return {
      ok: true,
      trainee: { code, firstName, ...(cohort ? { cohort } : {}) },
    }
  } catch {
    return { ok: false, error: lookupErrorMessage }
  }
}
