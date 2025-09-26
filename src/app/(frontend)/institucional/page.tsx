import { HeroSection } from '@/components/hero-section'
import SectionRenderer from '@/components/sections/universal-section-render'
import { getHeroSection } from '@/lib/get-header-section'
import { getPageSections } from '@/lib/get-section'
import { getVisions } from '@/lib/get-vision'
import { PageSection } from '@/payload-types'
import VisionSection from './_components/vision'
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
  let sections: PageSection[] = await getPageSections({
    locale,
    page: 'institucional',
  })
  const culturalSectionIndex = sections.findIndex(
    (section) =>
      section.type === 'image-carousel' &&
      (locale === 'pt'
        ? section.title === 'Patrimônio Cultural'
        : section.title === 'Cultural Highlights'),
  )

  if (culturalSectionIndex !== -1) {
    const culturalSection = sections.splice(culturalSectionIndex, 1)[0]
    sections = [...sections, culturalSection]
  }
  // const sections = await getPageSections({ locale, page: 'institucional', type: 'stats' })
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

      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}

      <VisionSection vision={vision} />
    </div>
  )
}
