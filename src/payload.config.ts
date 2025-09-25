// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { CallToActions } from './collections/CallToAction'
import Events from './collections/Events'
import { Media } from './collections/Media'
import PageHeaders from './collections/PageHeaders'
import PageSections from './collections/PageSections'

import { Users } from './collections/Users'
import Vision from './collections/Vision'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Events,
    PageHeaders,
    PageSections,

    Vision,
    CallToActions,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  upload: {
    limits: {
      fileSize: 5000000,
    },
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    // payloadCloudPlugin(),
    // storage-adapter-placeholder
    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN || '',
      },
    }),
  ],
  i18n: {
    // supportedLanguages: ['pt', 'en'],
    fallbackLanguage: 'pt',
  },
  localization: {
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
  },
})
