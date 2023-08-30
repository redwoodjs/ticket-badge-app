export const CREATE_SPEAKER_MUTATION = gql`
  mutation createPartnerMutation(
    $name: String!
    $slug: String!
    $avatar: String
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
        virtualCode: $virtualCode
        virtualDiscount: $virtualDiscount
        virtualEndDate: $virtualEndDate
        inPersonCode: $inPersonCode
        inPersonEndDate: $inPersonEndDate
        inPersonDiscount: $inPersonDiscount
        partnerTypeId: 1 # individual
      }
    ) {
      id
      createdAt
    }
  }
`

export const DELETE_SPEAKER_MUTATION = gql`
  mutation DeletePartnerMutation($id: Int!) {
    deletePartner(id: $id) {
      id
      name
    }
  }
`

export const UPDATE_SPEAKER_MUTATION = gql`
  mutation updatePartnerMutation($id: Int!, $input: UpdatePartnerInput!) {
    updatePartner(id: $id, input: $input) {
      id
      createdAt
    }
  }
`
