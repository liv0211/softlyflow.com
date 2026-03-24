import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import PostCard from '@/components/PostCard'

export const metadata: Metadata = {
  title: 'Instagram Bio Ideas — Every Aesthetic, Every Vibe | Softlyflow',
  description:
    'The complete collection of Instagram bio ideas for 2026. Minimalist, dark academia, soft life, cottagecore, funny, creative, TikTok, LinkedIn and more. Free to copy.',
  alternates: { canonical: 'https://softlyflow.com/bios' },
  openGraph: {
    title: 'Instagram Bio Ideas — Every Aesthetic, Every Vibe',
    description: 'The complete collection of Instagram bio ideas for 2026. Free to copy.',
    url: 'https://softlyflow.com/bios',
  },
}

const BIO_CATEGORIES = [
  { label: 'Minimalist', slug: 'minimalist-instagram-bios', desc: 'Less words, more impact' },
  { label: 'Dark Academia', slug: 'dark-academia-instagram-bios-captions', desc: 'Books, candles & beautiful sentences' },
  { label: 'Soft Life', slug: 'soft-life-instagram-bios-captions', desc: 'Choosing peace every day' },
  { label: 'Cottagecore', slug: 'cottagecore-instagram-bios-captions', desc: 'Wildflowers & slow living' },
  { label: 'Funny & Witty', slug: 'funny-witty-instagram-bios', desc: 'Self-aware & actually good' },
  { label: 'That Girl', slug: 'that-girl-era-instagram-bios', desc: 'Healthy, ambitious & unbothered' },
  { label: 'For Creatives', slug: 'instagram-bio-ideas-for-creatives', desc: 'Writers, artists & makers' },
  { label: 'TikTok', slug: 'tiktok-bio-ideas-2026', desc: '80 characters, maximum impact' },
  { label: 'Twitter / X', slug: 'twitter-x-bio-ideas-2026', desc: '160 characters that convert' },
  { label: 'LinkedIn', slug: 'linkedin-bio-ideas-professional', desc: 'Sounds human, not corporate' },
]

const FAQ = [
  { q: 'How long should an Instagram bio be?', a: 'Instagram allows up to 150 characters. The best bios use far fewer — typically 1 to 3 short lines. Brevity signals confidence. A bio that over-explains suggests insecurity.' },
  { q: 'Should I put my job title in my Instagram bio?', a: 'Only if your job is central to your content. For most creators and personal accounts, how you make people feel matters more than what you do professionally. Lead with your vibe, not your CV.' },
  { q: 'How often should I update my Instagram bio?', a: 'Seasonally — roughly every 3 months. Your bio should reflect who you are right now, not who you were last year. Think of it as a quarterly check-in with yourself.' },
  { q: 'What makes a bio aesthetic?', a: 'Specific language, intentional rhythm, and words that create a feeling. "Living slowly on purpose" is aesthetic. "Coffee addict | dog mom | wanderlust" is not — it is generic rather than specific to you.' },
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

export default function BiosPage() {
  const allPosts = getAllPosts()
  const bioPosts = allPosts.filter((p) =>
    ['Instagram Bios', 'TikTok', 'Twitter & Threads', 'Career & LinkedIn'].includes(p.category ?? '')
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-sans font-light tracking-widest uppercase text-accent mb-4">Bio Library</p>
          <h1 className="font-serif text-5xl md:text-6xl font-medium text-ink leading-tight tracking-tight mb-6">
            Bio Ideas<br /><em className="italic font-normal text-accent">for every vibe.</em>
          </h1>
          <p className="font-sans font-light text-ink-muted text-base leading-relaxed">
            Your bio has 150 characters to say who you are. Here is every style and aesthetic we have curated — find the one that feels most like you.
          </p>
        </div>

        <section className="mb-14">
          <p className="text-xs font-sans font-light tracking-widest uppercase text-ink-muted mb-5">Browse by aesthetic</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {BIO_CATEGORIES.map((cat) => (
              <Link key={cat.slug} href={`/post/${cat.slug}`}
                className="group p-4 bg-white border border-stone-200/60 rounded-sm hover:border-accent transition-all card-lift">
                <p className="font-serif text-sm font-medium text-ink group-hover:text-accent transition-colors mb-1">{cat.label}</p>
                <p className="text-xs font-sans font-light text-ink-muted leading-snug">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <p className="text-xs font-sans font-light tracking-widest uppercase text-ink-muted mb-6">All bio articles</p>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
            {bioPosts.map((post) => (
              <div key={post.slug} className="break-inside-avoid"><PostCard post={post} /></div>
            ))}
          </div>
        </section>

        <section className="max-w-2xl">
          <p className="text-xs font-sans font-light tracking-widest uppercase text-ink-muted mb-6">Common questions</p>
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
