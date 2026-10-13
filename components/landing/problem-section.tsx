import { Clock3, MessageSquareText, Workflow } from 'lucide-react'
import { Reveal } from '@/components/brand/reveal'

const challenges = [
  { icon: Clock3, title: 'Too Much Repetitive Work', body: 'You spend valuable time on tasks that could be simplified or supported with AI.' },
  { icon: MessageSquareText, title: 'Content Without Direction', body: 'You create posts and promotions, but each piece needs to connect to a clear business goal.' },
  { icon: Workflow, title: 'Tools Without a System', body: 'You have access to AI tools, but need a practical way to connect them to everyday work.' },
]

export function ProblemSection() {
  return (
    <section id="about" className="landing-light scroll-mt-20 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-electric">The opportunity</p>
          <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight font-black md:text-5xl text-balance">You’re Doing Too Much Manually.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Creating content, responding to customers, marketing your products, and managing everyday business tasks can consume more time than they should. AI can help, but without a clear strategy, adding tools can create more confusion.</p>
          <p className="mt-4 max-w-2xl leading-relaxed">AIIB helps you understand where AI fits into your business and how to put it to work.</p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {challenges.map(({ icon: Icon, title, body }, index) => (
            <Reveal key={title} delay={index * 90} className="landing-card rounded-xl border p-6 md:p-7">
              <span className="flex size-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600"><Icon aria-hidden className="size-5" /></span>
              <h3 className="font-display mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
