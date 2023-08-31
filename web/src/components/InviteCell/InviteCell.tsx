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
        inPersonDiscount
        inPersonEndDate
        PartnerType {
          name
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

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
