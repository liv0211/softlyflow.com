import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Upload Your Creation',
  description:
    'Upload your DIY projects and share your creative journey with the Softlyflow community around the world.',
}

export default function UploadPage() {
  return (
    <CategoryLayout
      categoryPath="/community"
      categoryName="Upload Your Creation"
      description="Show us what you are making—photos, stories, and behind-the-scenes moments are all welcome."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">A gentle upload experience is coming soon. For now, feel free to bookmark this page.</p>
      </div>
    </CategoryLayout>
  )
}

