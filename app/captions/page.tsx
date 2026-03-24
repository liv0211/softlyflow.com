import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export const metadata: Metadata = {
  title: 'Aesthetic Captions for Instagram — Every Mood & Season | Softlyflow',
  description:
    'The complete caption library for Instagram — golden hour, travel, self-love, relationships, mental health, fitness, autumn, and more. All free to copy.',
  alternates: { canonical: 'https://softlyflow.com/captions' },
  openGraph: {
    title: 'Aesthetic Captions for Instagram — Every Mood & Season',
    description: 'The complete caption library. Every mood, every season. Free to copy.',
    url: 'https://softlyflow.com/captions',
  },
}

const CAPTION_CATEGORIES = [
  { label: 'Every Mood', slug: '80-aesthetic-captions-every-mood-2026', desc: 'Happy, sad, calm, confident' },
  { label: 'Self-Love', slug: 'self-love-captions-instagram', desc: 'Glow-up & becoming' },
  { label: 'Travel', slug: 'travel-captions-instagram-aesthetic', desc: 'Solo trips & golden hours' },
  { label: 'Relationships', slug: 'relationship-captions-instagram', desc: 'Love, dating & honest feelings' },
  { label: 'Mental Health', slug: 'mental-health-captions-instagram', desc: 'Healing & real talk' },
  { label: 'Fitness', slug: 'gym-fitness-captions-instagram', desc: 'Gym era, honest & motivational' },
  { label: 'Books', slug: 'bookstagram-booktok-captions', desc: 'For readers who feel everything' },
  { label: 'Coffee & Cafés', slug: 'coffee-shop-cafe-captions', desc: 'Remote work & latte lovers' },
  { label: 'Autumn', slug: 'autumn-fall-captions-bios', desc: 'Cosy season vibes' },
  { label: 'Spiritual', slug: 'manifestation-astrology-captions', desc: 'Moon, manifestation & astrology' },
]

const FAQ = [
  { q: 'How long should an Instagram caption be?', a: 'Instagram shows the first 125 characters before the "more" cut-off on mobile. Your first line should be strong enough to make someone tap "more". After that, captions up to 300 words are fine — just make sure every sentence earns its place.' },
  { q: 'Should I use hashtags in my captions?', a: 'In 2026, Instagram recommends 3 to 5 highly relevant hashtags rather than 30 generic ones. Put them at the end of your caption or in the first comment. The algorithm now focuses on keyword matching over hashtag volume.' },
  { q: 'What makes a caption stop the scroll?', a: 'An unexpected first line. Most captions describe the photo — the best ones add something the photo cannot show: a thought, a feeling, a piece of context. The hook in the first 8 words is everything.' },
  { q: 'Can I copy and use these captions?', a: 'Yes, all captions on Softlyflow are free to use and adapt. They are written as starting points — the best version is always the one you personalise with your own voice and specific detail.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function CaptionsPage() {
  const allPosts = getAllPosts()
  const captionPosts = allPosts.filter((p) =>
    ['Captions', 'Mental Health', 'Fitness', 'Relationships', 'Lifestyle', 'Books & Reading', 'Seasonal', 'Wellness & Spirit'].includes(p.category ?? '')
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-sans font-light tracking-widest uppercase text-accent mb-4">Caption Library</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-ink leading-tight tracking-tight mb-6">
            Captions for<br /><em className="italic font-normal text-accent">every moment.</em>
          </h1>
          <p className="font-sans font-light text-ink-muted text-base leading-relaxed">
            The right caption turns a good photo into a memorable post. Here is the complete Softlyflow caption library — sorted by mood, occasion, and season.
          </p>
        </div>

        <section className="mb-14">
          <p className="text-xs font-sans font-light tracking-widest uppercase text-ink-muted mb-5">Browse by mood</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {CAPTION_CATEGORIES.map((cat) => (
              <Link key={cat.slug} href={`/post/${cat.slug}`}
                className="group p-4 bg-white border border-stone-200/60 rounded-sm hover:border-accent transition-all card-lift">
                <p className="font-serif text-sm font-medium text-ink group-hover:text-accent transition-colors mb-1">{cat.label}</p>
                <p className="text-xs font-sans font-light text-ink-muted leading-snug">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <p className="text-xs font-sans font-light tracking-widest uppercase text-ink-muted mb-6">All caption articles</p>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {captionPosts.map((post) => (
              <div key={post.slug} className="break-inside-avoid"><PostCard post={post} /></div>
            ))}
          </div>
        </section>

        <section className="max-w-2xl">
          <p className="text-xs font-sans font-light tracking-widest uppercase text-ink-muted mb-6">Caption questions answered</p>
          <div className="space-y-6">
            {FAQ.map((item) => (
              <div key={item.q} className="pb-6 border-b border-stone-200/60 last:border-0">
                <h2 className="font-serif text-lg font-medium text-ink mb-2">{item.q}</h2>
                <p className="font-sans font-light text-ink-muted text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
