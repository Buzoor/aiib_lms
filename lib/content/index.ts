import { curriculum } from './curriculum'
import type { Lesson, Module, TriadPillar } from './types'

export type { Lesson, Module, TriadPillar, Trainee } from './types'
export { curriculum }

export interface LessonRef {
  key: string
  index: number
  module: Module
  moduleIndex: number
  lesson: Lesson
}

export function lessonKey(moduleId: string, lessonId: string) {
  return `${moduleId}/${lessonId}`
}

export function lessonHref(ref: Pick<LessonRef, 'module' | 'lesson'>) {
  return `/learn/${ref.module.id}/${ref.lesson.id}`
}

export const allLessons: LessonRef[] = curriculum.flatMap((module, moduleIndex) =>
  module.lessons.map((lesson) => ({ module, moduleIndex, lesson, key: lessonKey(module.id, lesson.id), index: 0 })),
).map((ref, index) => ({ ...ref, index }))

export const totalLessons = allLessons.length

export function getLessonRef(key: string | null | undefined) {
  return allLessons.find((ref) => ref.key === key)
}

export function getAdjacentLessons(key: string) {
  const ref = getLessonRef(key)
  if (!ref) return { previous: undefined, next: undefined }
  return { previous: allLessons[ref.index - 1], next: allLessons[ref.index + 1] }
}

export const pillarLabels: Record<TriadPillar, string> = {
  strategy: 'Strategy',
  human: 'Human Touch',
  ai: 'AI',
}
