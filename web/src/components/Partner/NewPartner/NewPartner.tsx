import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PartnerForm from 'src/components/Partner/PartnerForm'

import type { CreatePartnerInput } from 'types/graphql'

const CREATE_PARTNER_MUTATION = gql`
  mutation CreatePartnerMutation($input: CreatePartnerInput!) {
    createPartner(input: $input) {
      id
    }
  }
`

const NewPartner = () => {
  const [createPartner, { loading, error }] = useMutation(
    CREATE_PARTNER_MUTATION,
    {
      onCompleted: () => {
        toast.success('Partner created')
        navigate(routes.partners())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input: CreatePartnerInput) => {
    createPartner({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Partner</h2>
      </header>
      <div className="rw-segment-main">
        <PartnerForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPartner
