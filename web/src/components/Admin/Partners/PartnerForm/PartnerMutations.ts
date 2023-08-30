// TODO: Duplicate mutation names inside SpeakerMutations.ts

export const CREATE_PARTNER_MUTATION = gql`
  mutation createPartnerMutation(
    $name: String!
    $slug: String!
    $avatar: String
    $logo: String
    $virtualCode: String
    $virtualDiscount: Int
    $virtualEndDate: DateTime
    $inPersonCode: String
    $inPersonDiscount: Int
    $inPersonEndDate: DateTime
  ) {
    createPartner(
      input: {
        name: $name
        slug: $slug
        avatar: $avatar
        logo: $logo
        virtualCode: $virtualCode
        virtualDiscount: $virtualDiscount
        virtualEndDate: $virtualEndDate
        inPersonCode: $inPersonCode
        inPersonEndDate: $inPersonEndDate
        inPersonDiscount: $inPersonDiscount
        partnerTypeId: 2 # company
      }
    ) {
      id
      createdAt
    }
  }
`

export const UPDATE_PARTNER_MUTATION = gql`
  mutation updatePartnerMutation($id: Int!, $input: UpdatePartnerInput!) {
    updatePartner(id: $id, input: $input) {
      id
      createdAt
    }
  }
`

export const DELETE_PARTNER_MUTATION = gql`
  mutation DeletePartnerMutation($id: Int!) {
    deletePartner(id: $id) {
      id
      name
    }
  }
`
