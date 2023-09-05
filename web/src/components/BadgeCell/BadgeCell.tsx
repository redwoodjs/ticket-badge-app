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

export const Loading = () => <div />

export const Empty = () => <Badge />

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ participant }) => {
  const { avatar, name, company } = participant
  const [firstName, lastName] = name ? SplitFullName(name) : ['', '']

  return (
    <Badge
      avatar={avatar}
      firstName={firstName}
      lastName={lastName}
      company={company}
    />
  )
}
