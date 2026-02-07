import { defineType, defineField } from 'sanity'

export const venue = defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  fields: [
    defineField({ name: 'shortName', type: 'string' }),
    defineField({ name: 'displayName', type: 'string' }),
    defineField({ name: 'address', type: 'string' }),
    defineField({ name: 'city', type: 'string' }),
    defineField({ name: 'state', type: 'string' }),
    defineField({ name: 'zip', type: 'string' }),
    defineField({ name: 'map', title: 'Map URL', type: 'url' }),
    defineField({ name: 'website', title: 'Website URL', type: 'url' }),
  ],
})