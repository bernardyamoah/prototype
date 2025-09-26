import type { CollectionConfig } from 'payload';

export const PageHeaders: CollectionConfig = {
  slug: 'page-headers',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'page', 'isActive', 'updatedAt'],
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
      name: 'subtitle',
      type: 'text',
      localized: true,
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
        { label: 'Informações', value: 'information' },
        { label: 'Custom', value: 'custom' },
      ],
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
        { label: 'Primary', value: 'text-primary' },
        { label: 'Custom', value: 'custom' },
      ],
      defaultValue: 'text-white',
    },
    {
      name: 'customTextColor',
      type: 'text',
      admin: {
        condition: (data, siblingData) => siblingData?.textColor === 'custom',
        description: 'Enter a custom text color class or hex value',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
        description: 'Set whether this header is active',
      },
    },
  ],
  timestamps: true,
};

export default PageHeaders;