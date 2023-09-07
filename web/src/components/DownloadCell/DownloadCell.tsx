import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { SplitFullName } from 'src/helpers/NameHelpers'

import Tag from '../Tag/Tag'

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

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ participant }: CellSuccessProps) => {
  const { avatar, name, company } = participant
  const [firstName, lastName] = SplitFullName(name)

  return (
    <div className="center bg-[#170E13]">
      <Tag
        firstName={firstName}
        lastName={lastName}
        company={company}
        avatar={avatar}
      />
    </div>
  )
}
