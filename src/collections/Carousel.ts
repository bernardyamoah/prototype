import type { CollectionConfig } from 'payload';

export const Carousel: CollectionConfig = {
  slug: 'carousels',
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
        description: 'Internal name for this carousel',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Tours', value: 'tours' },
        { label: 'Destinations', value: 'destinations' },
        { label: 'Activities', value: 'activities' },
        { label: 'Accommodations', value: 'accommodations' },
        { label: 'Business Opportunities', value: 'business' },
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
          required: true,
        },
        {
          name: 'link',
          type: 'text',
        },
        {
          name: 'price',
          type: 'text',
          admin: {
            description: 'Optional price or cost information',
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
              admin: {
                description: 'Location or province',
              },
            },
            {
              name: 'season',
              type: 'text',
              admin: {
                description: 'Best season to visit',
              },
            },
            {
              name: 'duration',
              type: 'text',
              admin: {
                description: 'Duration of activity or tour',
              },
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
      ],
    },
    {
      name: 'settings',
      type: 'group',
      fields: [
        {
          name: 'autoplay',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'autoplayDelay',
          type: 'number',
          defaultValue: 5000,
          admin: {
            description: 'Autoplay delay in milliseconds',
          },
        },
        {
          name: 'showDots',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'showArrows',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'itemsPerView',
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
      ],
    },
    {
      name: 'sideContent',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'Side panel title (for business carousel)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'Side panel description (for business carousel)',
          },
        },
      ],
    },
  ],
  timestamps: true,
};

export default Carousel;
