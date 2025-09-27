import { PageHeader } from '@/payload-types'
import config from '@payload-config'
import { getPayload } from 'payload'

// Define valid page options based on the PageHeaders collection
type PageOption = 'explore' | 'facilidades' | 'institucional' | 'investe' | 'information' | 'custom'|'contact'

interface GetHeroSectionParams {
  locale?: 'pt' | 'en'
  page?: PageOption
}

export async function getHeroSection({
  locale = 'pt',
  page,
}: GetHeroSectionParams = {}): Promise<PageHeader | null> {
  const payload = await getPayload({ config })

  // Validate locale
//   if (locale && !['pt', 'en'].includes(locale)) {
//     throw new Error(`Invalid locale: ${locale}. Must be 'pt' or 'en'.`)
//   }

  // Build the where clause
  const where: any = {
    isActive: { equals: true },
  }

  // Add page filter if provided
  if (page) {
    // Validate page
    const validPages: PageOption[] = [
      'explore',
      'facilidades',
      'institucional',
      'investe',
      'information',
      'custom',
      'contact',
    ]
    if (!validPages.includes(page)) {
      throw new Error(`Invalid page: ${page}. Must be one of ${validPages.join(', ')}.`)
    }
    where.page = { equals: page }
  }

  try {
    const { docs } = await payload.find({
      collection: 'page-headers',
      locale,
      where,
    })
    console.log(docs)
    return docs[0] || null
  } catch (error) {
    console.error(`Error fetching hero section for page ${page || 'any'}:`, error)
    throw new Error('Failed to fetch hero section')
  }
}
