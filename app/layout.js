import './globals.css'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.legacyretirementliving.com/'),
  title: {
    default: 'Legacy Premium Retirement Living — Comfort, Care, and Community',
    template: '%s | Legacy Premium Retirement Living',
  },
  description: 'Discover Legacy Premium Retirement Homes — a serene, self-sustained senior living community in Vadavucode, Kerala. Enjoy comfort, companionship, and care in a lush 5.5-acre retreat.',
  keywords: ['retirement living', 'senior homes', 'premium retirement', 'legacy homes', 'senior community', 'Vadavucode', 'Kerala'],
  authors: [{ name: 'Legacy Premium Retirement Living' }],
  creator: 'Legacy Premium Retirement Living',
  publisher: 'Legacy Premium Retirement Living',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Legacy Premium Retirement Living',
    title: 'Legacy Premium Retirement Living — Comfort, Care, and Community',
    description: 'Discover Legacy Premium Retirement Homes — a serene, self-sustained senior living community in Vadavucode, Kerala. Enjoy comfort, companionship, and care in a lush 5.5-acre retreat.',
    images: [
      {
        url: '/metaImage.jpg',
        width: 1200,
        height: 630,
        alt: 'Legacy Premium Retirement Living - Premium senior living community in Vadavucode, Kerala',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legacy Premium Retirement Living — Comfort, Care, and Community',
    description: 'Discover Legacy Premium Retirement Homes — a serene, self-sustained senior living community in Vadavucode, Kerala. Enjoy comfort, companionship, and care in a lush 5.5-acre retreat.',
    images: ['/metaImage.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  category: 'retirement living',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}

