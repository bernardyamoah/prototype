import { CollectionConfig } from 'payload'

export const CallToActions: CollectionConfig = {
  slug: 'call-to-actions',
  admin: { useAsTitle: 'title' },
  access: { read: () => true, create: () => true, update: () => true, delete: () => true },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    {
      name: 'page',
      type: 'select',
      options: ['explore', 'facilidades', 'institucional', 'investe', 'recursos'],
      required: true,
    },
    { name: 'heading', type: 'text', localized: true },
    { name: 'subheading', type: 'text', localized: true },
    {
      name: 'buttons',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true, localized: true },
        { name: 'icon', type: 'text' },
        {
          name: 'variant',
          type: 'select',
          options: ['default', 'secondary', 'outline'],
          defaultValue: 'default',
        },
        { name: 'url', type: 'text' },
        { name: 'target', type: 'select', options: ['_self', '_blank'], defaultValue: '_self' },
      ],
    },
    { name: 'isActive', type: 'checkbox', defaultValue: true },
  ],
}
