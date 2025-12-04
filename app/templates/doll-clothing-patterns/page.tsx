import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Doll Clothing Patterns',
  description:
    'Detailed doll clothing pattern templates for different sizes, perfect for collectors, makers, and small shops.',
}

export default function DollClothingPatternsPage() {
  return (
    <CategoryLayout
      categoryPath="/templates"
      categoryName="Doll Clothing Patterns"
      description="Create tiny garments with printable patterns that fit a range of dolls and styles."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More doll clothing pattern collections are coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

