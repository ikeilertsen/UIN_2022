import { useState } from 'react'

export default function Posts({ post }) {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data.results)
    setPosts(data.results)
    console.log(post)
  }

  return (
    <section>
      <h1>Posts</h1>
      <ul>
        {posts.map((posts) => (
          <li key={post.name} />
        ))}
      </ul>
    </section>
  )
}
