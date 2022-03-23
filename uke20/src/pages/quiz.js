import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Answers from '../components/Answers'
import Question from '../components/Question'
import { createGame, getQuizBySlug } from '../lib/services/quiz'

export default function Quiz() {
  const [current, setCurrent] = useState(0)
  const [content, setContent] = useState(null)
  const [answer, setAnswer] = useState([])
  const currentQuestion = content?.questions[current]
  const { slug } = useParams()
  const checkedAnswer = answer?.[current]
  const isWrong = !checkedAnswer

  useEffect(() => {
    const getQuiz = async () => {
      const data = await getQuizBySlug(slug)
      setContent(data)
    }
    getQuiz()
  }, [slug])

  const updateAnswer = (answer) => {
    setAnswer([
      ...answer.slice(0, current),
      answer,
      ...answer.slice(current + 1),
    ])
  }

  const progress = async () => {
    if (current + 1 > content?.question?.length) {
      await createGame({ email: '', quizId: _id })
    } else {
      setCurrent((prev) => prev + 1)
    }
  }

  return (
    <div>
      <h1 className="font-bold text-2xl mb-3 text-white">Quiz</h1>
      <section key={currentQuestion.key}>
        <Question title={currentQuestion?.title} />
        {currentQuestion?.Answers?.map((answer) => (
          <Answers
            key={answer._key}
            answer={answer}
            updateAnswer={answer._correct}
            checkedAnswer={checkedAnswer}
            isWrong={isWrong}
          />
        ))}
        <button
          type="button"
          className="rounded px-4 py-2 text-white"
          onClick={progress}
        />
      </section>
    </div>
  )
}

// <li className="mt-6">{question.title}</li>
