import {defineField, defineType} from 'sanity'

export const comingSoonCard = defineType({
  name: 'comingSoonCard',
  type: 'object',
  title: 'Reusable ComingSoon Card for the website',
  fields: [
    defineField({name: 'name', title: 'Admin Name (only visible here)', type: 'string'}),
    defineField({name: 'displayName', title: 'Coming Soon Name (what shows on the website)', type: 'string'}),
    defineField({name: 'date', title: 'Coming Soon Date', type: 'date'}),
    defineField({name: 'displayDate', title: 'Display Date (what shows on the website)', type: 'string'}),
    defineField({name: 'location', type: 'string'}),
    defineField({name: 'thumbnail', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'website', title: 'Website URL', type: 'url' }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})

