import { iconOptions } from '@/constant/icons'
import type { CollectionConfig } from 'payload'

export const PageSections: CollectionConfig = {
  slug: 'page-sections',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'page', 'order', 'isActive', 'updatedAt'],
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
        { label: 'Statistics Carousel', value: 'stats' },
        { label: 'Testimonials', value: 'testimonials' },
        { label: 'FAQ', value: 'faq' },
        { label: 'Information Carousel', value: 'government-cards' },
        { label: 'Investment Carousel', value: 'investment-cards' },
        { label: 'Events Carousel', value: 'events-carousel' },
        { label: 'Image Carousel', value: 'image-carousel' },
        { label: 'Highlight Carousel', value: 'highlight-carousel' },
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
        { label: 'Informações', value: 'information' },
      ],
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Order of the section (higher numbers appear later)',
        position: 'sidebar',
      },
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
          type: 'select',
          required: true,
          options: iconOptions,
          admin: {
            description: 'Select a Lucide icon for the government card.',
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
          type: 'select',
          required: true,
          options: iconOptions,
          admin: {
            description: 'Select a Lucide icon for the government card.',
          },
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
          options: iconOptions,
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
          type: 'select',
          required: true,
          options: iconOptions,
          admin: {
            description: 'Select a Lucide icon for the government card.',
          },
        },
      ],
    },
    {
      name: 'items',
      type: 'array',
      admin: {
        condition: (data, siblingData) => siblingData?.type === 'image-carousel',
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
          name: 'link',
          type: 'text',
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
      name: 'highlights',
      type: 'array',
      admin: {
        condition: (data, siblingData) => siblingData?.type === 'highlight-carousel',
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
          name: 'link',
          type: 'text',
        },
        {
          name: 'icon',
          type: 'select',
          options: iconOptions,
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
