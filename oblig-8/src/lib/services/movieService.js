import client from '../client'

const movieFields = `
  _id,
  title,
`

const actorFields = `
  _id,
  full_name,
`

export async function getMovies() {
  const data = await client.fetch(`*[_type == "movieschema"]{${movieFields}}`)
  console.log(data)
  return data
}

export async function getActor() {
  const data = await client.fetch(`*[_type == "actors"]{${actorFields}}`)
  console.log(data)
  return data
}
