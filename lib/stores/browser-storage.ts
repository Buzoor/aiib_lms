'use client'

import { useSyncExternalStore } from 'react'

type Area = 'local' | 'session'

const listeners = new Set<() => void>()
const cache = new Map<string, { raw: string | null; value: unknown }>()

function storage(area: Area) {
  return area === 'local' ? window.localStorage : window.sessionStorage
}

function emit() {
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  window.addEventListener('storage', listener)
  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', listener)
  }
}

export function readJSON<T>(area: Area, key: string, fallback: T): T {
  const raw = storage(area).getItem(key)
  const cacheKey = `${area}:${key}`
  const cached = cache.get(cacheKey)
  if (cached && cached.raw === raw) return cached.value as T
  let value: T = fallback
  if (raw) {
    try {
      value = { ...fallback, ...JSON.parse(raw) }
    } catch {
      value = fallback
    }
  }
  cache.set(cacheKey, { raw, value })
  return value
}

export function writeJSON(area: Area, key: string, value: unknown) {
  storage(area).setItem(key, JSON.stringify(value))
  emit()
}

export function removeKey(area: Area, key: string) {
  storage(area).removeItem(key)
  emit()
}

/** Returns `undefined` during server render / before hydration. */
export function useStoredJSON<T>(area: Area, key: string | null, fallback: T): T | undefined {
  return useSyncExternalStore(
    subscribe,
    () => (key ? readJSON(area, key, fallback) : fallback),
    () => undefined,
  )
}
