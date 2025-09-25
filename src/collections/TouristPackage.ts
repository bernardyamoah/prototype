import type { CollectionConfig } from 'payload'

export const TouristPackages: CollectionConfig = {
  slug: 'tourist-packages',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'price', 'status', 'featured'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      localized: true,
      label: 'Package Name',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      localized: true,
      label: 'Package Description',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      label: 'Price (USD)',
      admin: {
        description: 'Enter the price of the package in USD.',
      },
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
      label: 'Duration',
      admin: {
        description: 'E.g., "3 days / 2 nights" or "1 week".',
      },
    },
    {
      name: 'locations',
      type: 'array',
      required: true,
      label: 'Locations in Angola',
      fields: [
        {
          name: 'location',
          type: 'text',
          required: true,
          localized: true,
          label: 'Location Name',
          admin: {
            description: 'E.g., Luanda, Namibe, Benguela, etc.',
          },
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Main Package Image',
    },
    {
      name: 'itinerary',
      type: 'textarea',
      required: false,
      localized: true,
      label: 'Itinerary Details',
      admin: {
        description: 'Optional detailed itinerary of the package.',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Package',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Check to mark this package as featured for prominent display.',
      },
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
  ],
  timestamps: true,
}

export default TouristPackages
