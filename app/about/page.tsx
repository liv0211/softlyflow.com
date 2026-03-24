import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Softlyflow',
  description:
    'Softlyflow is a curated space for aesthetic Instagram bio ideas, viral captions, and mindful digital-life inspiration.',
}

export default function AboutPage() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-20">
      <span className="text-xs font-sans font-light tracking-widest uppercase text-accent mb-4 block">
        About
      </span>
      <h1 className="font-serif text-5xl font-medium text-ink leading-tight tracking-tight mb-8">
        A quiet corner<br />
        <em className="font-normal italic">of the internet.</em>
      </h1>

      <div className="space-y-5 font-sans font-light text-ink-muted text-base leading-relaxed">
        <p>
          Softlyflow was born from a simple belief: the words we put into the world matter. Whether it's an Instagram bio seen by thousands or a caption for a single sunset photo, language shapes how we're perceived — and how we perceive ourselves.
        </p>
        <p>
          We curate aesthetic bio ideas, craft scroll-stopping captions, and share gentle digital-life wisdom for creators, dreamers, and anyone who wants their online presence to feel more <em>intentional</em>.
        </p>
        <p>
          Everything here is written slowly, chosen carefully, and offered freely.
        </p>
      </div>

      <div className="mt-12 flex items-center gap-4">
        <span className="block w-16 h-px bg-stone-300" />
        <span className="text-accent text-lg">✦</span>
        <span className="block w-16 h-px bg-stone-300" />
      </div>

      <p className="mt-10 font-serif italic text-xl text-ink-muted leading-relaxed">
        "The right word is the difference between lightning and a lightning bug."
        <span className="block text-sm font-sans font-light not-italic text-stone-400 mt-2">— Mark Twain</span>
      </p>
    </section>
  )
}
