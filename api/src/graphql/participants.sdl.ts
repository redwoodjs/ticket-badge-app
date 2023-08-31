export const schema = gql`
  type Participant {
    id: Int!
    name: String
    email: String!
    company: String
    avatar: String
    githubId: Int
    location: String
    twitter: String
    partner: Partner!
    partnerId: Int!
    createdAt: DateTime!
  }

  type Query {
    participants: [Participant!]! @requireAuth
    participant(id: Int!): Participant @skipAuth
    participant(id: Int!): Participant @skipAuth
  }

  input CreateParticipantInput {
    name: String
    email: String!
    company: String
    avatar: String
    githubId: Int
    location: String
    twitter: String
    partnerId: Int!
  }

  input UpdateParticipantInput {
    name: String
    email: String
    company: String
    avatar: String
    githubId: Int
    location: String
    twitter: String
    partnerId: Int
  }

  type Mutation {
    createParticipant(input: CreateParticipantInput!): Participant! @skipAuth
    updateParticipant(id: Int!, input: UpdateParticipantInput!): Participant!
      @requireAuth
    deleteParticipant(id: Int!): Participant! @requireAuth
  }
`
