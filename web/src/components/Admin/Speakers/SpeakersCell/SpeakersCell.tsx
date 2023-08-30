import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SpeakerRow from '../SpeakerRow/SpeakerRow'

export const QUERY = gql`
  query PartnersQuery {
    partnersSpeakersOnly {
      createdAt
      id
      inPersonCode
      inPersonDiscount
      inPersonEndDate
      avatar
      name
      slug
      virtualCode
      virtualDiscount
      virtualEndDate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ partnersSpeakersOnly }: CellSuccessProps) => {
  return partnersSpeakersOnly.map((speaker) => {
    return <SpeakerRow key={speaker.id} speaker={speaker} />
  })
}
