import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { LessonView } from '@/components/lms/lesson-view'
import { allLessons, getLessonRef, lessonKey } from '@/lib/content'

type Params = { moduleId: string; lessonId: string }

export function generateStaticParams(): Params[] {
  return allLessons.map((ref) => ({ moduleId: ref.module.id, lessonId: ref.lesson.id }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { moduleId, lessonId } = await params
  const ref = getLessonRef(lessonKey(moduleId, lessonId))
  return { title: ref ? ref.lesson.title : 'Lesson' }
}

export default async function LessonPage({ params }: { params: Promise<Params> }) {
  const { moduleId, lessonId } = await params
  const key = lessonKey(moduleId, lessonId)
  if (!getLessonRef(key)) notFound()
  return <LessonView key={key} lessonKey={key} />
}
