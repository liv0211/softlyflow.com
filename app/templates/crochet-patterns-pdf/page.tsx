import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Crochet Patterns PDF',
  description:
    'Beautifully formatted crochet pattern PDFs that are ready to use in your own projects, classes, or small shop.',
}

export default function CrochetPatternsPDFPage() {
  return (
    <CategoryLayout
      categoryPath="/templates"
      categoryName="Crochet Patterns PDF"
      description="Print-ready crochet pattern PDFs designed for makers, teachers, and small business owners."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More cozy crochet pattern PDFs are coming soon. Stay tuned.</p>
      </div>
    </CategoryLayout>
  )
}

