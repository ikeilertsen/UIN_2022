import { Routes, Route } from 'react-router-dom'
// import MyComponent from './components/MyComponent'
import Quizes from './pages/quizes'
import Quiz from './pages/quiz'
import Layout from './layout/Layout'

function App() {
  // Write JavaScript, use Hooks, add state and more
  // const getSanityData = () => {
  // getQuizzes()
  // }
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Quizes />} />
        <Route path="quiz">
          <Route index element={<Quizes />} />
          <Route path=":slug" element={<Quiz />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
