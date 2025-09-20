import { Navigation } from '@/components/navigation'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import type React from 'react'
import { Suspense } from 'react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Visit Angola - The rhythm of life',
  description:
    'Portal oficial de turismo de Angola. Explore destinos únicos, oportunidades de investimento e descubra a beleza natural e cultural de Angola. The rhythm of life.',
  generator: 'Visit Angola',
  keywords:
    'Angola, turismo, investimento, destinos, cultura, natureza, viagem, the rhythm of life',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`font-sans relative ${inter.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          {' '}
          <Navigation />
          {children}
        </Suspense>
      </body>
    </html>
  )
}
