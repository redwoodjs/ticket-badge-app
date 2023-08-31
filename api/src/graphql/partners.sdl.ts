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
    Participants: [Participant]!
    createdAt: DateTime!
    PartnerType: PartnerType!
    countParticipants: Int
  }

  type Query {
    partners: [Partner!]! @skipAuth
    partnersCompaniesOnly: [Partner!]! @skipAuth
    partnersSpeakersOnly: [Partner!]! @skipAuth
    partner(id: Int!): Partner @skipAuth
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
    inPersonDiscount: Int
    inPersonEndDate: DateTime
  }

  type Mutation {
    createPartner(input: CreatePartnerInput!): Partner! @skipAuth
    updatePartner(id: Int!, input: UpdatePartnerInput!): Partner! @skipAuth
    deletePartner(id: Int!): Partner! @skipAuth
  }
`
