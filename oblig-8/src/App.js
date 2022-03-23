import { Routes, Route } from 'react-router-dom'
import Actors from './components/Actors'
import Movie from './components/Movie'
import Movies from './components/Movies'
import Navigation from './components/Navigation'

function App() {
  // Write JavaScript, use Hooks, add state and more

  return (
    <div>
      <main className="mx-auto max-w-sm mt-6 border-2 p-6">
        <Navigation />
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/" element={<Actors />} />
          <Route path="/" element={<Movies />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
