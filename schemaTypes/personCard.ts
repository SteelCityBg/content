import {defineField, defineType} from 'sanity'

export const personCard = defineType({
  name: 'personCard',
  type: 'object',
  title: 'Reusable Person Card for the website',
  fields: [
    defineField({ name: 'name', type: 'string' }),
    defineField({ name: 'profilePic', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', type: 'text' }),
  ]
})

