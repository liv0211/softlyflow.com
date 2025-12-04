import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Beginner Patterns',
  description:
    'Simple crochet patterns designed for beginners to build confidence with basic stitches and cute projects.',
}

export default function BeginnerPatternsPage() {
  return (
    <CategoryLayout
      categoryPath="/crochet"
      categoryName="Beginner Patterns"
      description="Start your crochet journey with soft, approachable projects that teach core techniques."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More beginner-friendly crochet patterns are coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

