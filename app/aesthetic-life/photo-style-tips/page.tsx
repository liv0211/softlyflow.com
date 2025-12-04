import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Photo Style Tips',
  description:
    'Learn simple photo styling and shooting tips to make your everyday scenes look soft, cinematic, and aesthetic.',
}

export default function PhotoStyleTipsPage() {
  return (
    <CategoryLayout
      categoryPath="/aesthetic-life"
      categoryName="Photo Style Tips"
      description="Capture cozy corners, outfits, and creations with gentle photo tips made for social media and memory keeping."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More photo styling and shooting guides are coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

