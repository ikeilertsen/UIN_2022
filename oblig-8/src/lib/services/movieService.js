import client from '../client'

const movieFields = `
  _id,
  title,
`

const actorFields = `
  _id,
  full_name,
  "slug": slug.current
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

export async function getActorInfo(slug) {
  const data = await client.fetch(
    `*[_type == "actors" && name.current == $slug]{...}}`,
    { slug }
  )
  return data[0]
}

// gjøre spørringene større
