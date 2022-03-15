export default {
  type: 'document',
  name: 'category',
  title: 'Kategori',
  fields: [
    {
      type: 'slug',
      name: 'hei',
      title: 'Kategori',
      options: {
        source: 'title',
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name.current',
    },
  },
}
