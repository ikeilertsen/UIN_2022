import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
      <header id="header">I(vo)MDb</header>
      <nav>
        <ul id="navigation">
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
