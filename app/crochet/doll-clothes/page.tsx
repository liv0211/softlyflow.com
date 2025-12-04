import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Doll Clothes',
  description:
    'Crochet charming outfits and accessories for your dolls—from everyday dresses to special occasion looks.',
}

export default function DollClothesPage() {
  return (
    <CategoryLayout
      categoryPath="/crochet"
      categoryName="Doll Clothes"
      description="Design tiny crochet wardrobes that make each doll feel unique and special."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More doll clothing patterns are coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

