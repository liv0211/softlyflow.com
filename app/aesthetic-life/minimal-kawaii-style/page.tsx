import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Minimal / Kawaii Style',
  description:
    'Explore minimal and kawaii aesthetics and blend them into a personal style that feels soft, modern, and you.',
}

export default function MinimalKawaiiStylePage() {
  return (
    <CategoryLayout
      categoryPath="/aesthetic-life"
      categoryName="Minimal / Kawaii Style"
      description="Mix clean lines, pastel colors, and playful details to create your own aesthetic wardrobe and spaces."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More minimal-meets-kawaii style guides are coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

