export default {
  type: 'object',
  name: 'question',
  title: 'Spørsmål og Svar',
  fields: [
    {
      type: 'string',
      name: 'title',
      title: 'Spørsmål',
      validation: (Rule) => [
        Rule.required()
          .min(1)
          .max(2)
          .error('Required field with at least 1 and at most 2 entries.'),
        Rule.unique(),
      ],
    },
    {
      type: 'array',
      name: 'answers',
      title: 'Svar',
      of: [{ type: 'answer' }],
      validation: (Rule) =>
        Rule.custom((answeres) => {
          // console.log(answeres)
          return answeres?.filter((answer) => answer?.correct)?.length > 0
            ? true
            : 'Må ha minst ett riktig svar'
        }),
    },
  ],
}
