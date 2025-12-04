import Link from 'next/link'
import { navigation } from '@/lib/navigation'

interface CategoryLayoutProps {
  children: React.ReactNode
  categoryPath: string
  categoryName: string
  description?: string
}

export default function CategoryLayout({
  children,
  categoryPath,
  categoryName,
  description,
}: CategoryLayoutProps) {
  const category = navigation.find((item) => item.href === categoryPath)
  const subcategories = category?.children || []

  return (
    <div className="min-h-screen">
      {/* Category Header */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {categoryName}
          </h1>
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl">{description}</p>
          )}
        </div>
      </section>

      {/* Subcategories Navigation */}
      {subcategories.length > 0 && (
        <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto space-x-1 py-4 scrollbar-hide">
              {subcategories.map((subcategory) => (
                <Link
                  key={subcategory.href}
                  href={subcategory.href}
                  className="flex-shrink-0 px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors whitespace-nowrap"
                >
                  {subcategory.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>
    </div>
  )
}

