import { HeroSection } from '@/components/hero-section'
import { Button } from '@/components/ui/button'
import ExploreCarousel from './_component/explore-tours'

export default function ExplorePage() {
  return (
    <div className="">
      <HeroSection
        title="Explore"
        subtitle="De outro lado novas experiências"
        backgroundImage="/explore.jpg"
      />

      {/* Featured Tours Section */}
      <div className="bg-[#f7f0df]">
        {/* <ExploreCarousel /> */}
      </div>

  
    </div>
  )
}
