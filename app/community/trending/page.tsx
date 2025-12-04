import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Trending DIY Creations',
  description:
    'Explore trending DIY creations from the Softlyflow community and gather inspiration for your next project.',
}

export default function TrendingPage() {
  return (
    <CategoryLayout
      categoryPath="/community"
      categoryName="Trending DIY Creations"
      description="See what other makers are loving right now—from cozy crafts to aesthetic room transformations."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">A curated gallery of community creations is coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

