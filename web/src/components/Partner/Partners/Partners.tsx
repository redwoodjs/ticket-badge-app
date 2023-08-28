import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Partner/PartnersCell'
import { timeTag, truncate } from 'src/lib/formatters'

import type {
  DeletePartnerMutationVariables,
  FindPartners,
} from 'types/graphql'

const DELETE_PARTNER_MUTATION = gql`
  mutation DeletePartnerMutation($id: Int!) {
    deletePartner(id: $id) {
      id
    }
  }
`

const PartnersList = ({ partners }: FindPartners) => {
  const [deletePartner] = useMutation(DELETE_PARTNER_MUTATION, {
    onCompleted: () => {
      toast.success('Partner deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeletePartnerMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete partner ' + id + '?')) {
      deletePartner({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Slug</th>
            <th>Logo</th>
            <th>Code</th>
            <th>Discount</th>
            <th>End date</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {partners.map((partner) => (
            <tr key={partner.id}>
              <td>{truncate(partner.id)}</td>
              <td>{truncate(partner.name)}</td>
              <td>{truncate(partner.slug)}</td>
              <td>{truncate(partner.logo)}</td>
              <td>{truncate(partner.code)}</td>
              <td>{truncate(partner.discount)}</td>
              <td>{timeTag(partner.endDate)}</td>
              <td>{timeTag(partner.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.partner({ id: partner.id })}
                    title={'Show partner ' + partner.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPartner({ id: partner.id })}
                    title={'Edit partner ' + partner.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete partner ' + partner.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(partner.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PartnersList
