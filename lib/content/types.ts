export type TriadPillar = 'strategy' | 'human' | 'ai'

export interface Principle {
  title: string
  body: string
}

export interface LessonMaterial {
  intro: string
  principles: Principle[]
  businessExample: {
    title: string
    scenario: string
  }
  useCases: string[]
  takeaway: string
}

export interface LessonProject {
  brief: string
  tasks: string[]
  expectedOutput: string
  notesPrompt?: string
}

export interface Lesson {
  /** URL slug, e.g. "lesson-01" */
  id: string
  number: string
  title: string
  description: string
  /** Paste the private/unlisted YouTube link here. Leave empty until the video is ready. */
  videoUrl: string
  /** Which pillar of the Growth Triad this lesson leans on most. */
  focus: TriadPillar
  material: LessonMaterial
  project: LessonProject
}

export interface Module {
  /** URL slug, e.g. "module-01" */
  id: string
  number: string
  title: string
  summary: string
  lessons: Lesson[]
}

export interface Trainee {
  code: string
  name: string
  cohort: string
}
