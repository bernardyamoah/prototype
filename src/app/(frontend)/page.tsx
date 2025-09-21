import { HeroSection } from '@/components/hero-section'
import ExploreCarousel from './explore/_component/explore-tours'

export default async function HomePage() {
  return (
    <div className="">
      <HeroSection
        title="Explore"
        subtitle="De outro lado novas experiências"
        backgroundImage="/explore.jpg"
        className=""
      />

      {/* Featured Tours Section */}
      <div className="bg-[#f7f0df]">
        <ExploreCarousel />
      </div>

  
    </div>
  )
}
