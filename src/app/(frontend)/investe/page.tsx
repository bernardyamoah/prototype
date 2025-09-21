'use client'

import { HeroSection } from '@/components/hero-section'
import BusinessCreationAngolaCarousel from './_components/business-creation-angola'
import GuiDasIndustriasCarousel from './_components/guia-das-industrias'
import PorqueAngolaCarousel from './_components/porque-angola'

export default function InvestePage() {
  return (
    <div className="min-h-screen ">
      <HeroSection
        title="Invista"
        subtitle="De um lado oportunidades de negócio"
        // backgroundImage="/placeholder.svg?height=600&width=1200&text=Business+Angola"
        backgroundImage="/investe.jpg"
      />
      <div className="bg-[#f2f7fc] pb-20 px-4">
        <PorqueAngolaCarousel />
      </div>

      <div className="bg-[#f7f0df] pb-20 px-4">
        <BusinessCreationAngolaCarousel />
      </div>
      <div className="bg-[#fefefe] pb-20 px-4">
        <GuiDasIndustriasCarousel />
      </div>

  
    </div>
  )
}
