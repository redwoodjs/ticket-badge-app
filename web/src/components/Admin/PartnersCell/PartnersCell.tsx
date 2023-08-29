import type { PartnersQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PartnerRow from '../PartnerRow/PartnerRow'
import PartnersTable from '../PartnersTable/PartnersTable'

export const QUERY = gql`
  query PartnersQuery {
    partnersCompaniesOnly {
      createdAt
      id
      inPersonCode
      inPersonDiscount
      inPersonEndDate
      logo
      name
      slug
      virtualCode
      virtualDiscount
      virtualEndDate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  partnersCompaniesOnly,
}: CellSuccessProps<PartnersQuery>) => {
  return partnersCompaniesOnly.map((partner) => {
    return <PartnerRow key={partner.id} partner={partner} />
  })
}
