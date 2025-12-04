import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Baking Recipe Cards',
  description:
    'Printable baking recipe cards with clean layouts and soft aesthetics for your kitchen, gifts, or bakery.',
}

export default function BakingRecipeCardsPage() {
  return (
    <CategoryLayout
      categoryPath="/templates"
      categoryName="Baking Recipe Cards"
      description="Save your favorite recipes on printable cards that look beautiful on clipboards, fridges, and countertops."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More printable recipe card designs are coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

