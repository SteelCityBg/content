import {defineType, defineField} from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({name: 'name', type: 'string'}),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          {title: 'Social', value: 'social'},
          {title: 'Tournament', value: 'tournament'},
          {title: 'Seminar', value: 'seminar'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      options: {
        timeStep: 15,
      },
    }),
    defineField({name: 'location', type: 'reference', to: [{type: 'venue'}]}),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'richText',
      type: 'array',
      title: 'Rich Text',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [{
            name: 'alt',
            type: 'string',
            title: 'Alt Text',
          }
          ]
        },
      ],
    }),
  ],
})
