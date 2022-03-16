import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getQuizByCategory, getQuizzes } from '../lib/services/quiz'

// const quizzes = [
//   {
//     id: '1',
//     title: 'Sanity',
//     slug: 'slug-1',
//     category: 'react',
//   },
//   {
//     id: '1',
//     title: 'React',
//     slug: 'slug-1',
//     category: 'react',
//   },
// ]

const categories = ['Sanity', 'React']

export default function Quizes() {
  const [content, setContent] = useState([])
  const [loading, setLoading] = useState(false)

  const handleFilter = async (event) => {
    const category = event.target.value.toLowerCase
    let data
    if (category === 'alle') {
      data = await getQuizzes()
    } else {
      data = await getQuizByCategory(category)
    }

    setContent(data)
  }

  useEffect(() => {
    const listQuizes = async () => {
      setLoading(true)
      const data = await getQuizzes()
      setLoading(true)
      setContent(data)
    }
    listQuizes()
  }, [])
  if (loading) {
    return <p>Laster inn</p>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white">HIOF Quiz</h1>
      <label
        htmlFor="category"
        className="mt-6 block text-sm font-medium text-white"
      >
        Velg Kategori
      </label>
      <select
        id="category"
        defaultValue="Alle"
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-8 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        onChange={handleFilter}
      >
        <option value="Alle">Alle</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <ul className="mt-4 list-inside list-disc">
        {content.map((quiz) => (
          <li key={quiz.slug} className="mb-2 text-white underline">
            <Link to={`/quiz/${quiz.slug}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
