import { defineField, defineType } from 'sanity'

export const venueSearch = defineType({
  name: 'venueSearch',
  title: 'Venue Search',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body Text',
      description: 'The main pitch to the community.',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
    defineField({
      name: 'formPlaceholder',
      title: 'Form Placeholder Text',
      type: 'string',
    }),
  ],
})