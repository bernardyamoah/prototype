import { HeroSection } from '@/components/hero-section'
import { getEvents } from '@/lib/payload-utils'
import ExploreCarousel from './explore/_component/explore-tours'

export default async function HomePage() {
  // const page = await getPageData('explore')
  const events = await getEvents()
  console.log(events)
  return (
    <div className="">
      <HeroSection
        title="Explore"
        subtitle="De outro lado novas experiências"
        backgroundImage="/explore.jpg"
        className=""
      />

      {/* Featured Tours Section */}
      <div className="bg-[#f7f0df] px-4">
        <ExploreCarousel events={events} />
      </div>
    </div>
  )
}
