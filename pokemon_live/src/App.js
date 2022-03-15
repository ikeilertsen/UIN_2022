import React, { useState } from 'react'
// import MyComponent from './components/MyComponent'
import Pokemons from './components/Pokemons'

// const pokemons = [
// { tid: 1, name: 'Bulbasaur' },
// { tid: 2, name: 'Ivysaur' },
// ]

function App() {
  const [pokemons, setPokemons] = useState([])

  const getPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
    const data = await response.json()
    console.log(data.results)
    setPokemons(data.results)
  }

  return (
    <main className="mx-auto max-w-sm mt-6 border-2 p-6">
      <Pokemons pokemons={pokemons} />
      <button type="button" onClick={getPokemons}>
        Hent Pokemons
      </button>
    </main>
  )
}

export default App
