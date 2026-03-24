'use client'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const router = useRouter()
  const pathname = usePathname()

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if (!query.trim()) return
    // Navigate home with search query in hash so PostGrid can pick it up
    router.push(`/?q=${encodeURIComponent(query.trim())}`)
    setSearchOpen(false)
    setQuery('')
  }

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-stone-200/60">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="font-serif text-xl tracking-tight text-ink hover:text-accent transition-colors shrink-0">
          softlyflow
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 flex-1 justify-end">

          {/* Inline search bar */}
          <form onSubmit={handleSearch} className="relative">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search…"
              className="w-40 lg:w-56 pl-8 pr-3 py-1.5 text-xs font-sans font-light bg-cream-dark border border-stone-200 rounded-sm text-ink placeholder-stone-400 focus:outline-none focus:border-accent focus:w-64 transition-all duration-300"
            />
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
              <svg width="12" height="12" viewBox="0 0 15 15" fill="none">
                <path d="M10 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM9.325 10.386a5 5 0 1 1 1.06-1.06l2.645 2.644a.75.75 0 1 1-1.06 1.061l-2.645-2.645Z"
                  fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
              </svg>
            </span>
          </form>

          <Link href="/" className="text-xs font-sans font-light tracking-widest uppercase text-ink-muted hover:text-ink transition-colors">Home</Link>
          <Link href="/bios" className="text-xs font-sans font-light tracking-widest uppercase text-ink-muted hover:text-ink transition-colors">Bios</Link>
          <Link href="/captions" className="text-xs font-sans font-light tracking-widest uppercase text-ink-muted hover:text-ink transition-colors">Captions</Link>
          <Link href="/guides" className="text-xs font-sans font-light tracking-widest uppercase text-ink-muted hover:text-ink transition-colors">Guides</Link>
          <Link href="/about" className="text-xs font-sans font-light tracking-widest uppercase text-ink-muted hover:text-ink transition-colors">About</Link>
          <Link href="/viral-caption-gen"
            className="text-xs font-sans font-light tracking-widest uppercase px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-cream transition-all rounded-sm shrink-0">
            ✦ Caption Gen
          </Link>
        </div>

        {/* Mobile: search + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setSearchOpen(!searchOpen)} aria-label="Search"
            className="text-ink-muted hover:text-ink transition-colors p-1">
            <svg width="16" height="16" viewBox="0 0 15 15" fill="none">
              <path d="M10 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM9.325 10.386a5 5 0 1 1 1.06-1.06l2.645 2.644a.75.75 0 1 1-1.06 1.061l-2.645-2.645Z"
                fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
            </svg>
          </button>
          <button className="flex flex-col gap-1.5 p-1" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <span className={`block w-5 h-px bg-ink transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-ink transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-ink transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile search bar */}
      {searchOpen && (
        <div className="md:hidden bg-cream border-t border-stone-200/60 px-6 py-3">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search bios, captions, guides…"
              className="w-full pl-9 pr-4 py-2.5 text-sm font-sans font-light bg-white border border-stone-200 rounded-sm text-ink placeholder-stone-400 focus:outline-none focus:border-accent"
              autoFocus
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none">
              <svg width="14" height="14" viewBox="0 0 15 15" fill="none">
                <path d="M10 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM9.325 10.386a5 5 0 1 1 1.06-1.06l2.645 2.644a.75.75 0 1 1-1.06 1.061l-2.645-2.645Z"
                  fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
              </svg>
            </span>
          </form>
        </div>
      )}

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-stone-200/60 px-6 py-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setOpen(false)} className="text-sm font-sans font-light tracking-widest uppercase text-ink-muted">Home</Link>
          <Link href="/bios" onClick={() => setOpen(false)} className="text-sm font-sans font-light tracking-widest uppercase text-ink-muted">Bios</Link>
          <Link href="/captions" onClick={() => setOpen(false)} className="text-sm font-sans font-light tracking-widest uppercase text-ink-muted">Captions</Link>
          <Link href="/guides" onClick={() => setOpen(false)} className="text-sm font-sans font-light tracking-widest uppercase text-ink-muted">Guides</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="text-sm font-sans font-light tracking-widest uppercase text-ink-muted">About</Link>
          <Link href="/viral-caption-gen" onClick={() => setOpen(false)} className="text-sm font-sans font-light tracking-widest uppercase text-accent border border-accent px-4 py-2 text-center rounded-sm">✦ Caption Gen</Link>
        </div>
      )}
    </header>
  )
}
