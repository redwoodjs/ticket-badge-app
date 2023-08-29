import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const UsersPage = () => {
  return (
    <>
      <MetaTags title="Users" description="Users page" />

      <h1>UsersPage</h1>
      <p>
        Find me in <code>./web/src/pages/UsersPage/UsersPage.tsx</code>
      </p>
      <p>
        My default route is named <code>users</code>, link to me with `
        <Link to={routes.users()}>Users</Link>`
      </p>
    </>
  )
}

export default UsersPage
