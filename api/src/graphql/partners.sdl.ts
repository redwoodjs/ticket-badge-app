export const schema = gql`
  type Partner {
    id: Int!
    name: String!
    slug: String!
    logo: String
    avatar: String
    virtualCode: String
    virtualDiscount: Int
    virtualEndDate: DateTime
    inPersonCode: String
    inPersonDiscount: Int
    inPersonEndDate: DateTime
    inPersonUrl: String
    Participants: [Participant]!
    createdAt: DateTime!
    PartnerType: PartnerType!
    countParticipants: Int
  }

  type Query {
    partners: [Partner!]! @requireAuth
    partnersCompaniesOnly: [Partner!]! @requireAuth
    partnersSpeakersOnly: [Partner!]! @requireAuth
    partner(id: Int!): Partner @requireAuth
    partnerBySlug(slug: String!): Partner @skipAuth
  }

  input CreatePartnerInput {
    name: String!
    slug: String!
    logo: String
    avatar: String
    virtualCode: String
    virtualDiscount: Int
    virtualEndDate: DateTime
    inPersonCode: String
    inPersonUrl: String
    inPersonDiscount: Int
    inPersonEndDate: DateTime
    partnerTypeId: Int!
  }

  input UpdatePartnerInput {
    name: String
    slug: String
    logo: String
    avatar: String
    virtualCode: String
    virtualDiscount: Int
    virtualEndDate: DateTime
    inPersonCode: String
    inPersonUrl: String
    inPersonDiscount: Int
    inPersonEndDate: DateTime
  }

  type Mutation {
    createPartner(input: CreatePartnerInput!): Partner! @requireAuth
    updatePartner(id: Int!, input: UpdatePartnerInput!): Partner! @requireAuth
    deletePartner(id: Int!): Partner! @requireAuth
  }
`
