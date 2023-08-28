export const schema = gql`
  type Participant {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    company: String!
    avatar: String!
    partner: Partner!
    partnerId: Int!
    createdAt: DateTime!
  }

  type Query {
    participants: [Participant!]! @requireAuth
    participant(id: Int!): Participant @requireAuth
  }

  input CreateParticipantInput {
    firstName: String!
    lastName: String!
    email: String!
    company: String!
    avatar: String!
    partnerId: Int!
  }

  input UpdateParticipantInput {
    firstName: String
    lastName: String
    email: String
    company: String
    avatar: String
    partnerId: Int
  }

  type Mutation {
    createParticipant(input: CreateParticipantInput!): Participant! @requireAuth
    updateParticipant(id: Int!, input: UpdateParticipantInput!): Participant!
      @requireAuth
    deleteParticipant(id: Int!): Participant! @requireAuth
  }
`
