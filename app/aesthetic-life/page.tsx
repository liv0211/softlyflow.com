import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aesthetic Life',
  description:
    'Explore aesthetic living—from minimal and kawaii style to photography and journaling—that makes everyday life feel intentional and beautiful.',
}

export default function AestheticLifePage() {
  return (
    <CategoryLayout
      categoryPath="/aesthetic-life"
      categoryName="Aesthetic Life"
      description="Soft lifestyle ideas for people who love beauty in daily routines, spaces, and stories."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CategoryCard
          title="Minimal / Kawaii Style"
          href="/aesthetic-life/minimal-kawaii-style"
          description="Blend minimal and kawaii aesthetics to build a personal style you truly love."
        />
        <CategoryCard
          title="Photo Style Tips"
          href="/aesthetic-life/photo-style-tips"
          description="Learn simple photo styling tricks to make your everyday moments look dreamy."
        />
        <CategoryCard
          title="Journaling"
          href="/aesthetic-life/journaling"
          description="Create aesthetic journal spreads and gentle systems to document your days."
        />
        <CategoryCard
          title="Productivity"
          href="/aesthetic-life/productivity"
          description="Use beauty and structure together to support calm, focused, and joyful work days."
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

