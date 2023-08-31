export const schema = gql`
  type User {
    id: Int!
    email: String!
    confirmed: Boolean!
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User @skipAuth
  }

  input CreateUserInput {
    email: String!
    confirmed: Boolean!
  }

  input UpdateUserInput {
    email: String
    confirmed: Boolean
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @skipAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @skipAuth
    deleteUser(id: Int!): User! @skipAuth
  }
`
