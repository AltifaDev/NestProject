import type { CollectionConfig } from 'payload'

export const Amenities: CollectionConfig = {
    slug: 'amenities',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'icon',
            type: 'text',
            description: 'Lucide icon name (e.g., Wifi, AirVent)',
        },
    ],
}
