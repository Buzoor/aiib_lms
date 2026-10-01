import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { AccessForm } from '@/components/access/access-form'
import { Logo } from '@/components/brand/logo'
import { TriadInline } from '@/components/brand/growth-triad'

export const metadata: Metadata = {
  title: 'Enter Your Access Code',
  description: 'Enter your unique AIIB access code to continue your training.',
}

export default function AccessPage() {
  return (
    <main className="grid min-h-dvh lg:grid-cols-[1.15fr_1fr]">
      <aside className="relative hidden overflow-hidden border-r border-white/[0.06] lg:block">
        <Image
          src="/images/aiib-banner.png"
          alt=""
          fill
          priority
          sizes="55vw"
          className="object-cover object-[30%_center] opacity-80"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-12">
          <p className="font-display max-w-md text-3xl leading-tight font-black uppercase">
            Strategy is the foundation. AI is the leverage.
          </p>
          <TriadInline className="mt-5" />
        </div>
      </aside>

      <section className="relative isolate flex flex-col px-6 py-8 md:px-12">
        <div aria-hidden className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <div className="flex items-center justify-between">
          <Logo />
          <Link href="/" className="eyebrow flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft aria-hidden className="size-3.5" />
            Back
          </Link>
        </div>

        <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-16">
          <p className="eyebrow animate-rise text-electric">Trainee access</p>
          <h1 className="font-display mt-4 animate-rise text-4xl leading-[0.95] font-black uppercase md:text-5xl [animation-delay:80ms]">
            Enter your
            <br />
            access code
          </h1>
          <p className="mt-5 animate-rise leading-relaxed text-muted-foreground [animation-delay:160ms]">
            Use the unique code provided by AIIB to continue your training. Your progress is saved to your code.
          </p>
          <div className="mt-10 animate-rise [animation-delay:240ms]">
            <AccessForm />
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            {"Don't have a code? Contact the AIIB team to join the next cohort."}
          </p>
        </div>
      </section>
    </main>
  )
}
