import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Beading / Bracelet',
  description:
    'Learn beading basics and design bracelets that feel personal, stylish, and easy to wear every day.',
}

export default function BeadingBraceletPage() {
  return (
    <CategoryLayout
      categoryPath="/diy-crafts"
      categoryName="Beading / Bracelet"
      description="Learn beading basics and design bracelets that feel personal and wearable."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More beading tutorials are coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

