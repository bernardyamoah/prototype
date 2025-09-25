import type { CollectionConfig } from 'payload'

export const PageSections: CollectionConfig = {
  slug: 'page-sections',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'page', 'isActive', 'updatedAt'],
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
      admin: {
        description: 'Internal title for this section (not displayed on the site)',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Text Content', value: 'text' },
        { label: 'Image Gallery', value: 'gallery' },
        { label: 'Feature List', value: 'features' },
        { label: 'Statistics', value: 'stats' },
        { label: 'Testimonials', value: 'testimonials' },
        { label: 'FAQ', value: 'faq' },
        { label: 'Government Cards', value: 'government-cards' },
        { label: 'Investment Cards', value: 'investment-cards' },
        { label: 'Events Carousel', value: 'events-carousel' },
        { label: 'Custom Component', value: 'custom' },
      ],
    },
    {
      name: 'page',
      type: 'select',
      required: true,
      options: [
        { label: 'Home', value: 'home' },
        { label: 'Explore', value: 'explore' },
        { label: 'Facilidades', value: 'facilidades' },
        { label: 'Institucional', value: 'institucional' },
        { label: 'Investe', value: 'investe' },
        { label: 'Recursos', value: 'recursos' },
      ],
    },
    {
      name: 'heading',
      type: 'text',
      localized: true,
    },
    {
      name: 'subheading',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
      admin: {
        condition: (data, siblingData) =>
          ['text', 'features', 'stats', 'testimonials', 'faq'].includes(siblingData?.type),
      },
    },
    {
      name: 'media',
      type: 'array',
      admin: {
        condition: (data, siblingData) => ['gallery', 'features'].includes(siblingData?.type),
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          localized: true,
        },
        {
          name: 'altText',
          type: 'text',
          localized: true,
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      admin: {
        condition: (data, siblingData) => siblingData?.type === 'features',
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
          localized: true,
        },
        {
          name: 'icon',
          type: 'text',
          admin: {
            description: 'Icon name (e.g., "map", "calendar", "users")',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      admin: {
        condition: (data, siblingData) => siblingData?.type === 'stats',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'value',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'icon',
          type: 'text',
        },
      ],
    },
    {
      name: 'testimonials',
      type: 'array',
      admin: {
        condition: (data, siblingData) => siblingData?.type === 'testimonials',
      },
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          required: true,
          localized: true,
        },
        {
          name: 'author',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'role',
          type: 'text',
          localized: true,
        },
        {
          name: 'avatar',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'faqs',
      type: 'array',
      admin: {
        condition: (data, siblingData) => siblingData?.type === 'faq',
      },
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
          localized: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
          localized: true,
        },
      ],
    },
    {
      name: 'governmentCards',
      type: 'array',
      admin: {
        condition: (data, siblingData) => siblingData?.type === 'government-cards',
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
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            { label: 'Building 2', value: 'building-2' },
            { label: 'Building 2 (Lucide)', value: 'lucide:building-2' },
            { label: 'Users', value: 'lucide:users' },
            { label: 'Award', value: 'lucide:award' },
            { label: 'Map Pin', value: 'lucide:map-pin' },
            { label: 'Shield', value: 'lucide:shield' },
            { label: 'Gavel', value: 'lucide:gavel' },
            { label: 'Globe', value: 'lucide:globe' },
            { label: 'Briefcase', value: 'lucide:briefcase' },
            { label: 'Landmark', value: 'lucide:landmark' },
            { label: 'Scale', value: 'lucide:scale-3' }, // Note: 'scale' might be 'scale-3' in Lucide
            // Bonus: Mix in other collections
            { label: 'Building Office', value: 'heroicons-building-office-2' },
            { label: 'Justice Scale', value: 'fa:balance-scale' },
          ],
          admin: {
            description: 'Select a Lucide icon for the government card.',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'investmentCards',
      type: 'array',
      admin: {
        condition: (data, siblingData) => siblingData?.type === 'investment-cards',
      },
      fields: [
        {
          name: 'name',
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
          name: 'icon',
          type: 'text',
          admin: {
            description: 'Emoji or icon character',
          },
        },
      ],
    },
    {
      name: 'eventsCarouselSettings',
      type: 'group',
      admin: {
        condition: (data, siblingData) => siblingData?.type === 'events-carousel',
      },
      fields: [
        {
          name: 'showOnlyPublished',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'maxEvents',
          type: 'number',
          defaultValue: 10,
          admin: {
            description: 'Maximum number of events to display',
          },
        },
      ],
    },

    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
}

export default PageSections
