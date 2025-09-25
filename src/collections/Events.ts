import type { CollectionConfig } from 'payload'

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title'],
  },
  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },

    {
      name: 'description',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'link',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
      defaultValue: 'draft', // Default to draft for new events
      required: true,
      admin: {
        position: 'sidebar', // Place status in the admin sidebar for easy access
      },
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      label: 'Featured Event',
      defaultValue: false, 
      admin: {
        position: 'sidebar', // Place in sidebar for quick toggling
        description: 'Check to highlight this event as a featured item.',
      },
    },
  ],
  timestamps: true,
}

export default Events
