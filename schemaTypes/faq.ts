import { defineType, defineField } from 'sanity'

export const faq = defineType({
  name: 'faq',
  title: 'Frequently Asked Question',
  type: 'document',
  fields: [
    defineField({ name: 'question', type: 'string' }),
    defineField({
      name: 'answer',
      type: 'array',
      title: 'Body',
      of: [{ type: 'block' }]
    }),
    defineField({ name: 'order', type: 'number', initialValue: 0 }),
  ],
})