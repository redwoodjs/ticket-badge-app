import type { FindInviteQuery, FindInviteQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindInviteQuery($id: Int!) {
    invite: invite(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindInviteQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  invite,
}: CellSuccessProps<FindInviteQuery, FindInviteQueryVariables>) => {
  return <div>{JSON.stringify(invite)}</div>
}
