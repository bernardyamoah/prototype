import config from '@payload-config'
import { getPayload } from 'payload'

// Define the TouristPackage type based on the collection schema
export interface TouristPackage {
  id: string
  name: string
  description: string
  price: number
  duration: string
  locations: { location: string }[]
  image: string
  itinerary?: string
  featured: boolean
  status: 'draft' | 'published'
  createdAt: string
  updatedAt: string
}

interface GetTouristPackagesParams {
  locale?: 'pt' | 'en'
  status?: 'draft' | 'published'
  featured?: boolean
}

/**
 * Fetches tourist packages from the tourist-packages collection.
 * @param params - Optional parameters to filter the query.
 * @returns An array of tourist packages.
 */
export async function getTouristPackages({
  locale = 'pt',
  status = 'published',
  featured,
}: GetTouristPackagesParams = {}): Promise<TouristPackage[]> {
  const payload = await getPayload({ config })

  // Validate locale
  if (locale && !['pt', 'en'].includes(locale)) {
    throw new Error(`Invalid locale: ${locale}. Must be 'pt' or 'en'.`)
  }

  // Build the query
  const query: any = {
    collection: 'tourist-packages',
    locale,
    where: {},
  }

  // Add status filter if provided
  if (status) {
    query.where.status = { equals: status }
  }

  // Add featured filter if provided
  if (typeof featured === 'boolean') {
    query.where.featured = { equals: featured }
  }

  try {
    const { docs } = await payload.find(query)
    return docs as TouristPackage[]
  } catch (error) {
    console.error('Error fetching tourist packages:', error)
    throw new Error('Failed to fetch tourist packages')
  }
}
