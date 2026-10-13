import { CirclePlay } from 'lucide-react'

function getYouTubeId(url: string) {
  if (!url) return null
  try {
    const parsed = new URL(url)
    if (parsed.hostname.includes('youtu.be')) return parsed.pathname.slice(1) || null
    if (parsed.searchParams.get('v')) return parsed.searchParams.get('v')
    const match = parsed.pathname.match(/\/(embed|shorts|live)\/([^/?]+)/)
    return match?.[2] ?? null
  } catch {
    return null
  }
}

function getYouTubeEmbedUrl(url: string, id: string) {
  try {
    const parsed = new URL(url)
    const host = parsed.hostname === 'youtube-nocookie.com' || parsed.hostname.endsWith('.youtube-nocookie.com')
      ? 'https://www.youtube-nocookie.com'
      : 'https://www.youtube.com'
    return `${host}/embed/${id}${parsed.search}`
  } catch {
    return `https://www.youtube-nocookie.com/embed/${id}`
  }
}

export function LessonVideo({ url, title, placeholderMessage }: { url: string; title: string; placeholderMessage?: string }) {
  const id = getYouTubeId(url)

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-slate-700 bg-black shadow-[0_30px_80px_-30px_oklch(0.55_0.22_264/0.55)]">
      {id ? (
        <iframe
          src={getYouTubeEmbedUrl(url, id)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="eager"
          className="absolute inset-0 size-full"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
          <div aria-hidden className="absolute inset-0 bg-grid opacity-70 [mask-image:radial-gradient(ellipse,black,transparent_75%)]" />
          <div aria-hidden className="absolute top-1/2 left-1/2 size-72 -translate-1/2 rounded-full bg-primary/25 blur-3xl" />
          <div className="relative flex size-16 items-center justify-center rounded-full border border-slate-700 bg-slate-800/70">
            <CirclePlay aria-hidden className="size-7 text-electric" />
          </div>
          <div className="relative">
            <p className="font-display text-lg font-black uppercase">Video coming soon</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {placeholderMessage ?? 'Your training video for this lesson will appear here. Start with the material below.'}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
