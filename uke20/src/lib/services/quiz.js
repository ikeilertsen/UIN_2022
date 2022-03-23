import client from '../client'

const quizzesFields = `
  id,
  title,
  "slug": slug.current,
  "category": category->name.current,
`

const quizFields = `
  id,
  title,
  "slug": slug.current,
  "category": category->name.current,
  questions
`

export async function getQuizzes() {
  const data = await client.fetch(`*[_type == "quiz"]{${quizzesFields}}`)
  console.log(data)
  return data
}

export async function getQuizByCategory(category) {
  const data = await client.fetch(
    `*[_type == "quiz" && category->name.current==$category]{${quizzesFields}}`,
    { category }
  )
  return data
}

export async function getQuizBySlug(slug) {
  const data = await client.fetch(
    `*[_type == "quiz" && slug.current == $slug]{${quizFields}}`,
    { slug }
  )
  return data[0]
}

export async function createGame({ email, quizId }) {
  let data
  try {
    data = await client.create({
      _type: 'game',
      email,
      quiz: {
        _type: 'reference',
        _ref: quizId,
      },
    })
  } catch (error) {
    return 'Something went wrong'
  }
  return data
}
