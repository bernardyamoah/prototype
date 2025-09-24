import config from '@payload-config'
import { getPayload } from 'payload'

export async function getEvents() {
  const payload = await getPayload({ config })
  const events = await payload.find({
    collection: 'events',
  })
  return events.docs
}
