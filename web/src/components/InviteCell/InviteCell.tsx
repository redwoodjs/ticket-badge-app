import { Redirect, routes } from '@redwoodjs/router'

import ParticipantForm from '../ParticipantForm/ParticipantForm'

export const QUERY = gql`
  query InviteParticipantQuery($id: Int!) {
    participant(id: $id) {
      avatar
      name
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
  console.log({ participant })
  return (
    <ParticipantForm
      partner={participant.partner}
      participantName={participant.name}
    />
  )
}
