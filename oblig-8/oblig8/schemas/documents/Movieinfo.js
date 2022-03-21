export default {
  type: 'document',
  name: 'movieschema',
  title: 'Movies',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'reference',
      name: 'actor',
      title: 'Actor',
      to: [{ type: 'actors' }],
    },
  ],
}
