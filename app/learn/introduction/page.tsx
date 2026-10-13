import type { Metadata } from 'next'
import { CourseSectionView } from '@/components/lms/course-section-view'

export const metadata: Metadata = { title: 'Introduction' }

export default function IntroductionPage() {
  return <CourseSectionView section="introduction" />
}
