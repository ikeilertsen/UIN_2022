import { useState, useEffect } from 'react'
import { getMovies } from '../lib/services/movieService'

export default function Movies() {
  const [data, setData] = useState([])
  useEffect(() => {
    const getMovieData = async () => {
      const movies = await getMovies()
      setData(movies)
    }
    getMovieData()
  }, [])
  return (
    <div>
      <p>home / movies</p>
      <h1>Movies:</h1>
      <ul>
        {data.map((movie) => (
          <li key={movie.title}>{movie.title}</li>
        ))}
      </ul>
    </div>
  )
}
