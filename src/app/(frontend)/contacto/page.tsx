import { HeroSection } from '@/components/hero-section'
import { getHeroSection } from '@/lib/get-header-section'
import { getPageSections } from '@/lib/get-section'
import { PageSection } from '@/payload-types'

import SectionRenderer from '@/components/sections/universal-section-render'
import ContactForm from './_components/contact-form'

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: 'pt' | 'en' | undefined }>

export default async function ContactPage(props: { params: Params; searchParams: SearchParams }) {
  const searchParams = await props.searchParams
  const locale = (await searchParams).locale || 'pt'
  const heroSection = await getHeroSection({ locale, page: 'contact' })
  const sections: PageSection[] = await getPageSections({
    locale,
    page: 'contact',
  })

  return (
    <div className="min-h-screen mx-auto">
      <HeroSection
        title={heroSection?.title || 'Contactos '}
        subtitle={heroSection?.subtitle || 'Ministério da Cultura, Turismo e Ambiente'}
        backgroundImage={
          (typeof heroSection?.backgroundImage !== 'string' && heroSection?.backgroundImage?.url) ||
          '/placeholder.svg?height=600&width=1200&text=Angola+Government'
        }
      />

      {sections.map((section) => (
        <SectionRenderer key={section.id} section={section} />
      ))}

      <ContactForm />
    </div>
  )
}
