import { NavLink } from "react-router-dom"

export default function NavMenu() {
  return (
    <header className="border-b shadow-sm mb-4">
      <nav className=" max-w-7xl mx-auto flex items-center justify-between px-6 py-3 bg-white">
        <div className="font-bold text-lg text-blue-600">RankingApp</div>

        <ul className="flex gap-6">
          <li>
            <NavLink to="/" className="text-gray-700 hover:text-blue-600">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/counter"
              className="text-gray-700 hover:text-blue-600"
            >
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fetch-data"
              className="text-gray-700 hover:text-blue-600"
            >
              Fetch Data
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/rank-movies"
              className="text-gray-700 hover:text-blue-600"
            >
              Rank Movies
            </NavLink>

            <NavLink
              to="/rank-albums"
              className="text-gray-700 hover:text-blue-600"
            >
              Rank Albums
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
