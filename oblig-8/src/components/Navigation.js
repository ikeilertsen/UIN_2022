import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
      <h1>I(vo)MDb</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <NavLink to="movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="actors">Actors</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}
