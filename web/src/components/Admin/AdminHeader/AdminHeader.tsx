import { Link, NavLink, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const AdminHeader = () => {
  const { logOut } = useAuth()

  const handleLogout = () => {
    logOut()
  }

  return (
    <div className="mb-11 mt-5 flex justify-between">
      <Link to={routes.dashboard()}>
        <img src="/images/logo.svg" alt="RedwoodJS Conf" />
      </Link>

      <nav className="admin-nav">
        <ul className="flex items-center gap-x-8 font-wide">
          <li>
            <NavLink to={routes.dashboard()} activeClassName="active-nav">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.speakers()} activeClassName="active-nav">
              Speakers
            </NavLink>
          </li>
          <li>
            <NavLink to={routes.partners()} activeClassName="active-nav">
              Partners
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default AdminHeader
