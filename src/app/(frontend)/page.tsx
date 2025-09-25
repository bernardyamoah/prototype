import { HeroSection } from '@/components/hero-section'
import { getHeroSection } from '@/lib/get-header-section'
import { getPageSections } from '@/lib/get-section'
import { getEvents } from '@/lib/payload-utils'
import { Event, PageSection } from '@/payload-types'
import SectionStructureCarousel from './_components/section-carousel'
import ExploreCarousel from './explore/_component/explore-tours'

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: 'pt' | 'en' | undefined }>

export default async function HomePage(props: { params: Params; searchParams: SearchParams }) {
  const searchParams = await props.searchParams
  const locale = (await searchParams).locale || 'pt'
  const heroSection = await getHeroSection({ locale, page: 'explore' })
  const events: Event[] = await getEvents()
  const sections: PageSection[] = await getPageSections({
    locale,
    page: 'explore',
  })
  console.log({ sections })
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
      <div className="px-4 pb-20">
        <ExploreCarousel events={events} />
      </div>

      {sections.map((section) => (
        <div key={section.title} className="bg-[#fefefe] pb-20 px-4">
          <SectionStructureCarousel section={section} />
        </div>
      ))}
    </div>
  )
}
