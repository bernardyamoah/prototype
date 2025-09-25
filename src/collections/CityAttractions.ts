import type { CollectionConfig } from 'payload'

export const CityAttractions: CollectionConfig = {
  slug: 'city-attractions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'location', 'featured'],
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
      label: 'Attraction Name',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      localized: true,
      label: 'Description',
    },
    {
      name: 'location',
      type: 'text',
      required: true,
      localized: true,
      label: 'Location in City',
      admin: {
        description: 'Specific area or landmark in the city (e.g., Ilha de Luanda, Cidade Alta).',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      label: 'Category',
      options: [
        { label: 'Cultural', value: 'cultural' },
        { label: 'Historical', value: 'historical' },
        { label: 'Outdoor', value: 'outdoor' },
        { label: 'Food & Drink', value: 'food_drink' },
        { label: 'Nightlife', value: 'nightlife' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Attraction Image',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Attraction',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Check to mark this attraction as featured for prominent display.',
      },
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

export default CityAttractions
