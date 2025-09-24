import type { CollectionConfig } from 'payload';

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
        { label: 'Custom Component', value: 'custom' },
      ],
    },
    {
      name: 'page',
      type: 'select',
      required: true,
      options: [
        { label: 'Explore', value: 'explore' },
        { label: 'Facilidades', value: 'facilidades' },
        { label: 'Institucional', value: 'institucional' },
        { label: 'Investe', value: 'investe' },
        { label: 'Recursos', value: 'recursos' },
        { label: 'Home', value: 'home' },
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
        condition: (data, siblingData) => 
          ['gallery', 'features'].includes(siblingData?.type),
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
      name: 'customComponentName',
      type: 'text',
      admin: {
        condition: (data, siblingData) => siblingData?.type === 'custom',
        description: 'Name of the custom component to render (e.g., "ExploreCarousel")',
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      options: [
        { label: 'White', value: 'bg-white' },
        { label: 'Light', value: 'bg-[#f7f0df]' },
        { label: 'Primary', value: 'bg-primary' },
        { label: 'Secondary', value: 'bg-secondary' },
        { label: 'Custom', value: 'custom' },
      ],
      defaultValue: 'bg-white',
    },
    {
      name: 'customBackgroundColor',
      type: 'text',
      admin: {
        condition: (data, siblingData) => siblingData?.backgroundColor === 'custom',
      },
    },
    {
      name: 'textColor',
      type: 'select',
      options: [
        { label: 'Dark', value: 'text-gray-900' },
        { label: 'Light', value: 'text-white' },
        { label: 'Primary', value: 'text-primary' },
        { label: 'Secondary', value: 'text-secondary' },
        { label: 'Custom', value: 'custom' },
      ],
      defaultValue: 'text-gray-900',
    },
    {
      name: 'customTextColor',
      type: 'text',
      admin: {
        condition: (data, siblingData) => siblingData?.textColor === 'custom',
      },
    },
    {
      name: 'paddingY',
      type: 'select',
      options: [
        { label: 'None', value: 'py-0' },
        { label: 'Small', value: 'py-8' },
        { label: 'Medium', value: 'py-16' },
        { label: 'Large', value: 'py-24' },
      ],
      defaultValue: 'py-16',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        position: 'sidebar',
        description: 'Display order (lower numbers appear first)',
      },
    },
  ],
  timestamps: true,
};

export default PageSections;