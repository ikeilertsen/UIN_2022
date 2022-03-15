import React, { useState } from 'react'

export default function Pokemon({ url, name }) {
  const [xp, setXp] = useState(false)

  // const setXP = () => {
  // setXp(!xp)
  // }

  const getXp = async () => {
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data.results)
    setXp(data.base_experience)
  }

  return (
    <article>
      <h2>{name}</h2>
      <p>{url}</p>
      {xp ? <p>{xp}</p> : null}
      <button onClick={() => getXp(url)} type="button">
        See Experience
      </button>
    </article>
  )
}
