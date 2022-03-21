import client from '../client'

const fields = `
  id,
  title,
  "slug": slug.current,
  "category": category->name.current,
`

export async function getMovies() {
  const data = await client.fetch(`*[_type == "movie"]{${fields}}`)
  console.log(data)
  return data
}

export async function getActor() {
  const data = await client.fetch(`*[_type == "actor"]{${fields}}`)
  console.log(data)
  return data
}
