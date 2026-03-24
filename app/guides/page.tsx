import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export const metadata: Metadata = {
  title: 'Instagram & Digital Life Guides — Practical How-To Articles | Softlyflow',
  description:
    'Practical guides on writing Instagram bios, curating an aesthetic feed, building a personal brand, digital minimalism, morning routines, and intentional living.',
  alternates: { canonical: 'https://softlyflow.com/guides' },
  openGraph: {
    title: 'Instagram & Digital Life Guides',
    description: 'Practical how-to guides for intentional creators.',
    url: 'https://softlyflow.com/guides',
  },
}

const GUIDE_HIGHLIGHTS = [
  { label: 'Write a Bio That Converts', slug: 'how-to-write-instagram-bio-that-converts-2026', desc: 'Step-by-step bio writing guide' },
  { label: 'Curate Your Feed', slug: 'how-to-curate-aesthetic-instagram-feed', desc: 'Without starting over' },
  { label: 'Build a Personal Brand', slug: 'build-personal-brand-instagram-2026', desc: 'The quiet, sustainable way' },
  { label: 'Write Better Captions', slug: 'how-to-write-captions-stop-scroll-formulas', desc: '8 formulas that work' },
  { label: 'Digital Detox', slug: '7-day-digital-detox-reset-plan', desc: '7-day reset plan' },
  { label: 'Digital Minimalism', slug: 'digital-minimalism-habits-change-phone-use', desc: '10 habits that stick' },
  { label: 'Morning Routine', slug: 'aesthetic-morning-routine-gentle-habits', desc: 'Gentle & sustainable' },
  { label: 'Flat Lay Photography', slug: 'aesthetic-flat-lay-photography-guide', desc: 'Shoot like a pro' },
  { label: 'Slow Living', slug: 'slow-living-manifesto-intentional-life', desc: '12 principles to live by' },
  { label: '2026 Intentions', slug: '2026-glow-up-intentions-guide', desc: 'Goals, affirmations & vision' },
]

export default function GuidesPage() {
  const allPosts = getAllPosts()
  const guidePosts = allPosts.filter((p) =>
    ['Guides', 'Digital Life', 'Wellness & Spirit'].includes(p.category ?? '')
  )

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="max-w-2xl mb-14">
        <p className="text-xs font-sans font-light tracking-widest uppercase text-accent mb-4">Guides & How-Tos</p>
        <h1 className="font-serif text-5xl md:text-6xl font-medium text-ink leading-tight tracking-tight mb-6">
          Practical guides<br /><em className="italic font-normal text-accent">for intentional creators.</em>
        </h1>
        <p className="font-sans font-light text-ink-muted text-base leading-relaxed">
          Not just inspiration — actionable advice on Instagram, digital wellness, and building a life that feels as good as it looks.
        </p>
      </div>

      <section className="mb-14">
        <p className="text-xs font-sans font-light tracking-widest uppercase text-ink-muted mb-5">Start here</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {GUIDE_HIGHLIGHTS.map((g) => (
            <Link key={g.slug} href={`/post/${g.slug}`}
              className="group p-4 bg-white border border-stone-200/60 rounded-sm hover:border-accent transition-all card-lift">
              <p className="font-serif text-sm font-medium text-ink group-hover:text-accent transition-colors mb-1">{g.label}</p>
              <p className="text-xs font-sans font-light text-ink-muted leading-snug">{g.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <p className="text-xs font-sans font-light tracking-widest uppercase text-ink-muted mb-6">All guides</p>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {guidePosts.map((post) => (
            <div key={post.slug} className="break-inside-avoid"><PostCard post={post} /></div>
          ))}
        </div>
      </section>
    </div>
  )
}
