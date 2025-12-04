import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Baking',
  description:
    'Explore the joy of baking—cute desserts, cozy cakes, and beginner-friendly recipes for slow, sweet days.',
}

export default function BakingPage() {
  return (
    <CategoryLayout
      categoryPath="/baking"
      categoryName="Baking"
      description="Discover cute desserts and comforting bakes that feel as beautiful as they taste."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CategoryCard
          title="Cute Desserts"
          href="/baking/cute-desserts"
          description="Bake irresistibly cute desserts that make every bite feel special."
        />
        <CategoryCard
          title="Kawaii Cakes"
          href="/baking/kawaii-cakes"
          description="Decorate kawaii-style cakes inspired by cafés and celebrations around the world."
        />
        <CategoryCard
          title="Cookies & Pastry"
          href="/baking/cookies-pastry"
          description="Create a mix of cookies and pastries that are perfect for gifting and gatherings."
        />
        <CategoryCard
          title="Beginner Baking"
          href="/baking/beginner-baking"
          description="Start baking with gentle, step-by-step recipes made for beginners."
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

