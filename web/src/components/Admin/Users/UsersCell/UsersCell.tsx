import UserRow from '../UserRow/UserRow'

export const QUERY = gql`
  query UsersQuery {
    users {
      email
      id
      confirmed
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ users }) => {
  return users.map((user) => {
    return <UserRow key={user.id} user={user} />
  })
}
