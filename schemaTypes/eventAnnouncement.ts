import {defineType, defineField} from 'sanity'

export const eventAnnouncement = defineType({
  name: 'eventAnnouncement',
  title: 'Event Announcement',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string', title: 'Admin Name (only visible here)'}),
    defineField({name: 'subject', type: 'string', title: 'Subject Line'}),
    defineField({name: 'event', type: 'reference', to: [{type: 'event'}]}),
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
