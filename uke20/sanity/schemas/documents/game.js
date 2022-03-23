export default {
  name: 'game',
  type: 'document',
  title: 'Game',
  fields: [
    {
      type: 'string',
      name: 'email',
      title: 'e-post',
    },
    {
      type: 'reference',
      name: 'quiz',
      title: 'quiz',
      to: { type: 'quiz' },
    },
  ],
}
