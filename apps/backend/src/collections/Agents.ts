import type { CollectionConfig } from 'payload'

export const Agents: CollectionConfig = {
    slug: 'agents',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'role', 'phone', 'email'],
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'role',
            type: 'select',
            label: 'Professional Role',
            defaultValue: 'agent',
            options: [
                { label: 'Real Estate Agent', value: 'agent' },
                { label: 'Senior Agent', value: 'senior_agent' },
                { label: 'Broker', value: 'broker' },
                { label: 'Property Consultant', value: 'consultant' },
                { label: 'Sales Manager', value: 'sales_manager' },
            ],
        },
        {
            name: 'photo',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'phone',
            type: 'text',
        },
        {
            name: 'email',
            type: 'email',
        },
        {
            name: 'lineId',
            type: 'text',
            label: 'LINE ID',
        },
        {
            name: 'bio',
            type: 'textarea',
            label: 'Biography',
            admin: {
                description: 'Short professional biography',
            },
        },
        {
            name: 'verified',
            type: 'checkbox',
            label: 'Verified Agent',
            defaultValue: false,
        },
    ],
}
