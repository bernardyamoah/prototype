import { HeroSection } from '@/components/hero-section'

import { getEvents } from '@/lib/get-events'
import { getHeroSection } from '@/lib/get-header-section'
import { getTouristPackages } from '@/lib/get-tourist-package'
import Facilidades from './_components/facilidades'

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: 'pt' | 'en' | undefined }>

export default async function FacilidadesPage(props: {
  params: Params
  searchParams: SearchParams
}) {
  const searchParams = await props.searchParams
  const locale = (await searchParams).locale || 'pt'
  const featuredEvents = await getEvents({ isFeatured: true })
  const heroSection = await getHeroSection({ locale, page: 'facilidades' })
  const touristPackages = await getTouristPackages()
  return (
    <div className="min-h-screen mx-auto">
      <HeroSection
        title={heroSection?.title || 'Facilidades'}
        subtitle={
          heroSection?.subtitle ||
          'Ao chegar em Angola - Tudo o que precisa saber para uma viagem perfeita'
        }
        // backgroundImage="/placeholder.svg?height=600&width=1200&text=Angola+Airport"
        backgroundImage={
          (typeof heroSection?.backgroundImage !== 'string' && heroSection?.backgroundImage?.url) ||
          '/placeholder.svg?height=600&width=1200&text=Angola+Airport'
        }
        textColor="text-[#feec00]"
      />

      <Facilidades featuredEvents={featuredEvents} />
    </div>
  )
}
