import { useState, useEffect } from 'react'
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
  return (
    <div>
      <p>home / actors</p>
      <h1>Actors:</h1>
      <ul>
        {data.map((actors) => (
          <li key={actors._id}>{actors.full_name}</li>
        ))}
      </ul>
    </div>
  )
}
