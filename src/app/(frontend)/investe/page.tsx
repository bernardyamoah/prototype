import { HeroSection } from '@/components/hero-section'
import { getHeroSection } from '@/lib/get-header-section'
import { getPageSections } from '@/lib/get-section'
import { PageSection } from '@/payload-types'
import GuiDasIndustriasCarousel from '../../../components/sections/investment-carousel-section'
import BusinessCreationAngolaCarousel from './_components/business-creation-angola'
import PorqueAngolaCarousel from './_components/porque-angola'

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: 'pt' | 'en' | undefined }>

export default async function InvestePage(props: { params: Params; searchParams: SearchParams }) {
  const searchParams = await props.searchParams
  const locale = (await searchParams).locale || 'pt'
  const heroSection = await getHeroSection({ locale, page: 'investe' })
  const sections: PageSection[] = await getPageSections({ locale, page: 'investe' })
  const investmentSector: PageSection[] = await getPageSections({
    locale,
    page: 'investe',
    type: 'investment-cards',
  })

  return (
    <div className="min-h-screen ">
      <HeroSection
        title={heroSection?.title || 'Invista'}
        subtitle={heroSection?.subtitle || 'De um lado oportunidades de negócio'}
        backgroundImage={
          (typeof heroSection?.backgroundImage !== 'string' && heroSection?.backgroundImage?.url) ||
          '/placeholder.svg?height=600&width=1200&text=Angola+Airport'
        }
      />

      <div className="bg-[#f2f7fc] pb-20 px-4">
        <PorqueAngolaCarousel />
      </div>

      <div className="bg-[#f7f0df] pb-20 px-4">
        <BusinessCreationAngolaCarousel />
      </div>
      {sections.length > 0 && (
        <div className="bg-[#fefefe] pb-20 px-4">
          <GuiDasIndustriasCarousel section={investmentSector[0]} />
        </div>
      )}
    </div>
  )
}
