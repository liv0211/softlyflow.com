import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Softlyflow - Global aesthetic DIY & lifestyle inspiration',
    template: '%s | Softlyflow',
  },
  description:
    'Softlyflow shares globally-loved aesthetic DIY tutorials, cozy crafts, and mindful lifestyle ideas for English-speaking makers.',
  keywords: [
    'DIY crafts',
    'aesthetic lifestyle',
    'crochet',
    'handmade',
    'journaling',
    'home decor',
    'baking',
    'templates',
  ],
  authors: [{ name: 'Softlyflow' }],
  creator: 'Softlyflow',
  publisher: 'Softlyflow',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://softlyflow.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://softlyflow.com',
    siteName: 'Softlyflow',
    title: 'Softlyflow - Global aesthetic DIY & lifestyle inspiration',
    description:
      'Softlyflow shares globally-loved aesthetic DIY tutorials, cozy crafts, and mindful lifestyle ideas for English-speaking makers.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Softlyflow - Global aesthetic DIY & lifestyle inspiration',
    description:
      'Softlyflow shares globally-loved aesthetic DIY tutorials, cozy crafts, and mindful lifestyle ideas for English-speaking makers.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

