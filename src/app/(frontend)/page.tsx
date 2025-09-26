import { HeroSection } from '@/components/hero-section'
import { getHeroSection } from '@/lib/get-header-section'
import { getPageSections } from '@/lib/get-section'

import { getEvents } from '@/lib/get-events'
import { getWhatToDoInLuanda } from '@/lib/get-what-to-do-in-luanda'
import { Event, PageSection } from '@/payload-types'
import ActivitiesCarousel from './_components/activities-carousel'
import SectionStructureCarousel from './_components/section-carousel'
import UniqueExperiencesInAngolaCarousel from './_components/unique-experience-in-angola'
import ExploreCarousel from './explore/_component/explore-tours'

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: 'pt' | 'en' | undefined }>

export default async function HomePage(props: { params: Params; searchParams: SearchParams }) {
  const searchParams = await props.searchParams
  const locale = (await searchParams).locale || 'pt'
  const heroSection = await getHeroSection({ locale, page: 'explore' })
  const featuredEvents: Event[] = await getEvents({ isFeatured: true })
  const events: Event[] = await getEvents()
  const sections: PageSection[] = await getPageSections({
    locale,
    page: 'explore',
  })
  const featuredActivities = await getWhatToDoInLuanda({ isFeatured: true })
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
      {featuredEvents.length > 0 && (
        <div className="px-4 pb-20">
          <ExploreCarousel events={featuredEvents} />
        </div>
      )}

      {sections.map((section) => (
        <div key={section.title} className="bg-[#fefefe] pb-20 px-4">
          <SectionStructureCarousel section={section} />
        </div>
      ))}

      <ActivitiesCarousel activities={featuredActivities} />
      {events && events.length > 0 && (
        <div className="px-4 pb-20">
          <UniqueExperiencesInAngolaCarousel events={events} />
        </div>
      )}
    </div>
  )
}
