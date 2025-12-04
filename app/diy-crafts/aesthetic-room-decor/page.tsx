import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Aesthetic Room Decor',
  description:
    'Design aesthetic room decor pieces that turn your space into a soft, cozy reflection of your personality.',
}

export default function AestheticRoomDecorPage() {
  return (
    <CategoryLayout
      categoryPath="/diy-crafts"
      categoryName="Aesthetic Room Decor"
      description="Create simple, beautiful decor projects to make your room feel calm, cozy, and uniquely yours."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More room decor projects are coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

