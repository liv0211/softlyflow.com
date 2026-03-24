import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { getCoverConfig } from '@/lib/covers'
import { Suspense } from 'react'
import PostGrid from '@/components/PostGrid'
import AdSlot from '@/components/AdSlot'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Softlyflow — Aesthetic Bio Ideas, Captions & Digital Life Inspo',
  description:
    'Your go-to source for aesthetic Instagram bio ideas, viral captions, and mindful digital-life tips. Curated weekly for creators in 2026.',
  openGraph: {
    title: 'Softlyflow — Aesthetic Bio Ideas, Captions & Digital Life Inspo',
    description: 'Curated aesthetic bios, captions, and digital life wisdom for intentional creators.',
    url: 'https://softlyflow.com',
    images: [{ url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80&auto=format&fit=crop', width: 1200, height: 630 }],
  },
}

const STATS = [
  { value: '32+', label: 'Curated Posts' },
  { value: '500+', label: 'Bio Ideas' },
  { value: '15', label: 'Categories' },
]

export default function HomePage() {
  const posts = getAllPosts()
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-cream">
        <div className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #B8956A 0%, transparent 70%)' }} />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full opacity-15 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #B8956A 0%, transparent 70%)' }} />

        <div className="relative max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
          <p className="fade-up fade-up-delay-1 text-xs font-sans font-light tracking-widest uppercase text-accent mb-5">
            Est. 2026 · Curated with intention
          </p>
          <h1 className="fade-up fade-up-delay-2 font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-ink leading-tight tracking-tight mb-6">
            Words that quietly<br />
            <em className="italic font-normal text-accent">define you.</em>
          </h1>
          <p className="fade-up fade-up-delay-3 max-w-lg mx-auto font-sans font-light text-ink-muted text-base leading-relaxed mb-10">
            Aesthetic bio ideas, scroll-stopping captions, and gentle digital-life wisdom — for creators who believe in the power of a well-chosen word.
          </p>

          {/* Stats row */}
          <div className="fade-up fade-up-delay-3 flex items-center justify-center gap-8 md:gap-16 mb-10">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-serif text-2xl font-medium text-ink">{s.value}</p>
                <p className="text-xs font-sans font-light tracking-widest uppercase text-ink-muted mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="block w-16 h-px bg-stone-300" />
            <span className="text-accent text-lg">✦</span>
            <span className="block w-16 h-px bg-stone-300" />
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6">

        {/* ── Featured Post ── */}
        {featured && (
          <section className="mb-12 mt-10">
            <p className="text-xs font-sans font-light tracking-widest uppercase text-ink-muted mb-4">✦ Featured</p>
            <Link href={`/post/${featured.slug}`} className="block group">
              <article className="card-lift rounded-sm overflow-hidden bg-white border border-stone-200/50">
                <div className="grid md:grid-cols-2 min-h-[300px]">
                  <div className="relative overflow-hidden min-h-[220px] md:min-h-0">
                    <div className="absolute inset-0" style={{ background: getCoverConfig(featured.category).gradient }} />
                    <img
                      src={featured.coverImage ?? 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&q=75&auto=format&fit=crop'}
                      alt={featured.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 pointer-events-none" />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    {featured.category && (
                      <span className="text-xs font-sans font-light tracking-widest uppercase text-accent mb-3 block">{featured.category}</span>
                    )}
                    <h2 className="font-serif text-2xl md:text-3xl font-medium text-ink leading-tight group-hover:text-accent transition-colors mb-4">
                      {featured.title}
                    </h2>
                    {featured.excerpt && (
                      <p className="font-sans font-light text-ink-muted text-sm leading-relaxed mb-6 line-clamp-3">{featured.excerpt}</p>
                    )}
                    <div className="flex items-center gap-4 flex-wrap">
                      <time className="text-xs font-sans font-light text-stone-400 tracking-wide">
                        {new Date(featured.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </time>
                      {featured.readingTime && (
                        <span className="text-xs font-sans font-light text-stone-400">{featured.readingTime} min read</span>
                      )}
                      <span className="text-xs font-sans font-light text-accent tracking-wide group-hover:underline ml-auto">Read →</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </section>
        )}

        <AdSlot id="ad-home-top" label="Advertisement" />
      </div>

      <EmailCapture />

      <div className="max-w-5xl mx-auto px-6">

        {/* ── Search + Category + Grid ── */}
        <div className="mt-10">
          <div className="flex items-baseline justify-between mb-2">
            <p className="text-xs font-sans font-light tracking-widest uppercase text-ink-muted">All Posts</p>
            <p className="text-xs font-sans font-light text-stone-400">{rest.length} articles</p>
          </div>
          <Suspense fallback={<div className="py-10 text-center text-sm text-stone-400">Loading...</div>}>
          <PostGrid posts={rest} />
          </Suspense>
        </div>

      </div>
    </>
  )
}
