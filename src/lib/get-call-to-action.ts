import { CallToAction } from '@/payload-types'
import config from '@payload-config'
import { getPayload } from 'payload'

// Define the CallToAction type based on the collection schema

interface GetCallToActionParams {
  locale?: 'pt' | 'en'
  page: 'explore' | 'facilidades' | 'institucional' | 'investe' | 'information'
}

/**
 * Fetches call-to-action entry for the specified page from the call-to-actions collection.
 * @param params - Parameters to filter the query.
 * @returns The call-to-action entry or null if not found.
 */
export async function getCallToAction({
  locale = 'pt',
  page,
}: GetCallToActionParams): Promise<CallToAction> {
  const payload = await getPayload({ config })

  // Validate locale
  if (locale && !['pt', 'en'].includes(locale)) {
    throw new Error(`Invalid locale: ${locale}. Must be 'pt' or 'en'.`)
  }

  // Build the query
  const query: any = {
    collection: 'call-to-actions',
    locale,
    where: {
      and: [{ page: { equals: page } }, { isActive: { equals: true } }],
    },
  }

  try {
    const { docs } = await payload.find(query)
    return docs[0] as CallToAction
  } catch (error) {
    console.error(`Error fetching call-to-action for page ${page}:`, error)
    throw new Error('Failed to fetch call-to-action')
  }
}
