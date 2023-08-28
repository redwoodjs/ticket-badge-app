import type { EditPartnerById, UpdatePartnerInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PartnerForm from 'src/components/Partner/PartnerForm'

export const QUERY = gql`
  query EditPartnerById($id: Int!) {
    partner: partner(id: $id) {
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
const UPDATE_PARTNER_MUTATION = gql`
  mutation UpdatePartnerMutation($id: Int!, $input: UpdatePartnerInput!) {
    updatePartner(id: $id, input: $input) {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ partner }: CellSuccessProps<EditPartnerById>) => {
  const [updatePartner, { loading, error }] = useMutation(
    UPDATE_PARTNER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Partner updated')
        navigate(routes.partners())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdatePartnerInput,
    id: EditPartnerById['partner']['id']
  ) => {
    updatePartner({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Partner {partner?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PartnerForm
          partner={partner}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
