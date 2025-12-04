import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Felt Crafts',
  description:
    'Make charming felt accessories and tiny decor pieces that are soft, colorful, and beginner-friendly.',
}

export default function FeltCraftsPage() {
  return (
    <CategoryLayout
      categoryPath="/diy-crafts"
      categoryName="Felt Crafts"
      description="Create soft felt projects—from pins to mini decor—that add warmth to your outfits and space."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More felt craft ideas are coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

