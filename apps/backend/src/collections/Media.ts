import type { CollectionConfig } from 'payload'
import { syncMediaToSupabase } from '../lib/supabase-sync'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      ({ doc, operation }) => {
        if (operation === 'create' || operation === 'update') {
          syncMediaToSupabase(doc as any, 'upsert')
        }
      },
    ],
    afterDelete: [
      ({ doc }) => {
        syncMediaToSupabase(doc as any, 'delete')
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
