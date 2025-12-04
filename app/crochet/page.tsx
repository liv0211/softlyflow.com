import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Crochet',
  description:
    'Explore the world of crochet—from cute amigurumi to everyday bags—with soft, beginner-friendly patterns and ideas.',
}

export default function CrochetPage() {
  return (
    <CategoryLayout
      categoryPath="/crochet"
      categoryName="Crochet"
      description="Discover playful crochet projects, from tiny animals to wearable accessories."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CategoryCard
          title="Amigurumi Cute Animals"
          href="/crochet/amigurumi-cute-animals"
          description="Crochet adorable animal friends, perfect for beginners and gift-giving."
        />
        <CategoryCard
          title="Doll Clothes"
          href="/crochet/doll-clothes"
          description="Design tiny outfits and accessories to dress up your favorite dolls."
        />
        <CategoryCard
          title="Bags & Accessories"
          href="/crochet/bags-accessories"
          description="Crochet practical bags and stylish accessories that show off your personal style."
        />
        <CategoryCard
          title="Beginner Patterns"
          href="/crochet/beginner-patterns"
          description="Simple patterns that help beginners practice core stitches and build confidence."
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

