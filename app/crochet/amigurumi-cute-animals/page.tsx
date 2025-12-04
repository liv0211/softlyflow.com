import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Amigurumi Cute Animals',
  description:
    'Learn to crochet tiny animal friends—from simple shapes to more detailed designs—perfect for gifts and markets.',
}

export default function AmigurumiCuteAnimalsPage() {
  return (
    <CategoryLayout
      categoryPath="/crochet"
      categoryName="Amigurumi Cute Animals"
      description="Learn to crochet tiny animal friends, from simple shapes to more detailed designs."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More amigurumi ideas are coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

