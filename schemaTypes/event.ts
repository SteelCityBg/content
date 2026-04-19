import {defineType, defineField} from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Admin Name (only visible here)', type: 'string'}),
    defineField({name: 'displayName', title: 'Event Name (what shows on the website)', type: 'string'}),
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
      title: 'Date (required for sorting)',
      type: 'datetime',
      options: {
        timeStep: 15,
      },
    }),
    defineField({
      name: 'useDate',
      title: 'Date Display',
      type: 'string',
      options: {
        list: [
          { title: 'Display as Date & Time', value: 'date' },
          { title: 'Display as Date Range', value: 'range' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'dateRange',
      title: 'Date Range Text',
      type: 'string',
    }),
    defineField({name: 'location', type: 'reference', to: [{type: 'venue'}]}),
    defineField({
      name: 'description',
      type: 'string',
    }),
    defineField({
      name: 'extendedDescription',
      type: 'array',
      title: 'Extended Description (optional whatevs)',
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
    defineField({
      name: 'eventPhotos',
      type: 'array',
      title: 'Photos from the Event',
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
  orderings: [
    {
      title: 'Date, Newest First',
      name: 'dateDesc',
      by: [
        { field: 'date', direction: 'desc' }
      ]
    },
  ],
})
