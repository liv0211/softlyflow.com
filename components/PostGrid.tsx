'use client'
import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { PostMeta } from '@/lib/posts'
import PostCard from './PostCard'

const CATEGORIES = [
  'All',
  'Instagram Bios',
  'Captions',
  'TikTok',
  'Twitter & Threads',
  'Guides',
  'Digital Life',
  'Mental Health',
  'Wellness & Spirit',
  'Relationships',
  'Career & LinkedIn',
  'Books & Reading',
  'Fitness',
  'Lifestyle',
  'Seasonal',
]

interface Props { posts: PostMeta[] }

export default function PostGrid({ posts }: Props) {
  const searchParams = useSearchParams()
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    const q = searchParams.get('q')
    if (q) setQuery(decodeURIComponent(q))
  }, [searchParams])

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory
      const q = query.toLowerCase()
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        (p.category ?? '').toLowerCase().includes(q) ||
        (p.keywords ?? []).some((k) => k.toLowerCase().includes(q))
      return matchCat && matchQuery
    })
  }, [posts, query, activeCategory])

  return (
    <section className="pb-20" id="posts">
      <div className="mb-8 space-y-4">
        {/* Search */}
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M10 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM9.325 10.386a5 5 0 1 1 1.06-1.06l2.645 2.644a.75.75 0 1 1-1.06 1.061l-2.645-2.645Z"
                fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
            </svg>
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search bios, captions, TikTok, wellness…"
            className="w-full pl-10 pr-10 py-3 bg-white border border-stone-200 rounded-sm text-sm font-sans font-light text-ink placeholder-stone-400 focus:outline-none focus:border-accent transition-colors"
          />
          {query && (
            <button onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-ink transition-colors">
              <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
                <path d="M11.782 4.032a.575.575 0 1 0-.813-.814L7.5 6.687 4.032 3.218a.575.575 0 0 0-.814.814L6.687 7.5l-3.469 3.468a.575.575 0 0 0 .814.814L7.5 8.313l3.469 3.469a.575.575 0 0 0 .813-.814L8.313 7.5l3.469-3.468Z"
                  fill="currentColor" />
              </svg>
            </button>
          )}
        </div>

        {/* Category filter — scrollable on mobile */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`text-xs font-sans font-light tracking-widest uppercase px-4 py-2 rounded-sm border transition-all whitespace-nowrap shrink-0 ${
                activeCategory === cat
                  ? 'bg-accent border-accent text-cream'
                  : 'bg-white border-stone-200 text-ink-muted hover:border-accent hover:text-accent'
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {(query || activeCategory !== 'All') && (
          <p className="text-xs font-sans font-light text-stone-400 tracking-wide">
            {filtered.length === 0
              ? 'No posts found — try a different search'
              : `${filtered.length} post${filtered.length === 1 ? '' : 's'} found`}
          </p>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((post) => (
            <div key={post.slug} className="break-inside-avoid">
              <PostCard post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <p className="font-serif text-2xl text-ink-muted mb-3">Nothing found</p>
          <p className="text-sm font-sans font-light text-stone-400 mb-6">
            Try "bio", "tiktok", "healing", "coffee", or "autumn"
          </p>
          <button onClick={() => { setQuery(''); setActiveCategory('All') }}
            className="text-xs font-sans font-light tracking-widest uppercase text-accent border border-accent px-6 py-2 rounded-sm hover:bg-accent hover:text-cream transition-all">
            Show all posts
          </button>
        </div>
      )}
    </section>
  )
}
