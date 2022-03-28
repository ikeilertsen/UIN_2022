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
  // actorinfo.movies er nå en array med filmene skuespillerene har spilt i

  return (
    <div>
      <p>home / movies / {actorInfo.full_name}</p>
      <h1>{actorInfo.full_name}</h1>
      <p>Seen in : </p>
      <ul>
        <li>{actorInfo.movies}</li>
      </ul>
    </div>
  )
}
