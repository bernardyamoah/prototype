import { Vision } from '@/payload-types'
import config from '@payload-config'
import { getPayload } from 'payload'

// Define the Vision type based on the collection schema

interface GetVisionsParams {
  locale?: 'pt' | 'en'
  status?: 'draft' | 'published'
  title?: string
}

/**
 * Fetches vision entries from the vision collection.
 * @param params - Optional parameters to filter the query.
 * @returns An array of vision entries.
 */
export async function getVisions({
  locale = 'pt',
  status = 'published',
  title,
}: GetVisionsParams = {}): Promise<Vision> {
  const payload = await getPayload({ config })

  // Validate locale
  if (locale && !['pt', 'en'].includes(locale)) {
    throw new Error(`Invalid locale: ${locale}. Must be 'pt' or 'en'.`)
  }

  // Build the query
  const query: any = {
    collection: 'vision',
    locale,
      where: {},
    
  }

  // Add status filter if provided
  if (status) {
    query.where.status = { equals: status }
  }

  // Add title filter if provided
  if (title) {
    query.where.title = {
      equals: title,
    }
  }

  try {
    const { docs } = await payload.find(query)
    return docs[0] as Vision
  } catch (error) {
    console.error('Error fetching visions:', error)
    throw new Error('Failed to fetch visions')
  }
}
