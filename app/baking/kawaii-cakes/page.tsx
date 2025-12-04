import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Kawaii Cakes',
  description:
    'Learn to decorate kawaii-style cakes with soft colors, playful details, and cozy café vibes.',
}

export default function KawaiiCakesPage() {
  return (
    <CategoryLayout
      categoryPath="/baking"
      categoryName="Kawaii Cakes"
      description="Decorate cakes inspired by Japanese cafés and birthday tables around the world."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More kawaii cake ideas are coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

