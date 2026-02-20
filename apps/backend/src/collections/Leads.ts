import type { CollectionConfig } from 'payload'
import { syncLeadToSupabase } from '../lib/supabase-sync'

export const Leads: CollectionConfig = {
    slug: 'leads',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'email', 'phone', 'status', 'source'],
    },
    access: {
        read: ({ req: { user } }) => {
            if (user?.role === 'admin') return true
            if (user?.role === 'agent' && user?.agent) {
                return {
                    agent: {
                        equals: typeof user.agent === 'object' ? user.agent.id : user.agent,
                    },
                }
            }
            return false
        },
        create: ({ req: { user } }) => true, // Public can create leads
        update: ({ req: { user } }) => {
            if (user?.role === 'admin') return true
            if (user?.role === 'agent' && user?.agent) {
                return {
                    agent: {
                        equals: typeof user.agent === 'object' ? user.agent.id : user.agent,
                    },
                }
            }
            return false
        },
        delete: ({ req: { user } }) => {
            if (user?.role === 'admin') return true
            if (user?.role === 'agent' && user?.agent) {
                return {
                    agent: {
                        equals: typeof user.agent === 'object' ? user.agent.id : user.agent,
                    },
                }
            }
            return false
        },
    },
    hooks: {
        beforeChange: [
            ({ req, operation, data }) => {
                // If an agent is logged in and creating a lead manually, assign it to them
                if (operation === 'create' && req.user?.role === 'agent' && req.user?.agent && !data.agent) {
                    return {
                        ...data,
                        agent: typeof req.user.agent === 'object' ? req.user.agent.id : req.user.agent,
                    }
                }
                return data
            },
        ],
        afterChange: [
            ({ doc, operation }) => {
                if (operation === 'create' || operation === 'update') {
                    syncLeadToSupabase(doc as any, 'upsert')
                }
            },
        ],
        afterDelete: [
            ({ doc }) => {
                syncLeadToSupabase(doc as any, 'delete')
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
            name: 'email',
            type: 'email',
        },
        {
            name: 'phone',
            type: 'text',
        },
        {
            name: 'message',
            type: 'textarea',
        },
        {
            name: 'status',
            type: 'select',
            defaultValue: 'new',
            options: [
                { label: 'New', value: 'new' },
                { label: 'Contacted', value: 'contacted' },
                { label: 'Viewing Arranged', value: 'viewing' },
                { label: 'Negotiating', value: 'negotiating' },
                { label: 'Closed Won', value: 'closed_won' },
                { label: 'Closed Lost', value: 'closed_lost' },
            ],
            required: true,
        },
        {
            name: 'source',
            type: 'select',
            defaultValue: 'website',
            options: [
                { label: 'Website Form', value: 'website' },
                { label: 'Facebook', value: 'facebook' },
                { label: 'Instagram', value: 'instagram' },
                { label: 'Referral', value: 'referral' },
                { label: 'Walk-in', value: 'walkin' },
                { label: 'Other', value: 'other' },
            ],
        },
        {
            name: 'property',
            type: 'relationship',
            relationTo: 'properties',
            admin: {
                description: 'The property they inquired about (if any)',
            }
        },
        {
            name: 'agent',
            type: 'relationship',
            relationTo: 'agents',
            admin: {
                description: 'The agent handling this lead',
            }
        },
    ],
}
