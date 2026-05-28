import type { Metadata, Viewport } from 'next'
import { Inter, Geist, Instrument_Serif } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://addendum.nl'),
  title: 'Addendum Networks & Security | Camera, Alarm en WiFi installatie in Zuid-Holland',
  description: 'Professionele installatie van beveiligingscamera\'s, alarmsystemen en WiFi-netwerken voor woningen en bedrijven in Zuid-Holland en heel Nederland. Direct contact via WhatsApp.',
  keywords: 'camera installatie Rotterdam, beveiligingscamera Zuid-Holland, alarmsysteem installatie, WiFi installatie bedrijven, access point installatie, netwerk installatie, beveiliging thuis, beveiliging bedrijf, camera installatie Nederland',
  authors: [{ name: 'Addendum Networks & Security' }],
  creator: 'Addendum Networks & Security',
  publisher: 'Addendum Networks & Security',
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    title: 'Addendum Networks & Security | Camera, Alarm en WiFi installatie in Zuid-Holland',
    description: 'Professionele installatie van beveiligingscamera\'s, alarmsystemen en WiFi-netwerken voor woningen en bedrijven in Zuid-Holland en heel Nederland.',
    locale: 'nl_NL',
    type: 'website',
    siteName: 'Addendum Networks & Security',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Addendum Networks & Security - Professionele installatie van camera\'s, alarmsystemen en WiFi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Addendum Networks & Security | Camera, Alarm en WiFi installatie in Zuid-Holland',
    description: 'Professionele installatie van beveiligingscamera\'s, alarmsystemen en WiFi-netwerken voor woningen en bedrijven in Zuid-Holland en heel Nederland.',
    images: ['/og-image.jpg'],
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
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0A1628',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Addendum Networks & Security',
  description: 'Professionele installatie van beveiligingscamera\'s, alarmsystemen en WiFi-netwerken voor woningen en bedrijven.',
  telephone: '+31624782834',
  url: 'https://addendum.nl',
  areaServed: {
    '@type': 'Country',
    name: 'Netherlands',
  },
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Zuid-Holland',
    addressCountry: 'NL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.9225,
    longitude: 4.4792,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '17:00',
    },
  ],
  sameAs: [],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Beveiligingsproducten en Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'WiFi & Netwerk Installatie',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Beveiligingscamera Installatie',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Alarmsysteem Installatie',
        },
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${geist.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
