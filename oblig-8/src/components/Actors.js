import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getActor } from '../lib/services/movieService'

export default function Actors() {
  const [data, setData] = useState([])
  useEffect(() => {
    const getActorData = async () => {
      const actors = await getActor()
      setData(actors)
    }
    getActorData()
  }, [])
  console.log(data)
  return (
    <div>
      <article>
        <p>home / actors</p>
        <h1>Featured Actors:</h1>
        <ul>
          {data.map((actors) => (
            <li key={actors._id}>
              <Link to={'/actors/' + actors?.slug}>{actors.full_name}</Link>
            </li>
          ))}
        </ul>
      </article>
    </div>
  )
}
