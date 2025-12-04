import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Bags & Accessories',
  description:
    'Crochet practical bags and stylish accessories that carry your essentials and show off your aesthetic.',
}

export default function BagsAccessoriesPage() {
  return (
    <CategoryLayout
      categoryPath="/crochet"
      categoryName="Bags & Accessories"
      description="Make everyday bags, pouches, and accessories that feel soft, functional, and unique."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More bag and accessory ideas are coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

