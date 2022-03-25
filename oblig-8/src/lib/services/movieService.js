import client from '../client'

const movieFields = `
  _id,
  title,
`

const actorsFields = `
  _id,
  full_name,
  "slug": name.current
`
const actorFields = `
  _id,
  full_name,
  "slug": name.current,
  "movies": *[_type == "movieschema" && references(^._id)].title
`

export async function getMovies() {
  const data = await client.fetch(`*[_type == "movieschema"]{${movieFields}}`)
  console.log(data)
  return data
}

export async function getActor() {
  const data = await client.fetch(`*[_type == "actors"]{${actorsFields}}`)
  console.log(data)
  return data
}

export async function getActorInfo(slug) {
  const data = await client.fetch(
    `*[_type == "actors" && name.current == $slug]{${actorFields}}`,
    { slug }
  )
  return data?.[0]
}

// gjøre spørringene større
// skrive ut filmene (done)
// evt. film -> actor
