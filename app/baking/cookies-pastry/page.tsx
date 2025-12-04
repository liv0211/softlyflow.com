import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Cookies & Pastry',
  description:
    'Bake delicate cookies and pastries that are perfect for gifting, tea time, and small gatherings.',
}

export default function CookiesPastryPage() {
  return (
    <CategoryLayout
      categoryPath="/baking"
      categoryName="Cookies & Pastry"
      description="Create a mix of cookies and pastries that feel special yet approachable for home bakers."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More cookie and pastry recipes are coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

