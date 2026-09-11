import {defineType, defineField} from 'sanity'

export const newsletter = defineType({
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string', title: 'Admin Name (only visible here)'}),
    defineField({name: 'subject', type: 'string', title: 'Subject Line'}),
    defineField({name: 'title', type: 'string'}),
    defineField({name: 'subtitle', type: 'string'}),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Email Body',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            defineField({ name: 'alt', type: 'string', title: 'Alt Text' }),
            defineField({ name: 'caption', type: 'string', title: 'Caption' }),
          ]
        },
      ],
    }),
  ],
})
