import type { CollectionConfig } from 'payload'
import { syncAgentToSupabase } from '../lib/supabase-sync'

export const Agents: CollectionConfig = {
    slug: 'agents',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'role', 'phone', 'email'],
    },
    access: {
        read: () => true,
    },
    hooks: {
        afterChange: [
            ({ doc, operation }) => {
                if (operation === 'create' || operation === 'update') {
                    syncAgentToSupabase(doc as any, 'upsert')
                }
            },
        ],
        afterDelete: [
            ({ doc }) => {
                syncAgentToSupabase(doc as any, 'delete')
            },
        ],
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
            name: 'whatsapp',
            type: 'text',
            label: 'WhatsApp Number',
        },
        {
            name: 'lineId',
            type: 'text',
            label: 'LINE ID',
        },
        {
            name: 'facebook',
            type: 'text',
            label: 'Facebook Profile/Page URL',
        },
        {
            name: 'linkedin',
            type: 'text',
            label: 'LinkedIn Profile URL',
        },
        {
            name: 'instagram',
            type: 'text',
            label: 'Instagram Handle/URL',
        },
        {
            name: 'bio',
            type: 'textarea',
            label: 'Short Biography',
            admin: {
                description: 'Short professional biography (summary)',
            },
        },
        {
            name: 'fullBio',
            type: 'textarea', // Assuming no richtext for simplicity right now, or richtext if lexical is imported.
            label: 'Full Biography',
            admin: {
                description: 'Detailed professional background',
            },
        },
        {
            name: 'licenseNumber',
            type: 'text',
            label: 'License / Accreditation Number',
        },
        {
            name: 'experienceYears',
            type: 'number',
            label: 'Years of Experience',
            min: 0,
        },
        {
            name: 'languages',
            type: 'select',
            hasMany: true,
            label: 'Spoken Languages',
            options: [
                { label: 'English', value: 'English' },
                { label: 'Thai', value: 'Thai' },
                { label: 'Mandarin', value: 'Mandarin' },
                { label: 'Cantonese', value: 'Cantonese' },
                { label: 'Japanese', value: 'Japanese' },
                { label: 'Korean', value: 'Korean' },
                { label: 'Russian', value: 'Russian' },
                { label: 'French', value: 'French' },
                { label: 'German', value: 'German' },
                { label: 'Spanish', value: 'Spanish' },
            ],
        },
        {
            name: 'serviceAreas',
            type: 'text',
            hasMany: true,
            label: 'Service Areas / Neighborhoods',
            admin: {
                description: 'e.g. Sukhumvit, Sathorn, Thong Lo',
            },
        },
        {
            name: 'officeAddress',
            type: 'text',
            label: 'Office Address',
        },
        {
            name: 'verified',
            type: 'checkbox',
            label: 'Verified Agent',
            defaultValue: false,
        },
    ],
}
