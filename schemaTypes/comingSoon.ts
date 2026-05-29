import {defineType, defineField} from 'sanity'

export const comingSoon = defineType({
  name: 'comingSoon',
  title: 'Coming Soon',
  type: 'document',
  fields: [
    defineField({
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [{ type: 'comingSoonCard' }],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Coming Soon' }),
  },
});