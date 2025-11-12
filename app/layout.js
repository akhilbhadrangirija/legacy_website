import './globals.css'

export const metadata = {
  title: 'Legacy Premium Retirement Living — Comfort, Care, and Community',
  description: 'Discover Legacy Premium Retirement Homes — a serene, self-sustained senior living community in Vadavucode, Kerala. Enjoy comfort, companionship, and care in a lush 5.5-acre retreat.',
  keywords: ['retirement living', 'senior homes', 'premium retirement', 'legacy homes', 'senior community', 'Vadavucode', 'Kerala'],
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

