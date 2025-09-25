import { HeroSection } from '@/components/hero-section'
import { getEvents } from '@/lib/payload-utils'
import { Event } from '@/payload-types'
import ExploreCarousel from './explore/_component/explore-tours'
import { getHeroSection } from '@/lib/get-header-section'

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: 'pt' | 'en' | undefined }>

export default async function HomePage(props: { params: Params; searchParams: SearchParams }) {
  const searchParams = await props.searchParams
  const locale = (await searchParams).locale || 'pt'
  const heroSection = await getHeroSection({ locale, page: 'explore' })
  const events: Event[] = await getEvents()

  return (
    <div className="">
        <HeroSection
        title={heroSection?.title || 'Explore'}
        subtitle={heroSection?.subtitle || 'De outro lado novas experiências'}
        backgroundImage={
          (typeof heroSection?.backgroundImage !== 'string' && heroSection?.backgroundImage?.url) ||
          '/placeholder.svg?height=600&width=1200&text=Angola+Airport'
        }
      />
    

      {/* Featured Tours Section */}
      <div className="px-4">
        <ExploreCarousel events={events} />
      </div>
    </div>
  )
}
