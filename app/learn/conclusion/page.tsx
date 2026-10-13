import type { Metadata } from 'next'
import { CourseSectionView } from '@/components/lms/course-section-view'

export const metadata: Metadata = { title: 'Conclusion' }

export default function ConclusionPage() {
  return <CourseSectionView section="conclusion" />
}
