import config from '@payload-config'
import { getPayload } from 'payload'

export async function getEvents({
  locale = 'pt',
  status = 'published', // Default to published for public queries
  isFeatured = undefined, // Optional filter for featured events
}: { locale?: 'pt' | 'en'; status?: 'draft' | 'published'; isFeatured?: boolean } = {}) {
  const payload = await getPayload({ config })

  // Define the query object
  const query: any = {
    collection: 'events',
  }

  // Add locale to the query if provided
  if (locale) {
    query.locale = locale
  }

  // Add status filter if provided
  if (status) {
    query.where = {
      ...query.where,
      status: {
        equals: status,
      },
    }
  }

  // Add isFeatured filter if provided
  if (isFeatured !== undefined) {
    query.where = {
      ...query.where,
      isFeatured: {
        equals: isFeatured,
      },
    }
  }

  try {
    const events = await payload.find(query)
    return events.docs as any[]
  } catch (error) {
    console.error('Error fetching events:', error)
    return [] as Event[]
  }
}
