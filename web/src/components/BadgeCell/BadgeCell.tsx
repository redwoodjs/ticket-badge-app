import { SplitFullName } from 'src/helpers/NameHelpers'

import Badge from '../Badge/Badge'

export const QUERY = gql`
  query FindParticipant($id: Int!) {
    participant(id: $id) {
      id
      avatar
      name
      company
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ participant }) => {
  const { avatar, name, company } = participant
  const [firstName, lastName] = SplitFullName(name)

  return (
    <Badge
      avatar={avatar}
      firstName={firstName}
      lastName={lastName}
      company={company}
    />
  )
}
