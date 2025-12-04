import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Community',
  description:
    'Join the Softlyflow community to share your creations, find inspiration from other makers, and celebrate cozy creativity together.',
}

export default function CommunityPage() {
  return (
    <CategoryLayout
      categoryPath="/community"
      categoryName="Community"
      description="A warm place for global makers to share, learn, and be inspired by each other."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CategoryCard
          title="Upload Your Creation"
          href="/community/upload"
          description="Share your DIY projects, photos, and stories with the Softlyflow community."
        />
        <CategoryCard
          title="Trending DIY Creations"
          href="/community/trending"
          description="Browse popular creations from makers worldwide and find your next idea."
        />
      </div>
    </CategoryLayout>
  )
}

function CategoryCard({
  title,
  href,
  description,
}: {
  title: string
  href: string
  description: string
}) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all group"
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}

