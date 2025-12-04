import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Productivity',
  description:
    'Use beauty, structure, and gentle routines to support focused, joyful productivity in your everyday life.',
}

export default function ProductivityPage() {
  return (
    <CategoryLayout
      categoryPath="/aesthetic-life"
      categoryName="Productivity"
      description="Blend aesthetics and mindful structure to make your workdays feel calmer and more intentional."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More gentle productivity rituals are coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

