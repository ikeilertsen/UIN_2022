import { Routes, Route } from 'react-router-dom'
import AboutActor from './components/AboutActor'
import Actors from './components/Actors'
import HomePage from './components/HomePage'
import Movie from './components/Movie'
import Movies from './components/Movies'
import Navigation from './components/Navigation'
import Layout from './layout/Layout'

function App() {
  // Write JavaScript, use Hooks, add state and more

  return (
    <div id="grid">
      <main className="mx-auto max-w-sm mt-6 border-2 p-6">
        <Navigation />
        <Routes>
          <Route index element={<HomePage />} />
          <Route element={<Layout />} />
          <Route path="/" element={<Movie />} />
          <Route path="actors">
            <Route index element={<Actors />} />
            <Route path=":slug" element={<AboutActor />} />
          </Route>
          <Route path="movies" element={<Movies />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
