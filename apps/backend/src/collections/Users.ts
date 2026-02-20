import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    read: () => true,
    admin: ({ req: { user } }) => {
      // Allow access if the user has an 'admin' or 'agent' role
      return user?.role === 'admin' || user?.role === 'agent'
    },
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      defaultValue: 'agent',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Agent', value: 'agent' },
      ],
      required: true,
      saveToJWT: true,
    },
    {
      name: 'agent',
      type: 'relationship',
      relationTo: 'agents',
      hasMany: false,
      saveToJWT: true,
      admin: {
        condition: (data) => data?.role === 'agent',
      },
    }
  ],
}
