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
      type: 'array',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
  ],
})
