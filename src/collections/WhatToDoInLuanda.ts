import type { CollectionConfig } from 'payload'

export const WhatToDoInLuanda: CollectionConfig = {
  slug: 'what-to-do-in-luanda',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'isFeatured'],
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
      defaultValue: 'draft',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      label: 'Featured Activity',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Check to highlight this activity as a featured item.',
      },
    },
  ],
  timestamps: true,
}

export default WhatToDoInLuanda
