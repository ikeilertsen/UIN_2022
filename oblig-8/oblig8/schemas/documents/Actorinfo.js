const actor {
  type: 'document',
  name: 'actors',
  title: 'Actors',
  fields: [
    {
      type: 'string',
      name: 'full name',
      title: 'Full Name',
    },
    {
      type: 'slug',
      name: 'name',
      title: 'En slug',
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

export default actor;