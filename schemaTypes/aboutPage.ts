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
      name: 'mission',
      title: 'Mission Statement',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'codeOfConduct',
      title: 'Code of Conduct',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'About Us' }),
  },
});