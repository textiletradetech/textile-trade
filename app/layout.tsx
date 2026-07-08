import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Textile Trade - B2B Textile Trading Platform',
  description: 'Connect with textile manufacturers, wholesalers, and retailers. The leading B2B marketplace for the textile industry.',
  generator: 'Textile Trade',
  keywords: ['textile', 'trade', 'B2B', 'wholesale', 'fabric', 'manufacturing', 'marketplace'],
  icons: {
    icon: '/images/textile-trade-icon.png',
    apple: '/images/textile-trade-icon.png',
  },
  openGraph: {
    title: 'Textile Trade - B2B Textile Trading Platform',
    description: 'Connect with textile manufacturers, wholesalers, and retailers. The leading B2B marketplace for the textile industry.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
