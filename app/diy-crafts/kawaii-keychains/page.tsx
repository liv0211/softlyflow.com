import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Kawaii Keychains',
  description:
    'Create ultra-cute keychains that add personality and charm to your keys, bags, and everyday carry.',
}

export default function KawaiiKeychainsPage() {
  return (
    <CategoryLayout
      categoryPath="/diy-crafts"
      categoryName="Kawaii Keychains"
      description="Create ultra-cute keychains that add personality and charm to your keys, bags, and everyday carry."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More kawaii keychain ideas are coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

