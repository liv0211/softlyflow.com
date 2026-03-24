import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Viral Caption Generator — Softlyflow',
  description:
    'Generate aesthetic, viral Instagram captions instantly. Powered by AI, curated by humans.',
}

export default function CaptionGenPage() {
  return (
    <section className="max-w-2xl mx-auto px-6 py-20 text-center">
      <span className="text-xs font-sans font-light tracking-widest uppercase text-accent mb-4 block">
        Coming Soon
      </span>
      <h1 className="font-serif text-5xl font-medium text-ink leading-tight tracking-tight mb-6">
        Viral Caption<br />
        <em className="font-normal italic">Generator.</em>
      </h1>
      <p className="font-sans font-light text-ink-muted text-base leading-relaxed max-w-md mx-auto mb-10">
        Type a vibe, a mood, or a scene. Get 10 aesthetic captions that stop the scroll — instantly.
      </p>
      <div className="inline-flex items-center gap-2 border border-stone-300 rounded-sm px-6 py-3 text-sm font-sans font-light tracking-widest uppercase text-ink-muted">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        Launching soon
      </div>
    </section>
  )
}
