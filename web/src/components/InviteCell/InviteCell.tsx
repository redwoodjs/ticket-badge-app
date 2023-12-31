import { Redirect, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ParticipantForm from '../ParticipantForm/ParticipantForm'

export const QUERY = gql`
  query InviteParticipantQuery($id: Int!) {
    participant(id: $id) {
      id
      avatar
      name
      ogImage
      partner {
        id
        name
        slug
        logo
        avatar
        virtualCode
        virtualDiscount
        virtualEndDate
        inPersonCode
        inPersonUrl
        inPersonDiscount
        inPersonEndDate
        PartnerType {
          name
        }
      }
    }
  }
`

export const Loading = () => <div />

export const Empty = () => <Redirect to={routes.home()} />

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ participant }) => {
  return (
    <>
      <MetaTags
        title={`${participant.name} Invites you to the RedwoodJS Conference`}
        description={`Join ${participant.name} at the RedwoodJS Conference! Get a free virtual ticket or 35% off an in-person pass. Experience the latest in web development and connect with leading experts. Register now for this must-attend event.`}
        ogUrl={`${process.env.REDWOOD_ENV_BASE_URL}/invite/${participant.id}`}
        ogContentUrl={
          participant.ogImage
            ? participant.ogImage
            : `${process.env.REDWOOD_ENV_BASE_URL}/images/og.png`
        }
      />
      <ParticipantForm
        partner={participant.partner}
        participantName={participant.name}
      />
    </>
  )
}
