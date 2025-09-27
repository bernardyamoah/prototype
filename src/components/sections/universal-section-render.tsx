'use client'
import FaqSection from '@/components/sections/faq-section'
import ImageCarouselSection from '@/components/sections/image-carousel-section'
import InformationCarouselSection from '@/components/sections/information-carousel-section'
import InvestmentCarouselSection from '@/components/sections/investment-carousel-section'
import StatsCarouselSection from '@/components/sections/stats-carousel-section'
import { PageSection } from '@/payload-types'

interface SectionRendererProps {
  section: PageSection
}

const SectionRenderer = ({ section }: SectionRendererProps) => {
  // Don't render inactive sections
  if (!section.isActive) {
    return null
  }

  switch (section.type) {
    // case 'text':
    //   return <TextSection section={section} />

    // case 'gallery':
    //   return <ImageGallerySection section={section} />

    // case 'features':
    //   return <FeaturesSection section={section} />

    case 'stats':
      return <StatsCarouselSection section={section} />

    // case 'testimonials':
    //   return <TestimonialsSection section={section} />

    case 'faq':
      return <FaqSection section={section} />

    case 'information-cards':
      return <InformationCarouselSection section={section} />

    case 'investment-cards':
      return <InvestmentCarouselSection section={section} />

    case 'image-carousel':
      return <ImageCarouselSection section={section} />
    // case 'events-carousel':
    //   return <EventsCarouselSection section={section} />

    // case 'custom':
    //   return <CustomSection section={section} />

    default:
      console.warn(`Unknown section type: ${section.type}`)
      return null
  }
}

export default SectionRenderer
