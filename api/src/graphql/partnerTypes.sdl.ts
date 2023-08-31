export const schema = gql`
  type PartnerType {
    id: Int!
    name: String!
    createdAt: DateTime!
    Partners: [Partner]!
  }

  type Query {
    partnerTypes: [PartnerType!]! @requireAuth
    partnerType(id: Int!): PartnerType @skipAuth
  }

  input CreatePartnerTypeInput {
    name: String!
  }

  input UpdatePartnerTypeInput {
    name: String
  }

  type Mutation {
    createPartnerType(input: CreatePartnerTypeInput!): PartnerType! @requireAuth
    updatePartnerType(id: Int!, input: UpdatePartnerTypeInput!): PartnerType!
      @requireAuth
    deletePartnerType(id: Int!): PartnerType! @requireAuth
  }
`
