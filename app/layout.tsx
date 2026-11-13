import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'AI in Business (AIIB) — Your Business, Powered by AI',
    template: '%s · AIIB',
  },
  description:
    'Practical AI training for business owners and entrepreneurs. Learn to create content, improve marketing and sales, and build digital experiences with AI. Strategy + Human Touch + AI.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0b0c10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
