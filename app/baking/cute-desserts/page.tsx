import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Cute Desserts',
  description:
    'Bake irresistibly cute desserts that look dreamy on your table and taste just as sweet.',
}

export default function CuteDessertsPage() {
  return (
    <CategoryLayout
      categoryPath="/baking"
      categoryName="Cute Desserts"
      description="Bake playful, photo-ready desserts that bring joy to every bite."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More cute dessert recipes are coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

