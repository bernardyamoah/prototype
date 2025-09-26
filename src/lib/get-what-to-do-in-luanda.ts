
import { WhatToDoInLuanda } from '@/payload-types';
import config from '@payload-config'
import { getPayload } from 'payload'

export async function getWhatToDoInLuanda({
  locale = 'pt',
  status = 'published',
  isFeatured = undefined,
}: { locale?: 'pt' | 'en'; status?: 'draft' | 'published'; isFeatured?: boolean } = {}) {
  const payload = await getPayload({ config })

  const query: any = {
    collection: 'what-to-do-in-luanda',
  }

  if (locale) {
    query.locale = locale
  }

  if (status) {
    query.where = {
      ...query.where,
      status: {
        equals: status,
      },
    }
  }

  if (isFeatured !== undefined) {
    query.where = {
      ...query.where,
      isFeatured: {
        equals: isFeatured,
      },
    }
  }

  try {
    const activities = await payload.find(query)
    return activities.docs as WhatToDoInLuanda[]
  } catch (error) {
    console.error('Error fetching activities:', error)
    return [] as WhatToDoInLuanda[]
  }
}
