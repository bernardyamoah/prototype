import type { PageSection } from '@/payload-types'
import config from '@payload-config'
import { getPayload } from 'payload'

interface GetPageSectionsParams {
  locale?: 'pt' | 'en'
  page?: string
  status?: 'draft' | 'published'
  type?: PageSection['type']
  title?: PageSection['title']
}

/**
 * Fetches page sections from the page-sections collection.
 * @param params - Optional parameters to filter the query.
 * @returns An array of page sections.
 */
export async function getPageSections({
  locale = 'pt',
  page,
  type,
  title,
}: GetPageSectionsParams = {}): Promise<PageSection[]> {
  const payload = await getPayload({ config })

  // Validate locale
  if (locale && !['pt', 'en'].includes(locale)) {
    throw new Error(`Invalid locale: ${locale}. Must be 'pt' or 'en'.`)
  }

  // Validate page
  const validPages = ['home', 'explore', 'facilidades', 'institucional', 'investe', 'information']
  if (page && !validPages.includes(page)) {
    throw new Error(`Invalid page: ${page}. Must be one of ${validPages.join(', ')}.`)
  }

  // Build the query
  const query: any = {
    collection: 'page-sections',
    locale,
    where: {
      isActive: { equals: true },
    },
    sort: 'order',
  }

  // Add filters
  
  if (page) {
    query.where.page = { equals: page }
  }
  if (type) {
    query.where.type = { equals: type }
  }
  if (title) {
    query.where.title = {
      equals: title,
    }
  }

  try {
    const { docs } = await payload.find(query)
    return docs as PageSection[]
  } catch (error) {
    console.error(`Error fetching page sections for page ${page || 'any'}:`, error)
    throw new Error('Failed to fetch page sections')
  }
}
