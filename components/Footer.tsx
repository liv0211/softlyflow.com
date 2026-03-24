import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-stone-200/60 bg-cream-dark mt-16">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-serif text-lg text-ink tracking-tight">softlyflow</span>
          <p className="text-xs font-sans font-light text-ink-muted mt-1 tracking-wide">
            Curated aesthetic inspo for the modern creator.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-xs font-sans font-light tracking-widest uppercase text-ink-muted">
          <Link href="/" className="hover:text-ink transition-colors">Home</Link>
          <Link href="/bios" className="hover:text-ink transition-colors">Bios</Link>
          <Link href="/captions" className="hover:text-ink transition-colors">Captions</Link>
          <Link href="/guides" className="hover:text-ink transition-colors">Guides</Link>
          <Link href="/about" className="hover:text-ink transition-colors">About</Link>
          <Link href="/viral-caption-gen" className="hover:text-accent transition-colors">Caption Gen</Link>
          <Link href="/privacy-policy" className="hover:text-ink transition-colors">Privacy</Link>
        </div>
        <p className="text-xs font-sans font-light text-ink-muted tracking-wide">
          © {new Date().getFullYear()} Softlyflow. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
