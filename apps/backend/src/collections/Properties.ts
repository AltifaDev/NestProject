import type { CollectionConfig } from 'payload'
import { syncPropertyToSupabase } from '../lib/supabase-sync'

export const Properties: CollectionConfig = {
    slug: 'properties',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'price', 'listingType', 'propertyType', 'status'],
    },
    access: {
        read: () => true,
        create: ({ req: { user } }) => !!user,
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
        afterChange: [
            ({ doc, operation }) => {
                if (operation === 'create' || operation === 'update') {
                    syncPropertyToSupabase(doc as any, 'upsert')
                }
            },
        ],
        afterDelete: [
            ({ doc }) => {
                syncPropertyToSupabase(doc as any, 'delete')
            },
        ],
        beforeChange: [
            ({ req, operation, data }) => {
                if (operation === 'create' && req.user?.role === 'agent' && req.user?.agent) {
                    return {
                        ...data,
                        agent: typeof req.user.agent === 'object' ? req.user.agent.id : req.user.agent,
                    }
                }
                return data
            },
        ],
        // Increment view count on read (via afterRead hook on individual fetch)
        afterRead: [
            ({ doc }) => {
                // Ensure view_count always has a value for display
                if (!doc.view_count) {
                    doc.view_count = 0
                }
                return doc
            },
        ],
    },
    fields: [
        // ─── BASIC INFORMATION ───────────────────────────────────────────────
        {
            name: 'title',
            type: 'text',
            required: true,
            admin: {
                description: 'Property listing title (e.g., "Luxury 3BR House in Sukhumvit")',
            },
        },
        {
            name: 'project_name',
            type: 'text',
            label: 'Project / Development Name',
            admin: {
                description: 'Name of the housing project or development (e.g., "Casa Ville Rangsit")',
            },
        },
        {
            name: 'status',
            type: 'select',
            defaultValue: 'active',
            options: [
                { label: 'Active', value: 'active' },
                { label: 'Pending Review', value: 'pending' },
                { label: 'Sold', value: 'sold' },
                { label: 'Rented', value: 'rented' },
                { label: 'Inactive', value: 'inactive' },
            ],
            required: true,
        },
        {
            name: 'listingType',
            type: 'select',
            defaultValue: 'sale',
            options: [
                { label: 'For Sale', value: 'sale' },
                { label: 'For Rent', value: 'rent' },
            ],
            required: true,
        },
        {
            name: 'propertyType',
            type: 'select',
            options: [
                { label: 'Condominium', value: 'condo' },
                { label: 'Detached House', value: 'house' },
                { label: 'Townhouse', value: 'townhouse' },
                { label: 'Villa', value: 'villa' },
                { label: 'Land', value: 'land' },
                { label: 'Commercial', value: 'commercial' },
                { label: 'Apartment', value: 'apartment' },
            ],
            required: true,
        },
        {
            name: 'price',
            type: 'number',
            required: true,
            admin: {
                description: 'Price in THB (Thai Baht)',
            },
        },

        // ─── DESCRIPTION ─────────────────────────────────────────────────────
        {
            name: 'description',
            type: 'textarea',
            admin: {
                description: 'Full description of the property. Include key features, highlights, and selling points.',
            },
        },

        // ─── LOCATION ────────────────────────────────────────────────────────
        {
            name: 'address',
            type: 'text',
            admin: {
                description: 'Full address for display purposes',
            },
        },
        {
            name: 'location',
            type: 'group',
            fields: [
                { name: 'lat', type: 'number', label: 'Latitude' },
                { name: 'lng', type: 'number', label: 'Longitude' },
                { name: 'province', type: 'text', label: 'Province' },
                { name: 'district', type: 'text', label: 'District' },
                { name: 'sub_district', type: 'text', label: 'Sub-district' },
                { name: 'postcode', type: 'text', label: 'Postcode' },
            ],
        },

        // ─── PROPERTY SPECIFICATIONS ─────────────────────────────────────────
        {
            name: 'stats',
            type: 'group',
            label: 'Property Specifications',
            fields: [
                {
                    name: 'bedrooms',
                    type: 'number',
                    label: 'Bedrooms',
                    min: 0,
                    admin: { width: '25%' },
                },
                {
                    name: 'bathrooms',
                    type: 'number',
                    label: 'Bathrooms',
                    min: 0,
                    admin: { width: '25%' },
                },
                {
                    name: 'livingArea',
                    type: 'number',
                    label: 'Living Area (sq.m.)',
                    min: 0,
                    admin: {
                        width: '25%',
                        description: 'Usable area in square meters',
                    },
                },
                {
                    name: 'landArea',
                    type: 'number',
                    label: 'Land Area (sq.wa.)',
                    min: 0,
                    admin: {
                        width: '25%',
                        description: 'Land size in square wah',
                    },
                },
                {
                    name: 'floors',
                    type: 'number',
                    label: 'Number of Floors',
                    min: 1,
                    defaultValue: 1,
                    admin: { width: '25%' },
                },
                {
                    name: 'parking',
                    type: 'number',
                    label: 'Parking Spaces',
                    min: 0,
                    defaultValue: 0,
                    admin: { width: '25%' },
                },
                {
                    name: 'yearBuilt',
                    type: 'number',
                    label: 'Year Built',
                    admin: { width: '25%' },
                },
            ],
        },

        // ─── PROPERTY DETAILS ────────────────────────────────────────────────
        {
            name: 'details',
            type: 'group',
            label: 'Additional Details',
            fields: [
                {
                    name: 'direction',
                    type: 'select',
                    label: 'Facing Direction',
                    options: [
                        { label: 'North', value: 'North' },
                        { label: 'South', value: 'South' },
                        { label: 'East', value: 'East' },
                        { label: 'West', value: 'West' },
                        { label: 'Northeast', value: 'Northeast' },
                        { label: 'Northwest', value: 'Northwest' },
                        { label: 'Southeast', value: 'Southeast' },
                        { label: 'Southwest', value: 'Southwest' },
                    ],
                    admin: { width: '33%' },
                },
                {
                    name: 'ownership',
                    type: 'select',
                    label: 'Tenure / Ownership',
                    options: [
                        { label: 'Freehold', value: 'Freehold' },
                        { label: 'Leasehold', value: 'Leasehold' },
                        { label: 'Co-ownership', value: 'Co-ownership' },
                    ],
                    admin: { width: '33%' },
                },
                {
                    name: 'decoration',
                    type: 'select',
                    label: 'Decoration / Furnishing',
                    options: [
                        { label: 'Fully Furnished', value: 'Fully Furnished' },
                        { label: 'Partially Furnished', value: 'Partially Furnished' },
                        { label: 'Unfurnished', value: 'Unfurnished' },
                        { label: 'Built-in Only', value: 'Built-in Only' },
                    ],
                    admin: { width: '33%' },
                },
                {
                    name: 'common_fee',
                    type: 'number',
                    label: 'Common Area Fee (THB/sq.m.)',
                    min: 0,
                    admin: {
                        width: '33%',
                        description: 'Monthly common area maintenance fee per square meter',
                    },
                },
                {
                    name: 'pet_friendly',
                    type: 'checkbox',
                    label: 'Pet Friendly',
                    defaultValue: false,
                    admin: {
                        description: 'Allowed for pets (dogs/cats)',
                    },
                },
            ],
        },

        // ─── INDOOR AMENITIES (Structured) ───────────────────────────────────
        {
            name: 'indoor_amenities',
            type: 'group',
            label: 'Indoor Amenities',
            admin: {
                description: 'Select which indoor amenities are available',
            },
            fields: [
                { name: 'furniture', type: 'checkbox', label: 'Furniture', defaultValue: false },
                { name: 'air_con', type: 'checkbox', label: 'Air Conditioning', defaultValue: false },
                { name: 'water_heater', type: 'checkbox', label: 'Water Heater', defaultValue: false },
                { name: 'digital_lock', type: 'checkbox', label: 'Digital Door Lock', defaultValue: false },
                { name: 'bathtub', type: 'checkbox', label: 'Bathtub', defaultValue: false },
                { name: 'stove', type: 'checkbox', label: 'Electric/Gas Stove', defaultValue: false },
                { name: 'tv', type: 'checkbox', label: 'Television', defaultValue: false },
                { name: 'refrigerator', type: 'checkbox', label: 'Refrigerator', defaultValue: false },
                { name: 'internet', type: 'checkbox', label: 'Internet/WiFi', defaultValue: false },
                { name: 'smart_home', type: 'checkbox', label: 'Smart Home System', defaultValue: false },
            ],
        },

        // ─── PROJECT AMENITIES (Structured) ──────────────────────────────────
        {
            name: 'project_amenities',
            type: 'group',
            label: 'Project/Building Amenities',
            admin: {
                description: 'Select which project amenities are available',
            },
            fields: [
                { name: 'lift', type: 'checkbox', label: 'Elevator/Lift', defaultValue: false },
                { name: 'parking_facility', type: 'checkbox', label: 'Parking Facility', defaultValue: false },
                { name: 'pool', type: 'checkbox', label: 'Swimming Pool', defaultValue: false },
                { name: 'gym', type: 'checkbox', label: 'Fitness/Gym', defaultValue: false },
                { name: 'cctv', type: 'checkbox', label: 'CCTV', defaultValue: false },
                { name: 'security', type: 'checkbox', label: '24-Hour Security', defaultValue: false },
                { name: 'garden', type: 'checkbox', label: 'Garden/Green Area', defaultValue: false },
                { name: 'storage', type: 'checkbox', label: 'Storage Room', defaultValue: false },
            ],
        },

        // ─── NEARBY PLACES ───────────────────────────────────────────────────
        {
            name: 'nearby_places',
            type: 'array',
            label: 'Nearby Places',
            admin: {
                description: 'Add nearby landmarks, transport, schools, hospitals, and shops',
            },
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                    admin: { width: '40%' },
                },
                {
                    name: 'distance',
                    type: 'text',
                    required: true,
                    admin: {
                        width: '20%',
                        description: 'e.g., "2.1 km" or "500 m"',
                    },
                },
                {
                    name: 'category',
                    type: 'select',
                    required: true,
                    options: [
                        { label: 'Transport', value: 'transport' },
                        { label: 'Shopping', value: 'shop' },
                        { label: 'Education', value: 'edu' },
                        { label: 'Hospital', value: 'hosp' },
                    ],
                    admin: { width: '20%' },
                },
                {
                    name: 'icon',
                    type: 'select',
                    options: [
                        { label: 'Train/BTS/MRT', value: 'train' },
                        { label: 'Car/Road', value: 'car' },
                        { label: 'Airport', value: 'airport' },
                        { label: 'Shopping Mall', value: 'mall' },
                        { label: 'Market', value: 'market' },
                        { label: 'Supermarket', value: 'supermarket' },
                        { label: 'School', value: 'school' },
                        { label: 'University', value: 'university' },
                        { label: 'Hospital', value: 'hospital' },
                        { label: 'Clinic', value: 'clinic' },
                    ],
                    admin: { width: '20%' },
                },
            ],
        },

        // ─── MEDIA ───────────────────────────────────────────────────────────
        {
            name: 'thumbnail',
            type: 'upload',
            relationTo: 'media',
            admin: {
                description: 'Main cover image for the listing',
            },
        },
        {
            name: 'video_url',
            type: 'text',
            label: 'Video Tour URL',
            admin: {
                description: 'YouTube or Vimeo link for virtual tour',
            },
        },
        {
            name: 'images',
            type: 'array',
            label: 'Gallery Images',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'tag',
                    type: 'select',
                    options: [
                        { label: 'Exterior / Facade', value: 'exterior' },
                        { label: 'Living Room', value: 'living' },
                        { label: 'Bedroom', value: 'bedroom' },
                        { label: 'Kitchen', value: 'kitchen' },
                        { label: 'Bathroom', value: 'bathroom' },
                        { label: 'Dining Area', value: 'dining' },
                        { label: 'Common Facility', value: 'facility' },
                        { label: 'Floor Plan', value: 'floorplan' },
                        { label: 'View / Surrounding', value: 'view' },
                        { label: 'Other', value: 'other' },
                    ],
                },
                {
                    name: 'caption',
                    type: 'text',
                },
            ],
        },

        // ─── RELATIONSHIPS ───────────────────────────────────────────────────
        {
            name: 'amenities',
            type: 'relationship',
            relationTo: 'amenities',
            hasMany: true,
            admin: {
                description: 'Legacy amenities relationship (use indoor/project amenities groups instead)',
            },
        },
        {
            name: 'agent',
            type: 'relationship',
            relationTo: 'agents',
        },

        // ─── ANALYTICS & METADATA ────────────────────────────────────────────
        {
            name: 'view_count',
            type: 'number',
            label: 'View Count',
            defaultValue: 0,
            admin: {
                readOnly: true,
                description: 'Number of times this listing has been viewed',
            },
        },
        {
            name: 'featured',
            type: 'checkbox',
            defaultValue: false,
        },
    ],
}
