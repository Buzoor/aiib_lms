import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cta, ctaArrow } from '@/components/brand/cta'
import { curriculum, lessonHref } from '@/lib/content'
import { courseVideoUrls } from '@/lib/content/course-videos'
import { LessonVideo } from './lesson-video'

export function CourseSectionView({ section }: { section: 'introduction' | 'conclusion' }) {
  const isIntroduction = section === 'introduction'
  const title = isIntroduction ? 'Introduction' : 'Conclusion'
  const videoUrl = courseVideoUrls[section]
  const firstModule = curriculum[0]
  const firstLesson = firstModule.lessons[0]
  const lastModule = curriculum[curriculum.length - 1]
  const lastLesson = lastModule.lessons[lastModule.lessons.length - 1]

  return (
    <article className="mx-auto max-w-5xl px-5 py-8 md:px-10 md:py-12">
      <p className="eyebrow text-electric">AI in Business training</p>
      <header className="mt-4">
        <h1 className="font-display text-4xl leading-tight font-black uppercase md:text-5xl">{title}</h1>
        <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
          {isIntroduction
            ? 'Welcome to the AIIB training. Watch the introduction, then begin Module 1.'
            : 'You have reached the end of the AIIB training. Thank you for learning with us.'}
        </p>
      </header>

      <div className="mt-8">
        <LessonVideo
          url={videoUrl}
          title={`AIIB training ${title.toLowerCase()} video`}
          placeholderMessage={`The ${title.toLowerCase()} video will be added here.`}
        />
      </div>

      <nav aria-label="Course navigation" className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {isIntroduction ? (
          <span />
        ) : (
          <Link
            href={lessonHref({ module: lastModule, lesson: lastLesson })}
            className="group flex min-h-14 items-center gap-3 rounded-lg border border-slate-700 px-4 py-3 transition-colors hover:border-electric/50 hover:bg-slate-800/70"
          >
            <ArrowLeft aria-hidden className="size-4 text-electric" />
            <span>
              <span className="eyebrow block text-[0.6rem] text-muted-foreground">Previous lesson</span>
              <span className="text-sm font-semibold">{lastLesson.title}</span>
            </span>
          </Link>
        )}

        {isIntroduction ? (
          <Link href={lessonHref({ module: firstModule, lesson: firstLesson })} className={cta({ size: 'lg' })}>
            Start Module 1
            <ArrowRight aria-hidden className={ctaArrow} />
          </Link>
        ) : (
          <Link href="/learn" className={cta({ variant: 'secondary', className: 'sm:ml-auto' })}>
            Back to dashboard
          </Link>
        )}
      </nav>
    </article>
  )
}
