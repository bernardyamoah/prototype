import { HeroSection } from '@/components/hero-section'
import { getHeroSection } from '@/lib/get-header-section'
import GovernmentStructureCarousel from './_components/government-structure-carousel'
import PatrimonioCulturalCarousel from './_components/patrimonio-cultural'
import VisionSection from './_components/vision'
import { getVisions } from '@/lib/get-vision'
type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: 'pt' | 'en' | undefined }>

export default async function InstitucionalPage(props: {
  params: Params
  searchParams: SearchParams
}) {
  const searchParams = await props.searchParams
  const locale = (await searchParams).locale || 'pt'
  const heroSection = await getHeroSection({ locale, page: 'institucional' })
  const vision = await getVisions()
  return (
    <div className="min-h-screen">
      <HeroSection
        title={heroSection?.title || 'Institucional'}
        subtitle={heroSection?.subtitle || 'Conheça Angola: História, Governo e Cultura'}
        // backgroundImage="/placeholder.svg?height=600&width=1200&text=Angola+Airport"
        backgroundImage={
          (typeof heroSection?.backgroundImage !== 'string' && heroSection?.backgroundImage?.url) ||
          '/placeholder.svg?height=600&width=1200&text=Angola+Airport'
        }
      />

      {/* Government Structure Section */}
      <GovernmentStructureCarousel />

      {/* Cultural Heritage Section */}

      <PatrimonioCulturalCarousel />

      {/* Vision Section */}
      {/* <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Angola 2050</h2>
            <p className="text-xl leading-relaxed mb-8">
              Construindo um futuro próspero, sustentável e inclusivo para todos os angolanos. Um
              país moderno que preserva suas tradições e abraça a inovação.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2030</div>
                <div className="text-yellow-200">Diversificação Econômica</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2040</div>
                <div className="text-yellow-200">Sustentabilidade Ambiental</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">2050</div>
                <div className="text-yellow-200">Sociedade do Conhecimento</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}
      <VisionSection vision={vision} />
    </div>
  )
}
