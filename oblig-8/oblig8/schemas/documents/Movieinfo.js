export default {
  type: 'document',
  name:'movie',
  title: 'Movies',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Title',
    },
    {
      type: 'refrence',
      name: 'actor',
      title: 'Actor',
    },
  ],
}