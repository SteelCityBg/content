import { defineType, defineField } from 'sanity'

export const question = defineType({
  name: 'question',
  title: 'Frequently Asked Questions',
  type: 'document',
  fields: [
    defineField({ name: 'question', type: 'string' }),
    defineField({ name: 'answer', type: 'string' }),
  ],
})