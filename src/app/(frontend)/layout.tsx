import { Footer } from '@/components/footer'
import { LocaleProvider } from '@/components/locale-provider'
import { Navigation } from '@/components/navigation'
import { Loader2 } from 'lucide-react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type React from 'react'
import { Suspense } from 'react'
import './globals.css'

const fagun = localFont({
  src: [
    { path: './fonts/Fagun-Light.woff', weight: '400' },
    { path: './fonts/Fagun-Medium.woff', weight: '500' },
  ],
  variable: '--font-fagun',
})

const fredella = localFont({
  src: './fonts/Fredella.ttf',
  variable: '--font-fredella',
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
      <body className={`font-sans relative  ${fagun.variable} ${fredella.variable}`}>
        <LocaleProvider defaultLocale="pt">
          <Suspense
            fallback={
              <div className="flex h-screen items-center justify-center flex-col gap-2">
                <Loader2 className="animate-spin" /> Loading...
              </div>
            }
          >
            <Navigation />
            {children}
          </Suspense>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  )
}
