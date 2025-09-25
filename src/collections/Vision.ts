import type { CollectionConfig } from 'payload'

export const Vision: CollectionConfig = {
  slug: 'vision',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status'],
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
      label: 'Vision Title',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      localized: true,
      label: 'Vision Description',
    },
    {
      name: 'timeline',
      type: 'array',
      required: true,
      minRows: 1,
      label: 'Timeline Items',
      fields: [
        {
          name: 'year',
          type: 'text',
          required: true,
          label: 'Year',
        },
        {
          name: 'goal',
          type: 'text',
          required: true,
          localized: true,
          label: 'Goal',
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      defaultValue: 'draft',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}

export default Vision
