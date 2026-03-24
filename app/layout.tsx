import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const BASE_URL = 'https://softlyflow.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Softlyflow — Aesthetic Bios, Captions & Digital Life Inspo',
    template: '%s | Softlyflow',
  },
  description:
    'Discover aesthetic Instagram bio ideas, viral captions, and mindful digital-life tips curated for creators who want to stand out in 2026.',
  keywords: [
    'aesthetic bio ideas',
    'instagram bio ideas 2026',
    'aesthetic captions',
    'viral instagram captions',
    'digital life tips',
    'aesthetic quotes',
    'cute instagram bios',
    'aesthetic instagram',
    'tiktok bio ideas',
    'soft life captions',
  ],
  // Canonical URL — prevents duplicate indexing of ?q= search params
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    siteName: 'Softlyflow',
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Softlyflow — Aesthetic Bios & Captions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@softlyflow',
    images: ['https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  // theme-color for Android Chrome browser bar
  other: {
    'theme-color': '#FDFBF7',
  },
}

// WebSite + Sitelinks Search Box schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Softlyflow',
  url: BASE_URL,
  description: 'Aesthetic Instagram bio ideas, captions, and digital life wisdom for intentional creators.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
}

// Organization schema for E-E-A-T
const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Softlyflow',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  sameAs: [
    'https://www.instagram.com/softlyflow',
    'https://www.pinterest.com/softlyflow',
    'https://www.tiktok.com/@softlyflow',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FDFBF7" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream">
        <GoogleAnalytics />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
