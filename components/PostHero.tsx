'use client'

interface PostHeroProps {
  src: string
  alt: string
  gradient: string
  category?: string
}

export default function PostHero({ src, alt, gradient, category }: PostHeroProps) {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-[420px] overflow-hidden">
      {/* Gradient fallback */}
      <div className="absolute inset-0" style={{ background: gradient }} />
      {/* Photo */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        onError={(e) => {
          ;(e.target as HTMLImageElement).style.opacity = '0'
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
      {/* Category pill */}
      {category && (
        <div className="absolute bottom-0 left-0 right-0 max-w-2xl mx-auto px-6 pb-3">
          <span className="text-xs font-sans font-light tracking-widest uppercase text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-sm inline-block border border-white/20">
            {category}
          </span>
        </div>
      )}
    </div>
  )
}
