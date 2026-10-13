import { Reveal } from '@/components/brand/reveal'

const audiences = [
  ['Business Owners', 'Use AI to support marketing, communication, content creation, and everyday business tasks.'],
  ['Entrepreneurs and Founders', 'Turn ideas into business assets and improve the workflows you already use.'],
  ['Creators and Freelancers', 'Create content, develop stronger messaging, and support your creative process.'],
  ['Professionals and Small Teams', 'Find practical ways to improve productivity and simplify repetitive work.'],
]

export function AudienceFaq() {
  return (
    <>
      <section className="landing-light bg-[#eaf1f9] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-3xl">
            <p className="eyebrow text-electric">Who it’s for</p>
            <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight font-black md:text-5xl text-balance">Built for People Who Want to Put AI to Work.</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map(([title, body], i) => (
              <Reveal key={title} delay={i * 70} className="landing-card rounded-xl border p-6">
                <h3 className="font-display text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">You don’t need to be an AI expert or a traditional web developer to begin. The programme focuses on understanding the process and learning to use the tools with direction.</p>
        </div>
      </section>
      <section id="faq" className="landing-dark scroll-mt-20 bg-[linear-gradient(135deg,#080b12_0%,#111827_58%,#172554_100%)] px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="eyebrow text-electric">Frequently asked questions</p>
            <h2 className="font-display mt-4 text-4xl leading-tight font-black md:text-5xl text-balance">A clear place to start.</h2>
          </Reveal>
          <div className="space-y-3">
            <details className="landing-card rounded-xl border p-5"><summary className="cursor-pointer font-semibold">Do I need experience with AI?</summary><p className="mt-3 leading-relaxed text-muted-foreground">No. The lessons start with AI fundamentals and build toward practical business applications.</p></details>
            <details className="landing-card rounded-xl border p-5"><summary className="cursor-pointer font-semibold">What will I learn?</summary><p className="mt-3 leading-relaxed text-muted-foreground">You’ll explore AI for business, content creation, copywriting and DM sales, and AI-assisted website development.</p></details>
            <details className="landing-card rounded-xl border p-5"><summary className="cursor-pointer font-semibold">How do I access the training?</summary><p className="mt-3 leading-relaxed text-muted-foreground">Use your AIIB access code to enter the learning space. Your lessons and progress are available from the dashboard.</p></details>
          </div>
        </div>
      </section>
    </>
  )
}
