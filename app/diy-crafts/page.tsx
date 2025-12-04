import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DIY Crafts',
  description:
    'Discover playful DIY projects—from kawaii keychains to cozy room decor—that gently unlock your creativity.',
}

export default function DIYCraftsPage() {
  return (
    <CategoryLayout
      categoryPath="/diy-crafts"
      categoryName="DIY Crafts"
      description="Discover playful DIY projects that make everyday life feel more creative and fun."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CategoryCard
          title="Kawaii Keychains"
          href="/diy-crafts/kawaii-keychains"
          description="Create ultra-cute keychains that add personality and charm to your keys and bags."
        />
        <CategoryCard
          title="Beading / Bracelet"
          href="/diy-crafts/beading-bracelet"
          description="Learn beading basics and design bracelets that feel personal and wearable."
        />
        <CategoryCard
          title="Felt Crafts"
          href="/diy-crafts/felt-crafts"
          description="Make soft felt accessories and tiny decor pieces that are beginner-friendly and fun."
        />
        <CategoryCard
          title="Aesthetic Room Decor"
          href="/diy-crafts/aesthetic-room-decor"
          description="Design simple room decor projects to turn your space into a calm, cozy retreat."
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

