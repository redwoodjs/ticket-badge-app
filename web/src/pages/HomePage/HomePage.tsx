import ParticipantCell from 'src/components/ParticipantCell'
import { Constants } from 'src/utils/Constants'

interface Props {
  slug: string
}

/**
 *  Within the ParticipantForm component (nested inside the ParticipantCell
 * component), there's a `useEffect` that looks for a cookie called
 * `participantId`. If that cookie exists, then the user will be redirected
 * to the /customize page
 */

const HomePage = ({ slug }: Props) => {
  if (!slug) {
    slug = Constants.DEFAULT_PARTNER_SLUG
  }

  return (
    <>
      <main className="page">
        <ParticipantCell slug={slug.toLowerCase()} />
      </main>
    </>
  )
}

export default HomePage
