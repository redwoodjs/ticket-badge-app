import type { FindPartnerById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Partner from 'src/components/Partner/Partner'

export const QUERY = gql`
  query partnerBySlugQuery($slug: String!) {
    partnerBySlug(slug: $slug) {
      id
      name
      slug
      logo
      code
      discount
      endDate
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Partner not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  partnerBySlug,
}: CellSuccessProps<FindPartnerById>) => {
  return <pre>{JSON.stringify(partnerBySlug)}</pre>
}
