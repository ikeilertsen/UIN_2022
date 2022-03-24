import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getActorInfo } from '../lib/services/movieService'

export default function AboutActor() {
  // eslint-disable-next-line camelcase
  const { slug } = useParams()
  const [actorInfo, setActorInfo] = useState([])

  const fetchActor = async (slugn) => {
    const actorData = await getActorInfo(slugn)
    setActorInfo(actorData)
  }

  useEffect(() => {
    fetchActor(slug)
  }, [slug])
  console.log(actorInfo)

  return (
    <div>
      {slug?.map((movies, index) => (
        <div key={index}>
          {(() => {
            if (index === 0) {
              return (
                <>
                  <h2>{movies.actor}</h2>
                  <p>Played in:</p>
                </>
              )
            }
          })()}
          <li>{movies.title}</li>
        </div>
      ))}
    </div>
  )
}
