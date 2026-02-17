import './css/style.css'
import { Lato, Playfair_Display } from 'next/font/google'
import AccessibilityWidget from '@/components/AccessibilityWidget'

const lato = Lato({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
})

const playfair = Playfair_Display({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = {
  metadataBase: new URL('https://parkbavli.com'),
  title: 'Park Bavli Tel Aviv | PEER Luxury Real Estate',
  description: 'A limited collection of luxury residences for sale with panoramic views, premium finishes and full service amenities, in a parkside oasis just minutes from Tel Aviv\'s cultural and business centres.',
  keywords: 'luxury real estate, Tel Aviv, Park Bavli, premium apartments, luxury residences, real estate investment, Tel Aviv properties, luxury living',
  authors: [{ name: 'PEER Luxury Real Estate' }],
  icons: {
    icon: [
      { url: '/images/park-bavli-logo-black.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/park-bavli-logo-black.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Park Bavli Tel Aviv | PEER Luxury Real Estate',
    description: 'A limited collection of luxury residences for sale with panoramic views, premium finishes and full service amenities, in a parkside oasis just minutes from Tel Aviv\'s cultural and business centres.',
    type: 'website',
    locale: 'en_US',
    url: 'https://parkbavli.com',
    siteName: 'Park Bavli Tel Aviv',
    images: [
      {
        url: '/images/park-bavli-logo-black.png',
        width: 1200,
        height: 630,
        alt: 'Park Bavli Tel Aviv - Luxury Real Estate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Park Bavli Tel Aviv | PEER Luxury Real Estate',
    description: 'A limited collection of luxury residences for sale with panoramic views, premium finishes and full service amenities.',
    images: ['/images/park-bavli-logo-black.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${lato.variable} ${playfair.variable}`}>
      <body>
        {children}
        <AccessibilityWidget />
      </body>
    </html>
  )
}
