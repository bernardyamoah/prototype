'use client'

import AnimatedDividerBar from '@/components/divide-bar'
import { HeroSection } from '@/components/hero-section'
import { Heart } from 'lucide-react'
import { motion } from 'motion/react'
import GovernmentStructureCarousel from './_components/government-structure-carousel'
import KeyFactsCarousel from './_components/key-facts-carousel'
import PatrimonioCulturalCarousel from './_components/patrimonio-cultural'

export default function InstitucionalPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Institucional"
        subtitle="Conheça Angola: História, Governo e Cultura"
        backgroundImage="https://images.unsplash.com/photo-1757421392324-cc071fb8b644?q=80&w=778&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* About Angola Section */}
      <section className="pb-20 bg-[#f2f7fc]">
        <div className=" mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-(--breakpoint-xl)  mx-auto text-center mb-16"
          >
            <AnimatedDividerBar color="bg-[#2356a3]" maxHeight={70} />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              República de Angola
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Angola é um país da África Austral, rico em recursos naturais e diversidade cultural.
              Com uma história milenar e um futuro promissor, Angola oferece oportunidades únicas
              para investimento, turismo e cooperação internacional.
            </p>
          </motion.div>

          {/* Key Facts Carousel */}
          <KeyFactsCarousel />
        </div>
      </section>

      {/* Government Structure Section */}
      <GovernmentStructureCarousel />

      {/* Cultural Heritage Section */}
      <div className="bg-[#f2f7fc] pb-20 px-4">
        <PatrimonioCulturalCarousel />
      </div>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white">
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
      </section>
    </div>
  )
}
