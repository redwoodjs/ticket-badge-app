import type { partnerBySlugQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import ParticipantForm from '../ParticipantForm/ParticipantForm'

export const QUERY = gql`
  query partnerBySlugQuery($slug: String!) {
    partnerBySlug(slug: $slug) {
      id
      name
      slug
      logo
      avatar
      virtualCode
      virtualDiscount
      virtualEndDate
      inPersonCode
      inPersonUrl
      inPersonDiscount
      inPersonEndDate
    }
  }
`

export const Loading = () => <div />

export const Empty = () => <div>Partner not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  partnerBySlug,
}: CellSuccessProps<partnerBySlugQuery>) => {
  return <ParticipantForm partner={partnerBySlug} />
}
