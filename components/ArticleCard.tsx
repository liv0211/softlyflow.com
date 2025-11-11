import Link from 'next/link'
import { formatDate } from '@/lib/utils'

interface ArticleCardProps {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime?: number
  category?: string
}

export default function ArticleCard({
  slug,
  title,
  excerpt,
  date,
  readTime,
  category,
}: ArticleCardProps) {
  return (
    <article className="group">
      <Link
        href={`/articles/${slug}`}
        className="block bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
      >
        <div className="p-6">
          {category && (
            <span className="inline-block px-3 py-1 text-xs font-medium text-primary-700 bg-primary-50 rounded-full mb-3">
              {category}
            </span>
          )}
          <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
            {title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{excerpt}</p>
          <div className="flex items-center text-xs text-gray-500 space-x-4">
            <time dateTime={date}>{formatDate(date)}</time>
            {readTime && (
              <>
                <span>•</span>
                <span>{readTime} min read</span>
              </>
            )}
          </div>
        </div>
      </Link>
    </article>
  )
}

