import {defineType, defineField} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Us',
  type: 'document',
  fields: [
    defineField({name: 'tagline', title: 'Page Tagline', type: 'string'}),
    defineField({
      name: 'team',
      title: 'Team Members',
      type: 'array',
      of: [{ type: 'personCard' }],
    }),
    defineField({
      name: 'players',
      title: 'Our Players',
      type: 'array',
      of: [{ type: 'personCard' }],
    }),
    defineField({
      name: 'bodyText',
      title: 'Body Text',
      type: 'reference',
      to: [{ type: 'generalDocument' }],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'About Us' }),
  },
});