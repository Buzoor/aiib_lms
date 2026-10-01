'use client'

import { allLessons, curriculum, getLessonRef, totalLessons, type LessonRef, type Module } from '@/lib/content'
import { readJSON, useStoredJSON, writeJSON } from './browser-storage'

/**
 * PROGRESS PERSISTENCE
 * ---------------------------------------------------------------
 * Progress is stored per trainee in localStorage under
 * `aiib_progress_<CODE>`. Logging out never deletes it.
 * To move to a database later, replace the read/write calls in
 * this file — the rest of the app only uses the exports below.
 */

/** Set to false to let trainees open any module at any time. */
export const LOCK_MODULES_IN_ORDER = true

export interface Progress {
  completed: string[]
  projects: string[]
  lastVisited: string | null
  notes: Record<string, string>
}

const EMPTY_PROGRESS: Progress = { completed: [], projects: [], lastVisited: null, notes: {} }

const progressKey = (code: string) => `aiib_progress_${code}`

function update(code: string, change: (current: Progress) => Progress) {
  const current = readJSON('local', progressKey(code), EMPTY_PROGRESS)
  writeJSON('local', progressKey(code), change(current))
}

const addUnique = (list: string[], value: string) => (list.includes(value) ? list : [...list, value])

export const progressActions = {
  visit: (code: string, key: string) =>
    update(code, (p) => (p.lastVisited === key ? p : { ...p, lastVisited: key })),
  completeLesson: (code: string, key: string) =>
    update(code, (p) => ({ ...p, completed: addUnique(p.completed, key) })),
  completeProject: (code: string, key: string) =>
    update(code, (p) => ({ ...p, projects: addUnique(p.projects, key) })),
  saveNote: (code: string, key: string, note: string) =>
    update(code, (p) => ({ ...p, notes: { ...p.notes, [key]: note } })),
}

export function useProgress(code: string | null | undefined) {
  return useStoredJSON<Progress>('local', code ? progressKey(code) : null, EMPTY_PROGRESS)
}

export type LessonStatus = 'locked' | 'available' | 'in-progress' | 'completed'

export function isModuleUnlocked(progress: Progress, moduleIndex: number) {
  if (!LOCK_MODULES_IN_ORDER || moduleIndex === 0) return true
  const module = curriculum[moduleIndex]
  const previous = curriculum[moduleIndex - 1]
  const previousDone = previous.lessons.every((l) => progress.completed.includes(`${previous.id}/${l.id}`))
  const startedHere = module.lessons.some((l) => {
    const key = `${module.id}/${l.id}`
    return progress.completed.includes(key) || progress.lastVisited === key
  })
  return previousDone || startedHere
}

export function getLessonStatus(progress: Progress, ref: LessonRef): LessonStatus {
  if (progress.completed.includes(ref.key)) return 'completed'
  if (!isModuleUnlocked(progress, ref.moduleIndex)) return 'locked'
  if (progress.lastVisited === ref.key) return 'in-progress'
  return 'available'
}

export function getModuleProgress(progress: Progress, module: Module) {
  const done = module.lessons.filter((l) => progress.completed.includes(`${module.id}/${l.id}`)).length
  return { done, total: module.lessons.length, percent: Math.round((done / module.lessons.length) * 100) }
}

export function getCurrentLesson(progress: Progress): LessonRef | undefined {
  const visited = getLessonRef(progress.lastVisited)
  if (visited && !progress.completed.includes(visited.key)) return visited
  const afterVisited = visited ? allLessons.slice(visited.index + 1) : allLessons
  return (
    afterVisited.find((ref) => !progress.completed.includes(ref.key)) ??
    allLessons.find((ref) => !progress.completed.includes(ref.key))
  )
}

export function getSummary(progress: Progress) {
  const completedCount = allLessons.filter((ref) => progress.completed.includes(ref.key)).length
  const modulesCompleted = curriculum.filter((m) => getModuleProgress(progress, m).done === m.lessons.length).length
  return {
    completedCount,
    totalLessons,
    percent: Math.round((completedCount / totalLessons) * 100),
    modulesCompleted,
    totalModules: curriculum.length,
    current: getCurrentLesson(progress),
  }
}
