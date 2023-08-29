import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SpeakersPage = () => {
  return (
    <>
      <MetaTags title="Speakers" description="Speakers page" />

      <h1>SpeakersPage</h1>
      <p>
        Find me in <code>./web/src/pages/SpeakersPage/SpeakersPage.tsx</code>
      </p>
      <p>
        My default route is named <code>speakers</code>, link to me with `
        <Link to={routes.speakers()}>Speakers</Link>`
      </p>
    </>
  )
}

export default SpeakersPage
