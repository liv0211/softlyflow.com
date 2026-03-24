'use client'
import Link from 'next/link'
import { PostMeta } from '@/lib/posts'
import { getCoverConfig } from '@/lib/covers'
import CoverImage from './CoverImage'

const CATEGORY_PHOTOS: Record<string, string[]> = {
  'Instagram Bios': [
    'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=800&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=70&auto=format&fit=crop',
  ],
  'Captions': [
    'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=70&auto=format&fit=crop',
  ],
  'Guides': [
    'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=70&auto=format&fit=crop',
  ],
  'Digital Life': [
    'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=70&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=70&auto=format&fit=crop',
  ],
}

const FALLBACK_PHOTOS = [
  'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=70&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=70&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=70&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=70&auto=format&fit=crop',
]

function getPhotoUrl(slug: string, category?: string): string {
  let hash = 0
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) & 0xffff
  }
  const pool = (category && CATEGORY_PHOTOS[category]) ?? FALLBACK_PHOTOS
  return pool[hash % pool.length]
}

export default function PostCard({ post }: { post: PostMeta }) {
  const coverConfig = getCoverConfig(post.category)
  const photoUrl = post.coverImage ?? getPhotoUrl(post.slug, post.category)

  return (
    <Link href={`/post/${post.slug}`} className="block group">
      <article className="card-lift bg-white border border-stone-200/50 rounded-sm overflow-hidden h-full">
        {/* Cover */}
        <div className="relative w-full h-44 overflow-hidden">
          <CoverImage
            src={photoUrl}
            alt={post.title}
            gradient={coverConfig.gradient}
            className="transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          {post.category && (
            <span className="absolute top-3 left-3 text-xs font-sans font-light tracking-widest uppercase bg-cream/90 text-accent px-3 py-1 rounded-sm backdrop-blur-sm z-10">
              {post.category}
            </span>
          )}
        </div>

        {/* Body */}
        <div className="p-5">
          <h2 className="font-serif text-lg font-medium leading-snug text-ink group-hover:text-accent transition-colors mb-2">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="text-sm font-sans font-light text-ink-muted leading-relaxed line-clamp-2 mb-4">
              {post.excerpt}
            </p>
          )}
          <div className="flex items-center justify-between pt-3 border-t border-stone-100">
            <div className="flex items-center gap-3">
              <time className="text-xs font-sans font-light text-stone-400 tracking-wide">
                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </time>
              {post.readingTime && (
                <>
                  <span className="text-xs text-stone-300">·</span>
                  <span className="text-xs font-sans font-light text-stone-400">{post.readingTime} min</span>
                </>
              )}
            </div>
            <span className="text-xs font-sans font-light text-accent tracking-wide group-hover:underline">
              Read →
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
