import {defineType, defineField} from 'sanity'

export const sundayUpdate = defineType({
  name: 'sundayUpdate',
  title: 'Sunday Update',
  type: 'document',
  fields: [
    defineField({name: 'visible', title: 'Visible on Home Page', type: 'boolean', initialValue: false}),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'string'}),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            defineField({name: 'alt', type: 'string', title: 'Alt Text'}),
            defineField({name: 'caption', type: 'string', title: 'Caption'}),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Sunday Update'}),
  },
})
