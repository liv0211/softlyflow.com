import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Templates',
  description:
    'Discover printable templates, pattern PDFs, and checklists designed to support your creative projects and small shop.',
}

export default function TemplatesPage() {
  return (
    <CategoryLayout
      categoryPath="/templates"
      categoryName="Templates"
      description="Explore cozy digital products—from crochet pattern PDFs to recipe cards and aesthetic checklists."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CategoryCard
          title="Crochet Patterns PDF"
          href="/templates/crochet-patterns-pdf"
          description="Print-ready crochet pattern PDFs designed for makers, teachers, and small business owners."
        />
        <CategoryCard
          title="Doll Clothing Patterns"
          href="/templates/doll-clothing-patterns"
          description="Printable patterns for tiny garments that fit a range of dolls and occasions."
        />
        <CategoryCard
          title="Baking Recipe Cards"
          href="/templates/baking-recipe-cards"
          description="Soft, aesthetic recipe card templates you can print and reuse in your kitchen or shop."
        />
        <CategoryCard
          title="Printable Checklists"
          href="/templates/printable-checklists"
          description="Minimal, practical checklists to support planning, routines, and everyday organization."
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

