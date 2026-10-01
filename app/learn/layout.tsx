import type { Metadata } from 'next'
import { LmsShell } from '@/components/lms/lms-shell'

export const metadata: Metadata = {
  title: 'Learning Space',
  robots: { index: false, follow: false },
}

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return <LmsShell>{children}</LmsShell>
}
