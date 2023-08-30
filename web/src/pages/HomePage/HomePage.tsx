import { MetaTags } from '@redwoodjs/web'

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
      <MetaTags
        title="Partner Badge"
        description="Register for a free ticket to the RedwoodJS Conference and level up your web development skills! Join industry experts and fellow React developers for insightful talks, workshops, and networking opportunities. Don't miss this chance to be part of the first RedwoodJS Conference. Sign up now!"
      />

      <main className="page">
        <ParticipantCell slug={slug} />
      </main>
    </>
  )
}

export default HomePage
