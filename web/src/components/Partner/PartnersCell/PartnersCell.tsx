import type { FindPartners } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Partners from 'src/components/Partner/Partners'

export const QUERY = gql`
  query FindPartners {
    partners {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No partners yet. '}
      <Link to={routes.newPartner()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ partners }: CellSuccessProps<FindPartners>) => {
  return <Partners partners={partners} />
}
