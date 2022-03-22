import Actors from './components/Actors'
import Movie from './components/Movie'
import Movies from './components/Movies'

function App() {
  // Write JavaScript, use Hooks, add state and more

  return (
    <main className="mx-auto max-w-sm mt-6 border-2 p-6">
      <Movie />
      <Movies />
      <Actors />
    </main>
  )
}

export default App
