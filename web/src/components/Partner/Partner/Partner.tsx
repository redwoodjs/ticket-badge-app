import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

import type {
  DeletePartnerMutationVariables,
  FindPartnerById,
} from 'types/graphql'

const DELETE_PARTNER_MUTATION = gql`
  mutation DeletePartnerMutation($id: Int!) {
    deletePartner(id: $id) {
      id
    }
  }
`

interface Props {
  partner: NonNullable<FindPartnerById['partner']>
}

const Partner = ({ partner }: Props) => {
  const [deletePartner] = useMutation(DELETE_PARTNER_MUTATION, {
    onCompleted: () => {
      toast.success('Partner deleted')
      navigate(routes.partners())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeletePartnerMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete partner ' + id + '?')) {
      deletePartner({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Partner {partner.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{partner.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{partner.name}</td>
            </tr>
            <tr>
              <th>Slug</th>
              <td>{partner.slug}</td>
            </tr>
            <tr>
              <th>Logo</th>
              <td>{partner.logo}</td>
            </tr>
            <tr>
              <th>Code</th>
              <td>{partner.code}</td>
            </tr>
            <tr>
              <th>Discount</th>
              <td>{partner.discount}</td>
            </tr>
            <tr>
              <th>End date</th>
              <td>{timeTag(partner.endDate)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(partner.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPartner({ id: partner.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(partner.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Partner
