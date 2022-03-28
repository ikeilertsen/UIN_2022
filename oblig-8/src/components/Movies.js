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
      <article>
        <p>home / movies</p>
        <h1>Featured Movies:</h1>
        <ul>
          {data.map((movie) => (
            <li key={movie.title}>{movie.title}</li>
          ))}
        </ul>
      </article>
    </div>
  )
}
