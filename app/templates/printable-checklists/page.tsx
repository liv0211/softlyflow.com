import { Metadata } from 'next'
import CategoryLayout from '@/components/CategoryLayout'

export const metadata: Metadata = {
  title: 'Printable Checklists',
  description:
    'Practical printable checklists for planning, cleaning, packing, and daily routines with a soft aesthetic touch.',
}

export default function PrintableChecklistsPage() {
  return (
    <CategoryLayout
      categoryPath="/templates"
      categoryName="Printable Checklists"
      description="Stay organized with gentle, minimal checklists you can print, reuse, and customize."
    >
      <div className="text-center py-12">
        <p className="text-gray-600">More printable checklist bundles are coming soon.</p>
      </div>
    </CategoryLayout>
  )
}

