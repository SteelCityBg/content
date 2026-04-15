import {defineField, defineType} from 'sanity'

export const personCard = defineType({
  name: 'personCard',
  type: 'object',
  title: 'Reusable Person Card for the website',
  fields: [
    defineField({ name: 'name', type: 'string' }),
    defineField({ name: 'profilePic', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'bio',
      title: 'Bio (200 characters max)',
      type: 'text',
      validation: (Rule) => Rule.max(200).error('Bio should be 200 characters or less'),
    }),
  ]
})

