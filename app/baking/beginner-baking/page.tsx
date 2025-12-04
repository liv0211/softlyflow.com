import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Beginner Baking',
  description:
    'Start your baking journey with simple, reliable recipes and gentle explanations made for beginners.',
}

export default function BeginnerBakingPage() {
  return (
    <CategoryLayout
      categoryPath="/baking"
      categoryName="Beginner Baking"
      description="Learn foundational baking skills step by step so you can bake with confidence."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More beginner baking guides are coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

