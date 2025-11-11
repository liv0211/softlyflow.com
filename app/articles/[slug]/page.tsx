import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getArticleBySlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/utils'
import { markdownToHtml } from '@/lib/markdown'

interface PageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: ['Softlyflow'],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
    alternates: {
      canonical: `/articles/${article.slug}`,
    },
  }
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Article Header */}
      <header className="bg-gradient-to-br from-primary-50 to-white py-16 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/articles"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 text-sm font-medium"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Articles
          </Link>

          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary-700 bg-primary-100 rounded-full">
              {article.category}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span>•</span>
            <span>{article.readTime} min read</span>
            {article.tags.length > 0 && (
              <>
                <span>•</span>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          className="article-content max-w-none"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(article.content) }}
        />
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.excerpt,
            image: `https://softlyflow.com/og-image.jpg`,
            datePublished: article.date,
            dateModified: article.date,
            author: {
              '@type': 'Organization',
              name: 'Softlyflow',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Softlyflow',
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://softlyflow.com/articles/${article.slug}`,
            },
            keywords: article.tags.join(', '),
            articleSection: article.category,
          }),
        }}
      />

      {/* Article Footer */}
      <footer className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Share this article</h3>
            <p className="text-sm text-gray-600">
              Help others discover how AI can improve their lives
            </p>
          </div>
          <Link
            href="/articles"
            className="inline-flex items-center px-6 py-3 border border-primary-600 text-base font-medium rounded-lg text-primary-600 bg-white hover:bg-primary-50 transition-colors"
          >
            View More Articles
          </Link>
        </div>
      </footer>
    </article>
  )
}

