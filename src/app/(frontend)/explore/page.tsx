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

      {/* Call to ActionS
      // <section className="py-16 bg-primary text-primary-foreground">
      //   <div className="container mx-auto px-4 text-center">
      //     <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para Explorar Angola?</h2>
      //     <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
      //       Comece a planear a sua aventura pelos destinos mais belos de Angola.
      //     </p>
      //     <div className="flex flex-col sm:flex-row gap-4 justify-center">
      //       <Button size="lg" variant="secondary">
      //         Planeie a sua Viagem
      //       </Button>
      //       <Button
      //         size="lg"
      //         variant="outline"
      //         className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
      //       >
      //         Contactar Especialista
      //       </Button>
      //     </div>
      //   </div>
      // </section> */}
    </div>
  )
}
