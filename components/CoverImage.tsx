'use client'

interface CoverImageProps {
  src: string
  alt: string
  gradient: string
  className?: string
}

export default function CoverImage({ src, alt, gradient, className = '' }: CoverImageProps) {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Gradient fallback always visible behind */}
      <div className="absolute inset-0" style={{ background: gradient }} />
      {/* Photo on top */}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover ${className}`}
        loading="lazy"
        onError={(e) => {
          ;(e.target as HTMLImageElement).style.opacity = '0'
        }}
      />
    </div>
  )
}
