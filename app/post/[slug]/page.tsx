import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPost, getAllPostSlugs, getRelatedPosts } from '@/lib/posts'
import { getCoverConfig } from '@/lib/covers'
import AdSlot from '@/components/AdSlot'
import PostCard from '@/components/PostCard'
import PostHero from '@/components/PostHero'
import PostContent from '@/components/PostContent'
import Link from 'next/link'

interface Props { params: Promise<{ slug: string }> }

const BASE_URL = 'https://softlyflow.com'

const CATEGORY_PHOTOS: Record<string, string> = {
  'Instagram Bios': 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1400&q=80&auto=format&fit=crop',
  'Captions':       'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1400&q=80&auto=format&fit=crop',
  'Guides':         'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1400&q=80&auto=format&fit=crop',
  'Digital Life':   'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1400&q=80&auto=format&fit=crop',
  'TikTok':         'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1400&q=80&auto=format&fit=crop',
  'Mental Health':  'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=1400&q=80&auto=format&fit=crop',
  'Wellness & Spirit': 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1400&q=80&auto=format&fit=crop',
  'Fitness':        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1400&q=80&auto=format&fit=crop',
  'Relationships':  'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1400&q=80&auto=format&fit=crop',
  'Career & LinkedIn': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&q=80&auto=format&fit=crop',
  'Books & Reading': 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1400&q=80&auto=format&fit=crop',
  'Lifestyle':      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1400&q=80&auto=format&fit=crop',
  'Seasonal':       'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&q=80&auto=format&fit=crop',
  'Twitter & Threads': 'https://images.unsplash.com/photo-1611605698335-8441e03c6a43?w=1400&q=80&auto=format&fit=crop',
}

function getHeroPhoto(slug: string, category?: string, coverImage?: string): string {
  if (coverImage) return coverImage
  if (category && CATEGORY_PHOTOS[category]) return CATEGORY_PHOTOS[category]
  return 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1400&q=80&auto=format&fit=crop'
}

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params   // ← Next.js 16: await params
  const post = getPost(slug)
  if (!post) return {}
  const heroPhoto = getHeroPhoto(slug, post.category, post.coverImage)
  const url = `${BASE_URL}/post/${slug}`
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      siteName: 'Softlyflow',
      url,
      images: [{ url: heroPhoto, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [heroPhoto],
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params   // ← Next.js 16: await params

  const post = getPost(slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug, post.category, 3)
  const coverConfig = getCoverConfig(post.category)
  const heroPhoto = getHeroPhoto(slug, post.category, post.coverImage)
  const url = `${BASE_URL}/post/${slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    image: heroPhoto,
    url,
    author: { '@type': 'Organization', name: 'Softlyflow', url: BASE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Softlyflow',
      url: BASE_URL,
      logo: { '@type': 'ImageObject', url: `${BASE_URL}/logo.png` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: post.keywords?.join(', '),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      ...(post.category ? [{ '@type': 'ListItem', position: 2, name: post.category, item: `${BASE_URL}/?q=${encodeURIComponent(post.category)}` }] : []),
      { '@type': 'ListItem', position: post.category ? 3 : 2, name: post.title, item: url },
    ],
  }

  const isGuide = post.category === 'Guides' || post.category === 'Digital Life'
  const faqSchema = isGuide ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is the best ${post.category?.toLowerCase() ?? 'guide'} for 2026?`,
        acceptedAnswer: { '@type': 'Answer', text: post.excerpt },
      },
      {
        '@type': 'Question',
        name: `How do I use this ${post.category === 'Guides' ? 'guide' : 'advice'}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Read the full article at ${url} and pick the tips most relevant to you. All advice is practical and ready to apply immediately.`,
        },
      },
    ],
  } : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}

      <article>
        <PostHero src={heroPhoto} alt={post.title} gradient={coverConfig.gradient} category={post.category} />

        <div className="max-w-2xl mx-auto px-6 pt-8">
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-ink leading-tight tracking-tight">
            {post.title}
          </h1>
        </div>

        <div className="max-w-2xl mx-auto px-6 py-10">
          {/* Breadcrumb */}
          <nav className="mb-8 text-xs font-sans font-light tracking-widest uppercase text-ink-muted flex items-center gap-2 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span className="text-stone-300">/</span>
            {post.category && (
              <>
                <Link href={`/?q=${encodeURIComponent(post.category)}`} className="text-accent hover:underline">{post.category}</Link>
                <span className="text-stone-300">/</span>
              </>
            )}
            <span className="text-stone-400 truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Meta */}
          <div className="flex items-center gap-4 flex-wrap mb-10 pb-8 border-b border-stone-200/60">
            {/* Author byline — E-E-A-T signal for Google */}
            <span className="text-xs font-sans font-light text-ink-muted tracking-wide flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-accent/10 text-accent font-serif text-xs">S</span>
              By Softlyflow
            </span>
            <span className="text-stone-300 text-xs">·</span>
            <time className="text-xs font-sans font-light text-stone-400 tracking-wide" dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </time>
            {post.readingTime && (
              <>
                <span className="text-stone-300 text-xs">·</span>
                <span className="text-xs font-sans font-light text-stone-400">{post.readingTime} min read</span>
              </>
            )}
            {post.excerpt && (
              <p className="w-full text-sm font-sans font-light text-ink-muted leading-relaxed italic mt-1">{post.excerpt}</p>
            )}
          </div>

          <AdSlot id="ad-post-top" label="Advertisement" />

          <PostContent content={post.content} />

          <AdSlot id="ad-post-bottom" label="Advertisement" />

          {/* Share nudge */}
          <div className="mt-10 p-6 bg-cream-dark rounded-sm border border-stone-200/50 text-center">
            <p className="font-serif text-lg text-ink mb-1">Found this useful?</p>
            <p className="text-sm font-sans font-light text-ink-muted">Save it for later or share with someone who needs the right words.</p>
          </div>

          {/* Back */}
          <div className="mt-10 pt-8 border-t border-stone-200/60 flex items-center justify-between">
            <Link href="/" className="text-sm font-sans font-light tracking-widest uppercase text-ink-muted hover:text-ink transition-colors">← All Posts</Link>
            <span className="text-accent text-sm">✦</span>
          </div>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="bg-cream-dark border-t border-stone-200/60 py-14">
            <div className="max-w-5xl mx-auto px-6">
              <p className="text-xs font-sans font-light tracking-widest uppercase text-ink-muted mb-6">More in {post.category}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((r) => <PostCard key={r.slug} post={r} />)}
              </div>
            </div>
          </div>
        )}
      </article>
    </>
  )
}
