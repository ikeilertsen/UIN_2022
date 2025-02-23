export default {
  type: 'document',
  name: 'quiz',
  title: 'Quiz',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Generer slug',
      description: 'Skriv her',
    },
    {
      type: 'slug',
      name: 'test',
      title: 'Svar',
      options: {
        source: 'title',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (rule) => rule.required(),
    },
    {
      type: 'array',
      name: 'questions',
      title: 'Spørsmål og svar',
      of: [{ type: 'question' }],
    },
    {
      type: 'reference',
      name: 'category',
      title: 'Kategori',
      to: { type: 'category' },
    },
  ],
}
