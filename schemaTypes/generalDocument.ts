import {defineType, defineField} from 'sanity'

export const generalDocument = defineType({
  name: 'generalDocument',
  title: 'General Document',
  type: 'document',
  preview: {
    select: {title: 'title', name: 'name'},
    prepare: ({title, name}: {title?: string; name?: string}) => ({
      title: title || name,
    }),
  },
  fields: [
    defineField({name: 'name', title: 'Admin Name (only visible here)', type: 'string'}),
    defineField({
      name: 'logo',
      title: 'Logo (optional)',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({name: 'alt', type: 'string', title: 'Alt Text'}),
      ],
    }),
    defineField({name: 'title', title: 'Title', type: 'string'}),
    defineField({name: 'subtitle', title: 'Subtitle (optional)', type: 'string'}),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            defineField({name: 'alt', type: 'string', title: 'Alt Text'}),
            defineField({name: 'caption', type: 'string', title: 'Caption'}),
          ],
        },
        {
          type: 'reference',
          title: 'Embed Document',
          to: [{type: 'generalDocument'}],
        },
      ],
    }),
  ],
})
