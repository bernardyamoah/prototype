import type { CollectionConfig } from 'payload';

export const ContentSection: CollectionConfig = {
  slug: 'content-sections',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'isActive', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        description: 'Internal name for this content section',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Destinations', value: 'destinations' },
        { label: 'Activities', value: 'activities' },
        { label: 'Accommodations', value: 'accommodations' },
        { label: 'Cultural Highlights', value: 'cultural' },
        { label: 'Tips and Inspiration', value: 'tips' },
        { label: 'Business Steps', value: 'business-steps' },
        { label: 'Incentives', value: 'incentives' },
        { label: 'Industries', value: 'industries' },
        { label: 'Custom', value: 'custom' },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'subheading',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'backgroundStyle',
      type: 'group',
      fields: [
        {
          name: 'backgroundColor',
          type: 'select',
          options: [
            { label: 'White', value: 'bg-white' },
            { label: 'Gray', value: 'bg-gray-50' },
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
            description: 'Enter custom CSS background class or hex value',
          },
        },
        {
          name: 'padding',
          type: 'select',
          options: [
            { label: 'Small', value: 'py-8' },
            { label: 'Medium', value: 'py-16' },
            { label: 'Large', value: 'py-24' },
          ],
          defaultValue: 'py-16',
        },
      ],
    },
    {
      name: 'items',
      type: 'array',
      required: true,
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
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'link',
          type: 'text',
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Optional icon for this item',
          },
        },
        {
          name: 'badges',
          type: 'array',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
            {
              name: 'variant',
              type: 'select',
              options: [
                { label: 'Default', value: 'default' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Outline', value: 'outline' },
                { label: 'Destructive', value: 'destructive' },
              ],
              defaultValue: 'default',
            },
          ],
        },
        {
          name: 'metadata',
          type: 'group',
          fields: [
            {
              name: 'location',
              type: 'text',
            },
            {
              name: 'price',
              type: 'text',
            },
            {
              name: 'season',
              type: 'text',
            },
            {
              name: 'duration',
              type: 'text',
            },
            {
              name: 'difficulty',
              type: 'select',
              options: [
                { label: 'Easy', value: 'easy' },
                { label: 'Medium', value: 'medium' },
                { label: 'Hard', value: 'hard' },
              ],
            },
          ],
        },
        {
          name: 'content',
          type: 'richText',
          admin: {
            description: 'Additional rich text content for this item',
          },
        },
      ],
    },
    {
      name: 'layout',
      type: 'group',
      fields: [
        {
          name: 'gridColumns',
          type: 'group',
          fields: [
            {
              name: 'mobile',
              type: 'number',
              defaultValue: 1,
            },
            {
              name: 'tablet',
              type: 'number',
              defaultValue: 2,
            },
            {
              name: 'desktop',
              type: 'number',
              defaultValue: 3,
            },
          ],
        },
        {
          name: 'showImages',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'showDescriptions',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'showLinks',
          type: 'checkbox',
          defaultValue: true,
        },
      ],
    },
    {
      name: 'cta',
      type: 'group',
      fields: [
        {
          name: 'showCta',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'text',
          type: 'text',
          admin: {
            condition: (data, siblingData) => siblingData?.showCta,
          },
        },
        {
          name: 'link',
          type: 'text',
          admin: {
            condition: (data, siblingData) => siblingData?.showCta,
          },
        },
        {
          name: 'variant',
          type: 'select',
          options: [
            { label: 'Primary', value: 'default' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
          ],
          defaultValue: 'default',
          admin: {
            condition: (data, siblingData) => siblingData?.showCta,
          },
        },
      ],
    },
  ],
  timestamps: true,
};

export default ContentSection;
