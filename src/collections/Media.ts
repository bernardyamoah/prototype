import type { CollectionConfig } from 'payload';



export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'alt',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Image', value: 'image' },
        { label: 'Document', value: 'document' },
        { label: 'Video', value: 'video' },
        { label: 'Audio', value: 'audio' },
      ],
      defaultValue: 'image',
      admin: {
        position: 'sidebar',
      },
    },
  ],
  upload: {
    staticDir: 'media',
    mimeTypes: [
      'image/*',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'video/*',
      'audio/*',
    ],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 512,
        position: 'centre',
      },
      {
        name: 'desktop',
        width: 1920,
        height: 1080,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
  },
  hooks: {
    beforeChange: [
      ({ data }: { data: { alt?: string; filename?: string } }) => {
        if (!data.alt && data.filename) {
          // Auto-generate alt text from filename if not provided
          const filename = data.filename.split('.')[0];
          data.alt = filename
            .split(/[-_]/)
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        }
        return data;
      },
    ],
  },
};
