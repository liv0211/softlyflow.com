import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Journaling',
  description:
    'Create aesthetic journal spreads, gentle prompts, and cozy systems to hold your everyday memories.',
}

export default function JournalingPage() {
  return (
    <CategoryLayout
      categoryPath="/aesthetic-life"
      categoryName="Journaling"
      description="Create aesthetic journal spreads and keep gentle memories of your days."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More cozy journaling guides are coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

