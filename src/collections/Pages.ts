import type { CollectionConfig } from 'payload';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
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
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        description: 'The URL-friendly version of the title. No spaces or special characters allowed.',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        {
          slug: 'hero',
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
              localized: true,
            },
            {
              name: 'subheading',
              type: 'text',
              localized: true,
            },
            {
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'textColor',
              type: 'select',
              options: [
                { label: 'White', value: 'text-white' },
                { label: 'Black', value: 'text-black' },
                { label: 'Custom', value: 'custom' },
              ],
              defaultValue: 'text-white',
            },
            {
              name: 'customTextColor',
              type: 'text',
              admin: {
                condition: (data, siblingData) => siblingData?.textColor === 'custom',
                description: 'Enter custom CSS color class or hex value',
              },
            },
         
          ],
        },
        {
          slug: 'contentSection',
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
              localized: true,
            },
            {
              name: 'content',
              type: 'richText',
              required: true,
              localized: true,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'imagePosition',
              type: 'select',
              options: [
                { label: 'Left', value: 'left' },
                { label: 'Right', value: 'right' },
              ],
              defaultValue: 'left',
            },
          ],
        },
        {
          slug: 'features',
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'features',
              type: 'array',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'description',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'icon',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },
          ],
        },
        {
          slug: 'gallery',
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'images',
              type: 'array',
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
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          admin: {
            description: 'Title for SEO (if different from page title)',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          admin: {
            description: 'Meta description for SEO',
          },
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Open Graph image for social sharing',
          },
        },
      ],
    },
  ],
  timestamps: true,
};

export default Pages;
