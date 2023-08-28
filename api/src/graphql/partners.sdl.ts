export const schema = gql`
  type Partner {
    id: Int!
    name: String!
    slug: String!
    logo: String!
    code: String!
    discount: Int!
    endDate: DateTime
    Participants: [Participant]!
    createdAt: DateTime!
  }

  type Query {
    partners: [Partner!]! @requireAuth
    partner(id: Int!): Partner @requireAuth
    partnerBySlug(slug: String!): Partner @skipAuth
  }

  input CreatePartnerInput {
    name: String!
    slug: String!
    logo: String!
    code: String!
    discount: Int!
    endDate: DateTime
  }

  input UpdatePartnerInput {
    name: String
    slug: String
    logo: String
    code: String
    discount: Int
    endDate: DateTime
  }

  type Mutation {
    createPartner(input: CreatePartnerInput!): Partner! @requireAuth
    updatePartner(id: Int!, input: UpdatePartnerInput!): Partner! @requireAuth
    deletePartner(id: Int!): Partner! @requireAuth
  }
`
