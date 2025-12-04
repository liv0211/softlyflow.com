import { Metadata } from 'next'
import ArticleCard from '@/components/ArticleCard'
import { getAllArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Tutorials',
  description:
    'Browse aesthetic DIY, craft, baking, and lifestyle tutorials designed for a global audience. Soft, beginner-friendly guides for cozy creative living.',
  openGraph: {
    title: 'Tutorials | Softlyflow',
    description:
      'Explore aesthetic DIY, craft, baking, and lifestyle tutorials created for cozy, creative makers worldwide.',
  },
}

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">All Tutorials</h1>
          <p className="text-lg text-gray-600">
            Explore cozy DIY projects, aesthetic crafts, baking ideas, and lifestyle rituals curated for a global
            community of makers.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No articles found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard
                key={article.slug}
                slug={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                readTime={article.readTime}
                category={article.category}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

