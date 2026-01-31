import { defineType, defineField } from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'eventName', type: 'string', title: 'Event Name' }),
    defineField({ name: 'eventType', type: 'string', title: 'Event Type' }),
  ]
})

export const faq = defineType({
  name: 'question',
  title: 'Frequently Asked Question',
  type: 'document',
  fields: [
    defineField({ name: 'question', type: 'string', title: 'Question' }),
    defineField({ name: 'answer', type: 'string', title: 'Answer' }),
  ]
})

export const schemaTypes = [event]